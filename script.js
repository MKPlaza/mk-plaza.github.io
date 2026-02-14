const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const title = document.getElementById('song-title');
const repeatBtn = document.getElementById('repeatBtn');
const wrapper = document.getElementById('playerWrapper');
const favicon = document.getElementById('favicon');
const contentFrame = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

const themes = {
    original: { midnight: '#0a1128', blue: '#1a237e', gold: '#ffd700', silver: '#e0e0e0', eyes: '#ffeb3b', pixel: false },
    classic: { midnight: '#2a1b4d', blue: '#f62413', gold: '#f1bb01', silver: '#6055a1', eyes: '#fdff9a', pixel: true },
    dark: { midnight: '#111827', blue: '#374151', gold: '#9ca3af', silver: '#4b5563', eyes: '#ef4444', pixel: false },
    galacta: { midnight: '#2d0a1a', blue: '#be185d', gold: '#f472b6', silver: '#fce7f3', eyes: '#ffffff', pixel: false },
    morpho: { midnight: '#1a0505', blue: '#7f1d1d', gold: '#f97316', silver: '#fb923c', eyes: '#ffffff', pixel: false },
    mecha: { midnight: '#0f172a', blue: '#1e3a8a', gold: '#38bdf8', silver: '#94a3b8', eyes: '#7dd3fc', pixel: false },
    phantom: { midnight: '#1e1b4b', blue: '#4338ca', gold: '#818cf8', silver: '#c7d2fe', eyes: '#a5f3fc', pixel: false },
    parallel: { midnight: '#171717', blue: '#262626', gold: '#404040', silver: '#a3a3a3', eyes: '#525252', pixel: false }
};

const cloaks = {
    classroom: { title: "Classes", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
    desmos: { title: "Desmos | Graphing Calculator", icon: "https://www.desmos.com/favicon.ico" },
    canvas: { title: "Dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/br/dist/images/favicon-e1062957c5.ico" },
    google: { title: "Google", icon: "https://www.google.com/favicon.ico" },
    drive: { title: "My Drive - Google Drive", icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2020q4_32dp.png" }
};

function initiateCloak() {
    const targetKey = document.getElementById('cloakTarget').value;
    const data = cloaks[targetKey];
    if (data) {
        document.title = data.title;
        favicon.href = data.icon;
        showToast(`Cloak Active: ${data.title}`);
        toggleSettings();
    }
}

function loadContent(url, element) {
    contentFrame.src = url;
    contentFrame.classList.add('active');
    navItems.forEach(item => item.classList.remove('selected'));
    if(element) element.classList.add('selected');
    toggleSideNav();
    showToast("Accessing Database...");
}

function resetHome() {
    contentFrame.classList.remove('active');
    contentFrame.src = '';
    navItems.forEach(item => item.classList.remove('selected'));
    showToast("Returning to Base");
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
}

function applyPreset(key) {
    const t = themes[key];
    const root = document.documentElement;
    const body = document.body;
    root.style.setProperty('--mk-midnight', t.midnight);
    root.style.setProperty('--mk-blue', t.blue);
    root.style.setProperty('--mk-gold', t.gold);
    root.style.setProperty('--mk-silver', t.silver);
    root.style.setProperty('--mk-eye-glow', t.eyes);
    if (t.pixel) body.classList.add('pixel-theme');
    else body.classList.remove('pixel-theme');
}

let currentIndex = 0;
const baseUrl = "https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/theme-songs/";
const playlist = [
    "1-48. VS. Waning Masked Dedede & Waxing Masked Meta Knight.mp3",
    "Galacta Knight Battle - Kirby Super Star Ultra.mp3",
    "Inner Struggle (Vs. Mecha Knight) - Kirby_ Planet Robobot OST [067].mp3",
    "Kirby & The Amazing Mirror - Dark Meta Knight Battle.mp3",
    "Meta Knight Battle - Kirby Star Allies Music.mp3",
    "Meta Knight's Revenge Theme - Super Smash Bros. Ultimate.mp3",
    "Sword of the Surviving Guardian - Kirby and the Forgotten Land OST [038].mp3",
    "VS. Aeon Hero - Super Kirby Clash Music.mp3"
];

function loadSong(index) {
    audio.src = baseUrl + encodeURIComponent(playlist[index]);
    title.innerText = playlist[index].replace('.mp3', '');
}

function togglePlay() {
    if (audio.paused) { 
        audio.play().catch(() => {}); 
        playBtn.innerText = "။"; 
    } else { 
        audio.pause(); 
        playBtn.innerText = "▶"; 
    }
}

function changeTrack(dir) {
    currentIndex = (currentIndex + dir + playlist.length) % playlist.length;
    loadSong(currentIndex); 
    audio.play().catch(() => {}); 
    playBtn.innerText = "။";
}

function toggleRepeat() { 
    audio.loop = !audio.loop; 
    repeatBtn.style.color = audio.loop ? "var(--mk-gold)" : "var(--mk-silver)"; 
}

function toggleVisibility() { wrapper.classList.toggle('collapsed'); }
function toggleSettings() { document.getElementById('settingsModal').classList.toggle('active'); }
function toggleSideNav() { document.getElementById('side-nav').classList.toggle('active'); }

audio.onended = () => { if (!audio.loop) changeTrack(1); };
window.onload = () => { applyPreset('original'); loadSong(0); };
