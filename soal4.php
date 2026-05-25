<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Mahasiswa Komunitas</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background: #f0f4f8; padding: 30px; }
        h2 { color: #1a1a2e; margin-bottom: 20px; font-size: 24px; }
        .btn { display: inline-block; padding: 9px 18px; border-radius: 5px; text-decoration: none; font-size: 14px; cursor: pointer; border: none; }
        .btn-primary { background: #1a1a2e; color: white; }
        .btn-secondary { background: #6c757d; color: white; }
        .btn-warning { background: #ffc107; color: #000; }
        .btn-danger  { background: #dc3545; color: white; }
        .btn:hover   { opacity: 0.85; }
        .alert { padding: 12px 18px; border-radius: 6px; margin-bottom: 20px; font-size: 14px; }
        .alert-success { background: #d4edda; color: #155724; }
        table { width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        thead { background: #1a1a2e; color: white; }
        thead th { padding: 14px 15px; text-align: left; }
        tbody td { padding: 12px 15px; border-bottom: 1px solid #eee; }
        tbody tr:hover { background: #f5f8ff; }
        .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; gap: 10px; }
    </style>
</head>
<body>

<?php
include 'koneksi.php';

if (isset($_GET['hapus'])) {
    $id = (int)$_GET['hapus'];
    $hapus = mysqli_query($conn, "DELETE FROM mahasiswa WHERE id = $id");
    if ($hapus) {
        header("Location: soal4.php?msg=hapus_sukses");
        exit;
    }
}

if (isset($_GET['msg'])) {
    $msg = $_GET['msg'];
    $alerts = [
        'tambah_sukses' => '✅ Data berhasil ditambahkan!',
        'edit_sukses'   => '✅ Data berhasil diperbarui!',
        'hapus_sukses'  => '✅ Data berhasil dihapus!',
    ];
    if (isset($alerts[$msg])) {
        echo "<div class='alert alert-success'>{$alerts[$msg]}</div>";
    }
}
?>

<div class="top-bar">
    <h2>📋 Data Mahasiswa</h2>
    <div>
        <a href="index.html" class="btn btn-secondary">← Menu Komunitas</a>
        <a href="soal4_tambah.php" class="btn btn-primary">+ Tambah Data</a>
    </div>
</div>

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Email</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $query = mysqli_query($conn, "SELECT * FROM mahasiswa ORDER BY id ASC");
        $no = 1;
        if (mysqli_num_rows($query) > 0) {
            while ($row = mysqli_fetch_assoc($query)) {
                echo "<tr>
                    <td>{$no}</td>
                    <td>{$row['nama']}</td>
                    <td>{$row['nim']}</td>
                    <td>{$row['jurusan']}</td>
                    <td>{$row['email']}</td>
                    <td>
                        <a href='soal4_edit.php?id={$row['id']}' class='btn btn-warning'>✏️ Edit</a>
                        <a href='soal4.php?hapus={$row['id']}' class='btn btn-danger' onclick=\"return confirm('Yakin ingin menghapus data ini?')\">🗑️ Hapus</a>
                    </td>
                </tr>";
                $no++;
            }
        } else {
            echo "<tr><td colspan='6' style='text-align:center;padding:20px;color:#888;'>Belum ada data</td></tr>";
        }
        ?>
    </tbody>
</table>

</body>
</html>
