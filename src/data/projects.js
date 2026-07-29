export const projects = [
  {
    slug: 'drift',
    label: 'Personal Project · 2026',
    cardLabel: 'Personal Project',
    category: 'personal',
    company: 'Personal',
    date: '2026',
    title: 'Drift',
    blurb:
      'Helps college students see how caffeine and substance use is affecting their sleep, with a decay timeline and nightly forecast.',
    tagline:
      'A sleep app for college students that visualizes how caffeine and substance use decay over time and affect their sleep.',
    cardTags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
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
    stack: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'Render'],
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
