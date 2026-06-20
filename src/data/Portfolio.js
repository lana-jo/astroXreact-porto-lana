import iMini from '../assets/porto/iMini.png';
import inv from '../assets/porto/invApp.png';
import contactApi from '../assets/porto/beCA.png';
import BookShelf from '../assets/porto/beBS.png';
import dataDiri from '../assets/porto/mockup-web-data-diri.jpg';
import perpus from '../assets/porto/mockup-perpusPHP.jpg';
import pw from '../assets/porto/la-pos-web.png';
import fNoteApp from '../assets/porto/mockup-flutter-NoteApp.jpg';

export const portfolios = [
    {
        title: 'PHP Library System',
        detail: 'Developed a web-based library management system with CRUD and authentication.',
        stack: 'PHP, MySQL, CRUD',
        github: 'https://github.com/lana-jo/PerpusPHP',
        img: perpus,
        live: 'https://lana-jo.latteace.com/'
    },
    {
        title: 'Next.js POS',
        detail: 'Modern Point of Sale application featuring real-time transaction tracking and inventory management.',
        stack: 'Next.js, Tailwind CSS, Supabase, TypeScript',
        img: pw,
        live: 'https://la-pos-web.vercel.app/'
    },
    {
        title: 'Mini Inventory App',
        detail: 'A lightweight inventory management application featuring real-time data synchronization and secure CRUD operations.',
        stack: 'Kotlin, Jetpack Compose, Supabase, MVVM, Coroutines, Flow',
        github: 'https://github.com/lana-jo/jetpack-compose-InventoryMini-supabase',
        img: iMini
    },
    {
        title: 'Inventory App',
        detail: 'Comprehensive inventory system featuring advanced search, secure user authentication, and offline data persistence.',
        stack: 'Kotlin, Jetpack Compose, Supabase, Room Database, DataStore, MVVM, WorkManager',
        github: 'https://github.com/lana-jo/jetpackCompose-CRUDSearch-Supabase',
        img: inv
    },
    {
        title: 'Book API Backend',
        detail: 'A scalable RESTful API designed for seamless book cataloging, featuring modular architecture and robust data validation.',
        stack: 'Node.js, Express.js, REST API, JSON, Postman',
        github: 'https://github.com/lana-jo/expressJSAPI',
        img: BookShelf
    },
    {
        title: 'Contact API Backend',
        detail: 'Enterprise-ready REST API for contact management, built with a focus on high performance and clean architectural principles.',
        stack: 'Java, Spring Boot, MySQL, JPA/Hibernate, Maven',
        github: 'https://github.com/lana-jo/JavaSpringBoot-Contact-API-mysql',
        img: contactApi
    },
    {
        title: 'Flutter NoteApp',
        detail: 'Cross-platform mobile note-taking app offering smooth UI and local data storage.',
        stack: 'Dart, Flutter, SQLite, Provider State Management',
        github: 'https://github.com/lana-jo/Flutter-crud-dasar',
        img: fNoteApp
    },
    {
        title: 'PHP Data Diri',
        detail: 'A personalized web-based digital portfolio and management system featuring dynamic content rendering.',
        stack: 'PHP Native, MySQL, HTML5, CSS3, JavaScript',
        github: 'https://github.com/lana-jo/contohCRUDDasarPHPNative',
        img: dataDiri
    },
];
