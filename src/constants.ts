import { ThemePreset, CloakOption, Song } from './types';

export const THEMES: Record<string, ThemePreset> = {
  original: {
    name: 'Meta Knight (Original)',
    midnight: '#0a1128',
    eyes: '#ffeb3b',
    gold: '#ffd700',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/sean-gorman-galactabattle.jpg',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Meta_Knight_Logo.webp'
  },
  classic: {
    name: 'Classic Meta Knight (8-Bit)',
    midnight: '#2a1b4d',
    eyes: '#fdff9a',
    gold: '#ffda44',
    pixel: true,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/argb6b7heiv81.png',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/meta-knights-galaxia-sword-v0-pratfn5zqwbb1-removebg-preview.png'
  },
  dark: {
    name: 'Dark Meta Knight',
    midnight: '#111827',
    eyes: '#ef4444',
    gold: '#ff2a50',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/RaFxim.webp',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/yr10lm032g111-removebg-preview.png'
  },
  galacta: {
    name: 'Galacta Knight',
    midnight: '#2d0a1a',
    eyes: '#ffffff',
    gold: '#ff8eb1',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Galacta-Knight-peak.jpg',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/galacta-knight.png'
  },
  morpho: {
    name: 'Morpho Knight',
    midnight: '#1a0505',
    eyes: '#ff7700',
    gold: '#ff4d00',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/morpho-knight.jpeg',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Morpho_Knight_icon.webp'
  },
  mecha: {
    name: 'Mecha Knight',
    midnight: '#0b162a',
    eyes: '#00ffff',
    gold: '#00ffff',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/KPR_Mecha_Knight_Infobox.jpg',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/mecha-knight-icon.png'
  },
  phantom: {
    name: 'Phantom Meta Knight',
    midnight: '#130a1e',
    eyes: '#00fff2',
    gold: '#00fff2',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Phantom_MK-Picsart-AiImageEnhancer.webp',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/FL_Phantom_MK-modified.png'
  },
  parallel: {
    name: 'Parallel Meta Knight',
    midnight: '#121212',
    eyes: '#ffeb3b',
    gold: '#ffeb3b',
    pixel: false,
    bg: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Parallel_Meta_Knight_Splash_Screen.webp',
    logo: 'https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Ds6OqHcWwAAmiNu-modified.png'
  }
};

export const CLOAKS: Record<string, CloakOption> = {
  classroom: { title: "Classes", icon: "https://www.google.com/s2/favicons?domain=classroom.google.com&sz=64" },
  clever: { title: "Clever | Portal", icon: "https://www.google.com/s2/favicons?domain=clever.com&sz=64" },
  edpuzzle: { title: "Edpuzzle", icon: "https://www.google.com/s2/favicons?domain=edpuzzle.com&sz=64" },
  ixl: { title: "IXL | Personalized Learning", icon: "https://www.google.com/s2/favicons?domain=ixl.com&sz=64" },
  gmail: { title: "Gmail", icon: "https://www.google.com/s2/favicons?domain=mail.google.com&sz=64" },
  docs: { title: "Google Docs", icon: "https://www.google.com/s2/favicons?domain=docs.google.com&sz=64" },
  slides: { title: "Google Slides", icon: "https://www.google.com/s2/favicons?domain=slides.google.com&sz=64" },
  khan: { title: "Khan Academy", icon: "https://www.google.com/s2/favicons?domain=khanacademy.org&sz=64" },
  desmos: { title: "Desmos | Graphing Calculator", icon: "https://www.google.com/s2/favicons?domain=desmos.com&sz=64" },
  canvas: { title: "Dashboard", icon: "https://www.google.com/s2/favicons?domain=canvas.instructure.com&sz=64" },
  google: { title: "Google", icon: "https://www.google.com/s2/favicons?domain=google.com&sz=64" },
  drive: { title: "My Drive - Google Drive", icon: "https://www.google.com/s2/favicons?domain=drive.google.com&sz=64" }
};

export const PLAYLIST: Song[] = [
  { title: "VS. Waning Masked Dedede & Waxing Masked Meta Knight", filename: "1-48. VS. Waning Masked Dedede & Waxing Masked Meta Knight.mp3" },
  { title: "Galacta Knight Battle - Kirby Super Star Ultra", filename: "Galacta Knight Battle - Kirby Super Star Ultra.mp3" },
  { title: "Inner Struggle (Vs. Mecha Knight) - Kirby Planet Robobot", filename: "Inner Struggle (Vs. Mecha Knight) - Kirby_ Planet Robobot OST [067].mp3" },
  { title: "Dark Meta Knight Battle - Amazing Mirror", filename: "Kirby & The Amazing Mirror - Dark Meta Knight Battle.mp3" },
  { title: "Meta Knight Battle - Kirby Star Allies", filename: "Meta Knight Battle - Kirby Star Allies Music.mp3" },
  { title: "Meta Knight's Revenge Theme - Smash Ultimate", filename: "Meta Knight's Revenge Theme - Super Smash Bros. Ultimate.mp3" },
  { title: "Sword of the Surviving Guardian - Forgotten Land", filename: "Sword of the Surviving Guardian - Kirby and the Forgotten Land OST [038].mp3" },
  { title: "VS. Aeon Hero - Super Kirby Clash", filename: "VS. Aeon Hero - Super Kirby Clash Music.mp3" }
];

export const MUSIC_BASE_URL = "https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/theme-songs/";
