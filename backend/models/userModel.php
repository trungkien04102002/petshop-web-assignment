<?php 
    require_once("dbConnection.php");

    class UserModel{
        public static function checkUserExistence($email){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $user = array();

            while ($row = $result->fetch_assoc()) {
                array_push($user, array("id" => $row["userID"]));
            }
            return (count($user) == 1);          
        }

        public static function createNewUser($email, $fullName, $sex, $phoneNumber, $password){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare("INSERT INTO users(email, fullName, sex, phoneNumber, password)
                             VALUES (?,?,?,?,?)");
            $stmt->bind_param('sssss', $email, $fullName, $sex, $phoneNumber, $password); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 


            $stmt = $conn->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); 
            $stmt->execute(); 
            $result = $stmt->get_result();  
             
            if ($row = $result->fetch_assoc()) {
                $newUser = array("userID" => $row["userID"],"email" => $row["email"],"sex" => $row["sex"],
                    "isAdmin" => $row["isAdmin"],"accumulatedScore" => $row["accumulatedScore"], 
                    "phoneNumber" => $row["phoneNumber"]);
            }
            return $newUser;          
        }

        public static function getUserProfile($email){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            unset($row["password"]);
            return $row;          
        }

        public static function getAvatarFileName($email){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT avatarFileName FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return $row["avatarFileName"];          
        }      

        public static function updateAvatarName($email,$fileName){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE users SET avatarFileName = ? WHERE email = ?');
            $stmt->bind_param('ss', $fileName, $email); // 's' specifies the variable type => 'string'
            $stmt->execute();       
        }         
        

        public static function comparePassword($email,$password){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT password FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            return password_verify($password, $row["password"]);          
        }
        public static function updatePassword($userID,$password){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE users SET password = ? WHERE userID = ?');
            $stmt->bind_param('si', $password,$userID); 
            $stmt->execute(); 
            return ["msg"=>"success"];          
        }
        public static function editProfile($email, $fullName, $phoneNumber, $sex){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('UPDATE users SET fullName = ?, phoneNumber = ?, sex = ? WHERE email = ?');
            $stmt->bind_param('ssss', $fullName, $phoneNumber, $sex, $email); 
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $stmt = $conn->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $row = $result->fetch_assoc();
            unset($row["password"]);
            return $row;          
        }
        public static function getAllUsers(){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT * FROM users WHERE isAdmin = false');
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $users = array();

            while ($row = $result->fetch_assoc()) {
                unset($row["password"]);
                array_push($users, $row);
            }       
            return $users;
        }
    }
?>