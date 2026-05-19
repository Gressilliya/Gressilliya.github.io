<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Preview — Notifikasi DigiSmart</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
body { background: #f0f6ff; padding: 30px 16px; }

/* ============================================================
   🔔 NOTIFIKASI BELL — TOMBOL DI NAVBAR
   Tambahkan di dalam .nav-right (sebelum hamburger atau login)
   ============================================================ */
.notif-bell-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.notif-bell-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #EEF4FF;
  border: 1.5px solid #BBDEFB;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 17px;
  color: #1565C0;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  position: relative;
}
.notif-bell-btn:hover {
  background: #DBEAFE;
  transform: scale(1.08);
  box-shadow: 0 4px 14px rgba(21,101,192,0.2);
}
.notif-bell-btn.ringing {
  animation: bellRing 0.6s ease;
}
@keyframes bellRing {
  0%,100% { transform: rotate(0); }
  20%      { transform: rotate(-18deg); }
  40%      { transform: rotate(18deg); }
  60%      { transform: rotate(-10deg); }
  80%      { transform: rotate(10deg); }
}

/* Badge merah jumlah notif belum dibaca */
.notif-count-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 18px;
  height: 18px;
  background: #EF4444;
  color: white;
  font-size: 10px;
  font-weight: 800;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  padding: 0 3px;
  animation: badgePop 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
}
.notif-count-badge.hidden { display: none; }
@keyframes badgePop {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}

/* ============================================================
   🗂️ PANEL DROPDOWN NOTIFIKASI
   ============================================================ */
.notif-panel {
  display: none;
  position: absolute;
  top: 52px;
  right: 0;
  width: 360px;
  max-width: calc(100vw - 32px);
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(21,101,192,0.18), 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid #E0ECFF;
  z-index: 10000;
  overflow: hidden;
  animation: panelSlide 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
}
.notif-panel.open { display: block; }
@keyframes panelSlide {
  from { opacity: 0; transform: translateY(-12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Header panel */
.notif-panel-header {
  padding: 16px 18px 12px;
  background: linear-gradient(135deg, #1565C0, #1976D2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notif-panel-title {
  color: white;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
.notif-panel-title span {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
}
.notif-panel-actions {
  display: flex;
  gap: 8px;
}
.notif-action-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Poppins', sans-serif;
}
.notif-action-btn:hover { background: rgba(255,255,255,0.28); }

/* Tab filter */
.notif-tabs {
  display: flex;
  border-bottom: 1px solid #E8F0FE;
  background: #F8FBFF;
  padding: 0 10px;
}
.notif-tab {
  flex: 1;
  padding: 10px 8px;
  font-size: 11px;
  font-weight: 700;
  color: #94A3B8;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: 0.2s;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.notif-tab.active {
  color: #1565C0;
  border-bottom-color: #1565C0;
}

/* Daftar notif */
.notif-list {
  max-height: 340px;
  overflow-y: auto;
  padding: 10px 0;
}
.notif-list::-webkit-scrollbar { width: 4px; }
.notif-list::-webkit-scrollbar-thumb { background: #BBDEFB; border-radius: 4px; }

/* Item notifikasi */
.notif-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
  border-bottom: 1px solid #F1F5F9;
}
.notif-item:last-child { border-bottom: none; }
.notif-item:hover { background: #F0F7FF; }
.notif-item.unread { background: #EEF5FF; }
.notif-item.unread::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #1565C0;
  border-radius: 50%;
}

/* Icon kategori */
.notif-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.notif-icon.ujian    { background: #FEF3C7; }
.notif-icon.lomba    { background: #DCFCE7; }
.notif-icon.libur    { background: #FEE2E2; }
.notif-icon.kegiatan { background: #EDE9FE; }
.notif-icon.umum     { background: #DBEAFE; }
.notif-icon.penting  { background: #FFE4E6; }

/* Konten teks */
.notif-content { flex: 1; min-width: 0; }
.notif-title {
  font-size: 12.5px;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notif-item.unread .notif-title { color: #1565C0; }
.notif-desc {
  font-size: 11.5px;
  color: #64748B;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.notif-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 5px;
}
.notif-time {
  font-size: 10px;
  color: #94A3B8;
  font-weight: 600;
}
.notif-tag {
  font-size: 9px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tag-ujian    { background: #FEF3C7; color: #92400E; }
.tag-lomba    { background: #DCFCE7; color: #166534; }
.tag-libur    { background: #FEE2E2; color: #991B1B; }
.tag-kegiatan { background: #EDE9FE; color: #5B21B6; }
.tag-umum     { background: #DBEAFE; color: #1E40AF; }
.tag-penting  { background: #FFE4E6; color: #BE123C; }

/* Empty state */
.notif-empty {
  padding: 40px 20px;
  text-align: center;
  color: #94A3B8;
  font-size: 13px;
}
.notif-empty-icon { font-size: 36px; margin-bottom: 10px; }

/* Footer panel */
.notif-panel-footer {
  padding: 10px 16px;
  border-top: 1px solid #E8F0FE;
  text-align: center;
  background: #F8FBFF;
}
.notif-see-all {
  color: #1565C0;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.2s;
}
.notif-see-all:hover { gap: 9px; }

/* ============================================================
   🔴 TICKER PENGUMUMAN (Bar di bawah navbar)
   Tambahkan tepat setelah tag </nav>
   ============================================================ */
.pengumuman-ticker {
  width: 100%;
  background: linear-gradient(90deg, #1565C0, #1976D2);
  padding: 9px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 98;
}
.ticker-label {
  background: #EF4444;
  color: white;
  font-size: 10px;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 0 20px 20px 0;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-right: 20px;
  white-space: nowrap;
}
.ticker-track {
  flex: 1;
  overflow: hidden;
  position: relative;
}
.ticker-inner {
  display: flex;
  gap: 60px;
  animation: tickerScroll 30s linear infinite;
  white-space: nowrap;
}
.ticker-inner:hover { animation-play-state: paused; }
@keyframes tickerScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-item {
  color: rgba(255,255,255,0.92);
  font-size: 12.5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.2s;
}
.ticker-item:hover { color: #FDE68A; }
.ticker-dot {
  width: 5px; height: 5px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  flex-shrink: 0;
}

/* ============================================================
   🖥️ PREVIEW WRAPPER (hanya untuk demo, hapus di produksi)
   ============================================================ */
.demo-navbar {
  background: white;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid #E8F0FE;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.demo-logo {
  font-size: 18px;
  font-weight: 800;
  color: #1565C0;
}
.demo-nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.demo-login-btn {
  background: #1565C0;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}
.preview-box {
  max-width: 760px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(21,101,192,0.12);
  overflow: visible;
}
.preview-label {
  text-align: center;
  margin-bottom: 20px;
}
.preview-label h2 {
  font-size: 20px;
  font-weight: 800;
  color: #1E293B;
}
.preview-label p {
  color: #64748B;
  font-size: 13px;
  margin-top: 4px;
}
.preview-body {
  background: #F0F6FF;
  padding: 30px 20px;
  border-radius: 0 0 16px 16px;
  min-height: 240px;
}
</style>
</head>
<body>

<!-- ===================== DEMO PREVIEW ===================== -->
<div class="preview-label">
  <h2>🔔 Sistem Notifikasi DigiSmart</h2>
  <p>Klik tombol lonceng di navbar untuk melihat notifikasi. Kode siap copy-paste ke website kamu!</p>
</div>

<div class="preview-box">

  <!-- NAVBAR DEMO -->
  <div class="demo-navbar">
    <div class="demo-logo">📚 DigiSmart Library</div>
    <div class="demo-nav-right">

      <!-- ======================================================
           BAGIAN 1: TOMBOL LONCENG
           Tempel ini di dalam .nav-right kamu (di index.html)
           ====================================================== -->
      <div class="notif-bell-wrapper" id="notifWrapper">
        <button class="notif-bell-btn" id="notifBellBtn" onclick="toggleNotifPanel()" title="Notifikasi & Pengumuman">
          <i class="fas fa-bell"></i>
        </button>
        <span class="notif-count-badge" id="notifBadge">5</span>

        <!-- ======================================================
             BAGIAN 2: PANEL DROPDOWN
             Ini bagian dari tombol lonceng — ikut di dalam wrapper
             ====================================================== -->
        <div class="notif-panel" id="notifPanel">

          <div class="notif-panel-header">
            <div class="notif-panel-title">
              🔔 Pengumuman
              <span id="unreadCountLabel">5 Baru</span>
            </div>
            <div class="notif-panel-actions">
              <button class="notif-action-btn" onclick="bacaSemua()">✓ Baca Semua</button>
            </div>
          </div>

          <div class="notif-tabs">
            <button class="notif-tab active" onclick="filterTab('semua', this)">Semua</button>
            <button class="notif-tab" onclick="filterTab('ujian', this)">Ujian</button>
            <button class="notif-tab" onclick="filterTab('lomba', this)">Lomba</button>
            <button class="notif-tab" onclick="filterTab('libur', this)">Libur</button>
            <button class="notif-tab" onclick="filterTab('kegiatan', this)">Kegiatan</button>
          </div>

          <div class="notif-list" id="notifList">
            <!-- diisi oleh JS -->
          </div>

          <div class="notif-panel-footer">
            <a href="pengumuman.html" class="notif-see-all">
              Lihat Semua Pengumuman <i class="fas fa-arrow-right" style="font-size:10px"></i>
            </a>
          </div>

        </div>
        <!-- end .notif-panel -->
      </div>
      <!-- end .notif-bell-wrapper -->

      <button class="demo-login-btn">Login ▾</button>
    </div>
  </div>
  <!-- end demo-navbar -->

  <!-- ======================================================
       BAGIAN 3: TICKER PENGUMUMAN BERJALAN
       Tempel ini tepat setelah tag </nav> di index.html
       ====================================================== -->
  <div class="pengumuman-ticker" id="pengumumanTicker">
    <span class="ticker-label">📢 INFO</span>
    <div class="ticker-track">
      <div class="ticker-inner" id="tickerInner">
        <!-- diisi JS -->
      </div>
    </div>
  </div>

  <!-- Body preview -->
  <div class="preview-body">
    <p style="text-align:center;color:#94A3B8;font-size:13px;padding-top:60px;">
      ↑ Klik lonceng di navbar untuk membuka panel notifikasi
    </p>
  </div>

</div>
<!-- end preview-box -->


<!-- ======================================================
     BAGIAN 4: JAVASCRIPT — copy semua ini ke index.html
     Letakkan sebelum tag </body>
     ====================================================== -->
<script>
// ===========================================================
// DATA PENGUMUMAN — Edit isi array ini sesuai sekolahmu!
// ===========================================================
const PENGUMUMAN_DATA = [
  {
    id: 1,
    judul: "📝 Ujian Tengah Semester — 26–30 Mei 2026",
    deskripsi: "UTS dilaksanakan mulai Senin 26 Mei. Pastikan bawa kartu ujian dan hadir 15 menit sebelum ujian dimulai.",
    waktu: "2 jam lalu",
    kategori: "ujian",
    icon: "📝",
    dibaca: false
  },
  {
    id: 2,
    judul: "🏆 Lomba Literasi Digital Tingkat Kota 2026",
    deskripsi: "Daftar sekarang! Lomba esai dan presentasi digital terbuka untuk kelas 7–9. Hadiah total Rp 5.000.000.",
    waktu: "5 jam lalu",
    kategori: "lomba",
    icon: "🏆",
    dibaca: false
  },
  {
    id: 3,
    judul: "🎌 Libur Hari Lahir Pancasila — 1 Juni 2026",
    deskripsi: "Sekolah libur pada Senin, 1 Juni 2026 dalam rangka Hari Lahir Pancasila. Kegiatan belajar dilanjutkan Selasa.",
    waktu: "1 hari lalu",
    kategori: "libur",
    icon: "🎌",
    dibaca: false
  },
  {
    id: 4,
    judul: "🎮 Arcade Literasi — Kompetisi Bulan Ini!",
    deskripsi: "Top 3 skor tertinggi di Arcade Literasi minggu ini akan mendapat hadiah buku & merchandise DigiSmart!",
    waktu: "2 hari lalu",
    kategori: "kegiatan",
    icon: "🎮",
    dibaca: false
  },
  {
    id: 5,
    judul: "📚 Koleksi Buku Baru Telah Ditambahkan",
    deskripsi: "50+ buku digital baru tersedia di Pojok Baca, termasuk novel, buku pelajaran, dan ensiklopedia sains.",
    waktu: "3 hari lalu",
    kategori: "umum",
    icon: "📚",
    dibaca: false
  },
  {
    id: 6,
    judul: "⚠️ Pemeliharaan Sistem — Sabtu 24 Mei",
    deskripsi: "Website DigiSmart akan maintenance pukul 22:00–02:00 WIB. Harap simpan pekerjaan sebelumnya.",
    waktu: "4 hari lalu",
    kategori: "umum",
    icon: "⚠️",
    dibaca: true
  }
];

// ===========================================================
// FUNGSI INTI — Jangan diubah kecuali kamu sudah mengerti JS
// ===========================================================

let filterAktif = 'semua';

function renderNotif() {
  const list = document.getElementById('notifList');
  if (!list) return;

  const filtered = filterAktif === 'semua'
    ? PENGUMUMAN_DATA
    : PENGUMUMAN_DATA.filter(n => n.kategori === filterAktif);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="notif-empty">
        <div class="notif-empty-icon">📭</div>
        <div>Tidak ada pengumuman untuk kategori ini.</div>
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(n => `
    <div class="notif-item ${n.dibaca ? '' : 'unread'}" onclick="bacaNotif(${n.id})">
      <div class="notif-icon ${n.kategori}">${n.icon}</div>
      <div class="notif-content">
        <div class="notif-title">${n.judul}</div>
        <div class="notif-desc">${n.deskripsi}</div>
        <div class="notif-meta">
          <span class="notif-time"><i class="fas fa-clock" style="font-size:9px;margin-right:3px"></i>${n.waktu}</span>
          <span class="notif-tag tag-${n.kategori}">${n.kategori}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function updateBadge() {
  const badge = document.getElementById('notifBadge');
  const label = document.getElementById('unreadCountLabel');
  const unread = PENGUMUMAN_DATA.filter(n => !n.dibaca).length;

  if (unread > 0) {
    badge.textContent = unread;
    badge.classList.remove('hidden');
    if (label) label.textContent = unread + ' Baru';
  } else {
    badge.classList.add('hidden');
    if (label) label.textContent = 'Semua Dibaca';
  }
}

function renderTicker() {
  const tickerInner = document.getElementById('tickerInner');
  if (!tickerInner) return;

  // Duplicate untuk efek loop mulus
  const items = PENGUMUMAN_DATA.concat(PENGUMUMAN_DATA);
  tickerInner.innerHTML = items.map(n => `
    <span class="ticker-item" onclick="bukaNotifDariTicker(${n.id})">
      ${n.icon} ${n.judul}
      <span class="ticker-dot"></span>
    </span>
  `).join('');
}

function toggleNotifPanel() {
  const panel = document.getElementById('notifPanel');
  const bell  = document.getElementById('notifBellBtn');
  const isOpen = panel.classList.contains('open');

  if (!isOpen) {
    panel.classList.add('open');
    bell.classList.add('ringing');
    setTimeout(() => bell.classList.remove('ringing'), 600);
  } else {
    panel.classList.remove('open');
  }
}

function filterTab(kategori, btn) {
  filterAktif = kategori;
  document.querySelectorAll('.notif-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderNotif();
}

function bacaNotif(id) {
  const notif = PENGUMUMAN_DATA.find(n => n.id === id);
  if (notif && !notif.dibaca) {
    notif.dibaca = true;
    renderNotif();
    updateBadge();
  }
  // Di sini kamu bisa tambah: window.location.href = 'pengumuman.html?id=' + id;
  alert('📢 ' + notif.judul + '\n\n' + notif.deskripsi);
}

function bukaNotifDariTicker(id) {
  const notif = PENGUMUMAN_DATA.find(n => n.id === id);
  if (notif) bacaNotif(id);
}

function bacaSemua() {
  PENGUMUMAN_DATA.forEach(n => n.dibaca = true);
  renderNotif();
  updateBadge();
}

// Tutup panel jika klik di luar
document.addEventListener('click', function(e) {
  const wrapper = document.getElementById('notifWrapper');
  if (wrapper && !wrapper.contains(e.target)) {
    const panel = document.getElementById('notifPanel');
    if (panel) panel.classList.remove('open');
  }
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  renderNotif();
  updateBadge();
  renderTicker();
});
// Fallback jika DOM sudah siap
if (document.readyState !== 'loading') {
  renderNotif();
  updateBadge();
  renderTicker();
}
</script>

</body>
</html>
