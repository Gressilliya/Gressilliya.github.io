<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Data Mahasiswa</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f0f4f8; padding: 30px; }
        .card { background: white; padding: 30px; border-radius: 10px; max-width: 500px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin: 0 auto; }
        h2 { color: #1a1a2e; margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; color: #444; font-weight: bold; }
        input[type="text"], input[type="email"] { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; font-size: 15px; box-sizing: border-box; }
        .btn { display: inline-block; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; cursor: pointer; border: none; }
        .btn-warning { background: #ffc107; color: #000; }
        .btn-secondary { background: #6c757d; color: white; margin-left: 10px; }
        .btn:hover { opacity: 0.85; }
    </style>
</head>
<body>
<?php
include 'koneksi.php';

$id = (int)$_GET['id'];
$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM mahasiswa WHERE id = $id"));

if (!$data) {
    echo "<p style='color:red;'>Data tidak ditemukan!</p>";
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama    = mysqli_real_escape_string($conn, $_POST['nama']);
    $nim     = mysqli_real_escape_string($conn, $_POST['nim']);
    $jurusan = mysqli_real_escape_string($conn, $_POST['jurusan']);
    $email   = mysqli_real_escape_string($conn, $_POST['email']);

    $query = "UPDATE mahasiswa SET nama='$nama', nim='$nim', jurusan='$jurusan', email='$email' WHERE id=$id";
    if (mysqli_query($conn, $query)) {
        header("Location: soal4.php?msg=edit_sukses");
        exit;
    } else {
        echo "<div style='color:red;margin-bottom:15px;'>❌ Gagal mengubah data!</div>";
    }
}
?>
<div class="card">
    <h2>✏️ Edit Data Mahasiswa</h2>
    <form method="POST">
        <label>Nama:</label>
        <input type="text" name="nama" value="<?= htmlspecialchars($data['nama']) ?>" required>

        <label>NIM:</label>
        <input type="text" name="nim" value="<?= htmlspecialchars($data['nim']) ?>" required>

        <label>Jurusan:</label>
        <input type="text" name="jurusan" value="<?= htmlspecialchars($data['jurusan']) ?>" required>

        <label>Email:</label>
        <input type="email" name="email" value="<?= htmlspecialchars($data['email']) ?>" required>

        <button type="submit" class="btn btn-warning">💾 Update</button>
        <a href="soal4.php" class="btn btn-secondary">← Kembali</a>
    </form>
</div>
</body>
</html>
