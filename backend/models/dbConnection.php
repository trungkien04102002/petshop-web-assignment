<?php 
	class DbConnection {

        private static $instance = NULl;
        public static function getInstance() {
          if (!isset(self::$instance)) {
            try{
                self::$instance = mysqli_connect("localhost", "root", "", "petshop");
                if (!self::$instance){
                    throw new Exception("Cannot connect!",500);
                }
            }
            catch(Exception $e){
                throw $e;
                return;
            }
          }
          return self::$instance;
        }
    }
?>