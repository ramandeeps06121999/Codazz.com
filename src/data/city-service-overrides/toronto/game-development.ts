export const torontoGameDevelopmentOverride = {
  heroDescription:
    "Toronto sits among the largest game development clusters on the planet, anchored by Ubisoft Toronto (Splinter Cell, Watch Dogs collaboration), Rockstar Toronto (a core contributor to the Rockstar Games catalog), and a deep indie bench that includes Capybara Games (Superbrothers, Below), Drinkbox Studios (Guacamelee!), Uken Games on the mobile side, and Behaviour Interactive's Toronto presence. Codazz builds interactive entertainment for Toronto founders, publishers, and IP holders who want studio-grade production without carrying the cost of a 200-seat Liberty Village office. We operate remotely from Edmonton and Chandigarh while plugging into the Ontario ecosystem, which means our team writes Unity and Unreal code, ships multiplayer backends, and prepares ESRB submissions with the same rigour a Queen Street studio would, priced in CAD and scoped for the Ontario Interactive Digital Media Tax Credit. Whether you are a Ryerson DMZ alum prototyping a roguelike, a Sheridan grad spinning up a studio in Mississauga, or a publisher in King West funding a live service mobile title, we handle the full pipeline: concept, vertical slice, alpha, beta, cert, launch, and live ops. Every engagement is structured around OIDMTC-qualifying labour records, SR&ED-eligible R&D documentation, and the AODA accessibility standards that Ontario-distributed titles increasingly need to meet for public sector and education channels.",

  servicesIntro:
    "Our Toronto game services span Unity and Unreal production, F2P mobile live ops, multiplayer backends, porting, and publisher-facing cert pipelines. We architect every project so the labour can be claimed under the Ontario Interactive Digital Media Tax Credit (up to 40% refundable on eligible Ontario salaries), with SR&ED layered on top of the novel R&D portions. Teams are built to plug into AAA conventions the way Ubisoft Toronto and Rockstar Toronto structure their pipelines (Perforce, Jira, build farms, nightly automation) while staying nimble enough to mirror how Capybara Games and Drinkbox Studios ship indie. We cover design, engineering, tools, art integration, QA, compliance, analytics, and post-launch operations for Toronto studios shipping to Steam, PlayStation, Xbox, Nintendo Switch, iOS, and Android.",

  processIntro:
    "We kick off every Toronto project with a scoping sprint that locks the design pillars, vertical slice milestones, and the OIDMTC documentation plan (eligible labour, Ontario residency of contributors, qualifying product definition) before code lands. Parallel to pre-production, we build the ESRB and PEGI rating plan so content decisions do not force an unplanned re-rate during cert. From there we run two-week sprints through vertical slice, alpha, beta, and gold, with a weekly publisher or investor demo. Every sprint produces OIDMTC-ready timesheets, SR&ED technical narratives for the R&D workstreams, and QA logs that support Ontario Creates and CRA reviews.",

  techIntro:
    "Toronto studios overwhelmingly standardise on Unity (URP or HDRP depending on the art target) and Unreal Engine 5 with Nanite and Lumen where the platform supports it. We match that reality: C# with Unity's DOTS for performance-heavy mobile, C++ and Blueprint for Unreal PC and console, Photon Fusion or Mirror for real-time multiplayer, and Microsoft Playfab or AWS GameLift for backend, matchmaking, and live ops. Analytics runs on GameAnalytics or Unity Analytics, crash reporting through Backtrace or Sentry, and build automation on Unity Cloud Build, Jenkins, or GitHub Actions. Perforce Helix Core handles source of truth for binary-heavy projects, exactly how King West and Liberty Village studios run their pipelines.",

  industryExpertise:
    "We ship across the genres Toronto actually funds. On mobile, we build free-to-play titles with live ops loops, seasonal events, and server-driven economies tuned for the Uken Games and Jam City-style cadence. On indie, we prototype and finish stylised single-player titles in the spirit of Capybara Games' Below and Drinkbox's Guacamelee!, including Steam Deck verification and Nintendo Switch cert support. For mid-core and AAA contribution work, we plug into co-development pipelines with Perforce, Shotgrid, and publisher build systems, mirroring how Ubisoft Toronto and Rockstar Toronto structure outsourced features and content. We also handle serious games for Toronto's health sector (UHN, SickKids-adjacent research) and education partners tied to Sheridan College, George Brown College, and TDSB pilots, where AODA accessibility and PIPEDA-compliant analytics are baseline requirements, not add-ons.",

  faqs: [
    {
      q: "How much does game development cost in Toronto?",
      a: "Budgets vary widely by scope. A mobile game MVP with one core loop, basic meta, and soft-launch analytics typically runs CAD $80,000 to $250,000 in Toronto. A mid-tier indie title targeting Steam and Switch usually sits between CAD $250,000 and $800,000 for a six to twelve month production. AAA contribution work or a full original console title from a Toronto studio routinely crosses CAD $1 million and can reach CAD $10 million or more for two-year productions. Before you worry about gross cost, model the OIDMTC refund. On eligible Ontario labour, up to 40% comes back, which materially reshapes the cash-on-cash math."
    },
    {
      q: "What is OIDMTC and can our game qualify?",
      a: "The Ontario Interactive Digital Media Tax Credit is a refundable credit administered by Ontario Creates and the CRA that returns up to 40% of eligible labour and marketing costs for qualifying interactive digital media products developed in Ontario. Most commercial games qualify as specified products if they are designed to entertain, educate, or inform through a mix of text, images, and audio with user interaction. To qualify, you must develop the game in Ontario, employ Ontario residents on eligible roles, and meet the 80% Ontario labour threshold on the product. We architect the project structure, labour mix, and documentation so the claim stands up to Ontario Creates review."
    },
    {
      q: "Can we combine OIDMTC with SR&ED for our Toronto game project?",
      a: "Yes, and most well-run Toronto studios do. OIDMTC covers eligible labour on the creation of the interactive digital media product itself, while SR&ED covers scientific research and experimental development, which often applies to novel rendering, procedural generation, AI, networking, or tooling work inside the same game. The trick is to allocate hours cleanly: SR&ED-claimed hours cannot be claimed under OIDMTC on the same labour. We keep separate timesheets, technical narratives, and evidence packages for each program so you can stack the two credits without triggering a clawback during CRA review."
    },
    {
      q: "Do you build mobile games with Unity for the Canadian market?",
      a: "Yes. Unity with the Universal Render Pipeline is our default for Toronto mobile projects because it hits iOS and Android performance targets on mid-range devices that make up most of the Canadian install base. We build free-to-play and premium titles, wire in Playfab or Firebase for accounts and inventory, use Unity Mediation or LevelPlay for ads, and handle App Store and Google Play submissions, privacy labels, and the Canadian Anti-Spam Legislation requirements for push notifications and email campaigns. Soft launches usually run in Canada, Australia, and the Philippines before a global rollout tuned by live ops data."
    },
    {
      q: "How do you handle ESRB rating submissions for Canadian publishers?",
      a: "ESRB ratings apply to games distributed in Canada and the US, so we plan for the rating during pre-production, not at cert. We document content descriptors such as violence, language, in-game purchases, and user interaction, capture the required gameplay footage, and complete the ESRB questionnaire for your target rating (E, E10+, T, M). For mobile, we use the IARC questionnaire integrated into Google Play and the App Store, which generates ESRB for Canadian and US storefronts automatically. We also prepare PEGI documentation in parallel for European releases so Toronto publishers can ship globally from one build."
    },
    {
      q: "What multiplayer backend do you recommend for a Toronto-based game?",
      a: "It depends on the netcode pattern. For fast-paced action with client-side prediction (shooters, brawlers, sports), we recommend Photon Fusion, which handles tick-based rollback cleanly and scales through Photon Cloud. For lockstep or less latency-sensitive games, Mirror on self-hosted infrastructure is cost-effective and gives full control. For persistent worlds, meta systems, matchmaking, and live ops, Microsoft Playfab or AWS GameLift handle accounts, leaderboards, tournaments, and server fleets without you running bare-metal. Toronto studios often pair Fusion for gameplay with Playfab for meta, which gives a clean separation between real-time and persistent systems."
    },
    {
      q: "Can you work with Ubisoft Toronto or Rockstar style AAA pipelines?",
      a: "Yes. Our senior engineers and producers have worked inside Perforce-based pipelines with Shotgrid or Jira for production tracking, Jenkins or TeamCity for build farms, and publisher-specific certification processes. We plug into existing engines (proprietary or Unreal), follow the studio's coding standards, respect NDAs and secure development enclaves, and structure deliverables around the milestone gates AAA publishers use. For co-development with Ubisoft Toronto, Rockstar Toronto, or similar tier-one studios, we scope around feature teams (weapons, vehicles, AI, UI) or content teams and deliver through the studio's preferred review cadence."
    },
    {
      q: "How do you handle PIPEDA and COPPA for Toronto games with child audiences?",
      a: "Any game collecting player data in Canada falls under PIPEDA, and any game knowingly reaching US children under 13 falls under COPPA. For kid-directed titles, we build with data minimisation by default: no personally identifiable information unless a parent verifies, no behavioural ads to under-13 accounts, age-gated account creation, and server-side controls on chat and user generated content. We document the data flow, retention policy, and deletion workflow, align the privacy policy with PIPEDA's ten fair information principles, and prepare the COPPA safe-harbour filings where the platform or publisher requires them."
    }
  ],

  whyCity: [
    {
      icon: "🎮",
      title: "Toronto Studio Ecosystem",
      desc: "We build inside the same ecosystem as Ubisoft Toronto, Rockstar Toronto, Capybara Games, Drinkbox Studios, and Uken Games, which means our pipelines, standards, and publisher relationships mirror what tier-one Ontario studios already run."
    },
    {
      icon: "💰",
      title: "OIDMTC up to 40%",
      desc: "Every project is architected to qualify for the Ontario Interactive Digital Media Tax Credit. We keep OIDMTC-ready timesheets, labour residency records, and product documentation so your refund claim sails through Ontario Creates and CRA review."
    },
    {
      icon: "🎨",
      title: "Sheridan / George Brown Talent",
      desc: "We partner with graduates and faculty from Sheridan College's animation programs and George Brown's Game Development stream, giving Toronto projects access to a pipeline of local artists, animators, and designers who already speak the dialect of Ontario studios."
    },
    {
      icon: "🌐",
      title: "Live Ops & F2P Expertise",
      desc: "From seasonal events to server-driven economies and Playfab-backed meta systems, we run the same live ops cadence Toronto's mobile leaders use, including soft-launch analytics, CASL-compliant re-engagement, and cohort-based monetisation tuning."
    }
  ]
};
