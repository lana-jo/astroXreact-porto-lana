import iMini from '../assets/porto/iMini.png';
import inv from '../assets/porto/invApp.png';
import contactApi from '../assets/porto/beCA.png';
import BookShelf from '../assets/porto/beBS.png';
import dataDiri from '../assets/porto/mockup-web-data-diri.jpg';
import perpus from '../assets/porto/mockup-perpusPHP.jpg';
import fNoteApp from '../assets/porto/mockup-flutter-NoteApp.jpg'
export const portfolios = [

    {
        title: 'Mini Inventory App',
        detail: 'Developed an inventory tracking app with full CRUD functionality.',
        stack: 'Kotlin, Jetpack Compose, MVP Architecture, CRUD, Supabase',
        github: 'https://github.com/lana-jo/jetpack-compose-InventoryMini-supabase',
        img: iMini

    },
    {
        title: 'Inventory App',
        detail: 'Built an inventory management app with CRUD, search, and authentication features.',
        stack: 'Kotlin, Jetpack Compose, MVVM Architecture, CRUD, Search, Auth, Room, Work Manager, Supabase',
        github: 'https://github.com/lana-jo/jetpackCompose-CRUDSearch-Supabase',
        img: inv
    },
    {
        title: 'Book API Backend',
        detail: 'Developed a modular REST API for book management across multiple platforms.',
        stack: 'Express.js',
        github: 'https://github.com/lana-jo/expressJSAPI',
        img: BookShelf
    },
    {
        title: 'Contact API Backend',
        detail: 'Built a modular REST API for contact management supporting multi-platform apps.',
        stack: 'Java, Spring Boot, MySQL',
        github: 'https://github.com/lana-jo/JavaSpringBoot-Contact-API-mysql',
        img: contactApi
    },
    // {
    //     title: 'NoteApp',
    //     detail: 'Created a note-taking app with full CRUD operations.',
    //     stack: 'Kotlin, XML, Room, CRUD',
    //     github: 'https://github.com/lana-jo/NoteApp',
    //     // img:
    // },
    {
        title: 'Flutter NoteApp',
        detail: 'Developed a cross-platform note app with CRUD functionality.',
        stack: 'Dart, Flutter, Room, CRUD',
        github: 'https://github.com/lana-jo/Flutter-crud-dasar',
        img: fNoteApp
    },
    {
        title: 'PHP Data Diri',
        detail: 'Built a web-based note-taking application with CRUD features.',
        stack: 'PHP, MySQL, CRUD',
        github: 'https://github.com/lana-jo/contohCRUDDasarPHPNative',
        img: dataDiri
    },
    {
        title: 'PHP Library System',
        detail: 'Developed a web-based library management system with CRUD and authentication.',
        stack: 'PHP, MySQL, CRUD',
        github: 'https://github.com/lana-jo/PerpusPHP',
        img: perpus
    }
];