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
                $stmt = $conn->prepare('SELECT isBought FROM pets WHERE id = ?');
                $stmt->bind_param('i', $id); 
            }
            else if ($type == "food"){
                $stmt = $conn->prepare('SELECT quantity < ? as isBought FROM petFoods WHERE id = ?');
                $stmt->bind_param('ii', $quantity, $id); 
            }
            else if ($type == "service"){
                return true;
            }
            else if ($type == "product"){
                $stmt = $conn->prepare('SELECT quantity < ? as isBought FROM petProducts WHERE id = ?');
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
                $stmt = $conn->prepare("SELECT discountedPrice, unitPrice FROM pets WHERE id = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();

                if ($row["discountedPrice"] === NULL){
                    $price = $row["unitPrice"];
                }
                else {
                    $price = $row["discountedPrice"];
                }
                $stmt = $conn->prepare("INSERT INTO orderedPet(orderID, petID, price) VALUES
                    (?,?,?)");
                $stmt->bind_param('iii',$orderID, $id,$price); 
                $stmt->execute(); 
                $itemID = $conn->insert_id;
                $stmt = $conn->prepare("UPDATE pets SET isBought = true WHERE id = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                return $price;                
            }
            else if ($type == "service"){
                $stmt = $conn->prepare("SELECT discountedPrice, unitPrice FROM petServices WHERE id = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();

                if ($row["discountedPrice"] === NULL){
                    $price = $row["unitPrice"];
                }
                else {
                    $price = $row["discountedPrice"];
                }

                $stmt = $conn->prepare("INSERT INTO orderedService(orderID, petServiceID, price, quantity) VALUES
                    (?,?,?,?)");
                $stmt->bind_param('iiii',$orderID, $id, $price,$quantity); 
                $stmt->execute(); 
                return $price*$quantity; 
            }
            else if ($type == "food") {
                $stmt = $conn->prepare("SELECT discountedPrice, unitPrice FROM petFoods WHERE id = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();

                if ($row["discountedPrice"] === NULL){
                    $price = $row["unitPrice"];
                }
                else {
                    $price = $row["discountedPrice"];
                }

                $stmt = $conn->prepare("INSERT INTO orderedFood(orderID, petFoodID, price, quantity) VALUES
                    (?,?,?,?)");
                $stmt->bind_param('iiii',$orderID, $id, $price, $quantity); 
                $stmt->execute(); 
                $stmt = $conn->prepare("UPDATE petFoods SET quantity = quantity - ? WHERE id = ?");
                $stmt->bind_param('ii',$quantity,$id); 
                $stmt->execute(); 
                return $price*$quantity;                 
            }
            else{
                $stmt = $conn->prepare("SELECT discountedPrice, unitPrice FROM petProducts WHERE id = ?");
                $stmt->bind_param('i',$id); 
                $stmt->execute(); 
                $result = $stmt->get_result(); 
                $row = $result->fetch_assoc();

                if ($row["discountedPrice"] === NULL){
                    $price = $row["unitPrice"];
                }
                else {
                    $price = $row["discountedPrice"];
                }

                $stmt = $conn->prepare("INSERT INTO orderedProduct(orderID, petProductID, price, quantity) VALUES
                    (?,?,?,?)");
                $stmt->bind_param('iiii',$orderID, $id, $price, $quantity); 
                $stmt->execute(); 
                $stmt = $conn->prepare("UPDATE petProducts SET quantity = quantity - ? WHERE id = ?");
                $stmt->bind_param('ii',$quantity,$id); 
                $stmt->execute(); 
                return $price*$quantity;                 
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

        public static function updateIsPaid($orderID){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT isPaid,totalPrice,userID FROM orders WHERE orderID = ?');
            $stmt->bind_param('i',$orderID); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $order = $result->fetch_assoc();
            if ($order["isPaid"] == true) {
                throw new Exception("You have already confirmed this order!", 400);
            }
            $stmt = $conn->prepare('UPDATE orders SET isPaid = true WHERE orderID = ?');
            $stmt->bind_param('i',$orderID); 
            $stmt->execute(); 
            $score = (int) $order["totalPrice"]/10000;
            $stmt = $conn->prepare('UPDATE users SET accumulatedScore = accumulatedScore + ? WHERE userID = ?');
            $stmt->bind_param('ii',$score,$order["userID"]); 
            $stmt->execute();         
            

            return ["msg"=>"success"];
        }
    }
?>