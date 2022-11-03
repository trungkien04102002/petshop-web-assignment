<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
 

    echo file_get_contents('php://input');
    return;
    echo "Stream Midnights By Taylor Swift Ha Trung Kien";
?>