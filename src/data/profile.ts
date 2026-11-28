export type Locale = "ru" | "en" | "kk" | "zh";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "ru", label: "RU", native: "Русский" },
  { code: "en", label: "EN", native: "English" },
  { code: "kk", label: "KK", native: "Қазақша" },
  { code: "zh", label: "ZH", native: "中文" },
];

export const LIVE_FUNNELLENS_URL = "https://funnellens-pied.vercel.app";
export const LIVE_LEDGERLANE_REPORT_URL = "https://funnellens-pied.vercel.app/audit/ledgerlane";

export interface DemoPinItem {
  number: number;
  ruleId: string;
  severity: "critical" | "warning" | "tip";
  penalty: number;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
  originalText: string;
  title: string;
  reason: string;
  replacement: string;
}

export interface EngineeringDecision {
  id: string;
  title: string;
  fileHint: string;
  summary: string;
  detail: string;
}

export interface SecondaryProjectItem {
  id: string;
  title: string;
  tag: string;
  period: string;
  task: string;
  contribution: string;
  result: string;
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
    projects: string;
    decisions: string;
    education: string;
    learning: string;
    cmdHint: string;
  };
  hero: {
    badge: string;
    name: string;
    roleStatement: string;
    subheadline: string;
    ctaProjects: string;
    ctaGithub: string;
    ctaTelegram: string;
    ctaCopyEmail: string;
    copiedEmail: string;
    copiedTelegram: string;
    location: string;
    previewLabel: string;
    previewTitle: string;
    previewScore: string;
    previewSampleNote: string;
    previewAction: string;
  };
  flagship: {
    eyebrow: string;
    title: string;
    subtitle: string;
    demoNote: string;
    openFullReport: string;
    openLiveApp: string;
    viewGithub: string;
    pinsInstruction: string;
    tabDemo: string;
    tabArchitecture: string;
    originalLabel: string;
    reasonLabel: string;
    replacementLabel: string;
    penaltyLabel: string;
    pins: DemoPinItem[];
    decisionsTitle: string;
    decisions: EngineeringDecision[];
  };
  otherProjects: {
    title: string;
    subtitle: string;
    taskLabel: string;
    contributionLabel: string;
    resultLabel: string;
    openRepo: string;
    items: SecondaryProjectItem[];
  };
  about: {
    title: string;
    paragraphs: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    beyondCodeTitle: string;
    beyondCode: string[];
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
    contactBannerTitle: string;
    contactBannerSub: string;
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
    openFunnelLens: string;
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
      projects: "Проекты",
      decisions: "Решения",
      education: "Обучение",
      learning: "Цели",
      cmdHint: "Поиск",
    },
    hero: {
      badge: "AI Product & Security · 3 курс Astana IT University",
      name: "Темирлан Рахым",
      roleStatement:
        "Проектирую и довожу до продакшена веб-продукты с AI, чёткими правилами и сетевой защитой.",
      subheadline:
        "От мультиязычных Next.js-интерфейсов с DOM-аудитом конверсии до Docker-сервисов и CLI-сканеров HTTP-безопасности — с чистой Git-историей и тестами.",
      ctaProjects: "Посмотреть проекты",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Скопировать Email",
      copiedEmail: "Email tamerlanrakhim135@gmail.com скопирован",
      copiedTelegram: "Telegram @yobxes скопирован",
      location: "Астана · Удалённо",
      previewLabel: "Главный кейс · Нажмите ниже для разбора",
      previewTitle: "FunnelLens — аудит первого экрана",
      previewScore: "68 / 100",
      previewSampleNote: "Пример разбора LedgerLane без регистрации и API-ключа",
      previewAction: "Открыть интерактивный разбор",
    },
    flagship: {
      eyebrow: "Главный кейс · Стек SkyWhisper & MonoLotus",
      title: "FunnelLens — AI-аудитор конверсии первого экрана",
      subtitle:
        "Снимает первый экран 1280×800 и карту DOM-элементов, находит места, где посетитель вынужден гадать, ставит кликабельные пины прямо поверх макета и предлагает переписанный Hero.",
      demoNote:
        "Ниже — интерактивный пример «LedgerLane» из публичной демо-базы (работает прямо здесь без API-ключа и входа).",
      openFullReport: "Открыть полный отчёт",
      openLiveApp: "Открыть FunnelLens",
      viewGithub: "Код и PR на GitHub",
      pinsInstruction: "Выбирайте пины кликом, касанием или клавишами ← →",
      tabDemo: "Интерактивные пины",
      tabArchitecture: "Инженерные решения",
      originalLabel: "Исходный текст на экране",
      reasonLabel: "Причина замечания",
      replacementLabel: "Конкретная замена",
      penaltyLabel: "штраф",
      pins: [
        {
          number: 1,
          ruleId: "hierarchy.rivals",
          severity: "warning",
          penalty: 10,
          xPct: 6.25,
          yPct: 55.5,
          wPct: 34,
          hPct: 6.5,
          originalText: "«Start 14-day trial» и «Book a live call» (равный вес)",
          title: "Две одинаково яркие кнопки ведут к разным обязательствам",
          reason:
            "Рядом стоят равноправные кнопки без пояснения, кому нужен самостоятельный триал, а кому — созвон с продажами. Посетитель тормозит перед выбором.",
          replacement:
            "Оставить одну главную залитую кнопку «Preview approval rules», а созвон убрать в текстовую ссылку для крупных команд.",
        },
        {
          number: 2,
          ruleId: "friction.fields",
          severity: "warning",
          penalty: 8,
          xPct: 6.25,
          yPct: 45.5,
          wPct: 28,
          hPct: 6,
          originalText: "Work phone * (+1 555 014-2200)",
          title: "Обязательный телефон до показа самого продукта",
          reason:
            "Поле в hero требует рабочий номер, хотя посетитель всего лишь хочет посмотреть интерактивное превью. Ожидание холодного звонка вызывает отказ.",
          replacement:
            "Убрать обязательный телефон с первого экрана, оставив только рабочий email или мгновенное демо без регистрации.",
        },
        {
          number: 3,
          ruleId: "action.label",
          severity: "warning",
          penalty: 8,
          xPct: 35.5,
          yPct: 45.5,
          wPct: 14.5,
          hPct: 6,
          originalText: "Continue",
          title: "Подпись кнопки «Continue» скрывает результат клика",
          reason:
            "Под полем контакта кнопка не сообщает, что будет дальше: мгновенная песочница, длинная регистрация или форма оплаты.",
          replacement:
            "Заменить подпись «Continue» на «Open sample approval flow», чтобы посетитель точно знал следующий экран.",
        },
        {
          number: 4,
          ruleId: "proof.claim",
          severity: "warning",
          penalty: 6,
          xPct: 6.25,
          yPct: 14.5,
          wPct: 26,
          hPct: 4.5,
          originalText: "3× faster monthly close for finance",
          title: "Численное обещание «3× faster» без базы сравнения",
          reason:
            "Плашка вверху заявляет трёхкратное ускорение, но рядом нет ни точки отсчёта (по сравнению с чем), ни ссылки на кейс.",
          replacement:
            "Добавить конкретную базу («вместо согласования по почте») и ссылку на кейс или заменить плашку проверяемым фактом.",
        },
      ],
      decisionsTitle: "Ключевые инженерные решения (подтверждено кодом)",
      decisions: [
        {
          id: "dom-pins",
          title: "1. Привязка замечаний AI к реальному DOM",
          fileHint: "src/lib/auditor/rubric.ts · capture.ts",
          summary:
            "Модель не угадывает координаты в пикселях «на глаз», а выбирает реальный elementId из снимка DOM.",
          detail:
            "Playwright снимает кадр 1280×800 и карту координат видимых узлов в процентах. Если AI вернёт несуществующий ID, normalizeAndScoreAudit автоматически привязывает пин к зарегистрированному viewport-якорю.",
        },
        {
          id: "server-score",
          title: "2. Итоговый score считает сервер по 12 правилам",
          fileHint: "src/lib/auditor/schema.ts · rubric.ts",
          summary:
            "LLM отвечает только за наблюдения, а балл 0–100 и совместимость правил проверяет строгий TypeScript-движок.",
          detail:
            "Штраф за одно правило списывается максимум раз, при отсутствии CTA (action.entry) подавляются вторичные проверки подписи/иерархии, а структура ответа валидируется через Zod .strict().",
        },
        {
          id: "ssrf-guard",
          title: "3. Сетевая защита (SSRF) при захвате и ресурсах",
          fileHint: "src/lib/auditor/url-safety.ts · capture.ts",
          summary:
            "Любой URL и каждый подзапрос страницы проверяется до обращения в сеть.",
          detail:
            "Разрешены только http/https без embedded-учёток. Блокируются localhost, *.internal, loopback, link-local, RFC1918, а также hex-нормализованные IPv4-mapped IPv6 адреса вроде ::ffff:7f00:1 и перенаправления Playwright.",
        },
      ],
    },
    otherProjects: {
      title: "Другие проекты и практический опыт",
      subtitle: "Задача, личный вклад, измеримый или проверяемый результат и ссылка на код.",
      taskLabel: "Задача",
      contributionLabel: "Мой вклад",
      resultLabel: "Результат",
      openRepo: "Репозиторий",
      items: [
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          task: "Сделать лёгкий инструмент аудита базовой веб-гигиены HTTP-ответов без тяжёлых внешних зависимостей.",
          contribution:
            "Реализовал модули проверки OWASP-заголовков, флагов cookies, отражения CORS и TLS на чистой стандартной библиотеке Python плюс локальный стенд /vulnerable и /hardened.",
          result: "Оценка 0–100 (A+–F), HTML/JSON-отчёты и 4 пройденных unit-теста unittest.",
          stack: ["Python", "HTTP/TLS", "OWASP", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          task: "Организовать воспроизводимый аудит и хранение истории сообщений в модерируемых чатах с автоочисткой.",
          contribution:
            "Спроектировал сервис на Telethon и потокобезопасном SQLite с очисткой по TTL, HTML-экранированием и non-root Dockerfile (все токены только через env).",
          result: "Автономный контейнер с 4 модульными тестами хранения и очистки TTL.",
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Окт 2026",
          task: "Ускорить и ужать по видеопамяти QLoRA-дообучение Qwen2 на ограниченных GPU Kaggle T4.",
          contribution:
            "Настраивал воспроизводимые прогоны на T4, снимал профили времени выполнения и пикового потребления VRAM между итерациями команды.",
          result: "Команда добилась ускорения в 1.72× и снижения VRAM в 13.7× (~1 ГБ) без потери точности.",
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2"],
        },
        {
          id: "college-intern",
          title: "Стажёр IT-поддержки и AI-проектов — ТОО «Колледж управления»",
          tag: "Стажировка · Астана",
          period: "Лето 2026",
          task: "Обеспечить стабильную работу рабочих мест в AI-лаборатории и навести порядок в учебных таблицах.",
          contribution:
            "Настроил и обслуживал 10+ рабочих станций Windows и корпоративные LLM-аккаунты; систематизировал таблицы успеваемости и помогал со структурой силлабусов.",
          result: "Рабочая инфраструктура лаборатории и упорядоченные учебные датасеты.",
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Hygiene"],
        },
      ],
    },
    about: {
      title: "Коротко обо мне",
      paragraphs: [
        "Учусь на 3 курсе Astana IT University (программа по кибербезопасности на английском языке). Люблю стык продуктового интерфейса и инженерной надёжности: чтобы кнопка в UI срабатывала мгновенно, а под капотом были тесты, схемы валидации и чистый Git.",
        "Пишу код в связке с современными AI-инструментами (Antigravity, Claude Code), умею читать чужие репозитории, находить ошибки и доводить фичи до живого URL.",
      ],
      languagesTitle: "Языки",
      languages: [
        { name: "Русский", level: "Родной (C2)" },
        { name: "Казахский", level: "Продвинутый (C1)" },
        { name: "Английский", level: "Upper-Intermediate (B2)" },
        { name: "Китайский", level: "Базовый (AIU / UIBE)" },
      ],
      beyondCodeTitle: "Вне кода",
      beyondCode: [
        "UX и аккуратная локализация на несколько языков",
        "Сборные AITU по баскетболу и армрестлингу",
      ],
    },
    educationSection: {
      title: "Образование и сертификаты",
      subtitle: "Бакалавриат на английском языке и проверяемые ссылки.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "Бакалавриат: Кибербезопасность (на английском языке)",
          period: "2024 — Июнь 2027 (3 курс)",
          note: "Сетевая и веб-безопасность, анализ процессов, системное и прикладное программирование.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Пекин)",
          degree: "Международная торговля (Double-Degree, 1 курс)",
          period: "2023 — 2024",
          note: "Интенсив по английскому и начальному китайскому перед переводом в IT.",
        },
        {
          school: "Астана БІЛІМ-ИННОВАЦИЯ лицейі (БИЛ)",
          degree: "Среднее образование (STEM)",
          period: "Выпуск 2023",
          note: "Профильная математика и физика на английском/казахском.",
        },
      ],
      certsTitle: "Подтверждённые сертификаты",
      verifyLabel: "Проверить",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "Чему хочу научиться в SkyWhisper и MonoLotus",
      subtitle: "Конкретные навыки, которые хочу развить, выпуская фичи в продакшен.",
      whyTitle: "Почему мне интересна команда",
      whyText:
        "Вы создаёте живые AI-продукты для пользователей на 20+ языках. Мне важно учиться на реальных задачах с наставником, проходить код-ревью и видеть, как мои PR работают у настоящих пользователей.",
      goalsTitle: "5 фокусов роста на стажировке",
      goals: [
        {
          title: "Продвинутый рабочий процесс в Claude Code",
          detail: "Дисциплина через CLAUDE.md, разбиение фич на проверяемые ветки и рефакторинг без регрессий.",
        },
        {
          title: "Масштабируемый i18n в Next.js + Vercel",
          detail: "Поддержка 20+ языков без разъехавшейся вёрстки, битых плейсхолдеров и медленной загрузки.",
        },
        {
          title: "Прод-паттерны Firebase, Trigger.dev и Stripe",
          detail: "Отказоустойчивые фоновые очереди, строгие Firestore Rules и идемпотентные вебхуки оплаты.",
        },
        {
          title: "Сильное Code Review и Git-коллаборация",
          detail: "Быстрая и точная работа по комментариям техлида, понятные PR-описания.",
        },
        {
          title: "Продуктовое мышление AI Product Engineer",
          detail: "Проверять ценность каждой фичи глазами пользователя, а не только числом строк кода.",
        },
      ],
      interestsTitle: "Интересы",
      interests: [
        "AI Product Engineering",
        "Мультиязычный UX",
        "AppSec & Web Auditing",
        "Баскетбол и армрестлинг",
      ],
      contactBannerTitle: "Готов к созвону или тестовой задаче",
      contactBannerSub: "Напишите в Telegram @yobxes или скопируйте почту в один клик.",
    },
    palette: {
      placeholder: "Перейти к разделу, переключить язык или открыть FunnelLens...",
      empty: "Совпадений не найдено",
      sectionsGroup: "Навигация",
      languagesGroup: "Язык",
      actionsGroup: "Действия",
      jumpPrefix: "Перейти:",
      switchPrefix: "Язык:",
      copyEmail: "Скопировать Email (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Скопировать Telegram (@yobxes)",
      openGithub: "Открыть GitHub (github.com/Aspart7)",
      openFunnelLens: "Открыть живой FunnelLens (Vercel)",
      closeHint: "ESC — закрыть",
    },
    footer: "Темирлан Рахым · Next.js 15, TypeScript, Tailwind CSS · 2026",
  },

  en: {
    nav: {
      projects: "Projects",
      decisions: "Engineering",
      education: "Education",
      learning: "Goals",
      cmdHint: "Search",
    },
    hero: {
      badge: "AI Product & Security · 3rd-Year AITU",
      name: "Temirlan Rakhym",
      roleStatement:
        "I design and ship practical AI web products with deterministic validation and security hygiene.",
      subheadline:
        "From multilingual Next.js conversion auditing with DOM-pinned findings to Dockerized services and Python HTTP security scanners — backed by tests and clean PR history.",
      ctaProjects: "Explore projects",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Copy Email",
      copiedEmail: "Copied tamerlanrakhim135@gmail.com",
      copiedTelegram: "Copied Telegram @yobxes",
      location: "Astana · Remote",
      previewLabel: "Featured Case · Jump below to interact",
      previewTitle: "FunnelLens — First-Screen Auditor",
      previewScore: "68 / 100",
      previewSampleNote: "Interactive LedgerLane sample — no login or API key needed",
      previewAction: "Inspect interactive demo",
    },
    flagship: {
      eyebrow: "Featured Case Study · Target Company Stack",
      title: "FunnelLens — First-Screen Conversion & Copy Auditor",
      subtitle:
        "Captures a 1280×800 first screen and DOM anchor map, detects where visitors have to guess across 12 CRO rules, pins issues directly over the mockup, and proposes grounded Before/After hero copy.",
      demoNote:
        "Interactive example from the LedgerLane sample capture — works right here with zero signup or API key.",
      openFullReport: "Open full report",
      openLiveApp: "Open live FunnelLens",
      viewGithub: "Code & PRs on GitHub",
      pinsInstruction: "Select pins by click, tap, or keyboard ← → keys",
      tabDemo: "Interactive Pins",
      tabArchitecture: "Engineering Decisions",
      originalLabel: "Original text on screen",
      reasonLabel: "Why it hurts clarity",
      replacementLabel: "Concrete replacement",
      penaltyLabel: "penalty",
      pins: [
        {
          number: 1,
          ruleId: "hierarchy.rivals",
          severity: "warning",
          penalty: 10,
          xPct: 6.25,
          yPct: 55.5,
          wPct: 34,
          hPct: 6.5,
          originalText: "“Start 14-day trial” vs. “Book a live call” (equal weight)",
          title: "Two equally bright CTAs demand opposite commitments",
          reason:
            "Neither label clarifies which buyer size fits self-serve trial vs. sales call, causing decision friction.",
          replacement:
            "Keep one primary filled CTA (“Preview approval rules”) and demote the sales call to a text link for large teams.",
        },
        {
          number: 2,
          ruleId: "friction.fields",
          severity: "warning",
          penalty: 8,
          xPct: 6.25,
          yPct: 45.5,
          wPct: 28,
          hPct: 6,
          originalText: "Work phone * (+1 555 014-2200)",
          title: "Mandatory phone number before showing the product",
          reason:
            "Visitors wanting an instant sandbox tour stall when forced to provide a phone number suggesting a cold sales call.",
          replacement:
            "Remove the required phone input above the fold and keep only Work Email or a one-click sample flow.",
        },
        {
          number: 3,
          ruleId: "action.label",
          severity: "warning",
          penalty: 8,
          xPct: 35.5,
          yPct: 45.5,
          wPct: 14.5,
          hPct: 6,
          originalText: "Continue",
          title: "Button label “Continue” hides what happens next",
          reason:
            "Nothing below the input clarifies whether clicking launches an interactive preview, signup wall, or billing form.",
          replacement:
            "Rename “Continue” to “Open sample approval flow” so visitors know the exact next screen.",
        },
        {
          number: 4,
          ruleId: "proof.claim",
          severity: "warning",
          penalty: 6,
          xPct: 6.25,
          yPct: 14.5,
          wPct: 26,
          hPct: 4.5,
          originalText: "3× faster monthly close for finance",
          title: "Numeric claim “3× faster” has no baseline or case link",
          reason:
            "Finance buyers treat an unanchored multiplier without a comparison baseline as unsupported marketing copy.",
          replacement:
            "Add the concrete baseline (vs. spreadsheet email sign-offs) and a case link, or replace with verifiable workflow proof.",
        },
      ],
      decisionsTitle: "Engineering Decisions Verified in Code",
      decisions: [
        {
          id: "dom-pins",
          title: "1. Grounded DOM Pin Anchoring (elementId + fallback)",
          fileHint: "src/lib/auditor/rubric.ts · capture.ts",
          summary:
            "AI selects real captured DOM element IDs instead of guessing raw pixel coordinates.",
          detail:
            "Playwright captures a 1280×800 viewport and normalized percentage bounding boxes. If a model outputs an invalid elementId, normalizeAndScoreAudit falls back to the registered viewport anchor safely.",
        },
        {
          id: "server-score",
          title: "2. Deterministic Server Scoring Across 12 Rules",
          fileHint: "src/lib/auditor/schema.ts · rubric.ts",
          summary:
            "The server computes final 0–100 scores and enforces schema invariants instead of trusting LLM arithmetic.",
          detail:
            "Each rule is penalized at most once, action.entry suppresses downstream CTA/hierarchy penalties, and payloads are checked with Zod .strict() mirroring the canonical JSON Schema.",
        },
        {
          id: "ssrf-guard",
          title: "3. SSRF Guard Across Entry URL & Subresources",
          fileHint: "src/lib/auditor/url-safety.ts · capture.ts",
          summary:
            "Validates schemes, DNS resolution, and Playwright route requests before any network fetch completes.",
          detail:
            "Allows only http/https without embedded credentials; blocks localhost, *.internal, private/metadata IPv4 ranges, and hex-normalized IPv4-mapped IPv6 addresses like ::ffff:7f00:1.",
        },
      ],
    },
    otherProjects: {
      title: "Other Projects & Experience",
      subtitle: "Problem, concrete contribution, verified outcome, and repository link.",
      taskLabel: "Task",
      contributionLabel: "Contribution",
      resultLabel: "Outcome",
      openRepo: "Repository",
      items: [
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          task: "Audit baseline web HTTP security hygiene without heavy third-party dependencies.",
          contribution:
            "Built stdlib modules checking OWASP security headers, cookies, CORS reflection, and TLS plus local /vulnerable and /hardened demo targets.",
          result: "Deterministic 0–100 (A+–F) score, HTML/JSON reports, and 4 passing unittest suites.",
          stack: ["Python", "HTTP/TLS", "OWASP", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          task: "Provide reproducible message auditing for moderated Telegram chats with automatic retention limits.",
          contribution:
            "Architected Telethon + thread-safe SQLite storage, TTL expiration cleanup, HTML escaping, and non-root Dockerfile with env-only secrets.",
          result: "Containerized audit pipeline verified with 4 unit tests covering persistence and TTL pruning.",
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Oct 2026",
          task: "Speed up Qwen2 QLoRA fine-tuning and slash VRAM footprint on Kaggle T4 GPUs.",
          contribution:
            "Configured reproducible T4 benchmark runs and profiled execution time and peak GPU memory across optimization iterations.",
          result: "Team achieved 1.72x speedup and 13.7x VRAM reduction (~1 GB) at preserved accuracy.",
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2"],
        },
        {
          id: "college-intern",
          title: "IT Support & AI Projects Intern — College of Management LLP",
          tag: "Internship · Astana",
          period: "Summer 2026",
          task: "Keep an on-site AI lab reliable and organize academic grading workflows.",
          contribution:
            "Configured and maintained 10+ Windows workstations and corporate LLM accounts; structured grade datasets and assisted with syllabi.",
          result: "Reliable lab workstation environments and clean tabular datasets.",
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Hygiene"],
        },
      ],
    },
    about: {
      title: "About me",
      paragraphs: [
        "I am a 3rd-year undergraduate studying Cybersecurity in English at Astana IT University. I care about both sides of shipping: crisp product interfaces that feel effortless and strict engineering guarantees underneath.",
        "I build rapidly with AI-assisted workflows (Antigravity, Claude Code), verify everything with unit tests and typechecks, and publish clean Pull Requests.",
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
        "Multilingual SaaS UX & localization quality",
        "AITU varsity basketball & arm wrestling teams",
      ],
    },
    educationSection: {
      title: "Education & Certificates",
      subtitle: "English-taught Cybersecurity degree and verifiable credentials.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "B.Sc. in Cybersecurity (English-taught)",
          period: "2024 — June 2027 (3rd Year)",
          note: "Focus on web & network security, systems analysis, and applied software development.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Beijing)",
          degree: "International Trade (Double-Degree, 1 Year)",
          period: "2023 — 2024",
          note: "English & introductory Mandarin coursework prior to transferring to IT.",
        },
        {
          school: "Astana Bilim-Innovation Lyceum (BIL)",
          degree: "High School Diploma (STEM)",
          period: "Class of 2023",
          note: "Mathematics & sciences taught in English/Kazakh.",
        },
      ],
      certsTitle: "Verified Certificates",
      verifyLabel: "Verify",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "What I Want to Learn at SkyWhisper & MonoLotus",
      subtitle: "Concrete engineering habits I want to sharpen by shipping real user features.",
      whyTitle: "Why this team fits my focus",
      whyText:
        "Shipping consumer AI products across 20+ languages matches how I want to grow: fast iteration, mentored code review, and turning prototypes into resilient production features.",
      goalsTitle: "5 things I want to master during the internship",
      goals: [
        {
          title: "Disciplined Claude Code workflows",
          detail: "Using CLAUDE.md conventions, small PR slices, and automated verification before merge.",
        },
        {
          title: "Multilingual Next.js + Vercel at 20+ locales",
          detail: "Preventing copy overflow, broken placeholders, and layout regressions across scripts.",
        },
        {
          title: "Production Firebase, Trigger.dev & Stripe",
          detail: "Background job states, airtight Firestore rules, and idempotent payment webhook handlers.",
        },
        {
          title: "Code review & Git collaboration",
          detail: "Responding crisply to tech lead feedback and leaving clean audit trails.",
        },
        {
          title: "AI Product Engineer judgment",
          detail: "Validating every feature by how clear and useful it is for first-time users.",
        },
      ],
      interestsTitle: "Interests",
      interests: [
        "AI Product Engineering",
        "Multilingual SaaS UX",
        "Web App Security",
        "Basketball & Arm Wrestling",
      ],
      contactBannerTitle: "Ready for a quick call or starter task",
      contactBannerSub: "Message @yobxes on Telegram or copy my email in one click.",
    },
    palette: {
      placeholder: "Jump to section, switch language, or open FunnelLens...",
      empty: "No matching command",
      sectionsGroup: "Navigation",
      languagesGroup: "Language",
      actionsGroup: "Actions",
      jumpPrefix: "Go to:",
      switchPrefix: "Language:",
      copyEmail: "Copy Email (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Copy Telegram (@yobxes)",
      openGithub: "Open GitHub (github.com/Aspart7)",
      openFunnelLens: "Open live FunnelLens (Vercel)",
      closeHint: "ESC to close",
    },
    footer: "Temirlan Rakhym · Next.js 15, TypeScript, Tailwind CSS · 2026",
  },

  kk: {
    nav: {
      projects: "Жобалар",
      decisions: "Шешімдер",
      education: "Білім",
      learning: "Мақсаттар",
      cmdHint: "Іздеу",
    },
    hero: {
      badge: "AI Product & Security · AITU 3-курс",
      name: "Темірлан Рахым",
      roleStatement:
        "Нақты ережелері мен қауіпсіздік қорғанысы бар AI және веб-өнімдерді продакшнға дейін жеткіземін.",
      subheadline:
        "DOM координаттары бар көптілді Next.js аудитінен бастап Docker сервистері мен HTTP қауіпсіздік сканеріне дейін — тесттерімен және таза Git PR тарихымен.",
      ctaProjects: "Жобаларды көру",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "Email көшіру",
      copiedEmail: "tamerlanrakhim135@gmail.com көшірілді",
      copiedTelegram: "Telegram @yobxes көшірілді",
      location: "Астана · Қашықтан",
      previewLabel: "Басты кейс · Төменде интерактивті талдау",
      previewTitle: "FunnelLens — бірінші экран аудиті",
      previewScore: "68 / 100",
      previewSampleNote: "LedgerLane үлгісі: кірусіз және API-кілтсіз жұмыс істейді",
      previewAction: "Интерактивті үлгіні ашу",
    },
    flagship: {
      eyebrow: "Басты кейс · Компания стегі",
      title: "FunnelLens — Лендингтің бірінші экранының AI-аудиторы",
      subtitle:
        "1280×800 бірінші экран мен DOM картасын түсіріп, 12 ереже бойынша келушіні ойландыратын тұстарға пин қояды және «Дейін / Кейін» нұсқасын ұсынады.",
      demoNote:
        "Төмендегі «LedgerLane» үлгісі тікелей осында тіркелусіз және API-кілтсіз жұмыс істейді.",
      openFullReport: "Толық есепті ашу",
      openLiveApp: "FunnelLens ашу",
      viewGithub: "GitHub коды мен PR",
      pinsInstruction: "Пиндерді басу, түрту немесе ← → пернелерімен таңдаңыз",
      tabDemo: "Интерактивті пиндер",
      tabArchitecture: "Инженерлік шешімдер",
      originalLabel: "Экрандағы бастапқы мәтін",
      reasonLabel: "Ескерту себебі",
      replacementLabel: "Нақты алмастыру",
      penaltyLabel: "айыппұл",
      pins: [
        {
          number: 1,
          ruleId: "hierarchy.rivals",
          severity: "warning",
          penalty: 10,
          xPct: 6.25,
          yPct: 55.5,
          wPct: 34,
          hPct: 6.5,
          originalText: "«Start 14-day trial» және «Book a live call»",
          title: "Бірдей жарқын екі батырма әртүрлі әрекетке шақырады",
          reason:
            "Қай командаға триал, ал қайсысына қоңырау керек екені жазылмаған — пайдаланушы таңдау алдында кідіреді.",
          replacement:
            "Бір негізгі батырманы («Preview approval rules») қалдырып, қоңырауды ірі командалар үшін мәтіндік сілтемеге ауыстыру.",
        },
        {
          number: 2,
          ruleId: "friction.fields",
          severity: "warning",
          penalty: 8,
          xPct: 6.25,
          yPct: 45.5,
          wPct: 28,
          hPct: 6,
          originalText: "Work phone * (+1 555 014-2200)",
          title: "Өнімді көрсетпей тұрып міндетті телефон сұралады",
          reason:
            "Келуші демо көргісі келеді, бірақ міндетті телефон нөмірі сату қоңырауынан сақтанып кетіп қалуға итермелейді.",
          replacement:
            "Бірінші экраннан міндетті телефон өрісін алып тастап, тек жұмыс email-ін қалдыру.",
        },
        {
          number: 3,
          ruleId: "action.label",
          severity: "warning",
          penalty: 8,
          xPct: 35.5,
          yPct: 45.5,
          wPct: 14.5,
          hPct: 6,
          originalText: "Continue",
          title: "«Continue» жазуы басқаннан кейін не болатынын жасырады",
          reason:
            "Батырма интерактивті демо ма, тіркелу ме, әлде төлем беті ме екенін көрсетпейді.",
          replacement:
            "«Continue» сөзін «Open sample approval flow» деп нақтылау.",
        },
        {
          number: 4,
          ruleId: "proof.claim",
          severity: "warning",
          penalty: 6,
          xPct: 6.25,
          yPct: 14.5,
          wPct: 26,
          hPct: 4.5,
          originalText: "3× faster monthly close for finance",
          title: "«3× faster» уәдесінде салыстыру негізі мен сілтеме жоқ",
          reason:
            "Қаржы командалары немен салыстырылғаны көрсетілмеген сандарға сенбейді.",
          replacement:
            "Нақты салыстыру негізін немесе тексерілетін кейс сілтемесін қосу.",
        },
      ],
      decisionsTitle: "Кодпен расталған инженерлік шешімдер",
      decisions: [
        {
          id: "dom-pins",
          title: "1. AI пиндерін нақты DOM элементтеріне байлау",
          fileHint: "src/lib/auditor/rubric.ts · capture.ts",
          summary: "AI координатты ойдан таппайды, DOM түсіріліміндегі бар elementId таңдайды.",
          detail:
            "Playwright 1280×800 өлшемде пайыздық координаттарды түсіреді; белгісіз ID болса, сервер пинді viewport-қа қауіпсіз ауыстырады.",
        },
        {
          id: "server-score",
          title: "2. 12 ереже бойынша score есептеу серверде орындалады",
          fileHint: "src/lib/auditor/schema.ts · rubric.ts",
          summary: "Балл 0–100 AI жауабынан тәуелсіз серверде саналады.",
          detail:
            "Бір ереже бір рет қана шегеріледі, action.entry бар кезде қосымша CTA ережелері өшіріледі, ал жауап Zod .strict() арқылы тексеріледі.",
        },
        {
          id: "ssrf-guard",
          title: "3. URL және ресурс сұраныстарын SSRF-тен қорғау",
          fileHint: "src/lib/auditor/url-safety.ts · capture.ts",
          summary: "Желілік сұраныс алдында домен, DNS және Playwright маршруттары тексеріледі.",
          detail:
            "Тек http/https рұқсат етіледі; localhost, *.internal, жеке/метадерек IP және ::ffff:7f00:1 бұғатталады.",
        },
      ],
    },
    otherProjects: {
      title: "Басқа жобалар мен тәжірибе",
      subtitle: "Мақсаты, менің үлесім, нақты нәтиже және кодқа сілтеме.",
      taskLabel: "Тапсырма",
      contributionLabel: "Үлесім",
      resultLabel: "Нәтиже",
      openRepo: "Репозиторий",
      items: [
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "Security CLI · Python",
          period: "2026",
          task: "Сыртқы тәуелділіксіз HTTP қауіпсіздік тақырыптарын тексеретін жеңіл CLI құру.",
          contribution:
            "OWASP тақырыптарын, cookie жалаушаларын, CORS пен TLS тексеретін модульдер және /vulnerable мен /hardened стендтерін жаздым.",
          result: "0–100 баға, HTML/JSON есептер және 4 unittest тесті.",
          stack: ["Python", "HTTP/TLS", "OWASP", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "Backend Service · Docker",
          period: "2026",
          task: "Модерацияланатын чаттарды TTL мерзімімен мұрағаттайтын контейнер сервис жасау.",
          contribution:
            "Telethon + ағынға қауіпсіз SQLite, TTL тазалау, HTML экрандау және env кілттерімен non-root Dockerfile іске асырдым.",
          result: "4 модульдік тестпен расталған Docker сервисі.",
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel Challenge (Team Toak)",
          tag: "AI Engineering · Astana Hub",
          period: "Қазан 2026",
          task: "Kaggle T4 GPU-да Qwen2 QLoRA оқытуын жылдамдату және VRAM азайту.",
          contribution: "T4 ортасында іске қосуларды баптап, уақыт пен VRAM шығынын профильдедім.",
          result: "Команда дәлдікті сақтай отырып 1.72× жылдамдату және 13.7× VRAM үнемдеуге (~1 ГБ) жетті.",
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2"],
        },
        {
          id: "college-intern",
          title: "IT-қолдау және AI-жобалар тағылымдамашысы — «Басқару колледжі» ЖШС",
          tag: "Тағылымдама · Астана",
          period: "Жаз 2026",
          task: "AI зертханасындағы компьютерлерді және оқу кестелерін жүйелі тәртіпке келтіру.",
          contribution: "10+ Windows станциясын және LLM аккаунттарын баптап, баға датасеттерін реттедім.",
          result: "Тұрақты зертхана инфрақұрылымы және реттелген оқу деректері.",
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Hygiene"],
        },
      ],
    },
    about: {
      title: "Өзім туралы",
      paragraphs: [
        "Astana IT University университетінде ағылшын тілінде кибербезопасность (3-курс) оқимын. Пайдаланушыға түсінікті интерфейс пен астындағы қатаң инженерлік тексерістерді бірге құрғанды ұнатамын.",
        "AI құралдарымен жылдам прототиптеп, оларды тест, типтеу және таза PR арқылы нақты өнімге жеткіземін.",
      ],
      languagesTitle: "Тілдер",
      languages: [
        { name: "Орыс тілі", level: "Ана тілі (C2)" },
        { name: "Қазақ тілі", level: "Жетік (C1)" },
        { name: "Ағылшын тілі", level: "Upper-Intermediate (B2)" },
        { name: "Қытай тілі", level: "Бастапқы (AIU / UIBE)" },
      ],
      beyondCodeTitle: "Кодтан тыс",
      beyondCode: ["Көптілді өнімдердің UX сапасы", "AITU баскетбол және армрестлинг құрамалары"],
    },
    educationSection: {
      title: "Білім және сертификаттар",
      subtitle: "Ағылшын тіліндегі бакалавриат және расталған сілтемелер.",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "Бакалавриат: Киберқауіпсіздік (ағылшын тілінде)",
          period: "2024 — Маусым 2027 (3-курс)",
          note: "Веб және желілік қауіпсіздік, жүйелер талдауы және қолданбалы әзірлеу.",
        },
        {
          school: "Astana International University (AIU) × UIBE (Бейжің)",
          degree: "Халықаралық сауда (Double-Degree, 1-курс)",
          period: "2023 — 2024",
          note: "IT бағытына ауысу алдында ағылшын және қытай тілдері базасы.",
        },
        {
          school: "Астана БІЛІМ-ИННОВАЦИЯ лицейі (БИЛ)",
          degree: "Орта білім (STEM)",
          period: "2023 түлегі",
          note: "Математика және жаратылыстану пәндері.",
        },
      ],
      certsTitle: "Расталған сертификаттар",
      verifyLabel: "Тексеру",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "SkyWhisper және MonoLotus командасында не үйренгім келеді",
      subtitle: "Нақты релиздер арқылы жетілдіргім келетін дағдылар.",
      whyTitle: "Неліктен бұл команда",
      whyText:
        "20+ тілдегі өнімдерді жылдам дамыту маған жақын. Ментормен бірге код-ревью өтіп, нақты пайдаланушыларға фича жеткізгім келеді.",
      goalsTitle: "Тағылымдамадағы 5 мақсат",
      goals: [
        {
          title: "Claude Code жүйелі жұмысы",
          detail: "CLAUDE.md ережелерімен шағын PR жасап, автоматты тексерулермен сапаны ұстау.",
        },
        {
          title: "20+ тілдегі Next.js + Vercel",
          detail: "Көптілді макеттерде мәтін қиылмауын және жылдам жұмысты қамтамасыз ету.",
        },
        {
          title: "Firebase, Trigger.dev және Stripe",
          detail: "Фондық кезектер, Firestore қауіпсіздік ережелері және идемпотентті вебхуктар.",
        },
        {
          title: "Code Review және Git мәдениеті",
          detail: "Ескертулерді тез түзету және таза PR сипаттамасын жазу.",
        },
        {
          title: "AI Product Engineer көзқарасы",
          detail: "Әр шешімді пайдаланушыға беретін нақты пайдасымен өлшеу.",
        },
      ],
      interestsTitle: "Қызығушылықтар",
      interests: ["AI Product Engineering", "Көптілді UX", "Веб-қауіпсіздік", "Баскетбол және армрестлинг"],
      contactBannerTitle: "Қоңырауға немесе сынақ тапсырмасына дайынмын",
      contactBannerSub: "Telegram @yobxes арқылы жазыңыз немесе поштаны көшіріп алыңыз.",
    },
    palette: {
      placeholder: "Бөлімге өту, тілді ауыстыру немесе FunnelLens ашу...",
      empty: "Сәйкестік табылмады",
      sectionsGroup: "Бөлімдер",
      languagesGroup: "Тіл",
      actionsGroup: "Әрекеттер",
      jumpPrefix: "Өту:",
      switchPrefix: "Тіл:",
      copyEmail: "Email көшіру (tamerlanrakhim135@gmail.com)",
      copyTelegram: "Telegram көшіру (@yobxes)",
      openGithub: "GitHub ашу (github.com/Aspart7)",
      openFunnelLens: "FunnelLens ашу (Vercel)",
      closeHint: "ESC — жабу",
    },
    footer: "Темірлан Рахым · Next.js 15, TypeScript, Tailwind CSS · 2026",
  },

  zh: {
    nav: {
      projects: "项目",
      decisions: "架构方案",
      education: "教育",
      learning: "目标",
      cmdHint: "搜索",
    },
    hero: {
      badge: "AI 产品与安全方向 · AITU 大三",
      name: "Temirlan Rakhym（铁木尔兰）",
      roleStatement: "设计并交付可上线的 AI Web 产品，兼顾清晰产品规则与工程安全底线。",
      subheadline:
        "涵盖带 DOM 图钉定位的多语言 Next.js 落地页诊断工具，以及 Docker 与 Python 安全扫描 CLI，均配单元测试与规范 PR。",
      ctaProjects: "查看项目案例",
      ctaGithub: "GitHub @Aspart7",
      ctaTelegram: "Telegram @yobxes",
      ctaCopyEmail: "复制邮箱",
      copiedEmail: "已复制 tamerlanrakhim135@gmail.com",
      copiedTelegram: "已复制 @yobxes",
      location: "阿斯塔纳 · 远程",
      previewLabel: "核心案例 · 点击下方交互体验",
      previewTitle: "FunnelLens — 首屏转化诊断",
      previewScore: "68 / 100",
      previewSampleNote: "LedgerLane 示例报告 — 无需登录或 API 密钥",
      previewAction: "体验交互式案例",
    },
    flagship: {
      eyebrow: "重点项目 · 契合目标公司技术栈",
      title: "FunnelLens — 首屏转化与文案诊断工具",
      subtitle:
        "捕获 1280×800 首屏与 DOM 节点坐标，依据 12 项转化规则在截图上定位让访客犹豫的区域，并生成有据可依的首屏改写。",
      demoNote: "下方 LedgerLane 示例可在页面内直接交互，无需注册或 API 密钥。",
      openFullReport: "打开完整报告",
      openLiveApp: "访问在线 FunnelLens",
      viewGithub: "GitHub 源码与 PR",
      pinsInstruction: "支持点击、触屏或方向键 ← → 切换图钉",
      tabDemo: "交互图钉演示",
      tabArchitecture: "工程实现细节",
      originalLabel: "页面原文案",
      reasonLabel: "扣分原因",
      replacementLabel: "具体修改方案",
      penaltyLabel: "扣分",
      pins: [
        {
          number: 1,
          ruleId: "hierarchy.rivals",
          severity: "warning",
          penalty: 10,
          xPct: 6.25,
          yPct: 55.5,
          wPct: 34,
          hPct: 6.5,
          originalText: "“Start 14-day trial” 与 “Book a live call”（权重相同）",
          title: "两个同等醒目的按钮指向冲突的承诺路径",
          reason: "未说明自助试用与预约演示分别适合哪类团队，导致决策停顿。",
          replacement: "保留一个主填充按钮（Open sample approval flow），将预约通话弱化为次级链接。",
        },
        {
          number: 2,
          ruleId: "friction.fields",
          severity: "warning",
          penalty: 8,
          xPct: 6.25,
          yPct: 45.5,
          wPct: 28,
          hPct: 6,
          originalText: "Work phone * (+1 555 014-2200)",
          title: "展示产品前强制要求填写工作电话",
          reason: "访客只想先体验审批流，却被要求留电话号码，担心销售冷电话而离开。",
          replacement: "移除首屏表单中的必填电话，仅保留工作邮箱或免登录直通示例。",
        },
        {
          number: 3,
          ruleId: "action.label",
          severity: "warning",
          penalty: 8,
          xPct: 35.5,
          yPct: 45.5,
          wPct: 14.5,
          hPct: 6,
          originalText: "Continue",
          title: "按钮文案 “Continue” 隐藏了点击后的下一步",
          reason: "访客无法预判点击后会进入沙盒体验、长注册表单还是付费页。",
          replacement: "将 “Continue” 改为 “Open sample approval flow”，明确告知下一步界面。",
        },
        {
          number: 4,
          ruleId: "proof.claim",
          severity: "warning",
          penalty: 6,
          xPct: 6.25,
          yPct: 14.5,
          wPct: 26,
          hPct: 4.5,
          originalText: "3× faster monthly close for finance",
          title: "“3× faster” 缺乏对比基准与来源链接",
          reason: "未标明对比对象（例如对比邮件/表格审批）且无案例链接，财务买方难以采信。",
          replacement: "补充具体对比基准与案例链接，或替换为可核验的工作流细节。",
        },
      ],
      decisionsTitle: "经代码验证的工程决策",
      decisions: [
        {
          id: "dom-pins",
          title: "1. AI 标注锚定真实 DOM 坐标",
          fileHint: "src/lib/auditor/rubric.ts · capture.ts",
          summary: "模型从捕获的 DOM 映射中选择有效 elementId，而非凭空猜测像素点。",
          detail:
            "Playwright 在 1280×800 视口采集节点百分比矩形框；若返回无效 ID，normalizeAndScoreAudit 会回退至已注册的 viewport 锚点。",
        },
        {
          id: "server-score",
          title: "2. 服务端按 12 条规则确定性计算总分",
          fileHint: "src/lib/auditor/schema.ts · rubric.ts",
          summary: "总分 0–100 与规则互斥逻辑完全在 TypeScript 服务端执行。",
          detail:
            "同一规则最多扣一次分；若存在 action.entry 则自动抑制下游 CTA 文案/层级规则；JSON 经 Zod .strict() 严格校验。",
        },
        {
          id: "ssrf-guard",
          title: "3. 入口 URL 与浏览器子请求 SSRF 防护",
          fileHint: "src/lib/auditor/url-safety.ts · capture.ts",
          summary: "所有目标 URL、DNS 解析与 Playwright 子请求都会在放行前进行内网拦截检查。",
          detail:
            "仅允许无凭据的 http/https，拦截 localhost、*.internal、私有/云元数据 IP 以及 ::ffff:7f00:1 等映射地址。",
        },
      ],
    },
    otherProjects: {
      title: "其他项目与实践经历",
      subtitle: "涵盖问题背景、个人负责部分、可验证成果及仓库链接。",
      taskLabel: "任务",
      contributionLabel: "我的贡献",
      resultLabel: "成果",
      openRepo: "查看仓库",
      items: [
        {
          id: "web-auditor",
          title: "Web Security Headers Auditor",
          tag: "安全工具 · Python CLI",
          period: "2026",
          task: "打造零第三方依赖的 HTTP 安全响应头与基础配置检查工具。",
          contribution: "使用 Python 标准库实现 OWASP 头部、Cookie 标记、CORS 反射与 TLS 检测，并附 /vulnerable 与 /hardened 对照靶场。",
          result: "0–100 评分、HTML/JSON 报告以及 4 项通过的 unittest 测试。",
          stack: ["Python", "HTTP/TLS", "OWASP", "unittest"],
          repoUrl: "https://github.com/Aspart7/web-security-auditor",
        },
        {
          id: "tg-archiver",
          title: "Telegram Audit Archiver",
          tag: "后端服务 · Docker",
          period: "2026",
          task: "为合规管理的群聊构建可复现的审计归档与过期自动清理服务。",
          contribution: "设计 Telethon + 线程安全 SQLite 存储、TTL 清理、HTML 转义及无 root 权限 Dockerfile。",
          result: "可通过环境变量开箱运行的容器服务，含 4 项持久化与过期单元测试。",
          stack: ["Python", "Telethon", "SQLite", "Docker"],
          repoUrl: "https://github.com/Aspart7/telegram-audit-archiver",
        },
        {
          id: "decentrathon",
          title: "Decentrathon 6.0 — Soup Kernel 挑战赛 (Team Toak)",
          tag: "AI 工程 · Astana Hub",
          period: "2026年10月",
          task: "在显存受限的 Kaggle T4 上加速 Qwen2 的 QLoRA 微调并降低显存占用。",
          contribution: "配置可复现的 T4 评测运行，统计迭代过程中的耗时与峰值显存。",
          result: "团队在保持精度的前提下实现 1.72× 加速与 13.7× 显存压缩（约 1 GB）。",
          stack: ["Python", "PyTorch", "QLoRA", "Qwen2"],
        },
        {
          id: "college-intern",
          title: "IT 支持与 AI 项目实习生 — College of Management LLP",
          tag: "实习 · 阿斯塔纳",
          period: "2026年暑期",
          task: "维护 AI 实验室终端稳定性并整理教学评估表格数据。",
          contribution: "维护 10+ 台 Windows 工作站与企业 LLM 账号，整理成绩数据并协助课程大纲结构化。",
          result: "保障实验室稳定运行并产出规整的数据表。",
          stack: ["Windows", "PowerShell", "LLM Tools", "Data Hygiene"],
        },
      ],
    },
    about: {
      title: "关于我",
      paragraphs: [
        "目前在阿斯塔纳 IT 大学（AITU）全英文网络安全专业就读大三。我关注产品界面清晰度与底层工程确定性的结合。",
        "擅长借助 AI 工程工作流（Antigravity、Claude Code）快速落地功能，并通过单元测试与规范 Pull Request 保障质量。",
      ],
      languagesTitle: "语言",
      languages: [
        { name: "俄语", level: "母语 (C2)" },
        { name: "哈萨克语", level: "流利 (C1)" },
        { name: "英语", level: "中高级 (B2)" },
        { name: "中文", level: "基础 (AIU / UIBE)" },
      ],
      beyondCodeTitle: "技术之外",
      beyondCode: ["多语言产品 UX 细节", "AITU 校篮球队与掰手腕校队"],
    },
    educationSection: {
      title: "教育与证书",
      subtitle: "全英文网络安全本科及可核验的在线证书。",
      items: [
        {
          school: "Astana IT University (AITU)",
          degree: "网络安全理学学士（全英文）",
          period: "2024 — 2027年6月（大三）",
          note: "侧重网络与 Web 安全、系统分析及应用开发。",
        },
        {
          school: "Astana International University (AIU) × 对外经济贸易大学 (UIBE)",
          degree: "国际贸易（双学位项目一年级）",
          period: "2023 — 2024",
          note: "转入 IT 前夯实英文与基础中文能力。",
        },
        {
          school: "阿斯塔纳 BIL 理科英才中学",
          degree: "高中毕业（数理方向）",
          period: "2023届",
          note: "扎实数理与英文授课背景。",
        },
      ],
      certsTitle: "可核验证书",
      verifyLabel: "核验",
      certs: SHARED_CERTS,
    },
    learningSection: {
      title: "我希望在 SkyWhisper & MonoLotus 提升的方向",
      subtitle: "围绕真实产品交付制定的实习成长目标。",
      whyTitle: "为什么期待加入团队",
      whyText: "为全球 20+ 语言用户快速上线消费级 AI 功能与我期望的成长方式高度一致：在导师 Code Review 中把原型稳健推向生产。",
      goalsTitle: "实习期间的 5 项重点目标",
      goals: [
        { title: "规范的 Claude Code 工作流", detail: "结合 CLAUDE.md、小粒度 PR 与自动验证持续提效。" },
        { title: "20+ 语言的 Next.js + Vercel", detail: "确保多语言排版不溢出、占位符准确且首屏流畅。" },
        { title: "Firebase、Trigger.dev 与 Stripe 实战", detail: "后台任务状态机、Firestore 权限规则及幂等支付回调。" },
        { title: "Code Review 与 Git 协作", detail: "快速吸收导师建议并提交清晰严谨的 Pull Request。" },
        { title: "AI Product Engineer 产品直觉", detail: "以首次访问用户的理解成本和实用价值来衡量功能。" },
      ],
      interestsTitle: "兴趣方向",
      interests: ["AI 产品工程", "多语言 UX", "Web 安全", "篮球与掰手腕"],
      contactBannerTitle: "随时可以语音沟通或完成试做任务",
      contactBannerSub: "欢迎在 Telegram 联系 @yobxes 或一键复制邮箱。",
    },
    palette: {
      placeholder: "跳转板块、切换语言或打开 FunnelLens...",
      empty: "无匹配结果",
      sectionsGroup: "导航",
      languagesGroup: "语言",
      actionsGroup: "快捷操作",
      jumpPrefix: "跳转:",
      switchPrefix: "语言:",
      copyEmail: "复制邮箱 (tamerlanrakhim135@gmail.com)",
      copyTelegram: "复制 Telegram (@yobxes)",
      openGithub: "打开 GitHub (github.com/Aspart7)",
      openFunnelLens: "打开在线 FunnelLens (Vercel)",
      closeHint: "按 ESC 关闭",
    },
    footer: "Temirlan Rakhym · Next.js 15, TypeScript, Tailwind CSS · 2026",
  },
};
