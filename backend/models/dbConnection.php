<?php 
	class DbConnection {
        // private $host = "localhost";
        // private $userName = "root";
        // private $pass = "123456"; 
        // private $dbName = "petshop";

        // public function connect(){
        //     $conn = mysqli_connect($this->host, $this->userName, $this->pass, $this->dbName);
        //     if (!$conn) {
        //         echo("Connection failed: " . mysqli_connect_error());
        //     }
        //     echo "Connected successfully";
        //     return $conn;
        // }

        private static $instance = NULl;
        public static function getInstance() {
          if (!isset(self::$instance)) {
            try{
                self::$instance = mysqli_connect("localhost", "root", "123456", "petshop");
                if (!self::$instance){
                    throw new Exception("Cannot connect!",500);
                }
            }
            catch(Exception $e){
                http_response_code(404);
                throw $e;
                return;
            }
            // if (!self::$instance) {
            // }
            // echo "Connected successfully";
          }
          return self::$instance;
        }
    }
?>