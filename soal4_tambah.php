<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tambah Data Mahasiswa</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f0f4f8; padding: 30px; }
        .card { background: white; padding: 30px; border-radius: 10px; max-width: 500px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin: 0 auto; }
        h2 { color: #1a1a2e; margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; color: #444; font-weight: bold; }
        input[type="text"], input[type="email"] { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; font-size: 15px; box-sizing: border-box; }
        .btn { display: inline-block; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; cursor: pointer; border: none; }
        .btn-primary { background: #1a1a2e; color: white; }
        .btn-secondary { background: #6c757d; color: white; margin-left: 10px; }
        .btn:hover { opacity: 0.85; }
    </style>
</head>
<body>
<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama    = mysqli_real_escape_string($conn, $_POST['nama']);
    $nim     = mysqli_real_escape_string($conn, $_POST['nim']);
    $jurusan = mysqli_real_escape_string($conn, $_POST['jurusan']);
    $email   = mysqli_real_escape_string($conn, $_POST['email']);

    $query = "INSERT INTO mahasiswa (nama, nim, jurusan, email) VALUES ('$nama','$nim','$jurusan','$email')";
    if (mysqli_query($conn, $query)) {
        header("Location: soal4.php?msg=tambah_sukses");
        exit;
    } else {
        echo "<div style='color:red;margin-bottom:15px;'>❌ Gagal menambahkan data!</div>";
    }
}
?>
<div class="card">
    <h2>➕ Tambah Data Mahasiswa</h2>
    <form method="POST">
        <label>Nama:</label>
        <input type="text" name="nama" placeholder="Nama lengkap" required>

        <label>NIM:</label>
        <input type="text" name="nim" placeholder="Nomor Induk Mahasiswa" required>

        <label>Jurusan:</label>
        <input type="text" name="jurusan" placeholder="Program studi" required>

        <label>Email:</label>
        <input type="email" name="email" placeholder="Alamat email" required>

        <button type="submit" class="btn btn-primary">💾 Simpan</button>
        <a href="soal4.php" class="btn btn-secondary">← Kembali</a>
    </form>
</div>
</body>
</html>
