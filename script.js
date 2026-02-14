const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const title = document.getElementById('song-title');
const repeatBtn = document.getElementById('repeatBtn');
const wrapper = document.getElementById('playerWrapper');
const favicon = document.getElementById('favicon');
const contentFrame = document.getElementById('main-content');
const injectionPoint = document.getElementById('content-injection-point');
const navItems = document.querySelectorAll('.nav-item');

const themes = {
    original: { midnight: '#0a1128', blue: '#1a237e', gold: '#ffd700', silver: '#e0e0e0', eyes: '#ffeb3b', pixel: false },
    classic: { midnight: '#2a1b4d', blue: '#f62413', gold: '#f1bb01', silver: '#6055a1', eyes: '#fdff9a', pixel: true },
    dark: { midnight: '#111827', blue: '#374151', gold: '#9ca3af', silver: '#4b5563', eyes: '#ef4444', pixel: false },
    galacta: { midnight: '#2d0a1a', blue: '#be185d', gold: '#f472b6', silver: '#fce7f3', eyes: '#ffffff', pixel: false },
    morpho: { midnight: '#1a0505', blue: '#7f1d1d', gold: '#f97316', silver: '#fb923c', eyes: '#ffffff', pixel: false }
};

const cloaks = {
    classroom: { title: "Classes", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
    google: { title: "Google", icon: "https://www.google.com/favicon.ico" }
};


function executeExternalJS(url, element) {
    showToast("Initializing Neural Link...");
    
    navItems.forEach(item => item.classList.remove('selected'));
    if(element) element.classList.add('selected');
    toggleSideNav();

    
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    
    script.onload = () => {
        showToast("Access Granted");
        injectionPoint.style.display = 'block';
    };

    script.onerror = () => showToast("Link Severed (Error)");
    document.body.appendChild(script);
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
    location.reload(); 
}

// UI HELPERS
function toggleSideNav() { document.getElementById('side-nav').classList.toggle('active'); }
function toggleSettings() { document.getElementById('settingsModal').classList.toggle('active'); }
function toggleVisibility() { wrapper.classList.toggle('collapsed'); }

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
}

function applyPreset(key) {
    const t = themes[key];
    const root = document.documentElement;
    root.style.setProperty('--mk-midnight', t.midnight);
    root.style.setProperty('--mk-blue', t.blue);
    root.style.setProperty('--mk-gold', t.gold);
    root.style.setProperty('--mk-silver', t.silver);
    root.style.setProperty('--mk-eye-glow', t.eyes);
    if (t.pixel) document.body.classList.add('pixel-theme');
    else document.body.classList.remove('pixel-theme');
}

function initiateCloak() {
    const targetKey = document.getElementById('cloakTarget').value;
    const data = cloaks[targetKey];
    if (data) {
        document.title = data.title;
        favicon.href = data.icon;
        showToast(`Cloak Protocol: ${data.title}`);
        toggleSettings();
    }
}


let currentIndex = 0;
const baseUrl = "https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/theme-songs/";
const playlist = [
    "Meta Knight's Revenge Theme - Super Smash Bros. Ultimate.mp3",
    "Meta Knight Battle - Kirby Star Allies Music.mp3"
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

audio.onended = () => { if (!audio.loop) changeTrack(1); };
window.onload = () => { applyPreset('original'); loadSong(0); };
