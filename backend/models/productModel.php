<?php 
    require_once("dbConnection.php");

    class ProductModel{

        public static function getPets(){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM pets');
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $pets = array();
            while ($row = $result->fetch_assoc()) {
                array_push($pets, $row);
            }       
            return $pets;
        }
        
        public static function getPetProducts(){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM petProducts');
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $petProducts = array();
            while ($row = $result->fetch_assoc()) {
                array_push($petProducts, $row);
            }       
            return $petProducts;
        }
        
        public static function getPetFoods(){
            $conn = DbConnection::getInstance();
            $stmt = $conn -> prepare('SELECT * FROM petFoods');
            $stmt-> execute();
            $result = $stmt->get_result();
            $petFoods = array();
            while ($row = $result->fetch_assoc()){
                array_push($petFoods,$row);
            }
            return $petFoods;
        }

        public static function getPetServices(){
            $conn = DbConnection::getInstance();
            $stmt = $conn -> prepare('SELECT * FROM petServices');
            $stmt -> execute();
            $result = $stmt->get_result();
            $petServices = array();
            while ($row = $result->fetch_assoc()){
                array_push($petServices,$row);
            }
            return $petServices;
        }
        public static function searchByBreed($breed){ // To sort the list of pets by breed
            $conn = DbConnection::getInstance();
            $stmt = $conn -> prepare('SELECT * FROM pets WHERE breed = ?');
            $stmt->bind_param('s', $breed);
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
            /*
            // Get pets have name is same with keySearch
            $param = "%{$keySearch}%";
            $stmt0 = $conn -> prepare('SELECT * FROM pets WHERE name LIKE ?');
            //$param = preg_replace('/(?<!\\\)([%_])/', '\\\$1',$keySearch);
            //$stmt0 = $conn->prepare('SELECT * FROM pets WHERE name LIKE CONCAT('%',?,'%')');
            $stmt0->bind_param('s', $param);
            $stmt0-> execute();
            $result0 = $stmt0->get_result();
            $pets = array();
            while ($row = $result0->fetch_assoc()){
                array_push($pets,$row);
            } */
            $keySearch = "%$keySearch%"; // prepare the $name variable 
            $sql = "SELECT * FROM pets WHERE name LIKE ?"; // SQL with parameters
            $stmt = $conn->prepare($sql); 
            $stmt->bind_param('s', $keySearch); // here we can use only a variable
            $stmt->execute();
            $result0 = $stmt->get_result(); // get the mysqli result
            $pets = array();
            while ($row = $result0->fetch_assoc()){
                array_push($pets,$row);
            }

            // Get Products have name is same with keySearch
            $stmt1 = $conn -> prepare('SELECT * FROM petProducts WHERE name = ?');
            $stmt1->bind_param('s', $keySearch);
            $stmt1-> execute();
            $result1 = $stmt1->get_result();
            $petProducts = array();
            while ($row = $result1->fetch_assoc()){
                array_push($petProducts,$row);
            }
            // Get foods have name is same with keySearch
            $stmt2 = $conn -> prepare('SELECT * FROM petFoods WHERE name = ?');
            $stmt2->bind_param('s', $keySearch);
            $stmt2-> execute();
            $result2 = $stmt2->get_result();
            $petFoods = array();
            while ($row = $result2->fetch_assoc()){
                array_push($petFoods,$row);
            }
            // Get services have name is same with keySearch
            $stmt3 = $conn -> prepare('SELECT * FROM petServices WHERE name = ?');
            $stmt3->bind_param('s', $keySearch);
            $stmt3-> execute();
            $result3 = $stmt3->get_result();
            $petServices = array();
            while ($row = $result3->fetch_assoc()){
                array_push($petServices,$row);
            }

            // Combine arrray
            $combine_array= $pets + $petProducts + $petProducts + $petServices;
            return $combine_array;
        }
        
    }
?>
