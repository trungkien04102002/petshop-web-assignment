<?php
    require_once __DIR__ . '/../vendor/autoload.php';
    require_once "../middlewares/auth.php";
    require_once("../models/userModel.php");

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header('Content-Type: application/json; charset=utf-8');

    use Firebase\JWT\JWT;
    $path = explode('/', parse_url($_SERVER["REQUEST_URI"])["path"]);

    $method = $_SERVER["REQUEST_METHOD"];
    try{
        switch ($method){
            case "GET":
                if (!isset(apache_request_headers()["Authorization"]) || ! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
                    throw new Exception("Cannot find token!",400);
                }
                $user = authenticate($matches[1]);
                if (!isset($path[3])){
                    throw new Exception("Cannot find route!",400);
                }
                switch ($path[3]){
                    case "profile":
                        echo json_encode(UserModel::getUserProfile($user["email"]));
                        break;
                    case "avatar":
                        $fileName = UserModel::getAvatarFileName($user["email"]);
                        $name = "../images/$fileName";
                        $fp = fopen($name, 'rb');
                        header("Content-Type: image/png");
                        header("Content-Length: " . filesize($name));
                        fpassthru($fp);
                        break;
                }

                
                break;
            case "POST": 

                if (!isset($path[3])){
                    throw new Exception("Cannot find route!",400);
                }
                switch ($path[3]){
                    case "signup":
                        if (UserModel::checkUserExistence($_POST["email"])){
                            throw new Exception("User has already existed!", 400);
                        }
                        else {
                            if (!isset($_POST["email"]) || !isset($_POST["fullName"]) || !isset($_POST["sex"]) || !isset($_POST["phoneNumber"]) || !isset($_POST["password"])){
                                throw new Exception("Lack information to create new account", 400);
                            }
                            $email = $_POST["email"];
                            $fullName = $_POST["fullName"];
                            $sex = $_POST["sex"];
                            $phoneNumber = $_POST["phoneNumber"];
                            $hashPassword =  password_hash($_POST["password"],PASSWORD_DEFAULT);
                            echo json_encode(UserModel::createNewUser($email, $fullName, $sex, $phoneNumber, $hashPassword));
                        };
                        break;
                    case "login":
                        $email = $_POST["email"];
                        $password = $_POST["password"];
                        if (!UserModel::checkUserExistence($email)){
                            throw new Exception("User has not signed up yet!", 400);
                        }
                        if (!UserModel::comparePassword($email,$password)){
                            throw new Exception("Your password is incorrect!", 400);
                        }
                        $key = "datkienhoangphu";
                        $user = UserModel::getUserProfile($email);
                        $date   = new DateTimeImmutable();
                        $expire_at = $date->modify('+5 days')->getTimestamp(); 
                        $payload = Array("userID"=>$user["userID"], "email"=>$user["email"],"isAdmin"=>$user["isAdmin"],"exp"=>$expire_at);
                        $jwt = JWT::encode($payload, $key, 'HS256');
                        $user["token"] = $jwt;
                        echo json_encode($user);
                        break;
                    case "test": 
                        echo file_get_contents('php://input');
                        return;
                        break;
                    case "avatar":
                        parse_str(file_get_contents('php://input'),$data);
                        if (!isset(apache_request_headers()["Authorization"]) || ! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
                            throw new Exception("Cannot find token!",400);
                        }
                        $user = authenticate($matches[1]);

                        $avatar = $_FILES["avatar"]["name"];
                        $extension = pathinfo($avatar)["extension"];
                        if ($extension != "png" && $extension != "jpg" && $extension != "jpeg"){
                            throw new Exception("We only allow png or jpg files!", 400);
                        }
                        
                        $tempname = $_FILES["avatar"]["tmp_name"];
                        $avatar = $user["userID"].".".$extension;
                        $folder = "../images/" . $avatar ;
                        if (!move_uploaded_file($tempname, $folder)) {
                            throw new Exception("Fail to change avatar!", 500);
                        } 
                        UserModel::updateAvatarName($user["email"],$avatar);
                        echo json_encode(Array("msg"=>"Success"));
                        break;
                }
                break;
            case "PATCH":
                parse_str(file_get_contents('php://input'),$data);
                if (!isset(apache_request_headers()["Authorization"]) || ! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
                    throw new Exception("Cannot find token!",400);
                }
                $user = authenticate($matches[1]);

                if (!isset($path[3])){
                    throw new Exception("Cannot find route!",400);
                }

                $email = $user["email"];              

                switch ($path[3]){
                    case "edit":
                        if (!isset($data["phoneNumber"]) || !isset($data["fullName"]) || !isset($data["sex"])){
                            throw new Exception("Lack information", 400);                           
                        }
                        $phoneNumber = $data["phoneNumber"];
                        $fullName = $data["fullName"];
                        $sex = $data["sex"];
                        echo json_encode(UserModel::editProfile($email,$fullName,$phoneNumber,$sex));
                        break;
                    case "editpassword":

                        if (!isset($data["password"])){
                            throw new Exception("Lack information", 400);                           
                        }
                        $hashPassword =  password_hash($data["password"],PASSWORD_DEFAULT);
                        echo json_encode(UserModel::updatePassword($user["userID"],$hashPassword));
                        break;
                    }
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
