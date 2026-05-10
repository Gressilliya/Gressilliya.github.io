/* =======================================================
   game-score.js
   Pasang di game.html (dan halaman game lain) sebelum </body>

   Cara simpan skor dari dalam game kamu:
   DigiScore.simpan(150);   ← ganti 150 dengan variabel skor kamu

   Cara pakai:
   1. Panggil DigiScore.simpan(nilaiSkor) saat game selesai
   2. Ranking otomatis terupdate di ranking.html
   ======================================================= */

var DigiScore = {

    simpan: function(skorBaru) {
        // Cek login dulu
        var session;
        try { session = JSON.parse(localStorage.getItem('digi_session')); } catch(e) {}
        if (!session || !session.loggedIn) return; // tidak login, tidak simpan

        // Ambil data ranking yang ada
        var ranking = [];
        try { ranking = JSON.parse(localStorage.getItem('digi_ranking') || '[]'); } catch(e) {}

        // Cari apakah user ini sudah ada di ranking
        var idx = ranking.findIndex(function(r){
            return r.email && session.email && r.email.toLowerCase() === session.email.toLowerCase();
        });

        if (idx >= 0) {
            // Sudah ada: update hanya jika skor baru lebih tinggi
            if (skorBaru > ranking[idx].skor) {
                ranking[idx].skor = skorBaru;
                ranking[idx].nama  = session.nama  || ranking[idx].nama;
                ranking[idx].kelas = session.kelas || ranking[idx].kelas;
            }
        } else {
            // Belum ada: tambahkan ke ranking
            ranking.push({
                email: session.email,
                nama : session.nama  || 'Member',
                kelas: session.kelas || '-',
                skor : skorBaru
            });
        }

        // Urutkan dan simpan
        ranking.sort(function(a,b){ return b.skor - a.skor; });
        localStorage.setItem('digi_ranking', JSON.stringify(ranking));

        console.log('[DigiScore] Skor ' + skorBaru + ' berhasil disimpan untuk ' + session.nama);
    },

    // Tampilkan notif kecil saat game selesai (opsional)
    notif: function(skor) {
        var n = document.createElement('div');
        n.style.cssText = 'position:fixed;bottom:90px;right:20px;background:#1565C0;color:white;' +
                          'padding:12px 20px;border-radius:14px;font-family:Poppins,sans-serif;' +
                          'font-size:14px;font-weight:600;z-index:9999;' +
                          'box-shadow:0 6px 20px rgba(21,101,192,0.4);' +
                          'animation:fadeInUp 0.5s ease;';
        n.innerHTML = '🏆 Skor <strong>' + skor + '</strong> tersimpan ke Ranking!';
        document.body.appendChild(n);
        setTimeout(function(){ n.remove(); }, 3000);
    },

    // Fungsi lengkap: simpan + tampilkan notif
    selesai: function(skor) {
        this.simpan(skor);
        this.notif(skor);
    }
};

/* Tambahkan animasi fadeInUp jika belum ada */
(function(){
    if (document.getElementById('digiScoreStyle')) return;
    var s = document.createElement('style');
    s.id  = 'digiScoreStyle';
    s.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(s);
})();
