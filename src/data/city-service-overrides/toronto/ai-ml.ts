export const torontoAiMlOverride = {
  heroDescription:
    "Toronto sits at the centre of Canada's AI economy. The Vector Institute, co-founded by Turing Award winner Geoffrey Hinton in 2017 with more than $150M in combined federal, provincial, and corporate funding, anchors a research cluster that includes the University of Toronto (ranked first globally for AI research output by CSRankings), Cohere's $2.2B LLM platform, Layer 6 AI inside TD Bank, and Borealis AI at RBC. Codazz builds production AI and machine learning systems for Toronto founders, fintechs, health networks, and public sector teams working inside this ecosystem. We ship RAG assistants, fraud detection models, computer vision pipelines, forecasting engines, and custom LLM integrations that respect the regulatory reality Toronto clients now face, including the proposed Artificial Intelligence and Data Act (AIDA) under Bill C-27, Ontario's Bill 194 governing public sector AI use, PHIPA for health data, and OSFI Guideline E-23 on model risk management. Our engineers work EST hours from our Edmonton and Chandigarh hubs, coordinate with U of T and Vector-affiliated researchers when projects need applied science depth, and deliver model cards, bias audits, and explainability documentation suitable for Ontario enterprise procurement. Instead of slideware, you get a working model, an MLOps pipeline, and a compliance trail your legal and risk teams can defend in front of the Office of the Privacy Commissioner.",

  servicesIntro:
    "Toronto's AI market expects more than generic prompt engineering. Cohere has set the local bar for enterprise LLMs with Command R+ and production RAG, Layer 6 AI ships fraud and personalisation models inside TD, and Borealis AI pushes reinforcement learning into RBC trading and risk workflows. Our AI and ML services mirror that standard. We design retrieval pipelines on Cohere, OpenAI, and Anthropic APIs with Canadian data residency, tune open-weight models (Llama 3, Mistral, Qwen) on client data when AIDA transparency obligations make hosted frontier models a poor fit, and build classical ML (XGBoost, LightGBM, scikit-learn) for tabular fintech and insurance problems where explainability beats raw accuracy. Every engagement includes a model card, a bias and fairness review, and an AIDA-aligned risk classification.",

  processIntro:
    "We run discovery, design, build, and deployment on EST hours so Toronto product and compliance leads get synchronous standups, not overnight handoffs. Discovery opens with an AIDA risk classification workshop (high-impact vs general-purpose vs standard) and a PHIPA or OSFI E-23 review if health or financial data is in scope. When a problem demands novel research, we scope collaborations with Vector Institute affiliates or U of T graduate labs rather than pretending we invented the technique in-house. Build sprints are two weeks, reviewed against a model card template aligned with Canada's Directive on Automated Decision-Making. Deployment includes monitoring, drift detection, and a documented rollback plan that Ontario procurement and internal audit teams can sign off without a second vendor engagement.",

  techIntro:
    "Toronto AI workloads almost always need Canadian data residency, so we default to AWS ca-central-1 (Montreal), GCP northamerica-northeast1 (Montreal) or northamerica-northeast2 (Toronto), and Azure Canada Central (Toronto) for training and inference. For LLM layers we use Cohere's Toronto-hosted endpoints when clients require Canadian sovereignty, Anthropic and OpenAI through Bedrock or Azure when cross-border is acceptable, and self-hosted Llama 3 or Mistral on GPU clusters when AIDA explainability obligations rule out closed APIs. MLflow, Weights and Biases, and SageMaker handle experiment tracking. SHAP, LIME, and Captum produce the explainability artefacts Ontario regulators and OSFI reviewers expect for high-impact models.",

  industryExpertise:
    "Toronto's AI demand concentrates in two verticals, and we have shipped in both. In financial services, the Big Five (RBC through Borealis AI, TD through Layer 6 AI, Scotiabank, BMO, CIBC) plus challengers like Wealthsimple and Koho push heavy investment into fraud detection, AML transaction monitoring, credit decisioning, and document intelligence. We build these under OSFI Guideline E-23 on model risk management and FCAC fair treatment rules, with full lineage and challenger model testing. In health tech, University Health Network (UHN), Sinai Health, SickKids, and Unity Health Toronto fund clinical AI for imaging, triage, and EHR summarisation. Our PHIPA-compliant pipelines keep PHI inside Canadian regions, log every model inference for audit, and ship with clinician-facing explainability dashboards. We also serve Toronto legal tech, insurance (Manulife, Sun Life), and retail clients on Queen Street building demand forecasting and personalisation engines.",

  faqs: [
    {
      q: "How much does custom AI development cost in Toronto?",
      a: "A scoped AI proof of concept at Toronto rates runs CAD $40,000 to $90,000 over six to ten weeks, covering data audit, a baseline model, and a hosted demo. A custom production ML model (fraud scoring, churn prediction, document extraction) typically lands at CAD $120,000 to $300,000 including MLOps, monitoring, and an AIDA-aligned model card. Full production AI systems with RAG, multiple models, fine-tuning, and enterprise integrations range from CAD $250,000 to $1.2M. Toronto rates sit above Edmonton and Calgary because of the Vector Institute and Cohere talent premium. We give fixed-fee proposals rather than open T and M estimates."
    },
    {
      q: "What is AIDA and how does it affect our AI project?",
      a: "The Artificial Intelligence and Data Act (AIDA) is Canada's proposed federal AI law under Bill C-27. It classifies systems as high-impact (employment, credit, healthcare, law enforcement, content moderation at scale, biometrics) and imposes obligations around risk assessment, bias mitigation, transparency, human oversight, and incident reporting. Our discovery phase runs an AIDA classification on your use case, and high-impact builds ship with a model card, bias audit, and monitoring plan. Even pre-enactment, Toronto enterprises (RBC, TD, UHN) already require AIDA-style governance, because the Office of the Privacy Commissioner and OSFI have telegraphed the direction clearly."
    },
    {
      q: "Can you build LLM applications for Toronto financial institutions?",
      a: "Yes. We ship RAG systems, internal copilots, document extraction pipelines, and agent workflows for Canadian banks and fintechs. For Big Five and OSFI-regulated clients we stay inside Canadian regions (Cohere Toronto endpoints, AWS ca-central-1 Bedrock, Azure Canada Central OpenAI), apply OSFI Guideline E-23 model risk controls, and produce the challenger model documentation internal audit needs. We have patterned deployments after public work from Layer 6 AI and Borealis AI, including strict PII redaction, prompt injection defences, human-in-the-loop review gates, and evaluation harnesses that run before every production push. Output logs feed existing SIEM and model risk platforms."
    },
    {
      q: "How do you ensure AI model compliance with Bill 194 for Ontario public sector clients?",
      a: "Ontario's Bill 194 (Strengthening Cyber Security and Building Trust in the Public Sector Act, 2024) requires provincial ministries, agencies, school boards, and children's aid societies to disclose AI use, assess risk, and maintain accountability records. Our public sector engagements produce a Bill 194 disclosure package, an impact assessment aligned with Canada's Directive on Automated Decision-Making, and human oversight controls proportional to the determined risk tier. We coordinate with Ontario Digital Service patterns where they apply and keep training data and inference inside ca-central-1 or Canada Central regions. Every model ships with a plain-language notice suitable for public consultation."
    },
    {
      q: "Do you work with Vector Institute or University of Toronto researchers?",
      a: "When a project requires genuine research (novel model architectures, rare-event detection, reinforcement learning in production), we scope collaborations with Vector Institute affiliated faculty or U of T graduate labs rather than overselling in-house capability. Our core team handles applied engineering, MLOps, and productionisation, which is where most Toronto AI projects actually stall. For standard work (RAG, fine-tuning, classical ML, computer vision on known architectures) no academic partner is needed. We will tell you up front which bucket your problem fits into, and we have introduced Toronto clients to Vector's industry sponsorship program when it fits their roadmap and budget."
    },
    {
      q: "What data residency options exist for Toronto AI projects?",
      a: "We default to AWS ca-central-1 (Montreal), GCP northamerica-northeast2 (Toronto) or northamerica-northeast1 (Montreal), and Azure Canada Central (Toronto) for storage, training, and inference. For LLMs that must stay in Canada (PHIPA health data, OSFI-regulated banking, federal Protected B workloads) we use Cohere's Canadian endpoints or self-host Llama 3 and Mistral on Canadian GPU instances. Cross-border is acceptable only when a Privacy Impact Assessment signs off, typically for non-sensitive internal tooling. We document residency in the model card and the data processing agreement so PIPEDA and PHIPA auditors have a clear answer."
    },
    {
      q: "How long does it take to build a production AI model for a Toronto fintech?",
      a: "A typical Toronto fintech model (fraud scoring, credit decisioning, KYC document extraction, AML transaction monitoring) takes fourteen to twenty-two weeks from kickoff to production, assuming clean historical data and OSFI E-23 documentation as part of scope. Week 1 to 4 is data audit and baseline. Week 5 to 12 is modelling, iteration, and challenger testing. Week 13 to 18 is MLOps, monitoring, shadow mode deployment, and internal audit review. Week 19 onward is gradual rollout. If you are pre-data or need labelling, add six to eight weeks. We have shipped to this cadence inside Canadian OSFI-regulated stacks."
    },
    {
      q: "Can we claim SR&ED tax credits on AI projects you build?",
      a: "Most custom AI work qualifies for the Scientific Research and Experimental Development (SR&ED) program, which returns 35 percent refundable credit on eligible R&D spend for Canadian-controlled private corporations (CCPCs) up to the $3M expenditure limit, and 15 percent non-refundable above that. Eligible activity generally includes novel modelling, architecture experimentation, algorithmic uncertainty, and systematic investigation, not routine integration. We deliver time-tracked logs, technical narratives, experiment histories, and failed-hypothesis documentation aligned with the CRA T661 form. Ontario fintechs can often stack the Ontario Interactive Digital Media Tax Credit on eligible portions. Final eligibility sits with your SR&ED consultant and the CRA."
    }
  ],

  whyCity: [
    {
      icon: "🧠",
      title: "Vector Institute Proximity",
      desc: "The Vector Institute anchors Toronto's AI research density, with Geoffrey Hinton as co-founder and more than $150M in combined funding. We build applied systems that plug into that ecosystem, scoping Vector-affiliated researchers when a project genuinely requires novel science instead of productionisation."
    },
    {
      icon: "🏦",
      title: "FinTech AI Experience",
      desc: "Toronto's Big Five banks, Wealthsimple, and Koho set a high bar on fraud detection, AML, and credit models. We ship inside OSFI Guideline E-23 controls with challenger testing, model risk documentation, and PIPEDA-compliant logging that internal audit and the Office of the Superintendent accept without a rewrite."
    },
    {
      icon: "📋",
      title: "AIDA & Bill 194 Compliant",
      desc: "Every high-impact model leaves with an AIDA risk classification, a Bill 194 disclosure package for Ontario public sector, and an impact assessment aligned with Canada's Directive on Automated Decision-Making. PHIPA and PIPEDA obligations are handled in-pipeline, not bolted on after launch or during an audit scramble."
    },
    {
      icon: "🎓",
      title: "U of T Research Pipeline",
      desc: "The University of Toronto ranks first globally for AI research output and feeds Cohere, Layer 6 AI, and Borealis AI. We hire against that benchmark, stay current with local venues like the Toronto Machine Learning Summit and Creative Destruction Lab's AI stream, and bring that applied research literacy into every client engagement."
    }
  ]
};
