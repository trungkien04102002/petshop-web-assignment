<?php 
    require_once("dbConnection.php");

    class OrderModel{

        public static function createNewOrder($userID,$order,$paymentMethod){
            $sum = 0;
            foreach ($order as $item) {
                if ($item->type == "pet" ) 
                {
                    if (!OrderModel::checkAvaiablity($item->type,$item->id)){
                        throw new Exception("Some items are not available!",400);
                    }
                }
                else if (!OrderModel::checkAvaiablity($item->type,$item->id,$item->quantity)){
                    throw new Exception("Some items are not available!",400);
                }
            }
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('INSERT INTO orders(userID,paymentMethod) VALUES (?,?)');
            $stmt->bind_param('is', $userID,$paymentMethod); 
            $stmt->execute(); 
            $orderID = $conn->insert_id;
            foreach ($order as $item) {
                if ($item->type == "pet"){
                    $sum += OrderModel::addItemToOrder($orderID,$item->type, $item->id);
                }
                else {
                    $sum += OrderModel::addItemToOrder($orderID,$item->type, $item->id, $item->quantity);
                }
            }
            $discountedPrice = $sum;
            if (OrderModel::checkScore($userID)){
                $discountedPrice = (int)($discountedPrice * 0.9);
                $stmt = $conn->prepare('UPDATE users SET accumulatedScore = accumulatedScore - 200 WHERE userID = ?');
                $stmt->bind_param('i', $userID); 
                $stmt->execute(); 
                $stmt = $conn->prepare('UPDATE orders SET totalPrice = ?, discountedTotalPrice = ? WHERE orderID = ?');
                $stmt->bind_param('iii', $sum, $discountedPrice, $orderID); 
                $stmt->execute(); 
            }
            else {
                $stmt = $conn->prepare('UPDATE orders SET totalPrice = ? WHERE orderID = ?');
                $stmt->bind_param('ii', $sum, $orderID); 
                $stmt->execute();                
            }
            $stmt = $conn->prepare('SELECT * FROM orders WHERE orderID = ?');
            $stmt->bind_param('i', $orderID); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return ($row);   
        }

        public static function checkScore($userID){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT accumulatedScore FROM users WHERE userID = ?');
            $stmt->bind_param('i', $userID); 
            $stmt->execute();   
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return ($row["accumulatedScore"] >= 200);          
        }
        public static function checkAvaiablity($type, $id, $quantity = 0){
            $conn = DbConnection::getInstance();
            if ($type == "pet"){
                $stmt = $conn->prepare('SELECT isBought FROM pets WHERE petID = ?');
                $stmt->bind_param('i', $id); 
            }
            else if ($type == "food"){
                $stmt = $conn->prepare('SELECT quantity < ? as isBought FROM petFoods WHERE petFoodID = ?');
                $stmt->bind_param('ii', $quantity, $id); 
            }
            else if ($type == "service"){
                return true;
            }
            else if ($type == "product"){
                $stmt = $conn->prepare('SELECT quantity < ? as isBought FROM petProducts WHERE petProductID = ?');
                $stmt->bind_param('ii', $quantity, $id); 
            }
            else{
                throw new Exception("Not valid order",400);
            }
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return ($row["isBought"] == 0);           
        }

        public static function addItemToOrder($orderID, $type, $id, $quantity = 0){
            $conn = DbConnection::getInstance();
            if ($type == "pet"){
                $stmt = $conn->prepare("INSERT INTO orderedPet(orderID, petID, price) VALUES
                    (?,?,(SELECT unitPrice FROM pets WHERE petID = ?))");
                $stmt->bind_param('iii',$orderID, $id, $id); 
                $stmt->execute(); 
                $itemID = $conn->insert_id;
                $stmt = $conn->prepare("UPDATE pets SET isBought = true WHERE petID = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                $stmt = $conn->prepare("SELECT price FROM orderedPet WHERE orderedPetID = ? ");
                $stmt->bind_param('i',$itemID); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();
                return $row["price"];                
            }
            else if ($type == "service"){
                $stmt = $conn->prepare("INSERT INTO orderedService(orderID, petServiceID, price, quantity) VALUES
                    (?,?,(SELECT unitPrice FROM petServices WHERE petServiceID = ?),?)");
                $stmt->bind_param('iiii',$orderID, $id, $id,$quantity); 
                $stmt->execute(); 
                $itemID = $conn->insert_id;
                $stmt = $conn->prepare("SELECT price FROM orderedService WHERE orderedServiceID = ? ");
                $stmt->bind_param('i',$itemID); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();
                return $row["price"]*$quantity; 
            }
            else if ($type == "food") {
                $stmt = $conn->prepare("INSERT INTO orderedFood(orderID, petFoodID, price, quantity) VALUES
                    (?,?,(SELECT unitPrice FROM petFoods WHERE petFoodID = ?),?)");
                $stmt->bind_param('iiii',$orderID, $id, $id, $quantity); 
                $stmt->execute(); 
                $itemID = $conn->insert_id;
                $stmt = $conn->prepare("UPDATE petFoods SET quantity = quantity - ? WHERE petFoodID = ?");
                $stmt->bind_param('ii',$quantity,$id); 
                $stmt->execute(); 
                $stmt = $conn->prepare("SELECT price FROM orderedFood WHERE orderedFoodID = ? ");
                $stmt->bind_param('i',$itemID); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();
                return $row["price"]*$quantity;                 
            }
            else{
                $stmt = $conn->prepare("INSERT INTO orderedProduct(orderID, petProductID, price, quantity) VALUES
                    (?,?,(SELECT unitPrice FROM petProducts WHERE petProductID = ?),?)");
                $stmt->bind_param('iiii',$orderID, $id, $id, $quantity); 
                $stmt->execute(); 
                $itemID = $conn->insert_id;
                $stmt = $conn->prepare("UPDATE petProducts SET quantity = quantity - ? WHERE petProductID = ?");
                $stmt->bind_param('ii',$quantity,$id); 
                $stmt->execute(); 
                $stmt = $conn->prepare("SELECT price FROM orderedProduct WHERE orderedProductID = ? ");
                $stmt->bind_param('i',$itemID); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();
                return $row["price"]*$quantity;                 
            }
        }

        public static function getOrdersByUser($userID){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM orders WHERE userID = ?');
            $stmt->bind_param('s', $userID); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $orders = array();

            while ($row = $result->fetch_assoc()) {
                array_push($orders, $row);
            }
            return $orders;        
        }

        public static function getAllOrders(){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM orders');
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $orders = array();

            while ($row = $result->fetch_assoc()) {
                array_push($orders, $row);
            }       
            return $orders;
        }

        public static function updateIsPaid($orderID, $isPaid){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE orders SET isPaid = ? WHERE orderID = ?');
            $stmt->bind_param('ii', $isPaid,$orderID); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 

            return ["msg"=>"success"];
        }
    }
?>