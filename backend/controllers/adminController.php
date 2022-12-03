<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    $path = explode('/', parse_url($_SERVER["REQUEST_URI"])["path"]);

    require_once("../models/orderModel.php");
    require_once("../models/userModel.php");
    require_once("../models/productModel.php");

    require_once "../middlewares/auth.php";

    $method = $_SERVER["REQUEST_METHOD"];
    try{
        if (!isset(apache_request_headers()["Authorization"]) || ! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
            throw new Exception("Cannot find token!",400);
        }
        $user = authenticateAdmin($matches[1]);
        if (!isset($path[3])){
            throw new Exception("Cannot find route!",400);
        }
        switch ($method){
            case "GET":
                switch ($path[3]){
                    case "users":
                        echo json_encode(UserModel::getAllUsers());
                        break;
                    case "orders":
                        echo json_encode(OrderModel::getAllOrders());
                        break;
                }
                break;
            case "POST": 
                break;
            case "PATCH":
                parse_str(file_get_contents('php://input'),$data);
                switch ($path[3]){
                    case "dish":
                        echo json_encode("");
                        break;
                    case "orderstate":
                        echo json_encode(OrderModel::updateIsPaid($data["orderID"]));
                        break;
                }
                break;
            case "DELETE":
    
        }
    }
    catch(Exception $e){
        http_response_code($e->getCode());
        echo json_encode(Array("msg"=>$e->getMessage()));

    }

?>
