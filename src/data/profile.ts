export type Locale = "ru" | "en" | "kk" | "zh";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "ru", label: "RU", native: "Русский" },
  { code: "en", label: "EN", native: "English" },
  { code: "kk", label: "KK", native: "Қазақша" },
  { code: "zh", label: "ZH", native: "中文" },
];

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  period: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export interface LocaleContent {
  nav: {
    about: string;
    projects: string;
    education: string;
    learning: string;
    cmdHint: string;
  };
  hero: {
    badge: string;
    name: string;
    headline: string;
    subheadline: string;
    location: string;
    ctaGithub: string;
    ctaTelegram: string;
    ctaCopyEmail: string;
    copiedEmail: string;
    copiedTelegram: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    beyondCodeTitle: string;
    beyondCode: string[];
  };
  projectsSection: {
    title: string;
    subtitle: string;
    featuredBadge: string;
    viewRepo: string;
    items: ProjectItem[];
  };
  educationSection: {
    title: string;
    subtitle: string;
    items: EducationItem[];
    certsTitle: string;
    verifyLabel: string;
    certs: CertificateItem[];
  };
  learningSection: {
    title: string;
    subtitle: string;
    whyTitle: string;
    whyText: string;
    goalsTitle: string;
    goals: { title: string; detail: string }[];
    interestsTitle: string;
    interests: string[];
  };
  palette: {
    placeholder: string;
    empty: string;
    sectionsGroup: string;
    languagesGroup: string;
    actionsGroup: string;
    jumpPrefix: string;
    switchPrefix: string;
    copyEmail: string;
    copyTelegram: string;
    openGithub: string;
    closeHint: string;
  };
  footer: string;
}

const SHARED_CERTS: CertificateItem[] = [
  {
    title: "Network Security",
    issuer: "Cisco Networking Academy",
    date: "Nov 2026",
    url: "https://www.netacad.com/certificates?issuanceId=98ef2678-d88e-4af1-a91f-44708fe039f2",
  },
  {
    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google (Coursera)",
    date: "Nov 2026",
    url: "https://coursera.org/verify/BAJMOLF8YQX7",
  },
  {
    title: "Ethical Hacking & CompTIA PenTest+ V3 Prep Course",
    issuer: "Packt (Coursera)",
    date: "Oct 2026",
    url: "https://coursera.org/verify/B4UOC0KV9HDH",
  },
  {
    title: "Introduction to Cybersecurity Tools & Cyberattacks",
    issuer: "IBM (Coursera)",
    date: "Oct 2026",
    url: "https://coursera.org/verify/M3GBX7YWQJAW",
  },
];

export const PROFILE_CONTENT: Record<Locale, LocaleContent> = {
  ru: {
    nav: {
      about: "О себе",
      projects: "Проекты",
      education: "Обучение",
      learning: "Цели",
      cmdHint: "Поиск",
    },
    hero: {
      badge: "Открыт к стажировке AI Developer Intern · SkyWhisper & MonoLotus",
      name: "Темирлан Рахым",
      headline:
        "Студент 3 курса кибербезопасности, который быстро собирает рабочие AI и веб-продукты.",
      subheadline:
        "Совмещаю инженерную дисциплину (Git, PR, тесты, безопасность) с современной AI-разработкой на Next.js, TypeScript и Python.",
      location: "Астана, Казахстан · Удалённо",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Скопировать Email",
      copiedEmail: "Email скопирован",
      copiedTelegram: "Telegram @yobxes скопирован",
    },
    about: {
      title: "Коротко обо мне",
      paragraphs: [
        "Учусь на 3 курсе в Astana IT University на англоязычной программе по кибербезопасности. Мне нравится не просто изучать теорию, а быстро превращать идеи в понятные продукты, которые можно открыть в браузере и проверить в деле.",
        "За последний год успел поработать в IT-поддержке и AI-лаборатории колледжа, выступить на хакатоне Decentrathon 6.0 в треке AI Engineering и собрать несколько открытых инструментов — от аудитора конверсии лендингов на Next.js до Docker-сервисов и CLI-сканера HTTP-безопасности.",
      ],
      languagesTitle: "Языки",
      languages: [
        { name: "Русский", level: "Родной (C2)" },
        { name: "Казахский", level: "Продвинутый (C1)" },
        { name: "Английский", level: "Upper-Intermediate (B2)" },
        { name: "Китайский", level: "Базовый (учёба в AIU / UIBE)" },
      ],
      beyondCodeTitle: "Интересы вне кода",
      beyondCode: [
        "Продуктовый UX и локализация интерфейсов на разные языки",
        "Сборные AITU по баскетболу и армрестлингу",
        "Исследование AI-инструментов ускорения разработки",
      ],
    },
    projectsSection: {
      title: "Проекты и опыт",
      subtitle: "Реальные репозитории с тестами, чистой Git-историей и практическим результатом.",
      featuredBadge: "Флагман под стек компании",
      viewRepo: "Открыть на GitHub",
      items: [
        {
          id: "funnellens",
          title: "FunnelLens — AI-аудитор первого экрана лендингов",
          tag: "Product MVP · Next.js + i18n",
          period: "Ноябрь 2026",
          featured: true,
          summary:
            "Веб-продукт, который разбирает первый экран лендинга по 12 продуктовым правилам, ставит кликабельные пины прямо поверх скриншота и предлагает переписанный Hero («До / После»).",
          highlights: [
            "Строгая 100-балльная модель оценки (6 категорий, Zod-схемы и SSRF-защита URL)",
            "Интерактивный канвас с пинами по координатам DOM и мультиязычный UI (EN / RU / KK / ZH / ES)",
            "Разработка по отдельным веткам, Pull Request'ам и CI-проверкам",
          ],
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Firebase", "Trigger.dev", "Stripe"],
          repoUrl: "https://github.com/Aspart7/funnellens",
        },
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          summary:
            "Автономный Python CLI-инструмент (без внешних зависимостей) для аудита OWASP HTTP-заголовков, флагов cookies, CORS и TLS с оценкой 0–100 и HTML/JSON-отчётами.",
          highlights: [
            "Включает локальный стенд /vulnerable и /hardened для воспроизводимых проверок",
            "Покрыт модульными тестами unittest",
          ],
          stack: ["Python", "HTTP/TLS", "OWASP", "HTML/JSON", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          summary:
            "Контейнеризованный сервис на Python + Telethon + SQLite для аудита и архивации событий в модерируемых чатах с автоматической очисткой по TTL.",
          highlights: [
            "Секреты вынесены в переменные окружения, потокобезопасная работа с SQLite и non-root Dockerfile",
            "Покрыт модульными тестами жизненного цикла хранения",
          ],
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Октябрь 2026",
          summary:
            "Трек AI Engineering: настройка запусков на Kaggle T4 и профилирование скорости и видеопамяти при QLoRA дообучении Qwen2.",
          highlights: [
            "Команда достигла ускорения в 1.72× и снижения потребления VRAM в 13.7× (~1 ГБ) при сохранении точности",
          ],
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2", "Benchmarking"],
        },
        {
          id: "college-intern",
          title: "Стажёр IT-поддержки и AI-проектов — ТОО «Колледж управления»",
          tag: "Стажировка · Астана",
          period: "Лето 2026",
          summary:
            "Настройка и поддержка 10+ рабочих станций Windows и корпоративных LLM-аккаунтов в AI-лаборатории, структурирование учебных датасетов и помощь с силлабусами.",
          highlights: [
            "Поддержка пользователей и быстрая диагностика рабочих окружений",
            "Применение LLM-инструментов для систематизации таблиц успеваемости",
          ],
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Tables"],
        },
      ],
    },
    educationSection: {
      title: "Образование и сертификаты",
      subtitle: "Бакалавриат на английском языке и профильные подтверждённые курсы.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "Бакалавриат: Кибербезопасность (обучение на английском языке)",
          period: "2024 — Июнь 2027 (3 курс)",
          note: "Фокус: сетевая безопасность, веб-приложения, системное программирование и прикладной AI.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Пекин)",
          degree: "Международная торговля (программа двойного диплома, 1 курс)",
          period: "2023 — 2024",
          note: "Интенсивная база по деловому английскому и начальному китайскому языку перед переводом в IT.",
        },
        {
          school: "Астана БІЛІМ-ИННОВАЦИЯ лицейі для одарённых юношей (БИЛ)",
          degree: "Среднее образование (физико-математический профиль)",
          period: "Выпуск 2023",
          note: "Обучение на английском/казахском по профильным предметам.",
        },
      ],
      certsTitle: "Подтверждённые сертификаты",
      verifyLabel: "Проверить",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "Чему хочу научиться в SkyWhisper и MonoLotus",
      subtitle: "Осознанный вектор роста на ближайшие месяцы в продуктовой AI-команде.",
      whyTitle: "Почему мне интересна именно эта команда",
      whyText:
        "Мне близка идея быстрого выпуска реальных фич для пользователей по всему миру на 20+ языках. Я хочу перейти от учебных и пет-проектов к командной разработке, где каждый PR проходит код-ревью и доходит до живого продакшена.",
      goalsTitle: "5 вещей, которые хочу прокачать на стажировке",
      goals: [
        {
          title: "Продвинутый рабочий цикл с Claude Code",
          detail: "Проектирование фич через CLAUDE.md, быстрое прототипирование, рефакторинг и автоматическая проверка перед PR.",
        },
        {
          title: "Продуктовый Next.js + Vercel на 20+ языков",
          detail: "Работа с i18n-архитектурой, производительностью App Router и выпуском изменений без регрессий.",
        },
        {
          title: "Надёжный бэкенд: Firebase, Trigger.dev и Stripe",
          detail: "Асинхронные фоновые пайплайны, правила безопасности Firestore и аккуратная работа с платёжными вебхуками.",
        },
        {
          title: "Зрелая Git-культура и Code Review",
          detail: "Умение получать обратную связь от ментора, писать понятные PR-описания и быстро закрывать замечания.",
        },
        {
          title: "Продуктовое мышление",
          detail: "Оценивать задачу глазами конечного пользователя: где ему непонятно, что мешает и какая метрика вырастет.",
        },
      ],
      interestsTitle: "Личные интересы",
      interests: [
        "AI Product Engineering",
        "Локализация и глобальный UX",
        "AppSec и защита веб-приложений",
        "Баскетбол и армрестлинг",
      ],
    },
    palette: {
      placeholder: "Перейти к разделу, сменить язык или скопировать контакт...",
      empty: "Ничего не найдено",
      sectionsGroup: "Разделы",
      languagesGroup: "Язык интерфейса",
      actionsGroup: "Быстрые действия",
      jumpPrefix: "Перейти:",
      switchPrefix: "Переключить язык:",
      copyEmail: "Скопировать Email (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Скопировать Telegram (@yobxes)",
      openGithub: "Открыть GitHub (github.com/Aspart7)",
      closeHint: "ESC чтобы закрыть",
    },
    footer: "Сделано с помощью Next.js, TypeScript, Tailwind CSS и AI-инструментов · Темирлан Рахым, 2026",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      education: "Education",
      learning: "Goals",
      cmdHint: "Search",
    },
    hero: {
      badge: "Applying for AI Developer Intern · SkyWhisper & MonoLotus",
      name: "Temirlan Rakhym",
      headline:
        "3rd-year Cybersecurity student shipping practical AI & web products fast.",
      subheadline:
        "Combining engineering discipline (Git branches, PRs, tests, web security) with modern AI-assisted development in Next.js, TypeScript, and Python.",
      location: "Astana, Kazakhstan · Remote-ready",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Copy Email",
      copiedEmail: "Email copied",
      copiedTelegram: "Telegram @yobxes copied",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I am a 3rd-year undergraduate studying Cybersecurity in English at Astana IT University. I prefer turning ideas into live browser products rather than stopping at theory.",
        "Over the past year I completed an IT Support & AI Projects internship, profiled QLoRA training at Decentrathon 6.0, and built public repositories spanning Next.js AI conversion auditing, Dockerized Python services, and OWASP security header scanning.",
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Russian", level: "Native (C2)" },
        { name: "Kazakh", level: "Advanced (C1)" },
        { name: "English", level: "Upper-Intermediate (B2)" },
        { name: "Chinese", level: "Elementary (AIU / UIBE)" },
      ],
      beyondCodeTitle: "Beyond code",
      beyondCode: [
        "Multilingual product UX across diverse markets",
        "AITU varsity basketball & arm wrestling teams",
        "Exploring AI-first engineering workflows",
      ],
    },
    projectsSection: {
      title: "Projects & Experience",
      subtitle: "Public repositories with unit tests, clean Git PR history, and working demos.",
      featuredBadge: "Built for company stack",
      viewRepo: "View on GitHub",
      items: [
        {
          id: "funnellens",
          title: "FunnelLens — First-Screen Landing Conversion Auditor",
          tag: "Product MVP · Next.js + i18n",
          period: "Nov 2026",
          featured: true,
          summary:
            "Audits landing page hero sections against a 12-rule CRO rubric, places clickable pins directly over page captures, and generates Before/After hero rewrites.",
          highlights: [
            "Strict 100-point rubric across 6 categories, Zod schema validation, and SSRF URL checks",
            "Interactive DOM-coordinate pin canvas with 5-language UI (EN / RU / KK / ZH / ES)",
            "Developed through structured Git feature branches, Pull Requests, and CI checks",
          ],
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Firebase", "Trigger.dev", "Stripe"],
          repoUrl: "https://github.com/Aspart7/funnellens",
        },
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          summary:
            "Zero-dependency Python CLI auditing OWASP security headers, cookies, CORS reflection, and TLS configuration with 0–100 scoring and HTML/JSON reports.",
          highlights: [
            "Includes /vulnerable and /hardened demo targets for repeatable testing",
            "Covered by unittest suite",
          ],
          stack: ["Python", "HTTP/TLS", "OWASP", "HTML/JSON", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          summary:
            "Dockerized Python + Telethon + SQLite service for auditing moderated Telegram chats with automatic TTL retention cleanup.",
          highlights: [
            "Environment-only secrets, thread-safe SQLite storage, and non-root Dockerfile",
            "Unit tests covering message persistence and TTL expiration",
          ],
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Oct 2026",
          summary:
            "Configured Kaggle T4 benchmark runs and profiled runtime and VRAM usage for Qwen2 QLoRA fine-tuning.",
          highlights: [
            "Team achieved 1.72x speedup and 13.7x VRAM reduction (~1 GB VRAM) at preserved accuracy",
          ],
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2", "Profiling"],
        },
        {
          id: "college-intern",
          title: "IT Support & AI Projects Intern — College of Management LLP",
          tag: "Internship · Astana",
          period: "Summer 2026",
          summary:
            "Configured and maintained 10+ Windows workstations and corporate LLM accounts in an AI lab; structured student grade datasets and assisted with syllabi.",
          highlights: [
            "Hands-on troubleshooting of software environments and workstation reliability",
            "Used tabular workflows and LLM tools to clean and organize academic records",
          ],
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Hygiene"],
        },
      ],
    },
    educationSection: {
      title: "Education & Certificates",
      subtitle: "English-taught Cybersecurity degree and verified technical credentials.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "B.Sc. in Cybersecurity (English-taught program)",
          period: "2024 — June 2027 (3rd Year)",
          note: "Core focus: web and network security, systems analysis, and applied AI development.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Beijing)",
          degree: "International Trade (Double-Degree Program, 1 Year)",
          period: "2023 — 2024",
          note: "Completed first year with English and introductory Mandarin coursework before transferring to IT.",
        },
        {
          school: "Astana Bilim-Innovation Lyceum for Gifted Boys (BIL)",
          degree: "High School Diploma (STEM track)",
          period: "Class of 2023",
          note: "Strong mathematics and English-medium STEM foundation.",
        },
      ],
      certsTitle: "Verified Certificates",
      verifyLabel: "Verify",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "What I Want to Learn at SkyWhisper & MonoLotus",
      subtitle: "Focused skills I want to sharpen by shipping real features to users.",
      whyTitle: "Why this team excites me",
      whyText:
        "Building consumer SaaS products used in 20+ languages fits how I like to work: fast iteration, clear product thinking, and shipping real features into production through structured Git and code review.",
      goalsTitle: "5 things I want to master during the internship",
      goals: [
        {
          title: "Production workflows with Claude Code",
          detail: "Using CLAUDE.md conventions, targeted sub-tasks, automated checks, and disciplined diffs.",
        },
        {
          title: "Multilingual Next.js + Vercel at scale",
          detail: "Managing 20+ locales cleanly without layout breakage, broken placeholders, or slow bundles.",
        },
        {
          title: "Reliable Firebase, Trigger.dev & Stripe flows",
          detail: "Designing resilient background jobs, strict Firestore rules, and idempotent payment webhooks.",
        },
        {
          title: "Code review & Git collaboration",
          detail: "Writing crisp PR descriptions, responding rapidly to mentor feedback, and preventing regressions.",
        },
        {
          title: "AI Product Engineer mindset",
          detail: "Measuring every feature by user clarity and real product impact rather than code complexity.",
        },
      ],
      interestsTitle: "Interests",
      interests: [
        "AI Product Engineering",
        "Multilingual SaaS UX",
        "Web Application Security",
        "Basketball & Arm Wrestling",
      ],
    },
    palette: {
      placeholder: "Jump to a section, switch language, or copy contact...",
      empty: "No matching command",
      sectionsGroup: "Sections",
      languagesGroup: "Language",
      actionsGroup: "Quick actions",
      jumpPrefix: "Go to:",
      switchPrefix: "Switch language:",
      copyEmail: "Copy Email (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Copy Telegram (@yobxes)",
      openGithub: "Open GitHub (github.com/Aspart7)",
      closeHint: "ESC to close",
    },
    footer: "Built with Next.js, TypeScript, Tailwind CSS, and AI tooling · Temirlan Rakhym, 2026",
  },
  kk: {
    nav: {
      about: "Мен туралы",
      projects: "Жобалар",
      education: "Білім",
      learning: "Мақсаттар",
      cmdHint: "Іздеу",
    },
    hero: {
      badge: "AI Developer Intern · SkyWhisper & MonoLotus өтінімі",
      name: "Темірлан Рахым",
      headline:
        "Жұмыс істейтін AI және веб-өнімдерді жылдам жасайтын киберқауіпсіздік 3-курс студенті.",
      subheadline:
        "Инженерлік тәртіпті (Git тармақтары, PR, тесттер, веб-қауіпсіздік) Next.js, TypeScript және Python арқылы заманауи AI-әзірлеумен ұштастырамын.",
      location: "Астана, Қазақстан · Қашықтан жұмыс",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Email көшіру",
      copiedEmail: "Email көшірілді",
      copiedTelegram: "Telegram @yobxes көшірілді",
    },
    about: {
      title: "Мен туралы қысқаша",
      paragraphs: [
        "Astana IT University университетінде ағылшын тілінде «Киберқауіпсіздік» мамандығы бойынша 3-курста оқимын. Идеяны теорияда қалдырмай, браузерде тексеруге болатын нақты өнімге айналдырғанды ұнатамын.",
        "Соңғы жылы IT-қолдау және AI-зертханада тәжірибеден өттім, Decentrathon 6.0 хакатонында QLoRA өнімділігін өлшеуге қатыстым және Next.js пен Python тілінде ашық жобалар жасадым.",
      ],
      languagesTitle: "Тілдер",
      languages: [
        { name: "Орыс тілі", level: "Ана тілі (C2)" },
        { name: "Қазақ тілі", level: "Жетік (C1)" },
        { name: "Ағылшын тілі", level: "Upper-Intermediate (B2)" },
        { name: "Қытай тілі", level: "Бастапқы (AIU / UIBE)" },
      ],
      beyondCodeTitle: "Кодтан тыс қызығушылықтар",
      beyondCode: [
        "Көптілді өнімдердің UX және локализация сапасы",
        "AITU баскетбол және армрестлинг құрама командалары",
        "AI құралдарымен әзірлеу жылдамдығын арттыру",
      ],
    },
    projectsSection: {
      title: "Жобалар мен тәжірибе",
      subtitle: "Тесттері, таза Git тарихы және нақты нәтижесі бар репозиторийлер.",
      featuredBadge: "Компания стегіне сай жоба",
      viewRepo: "GitHub-та ашу",
      items: [
        {
          id: "funnellens",
          title: "FunnelLens — Лендингтің бірінші экранын тексеретін AI-аудитор",
          tag: "Product MVP · Next.js + i18n",
          period: "Қараша 2026",
          featured: true,
          summary:
            "Лендингтің бірінші экранын 12 өнімдік ереже бойынша талдап, скриншот үстіне нүктелі ескертулер қояды және «Дейін / Кейін» нұсқасын ұсынады.",
          highlights: [
            "100 балдық қатаң бағалау жүйесі (6 санат, Zod схемасы, SSRF қорғанысы)",
            "5 тілді интерфейс (EN / RU / KK / ZH / ES) және интерактивті пин-канвас",
            "Бөлек Git тармақтары, Pull Request және CI тексерулері арқылы жасалған",
          ],
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Firebase", "Trigger.dev", "Stripe"],
          repoUrl: "https://github.com/Aspart7/funnellens",
        },
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          summary:
            "OWASP HTTP тақырыптарын, cookie жалаушаларын, CORS және TLS параметрлерін тексеретін тәуелсіз Python CLI құралы.",
          highlights: [
            "/vulnerable және /hardened оқу стендтерімен бірге жеткізіледі",
            "unittest модульдік тесттерімен қамтылған",
          ],
          stack: ["Python", "HTTP/TLS", "OWASP", "HTML/JSON", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          summary:
            "Модерацияланатын чаттарды TTL мерзімі бойынша мұрағаттайтын Python + Telethon + SQLite Docker сервисі.",
          highlights: [
            "Құпия кілттер .env арқылы беріледі, қауіпсіз SQLite және non-root Dockerfile",
            "Деректер сақтау логикасына арналған тесттер жазылған",
          ],
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Қазан 2026",
          summary:
            "Kaggle T4 ортасында Qwen2 моделін QLoRA арқылы оқыту жылдамдығы мен бейнежад шығынын профильдеу.",
          highlights: [
            "Команда дәлдікті сақтай отырып 1.72× жылдамдатуға және VRAM-ды 13.7× азайтуға (~1 ГБ) қол жеткізді",
          ],
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2", "Benchmarking"],
        },
        {
          id: "college-intern",
          title: "IT-қолдау және AI-жобалар тағылымдамашысы — «Басқару колледжі» ЖШС",
          tag: "Тағылымдама · Астана",
          period: "Жаз 2026",
          summary:
            "AI-зертханада 10+ Windows компьютерін және корпоративтік LLM аккаунттарын баптау, үлгерім кестелері мен силлабустарды жүйелеу.",
          highlights: [
            "Жұмыс орталарын жылдам диагностикалау және қолдау",
            "Деректерді кестелеуде LLM құралдарын қолдану",
          ],
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Tables"],
        },
      ],
    },
    educationSection: {
      title: "Білім және сертификаттар",
      subtitle: "Ағылшын тіліндегі бакалавриат және расталған курстар.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "Бакалавриат: Киберқауіпсіздік (ағылшын тілінде)",
          period: "2024 — Маусым 2027 (3-курс)",
          note: "Негізгі бағыттар: желілік және веб-қауіпсіздік, жүйелерді талдау, қолданбалы AI.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Бейжің)",
          degree: "Халықаралық сауда (қос диплом бағдарламасы, 1 курс)",
          period: "2023 — 2024",
          note: "IT бағытына ауысқанға дейін ағылшын және қытай тілдері бойынша дайындық.",
        },
        {
          school: "Астана БІЛІМ-ИННОВАЦИЯ лицейі (БИЛ)",
          degree: "Орта білім (жаратылыстану-математика бағыты)",
          period: "2023 түлегі",
          note: "Тереңдетілген математика және ағылшын тілі базасы.",
        },
      ],
      certsTitle: "Расталған сертификаттар",
      verifyLabel: "Тексеру",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "SkyWhisper және MonoLotus командасында не үйренгім келеді",
      subtitle: "Тағылымдама барысында меңгергім келетін нақты инженерлік дағдылар.",
      whyTitle: "Неліктен дәл осы команда қызықтырады",
      whyText:
        "20+ тілдегі нақты өнімдерге функцияларды жылдам жеткізу тәсілі маған өте жақын. Оқу жобаларынан нақты продакшн мен жүйелі код-ревью процесіне өткім келеді.",
      goalsTitle: "Меңгергім келетін 5 бағыт",
      goals: [
        {
          title: "Claude Code-пен жүйелі жұмыс",
          detail: "CLAUDE.md ережелері, тапсырмаларды бөлу және PR алдындағы автоматты тексерулер.",
        },
        {
          title: "20+ тілдегі Next.js + Vercel",
          detail: "Көптілді интерфейстерде орналасу қателерінсіз жылдам релиз жасау.",
        },
        {
          title: "Firebase, Trigger.dev және Stripe",
          detail: "Фондық тапсырмалар, қауіпсіз Firestore ережелері және сенімді төлем вебхуктары.",
        },
        {
          title: "Git және Code Review мәдениеті",
          detail: "Ментор пікірлерін жылдам қабылдап, сапалы Pull Request жазу.",
        },
        {
          title: "AI Product Engineer көзқарасы",
          detail: "Шешімдерді пайдаланушыға беретін нақты пайдасымен өлшеу.",
        },
      ],
      interestsTitle: "Қызығушылықтар",
      interests: [
        "AI Product Engineering",
        "Көптілді өнім дизайны",
        "Веб-қауіпсіздік",
        "Баскетбол және армрестлинг",
      ],
    },
    palette: {
      placeholder: "Бөлімге өту, тілді ауыстыру немесе байланыс көшіру...",
      empty: "Ештеңе табылмады",
      sectionsGroup: "Бөлімдер",
      languagesGroup: "Тіл",
      actionsGroup: "Жылдам әрекеттер",
      jumpPrefix: "Өту:",
      switchPrefix: "Тілді ауыстыру:",
      copyEmail: "Email көшіру (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Telegram көшіру (@yobxes)",
      openGithub: "GitHub ашу (github.com/Aspart7)",
      closeHint: "Жабу үшін ESC",
    },
    footer: "Next.js, TypeScript, Tailwind CSS және AI құралдарымен жасалған · Темірлан Рахым, 2026",
  },
  zh: {
    nav: {
      about: "关于我",
      projects: "项目经历",
      education: "教育背景",
      learning: "学习目标",
      cmdHint: "搜索",
    },
    hero: {
      badge: "申请 AI Product 开发实习生 · SkyWhisper & MonoLotus",
      name: "Temirlan Rakhym（铁木尔兰）",
      headline: "网络安全大三学生，擅长用 AI 工具快速打造可上线的 Web 产品。",
      subheadline:
        "将工程规范（Git 分支、Pull Request、测试、安全审计）与 Next.js、TypeScript 和 Python 现代 AI 开发相结合。",
      location: "哈萨克斯坦阿斯塔纳 · 支持远程",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "复制邮箱",
      copiedEmail: "已复制邮箱",
      copiedTelegram: "已复制 @yobxes",
    },
    about: {
      title: "个人简介",
      paragraphs: [
        "目前就读于阿斯塔纳 IT 大学（AITU）网络安全英文授课本科三年级。我喜欢把想法快速落地为可以直接在浏览器体验的真实产品，而不仅停留在概念上。",
        "过去一年中，我完成了 IT 支持与 AI 实验室实习，参加了 Decentrathon 6.0 黑客松的 AI 工程赛道，并开源了 Next.js 落地页诊断工具与 Python 安全/后端项目。",
      ],
      languagesTitle: "语言能力",
      languages: [
        { name: "俄语", level: "母语 (C2)" },
        { name: "哈萨克语", level: "流利 (C1)" },
        { name: "英语", level: "中高级 (B2)" },
        { name: "中文", level: "基础（曾就读 AIU / UIBE 项目）" },
      ],
      beyondCodeTitle: "技术之外",
      beyondCode: [
        "面向全球多语言用户的产品 UX 与本地化体验",
        "AITU 校篮球队与掰手腕校队成员",
        "探索高效 AI 辅助开发工作流",
      ],
    },
    projectsSection: {
      title: "项目与实践",
      subtitle: "具备单元测试、规范 Git PR 记录和可运行演示的公开代码仓库。",
      featuredBadge: "契合目标团队技术栈",
      viewRepo: "查看 GitHub",
      items: [
        {
          id: "funnellens",
          title: "FunnelLens — 落地页首屏转化率 AI 诊断工具",
          tag: "产品 MVP · Next.js + 多语言",
          period: "2026年11月",
          featured: true,
          summary:
            "依据 12 项转化规则评估落地页首屏，在页面截图上精准标出问题图钉，并生成首屏文案修改对比。",
          highlights: [
            "6 大维度 100 分严格评分体系、Zod 校验与 SSRF URL 安全防护",
            "基于 DOM 坐标的交互式图钉画布与 5 种语言界面（EN / RU / KK / ZH / ES）",
            "严格遵循 Git 功能分支、Pull Request 与 CI 检查流程",
          ],
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Firebase", "Trigger.dev", "Stripe"],
          repoUrl: "https://github.com/Aspart7/funnellens",
        },
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "安全工具 · Python CLI",
          period: "2026",
          summary:
            "零第三方依赖的 Python 安全检查工具，用于评估 OWASP HTTP 安全头、Cookie、CORS 与 TLS 配置并输出 HTML/JSON 报告。",
          highlights: [
            "内置 /vulnerable 与 /hardened 演示环境以便验证效果",
            "包含完整 unittest 单元测试",
          ],
          stack: ["Python", "HTTP/TLS", "OWASP", "HTML/JSON", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "后端服务 · Docker",
          period: "2026",
          summary:
            "基于 Python + Telethon + SQLite 的容器化审计归档服务，支持群组消息记录与 TTL 自动清理。",
          highlights: [
            "环境变量管理密钥、线程安全 SQLite 读写与非 root Dockerfile",
            "覆盖核心存储与清理逻辑的单元测试",
          ],
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel 挑战赛 (Team Toak)",
          tag: "AI 工程 · Astana Hub",
          period: "2026年10月",
          summary:
            "在 Kaggle T4 环境配置与分析 Qwen2 QLoRA 微调的运行耗时与显存占用。",
          highlights: ["团队在保持精度的前提下实现 1.72× 加速与 13.7× 显存压缩（约 1 GB VRAM）"],
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2", "Benchmarking"],
        },
        {
          id: "college-intern",
          title: "IT 支持与 AI 项目实习生 — College of Management LLP",
          tag: "实习 · 阿斯塔纳",
          period: "2026年暑期",
          summary:
            "维护 10+ 台 Windows 工作站与 AI 实验室企业账号，整理成绩数据表并协助课程大纲结构化。",
          highlights: ["快速定位日常软硬件环境故障", "结合 LLM 工具提高表格与文档整理效率"],
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Tables"],
        },
      ],
    },
    educationSection: {
      title: "教育与认证",
      subtitle: "英文授课网络安全本科及已验证的技术证书。",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "网络安全理学学士（全英文授课）",
          period: "2024 — 2027年6月（大三）",
          note: "主修网络与 Web 安全、系统分析及应用型 AI 开发。",
        },
        {
          school: "Astana International University (AIU) × 对外经济贸易大学 (UIBE)",
          degree: "国际贸易（双学位项目一年级）",
          period: "2023 — 2024",
          note: "转入 IT 专业前修读英语与基础中文课程。",
        },
        {
          school: "阿斯塔纳 BIL 理科英才中学",
          degree: "高中毕业（数理方向）",
          period: "2023届",
          note: "扎实的数学与英文理科基础。",
        },
      ],
      certsTitle: "可核验证书",
      verifyLabel: "核验",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "我希望在 SkyWhisper & MonoLotus 提升的方向",
      subtitle: "围绕真实产品交付制定的实习成长目标。",
      whyTitle: "为什么期待加入你们的团队",
      whyText:
        "你们面向 20+ 种语言用户快速迭代消费级产品的方式非常吸引我。我希望能从个人项目进阶到真正的团队协作，通过严格的代码评审把功能稳健地发布到生产环境。",
      goalsTitle: "实习期间最想掌握的 5 项能力",
      goals: [
        {
          title: "高效的 Claude Code 工程实践",
          detail: "通过 CLAUDE.md 约束规范、拆分任务与自动化验证来稳定提效。",
        },
        {
          title: "面向 20+ 语言的 Next.js + Vercel",
          detail: "确保多语言界面不破版、文案占位符准确，并保持优异的加载性能。",
        },
        {
          title: "Firebase、Trigger.dev 与 Stripe 实战",
          detail: "异步后台任务流水线、Firestore 权限规则及幂等支付回调处理。",
        },
        {
          title: "严谨的 Git 与 Code Review 习惯",
          detail: "写出清晰的 PR 说明，快速响应导师建议，减少线上回归问题。",
        },
        {
          title: "AI Product Engineer 产品思维",
          detail: "从真实用户视角判断问题，用结果与体验衡量开发价值。",
        },
      ],
      interestsTitle: "个人兴趣",
      interests: ["AI 产品工程", "多语言 UX", "Web 应用安全", "篮球与掰手腕"],
    },
    palette: {
      placeholder: "跳转板块、切换语言或复制联系方式...",
      empty: "未找到匹配命令",
      sectionsGroup: "页面板块",
      languagesGroup: "切换语言",
      actionsGroup: "快捷操作",
      jumpPrefix: "跳转:",
      switchPrefix: "语言:",
      copyEmail: "复制邮箱 (tamerlanrakhim135@gmail.com)",
      copyTelegram: "复制 Telegram (@yobxes)",
      openGithub: "打开 GitHub (github.com/Aspart7)",
      closeHint: "按 ESC 关闭",
    },
    footer: "基于 Next.js、TypeScript、Tailwind CSS 与 AI 工具构建 · Temirlan Rakhym, 2026",
  },
};
