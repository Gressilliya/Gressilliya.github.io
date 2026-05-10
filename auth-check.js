/* =======================================================
   auth-check.js
   Taruh script ini di halaman yang HANYA boleh diakses member:
   game.html, perpustakaan.html, ranking.html, dsb.

   Cara pakai — tambahkan 1 baris ini SEBELUM </body>:
   <script src="auth-check.js"></script>

   Jika tidak login → otomatis balik ke login.html
   ======================================================= */
(function () {
    var session;
    try { session = JSON.parse(localStorage.getItem('digi_session')); } catch (e) { session = null; }

    if (!session || !session.loggedIn) {
        // Simpan halaman tujuan agar setelah login bisa langsung kembali ke sini
        localStorage.setItem('digi_redirect', window.location.href);
        alert('Kamu harus login dulu untuk mengakses fitur ini!');
        window.location.href = 'login.html';
    }
})();


/* =======================================================
   navbar-session.js
   Taruh script ini di index.html (dan semua halaman lain)
   SEBELUM </body>.

   Fungsi:
   - Kalau sudah login: tombol Login berubah jadi nama user + Keluar
   - Kalau belum login: tombol Login tetap tampil normal
   ======================================================= */
document.addEventListener('DOMContentLoaded', function () {
    var session;
    try { session = JSON.parse(localStorage.getItem('digi_session')); } catch (e) { session = null; }

    // Cari tombol login di navbar (class .login-btn atau .login-trigger)
    var loginBtn = document.querySelector('.login-btn') || document.querySelector('.login-trigger');
    var loginMenu = document.querySelector('.login-menu') || document.querySelector('.dropdown');

    if (!loginBtn) return; // navbar tidak ditemukan, skip

    if (session && session.loggedIn) {
        // === SUDAH LOGIN: tampilkan nama + tombol logout ===
        var inisial = session.nama
            ? session.nama.split(' ').map(function(w){ return w[0]; }).slice(0,2).join('').toUpperCase()
            : 'U';

        // Ganti tombol jadi nama user
        loginBtn.textContent = '👤 ' + session.nama.split(' ')[0];
        loginBtn.style.background = '#1565C0';
        loginBtn.style.color = 'white';
        loginBtn.style.borderRadius = '6px';
        loginBtn.style.padding = '8px 14px';

        // Ganti isi dropdown jadi info user + logout
        var dropdown = loginMenu ? loginMenu.querySelector('.dropdown-login') : null;
        if (dropdown) {
            dropdown.innerHTML =
                '<div style="padding:12px 16px;border-bottom:1px solid #f1f1f1;">' +
                    '<strong style="display:block;font-size:14px;color:#111;">' + session.nama + '</strong>' +
                    '<span style="font-size:12px;color:#888;">Kelas ' + (session.kelas || '-') + '</span>' +
                '</div>' +
                '<a href="profil.html" style="display:block;padding:10px 16px;color:#333;text-decoration:none;">👤 Profil Saya</a>' +
                '<a href="ranking.html" style="display:block;padding:10px 16px;color:#333;text-decoration:none;">📊 Ranking</a>' +
                '<a href="#" id="logoutLink" style="display:block;padding:10px 16px;color:#e53e3e;text-decoration:none;border-top:1px solid #f1f1f1;">🚪 Keluar</a>';

            // Pasang fungsi logout
            var logoutLink = document.getElementById('logoutLink');
            if (logoutLink) {
                logoutLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('digi_session');
                    window.location.href = 'index.html';
                });
            }
        }

        // === Redirect setelah login kalau ada halaman tujuan tersimpan ===
        var redirectTo = localStorage.getItem('digi_redirect');
        if (redirectTo && redirectTo !== window.location.href) {
            localStorage.removeItem('digi_redirect');
            window.location.href = redirectTo;
        }

    }
    // Kalau belum login: biarkan navbar tampil normal seperti biasa
});
