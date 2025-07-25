// Data kursus MariBelajar
const coursesData = [
    {
        id: 1,
        title: "HTML & CSS Dasar",
        category: "web-development",
        categoryLabel: "Web Development",
        image: "images/HTML & CSS Dasar.png",
        price: 199000,
        instructor: "Ahmad Rahman",
        instructorPhoto: "images/Ahmad Rahman.jpg",
        duration: "8 jam",
        level: "Pemula",
        rating: 4.8,
        students: 1250,
        description: "Pelajari dasar-dasar HTML dan CSS untuk membangun website yang menarik dan responsif. Kursus ini dirancang khusus untuk pemula yang ingin memulai karir di dunia web development.",
        longDescription: `
            <p>Kursus HTML & CSS Dasar ini akan membawa Anda dari nol hingga mampu membuat website yang menarik dan responsif. Anda akan mempelajari:</p>
            <ul>
                <li>Struktur dasar HTML5</li>
                <li>Styling dengan CSS3</li>
                <li>Layout responsif dengan Flexbox dan Grid</li>
                <li>Best practices dalam web development</li>
                <li>Optimasi performa website</li>
            </ul>
            <p>Setelah menyelesaikan kursus ini, Anda akan memiliki portfolio website yang siap untuk ditampilkan kepada calon employer atau klien.</p>
        `,
        curriculum: [
            {
                week: 1,
                title: "Pengenalan HTML",
                topics: ["Struktur HTML", "Tag dasar", "Semantic HTML", "Forms dan Input"]
            },
            {
                week: 2,
                title: "Styling dengan CSS",
                topics: ["Selektor CSS", "Box Model", "Colors dan Typography", "Layout dasar"]
            },
            {
                week: 3,
                title: "Layout Responsif",
                topics: ["Flexbox", "CSS Grid", "Media Queries", "Mobile-first design"]
            },
            {
                week: 4,
                title: "Project Akhir",
                topics: ["Membuat website portfolio", "Optimasi", "Deployment", "Best practices"]
            }
        ],
        requirements: [
            "Tidak ada pengalaman programming sebelumnya",
            "Komputer dengan koneksi internet",
            "Semangat belajar yang tinggi"
        ],
        outcomes: [
            "Mampu membuat website statis yang menarik",
            "Memahami prinsip responsive design",
            "Siap untuk melanjutkan ke framework JavaScript",
            "Portfolio website yang siap ditampilkan"
        ],
        videos: [
            { week: 1, topic: "Struktur HTML", file: "video/html-struktur.mp4" },
            { week: 2, topic: "Selektor CSS", file: "video/css-selektor.mp4" },
            { week: 3, topic: "Flexbox", file: "video/flexbox.mp4" },
            { week: 4, topic: "Membuat website portfolio", file: "video/website-portfolio.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu tag <html>?", options: ["Tag pembuka dokumen HTML", "Tag untuk gambar", "Tag untuk link", "Tag untuk CSS"], answer: "Tag pembuka dokumen HTML" }
            ]},
            { week: 2, questions: [
                { question: "Apa fungsi selektor CSS?", options: ["Memilih elemen HTML untuk diberi style", "Membuat gambar", "Menambah script", "Membuat tabel"], answer: "Memilih elemen HTML untuk diberi style" }
            ]},
            { week: 3, questions: [
                { question: "Flexbox digunakan untuk?", options: ["Layout responsif", "Menambah warna", "Membuat animasi", "Mengatur font"], answer: "Layout responsif" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan project akhir?", options: ["Membuat website portfolio", "Membuat database", "Membuat aplikasi mobile", "Membuat game"], answer: "Membuat website portfolio" }
            ]}
        ]
    },
    {
        id: 2,
        title: "JavaScript Modern",
        category: "web-development",
        categoryLabel: "Web Development",
        image: "images/JavaScript Modern.jpg",
        price: 299000,
        instructor: "Sarah Wijaya",
        instructorPhoto: "images/Sarah Wijaya.jpg",
        duration: "12 jam",
        level: "Menengah",
        rating: 4.9,
        students: 890,
        description: "Kuasai JavaScript modern dengan ES6+ dan framework populer. Pelajari konsep async programming, DOM manipulation, dan modern JavaScript patterns.",
        longDescription: `
            <p>JavaScript Modern adalah kursus lanjutan yang akan membawa kemampuan JavaScript Anda ke level berikutnya. Anda akan mempelajari fitur-fitur modern JavaScript dan bagaimana menggunakannya secara efektif.</p>
            <ul>
                <li>ES6+ Features (Arrow functions, Destructuring, Modules)</li>
                <li>Async Programming (Promises, Async/Await)</li>
                <li>DOM Manipulation dan Event Handling</li>
                <li>Modern JavaScript Patterns</li>
                <li>Error Handling dan Debugging</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "ES6+ Fundamentals",
                topics: ["Arrow Functions", "Destructuring", "Template Literals", "Default Parameters"]
            },
            {
                week: 2,
                title: "Async Programming",
                topics: ["Callbacks", "Promises", "Async/Await", "Error Handling"]
            },
            {
                week: 3,
                title: "DOM dan Events",
                topics: ["DOM Manipulation", "Event Handling", "Event Delegation", "Custom Events"]
            },
            {
                week: 4,
                title: "Modern Patterns",
                topics: ["Modules", "Classes", "Generators", "Project Implementation"]
            }
        ],
        requirements: [
            "Pemahaman dasar HTML dan CSS",
            "Pengalaman programming dasar",
            "Komputer dengan browser modern"
        ],
        outcomes: [
            "Menguasai fitur-fitur modern JavaScript",
            "Mampu membuat aplikasi web interaktif",
            "Siap untuk belajar framework seperti React atau Vue",
            "Memahami async programming patterns"
        ],
        videos: [
            { week: 1, topic: "ES6+ Fundamentals", file: "video/es6-fundamentals.mp4" },
            { week: 2, topic: "Async Programming", file: "video/async-programming.mp4" },
            { week: 3, topic: "DOM dan Events", file: "video/dom-events.mp4" },
            { week: 4, topic: "Modern Patterns", file: "video/modern-patterns.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu arrow function?", options: ["Fungsi biasa", "Fungsi panjang", "Fungsi panjang", "Fungsi panjang"], answer: "Fungsi panjang" }
            ]},
            { week: 2, questions: [
                { question: "Apa fungsi Promises?", options: ["Menangani asynchronus operasi", "Menangani synchronus operasi", "Menangani operasi", "Menangani operasi"], answer: "Menangani asynchronus operasi" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu event delegation?", options: ["Menangani event", "Menangani event", "Menangani event", "Menangani event"], answer: "Menangani event" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari modern patterns?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 3,
        title: "React.js Fundamentals",
        category: "web-development",
        categoryLabel: "Web Development",
        image: "images/React.js Fundamentals.jpg",
        price: 399000,
        instructor: "Budi Santoso",
        instructorPhoto: "images/Budi Santoso.jpg",
        duration: "15 jam",
        level: "Menengah",
        rating: 4.7,
        students: 650,
        description: "Belajar React.js dari dasar hingga mahir dengan project nyata. Pelajari hooks, state management, dan best practices dalam React development.",
        longDescription: `
            <p>React.js Fundamentals adalah kursus komprehensif yang akan mengajarkan Anda cara membangun aplikasi web modern menggunakan React. Dari konsep dasar hingga advanced patterns.</p>
            <ul>
                <li>React Components dan JSX</li>
                <li>State dan Props Management</li>
                <li>React Hooks (useState, useEffect, useContext)</li>
                <li>Routing dengan React Router</li>
                <li>State Management dengan Context API</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "React Basics",
                topics: ["Components", "JSX", "Props", "State"]
            },
            {
                week: 2,
                title: "React Hooks",
                topics: ["useState", "useEffect", "useContext", "Custom Hooks"]
            },
            {
                week: 3,
                title: "Advanced Concepts",
                topics: ["React Router", "Context API", "Performance Optimization", "Error Boundaries"]
            },
            {
                week: 4,
                title: "Project Development",
                topics: ["Full-stack Project", "API Integration", "Deployment", "Testing"]
            }
        ],
        requirements: [
            "Penguasaan JavaScript ES6+",
            "Pemahaman HTML dan CSS",
            "Pengalaman dengan DOM manipulation"
        ],
        outcomes: [
            "Mampu membangun aplikasi React yang kompleks",
            "Memahami React ecosystem dan tools",
            "Siap untuk karir sebagai React developer",
            "Portfolio project yang impressive"
        ],
        videos: [
            { week: 1, topic: "React Basics", file: "video/react-basics.mp4" },
            { week: 2, topic: "React Hooks", file: "video/react-hooks.mp4" },
            { week: 3, topic: "Advanced Concepts", file: "video/react-advanced.mp4" },
            { week: 4, topic: "Project Development", file: "video/react-project.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu JSX?", options: ["Tag untuk CSS", "Tag untuk HTML", "Tag untuk JavaScript", "Tag untuk CSS"], answer: "Tag untuk HTML" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu useState?", options: ["Fungsi untuk mengubah state", "Fungsi untuk mengubah state", "Fungsi untuk mengubah state", "Fungsi untuk mengubah state"], answer: "Fungsi untuk mengubah state" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu useEffect?", options: ["Fungsi untuk mengubah state", "Fungsi untuk mengubah state", "Fungsi untuk mengubah state", "Fungsi untuk mengubah state"], answer: "Fungsi untuk mengubah state" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari project development?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 4,
        title: "Node.js Backend",
        category: "web-development",
        categoryLabel: "Web Development",
        image: "images/Node.js Backend.jpg",
        price: 349000,
        instructor: "Dewi Kusuma",
        instructorPhoto: "images/Dewi Kusuma.jpg",
        duration: "14 jam",
        level: "Menengah",
        rating: 4.6,
        students: 520,
        description: "Membangun aplikasi backend dengan Node.js dan Express.js. Pelajari REST API, database integration, dan deployment.",
        longDescription: `
            <p>Node.js Backend adalah kursus yang akan mengajarkan Anda cara membangun server-side applications menggunakan Node.js dan Express.js. Anda akan mempelajari cara membuat REST API yang robust dan scalable.</p>
            <ul>
                <li>Node.js Fundamentals dan Event Loop</li>
                <li>Express.js Framework</li>
                <li>REST API Development</li>
                <li>Database Integration (MongoDB/MySQL)</li>
                <li>Authentication dan Authorization</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Node.js Basics",
                topics: ["Event Loop", "Modules", "NPM", "File System"]
            },
            {
                week: 2,
                title: "Express.js",
                topics: ["Routing", "Middleware", "Error Handling", "Static Files"]
            },
            {
                week: 3,
                title: "Database & API",
                topics: ["MongoDB Integration", "REST API", "Validation", "Authentication"]
            },
            {
                week: 4,
                title: "Advanced Topics",
                topics: ["Testing", "Deployment", "Security", "Performance"]
            }
        ],
        requirements: [
            "Penguasaan JavaScript",
            "Pemahaman dasar HTTP dan web protocols",
            "Pengalaman dengan command line"
        ],
        outcomes: [
            "Mampu membangun REST API yang robust",
            "Memahami server-side development",
            "Siap untuk full-stack development",
            "Pengalaman dengan database integration"
        ],
        videos: [
            { week: 1, topic: "Node.js Basics", file: "video/node-basics.mp4" },
            { week: 2, topic: "Express.js", file: "video/express-js.mp4" },
            { week: 3, topic: "Database & API", file: "video/database-api.mp4" },
            { week: 4, topic: "Advanced Topics", file: "video/advanced-topics.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Node.js?", options: ["Bahasa pemrograman", "Framework JavaScript", "Bahasa pemrograman", "Bahasa pemrograman"], answer: "Bahasa pemrograman" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu Express.js?", options: ["Framework JavaScript", "Bahasa pemrograman", "Framework JavaScript", "Framework JavaScript"], answer: "Framework JavaScript" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu MongoDB?", options: ["Database NoSQL", "Database SQL", "Database SQL", "Database SQL"], answer: "Database NoSQL" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari testing?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 5,
        title: "Python untuk Pemula",
        category: "programming",
        categoryLabel: "Programming",
        image: "images/Python untuk Pemula.jpg",
        price: 249000,
        instructor: "Rina Marlina",
        instructorPhoto: "images/Rina Marlina.jpg",
        duration: "10 jam",
        level: "Pemula",
        rating: 4.8,
        students: 2100,
        description: "Mulai belajar programming dengan Python yang mudah dipahami. Pelajari dasar-dasar programming dengan bahasa yang ramah untuk pemula.",
        longDescription: `
            <p>Python untuk Pemula adalah kursus yang sempurna untuk memulai perjalanan programming Anda. Python dikenal sebagai bahasa yang mudah dipelajari dan sangat powerful untuk berbagai aplikasi.</p>
            <ul>
                <li>Dasar-dasar Python syntax</li>
                <li>Data structures dan algorithms</li>
                <li>Object-oriented programming</li>
                <li>File handling dan modules</li>
                <li>Basic web scraping</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Python Basics",
                topics: ["Variables", "Data Types", "Operators", "Control Flow"]
            },
            {
                week: 2,
                title: "Data Structures",
                topics: ["Lists", "Tuples", "Dictionaries", "Sets"]
            },
            {
                week: 3,
                title: "Functions & OOP",
                topics: ["Functions", "Classes", "Inheritance", "Modules"]
            },
            {
                week: 4,
                title: "Practical Projects",
                topics: ["File Handling", "Web Scraping", "Data Analysis", "Mini Projects"]
            }
        ],
        requirements: [
            "Tidak ada pengalaman programming",
            "Komputer dengan Python installed",
            "Semangat belajar yang tinggi"
        ],
        outcomes: [
            "Menguasai dasar-dasar Python programming",
            "Mampu membuat program sederhana",
            "Siap untuk belajar framework Python",
            "Memahami konsep programming secara umum"
        ],
        videos: [
            { week: 1, topic: "Python Basics", file: "video/python-basics.mp4" },
            { week: 2, topic: "Data Structures", file: "video/data-structures.mp4" },
            { week: 3, topic: "Functions & OOP", file: "video/functions-oop.mp4" },
            { week: 4, topic: "Practical Projects", file: "video/practical-projects.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu variabel?", options: ["Tempat untuk menyimpan data", "Fungsi untuk mengubah data", "Fungsi untuk mengubah data", "Fungsi untuk mengubah data"], answer: "Tempat untuk menyimpan data" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu list?", options: ["Tipe data", "Tipe data", "Tipe data", "Tipe data"], answer: "Tipe data" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu inheritance?", options: ["Mewariskan atribut", "Mewariskan atribut", "Mewariskan atribut", "Mewariskan atribut"], answer: "Mewariskan atribut" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari web scraping?", options: ["Mengambil data dari web", "Mengambil data dari web", "Mengambil data dari web", "Mengambil data dari web"], answer: "Mengambil data dari web" }
            ]}
        ]
    },
    {
        id: 6,
        title: "UI/UX Design Fundamentals",
        category: "design",
        categoryLabel: "Design",
        image: "images/UI UX Design Fundamentals.jpg",
        price: 279000,
        instructor: "Maya Sari",
        instructorPhoto: "images/Maya Sari.jpg",
        duration: "11 jam",
        level: "Pemula",
        rating: 4.7,
        students: 780,
        description: "Pelajari prinsip-prinsip UI/UX design untuk menciptakan pengalaman pengguna yang luar biasa. Dari wireframing hingga prototyping.",
        longDescription: `
            <p>UI/UX Design Fundamentals akan mengajarkan Anda cara menciptakan desain yang tidak hanya indah, tetapi juga fungsional dan user-friendly. Anda akan mempelajari proses design thinking dari awal hingga akhir.</p>
            <ul>
                <li>Design Thinking Process</li>
                <li>User Research dan Personas</li>
                <li>Wireframing dan Prototyping</li>
                <li>Visual Design Principles</li>
                <li>Usability Testing</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Design Thinking",
                topics: ["Empathize", "Define", "Ideate", "Prototype"]
            },
            {
                week: 2,
                title: "User Research",
                topics: ["User Interviews", "Personas", "User Journey", "Information Architecture"]
            },
            {
                week: 3,
                title: "Design Tools",
                topics: ["Figma Basics", "Wireframing", "Prototyping", "Design Systems"]
            },
            {
                week: 4,
                title: "Testing & Iteration",
                topics: ["Usability Testing", "Feedback Analysis", "Iteration", "Final Presentation"]
            }
        ],
        requirements: [
            "Komputer dengan design software",
            "Kreativitas dan empati",
            "Minat terhadap user experience"
        ],
        outcomes: [
            "Mampu melakukan user research",
            "Membuat wireframes dan prototypes",
            "Memahami design principles",
            "Portfolio design project"
        ],
        videos: [
            { week: 1, topic: "Design Thinking", file: "video/design-thinking.mp4" },
            { week: 2, topic: "User Research", file: "video/user-research.mp4" },
            { week: 3, topic: "Design Tools", file: "video/design-tools.mp4" },
            { week: 4, topic: "Testing & Iteration", file: "video/testing-iteration.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu design thinking?", options: ["Proses pemahaman pengguna", "Proses pemahaman pengguna", "Proses pemahaman pengguna", "Proses pemahaman pengguna"], answer: "Proses pemahaman pengguna" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu personas?", options: ["Karakter pengguna", "Karakter pengguna", "Karakter pengguna", "Karakter pengguna"], answer: "Karakter pengguna" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu wireframing?", options: ["Desain awal", "Desain awal", "Desain awal", "Desain awal"], answer: "Desain awal" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari usability testing?", options: ["Meningkatkan kepuasan pengguna", "Meningkatkan kepuasan pengguna", "Meningkatkan kepuasan pengguna", "Meningkatkan kepuasan pengguna"], answer: "Meningkatkan kepuasan pengguna" }
            ]}
        ]
    },
    {
        id: 7,
        title: "Digital Marketing Strategy",
        category: "business",
        categoryLabel: "Business",
        image: "images/Digital Marketing Strategy.jpg",
        price: 199000,
        instructor: "Ahmad Fauzi",
        instructorPhoto: "images/Ahmad Fauzi.jpg",
        duration: "9 jam",
        level: "Pemula",
        rating: 4.5,
        students: 950,
        description: "Pelajari strategi digital marketing yang efektif untuk mengembangkan bisnis online. Dari social media hingga SEO.",
        longDescription: `
            <p>Digital Marketing Strategy akan mengajarkan Anda cara mengembangkan dan mengimplementasikan strategi marketing digital yang efektif untuk bisnis Anda. Anda akan mempelajari berbagai channel marketing dan cara mengoptimalkannya.</p>
            <ul>
                <li>Digital Marketing Landscape</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Content Marketing Strategy</li>
                <li>Analytics dan Performance Tracking</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Marketing Fundamentals",
                topics: ["Marketing Mix", "Customer Journey", "Target Audience", "Brand Positioning"]
            },
            {
                week: 2,
                title: "Social Media",
                topics: ["Platform Strategy", "Content Creation", "Community Management", "Paid Advertising"]
            },
            {
                week: 3,
                title: "SEO & Content",
                topics: ["Keyword Research", "On-page SEO", "Content Strategy", "Link Building"]
            },
            {
                week: 4,
                title: "Analytics & Optimization",
                topics: ["Google Analytics", "Performance Metrics", "A/B Testing", "Strategy Optimization"]
            }
        ],
        requirements: [
            "Minat terhadap marketing",
            "Akses ke social media platforms",
            "Bisnis atau project untuk dipromosikan"
        ],
        outcomes: [
            "Mampu membuat digital marketing strategy",
            "Mengoptimalkan social media presence",
            "Memahami SEO dan content marketing",
            "Mengukur dan menganalisis performance"
        ],
        videos: [
            { week: 1, topic: "Marketing Fundamentals", file: "video/marketing-fundamentals.mp4" },
            { week: 2, topic: "Social Media", file: "video/social-media.mp4" },
            { week: 3, topic: "SEO & Content", file: "video/seo-content.mp4" },
            { week: 4, topic: "Analytics & Optimization", file: "video/analytics-optimization.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu marketing mix?", options: ["4P", "4P", "4P", "4P"], answer: "4P" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu paid advertising?", options: ["Pengiklanan yang dibayar", "Pengiklanan yang dibayar", "Pengiklanan yang dibayar", "Pengiklanan yang dibayar"], answer: "Pengiklanan yang dibayar" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu keyword research?", options: ["Mencari kata kunci", "Mencari kata kunci", "Mencari kata kunci", "Mencari kata kunci"], answer: "Mencari kata kunci" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari strategy optimization?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 8,
        title: "Data Science dengan Python",
        category: "programming",
        categoryLabel: "Programming",
        image: "images/Data Science dengan Python.jpg",
        price: 449000,
        instructor: "Dr. Siti Nurhaliza",
        instructorPhoto: "images/Dr. Siti Nurhaliza.jpg",
        duration: "16 jam",
        level: "Menengah",
        rating: 4.9,
        students: 420,
        description: "Pelajari data science dari dasar hingga advanced dengan Python. Analisis data, machine learning, dan visualisasi.",
        longDescription: `
            <p>Data Science dengan Python adalah kursus komprehensif yang akan mengajarkan Anda cara menganalisis data, membuat model machine learning, dan menciptakan visualisasi yang informatif menggunakan Python.</p>
            <ul>
                <li>Data Analysis dengan Pandas dan NumPy</li>
                <li>Data Visualization dengan Matplotlib dan Seaborn</li>
                <li>Machine Learning dengan Scikit-learn</li>
                <li>Statistical Analysis</li>
                <li>Real-world Data Science Projects</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Data Analysis",
                topics: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Analysis"]
            },
            {
                week: 2,
                title: "Data Visualization",
                topics: ["Matplotlib", "Seaborn", "Plotly", "Dashboard Creation"]
            },
            {
                week: 3,
                title: "Machine Learning",
                topics: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"]
            },
            {
                week: 4,
                title: "Advanced Topics",
                topics: ["Deep Learning", "Big Data", "Deployment", "Capstone Project"]
            }
        ],
        requirements: [
            "Penguasaan Python dasar",
            "Pemahaman matematika dasar",
            "Komputer dengan spesifikasi menengah"
        ],
        outcomes: [
            "Mampu menganalisis data kompleks",
            "Membuat model machine learning",
            "Membuat visualisasi data yang informatif",
            "Portfolio data science project"
        ],
        videos: [
            { week: 1, topic: "Data Analysis", file: "video/data-analysis.mp4" },
            { week: 2, topic: "Data Visualization", file: "video/data-visualization.mp4" },
            { week: 3, topic: "Machine Learning", file: "video/machine-learning.mp4" },
            { week: 4, topic: "Advanced Topics", file: "video/advanced-topics.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Pandas?", options: ["Library untuk analisis data", "Library untuk analisis data", "Library untuk analisis data", "Library untuk analisis data"], answer: "Library untuk analisis data" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu Seaborn?", options: ["Library untuk visualisasi data", "Library untuk visualisasi data", "Library untuk visualisasi data", "Library untuk visualisasi data"], answer: "Library untuk visualisasi data" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu Scikit-learn?", options: ["Library untuk machine learning", "Library untuk machine learning", "Library untuk machine learning", "Library untuk machine learning"], answer: "Library untuk machine learning" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari capstone project?", options: ["Mengaplikasikan ilmu yang dipelajari", "Mengaplikasikan ilmu yang dipelajari", "Mengaplikasikan ilmu yang dipelajari", "Mengaplikasikan ilmu yang dipelajari"], answer: "Mengaplikasikan ilmu yang dipelajari" }
            ]}
        ]
    },
    {
        id: 9,
        title: "Java Programming",
        category: "programming",
        categoryLabel: "Programming",
        image: "images/Java Programming.jpg",
        price: 379000,
        instructor: "Budi Prasetyo",
        instructorPhoto: "images/Budi Prasetyo.jpg",
        duration: "18 jam",
        level: "Menengah",
        rating: 4.6,
        students: 680,
        description: "Pelajari Java untuk pengembangan aplikasi enterprise. Kuasai OOP, collections, dan framework populer.",
        longDescription: `
            <p>Java Programming adalah kursus komprehensif yang akan mengajarkan Anda cara membangun aplikasi enterprise menggunakan Java. Anda akan mempelajari konsep Object-Oriented Programming dan framework populer.</p>
            <ul>
                <li>Java Fundamentals dan OOP</li>
                <li>Collections Framework</li>
                <li>Exception Handling</li>
                <li>Spring Framework</li>
                <li>Database Integration</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Java Basics",
                topics: ["Variables", "Data Types", "Control Flow", "Methods"]
            },
            {
                week: 2,
                title: "Object-Oriented Programming",
                topics: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"]
            },
            {
                week: 3,
                title: "Advanced Java",
                topics: ["Collections", "Exception Handling", "File I/O", "Threading"]
            },
            {
                week: 4,
                title: "Spring Framework",
                topics: ["Spring Boot", "REST API", "Database", "Deployment"]
            }
        ],
        requirements: [
            "Pengalaman programming dasar",
            "Pemahaman OOP concepts",
            "Komputer dengan Java JDK"
        ],
        outcomes: [
            "Menguasai Java programming",
            "Mampu membuat aplikasi enterprise",
            "Memahami Spring framework",
            "Siap untuk karir Java developer"
        ],
        videos: [
            { week: 1, topic: "Java Basics", file: "video/java-basics.mp4" },
            { week: 2, topic: "Object-Oriented Programming", file: "video/oop.mp4" },
            { week: 3, topic: "Advanced Java", file: "video/advanced-java.mp4" },
            { week: 4, topic: "Spring Framework", file: "video/spring-framework.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Java?", options: ["Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman"], answer: "Bahasa pemrograman" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu OOP?", options: ["Konsep pemrograman", "Konsep pemrograman", "Konsep pemrograman", "Konsep pemrograman"], answer: "Konsep pemrograman" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu Spring Framework?", options: ["Framework untuk backend", "Framework untuk backend", "Framework untuk backend", "Framework untuk backend"], answer: "Framework untuk backend" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari deployment?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 10,
        title: "C++ Programming",
        category: "programming",
        categoryLabel: "Programming",
        image: "images/C++ Programming.jpg",
        price: 329000,
        instructor: "Dewi Sartika",
        instructorPhoto: "images/Dewi Sartika.jpg",
        duration: "16 jam",
        level: "Menengah",
        rating: 4.5,
        students: 450,
        description: "Kuasai C++ untuk pengembangan aplikasi performa tinggi. Pelajari memory management dan advanced concepts.",
        longDescription: `
            <p>C++ Programming akan mengajarkan Anda cara membangun aplikasi performa tinggi menggunakan C++. Anda akan mempelajari memory management, pointers, dan advanced programming concepts.</p>
            <ul>
                <li>C++ Fundamentals</li>
                <li>Memory Management dan Pointers</li>
                <li>Object-Oriented Programming</li>
                <li>STL (Standard Template Library)</li>
                <li>Performance Optimization</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "C++ Basics",
                topics: ["Variables", "Control Flow", "Functions", "Arrays"]
            },
            {
                week: 2,
                title: "Memory Management",
                topics: ["Pointers", "References", "Dynamic Memory", "Smart Pointers"]
            },
            {
                week: 3,
                title: "OOP in C++",
                topics: ["Classes", "Inheritance", "Polymorphism", "Templates"]
            },
            {
                week: 4,
                title: "Advanced Topics",
                topics: ["STL", "Exception Handling", "Performance", "Project"]
            }
        ],
        requirements: [
            "Pengalaman programming dasar",
            "Pemahaman computer architecture",
            "Komputer dengan C++ compiler"
        ],
        outcomes: [
            "Menguasai C++ programming",
            "Memahami memory management",
            "Mampu optimasi performa",
            "Siap untuk system programming"
        ],
        videos: [
            { week: 1, topic: "C++ Basics", file: "video/c++-basics.mp4" },
            { week: 2, topic: "Memory Management", file: "video/memory-management.mp4" },
            { week: 3, topic: "OOP in C++", file: "video/oop-c++.mp4" },
            { week: 4, topic: "Advanced Topics", file: "video/advanced-topics.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu C++?", options: ["Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman"], answer: "Bahasa pemrograman" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu pointers?", options: ["Pointer", "Pointer", "Pointer", "Pointer"], answer: "Pointer" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu STL?", options: ["Standard Template Library", "Standard Template Library", "Standard Template Library", "Standard Template Library"], answer: "Standard Template Library" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari project?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 11,
        title: "PHP & MySQL",
        category: "programming",
        categoryLabel: "Programming",
        image: "images/PHP & MySQL.jpg",
        price: 279000,
        instructor: "Rudi Hartono",
        instructorPhoto: "images/Rudi Hartono.jpg",
        duration: "12 jam",
        level: "Pemula",
        rating: 4.4,
        students: 890,
        description: "Membangun aplikasi web dinamis dengan PHP dan MySQL. Pelajari backend development dari dasar.",
        longDescription: `
            <p>PHP & MySQL adalah kursus yang akan mengajarkan Anda cara membangun aplikasi web dinamis. Anda akan mempelajari cara membuat website yang dapat berinteraksi dengan database.</p>
            <ul>
                <li>PHP Fundamentals</li>
                <li>MySQL Database</li>
                <li>CRUD Operations</li>
                <li>Form Handling</li>
                <li>Security Best Practices</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "PHP Basics",
                topics: ["Variables", "Control Flow", "Functions", "Arrays"]
            },
            {
                week: 2,
                title: "MySQL Database",
                topics: ["Database Design", "SQL Queries", "CRUD Operations", "Relationships"]
            },
            {
                week: 3,
                title: "PHP & MySQL Integration",
                topics: ["Database Connection", "Form Processing", "Data Validation", "Security"]
            },
            {
                week: 4,
                title: "Project Development",
                topics: ["CMS Development", "User Authentication", "File Upload", "Deployment"]
            }
        ],
        requirements: [
            "Pemahaman HTML dan CSS",
            "Pengalaman programming dasar",
            "Komputer dengan web server"
        ],
        outcomes: [
            "Mampu membuat aplikasi web dinamis",
            "Memahami database management",
            "Menguasai PHP programming",
            "Portfolio web application"
        ],
        videos: [
            { week: 1, topic: "PHP Basics", file: "video/php-basics.mp4" },
            { week: 2, topic: "MySQL Database", file: "video/mysql-database.mp4" },
            { week: 3, topic: "PHP & MySQL Integration", file: "video/php-mysql-integration.mp4" },
            { week: 4, topic: "Project Development", file: "video/project-development.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu PHP?", options: ["Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman", "Bahasa pemrograman"], answer: "Bahasa pemrograman" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu MySQL?", options: ["Database management system", "Database management system", "Database management system", "Database management system"], answer: "Database management system" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu CRUD?", options: ["Create, Read, Update, Delete", "Create, Read, Update, Delete", "Create, Read, Update, Delete", "Create, Read, Update, Delete"], answer: "Create, Read, Update, Delete" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari project development?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 12,
        title: "Graphic Design",
        category: "design",
        categoryLabel: "Design",
        image: "images/Graphic Design.jpg",
        price: 349000,
        instructor: "Maya Sari",
        instructorPhoto: "images/Maya Sari.jpg",
        duration: "14 jam",
        level: "Pemula",
        rating: 4.7,
        students: 720,
        description: "Kuasai Adobe Photoshop dan Illustrator untuk desain grafis profesional. Pelajari teknik desain modern.",
        longDescription: `
            <p>Graphic Design akan mengajarkan Anda cara menggunakan Adobe Photoshop dan Illustrator untuk menciptakan desain grafis yang profesional dan menarik.</p>
            <ul>
                <li>Adobe Photoshop Mastery</li>
                <li>Adobe Illustrator Skills</li>
                <li>Design Principles</li>
                <li>Color Theory</li>
                <li>Typography</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Photoshop Basics",
                topics: ["Interface", "Tools", "Layers", "Selection"]
            },
            {
                week: 2,
                title: "Advanced Photoshop",
                topics: ["Filters", "Effects", "Retouching", "Compositing"]
            },
            {
                week: 3,
                title: "Illustrator Basics",
                topics: ["Vector Graphics", "Shapes", "Pen Tool", "Typography"]
            },
            {
                week: 4,
                title: "Design Projects",
                topics: ["Logo Design", "Poster Design", "Brand Identity", "Portfolio"]
            }
        ],
        requirements: [
            "Komputer dengan Adobe Creative Suite",
            "Kreativitas dan imajinasi",
            "Minat terhadap desain grafis"
        ],
        outcomes: [
            "Menguasai Adobe Photoshop dan Illustrator",
            "Mampu membuat desain grafis profesional",
            "Memahami prinsip desain",
            "Portfolio desain grafis"
        ],
        videos: [
            { week: 1, topic: "Photoshop Basics", file: "video/photoshop-basics.mp4" },
            { week: 2, topic: "Advanced Photoshop", file: "video/advanced-photoshop.mp4" },
            { week: 3, topic: "Illustrator Basics", file: "video/illustrator-basics.mp4" },
            { week: 4, topic: "Design Projects", file: "video/design-projects.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Photoshop?", options: ["Software desain", "Software desain", "Software desain", "Software desain"], answer: "Software desain" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu Illustrator?", options: ["Software desain", "Software desain", "Software desain", "Software desain"], answer: "Software desain" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu vector graphics?", options: ["Grafik berbasis titik", "Grafik berbasis titik", "Grafik berbasis titik", "Grafik berbasis titik"], answer: "Grafik berbasis titik" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari design projects?", options: ["Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas"], answer: "Meningkatkan kreativitas" }
            ]}
        ]
    },
    {
        id: 13,
        title: "3D Design & Animation",
        category: "design",
        categoryLabel: "Design",
        image: "images/3D Design & Animation.jpg",
        price: 449000,
        instructor: "Ahmad Firdaus",
        instructorPhoto: "images/Ahmad Firdaus.jpg",
        duration: "20 jam",
        level: "Menengah",
        rating: 4.8,
        students: 380,
        description: "Buat model 3D dan animasi dengan Blender dan Maya. Pelajari 3D modeling, texturing, dan animation.",
        longDescription: `
            <p>3D Design & Animation akan mengajarkan Anda cara membuat model 3D dan animasi menggunakan software profesional seperti Blender dan Maya.</p>
            <ul>
                <li>3D Modeling Fundamentals</li>
                <li>Texturing dan Materials</li>
                <li>Rigging dan Animation</li>
                <li>Rendering dan Lighting</li>
                <li>Character Design</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "3D Modeling",
                topics: ["Blender Interface", "Modeling Tools", "Mesh Editing", "Modifiers"]
            },
            {
                week: 2,
                title: "Texturing & Materials",
                topics: ["UV Mapping", "Texture Painting", "Material Nodes", "Shaders"]
            },
            {
                week: 3,
                title: "Rigging & Animation",
                topics: ["Armature", "Weight Painting", "Keyframe Animation", "Constraints"]
            },
            {
                week: 4,
                title: "Rendering & Project",
                topics: ["Lighting", "Camera Setup", "Rendering", "Final Project"]
            }
        ],
        requirements: [
            "Komputer dengan spesifikasi tinggi",
            "Software Blender (gratis) atau Maya",
            "Minat terhadap 3D dan animasi"
        ],
        outcomes: [
            "Menguasai 3D modeling dan animation",
            "Mampu membuat karakter 3D",
            "Memahami pipeline 3D production",
            "Portfolio 3D project"
        ],
        videos: [
            { week: 1, topic: "3D Modeling", file: "video/3d-modeling.mp4" },
            { week: 2, topic: "Texturing & Materials", file: "video/texturing-materials.mp4" },
            { week: 3, topic: "Rigging & Animation", file: "video/rigging-animation.mp4" },
            { week: 4, topic: "Rendering & Project", file: "video/rendering-project.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Blender?", options: ["Software desain", "Software desain", "Software desain", "Software desain"], answer: "Software desain" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu UV Mapping?", options: ["Teknik untuk menyesuaikan tekstur", "Teknik untuk menyesuaikan tekstur", "Teknik untuk menyesuaikan tekstur", "Teknik untuk menyesuaikan tekstur"], answer: "Teknik untuk menyesuaikan tekstur" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu keyframe animation?", options: ["Animasi berdasarkan waktu", "Animasi berdasarkan waktu", "Animasi berdasarkan waktu", "Animasi berdasarkan waktu"], answer: "Animasi berdasarkan waktu" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari final project?", options: ["Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas"], answer: "Meningkatkan kreativitas" }
            ]}
        ]
    },
    {
        id: 14,
        title: "Web Design",
        category: "design",
        categoryLabel: "Design",
        image: "images/Web Design.jpg",
        price: 299000,
        instructor: "Siti Nurhaliza",
        instructorPhoto: "images/Siti Nurhaliza.jpg",
        duration: "10 jam",
        level: "Pemula",
        rating: 4.6,
        students: 650,
        description: "Desain website yang responsif dan menarik dengan Figma. Pelajari UI/UX design untuk web.",
        longDescription: `
            <p>Web Design akan mengajarkan Anda cara mendesain website yang responsif dan user-friendly menggunakan Figma. Anda akan mempelajari prinsip UI/UX design khusus untuk web.</p>
            <ul>
                <li>Figma Mastery</li>
                <li>Web Design Principles</li>
                <li>Responsive Design</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Figma Basics",
                topics: ["Interface", "Tools", "Components", "Styles"]
            },
            {
                week: 2,
                title: "Web Design Principles",
                topics: ["Layout", "Typography", "Color Theory", "Visual Hierarchy"]
            },
            {
                week: 3,
                title: "Responsive Design",
                topics: ["Mobile-first", "Breakpoints", "Grid Systems", "Flexible Layouts"]
            },
            {
                week: 4,
                title: "Prototyping & Handoff",
                topics: ["Interactive Prototypes", "Design Systems", "Developer Handoff", "Portfolio"]
            }
        ],
        requirements: [
            "Komputer dengan Figma (gratis)",
            "Pemahaman dasar design",
            "Minat terhadap web design"
        ],
        outcomes: [
            "Menguasai Figma untuk web design",
            "Mampu membuat responsive design",
            "Memahami UI/UX principles",
            "Portfolio web design"
        ],
        videos: [
            { week: 1, topic: "Figma Basics", file: "video/figma-basics.mp4" },
            { week: 2, topic: "Web Design Principles", file: "video/web-design-principles.mp4" },
            { week: 3, topic: "Responsive Design", file: "video/responsive-design.mp4" },
            { week: 4, topic: "Prototyping & Handoff", file: "video/prototyping-handoff.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu Figma?", options: ["Software desain", "Software desain", "Software desain", "Software desain"], answer: "Software desain" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu layout?", options: ["Susunan elemen", "Susunan elemen", "Susunan elemen", "Susunan elemen"], answer: "Susunan elemen" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu color theory?", options: ["Teori tentang warna", "Teori tentang warna", "Teori tentang warna", "Teori tentang warna"], answer: "Teori tentang warna" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari prototyping?", options: ["Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas", "Meningkatkan kreativitas"], answer: "Meningkatkan kreativitas" }
            ]}
        ]
    },
    {
        id: 15,
        title: "Business Strategy",
        category: "business",
        categoryLabel: "Business",
        image: "images/Business Strategy.jpg",
        price: 399000,
        instructor: "Dr. Bambang Sutrisno",
        instructorPhoto: "images/Dr. Bambang Sutrisno.jpg",
        duration: "12 jam",
        level: "Menengah",
        rating: 4.7,
        students: 520,
        description: "Pelajari strategi bisnis yang efektif untuk mengembangkan perusahaan. Dari analisis pasar hingga implementasi.",
        longDescription: `
            <p>Business Strategy akan mengajarkan Anda cara mengembangkan dan mengimplementasikan strategi bisnis yang efektif. Anda akan mempelajari analisis pasar, competitive advantage, dan strategic planning.</p>
            <ul>
                <li>Strategic Analysis</li>
                <li>Market Research</li>
                <li>Competitive Strategy</li>
                <li>Business Model Canvas</li>
                <li>Strategy Implementation</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Strategic Analysis",
                topics: ["SWOT Analysis", "PEST Analysis", "Competitive Analysis", "Market Research"]
            },
            {
                week: 2,
                title: "Strategy Formulation",
                topics: ["Business Model Canvas", "Value Proposition", "Competitive Advantage", "Strategic Options"]
            },
            {
                week: 3,
                title: "Strategy Implementation",
                topics: ["Strategic Planning", "Resource Allocation", "Change Management", "Performance Metrics"]
            },
            {
                week: 4,
                title: "Case Studies",
                topics: ["Real Business Cases", "Strategy Evaluation", "Risk Management", "Future Trends"]
            }
        ],
        requirements: [
            "Pengalaman bisnis dasar",
            "Minat terhadap strategic management",
            "Kemampuan analisis"
        ],
        outcomes: [
            "Mampu menganalisis strategi bisnis",
            "Memahami competitive advantage",
            "Siap untuk strategic planning",
            "Portfolio business strategy"
        ],
        videos: [
            { week: 1, topic: "Strategic Analysis", file: "video/strategic-analysis.mp4" },
            { week: 2, topic: "Strategy Formulation", file: "video/strategy-formulation.mp4" },
            { week: 3, topic: "Strategy Implementation", file: "video/strategy-implementation.mp4" },
            { week: 4, topic: "Case Studies", file: "video/case-studies.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu SWOT Analysis?", options: ["Analisis kekuatan, kelemahan, peluang, dan ancaman", "Analisis kekuatan, kelemahan, peluang, dan ancaman", "Analisis kekuatan, kelemahan, peluang, dan ancaman", "Analisis kekuatan, kelemahan, peluang, dan ancaman"], answer: "Analisis kekuatan, kelemahan, peluang, dan ancaman" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu PEST Analysis?", options: ["Analisis faktor-faktor eksternal", "Analisis faktor-faktor eksternal", "Analisis faktor-faktor eksternal", "Analisis faktor-faktor eksternal"], answer: "Analisis faktor-faktor eksternal" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu competitive advantage?", options: ["Kelebihan yang dimiliki perusahaan", "Kelebihan yang dimiliki perusahaan", "Kelebihan yang dimiliki perusahaan", "Kelebihan yang dimiliki perusahaan"], answer: "Kelebihan yang dimiliki perusahaan" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari strategy implementation?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 16,
        title: "Financial Management",
        category: "business",
        categoryLabel: "Business",
        image: "images/Financial Management.jpg",
        price: 329000,
        instructor: "Dewi Sartika",
        instructorPhoto: "images/Dewi Sartika.jpg",
        duration: "11 jam",
        level: "Menengah",
        rating: 4.5,
        students: 480,
        description: "Pelajari manajemen keuangan untuk bisnis. Dari budgeting hingga financial analysis dan investment decisions.",
        longDescription: `
            <p>Financial Management akan mengajarkan Anda cara mengelola keuangan bisnis secara efektif. Anda akan mempelajari budgeting, financial analysis, dan investment decisions.</p>
            <ul>
                <li>Financial Statements</li>
                <li>Budgeting dan Forecasting</li>
                <li>Financial Analysis</li>
                <li>Investment Decisions</li>
                <li>Risk Management</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Financial Statements",
                topics: ["Balance Sheet", "Income Statement", "Cash Flow", "Financial Ratios"]
            },
            {
                week: 2,
                title: "Budgeting & Forecasting",
                topics: ["Budget Planning", "Cash Flow Forecasting", "Variance Analysis", "Financial Planning"]
            },
            {
                week: 3,
                title: "Financial Analysis",
                topics: ["Ratio Analysis", "Trend Analysis", "Break-even Analysis", "Investment Appraisal"]
            },
            {
                week: 4,
                title: "Risk Management",
                topics: ["Financial Risk", "Investment Risk", "Risk Mitigation", "Portfolio Management"]
            }
        ],
        requirements: [
            "Pemahaman matematika dasar",
            "Minat terhadap finance",
            "Kemampuan analisis"
        ],
        outcomes: [
            "Mampu menganalisis financial statements",
            "Memahami budgeting dan forecasting",
            "Siap untuk financial decision making",
            "Portfolio financial analysis"
        ],
        videos: [
            { week: 1, topic: "Financial Statements", file: "video/financial-statements.mp4" },
            { week: 2, topic: "Budgeting & Forecasting", file: "video/budgeting-forecasting.mp4" },
            { week: 3, topic: "Financial Analysis", file: "video/financial-analysis.mp4" },
            { week: 4, topic: "Risk Management", file: "video/risk-management.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu balance sheet?", options: ["Laporan keuangan", "Laporan keuangan", "Laporan keuangan", "Laporan keuangan"], answer: "Laporan keuangan" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu cash flow?", options: ["Aliran kas", "Aliran kas", "Aliran kas", "Aliran kas"], answer: "Aliran kas" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu financial analysis?", options: ["Analisis keuangan", "Analisis keuangan", "Analisis keuangan", "Analisis keuangan"], answer: "Analisis keuangan" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari risk management?", options: ["Mengurangi risiko", "Mengurangi risiko", "Mengurangi risiko", "Mengurangi risiko"], answer: "Mengurangi risiko" }
            ]}
        ]
    },
    {
        id: 17,
        title: "Digital Marketing Strategy",
        category: "business",
        categoryLabel: "Business",
        image: "images/Digital Marketing.jpg",
        price: 249000,
        instructor: "Ahmad Fauzi",
        instructorPhoto: "images/Ahmad Fauzi.jpg",
        duration: "9 jam",
        level: "Pemula",
        rating: 4.5,
        students: 950,
        description: "Strategi pemasaran digital yang efektif untuk bisnis modern. Dari social media hingga SEO.",
        longDescription: `
            <p>Digital Marketing Strategy akan mengajarkan Anda cara mengembangkan dan mengimplementasikan strategi marketing digital yang efektif untuk bisnis Anda. Anda akan mempelajari berbagai channel marketing dan cara mengoptimalkannya.</p>
            <ul>
                <li>Digital Marketing Landscape</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Content Marketing Strategy</li>
                <li>Analytics dan Performance Tracking</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Marketing Fundamentals",
                topics: ["Marketing Mix", "Customer Journey", "Target Audience", "Brand Positioning"]
            },
            {
                week: 2,
                title: "Social Media",
                topics: ["Platform Strategy", "Content Creation", "Community Management", "Paid Advertising"]
            },
            {
                week: 3,
                title: "SEO & Content",
                topics: ["Keyword Research", "On-page SEO", "Content Strategy", "Link Building"]
            },
            {
                week: 4,
                title: "Analytics & Optimization",
                topics: ["Google Analytics", "Performance Metrics", "A/B Testing", "Strategy Optimization"]
            }
        ],
        requirements: [
            "Minat terhadap marketing",
            "Akses ke social media platforms",
            "Bisnis atau project untuk dipromosikan"
        ],
        outcomes: [
            "Mampu membuat digital marketing strategy",
            "Mengoptimalkan social media presence",
            "Memahami SEO dan content marketing",
            "Mengukur dan menganalisis performance"
        ],
        videos: [
            { week: 1, topic: "Marketing Fundamentals", file: "video/marketing-fundamentals.mp4" },
            { week: 2, topic: "Social Media", file: "video/social-media.mp4" },
            { week: 3, topic: "SEO & Content", file: "video/seo-content.mp4" },
            { week: 4, topic: "Analytics & Optimization", file: "video/analytics-optimization.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu marketing mix?", options: ["4P", "4P", "4P", "4P"], answer: "4P" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu paid advertising?", options: ["Pengiklanan yang dibayar", "Pengiklanan yang dibayar", "Pengiklanan yang dibayar", "Pengiklanan yang dibayar"], answer: "Pengiklanan yang dibayar" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu keyword research?", options: ["Mencari kata kunci", "Mencari kata kunci", "Mencari kata kunci", "Mencari kata kunci"], answer: "Mencari kata kunci" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari strategy optimization?", options: ["Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa", "Meningkatkan performa"], answer: "Meningkatkan performa" }
            ]}
        ]
    },
    {
        id: 18,
        title: "Business Management",
        category: "business",
        categoryLabel: "Business",
        image: "images/Business Management.jpg",
        price: 379000,
        instructor: "Dr. Siti Rahayu",
        instructorPhoto: "images/Dr. Siti Rahayu.jpg",
        duration: "13 jam",
        level: "Menengah",
        rating: 4.6,
        students: 580,
        description: "Prinsip manajemen bisnis untuk pemimpin masa depan. Pelajari leadership dan strategic management.",
        longDescription: `
            <p>Business Management akan mengajarkan Anda prinsip-prinsip manajemen bisnis yang efektif. Anda akan mempelajari cara mengelola tim, mengembangkan strategi, dan memimpin organisasi menuju kesuksesan.</p>
            <ul>
                <li>Leadership dan Management</li>
                <li>Strategic Planning</li>
                <li>Team Management</li>
                <li>Change Management</li>
                <li>Performance Management</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Leadership Fundamentals",
                topics: ["Leadership Styles", "Communication", "Motivation", "Team Building"]
            },
            {
                week: 2,
                title: "Strategic Management",
                topics: ["Strategic Planning", "Goal Setting", "Resource Allocation", "Performance Metrics"]
            },
            {
                week: 3,
                title: "Operations Management",
                topics: ["Process Management", "Quality Control", "Supply Chain", "Risk Management"]
            },
            {
                week: 4,
                title: "Change Management",
                topics: ["Change Strategy", "Stakeholder Management", "Implementation", "Evaluation"]
            }
        ],
        requirements: [
            "Pengalaman kerja minimal 2 tahun",
            "Minat terhadap leadership",
            "Kemampuan komunikasi yang baik"
        ],
        outcomes: [
            "Menguasai prinsip leadership",
            "Mampu mengelola tim efektif",
            "Memahami strategic management",
            "Siap untuk posisi manajerial"
        ],
        videos: [
            { week: 1, topic: "Leadership Fundamentals", file: "video/leadership-fundamentals.mp4" },
            { week: 2, topic: "Strategic Management", file: "video/strategic-management.mp4" },
            { week: 3, topic: "Operations Management", file: "video/operations-management.mp4" },
            { week: 4, topic: "Change Management", file: "video/change-management.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu leadership?", options: ["Kemampuan mengelola tim", "Kemampuan mengelola tim", "Kemampuan mengelola tim", "Kemampuan mengelola tim"], answer: "Kemampuan mengelola tim" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu strategic planning?", options: ["Perencanaan strategis", "Perencanaan strategis", "Perencanaan strategis", "Perencanaan strategis"], answer: "Perencanaan strategis" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu process management?", options: ["Mengelola proses", "Mengelola proses", "Mengelola proses", "Mengelola proses"], answer: "Mengelola proses" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari change management?", options: ["Mengelola perubahan", "Mengelola perubahan", "Mengelola perubahan", "Mengelola perubahan"], answer: "Mengelola perubahan" }
            ]}
        ]
    },
    {
        id: 19,
        title: "Entrepreneurship",
        category: "business",
        categoryLabel: "Business",
        image: "images/Entrepreneurship.jpg",
        price: 299000,
        instructor: "Budi Santoso",
        instructorPhoto: "images/Budi Santoso.jpg",
        duration: "10 jam",
        level: "Pemula",
        rating: 4.4,
        students: 720,
        description: "Jadilah pengusaha sukses dengan strategi bisnis yang tepat. Dari ide hingga eksekusi.",
        longDescription: `
            <p>Entrepreneurship akan mengajarkan Anda cara mengembangkan ide bisnis menjadi perusahaan yang sukses. Anda akan mempelajari cara mengidentifikasi peluang, mengembangkan business model, dan mengelola startup.</p>
            <ul>
                <li>Business Model Development</li>
                <li>Market Research</li>
                <li>Funding dan Investment</li>
                <li>Startup Management</li>
                <li>Scaling Strategy</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Business Ideation",
                topics: ["Opportunity Recognition", "Market Research", "Customer Validation", "Business Model Canvas"]
            },
            {
                week: 2,
                title: "Business Planning",
                topics: ["Business Plan", "Financial Projections", "Marketing Strategy", "Operations Plan"]
            },
            {
                week: 3,
                title: "Funding & Launch",
                topics: ["Funding Sources", "Pitch Deck", "MVP Development", "Market Launch"]
            },
            {
                week: 4,
                title: "Growth & Scaling",
                topics: ["Growth Strategies", "Team Building", "Process Optimization", "Exit Strategies"]
            }
        ],
        requirements: [
            "Ide bisnis atau minat entrepreneurship",
            "Semangat belajar dan berinovasi",
            "Kemampuan analisis pasar"
        ],
        outcomes: [
            "Mampu mengembangkan business model",
            "Memahami proses startup",
            "Siap untuk launching bisnis",
            "Portfolio business plan"
        ],
        videos: [
            { week: 1, topic: "Business Ideation", file: "video/business-ideation.mp4" },
            { week: 2, topic: "Business Planning", file: "video/business-planning.mp4" },
            { week: 3, topic: "Funding & Launch", file: "video/funding-launch.mp4" },
            { week: 4, topic: "Growth & Scaling", file: "video/growth-scaling.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu entrepreneurship?", options: ["Bisnis yang dijalankan oleh individu", "Bisnis yang dijalankan oleh individu", "Bisnis yang dijalankan oleh individu", "Bisnis yang dijalankan oleh individu"], answer: "Bisnis yang dijalankan oleh individu" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu market research?", options: ["Pengumpulan informasi pasar", "Pengumpulan informasi pasar", "Pengumpulan informasi pasar", "Pengumpulan informasi pasar"], answer: "Pengumpulan informasi pasar" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu MVP development?", options: ["Development produk minimum", "Development produk minimum", "Development produk minimum", "Development produk minimum"], answer: "Development produk minimum" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari scaling strategy?", options: ["Meningkatkan pertumbuhan", "Meningkatkan pertumbuhan", "Meningkatkan pertumbuhan", "Meningkatkan pertumbuhan"], answer: "Meningkatkan pertumbuhan" }
            ]}
        ]
    },
    {
        id: 20,
        title: "Financial Planning",
        category: "business",
        categoryLabel: "Business",
        image: "images/Financial Planning.jpg",
        price: 199000,
        instructor: "Dewi Sartika",
        instructorPhoto: "images/Dewi Sartika.jpg",
        duration: "8 jam",
        level: "Pemula",
        rating: 4.3,
        students: 1100,
        description: "Perencanaan keuangan pribadi dan investasi yang cerdas. Kelola keuangan dengan bijak.",
        longDescription: `
            <p>Financial Planning akan mengajarkan Anda cara mengelola keuangan pribadi dan keluarga secara efektif. Anda akan mempelajari budgeting, saving, investing, dan retirement planning.</p>
            <ul>
                <li>Personal Finance Management</li>
                <li>Budgeting dan Saving</li>
                <li>Investment Strategies</li>
                <li>Insurance Planning</li>
                <li>Retirement Planning</li>
            </ul>
        `,
        curriculum: [
            {
                week: 1,
                title: "Financial Assessment",
                topics: ["Financial Health Check", "Income Analysis", "Expense Tracking", "Net Worth Calculation"]
            },
            {
                week: 2,
                title: "Budgeting & Saving",
                topics: ["Budget Planning", "Saving Strategies", "Emergency Fund", "Debt Management"]
            },
            {
                week: 3,
                title: "Investment Basics",
                topics: ["Investment Types", "Risk Management", "Portfolio Diversification", "Market Analysis"]
            },
            {
                week: 4,
                title: "Long-term Planning",
                topics: ["Insurance Planning", "Retirement Planning", "Estate Planning", "Financial Goals"]
            }
        ],
        requirements: [
            "Minat terhadap financial planning",
            "Kemampuan matematika dasar",
            "Disiplin dalam mengelola keuangan"
        ],
        outcomes: [
            "Mampu membuat financial plan",
            "Memahami investment strategies",
            "Siap untuk retirement planning",
            "Portfolio financial planning"
        ],
        videos: [
            { week: 1, topic: "Financial Assessment", file: "video/financial-assessment.mp4" },
            { week: 2, topic: "Budgeting & Saving", file: "video/budgeting-saving.mp4" },
            { week: 3, topic: "Investment Basics", file: "video/investment-basics.mp4" },
            { week: 4, topic: "Long-term Planning", file: "video/long-term-planning.mp4" }
        ],
        quizzes: [
            { week: 1, questions: [
                { question: "Apa itu financial health check?", options: ["Pemeriksaan kesehatan keuangan", "Pemeriksaan kesehatan keuangan", "Pemeriksaan kesehatan keuangan", "Pemeriksaan kesehatan keuangan"], answer: "Pemeriksaan kesehatan keuangan" }
            ]},
            { week: 2, questions: [
                { question: "Apa itu emergency fund?", options: ["Dana darurat", "Dana darurat", "Dana darurat", "Dana darurat"], answer: "Dana darurat" }
            ]},
            { week: 3, questions: [
                { question: "Apa itu risk management?", options: ["Pengelolaan risiko", "Pengelolaan risiko", "Pengelolaan risiko", "Pengelolaan risiko"], answer: "Pengelolaan risiko" }
            ]},
            { week: 4, questions: [
                { question: "Apa tujuan dari retirement planning?", options: ["Merencanakan masa depan", "Merencanakan masa depan", "Merencanakan masa depan", "Merencanakan masa depan"], answer: "Merencanakan masa depan" }
            ]}
        ]
    }
];

// Fungsi untuk mendapatkan kursus berdasarkan ID
function getCourseById(id) {
    return coursesData.find(course => course.id === parseInt(id));
}

// Fungsi untuk mendapatkan kursus berdasarkan kategori
function getCoursesByCategory(category) {
    if (category === 'all') {
        return coursesData;
    }
    return coursesData.filter(course => course.category === category);
}

// Fungsi untuk mencari kursus berdasarkan keyword
function searchCourses(keyword) {
    const searchTerm = keyword.toLowerCase();
    return coursesData.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.categoryLabel.toLowerCase().includes(searchTerm)
    );
}