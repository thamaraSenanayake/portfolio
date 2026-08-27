const projectsData = [
  {
    id: "habit-flow",
    title: "Habit Flow",
    subtitle: "Cross-platform Utility",
    iconUrl: "assets/apps/Habit Flow/logo/logo.png",
    detailIconUrl: "assets/apps/Habit Flow/logo/logo.png",
    screenshots: [
      "assets/apps/Habit Flow/ScreenShots/homeMobile.png",
      "assets/apps/Habit Flow/ScreenShots/loginMobile.png",
      "assets/apps/Habit Flow/ScreenShots/createHabitMobile.png",
      "assets/apps/Habit Flow/ScreenShots/HabitAnalizeMobile.png",
      "assets/apps/Habit Flow/ScreenShots/settingsMobile.png"
    ],
    shortDescription: "Interactive progress charts and daily local push notifications to keep users engaged.",
    overview: "Interactive progress charts and daily local push notifications to keep users engaged. Engineered for high performance and seamless cross-platform functionality using a unified Flutter codebase.",
    stack: ["#Flutter", "#Android", "#iOS", "#Firebase"],
    links: {
      drive: "https://drive.google.com/drive/folders/1wlxN1laW8oKgfipbqNnzF_d6Sk6akbL3?usp=sharing",
      github: "https://github.com/thamaraSenanayake/habitTracker.git",
      playStore: "https://play.google.com/store/apps/details?id=com.sasa.habitFlow&pcampaignid=web_share"
    },
    features: [
      {
        icon: "bar_chart",
        title: "Interactive Charts",
        description: "Real-time data visualization with fluid animations and responsive touch gestures."
      },
      {
        icon: "notifications_active",
        title: "Local Push",
        description: "Scheduled daily reminders processed locally to ensure engagement without server dependency."
      },
      {
        icon: "sync",
        title: "Cross-Platform Sync",
        description: "Unified architecture ensuring parity across Android, iOS, and Web environments."
      },
      {
        icon: "speed",
        title: "60fps Performance",
        description: "Optimized rendering pipeline ensuring buttery smooth navigation and interactions."
      }
    ]
  },
  {
    id: "lanka-pos",
    title: "Lanka Pos",
    subtitle: "Point of Sale (POS) System",
    iconUrl: "assets/apps/Lanka Pos/logo/logo.png",
    detailIconUrl: "assets/apps/Lanka Pos/logo/logo.png",
    screenshots: [
      "assets/apps/Lanka Pos/ScreenShots/login.png",
      "assets/apps/Lanka Pos/ScreenShots/invetory.png",
      "assets/apps/Lanka Pos/ScreenShots/printerSetUp.png",
      "assets/apps/Lanka Pos/ScreenShots/credit.png",
      "assets/apps/Lanka Pos/ScreenShots/report.png",
      "assets/apps/Lanka Pos/ScreenShots/financial analyst.png"
    ],
    shortDescription: "Runs directly on standard Android/iOS phones and tablets with low-cost Bluetooth thermal printers.",
    overview: "Lanka Pos is a lightweight, mobile-first Point of Sale application designed to run on standard Android/iOS tablets and smartphones. It bridges the gap for small businesses by integrating directly with low-cost Bluetooth thermal printers, allowing seamless billing, invoice printing, and offline inventory management without complex hardware setups.",
    stack: ["#Flutter", "#Android", "#iOS", "#SQLite", "#Bluetooth"],
    links: {
      drive: "https://drive.google.com/drive/folders/1x-4vxtrqE6Xpv07yan9wKrPtljfOUkAP",
      github: "https://github.com/thamaraSenanayake/habitTracker.git",
      playStore: "#"
    },
    features: [
      {
        icon: "print",
        title: "Bluetooth Printing",
        description: "Instant invoice and receipt generation on standard 58mm/80mm thermal printers."
      },
      {
        icon: "database",
        title: "Offline Database",
        description: "Fully functional local database storage using SQLite, ensuring zero downtime even without internet access."
      },
      {
        icon: "inventory",
        title: "Inventory Tracking",
        description: "Real-time stock level monitoring with low stock notifications."
      },
      {
        icon: "assessment",
        title: "Sales Reports",
        description: "Daily, weekly, and monthly analytics to track revenue and product popularity."
      }
    ]
  },
  {
    id: "my-journal",
    title: "My Journal (Ongoing)",
    subtitle: "Personal Journaling & Privacy App",
    iconUrl: "assets/apps/My Journal/logo/logo.png",
    detailIconUrl: "assets/apps/My Journal/logo/logo.png",
    screenshots: [
      "assets/apps/My Journal/ScreenShots/journalListPage.png",
      "assets/apps/My Journal/ScreenShots/addJournal.png",
      "assets/apps/My Journal/ScreenShots/analizeJournal.png"
    ],
    shortDescription: "Biometric lock (Fingerprint / Face ID) and filtering past journal entries by mood/color tags.",
    overview: "My Journal is a highly secure personal diary application focusing on user privacy and mental wellness. It features native biometric authentication (Face ID/Fingerprint), rich text formatting, and mood analytics where entries can be tagged and filtered by colors to track mental well-being over time.",
    stack: ["#Flutter", "#Android", "#iOS", "#LocalAuth", "#Hive"],
    links: {
      drive: "https://drive.google.com/drive/folders/1iBmCNHMBEGUWEPUzElF12Mk-J6-LQEfZ?usp=sharing",
      github: "https://github.com/thamaraSenanayake/micro_journal.git",
      playStore: "#"
    },
    features: [
      {
        icon: "fingerprint",
        title: "Biometric Lock",
        description: "Secure native integration with Face ID and Fingerprint sensors to keep entries private."
      },
      {
        icon: "palette",
        title: "Mood Tagging",
        description: "Color-coded entry categorization and mood tracking charts."
      },
      {
        icon: "search",
        title: "Search & Filter",
        description: "Advanced keywords search and date-range filters for quick lookup of memories."
      },
      {
        icon: "cloud_upload",
        title: "Auto-Backup",
        description: "Encrypted background synchronization with personal cloud storage (Google Drive / iCloud)."
      }
    ]
  }
];
