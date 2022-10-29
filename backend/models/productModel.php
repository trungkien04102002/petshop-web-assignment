<?php 
    require_once("dbConnection.php");

    class ProductModel{
        public static function getProducts(){
            $conn = DbConnection::getInstance();
            $sql_query = "SELECT * FROM pets ";
            $res = mysqli_query($conn, $sql_query);
            $pets = array();
            while($row = mysqli_fetch_array($res)){
                $pets[] = array (
                    'id' => $row["petID"],
                    'name' => $row["name"],
                    'unitPrice'  => $row["unitPrice"]
                );
            }
            return json_encode($pets);
        }
    }
?>