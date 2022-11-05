<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header('Content-Type: application/json; charset=utf-8');

    $path = explode('/', parse_url($_SERVER["REQUEST_URI"])["path"]);

    require_once("../models/productModel.php");
    $method = $_SERVER["REQUEST_METHOD"];
    try{
        switch ($method){
           
            case "GET":
                switch($path[3]){
                    case "pets":
                        echo json_encode(ProductModel::getPets());
                        break;
                    case "products":
                        echo json_encode(ProductModel::getPetProducts());
                        break;
                    case "foods":
                        echo json_encode(ProductModel::getPetFoods());
                        break;  
                    case "services":
                        echo json_encode(ProductModel::getPetServices());
                        break;  
                    case "searchByBreed":
                        // Code here to get params 
                        if (!isset($_GET["breed"])){
                            throw new Exception("Lack information", 400);
                        }
                        $breed = $_GET["breed"];
                        echo json_encode(ProductModel::searchByBreed($breed));
                        break;
                    case "searchItem":
                        // Code here to get params 
                        if (!isset($_GET["keySearch"])){
                            throw new Exception("Lack information", 400);
                        }
                        $keySearch = $_GET["keySearch"];
                        echo json_encode(ProductModel::searchItem($keySearch));

                } 
                break;
            case "POST": 
                break;
            case "PATCH":
                break;
            case "DELETE":
                break;
    
        }
    }
    catch(Exception $e){
        http_response_code($e->getCode());
        echo json_encode(Array("msg"=>$e->getMessage()));

    }

?>
