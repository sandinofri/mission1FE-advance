import suzume from "../assets/suzume.png";
import jurassic from "../assets/jurassic world.png";
import sonic from "../assets/sonic.png";
import allOfDeath from "../assets/all of us are dead.png";
import bigHero from "../assets/big hero.png";
import tomorrow from "../assets/the tomorrow.png";
import quantum from "../assets/quantum.png";
import guardian from "../assets/guardian.png";
import calledOtto from "../assets/called otto.png";
import littleMermaid from "../assets/little mermaid.png";
import duty from "../assets/duty.png";
import missing from "../assets/missing.png";
import download from "../assets/download.png";
import ad from "../assets/advertisements-off.png";
import message from "../assets/message-reply-text.png";
import movie from "../assets/movie-roll.png";
import tablet from "../assets/tablet-cellphone.png";
import k from "../assets/video-4k-box.png";

export const topRating = [
  {
    id: 1,
    image: suzume,
    new: true,
  },
  {
    id: 2,
    image: jurassic,
    new: false,
  },
  {
    id: 3,
    image: sonic,
    new: false,
  },
  {
    id: 4,
    image: allOfDeath,
    new: true,
  },
  {
    id: 5,
    image: bigHero,
    new: false,
  },
];

export const filmTrending = [
  {
    id: 1,
    image: tomorrow,
    isTrending: true,
  },
  {
    id: 2,
    image: quantum,
    isTrending: true,
  },
  {
    id: 3,
    image: guardian,
    isTrending: true,
  },
  {
    id: 4,
    image: calledOtto,
    isTrending: true,
  },
  {
    id: 5,
    image: littleMermaid,
    isTrending: true,
  },
];

export const rilisBaru = [
  {
    id: 1,
    image: littleMermaid,
    isTrending: true,
    newEpisode: false,
  },
  {
    id: 2,
    image: duty,
    isTrending: false,
    newEpisode: true,
  },
  {
    id: 3,
    image: bigHero,
    isTrending: true,
    newEpisode: false,
  },
  {
    id: 4,
    image: allOfDeath,
    isTrending: false,
    newEpisode: true,
  },
  {
    id: 5,
    image: missing,
    isTrending: false,
    newEpisode: false,
  },
];

export const series = [
  {
    id: 1,
    image: littleMermaid,
    isPremium: true,
    isTrending: true,
  },
  {
    id: 2,
    image: duty,
    isPremium: true,
    isTrending: false,
  },
  {
    id: 3,
    image: bigHero,
    isPremium: true,
    isTrending: false,
  },
  {
    id: 4,
    image: allOfDeath,
    isPremium: true,
    isTrending: false,
  },
  {
    id: 5,
    image: missing,
    isPremium: true,
    isTrending: false,
  },
];

export const daftarSaya = [
  {
    id: 1,
    image: suzume,
    new: true,
    isTrending: false,
  },
  {
    id: 2,
    image: jurassic,
    new: false,
    isTrending: true,
  },
  {
    id: 3,
    image: sonic,
    new: false,
    isTrending: true,
  },
  {
    id: 4,
    image: allOfDeath,
    new: false,
    isTrending: false,
  },
  {
    id: 5,
    image: bigHero,
    new: true,
    isTrending: false,
  },
  {
    id: 6,
    image: tomorrow,
    new: false,
    isTrending: true,
  },
  {
    id: 7,
    image: quantum,
    new: true,
    isTrending: true,
  },
  {
    id: 8,
    image: guardian,
    new: false,
    isTrending: false,
  },
  {
    id: 9,
    image: calledOtto,
    new: true,
    isTrending: false,
  },
  {
    id: 10,
    image: littleMermaid,
    new: false,
    isTrending: true,
  },
  {
    id: 11,
    image: duty,
    new: true,
    isTrending: false,
  },
  {
    id: 12,
    image: missing,
    new: false,
    isTrending: true,
  },
];

export const kenapaLangganan = [
  {
    id: 1,
    image: download,
    title: "Download Konten Pilihan",
  },
  {
    id: 2,
    image: ad,
    title: "Tidak Ada Iklan",
  },
  {
    id: 3,
    image: movie,
    title: "Tonton Semua Konten",
  },
  {
    id: 4,
    image: k,
    title: "Kualitas Maksimal Sampai Dengan 4K",
  },
  {
    id: 5,
    image: tablet,
    title: "Tonton di Tv, Tablet,Mobile, dan Laptop",
  },
  {
    id: 6,
    image: message,
    title: "Subtittle Untuk Konten Pilihan",
  },
];

export const paket = [
  {
    id: 1,
    jenis: "Individu",
    harga: 49990,
    kualitas: "720p",
  },
  {
    id: 2,
    jenis: "Berdua",
    harga: 79990,
    kualitas: "1080p",
  },
  {
    id: 3,
    jenis: "Keluarga",
    harga: 159990,
    kualitas: "4k",
  },
];

export const users = [
  {
    id: 1,
    username: "Sandi",
    email: "sandi@gmail.com",
    password: 12345,
    isActive:false
  },

  {
    id: 2,
    username: "Nofri",
    email: "nofri@gmail.com",
    password: 12345,
    isActive:true
  },
];
