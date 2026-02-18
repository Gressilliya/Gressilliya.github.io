// ===== DAFTAR =====
function daftarUser(){

let email = document.getElementById("emailDaftar").value;
let password = document.getElementById("passDaftar").value;

localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Akun berhasil dibuat!");
window.location.href = "index.html";

return false;
}


// ===== LOGIN =====
function loginUser(){

let emailInput = document.getElementById("email").value;
let passInput = document.getElementById("password").value;

let email = localStorage.getItem("email");
let password = localStorage.getItem("password");

if(emailInput === email && passInput === password){
    window.location.href = "home.html";
}else{
    alert("Login gagal!");
}

return false;
}


// ===== LOGOUT =====
function logout(){
window.location.href="index.html";
}
