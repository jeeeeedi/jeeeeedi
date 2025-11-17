import { fikafinaldemo, fikaposter, puppyescapemov, puppyescapepng, graphql1, graphql2, socnet01, socnet02, socnet03, socnet04, socnet05, socnet06, idrott_AttendancebyAgeGroup, idrott_dashboard, nyheter_flowchart, nyheter_terms, nyheter_matches } from '../assets';

export const schoolProjects = [
    {
        title: 'forum',
        subtitle: 'grit:lab Fika Café',
        link: 'https://github.com/olegamobile/forum',
        media: { type: 'video', src: fikafinaldemo, poster: fikaposter },
        description: `We created a web forum where users can register, post, comment, like, upload images, and categorize posts. We had to manage authentication and authorization, password encryption, cookies and sessions, and a database. We were not allowed to use any frontend libraries or frameworks, so I had to build the frontend from scratch in vanilla HTML and CSS. The grit:lab Fika Café is live. You’re welcome to interact and test our site: [https://fika.live](https://fika.live).`,
        skills: ['Go', 'JavaScript', 'SQLite', 'Docker', 'HTTP', 'HTML', 'CSS', 'unit testing', 'bcrypt', 'web development']
    },
    {
        title: 'make-your-game',
        subtitle: 'Puppy Escape',
        link: 'https://github.com/jeeeeedi/make-your-game',
        media: { type: 'video', src: puppyescapemov, poster: puppyescapepng },
        description: `This was our first game development project. We had to create a single-player game similar to Bomberman using pure JavaScript, HTML, and CSS, focusing on achieving a consistent 60 FPS without any frame drops. I implemented the game mechanics and optimized performance, which deepened my understanding of the \`requestAnimationFrame\`, the event loop, and DOM manipulation. You can play our game, **Puppy Escape**, here: [https://jeeeeedi.github.io/make-your-game/](https://jeeeeedi.github.io/make-your-game/).`,
        skills: ['JavaScript', 'HTML', 'CSS', 'requestAnimationFrame', 'event loop', 'DOM manipulation', 'Developer Tools', 'game development']
    },
    {
        title: 'graphql',
        link: 'https://github.com/jeeeeedi/graphql',
        media: { type: 'carousel', images: [graphql1, graphql2] },
        description: 'I created a grit:lab student profile page using GraphQL to learn the query language and manipulations associated with it. I developed a user interface that displays selected school information, including a statistics section with SVG graphs illustrating my achievements. I also implemented a secure login page with JWT authentication to access my data.',
        skills: ['JavaScript', 'SVG', 'GraphQL', 'web hosting', 'JWT', 'UI/UX', 'API', 'web development', 'GitHub Pages', 'data visualization']
    },
    {
        title: 'social-network',
        subtitle: 'SocialHub',
        link: 'https://github.com/jeeeeedi/social-network',
        media: { type: 'carousel', images: [socnet01, socnet02, socnet03, socnet04, socnet05, socnet06] },
        description: 'We developed a Facebook-like social network featuring user profiles, followers, posts, comments, image uploads, groups, notifications, and private and group chat capabilities. I initialized the setup for the frontend (Next.js/React) and backend development, where I implemented a Go-based server with SQLite for data management and migration. I designed an entity relationship diagram (ERD) so our application can handle data consistently and efficiently. I also built the posts and comments functionality. Lastly, I deployed a multi-container Docker app to isolate the frontend from the backend environment.',
        skills: ['JavaScript', 'Go', 'Next.js', 'React', 'SQLite', 'database migration', 'ERD', 'HTTP', 'web development', 'sessions', 'cookies', 'authentication', 'authorization', 'image handling', 'API', 'Docker', 'Websockets', 'bcrypt']
    },
    {
        title: 'buy-01',
        subtitle: '// 🚧 in progress //',
        description: 'We built an e-commerce platform using Spring Boot for the backend and Angular for the frontend. Users can register as either clients or sellers, using JWT for secure authentication. I worked on setting up the microservices, MongoDB, Kafka asynchronous communication, HTTPS/SSL, cross-origin resource sharing (CORS), and a multi-container Docker app.',
        skills: ['Java', 'Spring Boot', 'microservices', 'Spring Security', 'MongoDB', 'Angular', 'Kafka', 'JWT', 'HTTPS', 'SSL', 'CORS', 'Docker', 'image handling', 'API', 'CRUD', 'authentication', 'authorization', 'bcrypt', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    }
];

export const personalProjects = [
    {
        title: 'Hållbarhet i Nyheterna // 🚧 in progress //',
        subtitle: 'Analyzing Sustainability Trends in Local Åland News',
        /* link: '',*/
        media: { type: 'carousel', images: [nyheter_flowchart, nyheter_terms, nyheter_matches] },
        description: 'How frequently and in what context are climate and sustainability topics covered in local news?',
        solution: 'I plan to scrape local news headlines, analyze trends, and visualize coverage to provide insights for the community. This project will be a good opportunity for me to learn a new language, Python, alongside my main stack. I will also have hands-on experience in building a complete data workflow—from scraping and cleaning to analysis and visualization.',
        skills: ['Python', 'Scrapy', 'spaCy', 'SQLite', 'NLP', 'lemmatization', 'gensim']
    }
];

export const hackathonProjects = [
    {
        title: 'Ålands Idrott x Consilia Data Challenge',
        subtitle: 'J2 Process Optimization',
        link: 'https://www.linkedin.com/posts/grit-lab-%C3%A5land_innovation-sportsdevelopment-leadership-activity-7364641522106920960-34dW',
        media: { type: 'video', src: idrott_dashboard, poster: idrott_AttendancebyAgeGroup },
        description: 'Ålands Idrott manages sports club funding, but member and activity data is fragmented across two systems (Suomisport and Membra/Consilia), making fair, data-driven fund allocation difficult. Our objective was to build a solution to reconcile and analyze data from both systems, identify duplicates, and visualize participation statistics to support transparent, auditable funding decisions.',
        solution: `#### Our solution
We built a data-driven funding tool that automates reconciliation, analysis, and decision-making for Ålands Idrott:

  - **Data wrangling:** Fetches and deduplicates data from Membra and Suomisport APIs (simulated with thousands of fake data in JSON), reconciles records in a Go backend, and stores clean data in SQLite. Manual PDF applications are integrated via a simple input form.

  - **Process optimization:** Automatically calculates scores, allocation percentages, and suggests budgets. Provides a step-by-step workflow with decision criteria, real-time budget tracking, and notes—eliminating manual back-and-forth between forms and tables.

  - **Reconciliation method:** Members matched using first name, last name, birth date, and zip code; only registered clubs can be selected.

  - **Privacy and roles:** Names are hidden for GDPR; the prototype supports a single user.

  Our solution streamlines data handling and funding decisions while keeping the process auditable and user-friendly. At the end of the four-day hackathon, we also pitched and presented our solution to the panel of judges.`,
        skills: ['Go', 'SQLite', 'React', 'Next.js', 'Tailwind', 'TypeScript', 'Recharts']
    }
];

export const categories = [
    { title: 'Personal Projects', projects: personalProjects },
    { title: 'Selected School Projects', projects: schoolProjects },
    { title: 'Hackathons', projects: hackathonProjects }
];
