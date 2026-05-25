<?php
$host     = "localhost";
$user     = "root";       
$password = "";           
$database = "komunitas_db";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("<div style='color:red;padding:20px;font-family:Arial;'>
        ❌ Koneksi database gagal! Periksa XAMPP/Database Anda.<br>
        Error: " . mysqli_connect_error() . "
    </div>");
}
?>
