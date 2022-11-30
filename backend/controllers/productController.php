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
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        echo json_encode(ProductModel::getPets($page));
                        break;
                    case "products":
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        echo json_encode(ProductModel::getPetProducts($page));
                        break;
                    case "foods":
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        echo json_encode(ProductModel::getPetFoods($page));
                        break;  
                    case "services":
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        echo json_encode(ProductModel::getPetServices($page));
                        break;  
                    case "searchByBreed":
                        // Code here to get params 
                        if (!isset($_GET["breed"])){
                            throw new Exception("Lack information", 400);
                        }
                        $breed = $_GET["breed"];
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        echo json_encode(ProductModel::searchByBreed($breed,$page));
                        break;
                    case "searchItem":
                        // Code here to get params 
                        if (!isset($_GET["keySearch"])){
                            throw new Exception("Lack information", 400);
                        }
                        if(isset($_GET["page"])){
                            $page = $_GET["page"];
                        } else {
                            $page = 1;
                        }
                        $keySearch = $_GET["keySearch"];
                        echo json_encode(ProductModel::searchItem($keySearch,$page));
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
