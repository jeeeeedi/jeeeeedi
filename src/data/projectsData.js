import { fikafinaldemo, fikaposter, puppyescapemov, puppyescapepng, graphql1, graphql2, socnet01, socnet02, socnet03, socnet04, socnet05, socnet06, idrott_AttendancebyAgeGroup, idrott_dashboard, nyheter_flowchart, nyheter_terms, nyheter_matches, lovable01, lovable02, n8n, skyvern, supabase, paf, buy02_jenkins, buy02_jenkinsflow, buy02_products, buy02_seller, empower, ofver, bi_monthly_residents, bi_monthly_visitors, bi_sales_tourists } from '../assets';

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
        title: 'buy-02',
        subtitle: 'my online shop',
        link: 'https://github.com/SaddamHosyn/buy-02',
        media: { type: 'carousel', images: [buy02_products, buy02_seller, buy02_jenkins, buy02_jenkinsflow] },
        description: `**buy-02** is the culmination of the full Java track: **lets-play** introduced RESTful APIs, CRUD, and production-grade Spring Boot + MongoDB backends with proper auth and error handling; **angul-it** taught Angular component architecture, reactive forms, and client-side state management; **buy-01** assembled these into a microservices marketplace (User, Product, Media services) with Kafka for event-driven communication and JWT/OAuth2 for role-based security; **mr-jenk** introduced Jenkins CI/CD pipeline automation; and **safe-zone** added SonarQube static analysis and security scanning as a quality gate.

**buy-02** brought it all together — completing the marketplace with shopping cart, Pay on Delivery checkout, order tracking, user and seller analytics dashboards, and product search with faceted filtering. The team enforced a GitHub PR-based workflow with mandatory peer reviews (security, performance, readability) and a protected main branch — no merge without an approved review and a green pipeline. Jenkins ran a multibranch pipeline: feature branches triggered the full build and test suite (backend and frontend in parallel, plus a SonarQube quality gate) but stopped short of deployment; only merges to main advanced to the deploy stage. My frontend work covered the Angular side: analytics dashboards with charts (spend, most-bought categories, revenue, best-sellers). On testing, I was responsible for backend unit tests (JUnit 5 + Mockito — mocking repositories, password encoders, and KafkaTemplate to verify event-driven behavior without a live Kafka cluster) and frontend tests (Karma/Jasmine via Angular TestBed).`,
        skills: ['Java', 'Spring Boot', 'microservices', 'Spring Security', 'MongoDB', 'Angular', 'Kafka', 'JWT', 'HTTPS', 'SSL', 'CORS', 'Docker', 'API Gateway', 'image handling', 'API', 'CRUD', 'authentication', 'authorization', 'bcrypt', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Jenkins', 'CI/CD', 'SonarQube', 'JUnit', 'Mockito', 'Jasmine', 'Karma', 'unit testing', 'route guards', 'reactive forms', 'analytics', 'data visualization', 'search', 'filtering', 'pagination', 'GitHub', 'AWS']
    }
];

export const personalProjects = [
    {
        title: 'EU Sustainability Watch',
        subtitle: 'Stay Ahead of EU Sustainability Regulations',
        /* link: '',*/
        media: { type: 'carousel', images: [lovable01, lovable02, n8n, skyvern, supabase] },
        description: 'How can professionals effectively keep updated amidst the overwhelming complexity, vast volume, and rapid changes in information?',
        solution: 'As a former sustainability specialist, I spent hours manually parsing dense documents to keep up with shifting regulations, so now, I developed the EU Sustainability Watch, an n8n-powered automation. It takes input from a Lovable frontend to prompt Skyvern browser agents to autonomously scrape [EUR-Lex](https://eur-lex.europa.eu/homepage.html). OpenAI then structures these complex documents into concise summaries, highlights, and tags stored in a Supabase database. The resulting dashboard provides a filtered digest that allows specialists to prioritize high-impact regulations. While currently tailored for ESG compliance, this prototype showcases a modular architecture that can be adapted to any corporate environment requiring constant monitoring; for example, a cybersecurity analyst tracking emerging virus vulnerabilities (CVEs) or a market strategist monitoring real-time competitive intelligence and industry-specific news.',
        skills: ['n8n', 'Lovable', 'Skyvern','OpenAI','Supabase','JSON','JavaScript','prompt engineering','REST API','ETL','web scraping','PostgreSQL','automation','ESG','business intelligence','strategic intelligence']
    },
    {
        title: 'Naturkartan.ax // 🚧 in progress //',
        subtitle: 'Hiking trails & cycling routes',
        link: 'https://jeeeeedi.github.io/naturkartan-ax/',
        description: 'Interactive map of hiking trails and cycling routes across the Åland Islands, built to make official trail data actually usable with mobile GPS and clear facility markers.',
        solution: `**Data:** Routes + facility points synced from government ArcGIS FeatureServer layers (Ålands landskapsregering).

**Highlights:**

- Leaflet map with route lines + facility markers
- Trail list with search + category filters
- Route detail views + community "suggest an edit" flow
- Submit missing trails via GPX upload
- Admin review UI + ArcGIS re-sync
- UI translations (SV/EN/FI)`,
        skills: ['React', 'Vite', 'JavaScript', 'Leaflet', 'react-leaflet', 'OpenStreetMap', 'Supabase', 'PostgreSQL', 'PostGIS', 'ArcGIS', 'GPX', 'GPS', 'geolocation', 'content hashing/deduplication', 'admin dashboard', 'CRUD', 'nature', 'Åland', 'hiking', 'cycling', 'environment']
    },
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
        title: 'Paf Sports Betting Simulator',
        subtitle: 'The winning team',
        link: 'https://github.com/jeeeeedi/paf-hackathon', 
        media: { type: 'image', src: paf },
        description: 'Provided with a pre-built frontend and strict OpenAPI specifications, we were tasked with building a robust, high-performance backend from scratch to power a sports betting simulation within a limited timeframe.',
        solution: `#### Our solution
Our team secured first place through teamwork and communication. We helped each other digest the complex task instructions and quickly divided the complex API requirements into specialized workstreams; while my two teammates focused on the intricate logic for match scheduling and bet settlement, I spearheaded the foundational setup using Java and Spring Boot. I was also responsible for the MongoDB integration, Swagger documentation, and player management.`,
        skills: ['Java','Spring Boot','MongoDB','backend development','API','Docker','CRUD','OpenAPI','Swagger','Kafka','caching','scheduling']
    },
    {
        title: 'BI Solutions: Data Engineering',
        subtitle: 'Crash Course + Visualization Hackathon',
        link: 'https://github.com/jeeeeedi/bisolutions_data_project',
        media: { type: 'carousel', images: [bi_monthly_residents, bi_monthly_visitors, bi_sales_tourists] },
        solution: `#### Crash course
We covered core data engineering concepts, like how to design reliable data pipelines, validate data quality, and structure raw data into clear layers for analysis.
#### Take-home exercise: Åland Data Integration Project
We had to combine tourism (CSV), grocery sales (JSON), and population (REST API from ÅSUB.ax) data so it can be used for analytics (e.g., how visitor trends relate to local spending and demographics over time).
#### Hackathon
We built a ferry-bookings dashboard from large simulated data by defining a booking fact table + dimensions (trip, resources, customer/agent, payment, rate, capacity) and visualizing passenger volumes over time and route/leg comparisons.`,
        skills: ['ELT', 'medallion architecture', 'star schema', 'galaxy schema', 'PowerBI', 'SQL', 'data quality', 'Snowflake', 'data pipeline', 'Python']
    },
    {
        title: 'Digitalizing Öfvergårds with Light in the Dark',
        subtitle: 'Empower Öfvergårds',
        link: 'https://www.linkedin.com/posts/grit-lab-%C3%A5land_last-week-we-hosted-another-amazing-grit-activity-7421453244767551489-r9vK',
        media: { type: 'carousel', images: [empower, ofver] },
        description: 'Öfvergårds is a local Åland apple farm participating in the Light in the Dark initiative, which aims to make low-season tourism more attractive and sustainable. The core challenge was fragmented, manual customer processes (bookings, payments, tracking, and communications) across disconnected tools, making it hard to scale and stay organized.',
        solution: `#### Our solution
We pitched "Empower Öfvergårds" — a simple automation bridge that lets them spend more time growing award-winning apples and building community, and less time behind a computer. We optimized the process down to 3 stages: customers book and pay via Understory → Öfvergårds gets auto-updated details in Google Sheets + Mailchimp → reminders and feedback forms are sent automatically (Apps Script + Google Forms).`,
        skills: ['Automation', 'Apps Script', 'Google Workspace', 'Lovable']
    },
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
