<?php
session_start();

$conn = mysqli_connect("localhost","root","","perpustakaan");

$firstname = $_POST['firstname'];
$lastname  = $_POST['lastname'];
$email     = $_POST['email'];
$no_hp     = $_POST['no_hp'];

/* cek apakah sudah terdaftar */
$cek = mysqli_query($conn,
"SELECT * FROM anggota WHERE email='$email'");

if(mysqli_num_rows($cek) > 0){

    // SUDAH ADA → LOGIN
    $_SESSION['email'] = $email;
    header("Location: homepage.php");

}else{

    // BELUM ADA → DAFTAR
    mysqli_query($conn,
    "INSERT INTO anggota(firstname,lastname,email,no_hp)
     VALUES('$firstname','$lastname','$email','$no_hp')");

    $_SESSION['email'] = $email;
    header("Location: homepage.php");
}
?>
