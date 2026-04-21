export const torontoSaasDevelopmentOverride = {
  heroDescription:
    "Toronto is the loudest SaaS market in Canada, and Codazz ships product for founders and scaleups who need to hold their own against the companies setting that pace. The MaRS Discovery District alumni list reads like a local SaaS hall of fame: FreshBooks rebuilding its cloud accounting platform from King Street West, Loopio running its RFP response SaaS out of Spadina, Vena operating its CPM platform for the Office of Finance, Influitive pushing advocate marketing software, and TouchBistro scaling its hospitality SaaS from Richmond Street East. A short GO Train ride away, Shopify anchors the ecosystem with CAD 7B plus in annual revenue and a Toronto R and D footprint that pulls senior talent into the city. We build multi-tenant SaaS for Toronto teams that plan to raise a Series A at OMERS Ventures or Georgian, sell into RBC, TD, Manulife, and Sun Life procurement, and list on Bay Street eventually. Codazz does not operate a physical Toronto office. We run fully remote from Edmonton and Chandigarh, overlap with Eastern Time every business day, and deliver in CAD against fixed statements of work. Every engagement is architected with PIPEDA, Quebec Law 25, and AODA baked in, SR and ED eligibility tracked from day one, and the Ontario Innovation Tax Credit claimed where the math works. If you are shipping SaaS to Canadian buyers, the build needs to speak their language.",
  servicesIntro:
    "Our Toronto SaaS services span MVP builds for Techstars Toronto and Creative Destruction Lab cohorts, platform rewrites for teams inheriting legacy Rails monoliths like the one that shipped FreshBooks Classic, and enterprise extensions for firms selling upmarket alongside Loopio and Vena. We engineer multi-tenant architectures with schema per tenant, row level security, and tenant aware observability, build billing stacks on Stripe Canada with Moneris fallback for enterprise procurement, and wire metered usage events into CAD denominated invoicing. Every engagement is scoped with SR and ED eligibility mapped to work packages, Ontario Innovation Tax Credit paperwork prepped for your CPA, and OIDMTC explored where your SaaS has an interactive consumer surface. TouchBistro style vertical SaaS gets the same rigour as Influitive style horizontal plays.",
  processIntro:
    "Our Toronto SaaS process starts with a two week discovery that maps your ICP, pricing tiers, and Canadian compliance surface before a single line of code is written. We run two week sprints with Monday planning at 9 AM Eastern, Thursday demos, and Friday retros, using Linear for tickets and Notion for the product spec that doubles as your SR and ED technical narrative. Releases go through a Vercel or AWS ca-central-1 staging environment, behind feature flags via LaunchDarkly or Unleash, with Sentry and Datadog wired for tenant scoped error tracking. Your Toronto product manager owns the roadmap, our staff engineer owns the architecture, and we publish burn and velocity weekly.",
  techIntro:
    "Toronto SaaS teams ask for stacks that hire well on LinkedIn and scale past Series B without a rewrite. We default to Next.js or Remix on the frontend, Node.js with NestJS or Python with FastAPI on the backend, PostgreSQL on AWS RDS in ca-central-1 with read replicas, and Redis for sessions and rate limiting. For data warehousing we run Snowflake or BigQuery with Fivetran and dbt, mirroring the stack Shopify and FreshBooks analytics teams standardised on. Infrastructure is Terraform managed, deployed to AWS, Vercel, or Google Cloud Toronto region, with Cloudflare for WAF and CDN. We layer Auth0, WorkOS, or Clerk for SSO, Stripe Billing for subscriptions, and PostHog or Mixpanel for product analytics.",
  industryExpertise:
    "Toronto SaaS splits cleanly into horizontal platforms selling across industries and vertical SaaS owning a single workflow end to end, and we build both. On the horizontal side we ship product analytics, RevOps, HR tech, and developer tools in the mould of Influitive, Rubikloud, and Wave Financial, where the challenge is breadth of integrations, flexible data models, and a self serve PLG motion that converts trials booked from a Google Ad into paid seats. On the vertical side we ship hospitality SaaS in the TouchBistro lane, legal tech alongside the Clio Toronto team, financial planning competitors to Vena, and RFP and procurement tools adjacent to Loopio, where depth of domain logic, embedded payments, and regulated data handling matter more than breadth. Vertical plays typically need deeper PIPEDA, AODA, and sector specific compliance work, and we scope accordingly.",

  faqs: [
    {
      q: "How much does it cost to build a SaaS MVP in Toronto?",
      a: "A focused Toronto SaaS MVP with auth, multi-tenant data, Stripe billing, one core workflow, and a clean admin console lands between CAD 90k and CAD 250k depending on integration count and compliance scope. A MaRS or CDL style pre seed MVP usually sits at CAD 120k to CAD 180k across ten to fourteen weeks. A multi-tenant SaaS aimed at selling into RBC or Manulife procurement runs CAD 250k to CAD 700k, and enterprise SaaS with SSO, audit logs, and SOC 2 readiness ranges CAD 600k to CAD 2M. We quote fixed price in CAD against a signed statement of work."
    },
    {
      q: "Can we claim SR&ED tax credits on our SaaS development?",
      a: "Yes, most of the SaaS work we do qualifies for the Scientific Research and Experimental Development program. Canadian controlled private corporations get a 35 percent refundable federal investment tax credit on the first CAD 3M of qualifying expenditures, which for a Toronto startup burning CAD 1.5M on engineering is meaningful runway. We structure work packages, keep contemporaneous technical documentation, and tag tickets in Linear to the hypothesis and uncertainty they address. Your CPA or SR and ED consultant like Boast or MentorWorks files the T661, and our billing records and time logs support the claim."
    },
    {
      q: "What's the Ontario Innovation Tax Credit for SaaS companies?",
      a: "The Ontario Innovation Tax Credit is an 8 percent refundable credit on eligible SR and ED expenditures incurred in Ontario, stacked on top of the federal SR and ED claim. For a Toronto SaaS team spending CAD 1M on qualifying engineering in a fiscal year, the OITC adds roughly CAD 80k refundable on top of the federal credit. The Ontario Business Research Institute Tax Credit and the Ontario Interactive Digital Media Tax Credit, worth up to 40 percent, may also apply if your SaaS has an interactive consumer facing product. We flag OIDMTC eligibility during discovery and brief your accountant."
    },
    {
      q: "How do you handle multi-tenancy for Toronto B2B SaaS?",
      a: "For most Toronto B2B SaaS we default to a shared database with a tenant_id column on every table, PostgreSQL row level security policies enforcing isolation, and a pool of schemas for tenants with bespoke data residency. Enterprise customers selling into RBC, TD, or Sun Life often demand logical isolation, so we also offer schema per tenant and fully isolated stacks in ca-central-1 for regulated buyers. Every query is tenant scoped by default through the ORM, background jobs carry tenant context, and observability in Datadog or Sentry tags every span with tenant_id so incidents stay contained."
    },
    {
      q: "Do you support Stripe, Moneris, and Interac for Canadian SaaS payments?",
      a: "Yes. Stripe Billing is our default for subscription SaaS because it handles CAD pricing, GST and HST by province, proration, dunning, and usage based billing out of the box, and Stripe has a large Toronto presence that makes support responsive. For enterprise buyers who insist on a Canadian acquirer we integrate Moneris for card present and card not present flows. Interac e Transfer and Interac Online suit B2C and SMB use cases via Moneris, Plooto, or Rotessa integrations. We also wire net 30 invoicing with Stripe Invoicing or Quickbooks Canada for procurement heavy buyers."
    },
    {
      q: "How long does it take to build a production SaaS for a Toronto startup?",
      a: "A focused MVP ships in ten to fourteen weeks with a team of four: staff engineer, two full stack engineers, and a designer, meeting weekly at 10 AM Eastern. A Series A ready multi-tenant SaaS with billing, SSO, admin console, and a first integration takes sixteen to twenty-four weeks. A full enterprise SaaS with SOC 2 controls, audit logs, role based access, and two or three deep integrations runs six to nine months. We release behind feature flags from week three, so Toronto founders can put the product in front of design partners at OneEleven or MaRS long before general availability."
    },
    {
      q: "How do you ensure PIPEDA and Quebec Law 25 compliance for a SaaS serving Canadian users?",
      a: "Every SaaS we build treats PIPEDA as the baseline. We map personal information flows during discovery, host tenant data in AWS ca-central-1 in Montreal or Google Cloud northamerica-northeast2 in Toronto, encrypt at rest with KMS and in transit with TLS 1.3, and wire consent and access request tooling into the admin console. For Quebec Law 25 we add a named privacy officer contact, confidentiality by default, cross border transfer impact assessments, and explicit consent flows in both English and French. AODA WCAG 2.0 AA accessibility is enforced in the design system and audited before launch."
    },
    {
      q: "What auth/SSO do Toronto enterprise SaaS customers expect?",
      a: "Toronto enterprise buyers at RBC, TD, Manulife, Sun Life, Rogers, and the broader MaRS tenant base expect SAML 2.0 and OpenID Connect SSO, SCIM 2.0 for user provisioning, and integration with Okta, Microsoft Entra ID formerly Azure AD, and Google Workspace out of the gate. We implement this via WorkOS, Auth0, or a native passport.js stack depending on pricing tier. Enterprise tiers also get role based and attribute based access control, audit logs exportable to Splunk or Datadog, session timeout controls, and IP allow listing. SOC 2 Type II readiness follows naturally from the same controls."
    }
  ],

  whyCity: [
    {
      icon: "💼",
      title: "Toronto SaaS Ecosystem",
      desc: "We build product for teams operating in the same orbit as Shopify, FreshBooks, Loopio, Vena, Influitive, and TouchBistro, and we know how Toronto buyers at RBC, TD, Manulife, and Sun Life evaluate SaaS."
    },
    {
      icon: "💰",
      title: "SR&ED + OITC Experts",
      desc: "Work is tagged to SR and ED hypotheses from day one, technical narratives doubled as product specs, and OITC plus OIDMTC eligibility flagged so your CPA can file 35 percent federal and 8 percent Ontario credits with clean evidence."
    },
    {
      icon: "🏗️",
      title: "Multi-Tenant at Scale",
      desc: "Row level security, tenant scoped observability, schema per tenant for regulated buyers, and Stripe Billing or Moneris wired for CAD pricing with GST and HST handled per province. The same patterns that Loopio and Vena operate at scale."
    },
    {
      icon: "🍁",
      title: "PIPEDA & Law 25 Compliant",
      desc: "Data resident in AWS ca-central-1 Montreal or Google Cloud Toronto, PIPEDA mapped in discovery, Quebec Law 25 consent flows in English and French, AODA WCAG 2.0 AA enforced, and OSFI B 13 applied for fintech SaaS targeting federally regulated buyers."
    }
  ]
};
