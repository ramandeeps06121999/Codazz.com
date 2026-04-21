export const torontoProductDesignOverride = {
  heroDescription:
    "Toronto has quietly become one of North America's most consequential product design cities. OCAD University pumps out roughly 4,500 graduates a year, Shopify's design organization along King Street West publishes the Polaris design system that tens of thousands of merchant apps reference, and fintech teams at Wealthsimple, Questrade, and the Big Five banks ship interfaces used by millions of Canadians from Adelaide to Bay Street. Codazz designs products for this market remotely from Edmonton and Chandigarh, and our engagements with Toronto clients overlap heavily with GTA working hours, AODA obligations, and the specific research, prototyping, and handoff practices that Ontario teams expect. We work inside Figma with shared libraries, run moderated usability sessions with Toronto participants through Maze and User Interviews, and ship WCAG 2.1 AA audit reports that product and legal teams can actually submit. Clients range from seed-stage startups out of MaRS Discovery District and Creative Destruction Lab to regulated SaaS companies operating under PIPEDA and Ontario Bill 194. Every deliverable is priced in Canadian dollars, scoped around Toronto hiring benchmarks, and reviewed against the patterns your users already see daily in RBC Mobile, Shopify admin, Wealthsimple Cash, and TTC's Presto app. No generic templates, no offshore guesswork, no surprise currency conversions on the invoice.",
  servicesIntro:
    "Our Toronto services cover product discovery, UX research, UI design, design systems, and accessibility audits against WCAG 2.1 AA, the technical standard AODA compliance points at. We lean on the same patterns that the OCAD, George Brown, and Humber design programs train students against, and many of our reviewers have shipped screens alongside teams at Shopify, FreshBooks, Klick Health, and Rangle.io. If your team already uses Polaris, Wealthsimple's public design language, or a custom token set, we extend it rather than replacing it. Engagements typically start with a UX audit in the CAD 15-45k range and scale up to full product redesigns at CAD 60-200k or multi-platform design systems at CAD 80-250k, with Figma as the central source of truth and Storybook or Supernova as the handoff layer for your Toronto engineering team.",
  processIntro:
    "We run weekly design reviews on Toronto time, typically Tuesday and Thursday mornings EST, with Loom walkthroughs posted the night before so product managers at King and Spadina can review over coffee. Every engagement includes an AODA and WCAG 2.1 AA audit step where we validate contrast, keyboard traps, focus order, and screen reader labels against the Integrated Accessibility Standards Regulation. For products serving Quebec users or federally regulated industries, we plan bilingual English and French design from the first wireframe, accounting for roughly 30 percent text expansion in French copy, Law 25 consent patterns, and proper accented character rendering across Inter, Source Sans, and custom brand fonts.",
  techIntro:
    "Figma is the core tool across every Toronto engagement, with Figma Tokens or Tokens Studio driving shared variables between design and code. We run unmoderated usability testing in Maze, session replay and heatmaps in Hotjar, and tree tests and card sorts in Optimal Workshop when restructuring navigation for Shopify apps or banking dashboards. Accessibility validation uses Stark and Axe DevTools inside Figma and the browser, NVDA and VoiceOver for screen reader passes, and manual keyboard testing against WCAG 2.1 AA. For high-fidelity prototypes we use ProtoPie or Framer, and for research repositories we keep everything searchable in Dovetail so Toronto product leads can pull evidence straight into roadmap reviews.",
  industryExpertise:
    "In FinTech, we design account opening, KYC, and transaction interfaces for Wealthsimple-style challenger brands and Big Five banks operating under OSFI, FINTRAC, and PIPEDA, with particular attention to Interac e-Transfer flows, void cheque uploads, and Canadian tax document rendering. In HealthTech, we work with Ontario Health digital teams, hospital-adjacent SaaS, and companies operating alongside Klick Health on patient portals that honour PHIPA, consent capture, and AODA screen reader requirements. In E-Commerce, we build merchant-facing admin tools that slot into the Shopify Polaris ecosystem, plus consumer-facing storefronts for Loblaw, Indigo, and Canadian Tire style catalogs where performance on lower-tier Android devices across the GTA matters as much as visual polish. Each vertical has its own Figma library, its own research participant pool, and its own compliance checklist we maintain against current Ontario and federal regulation.",

  faqs: [
    {
      q: "How much does UI/UX design cost in Toronto?",
      a: "Toronto UI/UX pricing sits well above the national Canadian average because local talent competes with Shopify, Wealthsimple, and Big Five bank salaries. For Codazz engagements in CAD: a focused UX audit runs 15-45k, a full product redesign for a mid-sized SaaS lands at 60-200k, and a multi-platform design system sits at 80-250k. In-house Toronto hiring is the other benchmark: junior UX designers cost 75-95k salary, seniors 120-165k, design leads 165-230k, and design directors 200-290k, before benefits and RRSP matching. Most of our Toronto clients run a lean internal team plus a Codazz pod as their surge capacity."
    },
    {
      q: "Do we need AODA-compliant design for our Toronto product?",
      a: "If your organization has 50 or more employees or is a public sector body in Ontario, the Integrated Accessibility Standards Regulation under AODA already applies, and your websites and web apps must meet WCAG 2.1 Level AA. Even if you are smaller, enterprise procurement across the GTA now treats AODA conformance as a buying requirement, and Bill 194 is tightening public sector expectations further. We bake WCAG 2.1 AA into design reviews rather than bolting it on at the end: colour contrast, focus visibility, target sizes, keyboard navigation, screen reader labels, and form error handling all get validated before development starts."
    },
    {
      q: "Can you build a design system like Shopify's Polaris for our company?",
      a: "Yes, and we treat Polaris as the benchmark because so many Toronto designers already read it daily. A Codazz design system engagement produces Figma libraries with variables and variants, a token pipeline feeding CSS or native code, documented usage guidelines in Zeroheight or Supernova, and accessibility annotations aligned with WCAG 2.1 AA. Scope usually lands at CAD 80-250k depending on how many products share it. We start by auditing your existing screens, mapping component frequency, then designing foundations, primitives, and patterns in that order so your Toronto engineering team can adopt tokens incrementally without freezing the roadmap."
    },
    {
      q: "How do you handle bilingual (English/French) design for Canadian products?",
      a: "Bilingual design is planned from the first wireframe, not retrofitted. French copy in Canadian contexts typically expands 20 to 30 percent longer than English, so we design layouts that breathe: flexible buttons, wrapping headlines, and accordion patterns for dense content. For products serving Quebec users, we follow Law 25 for consent patterns, Office québécois de la langue française conventions for date and currency formatting, and we source reviewers who can validate tone. Every component in the Figma library ships with English and French string variants so your developers can wire localization through i18next, react-intl, or Rails I18n without hunting down edge cases."
    },
    {
      q: "What accessibility testing do you do for Ontario clients?",
      a: "Accessibility work for Ontario clients combines automated, manual, and assistive technology testing against WCAG 2.1 AA. We run Axe DevTools and Stark inside Figma and the browser, execute full keyboard-only traversal of every flow, and complete screen reader passes with NVDA on Windows and VoiceOver on macOS and iOS. For higher-stakes products we coordinate user testing with CNIB and partner agencies that connect with blind, low-vision, and motor-impaired participants across the GTA. Deliverables include a WCAG audit sheet, annotated Figma frames, and a prioritized remediation backlog your developers can file directly into Jira or Linear."
    },
    {
      q: "How long does a product design engagement take for a Toronto startup?",
      a: "A typical Toronto startup engagement falls into three shapes. A focused discovery and UX audit runs 3 to 5 weeks and produces a research report, journey maps, and a prioritized backlog. A full MVP design for a seed or Series A fintech or SaaS product runs 10 to 16 weeks across discovery, UI, prototyping, usability testing with Toronto participants, and engineering handoff. A design system build runs 12 to 24 weeks depending on surface area. We align sprints to your EST product cadence, so MaRS and CDL founders can present progress at their weekly investor or cohort checkpoints."
    },
    {
      q: "Do you design for both web and mobile simultaneously?",
      a: "Yes. Most Toronto product teams need web admin, responsive marketing pages, and native iOS and Android apps to evolve together, especially in fintech and retail where users jump between RBC web, RBC Mobile, and an Apple Watch complication in the same afternoon. We structure Figma libraries with platform-aware components and shared tokens so a single change to brand colour or spacing propagates cleanly. Research is run across devices: tree tests and surveys via Optimal Workshop for information architecture, and mobile-first usability tasks in Maze. Handoff goes to your web and native engineering leads at the same milestone."
    },
    {
      q: "Can OCAD graduates or Toronto-based designers work on our project?",
      a: "Our core delivery team is based in Edmonton and Chandigarh, and we collaborate with a network of freelance senior designers across Toronto, including OCAD, George Brown, and Humber graduates with experience at Shopify, Rangle.io, Konrad, TribalScale, and Klick Health. If you need a Toronto-based design lead embedded in your office on King West or at MaRS a few days a week, we can staff that alongside our remote pod. For fully remote engagements we keep working hours overlapped with EST so reviews, research sessions, and stakeholder demos happen on your schedule."
    }
  ],

  whyCity: [
    {
      icon: "🎨",
      title: "OCAD Talent Network",
      desc: "OCAD University graduates around 4,500 students annually, and our Toronto collaborators draw from OCAD, George Brown Interaction Design, and Humber's UX program. We tap that network for senior reviewers, research participants, and embedded leads on larger engagements."
    },
    {
      icon: "♿",
      title: "AODA-Native Design",
      desc: "Every Toronto engagement treats WCAG 2.1 AA as a baseline, not a checkbox. We validate contrast, focus order, and screen reader semantics in Figma before engineering starts, and align deliverables with Ontario's Integrated Accessibility Standards Regulation and Bill 194."
    },
    {
      icon: "🛍️",
      title: "Shopify Polaris Experience",
      desc: "Our designers read Polaris the way front-end engineers read React docs. We extend it for merchant-facing apps, mirror its documentation style for custom systems, and keep Toronto teams shipping on patterns their users already trust from Shopify admin."
    },
    {
      icon: "🍁",
      title: "Bilingual Design Expertise",
      desc: "English and French variants live in the Figma library from day one, with 30 percent text expansion baked into layouts, Law 25 consent patterns, and Office québécois conventions so your product ships cleanly across Ontario and Quebec without rework."
    }
  ]
};
