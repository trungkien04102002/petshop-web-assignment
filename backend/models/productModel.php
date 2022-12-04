<?php 
    require_once("dbConnection.php");

    class ProductModel{

        public static function getPets($page){
            $conn = DbConnection::getInstance();
            if($page === 0)
            {
                $stmt = $conn->prepare('SELECT *, "pet" as type FROM pets');
                $stmt->execute(); 
                $result = $stmt->get_result(); 
            }
            else {   
                $record_per_page = 10;
                $start_from = ($page-1)*$record_per_page;
                $stmt = $conn->prepare('SELECT *, "pet" as type FROM pets LIMIT ?, ?');
                $stmt->bind_param('ss', $start_from,$record_per_page);
                $stmt->execute(); 
                $result = $stmt->get_result(); 
            }
            $pets = array();
            while ($row = $result->fetch_assoc()) {
                array_push($pets, $row);
            }       
            return $pets;
        }
        
        public static function getPetProducts($page){
            $conn = DbConnection::getInstance();
            if($page === 0)
            {
                $stmt = $conn->prepare('SELECT *, "product" as type FROM petProducts');
                $stmt->execute(); 
                $result = $stmt->get_result(); 
            }
            else{
                $record_per_page = 10;
                $start_from = ($page-1)*$record_per_page;
                $stmt = $conn->prepare('SELECT *, "product" as type FROM petProducts LIMIT ?, ?');
                $stmt->bind_param('ss', $start_from,$record_per_page);
                $stmt->execute(); 
                $result = $stmt->get_result();   
            }    
            $petProducts = array();
            while ($row = $result->fetch_assoc()) {
                array_push($petProducts, $row); 
            }
            return $petProducts;   
        }
        
        
        public static function getPetFoods($page){
            $conn = DbConnection::getInstance();
            if($page === 0)
            {
                $stmt = $conn->prepare('SELECT *, "food" as type FROM petFoods');
                $stmt->execute(); 
                $result = $stmt->get_result(); 
            }
            else{
                $record_per_page = 10;
                $start_from = ($page-1)*$record_per_page;
                $stmt = $conn->prepare('SELECT *, "food" as type FROM petFoods LIMIT ?, ?');
                $stmt->bind_param('ss', $start_from,$record_per_page);
                $stmt-> execute();
                $result = $stmt->get_result();
            }
            $petFoods = array();
            while ($row = $result->fetch_assoc()){
                array_push($petFoods,$row);
            }
            return $petFoods;
        }

        public static function getPetServices($page){
            $conn = DbConnection::getInstance();
            if($page === 0)
            {
                $stmt = $conn->prepare('SELECT *, "service" as type FROM petServices');
                $stmt->execute(); 
                $result = $stmt->get_result(); 
            }
            else {
                $record_per_page = 10;
                $start_from = ($page-1)*$record_per_page;
                $stmt = $conn->prepare('SELECT *, "service" as type FROM petServices LIMIT ?, ?');
                $stmt->bind_param('ss', $start_from,$record_per_page);
                $stmt -> execute();
                $result = $stmt->get_result();
            }
            
            $petServices = array();
            while ($row = $result->fetch_assoc()){
                array_push($petServices,$row);
            }
            return $petServices;
        }
        public static function searchByBreed($breed){ // To sort the list of pets by breed
            $conn = DbConnection::getInstance();
            $stmt = $conn -> prepare('SELECT *, "pet" as type FROM pets WHERE breed = ?');
            $stmt->bind_param('s',$breed);
            $stmt-> execute();
            $result = $stmt->get_result();
        
            $pets = array();
            while ($row = $result->fetch_assoc()){
                array_push($pets,$row);
            }
            return $pets;
        }

        public static function searchItem($keySearch){ // To search anythings in Pets, Services, Foods, Products table  
            $conn = DbConnection::getInstance();       
            $keySearch = "%$keySearch%";

            // Get pets have name is same with keySearch
            $sql = "SELECT *, 'pet' as type FROM pets WHERE name LIKE ?"; // SQL with parameters
            $stmt0 = $conn->prepare($sql); 
            $stmt0->bind_param('s', $keySearch); // here we can use only a variable
            $stmt0->execute();
            $result0 = $stmt0->get_result(); // get the mysqli result
            $pets = array();
            while ($row = $result0->fetch_assoc()){
                array_push($pets,$row);
            }

            // Get Products have name is same with keySearch
            $stmt1 = $conn -> prepare('SELECT *, "product" as type FROM petProducts WHERE name LIKE ?');
            $stmt1->bind_param('s', $keySearch);
            $stmt1-> execute();
            $result1 = $stmt1->get_result();
            $petProducts = array();
            while ($row = $result1->fetch_assoc()){
                array_push($petProducts,$row);
            }

            // Get foods have name is same with keySearch
            $stmt2 = $conn -> prepare('SELECT *, "food" as type FROM petFoods WHERE name LIke ?');
            $stmt2->bind_param('s', $keySearch);
            $stmt2-> execute();
            $result2 = $stmt2->get_result();
            $petFoods = array();
            while ($row = $result2->fetch_assoc()){
                array_push($petFoods,$row);
            }
            // Get services have name is same with keySearch
            $stmt3 = $conn -> prepare('SELECT *, "service" as type FROM petServices WHERE name LIKE ?');
            $stmt3->bind_param('s', $keySearch);
            $stmt3-> execute();
            $result3 = $stmt3->get_result();
            $petServices = array();
            while ($row = $result3->fetch_assoc()){
                array_push($petServices,$row);
            }

            // Combine array
            $combine_array = array_merge($pets,$petProducts,$petFoods,$petServices);
            return $combine_array;
        }

        public static function editPet($id, $name, $unitPrice, $breed,$isBought,$imageUrl,$age,$discountedPrice){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE pets SET name = ?, unitPrice = ?, breed = ?, isBought = ?, imageUrl = ?, age = ?, discountedPrice = ? WHERE id = ?');
            $stmt->bind_param('sisisiii', $name,$unitPrice,$breed,$isBought,$imageUrl,$age,$discountedPrice, $id); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $stmt = $conn->prepare('SELECT * FROM pets WHERE id = ?');
            $stmt->bind_param('i', $id);
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return $row;          
        }

        public static function editFood($id, $name, $unitPrice,$imageUrl,$quantity,$discountedPrice){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE petFoods SET name = ?, unitPrice = ?, imageUrl = ?, quantity = ?, discountedPrice = ? WHERE id = ?');
            $stmt->bind_param('sisiii', $name,$unitPrice,$imageUrl,$quantity,$discountedPrice, $id); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $stmt = $conn->prepare('SELECT * FROM petFoods WHERE id = ?');
            $stmt->bind_param('i', $id);
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return $row;          
        }

        public static function editProduct($id, $name, $unitPrice, $imageUrl, $category,$quantity, $discountedPrice){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE petProducts SET name = ?, unitPrice = ?, imageUrl = ?, category = ?, quantity = ?, discountedPrice = ? WHERE id = ?');
            $stmt->bind_param('sissiii', $name,$unitPrice,$imageUrl, $category, $quantity, $discountedPrice, $id ); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $stmt = $conn->prepare('SELECT * FROM petProducts WHERE id = ?');
            $stmt->bind_param('i', $id);
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return $row;          
        }

        public static function editService($id, $name, $unitPrice, $imageUrl,$discountedPrice){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE petServices SET name = ?, unitPrice = ?, imageUrl = ?, discountedPrice = ? WHERE id = ?');
            $stmt->bind_param('sisii', $name,$unitPrice,$imageUrl,$discountedPrice, $id ); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $stmt = $conn->prepare('SELECT * FROM petServices WHERE id = ?');
            $stmt->bind_param('i', $id);
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return $row;          
        }
        
    }
?>
