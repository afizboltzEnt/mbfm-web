export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export interface RegionalChair {
  region: string;
  name: string;
  image: string;
}

export interface MediaArticle {
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export const siteInfo = {
  name: "Majlis Belia FELDA Malaysia",
  shortName: "MBFM",
  description:
    "Majlis Belia Felda Malaysia ialah sebuah badan bukan kerajaan yang ditubuhkan oleh belia dari tanah rancangan Lembaga Kemajuan Tanah Persekutuan (FELDA).",
  founded: "7 Ogos 1991",
  foundingMembers: "59,836",
  regions: 11,
  states: 7,
  branches: 308,
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "7 Ogos 1991",
    title: "Penubuhan Majlis Belia Felda Malaysia",
    description:
      "Majlis Belia Felda Malaysia telah ditubuhkan dengan rasmi dan didaftarkan pada 7 Ogos 1991 dengan keahlian seramai 59,836 orang.",
  },
  {
    date: "9 Oktober 1991",
    title: "Mesyuarat Agung Kali Pertama",
    description:
      "Mesyuarat Agung Kali Pertama telah diadakan pada 9 Oktober 1991 di Institut Pembangunan Tanah FELDA (INPUT) yang disempurnakan oleh YB Encik Yassin Kamari, Timbalan Menteri Pembangunan Negara dan Luar Bandar Malaysia.",
  },
  {
    date: "26 Jun 2008",
    title: "Pendaftar Pertubuhan Belia (ROY)",
    description:
      "Pada 26 Jun 2008, Majlis Belia Felda Malaysia telah berdaftar dengan Pendaftar Pertubuhan Belia (ROY), Kementerian Belia dan Sukan Malaysia.",
  },
];

export const objectives = [
  "Menggalakkan dan menguatkan pergerakan persatuan belia di rancangan FELDA di seluruh Malaysia.",
  "Menjadi badan perunding dan penyelaras untuk menyusun pergerakan belia di rancangan FELDA seluruh Malaysia.",
  "Mewakili belia FELDA untuk memberikan sokongan kepada kerajaan dan agensi yang diakui sah.",
  "Menggalakkan persatuan belia di dalam FELDA bertanggungjawab penuh dalam kegiatan sivik dan kehidupan bermasyarakat.",
  "Menyebarkan penerangan dan maklumat mengenai teknik dan kegiatan persatuan belia.",
];

export const executives: TeamMember[] = [
  {
    name: "Ahmad Faizal Bin Sulaiman",
    position: "Presiden",
    image: "/images/team/ahmad-faizal.png",
  },
  {
    name: "Muhammad Mustaqim Bin Hassan",
    position: "Timbalan Presiden",
    image: "/images/team/muhammad-mustaqim.png",
  },
  {
    name: "Mohd Aminullah Bin A Wahab",
    position: "Pengerusi Tetap",
    image: "/images/team/mohd-aminullah.png",
  },
  {
    name: "Khairul Nizam Bin Mohd Sharif",
    position: "Timbalan Pengerusi Tetap",
    image: "/images/team/khairul-nizam.png",
  },
  {
    name: "Mohammad Taufik Bin Sairi",
    position: "Naib Presiden 1",
    image: "/images/team/mohammad-taufik.png",
  },
  {
    name: "Mohamad Suhail Bin Sulaiman",
    position: "Naib Presiden 2",
    image: "/images/team/mohamad-suhail.png",
  },
  {
    name: "Norsufiani Bin Suliaman",
    position: "Naib Presiden 3",
    image: "/images/team/norsufiani.png",
  },
  {
    name: "Mohamad Nizam Bin Joha",
    position: "Naib Presiden 4",
    image: "/images/team/mohamad-nizam.png",
  },
  {
    name: "Mohammad Syahiran Bin Annuar",
    position: "Setiausaha Agung",
    image: "/images/team/mohammad-syahiran.png",
  },
  {
    name: "Muhamad Iqmal Bin Mahadi",
    position: "Bendahari Agung",
    image: "/images/team/muhamad-iqmal.png",
  },
  {
    name: "Mohamad Suffian Bin Jantan Ahmat Mispar",
    position: "Ketua Penerangan",
    image: "/images/team/mohamad-suffian.png",
  },
  {
    name: "Muhamad Saiful Hanif Bin Khairi",
    position: "Penolong Setiausaha Agung",
    image: "/images/team/muhamad-saiful.png",
  },
  {
    name: "Mohd Saifudin Bin Ismail",
    position: "Penolong Bendahari Agung",
    image: "/images/team/mohd-saifudin.png",
  },
  {
    name: "Tauw Fek Bin Maslam",
    position: "Penolong Ketua Penerangan",
    image: "/images/team/tauw-fek.png",
  },
];

export const committeeMembers: TeamMember[] = [
  {
    name: "Tauw Fek Bin Maslam",
    position: "Ahli Jawatankuasa",
    image: "/images/team/tauw-fek.png",
  },
  {
    name: "Muhammad Afiq Bin Rosdi",
    position: "Ahli Jawatankuasa",
    image: "/images/team/muhammad-afiq.png",
  },
  {
    name: "Muhammad Firdaus Bin Marju",
    position: "Ahli Jawatankuasa",
    image: "/images/team/muhammad-firdaus.png",
  },
  {
    name: "Ahmad Zahrul Asuad Bin Wahab",
    position: "Ahli Jawatankuasa",
    image: "/images/team/ahmad-zahrul.png",
  },
  {
    name: "Romzie Bin Rosdee",
    position: "Ahli Jawatankuasa",
    image: "/images/team/romzie.png",
  },
  {
    name: "Radziyatun Binti Tulimin",
    position: "Ahli Jawatankuasa",
    image: "/images/team/radziyatun.png",
  },
  {
    name: "Muhamad Hisyamuddin Bin Mohd Halid",
    position: "Ahli Jawatankuasa",
    image: "/images/team/muhamad-hisyamuddin.png",
  },
  {
    name: "Mohamad Fikry Bin Nasri",
    position: "Ahli Jawatankuasa",
    image: "/images/team/mohamad-fikry.png",
  },
  {
    name: "Kamrul Firdaus Bin Mansor",
    position: "Ahli Jawatankuasa",
    image: "/images/team/kamrul-firdaus.png",
  },
  {
    name: "Mohamad Zulman Hazwan Bin Yahya",
    position: "Ahli Jawatankuasa",
    image: "/images/team/mohamad-zulman.png",
  },
  {
    name: "Rushihan Amri Bin Zakaria",
    position: "Ahli Jawatankuasa",
    image: "/images/team/rushihan.png",
  },
  {
    name: "Datu Rosman Bin Datu Ahir Zaman",
    position: "Pemeriksa Kira-Kira 1",
    image: "/images/team/datu-rosman.png",
  },
  {
    name: "Mohd Shukry Bin Samsudin",
    position: "Pemeriksa Kira-Kira 2",
    image: "/images/team/mohd-shukry.png",
  },
];

export const regionalChairs: RegionalChair[] = [
  {
    region: "Jengka",
    name: "Ahmad Faizal Bin Sulaiman",
    image: "/images/team/ahmad-faizal.png",
  },
  {
    region: "Mempaga",
    name: "Mohamad Suhail Bin Sulaiman",
    image: "/images/team/mohamad-suhail.png",
  },
  {
    region: "Kuantan",
    name: "Mohd Nasrul Naim Bin Alias",
    image: "/images/team/mohd-nasrul.png",
  },
  {
    region: "Raja Alias",
    name: "Tauw Fek Bin Maslan",
    image: "/images/team/tauw-fek.png",
  },
  {
    region: "Segamat",
    name: "Mohd Nordin Bin Abdul Rasid",
    image: "/images/team/mohd-nordin.png",
  },
  {
    region: "Johor Bahru",
    name: "Muhammad Firdaus Bin Marju",
    image: "/images/team/muhammad-firdaus.png",
  },
  {
    region: "Alor Setar",
    name: "Mohd Shukry Bin Samsudin",
    image: "/images/team/mohd-shukry.png",
  },
  {
    region: "Trolak",
    name: "Mohd Saiful Bin Jamaludin",
    image: "/images/team/mohd-saiful-jamaludin.png",
  },
  {
    region: "Gua Musang",
    name: "Rushihan Amri Bin Zakaria",
    image: "/images/team/rushihan.png",
  },
  {
    region: "Terengganu",
    name: "Mohammad Syahiran Bin Annuar",
    image: "/images/team/mohammad-syahiran.png",
  },
  {
    region: "Sahabat",
    name: "Datu Rosman Bin Datu Ahir Zaman",
    image: "/images/team/datu-rosman.png",
  },
];

export const formerChairman: TeamMember = {
  name: "YBhg. Dato' Sri Ahmad Shabery Cheek",
  position: "Mantan Pengerusi MBFM (1 Julai 2023 - Sekarang)",
  image: "/images/team/mantan-pengerusi.png",
};

export const mediaArticles: MediaArticle[] = [
  {
    title: "Mesyuarat Perhimpunan Agung Tahunan (MPAT) ke-74 Majlis Belia Malaysia",
    date: "2026",
    summary:
      "Majlis Belia FELDA Malaysia telah menghadiri Mesyuarat Perhimpunan Agung Tahunan (MPAT) ke-74 Majlis Belia Malaysia.",
    image: "/images/media/mpat-74.jpg",
    slug: "mpat-ke-74",
  },
  {
    title: "Lawatan AKRF Separuh Akhir FELDA Wilayah Terengganu",
    date: "28 April 2025",
    summary:
      "Wakil MBFM, Sdr. Mohammad Taufik bin Sairi telah menghadiri lawatan ke Wilayah Terengganu.",
    image: "/images/media/akrf-terengganu.jpg",
    slug: "akrf-terengganu",
  },
  {
    title: "Lawatan AKRF Semi Final 2025 FELDA Wilayah Jengka dan Raja Alias",
    date: "17 April 2025",
    summary:
      "Wakil MBFM telah menghadiri lawatan AKRF Semi Final ke Wilayah Jengka dan Raja Alias.",
    image: "/images/media/akrf-jengka.jpg",
    slug: "akrf-jengka",
  },
  {
    title: "Presiden MBFM Lawat AKRF Semi Final 2025 FELDA Wilayah Jengka",
    date: "16 April 2025",
    summary:
      "Presiden MBFM, Sdr. Ahmad Faizal Sulaiman telah melawat AKRF Semi Final di Wilayah Jengka.",
    image: "/images/media/akrf-presiden.jpg",
    slug: "akrf-presiden",
  },
  {
    title: "Mesyuarat JKKT Bil 2/2025 dan Majlis Berbuka Puasa FELDA Bersama YAB Perdana Menteri",
    date: "26 Mac 2025",
    summary:
      "Mesyuarat Jawatankuasa Kerja Tertinggi (JKKT) Bil 2/2025 dan majlis berbuka puasa FELDA bersama YAB Perdana Menteri di Menara FELDA.",
    image: "/images/media/jkkt-berbuka.jpg",
    slug: "jkkt-berbuka",
  },
  {
    title: "Karnival Ihya' Ramadhan FELDA Wilayah Terengganu 2025",
    date: "22 Mac 2025",
    summary:
      "Karnival Ramadan di FELDA Kerteh 3, Wilayah Terengganu bagi menyemarakkan Ramadan dengan semangat kebersamaan.",
    image: "/images/media/karnival-terengganu.jpg",
    slug: "karnival-terengganu",
  },
  {
    title: "Program Ihya Ramadan FELDA Wilayah Sahabat",
    date: "18 Mac 2025",
    summary:
      "Program Ihya Ramadan bagi mengeratkan silaturahim dan keprihatinan dalam komuniti di FELDA Wilayah Sahabat.",
    image: "/images/media/ihya-sahabat.jpg",
    slug: "ihya-sahabat",
  },
  {
    title: "Kembara Ihya Ramadan FELDA Wilayah Trolak",
    date: "14 Mac 2025",
    summary:
      "Program Kembara Ihya Ramadan bagi mengukuhkan kasih sayang dan silaturahim sesama warga FELDA di Wilayah Trolak.",
    image: "/images/media/kembara-trolak.jpg",
    slug: "kembara-trolak",
  },
  {
    title: "Program Jelajah MYKD MBFM Wilayah Mempaga",
    date: "23 Februari 2025",
    summary:
      "Program Jelajah Maklumat (MYKD) oleh MBFM bagi meningkatkan pematuhan dan keberkesanan pengurusan belia FELDA di Bera, Pahang.",
    image: "/images/media/jelajah-mempaga.jpg",
    slug: "jelajah-mempaga",
  },
];
