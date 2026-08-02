import iMini from '../assets/porto/iMini.png';
import inv from '../assets/porto/invApp.png';
import contactApi from '../assets/porto/beCA.png';
import BookShelf from '../assets/porto/beBS.png';
import dataDiri from '../assets/porto/mockup-web-data-diri.jpg';
import perpus from '../assets/porto/mockup-perpusPHP.jpg';
import pw from '../assets/porto/la-pos-web.png';
import fNoteApp from '../assets/porto/mockup-flutter-NoteApp.jpg';
import type { Project } from './types';

export const projects: Project[] = [
	{
		title: 'PHP Library System',
		titleId: 'Sistem Perpustakaan PHP',
		detail: 'Developed a web-based library management system with CRUD and authentication.',
		detailId: 'Mengembangkan sistem manajemen perpustakaan berbasis web dengan CRUD dan autentikasi.',
		stack: 'PHP, MySQL, CRUD',
		github: 'https://github.com/lana-jo/PerpusPHP',
		img: perpus
	},
	{
		title: 'NEXTJS POS',
		titleId: 'POS NEXTJS',
		detail: 'Modern Point of Sale application featuring real-time transaction tracking and inventory management.',
		detailId:
			'Aplikasi Point of Sale modern dengan pelacakan transaksi real-time dan manajemen inventaris.',
		stack: 'Next.js, Tailwind CSS, Supabase, TypeScript',
		img: pw
	},
	{
		title: 'Mini Inventory App',
		titleId: 'Aplikasi Inventaris Mini',
		detail:
			'A lightweight inventory management application featuring real-time data synchronization and secure CRUD operations.',
		detailId:
			'Aplikasi manajemen inventaris ringan dengan sinkronisasi data real-time dan operasi CRUD yang aman.',
		stack: 'Kotlin, Jetpack Compose, Supabase, MVVM Architecture, Coroutines, Flow',
		github: 'https://github.com/lana-jo/jetpack-compose-InventoryMini-supabase',
		img: iMini
	},
	{
		title: 'Inventory App',
		titleId: 'Aplikasi Inventaris',
		detail:
			'Comprehensive inventory system featuring advanced search, secure user authentication, and offline data persistence using local database.',
		detailId:
			'Sistem inventaris komprehensif dengan pencarian lanjutan, autentikasi pengguna yang aman, dan penyimpanan data offline menggunakan database lokal.',
		stack: 'Kotlin, Jetpack Compose, Supabase, Room Database, DataStore, MVVM, WorkManager',
		github: 'https://github.com/lana-jo/jetpackCompose-CRUDSearch-Supabase',
		img: inv
	},
	{
		title: 'Book API Backend',
		titleId: 'Backend API Buku',
		detail:
			'A scalable RESTful API designed for seamless book cataloging, featuring modular architecture and robust data validation.',
		detailId:
			'REST API yang scalable untuk katalog buku, dengan arsitektur modular dan validasi data yang kuat.',
		stack: 'Node.js, Express.js, REST API, JSON, Postman',
		github: 'https://github.com/lana-jo/expressJSAPI',
		img: BookShelf
	},
	{
		title: 'Contact API Backend',
		titleId: 'Backend API Kontak',
		detail:
			'Enterprise-ready REST API for contact management, built with a focus on high performance and clean architectural principles.',
		detailId:
			'REST API siap produksi untuk manajemen kontak, dibangun dengan fokus pada performa tinggi dan prinsip arsitektur yang bersih.',
		stack: 'Java, Spring Boot, MySQL, JPA/Hibernate, Maven',
		github: 'https://github.com/lana-jo/JavaSpringBoot-Contact-API-mysql',
		img: contactApi
	},
	{
		title: 'Flutter NoteApp',
		titleId: 'Aplikasi Catatan Flutter',
		detail:
			'Cross-platform mobile note-taking app offering smooth UI and local data storage, ensuring high user accessibility.',
		detailId:
			'Aplikasi pencatatan lintas platform dengan UI yang halus dan penyimpanan data lokal untuk aksesibilitas pengguna yang tinggi.',
		stack: 'Dart, Flutter, SQLite, Provider State Management',
		github: 'https://github.com/lana-jo/Flutter-crud-dasar',
		img: fNoteApp
	},
	{
		title: 'PHP Data Diri',
		titleId: 'PHP Data Diri',
		detail:
			'A personalized web-based digital portfolio and management system featuring dynamic content rendering and database integration.',
		detailId:
			'Portofolio digital berbasis web dan sistem manajemen dengan rendering konten dinamis dan integrasi database.',
		stack: 'PHP Native, MySQL, HTML5, CSS3, JavaScript',
		github: 'https://github.com/lana-jo/contohCRUDDasarPHPNative',
		img: dataDiri
	}
];
