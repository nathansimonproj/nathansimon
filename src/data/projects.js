export const projects = [
  {
    slug: 'spots',
    label: 'Personal Project · 2026',
    cardLabel: 'Personal Project',
    category: 'personal',
    company: 'Personal',
    date: 'In development',
    title: 'Spots',
    blurb:
      'An iPhone app that keeps distracting apps blocked everywhere except the places you choose. Arrive and they open; leave and they lock again.',
    tagline:
      'An iPhone app that keeps distracting apps blocked everywhere except the places you choose.',
    cardTags: ['Swift', 'SwiftUI', 'Core Location', 'Supabase'],
    github: 'https://github.com/nathansimonproj/placelock-wip',
    icon: {
      src: '/attachments/spots/app-icon-512.png',
      alt: 'Spots app icon: a white padlock inside two soft rings on a sage green background.',
    },
    video: {
      src: '/attachments/spots/spots-demo-720p.mp4',
      poster: '/attachments/spots/poster-locked.jpg',
      width: 590,
      height: 1280,
      caption: 'Walking into a saved place unlocks the apps; walking out locks them again.',
      alt: 'Screen recording of Spots: Home shows Locked, switches to Unlocked at Library on arrival, then shows "Left Library, apps blocked." and returns to Locked.',
    },
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          "Most screen-time apps let you set a limit and then tap right past it. Spots flips the default: the apps that distract you are always blocked, and they unblock only while you're physically at a place you chose ahead of time, like the gym, home or a particular library. Arrive and they open on their own. Leave and they block again. There's no unlock button.",
          "It's a solo project — product design, the iOS app, the backend and the test tooling. Spots is in development and not on the App Store yet; real blocking through Apple's Screen Time API is written and compiles, and is waiting on Apple's Family Controls entitlement for full on-device testing.",
        ],
      },
      {
        heading: 'How it works',
        items: [
          ['Blocked by default.', 'Your chosen apps stay blocked unless you\'re inside one of your saved places.'],
          ['Automatic unlock and lock.', 'iOS watches each place as a geofence and wakes Spots when you arrive or leave, even when the app is closed.'],
          ['No quick loopholes.', 'After your first day, anything that loosens the rules — adding a place, enlarging one, removing an app from the block list — waits 24 hours. Stricter changes apply instantly.'],
          ['Offline-first.', 'The blocking decision is always made on the phone. Places and history back up under an anonymous account, but nothing waits on the network.'],
        ],
      },
    ],
    galleries: [
      {
        shots: [
          { src: '/attachments/spots/01-home-locked.jpg', caption: 'Locked by default, away from your places.', alt: 'Spots home screen showing a lock icon, "Locked for 1h 36m", four resting apps and cards for Home, Library and Gym.' },
          { src: '/attachments/spots/02-home-unlocked.jpg', caption: 'Arrive at a saved place and apps unblock on their own.', alt: 'Spots home screen showing an open lock and "Unlocked at Library for 42m".' },
          { src: '/attachments/spots/03-spots.jpg', caption: "Pick the apps to block and the places where they're allowed.", alt: 'The Spots tab listing four blocked apps and three places: Home, Library and Gym.' },
        ],
      },
      {
        shots: [
          { src: '/attachments/spots/04-add-place.jpg', caption: 'Add a place by searching or dragging the map.', alt: 'The Add place sheet with a search field, a map with a circle around the pin and a radius slider at 150 m.' },
          { src: '/attachments/spots/06-setup-1-location.jpg', caption: 'Setup: apps unblock where you choose.', alt: 'Light setup screen explaining that Spots needs location set to Always.' },
          { src: '/attachments/spots/06-setup-2-apps.jpg', caption: 'Pick the apps that distract you.', alt: 'Light setup screen titled "Pick apps to block".' },
          { src: '/attachments/spots/06-setup-3-places.jpg', caption: 'Choose where apps unblock.', alt: 'Light setup screen listing Home, Library and Gym.' },
        ],
      },
    ],
    galleryNote: 'Screens from the Simulator test build: places are demo data and blocked-app icons are stand-ins.',
    moreSections: [
      {
        heading: 'Details',
        paragraphs: [
          'The app is SwiftUI: a Home screen that shows Locked or Unlocked with breathing rings, a Spots tab for apps and places, an Add place flow with live Apple Maps search, first-run setup, and arrival/departure notifications. Location runs on Core Location\'s CLMonitor geofences (up to 20 places), with significant-location-change wakes as a safety net so iOS relaunches the app even after a force-quit. Losing Always or Precise location access locks the apps.',
          'Blocking uses the Screen Time API (FamilyControls, ManagedSettings) with a custom block screen extension that tells you where the app opens, e.g. "Opens at Gym or Home." Two XcodeGen-generated builds share the code: one runs on a free developer account with blocking simulated, the other adds Screen Time and a shared App Group.',
          'The backend is Supabase: a Postgres schema with row-level security so each anonymous account only sees its own rows, newest-edit-wins ordering, soft deletes and one-tap account deletion. The phone syncs through an outbox with retry and backoff.',
          'All the decisions — when to lock, when a place change takes effect, how sync merges — are pure functions covered by unit tests. A geofence scenario runner drives the iOS Simulator through scripted walks (arrive, leave, move between places, force-quit and relaunch) and checks the app\'s logs to confirm it locks and unlocks at the right moments.',
        ],
      },
      {
        heading: 'Design decisions',
        items: [
          ['No unlock button, on purpose.', 'Any button you can tap in a weak moment defeats the point. The only way to unblock is to go somewhere.'],
          ['The 24-hour rule only goes one way.', 'Stricter is instant, looser waits a day — honest without making setup painful.'],
          ['Tried and dropped: Shortcuts automations.', 'They needed one automation per app, let the app flash on screen first, and were easy to switch off. Screen Time was the real answer.'],
          ['Removed an 8-hour GPS re-check.', 'Indoors overnight it could fail and lock you out of your own apps, so Spots trusts the geofence state iOS already keeps.'],
          ['Calm, not gamified.', 'No streaks or scores. Blocked apps are "resting".'],
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          'Test real blocking end to end on an iPhone once Apple approves the Family Controls entitlement, add a Screen Time backstop for turning location off while unlocked, then TestFlight and the App Store.',
        ],
      },
    ],
    statsHeading: 'By the numbers',
    stats: [
      { value: '~4,200', label: 'lines of Swift in the app and extension' },
      { value: '150+', label: 'unit tests on the decision logic' },
      { value: '6', label: 'scripted geofence scenarios, all passing in the Simulator' },
    ],
    stack: ['Swift', 'SwiftUI', 'Core Location', 'MapKit', 'Screen Time API', 'Supabase'],
  },
  {
    slug: 'drift',
    label: 'Personal Project · 2026',
    cardLabel: 'Personal Project',
    category: 'personal',
    company: 'Personal',
    date: 'current',
    title: 'Drift',
    blurb:
      'Helps college students see how caffeine and substance use is affecting their sleep, with a decay timeline and nightly forecast.',
    tagline:
      'A sleep app for college students that visualizes how caffeine and substance use decay over time and affect their sleep.',
    cardTags: ['JavaScript', 'Node.js', 'PostgreSQL'],
    live: 'https://drift-hs0w.onrender.com/',
    logo: '/attachments/drift-logo.png',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          "College students often don't realize how much caffeine or other substances taken later in the day linger in their system and quietly wreck their sleep. Drift lets students log what they take and when, then visualizes a decay curve showing how much is still active in their body — alongside a forecast of how it's likely to affect that night's sleep.",
        ],
      },
      {
        heading: 'Details',
        paragraphs: [
          'The frontend is plain JavaScript and CSS with no framework and no build step — modular files (types.js, decay.js, state.js, render-log.js, render-forecast.js) handle DOM manipulation directly, with Chart.js as the one external library powering the decay timeline chart.',
          'The backend runs on Node.js and Express 5, with bcrypt for password hashing and express-session backed by connect-pg-simple so sessions live in Postgres instead of memory and survive restarts. Data is stored in Postgres hosted on Neon, reached through a connection pool — I migrated off an earlier SQLite version specifically so accounts and events would survive redeploys and stay reachable across devices. The app auto-deploys to Render from the GitHub repo\'s main branch.',
        ],
      },
    ],
    stats: [],
    stack: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Render'],
  },
  {
    slug: 'yara-transpiler',
    label: 'GoDaddy · Security Team',
    cardLabel: 'GoDaddy · Security',
    category: 'work',
    company: 'GoDaddy',
    date: 'Summer 2025',
    title: 'YARA Transpiler',
    blurb:
      'LLM-powered RAG that standardized 500+ malware signatures into YARA rules, cutting security engineer overhead by 30%.',
    tagline:
      'LLM-powered RAG that standardized 500+ malware signatures, cutting security engineer overhead by 30%.',
    cardTags: ['Python', 'LLMs', 'RAG', 'YARA'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          "GoDaddy's security team had accumulated hundreds of malware signatures in inconsistent, unstructured formats — making them difficult to query, share, or apply systematically. I built an LLM-powered reasoning pipeline to convert these into normalized YARA rules, the industry standard format for malware detection.",
          "The core challenge wasn't just prompting an LLM — it was designing a system that could handle wildly inconsistent input formats reliably at scale, without requiring a human to review every output.",
        ],
      },
      {
        heading: 'Details',
        paragraphs: [
          'The pipeline used a retrieval-augmented generation (RAG) approach: incoming signatures were parsed and chunked, then matched against a set of known YARA patterns to give the model concrete examples as context. A custom reasoning step validated the model’s output against YARA syntax rules before writing the final rule.',
          'This multi-step process — retrieve, generate, validate — meant the system could catch and correct its own errors rather than silently producing malformed rules.',
        ],
      },
    ],
    stats: [
      { value: '500+', label: 'malware signatures standardized' },
      { value: '30%', label: 'reduction in security engineer review overhead' },
    ],
    stack: ['Python', 'LLMs', 'RAG', 'YARA', 'Prompt chaining'],
  },
  {
    slug: 'ops-review',
    label: 'GoDaddy · Reporting Team',
    cardLabel: 'GoDaddy · Reporting',
    category: 'work',
    company: 'GoDaddy',
    date: 'Summer 2025',
    title: 'Ops Review Automation',
    blurb:
      'Client libraries collecting metrics from 10,000+ sites across 12 dashboards, reducing manual collection time by 52%.',
    tagline:
      'Metrics pipeline covering 10,000+ sites across 12 dashboards, cutting manual collection time by 52%.',
    cardTags: ['Python', 'CI/CD', 'Grafana', 'Kibana'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          "GoDaddy's ops review process required engineers to manually pull metrics from Grafana and Kibana dashboards every week and import them into ServiceNow. Across 10,000+ hosted sites and 12 dashboards, this added up fast — and was entirely automatable.",
          'I built the client libraries and end-to-end pipeline to make that happen: query the dashboards, aggregate the data, and push it directly into ServiceNow on a weekly cadence via CI/CD.',
        ],
      },
      {
        heading: 'Details',
        paragraphs: [
          'I wrote Python client libraries that interfaced with the Grafana and Kibana APIs to pull 50–100 data points per site. The aggregated output — 1,000+ metrics per run — was formatted and ingested into ServiceNow via its REST API.',
          'The whole pipeline ran automatically on a weekly schedule using GitHub Actions, with YAML-defined workflows for each stage. No manual steps, no copy-paste.',
        ],
      },
    ],
    stats: [
      { value: '10,000+', label: 'hosted sites monitored' },
      { value: '52%', label: 'reduction in manual collection time' },
      { value: '1,000+', label: 'metrics ingested weekly' },
    ],
    stack: ['Python', 'GitHub Actions', 'Grafana', 'Kibana', 'ServiceNow', 'CI/CD', 'YAML'],
  },
  {
    slug: 'playlist-migrator',
    label: 'Personal Project · Sep – Nov 2025',
    cardLabel: 'Personal Project',
    category: 'personal',
    company: 'Personal',
    date: 'Sep – Nov 2025',
    title: 'Playlist Migrator',
    blurb:
      "Migrates playlists from YouTube Music to Spotify. Built with OAuth flows and both platforms' APIs.",
    tagline:
      'Migrates playlists from YouTube Music to Spotify with 95% track accuracy and sub-120ms latency.',
    cardTags: ['Python', 'OAuth', 'APIs'],
    github: 'https://github.com/nathansimonproj/yt-music-to-spotify',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'All my friends shared playlists on Spotify, but my library was on YouTube Music. Existing migration tools were either broken, required manual CSV exports, or silently dropped tracks. So I built one that actually works.',
          'The app authenticates with both platforms via OAuth, reads your YouTube Music playlists, and recreates them in Spotify — including playlists with 200+ tracks using batch processing to stay within API rate limits.',
        ],
      },
      {
        heading: 'Details',
        paragraphs: [
          'The core challenge was matching tracks across two platforms with different metadata schemas. A song on YouTube Music might be "Artist - Song Title (Official Video)" while Spotify stores it as a structured artist/album/track object. I built an automatic querying system that tries multiple search strategies — exact title, then artist + title, then fuzzy album/artist matching — until it finds a confident match or flags it for review.',
          'The Flask backend handled OAuth flows for both Google and Spotify APIs, and the whole thing ran on GCP. Batch processing chunked large playlists into parallel requests to keep response times low.',
        ],
      },
    ],
    stats: [
      { value: '95%', label: 'track match accuracy' },
      { value: '<120ms', label: 'API latency' },
      { value: '200+', label: 'tracks handled per playlist via batch processing' },
    ],
    stack: ['Python', 'Flask', 'HTML/CSS', 'GCP', 'Spotify API', 'Google API', 'OAuth'],
  },
]
