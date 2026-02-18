<?php
session_start();

if(!isset($_SESSION['email'])){
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Gressilliya Damanik | Digital Library</title>

    
</body>
</html>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Great+Vibes&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 70px;
background:#ffffff;
position:sticky;
top:0;
z-index:100;
box-shadow:0 3px 12px rgba(0,0,0,0.08);
}

.logo{
    font-family: 'Great Vibes', cursive;
    font-size:32px;
    font-weight:bold;
    color:#1f1f1f;
    letter-spacing:1px;
}

nav ul{
display:flex;
gap:35px;
list-style:none;
}

nav a{
text-decoration:none;
color:#444;
font-weight:500;
transition:.3s;
}

nav a:hover{
color:#000;
}

.hero{
height:100vh;
background:url("https://images.unsplash.com/photo-1507842217343-583bb7270b66") center/cover;
display:flex;
justify-content:center;
align-items:center;
}

.overlay{
width:100%;
height:100%;
background:linear-gradient(
rgba(30,30,30,0.75),
rgba(80,80,80,0.75)
);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
color:white;
padding:40px;
}

.overlay h1{
font-size:48px;
font-weight:700;
letter-spacing:1px;
}

.overlay p{
margin-top:12px;
font-weight:300;
opacity:.9;
}

.search{
margin-top:30px;
display:flex;
gap:10px;
}

.search input{
padding:14px 18px;
width:340px;
border-radius:30px;
border:none;
outline:none;
background:#f1f1f1;
}

.search button{
border:none;
padding:14px 20px;
border-radius:30px;
background:#2c2c2c;
color:white;
cursor:pointer;
transition:.3s;
}

.search button:hover{
background:#000;
}

.about{
padding:90px;
background:#f4f4f4;
}

.about-container{
display:flex;
align-items:center;
gap:50px;
flex-wrap:wrap;
}

.about img{
width:270px;
border-radius:18px;
box-shadow:0 10px 25px rgba(0,0,0,0.15);
}

.about-text{
max-width:600px;
}

.about-text h2{
margin-bottom:15px;
color:#222;
}

.buttons{
margin-top:25px;
}

.btn{
text-decoration:none;
padding:12px 24px;
border-radius:25px;
background:#2b2b2b;
color:white;
margin-right:10px;
display:inline-block;
transition:.3s;
}

.btn:hover{
transform:translateY(-3px);
background:#000;
}

.instagram{
background:#555;
}

.media{
padding:90px;
text-align:center;
background:white;
}

.media h2{
margin-bottom:30px;
color:#222;
}

iframe{
max-width:100%;
border-radius:15px;
box-shadow:0 10px 25px rgba(0,0,0,0.15);
}

footer{
text-align:center;
padding:25px;
background:#1f1f1f;
color:white;
font-size:14px;
}

/* ===== NAVBAR LAYOUT ===== */
nav{
display:flex;
align-items:center;
justify-content:space-between;
padding:20px 60px;
background:white;
position:sticky;
top:0;
box-shadow:0 3px 12px rgba(0,0,0,0.08);
}

.menu{
display:flex;
gap:30px;
list-style:none;
}

.nav-search input{
font-family:'Montserrat', sans-serif;
padding:12px 20px;
width:220px;
border-radius:30px;
border:none;
outline:none;
font-size:15px;
background:linear-gradient(145deg,#f0f0f0,#ffffff);
box-shadow:
inset 3px 3px 6px rgba(0,0,0,0.08),
inset -3px -3px 6px rgba(255,255,255,0.9);
transition:0.3s;
}

.nav-search input:focus{
width:260px;
box-shadow:0 0 10px rgba(0,0,0,0.15);
}

.subtitle{
margin-top:10px;
margin-bottom:35px;
color:#666;
text-align:center;
}

/* GRID GALERI */
.video-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:30px;
padding:0 40px;
}

.video-card{
background:#f3f3f3;
padding:15px;
border-radius:15px;
box-shadow:0 6px 15px rgba(0,0,0,0.1);
transition:0.3s;
text-align:center;
}

.video-card:hover{
transform:translateY(-6px);
}

.video-card iframe{
width:100%;
height:200px;
border-radius:10px;
border:none;
}

.video-card p{
margin-top:12px;
font-weight:600;
color:#333;
}

/* ===== AUDIO SECTION ===== */

.audio-section{
    padding:80px 20px;
    background:#f5f7fb;
}

/* ini yang memaksa semua isi ke tengah */
.audio-center{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
}

/* card audio */
.audio-card{
    margin-top:25px;
    width:420px;
    max-width:90%;
    background:white;
    padding:25px;
    border-radius:18px;
    box-shadow:0 10px 25px rgba(0,0,0,0.15);
}

/* player */
.audio-card audio{
    width:100%;
    display:block;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 70px;
    background:white;
    position:sticky;
    top:0;
    box-shadow:0 3px 10px rgba(0,0,0,0.1);
}

.logo{
    font-size:26px;
    font-weight:bold;
}

.menu{
    display:flex;
    gap:35px;
    list-style:none;
}

.menu a{
    text-decoration:none;
    color:black;
    font-weight:500;
}

.nav-right{
    display:flex;
    align-items:center;
    gap:20px;
}

.nav-search input{
    padding:7px 12px;
    border-radius:6px;
    border:1px solid #ccc;
}

.login-menu{
    position:relative;
}

.login-btn{
    padding:8px 15px;
    border:none;
    background:#2c6ed5;
    color:white;
    border-radius:6px;
    cursor:pointer;
}

.dropdown-login{
    display:none;
    position:absolute;
    right:0;
    top:40px;
    background:white;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);
    border-radius:6px;
    overflow:hidden;
    min-width:160px;
}

.dropdown-login a{
    display:block;
    padding:10px;
    text-decoration:none;
    color:black;
}

.dropdown-login a:hover{
    background:#f1f1f1;
}

.login-menu:hover .dropdown-login{
    display:block;
}

/* Tombol Saran */
#saranButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2c7be5;
    color: white;
    padding: 12px 18px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
}

/* Box Saran */
#saranBox {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 250px;
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.3);
    display: none;
}

#saranBox input,
#saranBox textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}

#saranBox button {
    width: 100%;
    background: #2c7be5;
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
}

</style>
</head>

<body>

<nav>

    <div class="logo">Gressilliya Library</div>

    <ul class="menu">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#tentang">Profile</a></li>
        <li><a href="#galeri">Media</a></li>
    </ul>

    <!-- BAGIAN KANAN -->
    <div class="nav-right">

        <!-- SEARCH -->
        <div class="nav-search">
            <input type="text" placeholder="🔎 Search resources...">
        </div>

        <!-- LOGIN DROPDOWN -->
        <div class="login-menu">
            <button class="login-btn">Login ▾</button>

            <div class="dropdown-login">
                <a href="login.html">Login Anggota</a>
                <a href="daftar.html">Daftar Anggota</a>
            </div>
        </div>

    </div>

</nav>

</section>

<section id="beranda" class="hero">
<div class="overlay">

<h1>Knowledge Space<br>Gressilliya Damanik</h1>
<p>Explore Knowledge Digital Library Space</p>


</div>
</section>

<section id="tentang" class="about">

<div class="about-container">

<img src="profile.jpg" alt="Foto Gressilliya">

<div class="about-text">
<h2>Profile</h2>

<p>
Halo, saya Gressilliya Damanik, a Library and Information Science student
who is passionate about digital libraries and information technology.
This website serves as my personal digital space to share learning,
knowledge, and academic exploration.
</p>

<div class="about-buttons">
    <a href="cv.jpg" target="_blank" class="btn">
    Lihat CV
</a>

    <a href="https://instagram.com/gressilliya" 
       target="_blank" class="btn">
       Instagram @gressilliya
    </a>

    <!-- tombol baru -->
    <a href="about-detail.html" class="btn">
        More About Me
    </a>
</div>

</div>
<section id="audio" class="audio-section">

<div class="audio-center">

<h2>🎧 My Audio</h2>
<p>Music that helps me focus while learning</p>

<div class="audio-card">
    <audio controls>
        <source src="audio/lagu.mp3" type="audio/mpeg">
    </audio>
</div>

</div>

</section>

</div>

</section>

<section id="Media" class="media">

<h2>Media</h2>

<p class="subtitle">
Educational videos related to digital libraries, information literacy,
and modern library technology.
</p>

<div class="video-grid">

<!-- VIDEO 1 -->
<div class="video-card">
<iframe src="https://www.youtube.com/embed/6FByj7-Aj60"
title="Digital Library"
allowfullscreen></iframe>
<p>Digital Library</p>
</div>

<!-- VIDEO 2 -->
<div class="video-card">
<iframe src="https://www.youtube.com/embed/x6H8jpbcI0U"
title="Information Literacy"
allowfullscreen></iframe>
<p>Information Literacy</p>
</div>

<!-- VIDEO 3 -->
<div class="video-card">
<iframe src="https://www.youtube.com/embed/np7gg88v-Ow"
title="Library Technology"
allowfullscreen></iframe>
<p>Library Technology</p>
</div>

</div>

</section>

<footer>
© Gressilliya Damanik  — Website Digital Library  2026  
</footer>

<!-- BUTTON SARAN -->
<div id="saranButton" onclick="toggleSaran()">
    💬 Saran
</div>

<!-- BOX SARAN -->
<div id="saranBox">
    <h4>Kirim Saran</h4>

    <form action="kirim_saran.php" method="POST">
        <input type="text" name="nama" placeholder="Nama Anda" required>

        <textarea name="pesan" placeholder="Tulis saran anda..." required></textarea>

        <button type="submit">Kirim</button>
    </form>
</div>

<script>
function toggleSaran() {

    // ambil kotak saran
    var box = document.getElementById("saranBox");

    // jika sedang tampil → sembunyikan
    if (box.style.display === "block") {
        box.style.display = "none";
    } 
    // jika sedang tersembunyi → tampilkan
    else {
        box.style.display = "block";
    }
}
</script>

</body>
</html>
