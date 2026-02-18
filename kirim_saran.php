<?php
$conn = mysqli_connect("localhost","root","","perpustakaan");

$nama = $_POST['nama'];
$pesan = $_POST['pesan'];

$query = "INSERT INTO saran_pengunjung (nama, pesan)
          VALUES ('$nama','$pesan')";

mysqli_query($conn,$query);

echo "<script>
alert('Saran berhasil dikirim!');
window.location='index.php';
</script>";
?>
