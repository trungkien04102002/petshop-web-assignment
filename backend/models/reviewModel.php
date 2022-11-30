<?php 
    require_once("dbConnection.php");

    class ReviewModel{

        public static function getAllReviews(){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('SELECT contentID, content, users.userID, fullName, email  
                    FROM reviews, users WHERE reviews.userID = users.userID');
            $stmt->execute(); 
            $result = $stmt->get_result(); 
            $reviews = array();
            while ($row = $result->fetch_assoc()) {
                array_push($reviews, $row);
            }  
            return ($reviews);   
        }

        public static function addReview($content, $userID){
            $conn = DbConnection::getInstance();
            $stmt = $conn->prepare('INSERT INTO reviews(content, userID) VALUES (?,?)');
            $stmt->bind_param('si', $content, $userID);
            $stmt->execute(); 
            return (true);   
        }
    }
?>