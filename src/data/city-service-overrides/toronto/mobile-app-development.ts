export const torontoMobileAppDevelopmentOverride = {
  heroDescription:
    "Toronto is Canada's busiest mobile market, with roughly 6.4 million residents across the GTA and smartphone penetration near 89%. Riders tap Presto cards through the TTC app, drivers pay meters with GreenP, Wealthsimple moves billions through its iOS and Android wallets, and Shopify merchants in Liberty Village push updates to the Shop app every few days. Codazz builds production mobile apps for that audience from our Edmonton and Chandigarh studios, working EST hours and shipping to the App Store and Google Play with Toronto-specific compliance baked in. Every engagement accounts for AODA accessibility obligations, PIPEDA consent flows, App Tracking Transparency prompts tuned for iOS 17 and 18, and Google Play's Canadian data safety disclosures. We have delivered React Native, Swift, and Kotlin builds for fintech startups on King Street West, health-tech teams working with Ontario Health partners, and retail brands integrating Loblaw PC Optimum and Interac e-Transfer. Pricing is quoted in CAD and mapped to SR&ED eligibility so eligible CCPCs can recover up to 35% of qualifying mobile R&D. Whether you are launching an MVP at CAD $60k to $150k, scaling a production app in the CAD $150k to $400k range, or modernizing an enterprise platform in the CAD $400k to $1.5M bracket, you get Toronto-grade delivery without Bay Street agency overhead.",

  servicesIntro:
    "Toronto's mobile ecosystem has matured well beyond basic consumer apps. Shopify's mobile commerce stack, Wealthsimple's trading and crypto flows, Ritual's pre-order model, TouchBistro's hospitality POS, and Ecobee's smart home controls all set a high bar for what local users expect on their phones. Our service lines cover native iOS in Swift, native Android in Kotlin, React Native, and Flutter, with specialized tracks for fintech KYC, AODA WCAG 2.1 AA accessibility audits, Presto and TTC transit integrations, and Interac Online plus e-Transfer request flows. We also handle App Store and Google Play submissions under Canadian DUNS, ASO in English and Quebec French, and post-launch crash triage with Firebase Crashlytics and Sentry tuned to EST on-call schedules.",

  processIntro:
    "Our process runs on Eastern Time so stand-ups, demos, and release windows align with Toronto product teams and downtown stakeholders. Discovery covers user personas across the 416 and 905, competitive teardowns of apps like Wealthsimple and Ritual, and an AODA accessibility audit against WCAG 2.1 AA before a single screen ships to TestFlight. Sprints run two weeks with bilingual English and Quebec French copy review when your audience extends to Montreal or Gatineau. We wire PIPEDA-compliant consent, App Tracking Transparency prompts, and Google Play data safety forms into the first release candidate rather than retrofitting later. Release engineering includes phased rollouts through App Store Connect and Google Play staged rollouts, with crash budgets reviewed weekly.",

  techIntro:
    "Stack selection for Toronto projects follows the workload. React Native suits cross-platform consumer apps where Shopify-style iteration speed matters, Flutter works well for pixel-dense fintech dashboards, and native Swift plus Kotlin remain the right call for camera, CoreML, biometric, or HealthKit features. Backends default to AWS Canada Central (ca-central-1) in Montreal so personal information stays inside Canada under PIPEDA, with optional Azure Canada Central failover for regulated health and banking workloads. App Store submissions use a Canadian D-U-N-S number issued by Dun and Bradstreet Canada, and Google Play accounts are registered to your Canadian entity. Analytics run on Amplitude or Mixpanel with IP truncation enabled to satisfy Quebec Law 25 for users in Montreal and Quebec City.",

  industryExpertise:
    "Toronto's mobile demand concentrates in a few verticals and we staff for all of them. In fintech, we build alongside teams inspired by Wealthsimple, Questrade, and the mobile arms of the Big Five banks (RBC, TD, Scotiabank, BMO, CIBC), covering Interac e-Transfer request flows, Plaid Canada account linking, and FINTRAC-aligned KYC with Onfido or Trulioo. In health tech, our engineers have shipped patient-facing apps that interoperate with Ontario Health digital services and Telus Health Personal Health Record exports, with PHIPA-compliant audit logging layered over PIPEDA. In retail and loyalty, we deliver mobile experiences for grocery and pharmacy brands that mirror Loblaw, Shoppers Drug Mart, and Metro app patterns, including PC Optimum-style points, store locators powered by Mapbox, and barcode scanning via VisionKit. We also support hospitality and food-tech teams competing with Ritual and TouchBistro, handling tip flows, Square and Moneris SDKs, and Uber Eats Marketplace APIs.",

  faqs: [
    {
      q: "How much does a mobile app cost in Toronto?",
      a: "Toronto mobile budgets cluster in three bands. A focused MVP with one platform first, 8 to 12 screens, and basic auth runs CAD $60,000 to $150,000. A production-grade app on iOS and Android with payments, push, analytics, and AODA WCAG 2.1 AA accessibility work lands between CAD $150,000 and $400,000. Enterprise mobile platforms with offline sync, SSO, admin consoles, and PIPEDA-grade security reviews run CAD $400,000 to $1.5M. Eligible Canadian-controlled private corporations can recover up to 35% of qualifying mobile R&D through the SR&ED federal tax credit, materially reducing net cost."
    },
    {
      q: "Do we need AODA compliance for our Toronto mobile app?",
      a: "If your organization is based in Ontario and has 50 or more employees, or is a designated public sector entity, the Accessibility for Ontarians with Disabilities Act requires your customer-facing digital products to meet WCAG 2.1 Level AA. That includes mobile apps, not just websites. In practice we audit color contrast, Dynamic Type scaling, VoiceOver and TalkBack labels, focus order, and captioning for in-app video. Even smaller Toronto startups adopt WCAG 2.1 AA voluntarily because Ontario enterprise buyers, school boards, and hospitals will ask for an AODA statement before signing a procurement contract."
    },
    {
      q: "Can you build bilingual English/French apps for Canadian users?",
      a: "Yes. We design mobile apps with full English and Quebec French localization from day one, using Apple's string catalogs and Android's resource folders with fr-CA locale codes. Quebec French differs from France French in banking, legal, and retail terminology, so copy is reviewed by a Quebec-based reviewer rather than machine translated. If your app serves Quebec users you must also meet Quebec Law 25 obligations around consent, data inventory, and breach notification. We wire those consent dialogs into the app onboarding rather than bolting them on after launch."
    },
    {
      q: "How do you integrate with Canadian payment systems like Interac?",
      a: "Interac e-Transfer request flows typically route through your bank's commercial API, for example RBC's Interac e-Transfer Request Money API or through aggregators such as Plooto and Versapay. We integrate Interac Online at checkout for merchants who want bank-account-funded payments alongside Visa and Mastercard. For point-of-sale style mobile flows we use Moneris, Stripe Terminal Canada, or Square Canada SDKs. All card data stays tokenized and never touches your servers, keeping you inside PCI-DSS scope reduction and aligned with PIPEDA consent requirements for financial personal information."
    },
    {
      q: "What mobile development stack do you recommend for a Toronto fintech?",
      a: "For a Toronto fintech we usually recommend native Swift on iOS and native Kotlin on Android rather than cross-platform. Regulators, auditors, and enterprise security teams at RBC, TD, and OSFI-regulated partners scrutinize jailbreak detection, certificate pinning, and biometric key storage, and those are smoother natively. Backends sit in AWS Canada Central to keep PIPEDA-regulated data inside Canada, with Cognito or Auth0 for identity plus Onfido for KYC. If your roadmap is purely consumer acquisition and lean budget matters more than deep platform integration, React Native is a defensible compromise."
    },
    {
      q: "How long does iOS App Store approval take for Canadian apps?",
      a: "Apple's median App Store review time is around 24 to 48 hours globally, and Canadian apps are not treated differently from US submissions. What usually delays Toronto teams is App Tracking Transparency wording, privacy nutrition labels, and health or financial claims that trigger deeper review. We pre-validate your App Privacy disclosures, ATT prompt copy, and any in-app purchase configuration against Apple's Canadian storefront before submission. Google Play Console is typically faster at 1 to 3 days but its Canadian data safety form is stricter than many teams expect, particularly for PIPEDA-regulated data categories like financial account info."
    },
    {
      q: "Do Toronto mobile apps qualify for SR&ED tax credits?",
      a: "Often yes. The federal Scientific Research and Experimental Development program refunds up to 35% of eligible R&D for Canadian-controlled private corporations, and qualifying Ontario work can stack the provincial Ontario Innovation Tax Credit on top. Mobile work that typically qualifies includes novel offline sync, new biometric flows, custom ML on-device with Core ML or TensorFlow Lite, performance engineering against platform constraints, and original accessibility engineering beyond baseline AODA. Routine CRUD screens and off-the-shelf integrations usually do not qualify. We keep technical uncertainty logs, timesheets, and experiment notes structured so your SR&ED consultant can file cleanly."
    },
    {
      q: "How do you handle Quebec Law 25 compliance for apps with QC users?",
      a: "Quebec Law 25, formerly Bill 64, applies to any mobile app that collects personal information from Quebec residents, even if your company is headquartered in Toronto. We implement granular consent dialogs separate from the PIPEDA-level privacy policy, appoint a documented privacy officer contact surfaced in the app's About screen, maintain a data inventory mapping every third-party SDK to its purpose, and wire breach notification workflows into your backend. For cross-border transfers outside Quebec, including sending data to AWS US regions, we add the required impact assessment and disclosure in the Quebec French privacy notice."
    }
  ],

  whyCity: [
    {
      icon: "📱",
      title: "Toronto Mobile Market",
      desc: "6.4M GTA residents, ~89% smartphone penetration, and anchor mobile brands like Shopify, Wealthsimple, Ritual, and TouchBistro set the quality bar for every new Toronto app launch."
    },
    {
      icon: "♿",
      title: "AODA Compliance",
      desc: "We audit mobile apps against WCAG 2.1 Level AA from the first sprint so Ontario organizations with 50+ employees meet their Accessibility for Ontarians with Disabilities Act obligations before launch."
    },
    {
      icon: "🏦",
      title: "Interac & Canadian Payments",
      desc: "Interac e-Transfer Request Money, Interac Online, Moneris, Stripe Terminal Canada, and Square Canada integrated with PCI-DSS token flows and PIPEDA-aligned consent for financial data."
    },
    {
      icon: "🍁",
      title: "Bilingual App Support",
      desc: "Full English and Quebec French localization with fr-CA string catalogs, native reviewer QA, and Quebec Law 25 consent dialogs built into onboarding for users in Montreal, Gatineau, and beyond."
    }
  ]
};
