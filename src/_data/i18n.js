// {% set translate = lang | translateFn %}
module.exports = {
  languages: [
    { code: "nl", locale: "nl_NL" },
    { code: "en", locale: "en_US" },
  ],
  translations: {
    // PATHS
    root_path: { nl: "/nl/", en: "/" },
    switch_language_path: { nl: "/", en: "/nl/" },
    aboutPath: { nl: "/nl/over-e-missions/", en: "/en/about-e-missions/" },
    topicsPath: { nl: "/nl/topics/", en: "/en/topics/" },

    // GENERAL

    switch_language: { nl: "EN", en: "NL" },

    skip_content: {
      nl: "spring naar hoofd content",
      en: "skip to main content",
    },

    calculateImpact: { nl: "Bereken jouw impact", en: "Calculate your impact" },
    readMore: { nl: "Lees meer", en: "Read more" },

    meetTheTeam: { nl: "Ontmoet het team", en: "Meet the team" },
    takeActionUpsell: {
      nl: "Op zoek naar meer manieren om jouw digitale CO2 afdruk te verlagen?",
      en: "Looking for more ways to lower your digital CO2 emissions?",
    },

    toggle_menu: { nl: "menu openen sluiten", en: "toggle menu" },

    pages: { nl: "Paginas", en: "Pages" },
    upcomingTastings: { nl: "Aankomende tastings", en: "Upcoming tastings" },
    pastTastings: { nl: "Afgelopen tastings", en: "Past tastings" },

    ingredients: { nl: "Ingredienten", en: "Ingredients" },
    emissions: { nl: "Uitstoot", en: "Emissions" },
    calculateMore: {
      nl: "Bereken andere voetafdrukken",
      en: "Calculate other footprints",
    },

    about_emissions: { nl: "Over E-Missions", en: "About E-Missions" },

    book_tasting: { nl: "Boek een proeverij", en: "Book a tasting" },
    amountOfTrees: { nl: "Aantal bomen", en: "Amount of trees" },
    selectARegion: { nl: "Selecteer een regio", en: "Select a region" },

    netherlands: { nl: "Nederland", en: "Netherlands" },
    europe: { nl: "Europa", en: "Europe" },
    europeNetflix: {
      nl: "Europa (VK, FR, DE, NL)",
      en: "Europe (UK, FR, DE, NL)",
    },
    world: { nl: "Wereldwijd", en: "World" },
    subscribers: { nl: "Abonnees", en: "Subscribers" },
    lan: { nl: "Vaste internetverbinding / Wifi", en: "Fixed line / Wifi" },
    cellular: { nl: "Mobiele verbinding (4G/5G)", en: "Cellular connection" },

    // UNITS
    hour: { nl: "uur", en: "hour" },
    hours: { nl: "uur", en: "hours" },
    transaction: { nl: "transactie", en: "transaction" },
    transactions: { nl: "transacties", en: "transactions" },
    gigabyte: { nl: "Gigabyte", en: "Gigabyte" },
    gigabytes: { nl: "Gigabyte", en: "Gigabytes" },
    employee: { nl: "medewerker", en: "employee" },
    employees: { nl: "medewerkers", en: "employees" },
    emails: { nl: "e-mails", en: "emails" },
    "%": { nl: "%", en: "%" },
    enabled: { nl: "Ingeschakeld", en: "Enabled" },
    disabled: { nl: "Uitgeschakeld", en: "Disabled" },
    query: { nl: "zoekopdracht", en: "search" },
    queries: { nl: "zoekopdrachten", en: "searches" },
    device: { nl: "apparaat", en: "device" },
    devices: { nl: "apparaten", en: "devices" },
    post: { nl: "bericht", en: "post" },
    posts: { nl: "berichten", en: "posts" },
    image: { nl: "afbeelding", en: "image" },
    images: { nl: "afbeeldingen", en: "images" },
    minute: { nl: "minuut", en: "minute" },
    minutes: { nl: "minuten", en: "minutes" },
    followers: { nl: "volgers", en: "followers" },

    topics: { nl: "Topics", en: "Topics" },
    startOver: { nl: "Start overnieuw", en: "Start over" },
    noTodosYet: {
      nl: "Je hebt nog geen todos opgeslagen. Bezoek een topic pagina en voeg daar todos toe aan je battleplan!",
      en: "You have not saved any todos yet. Visit the topic pages to add some to your battleplan!",
    },
    addToTakeAction: {
      nl: "Toevoegen aan Take Action lijst:",
      en: "Add to Take Action list:",
    },

    energyUsagePy: { nl: "Energieverbuik p/j:", en: "Energy Usage p/y:" },
    emissionsPy: { nl: "Uitstoot p/j", en: "Emissions p/y:" },

    showall: { nl: "Toon alles", en: "Show all" },

    calculator: { nl: "Calculator", en: "Calculator" },

    art: { nl: "Kunst", en: "Art" },
    "best-practice": { nl: "Best Practice", en: "Best Practice" },
    scientific: { nl: "Wetenschappelijk", en: "Scientific" },

    // Topics
    "smart-devices": { nl: "Smart Devices", en: "Smart Devices" },
    "audio-streaming": { nl: "Audio streaming", en: "Audio streaming" },
    blockchain: { nl: "Blockchain", en: "Blockchain" },
    "cloud-storage": { nl: "Cloud Storage", en: "Cloud Storage" },
    email: { nl: "E-mail", en: "Email" },
    "online-gaming": { nl: "Online Gaming", en: "Online Gaming" },
    searching: { nl: "Searching", en: "Searching" },
    "social-media": { nl: "Social Media", en: "Social Media" },
    "video-conferencing": {
      nl: "Video Conferencing",
      en: "Video Conferencing",
    },

    "video-streaming": { nl: "Video Streaming", en: "Video Streaming" },

    // Calculator
    you: { nl: "Jij", en: "You" },
    yourCompany: { nl: "Jouw bedrijf", en: "Your company" },
    yourResults: { nl: "Jouw resultaat", en: "Your results" },
    youWithAutocomplete: {
      nl: "Jij, met autocomplete ingeschakeld",
      en: "You, with autocomplete enabled",
    },
    yourImpactNow: { nl: "Jouw impact nu", en: "Your impact now" },
    yourImpactFuture: {
      nl: "Jouw impact over 3 jaar?",
      en: "Your impact in 3 years?",
    },

    toFollowers: {
      nl: "Naar %followers% volgers",
      en: "To %followers% followers",
    },

    withFollowers: {
      nl: "Met jouw aantal volgers",
      en: "With your amount of followers",
    },
    shareOnFacebook: {
      nl: "Deel deze afbeelding op Facebook",
      en: "Share this visual on Facebook",
    },
    reconsiderSharing: {
      nl: "Toch maar heroverwegen?",
      en: "Maybe reconsider?",
    },

    // Questions

    audiostreamHours: {
      nl: "Hoeveel uur stream je audio per dag?",
      en: "How many hours do you stream audio per day?",
    },
    audiostreamAverage: {
      nl: "Gemiddeld streamt men ongeveer 2 uur per dag.",
      en: "On average, people stream audio for about 2 hours a day.",
    },

    blockchainTransactions: {
      nl: "Hoeveel blockchain transacties heb je uitgevoerd?",
      en: "How many blockchain transactions have you made?",
    },

    cloudStorageGigabytes: {
      nl: "Hoeveel gigabyte heb je in de cloud opgeslagen?",
      en: "How much GB have you stored in the cloud?",
    },

    cloudStorageAverage: {
      nl: "Gemiddeld heeft men ongeveer 200 GB in de cloud opgeslagen.",
      en: "On average, people have around 200 GB stored in the cloud.",
    },

    emailsPerDay: {
      nl: "Hoeveel e-mails verstuur je per dag?",
      en: "How many emails do you send per day?",
    },

    emailsContainingAttachments: {
      nl: "Hoeveel van die e-mails bevatten bijlagen?",
      en: "How many of those emails contain attachments?",
    },

    emailAverage: {
      nl: "Gemiddeld verstuurd men 75 e-mails per dag, waarvan 24% bijlagen bevatten.",
      en: "On average, people send 75 emails per day, with an average of 24% containing attachments.",
    },

    onlineGamingHours: {
      nl: "Hoeveel uur per dag game je online?",
      en: "How many hours do you game online per day?",
    },

    onlineGamingAverage: {
      nl: "Gemiddeld speelt men 2 uur online games per dag",
      en: "On average, people game 2 hours online per day.",
    },

    searchingQueries: {
      nl: "Hoeveel zoekopdrachten doe je per dag?",
      en: "How many search queries do you do per day?",
    },

    searchingAutocomplete: {
      nl: "Staat autocomplete voor zoekopdracht aan in je browser?",
      en: "Is autocomplete for searching enabled in your browser?",
    },

    searchingAverage: {
      nl: "Gemiddeld voert men 20 zoekopdracht per dag uit",
      en: "On average, people do 20 search queries per day.",
    },

    smartDevices3y: {
      nl: "Hoeveel slimme apparaten had je 3 jaar geleden?",
      en: "How many smart devices did you own 3 years ago?",
    },
    smartDevicesNow: {
      nl: "Hoeveel slimme apparaten heb je nu?",
      en: "How many smart devices do you own now?",
    },
    smartDevicesAverage: {
      nl: "Gemiddeld heeft men 5 slimme apparaten.",
      en: "On average, people have 5 smart devices.",
    },

    socialmediaPosts: {
      nl: "Hoeveel tekst berichten plaats je per dag?",
      en: 'How many text-only posts do you post per day?"',
    },
    socialmediaImages: {
      nl: "Hoeveel afbeeldingen plaats je per dag?",
      en: "How many image posts do you post per day?",
    },
    socialmediaVideo: {
      nl: "Hoeveel minuten aan video plaats je per dag?",
      en: "How many minutes of video do you post per day?",
    },
    socialmediaFollowers: {
      nl: "Hoeveel volgers heb je?",
      en: "How many followers do you have?",
    },
    socialmediaAverage: {
      nl: "Gemiddeld plaatst men 6 tekstberichten, 4 afbeeldingen en 5 minuten aan video per dag.",
      en: "On average, people post 6 text-posts, 4 images and 5 minutes of video per day.",
    },

    socialmediaShareText: {
      nl: "Nou... wist je dat het delen van deze afbeelding naar je <strong>%followers% volgers</strong> zou betekenen dat je ongeveer <strong>%trees% bomen</strong> nodig hebt om de bijbehorende CO<sub>2</sub> uitstoot te compenseren?",
      en: "Well... did you know that sharing this image to your <strong>%followers% followers</strong> would take approximately <strong>%trees% trees</strong> to compensate the CO<sub>2</sub> emissions?",
    },

    videoconferencingHours: {
      nl: "Hoeveel uur spendeer je in video conferenties per dag?",
      en: "How many hours do you video conference per day?",
    },
    videoconferencingAverage: {
      nl: "Gemiddeld zit men 4 uur per dag in video conferenties.",
      en: "On average, people are in video conferences for 4 hours per day.",
    },

    typeOfConnection: {
      nl: "Via welk type verbinding doe je mee?",
      en: "Which type of connection do you use?",
    },

    videostreamingHours: {
      nl: "Hoeveel uur stream je video per dag?",
      en: "How many hours do you stream video per day?",
    },
    videostreamingAverage: {
      nl: "Gemiddeld streamt men 5 uur video per dag",
      en: "On average, people stream video for about 5 hours a day.",
    },

    peopleInYourCompany: {
      nl: "Hoeveel mensen werken er in jouw bedrijf?",
      en: "How many people work in your company?",
    },

    // Email categories
    spam: { nl: "Spam", en: "Spam" },
    thankYou: { nl: "Bedankt", en: "Thank You" },
    confirmation: { nl: "Bevestiging", en: "Confirmation" },
    newsletter: { nl: "Nieuwsbrief", en: "Newsletter" },
    updates: { nl: "Updates", en: "Activity Updates" },
    cc: { nl: "CC", en: "CC" },
    attachments: { nl: "Bijlagen", en: "Attachments" },
  },
};
