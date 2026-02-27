import ciscoImg from '../assets/certificates/cisco.png'
import bejs from '../assets/certificates/bejs.png'
import bejs1 from '../assets/certificates/bejs1.png'
import js from '../assets/certificates/js.png'
import js1 from '../assets/certificates/js1.png'
import js2 from '../assets/certificates/js2.png'
import aws from '../assets/certificates/aws restart.png'
import lana from '../assets/profile.png'

export const certificates = [
    {
        name: 'cisco cyber security',
        photo: ciscoImg
    },
    {
        name : 'Dicoding Back-End JavaScript',
        photo: [bejs, bejs1]
    },
    {
        name: 'Dicoding JavaScript',
        photo: [js,js1,js2]
    },
    {
        name: 'AWS Re/Start',
        photo: aws
    }
]

export const profile = {
    name: 'Lana Jauhar',
    title: 'Software Engineering',
    description:
        'Saya membantu membangun produk digital modern dengan pendekatan engineering yang rapi, terstruktur, dan fokus pada kebutuhan bisnis.',
    photo : lana
};

export const techStacks = [
    'Kotlin',
    'Java',
    'JavaScript',
    'PHP',
    'CSS',
    'Laravel',
    'Jetpack Compose',
    'Kotlin Multi Platform',
    'astro',
    'Express.js',
    'Flutter',
    'Spring Boot',
    'firebase',
    'supabase',
    'PostgreSQL',
    'MySQL',
];

export const experiences = [
    {
        period: "Juli 2025 - November 2025",
        role: "Teacher Network Engineering & Coding",
        company: "SMK Harapan Mulya",
        descriptions: [
            "Membimbing siswa dalam mengembangkan pola pikir berbasis algoritma.",
            "Membimbing penggunaan kecerdasan artifisial dalam pembelajaran.",
            "Praktikum pengembangan website dasar menggunakan HTML, CSS, dan JavaScript.",
            "Instalasi dan konfigurasi jaringan (wireless & wired) menggunakan MikroTik.",
            "Pembelajaran hardware komputer: fungsi, instalasi, dan maintenance.",
            "Konfigurasi file sharing dan printer sharing antar perangkat."
        ]
    },
    {
        period: "Maret 2024 - April 2025",
        role: "Teacher Software Engineering",
        company: "SMK Texmaco Semarang",
        descriptions: [
            "Praktikum IoT menggunakan Tinkercad.",
            "Pengembangan website dasar (HTML, CSS, JavaScript).",
            "Implementasi framework Laravel untuk aplikasi web terstruktur.",
            "Desain grafis menggunakan Canva untuk kebutuhan profesional.",
            "Konsep & implementasi database MySQL.",
            "Instalasi dan konfigurasi jaringan MikroTik.",
            "Pembelajaran hardware komputer dan maintenance.",
            "Konfigurasi file & printer sharing."
        ]
    },
    {
        period: "Jun 2023 - Des 2023",
        role: "Software Developer",
        company: "PT Bangun Nusa Network",
        descriptions: [
            "Berkontribusi dalam pengembangan aplikasi Sales Task Android.",
            "Pengembangan aplikasi presensi berbasis Android.",
            "Maintainance aplikasi yang sudah ada"
        ]
    },
    {
        period: "Agu 2021 - Jan 2022",
        role: "Internship Back End Developer",
        company: "CV Umbrella Corporation",
        descriptions: [
            "Membangun fitur CRUD, Search, dan Authentication menggunakan Spring Boot."
        ]
    }
];

export const portfolios = [
    {
        title: 'Aplikasi Inventory Mini',
        detail: 'Pengembangan aplikasi pencatatatan barang dengan fitur CRUD',
        stack: 'Kotlin, Jetpack Compose,MVP architecture, CRUD, Supabase',

        github: 'https://github.com/lana-jo/jetpack-compose-InventoryMini-supabase'
    },
    {
        title: 'Aplikasi Inventory',
        detail: 'Pengembangan aplikasi pencatatatan barang dengan fitur CRUD, search data, auth.',
        stack: 'Kotlin, Jetpack Compose, MVVM architecture, CRUD, Search, Auth, Room, Work Manager, Supabase',
        github: 'https://github.com/lana-jo/jetpackCompose-CRUDSearch-Supabase'
    },
    {
        title: 'API Backend Book',
        detail: 'Membangun REST API modular Book untuk kebutuhan aplikasi multi-platform.',
        stack: 'Express.js',
        github: 'https://github.com/lana-jo/expressJSAPI'
    },
    {
        title: 'API Backend Contact',
        detail: 'Membangun REST API modular Contact untuk kebutuhan aplikasi multi-platform.',
        stack: 'Java, Springboot, Mysql',
        github: 'https://github.com/lana-jo/JavaSpringBoot-Contact-API-mysql'
    },
    {
        title: 'NoteApp',
        detail: 'Pengembangan aplikasi pencatatatan dengan fitur CRUD',
        stack: 'Kotlin, Xml, Room, CRUD',
        github: 'https://github.com/lana-jo/NoteApp'
    },
    {
        title: 'Flutter NoteApp',
        detail: 'Pengembangan aplikasi dengan fitur CRUD',
        stack: 'Dart, Flutter, Room, CRUD',
        github: 'https://github.com/lana-jo/Flutter-crud-dasar'
    },
    {
        title: 'PHP NoteApp',
        detail: 'Pengembangan Web dengan fitur CRUD',
        stack: 'PHP, Mysql, CRUD',
        github: 'https://github.com/lana-jo/contohCRUDDasarPHPNative'
    },
    {
        title: 'PHP Perpus',
        detail: 'Pengembangan Web dengan fitur CRUD, auth',
        stack: 'PHP, Mysql, CRUD',
        github: 'https://github.com/lana-jo/PerpusPHP'
    },
];