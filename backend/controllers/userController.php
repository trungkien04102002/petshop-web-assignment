<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $path = explode('/', parse_url($_SERVER["REQUEST_URI"])["path"]);

    require_once("../models/productModel.php");
    $method = $_SERVER["REQUEST_METHOD"];
    try{
        switch ($method){
            case "GET":

            case "POST": 
    
            case "PATCH":
    
            case "DELETE":
    
        }
    }
    catch(Exception $e){
        http_response_code($e->getCode());
        echo 'Message: ' .$e->getMessage();

    }

?>
