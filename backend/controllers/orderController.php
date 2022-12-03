<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: 'Origin,X-Requested-With, Content-Type, Accept'");
    header("Access-Control-Allow-Methods: *");
    header('Content-Type: application/json; charset=utf-8');

    $path = explode('/', parse_url($_SERVER["REQUEST_URI"])["path"]);

    require_once("../models/orderModel.php");
    require_once "../middlewares/auth.php";

    $method = $_SERVER["REQUEST_METHOD"];
    try{
        if (!isset(apache_request_headers()["Authorization"]) || ! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
            throw new Exception("Cannot find token!",400);
        }
        $user = authenticate($matches[1]);

        switch ($method){
            case "GET":
                echo json_encode(OrderModel::getOrdersByUser($user['userID']));
                break;
            case "POST": 
                if (!isset($_POST["order"]) || !isset($_POST["paymentMethod"])){
                    throw new Exception("Lack information",400);
                }
                $order = json_decode($_POST["order"]);
                echo json_encode(OrderModel::createNewOrder($user["userID"], $order, $_POST["paymentMethod"]));
                break;
            case "PATCH":
    
            case "DELETE":
    
        }
    }
    catch(Exception $e){
        http_response_code($e->getCode());
        echo json_encode(Array("msg"=>$e->getMessage()));

    }

?>
