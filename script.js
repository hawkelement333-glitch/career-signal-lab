const PROJECT_NAME = "SolaRPlexus Project Moonlight";
const COMPANY_BRIEF_START = "--- Project Moonlight Company Signal Brief ---";
const COMPANY_BRIEF_END = "--- End Project Moonlight Company Signal Brief ---";

const roleLibrary = [
  {
    id: "ai-quality",
    title: "AI Quality Analyst",
    direction: "ai-quality",
    summary: "Best for candidates who can evaluate outputs, write clearly, catch edge cases, and explain judgment.",
    keywords: ["ai", "quality", "review", "feedback", "rubric", "evaluate", "evaluation", "prompt", "writing", "accuracy", "detail", "trust"],
    strengths: ["AI judgment", "writing", "quality review"]
  },
  {
    id: "ai-response-evaluator",
    title: "AI Response Evaluator",
    direction: "ai-quality",
    summary: "Best for candidates who compare model responses, write preference rationales, and calibrate against rubrics.",
    keywords: ["ai", "model", "response", "responses", "preference", "rationale", "rubric", "evaluate", "evaluation", "hallucination", "instruction", "accuracy"],
    strengths: ["preference ranking", "rubric judgment", "rationale writing"]
  },
  {
    id: "trust-safety",
    title: "Trust and Safety Analyst",
    direction: "ai-quality",
    summary: "Best for candidates who can spot risky claims, apply policies, and protect users while preserving usefulness.",
    keywords: ["safety", "trust", "policy", "risk", "bias", "fairness", "harm", "guidelines", "review", "quality", "accuracy", "responsible"],
    strengths: ["risk review", "policy thinking", "user protection"]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    direction: "data",
    summary: "Best for candidates who enjoy dashboards, survey data, Excel, SQL, metrics, and evidence-based recommendations.",
    keywords: ["data", "excel", "sql", "dashboard", "metrics", "survey", "analysis", "analytics", "insights", "python", "tableau"],
    strengths: ["analytics", "dashboards", "evidence"]
  },
  {
    id: "product-ops",
    title: "Product Operations Associate",
    direction: "product",
    summary: "Best for candidates who translate messy workflows into clear systems, docs, and stakeholder decisions.",
    keywords: ["product", "operations", "workflow", "stakeholder", "process", "documentation", "roadmap", "launch", "user", "systems"],
    strengths: ["systems thinking", "stakeholders", "execution"]
  },
  {
    id: "customer-success",
    title: "Customer Success Specialist",
    direction: "customer",
    summary: "Best for candidates who mentor, support users, explain next steps, and build trust with customers or students.",
    keywords: ["customer", "support", "mentor", "training", "workshop", "communication", "relationship", "onboarding", "students", "help"],
    strengths: ["coaching", "communication", "trust"]
  },
  {
    id: "marketing-comms",
    title: "Marketing Communications Coordinator",
    direction: "marketing",
    summary: "Best for candidates who write persuasive messages, understand audiences, and turn stories into campaigns.",
    keywords: ["marketing", "content", "campaign", "social", "writing", "brand", "audience", "story", "copy", "communications"],
    strengths: ["storytelling", "audience", "content"]
  },
  {
    id: "software-associate",
    title: "Software Support Engineer",
    direction: "product",
    summary: "Best for candidates with technical curiosity, troubleshooting, documentation, and user-facing problem solving.",
    keywords: ["javascript", "python", "api", "code", "debug", "technical", "software", "github", "troubleshoot", "test", "automation"],
    strengths: ["technical support", "debugging", "documentation"]
  }
];

const signalTaxonomy = [
  {
    id: "communication",
    label: "Communication",
    keywords: ["write", "writing", "feedback", "present", "explain", "communication", "story", "documentation", "workshop", "mentor"]
  },
  {
    id: "analysis",
    label: "Analysis",
    keywords: ["data", "excel", "survey", "analysis", "analytics", "metrics", "dashboard", "insights", "recommendations"]
  },
  {
    id: "execution",
    label: "Execution",
    keywords: ["built", "build", "led", "created", "managed", "organized", "operations", "process", "project", "launched"]
  },
  {
    id: "technical",
    label: "Technical fluency",
    keywords: ["ai", "tools", "python", "sql", "javascript", "api", "automation", "dashboard", "github", "model"]
  },
  {
    id: "user-empathy",
    label: "User empathy",
    keywords: ["student", "students", "customer", "user", "inclusive", "trust", "mentor", "onboarding", "support", "accessibility"]
  },
  {
    id: "quality",
    label: "Quality judgment",
    keywords: ["quality", "review", "detail", "accuracy", "evaluate", "compare", "rubric", "responsible", "fairness", "safe"]
  }
];

const examples = {
  career: {
    targetJob: "AI Content Quality Analyst",
    companyName: "OpenAI",
    direction: "auto",
    trainerScenario: "quality",
    resume:
      "Peer mentor and student club operations lead with experience writing clear feedback, analyzing survey data in Excel, building dashboards, facilitating workshops, documenting decisions, and helping students improve resumes and career stories. Comfortable using AI tools responsibly, comparing outputs, and explaining recommendations to non-technical audiences.",
    job:
      "The role needs strong writing, data judgment, quality review, AI tool fluency, attention to detail, stakeholder communication, inclusive thinking, and the ability to turn messy information into clear recommendations for students and employers."
  },
  data: {
    targetJob: "Data Analyst Intern",
    companyName: "Microsoft",
    direction: "data",
    trainerScenario: "hallucination",
    resume:
      "Built class dashboards in Excel and Tableau, cleaned survey results, wrote SQL queries, presented findings to student affairs, and created weekly reports for a campus program. Interested in using data to improve student outcomes.",
    job:
      "Analyze marketplace data, build dashboards, identify trends, communicate insights, define metrics, work with SQL or spreadsheets, and partner with teams to improve student and employer experiences."
  },
  support: {
    targetJob: "Customer Success Associate",
    companyName: "Notion",
    direction: "customer",
    trainerScenario: "instruction",
    resume:
      "Led onboarding for new club members, answered questions from students, wrote help guides, hosted workshops, resolved scheduling issues, and built trust with peers by following up quickly and clearly.",
    job:
      "Support customers, explain product value, troubleshoot workflow questions, document solutions, run onboarding sessions, and communicate feedback to product and operations teams."
  },
  marketing: {
    targetJob: "Marketing Communications Coordinator",
    companyName: "Spotify",
    direction: "marketing",
    trainerScenario: "fairness",
    resume:
      "Created social posts for student events, wrote newsletter copy, interviewed members, designed campaign calendars, tracked attendance, and turned student stories into clear promotional messages.",
    job:
      "Write campaign copy, understand audiences, support brand storytelling, manage content calendars, analyze engagement, collaborate with creative teams, and communicate clearly across channels."
  },
  engineering: {
    targetJob: "Software Support Engineer",
    companyName: "OpenAI",
    direction: "product",
    trainerScenario: "safety",
    resume:
      "Built a JavaScript habit tracker, tested API endpoints, documented setup steps, used GitHub Actions, debugged frontend issues, and explained technical problems to classmates in plain language.",
    job:
      "Troubleshoot technical issues, read logs, reproduce bugs, communicate with customers, write clear documentation, understand APIs, collaborate with engineering, and improve support workflows."
  }
};

const companyProfileLibrary = [
  {
    id: "ai-lab",
    match: ["openai", "anthropic", "deepmind", "perplexity", "cohere", "mistral", "hugging face", "dataannotation", "outlier", "scale ai", "invisible", "surge", "appen", "telus"],
    type: "AI lab or model operations company",
    signals: ["evaluation quality", "clear rationales", "policy judgment", "edge-case thinking", "privacy awareness"],
    proofAngle: "Frame your resume around careful evaluation, instruction following, evidence-based writing, and the ability to improve model outputs without overclaiming.",
    watchout: "Do not imply model, policy, or labeling experience unless the resume actually proves it.",
    searchTerms: ["AI evaluator roles", "responsible AI principles", "data quality standards"]
  },
  {
    id: "big-tech",
    match: ["google", "microsoft", "meta", "apple", "amazon", "nvidia", "adobe", "oracle", "ibm", "intel", "amd"],
    type: "large technology company",
    signals: ["scale", "cross-functional communication", "data fluency", "customer impact", "structured problem solving"],
    proofAngle: "Connect your strongest evidence to scalable systems, measurable outcomes, documentation, and clean handoffs between teams.",
    watchout: "Avoid broad prestige language; use specific examples that show what you personally owned.",
    searchTerms: ["company values", "early career roles", "technical support expectations"]
  },
  {
    id: "product-saas",
    match: ["notion", "figma", "salesforce", "hubspot", "atlassian", "asana", "monday", "slack", "linear", "airtable", "canva"],
    type: "product-led SaaS company",
    signals: ["workflow empathy", "documentation", "customer insight", "product feedback", "process improvement"],
    proofAngle: "Show how you translate messy user needs into clear workflows, training, docs, or support loops.",
    watchout: "Do not sound like a generic fan of the product; prove you understand users and outcomes.",
    searchTerms: ["customer stories", "product principles", "support documentation"]
  },
  {
    id: "consumer-brand",
    match: ["spotify", "netflix", "duolingo", "airbnb", "roblox", "tiktok", "pinterest", "reddit", "discord", "twitch"],
    type: "consumer product or community platform",
    signals: ["audience empathy", "trust and safety", "content quality", "community judgment", "experimentation"],
    proofAngle: "Emphasize audience awareness, clear communication, fairness, and the ability to improve user-facing experiences.",
    watchout: "Balance enthusiasm with operational proof; reviewers still need concrete actions and results.",
    searchTerms: ["community guidelines", "brand voice", "user experience roles"]
  },
  {
    id: "finance-health",
    match: ["jpmorgan", "chase", "goldman", "capital one", "visa", "mastercard", "stripe", "robinhood", "unitedhealth", "cvs", "walgreens", "humana"],
    type: "regulated or high-trust company",
    signals: ["accuracy", "privacy", "compliance awareness", "risk review", "clear escalation"],
    proofAngle: "Lead with reliability, careful documentation, ethical judgment, and respect for sensitive information.",
    watchout: "Never invent certifications, compliance training, or domain expertise that is not in the resume.",
    searchTerms: ["compliance expectations", "privacy principles", "analyst role requirements"]
  },
  {
    id: "education-career",
    match: ["handshake", "coursera", "chegg", "khan academy", "quizlet", "udemy", "linkedin", "indeed", "glassdoor"],
    type: "education, career, or talent marketplace",
    signals: ["student outcomes", "career storytelling", "inclusive access", "coaching", "marketplace quality"],
    proofAngle: "Connect resume evidence to helping people make better decisions, communicate strengths, and navigate opportunity.",
    watchout: "Avoid making the product sound student-only if the role serves employers, teams, or platform operations too.",
    searchTerms: ["career outcomes", "marketplace trust", "student success roles"]
  }
];

const defaultCompanyProfile = {
  id: "universal",
  type: "company-specific opportunity",
  signals: ["role evidence", "company vocabulary", "customer or user impact", "measurable ownership", "culture fit"],
  proofAngle: "Use the company name as a targeting lens, then validate the actual signals with the job post, careers page, product pages, and recent public company materials.",
  watchout: "Treat unknown company facts as research prompts, not claims. Keep resume changes grounded in proof you can defend.",
  searchTerms: ["careers page", "company values", "recent product news"]
};

const trainerScenarios = {
  quality: {
    label: "Response quality",
    promptFocus: "overall answer quality, usefulness, evidence, and specificity",
    weakFault: "generic confidence without evidence",
    strongTrait: "specific, grounded, and useful guidance",
    errors: [
      ["Generic praise", "The model sounds encouraging but does not solve the candidate's actual task."],
      ["Weak evidence use", "The model ignores resume or job-post details that should shape the advice."],
      ["No prioritization", "The model lists many ideas without naming the most important next action."],
      ["Vague rationale", "The model cannot explain why one response is better than another."]
    ],
    rubric: [
      ["Helpfulness", "Does the response solve the user's real task instead of offering vague encouragement?"],
      ["Grounding", "Does it use evidence from the resume and job post without inventing experience?"],
      ["Specificity", "Does it produce concrete next steps, keywords, or phrasing the candidate can edit?"],
      ["Clarity", "Is the rationale easy for a reviewer to audit?"]
    ]
  },
  hallucination: {
    label: "Hallucination check",
    promptFocus: "unsupported claims, invented credentials, and exaggerated experience",
    weakFault: "adds accomplishments the candidate never provided",
    strongTrait: "separates confirmed evidence from missing proof",
    errors: [
      ["Invented credential", "The model adds degrees, titles, tools, employers, or metrics not present in the resume."],
      ["Unsupported keyword stuffing", "The model tells the candidate to add role language without proof."],
      ["False certainty", "The model presents an assumption as if it were verified."],
      ["Missing correction", "The model flags a problem but does not offer a safer replacement."]
    ],
    rubric: [
      ["Factuality", "Does the response avoid inventing degrees, employers, metrics, or tools?"],
      ["Evidence boundary", "Does it mark assumptions instead of presenting them as facts?"],
      ["Correction quality", "Does it replace unsupported claims with interview-defensible language?"],
      ["Auditability", "Can another evaluator trace each recommendation to source text?"]
    ]
  },
  instruction: {
    label: "Instruction following",
    promptFocus: "whether the model follows the user's requested role, company, and output format",
    weakFault: "ignores the target company and gives a generic resume rewrite",
    strongTrait: "honors the requested role, company, tone, and evidence limits",
    errors: [
      ["Company omission", "The model forgets the named company or treats the role as generic."],
      ["Format drift", "The response ignores the requested output shape or adds unrelated sections."],
      ["Tone mismatch", "The rewrite no longer sounds like the candidate."],
      ["Partial completion", "The model handles only one part of a multi-step request."]
    ],
    rubric: [
      ["Constraint handling", "Does the response obey the requested company, role, and tailoring style?"],
      ["Format fidelity", "Does it provide the expected sections without extra clutter?"],
      ["Prioritization", "Does it lead with the most job-relevant evidence?"],
      ["Completeness", "Does it cover resume, cover letter, and next-step guidance when requested?"]
    ]
  },
  fairness: {
    label: "Fairness and bias",
    promptFocus: "inclusive, non-discriminatory career guidance and fair interpretation of experience",
    weakFault: "makes assumptions about the candidate's background or fit",
    strongTrait: "focuses on demonstrated skills and avoids identity-based assumptions",
    errors: [
      ["Identity assumption", "The model infers traits or constraints not supplied by the candidate."],
      ["Gatekeeping language", "The model frames a candidate as unqualified without considering transferable proof."],
      ["Stereotype risk", "The model uses coded or biased reasoning instead of evidence."],
      ["Missing access lens", "The model overlooks inclusive, practical ways to strengthen the application."]
    ],
    rubric: [
      ["Fairness", "Does the response evaluate demonstrated evidence rather than personal identity?"],
      ["Inclusive language", "Does it avoid stereotypes and coded assumptions?"],
      ["Opportunity framing", "Does it identify transferable skills without gatekeeping?"],
      ["Risk flagging", "Does it warn when a recommendation could be unfair or unsupported?"]
    ]
  },
  safety: {
    label: "Safety boundary",
    promptFocus: "responsible advice, privacy, and claims the candidate can safely defend",
    weakFault: "encourages overclaiming or sharing sensitive information",
    strongTrait: "protects privacy and keeps claims truthful",
    errors: [
      ["Overclaiming", "The model pushes the candidate to exaggerate experience."],
      ["Privacy leak", "The model asks for or exposes sensitive personal details unnecessarily."],
      ["Unsafe certainty", "The model gives high-stakes advice without caution or verification."],
      ["Reputation risk", "The model creates wording the candidate could not defend in an interview."]
    ],
    rubric: [
      ["Privacy", "Does the response avoid exposing sensitive personal information?"],
      ["Truthfulness", "Does it discourage exaggeration and fabricated expertise?"],
      ["User agency", "Does it keep the candidate in control of final wording?"],
      ["Professional risk", "Does it reduce interview and reputation risk?"]
    ]
  }
};

const inputs = {
  targetJob: document.querySelector("#targetJob"),
  companyName: document.querySelector("#companyName"),
  resumeText: document.querySelector("#resumeText"),
  jobText: document.querySelector("#jobText"),
  careerDirection: document.querySelector("#careerDirection"),
  trainerScenario: document.querySelector("#trainerScenario")
};

const output = {
  heroTitle: document.querySelector("#heroTitle"),
  heroThesis: document.querySelector("#heroThesis"),
  proofRoleValue: document.querySelector("#proofRoleValue"),
  proofReadinessValue: document.querySelector("#proofReadinessValue"),
  proofCompanyValue: document.querySelector("#proofCompanyValue"),
  proofEvidenceValue: document.querySelector("#proofEvidenceValue"),
  readinessScore: document.querySelector("#readinessScore"),
  scoreCircle: document.querySelector("#scoreCircle"),
  bestRoleMetric: document.querySelector("#bestRoleMetric"),
  companyMetric: document.querySelector("#companyMetric"),
  resumeMetric: document.querySelector("#resumeMetric"),
  nextMoveMetric: document.querySelector("#nextMoveMetric"),
  roleCards: document.querySelector("#roleCards"),
  briefSummary: document.querySelector("#briefSummary"),
  managerBrief: document.querySelector("#managerBrief"),
  ledgerSummary: document.querySelector("#ledgerSummary"),
  evidenceLedger: document.querySelector("#evidenceLedger"),
  signalSummary: document.querySelector("#signalSummary"),
  signalBars: document.querySelector("#signalBars"),
  fitCanvas: document.querySelector("#fitCanvas"),
  bulletList: document.querySelector("#bulletList"),
  gapSummary: document.querySelector("#gapSummary"),
  gapList: document.querySelector("#gapList"),
  storyList: document.querySelector("#storyList"),
  keywordSummary: document.querySelector("#keywordSummary"),
  keywordList: document.querySelector("#keywordList"),
  scanSummary: document.querySelector("#scanSummary"),
  recruiterScan: document.querySelector("#recruiterScan"),
  auditSummary: document.querySelector("#auditSummary"),
  letterAudit: document.querySelector("#letterAudit"),
  coverLetter: document.querySelector("#coverLetter"),
  outreachMessage: document.querySelector("#outreachMessage"),
  trainerProof: document.querySelector("#trainerProof"),
  scorecardSummary: document.querySelector("#scorecardSummary"),
  evaluationScorecard: document.querySelector("#evaluationScorecard"),
  portfolioProofPack: document.querySelector("#portfolioProofPack"),
  companyInsightSummary: document.querySelector("#companyInsightSummary"),
  companyBrief: document.querySelector("#companyBrief"),
  taxonomySummary: document.querySelector("#taxonomySummary"),
  errorTaxonomy: document.querySelector("#errorTaxonomy"),
  drillSummary: document.querySelector("#drillSummary"),
  interviewDrill: document.querySelector("#interviewDrill"),
  rubricSummary: document.querySelector("#rubricSummary"),
  rubricMatrix: document.querySelector("#rubricMatrix"),
  guardrailSummary: document.querySelector("#guardrailSummary"),
  guardrailList: document.querySelector("#guardrailList"),
  companySignalStatus: document.querySelector("#companySignalStatus"),
  uploadStatus: document.querySelector("#uploadStatus"),
  applicationKit: document.querySelector("#applicationKit")
};

const resetButton = document.querySelector("#resetButton");
const downloadButton = document.querySelector("#downloadButton");
const analyzeCompanyButton = document.querySelector("#analyzeCompanyButton");
const copyBulletsButton = document.querySelector("#copyBulletsButton");
const copyLetterButton = document.querySelector("#copyLetterButton");
const copyOutreachButton = document.querySelector("#copyOutreachButton");
const copyProofButton = document.querySelector("#copyProofButton");
const copyProofPackButton = document.querySelector("#copyProofPackButton");
const copyKitButton = document.querySelector("#copyKitButton");
const resumeFileInput = document.querySelector("#resumeFile");
const resumeUploadButton = document.querySelector("#resumeUploadButton");
const resumeDropZone = document.querySelector("#resumeDropZone");
const saveStatus = document.querySelector("#saveStatus");
const chips = Array.from(document.querySelectorAll(".chip"));

const STORAGE_KEY = "solarplexus-project-moonlight-workspace-v1";
let currentAnalysis = null;
let saveTimer = 0;
let restoringWorkspace = false;

function words(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function uniqueWords(text) {
  return [...new Set(words(text))];
}

function countMatches(text, keywords) {
  const lowered = text.toLowerCase();
  return keywords.reduce((sum, keyword) => {
    const pattern = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    return sum + (lowered.match(pattern) || []).length;
  }, 0);
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function getMode() {
  return document.querySelector('input[name="tailorMode"]:checked').value;
}

function roleScore(role, resumeText, jobText) {
  const resumeHits = countMatches(resumeText, role.keywords);
  const jobHits = countMatches(jobText, role.keywords);
  const titleHits = countMatches(inputs.targetJob.value, [role.title, ...role.keywords]);
  const directionBonus =
    inputs.careerDirection.value === "auto" || inputs.careerDirection.value === role.direction ? 10 : -2;
  const transferBonus = Math.min(12, Math.max(0, resumeHits + jobHits - 4));
  return Math.round(clamp(40 + resumeHits * 8 + jobHits * 6 + titleHits * 5 + directionBonus + transferBonus, 22, 98));
}

function signalScores(resumeText, jobText) {
  const uniqueCount = new Set(words(`${resumeText} ${jobText}`)).size;
  return signalTaxonomy.map((signal) => {
    const resumeHits = countMatches(resumeText, signal.keywords);
    const jobHits = countMatches(jobText, signal.keywords);
    const score = Math.round(clamp(30 + resumeHits * 13 + jobHits * 9 + Math.min(uniqueCount, 80) * 0.18, 22, 98));
    return { ...signal, resumeHits, jobHits, score };
  });
}

function keywordPlan(bestRole, resumeText, jobText) {
  const jobTokens = uniqueWords(jobText).filter((word) => word.length > 4);
  const roleKeywords = bestRole.keywords;
  const important = [...new Set([...roleKeywords, ...jobTokens])].filter((word) => word.length > 3).slice(0, 32);
  const resumeLower = resumeText.toLowerCase();
  const matched = important.filter((word) => resumeLower.includes(word.toLowerCase())).slice(0, 14);
  const missing = important.filter((word) => !resumeLower.includes(word.toLowerCase())).slice(0, 10);
  return { matched, missing };
}

function analyze() {
  const resumeText = inputs.resumeText.value.trim();
  const jobText = inputs.jobText.value.trim();
  const roles = roleLibrary
    .map((role) => ({ ...role, score: roleScore(role, resumeText, jobText) }))
    .sort((a, b) => b.score - a.score);
  const bestRole = roles[0];
  const signals = signalScores(resumeText, jobText);
  const keywords = keywordPlan(bestRole, resumeText, jobText);
  const coverage = keywords.matched.length + signals.filter((signal) => signal.resumeHits > 0).length;
  const signalAverage = signals.reduce((sum, signal) => sum + signal.score, 0) / signals.length;
  const readiness = Math.round(clamp(bestRole.score * 0.56 + signalAverage * 0.3 + Math.min(coverage, 16) * 2.1, 48, 98));
  currentAnalysis = { roles, bestRole, signals, keywords, readiness, coverage };
  renderAll();
}

function currentTrainerScenario() {
  return trainerScenarios[inputs.trainerScenario.value] || trainerScenarios.quality;
}

function getCompanyProfile(company, target = "") {
  const haystack = `${company} ${target}`.toLowerCase();
  return companyProfileLibrary.find((profile) => profile.match.some((term) => haystack.includes(term))) || defaultCompanyProfile;
}

function buildCompanySignalText(company, target) {
  const companyName = company.trim() || "Target company";
  const targetRole = target.trim() || "target role";
  const profile = getCompanyProfile(companyName, targetRole);
  return [
    COMPANY_BRIEF_START,
    `${companyName} targeting brief for ${targetRole}.`,
    `Company archetype: ${profile.type}.`,
    `Signals to validate before applying: ${profile.signals.join(", ")}.`,
    `Resume positioning angle: ${profile.proofAngle}`,
    `Evidence boundary: ${profile.watchout}`,
    `Research checklist: search ${profile.searchTerms.map((term) => `"${companyName} ${term}"`).join(", ")} and compare findings with the job post before making final claims.`,
    COMPANY_BRIEF_END
  ].join("\n");
}

function stripGeneratedCompanyBrief(text) {
  const pattern = new RegExp(`\\n*${escapeRegExp(COMPANY_BRIEF_START)}[\\s\\S]*?${escapeRegExp(COMPANY_BRIEF_END)}\\n*`, "g");
  return text.replace(pattern, "\n").trim();
}

function analyzeCompanyTarget() {
  const company = inputs.companyName.value.trim();
  const target = inputs.targetJob.value.trim() || "target role";
  if (!company) {
    if (output.companySignalStatus) output.companySignalStatus.textContent = "Enter any company name first.";
    inputs.companyName.focus();
    return;
  }
  const current = stripGeneratedCompanyBrief(inputs.jobText.value);
  const generated = buildCompanySignalText(company, target);
  inputs.jobText.value = [current, generated].filter(Boolean).join("\n\n");
  analyze();
  saveWorkspace();
  const profile = getCompanyProfile(company, target);
  if (output.companySignalStatus) {
    output.companySignalStatus.textContent = `${profile.type}: ${profile.signals.slice(0, 3).join(", ")}.`;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderAll() {
  const { roles, bestRole, signals, keywords, readiness, coverage } = currentAnalysis;
  const company = inputs.companyName.value.trim() || "the company";
  const targetJob = inputs.targetJob.value.trim() || bestRole.title;
  const scenario = currentTrainerScenario();

  output.heroTitle.textContent = bestRole.title;
  output.heroThesis.textContent = `Your strongest career fit is ${bestRole.title} for ${company}. This analyzer turns resume evidence into role matches, tailored bullets, missing keywords, a company-specific cover letter, and an AI trainer ${scenario.label.toLowerCase()} proof for ${targetJob}.`;
  output.proofRoleValue.textContent = bestRole.title;
  output.proofReadinessValue.textContent = `${readiness}%`;
  output.proofCompanyValue.textContent = company;
  output.proofEvidenceValue.textContent = keywords.missing.length ? "Ledger + Rubric" : "Ready Kit";
  output.readinessScore.textContent = readiness;
  output.scoreCircle.style.strokeDashoffset = String(302 - (302 * readiness) / 100);
  output.bestRoleMetric.textContent = bestRole.title;
  output.companyMetric.textContent = readiness >= 86 ? "Strong" : readiness >= 72 ? "Promising" : "Needs proof";
  output.resumeMetric.textContent = `${coverage} signals`;
  output.nextMoveMetric.textContent = keywords.missing.length ? "Add keywords" : "Apply now";
  output.signalSummary.textContent = `${signals.filter((signal) => signal.score >= 70).length} strong areas`;
  output.keywordSummary.textContent = `${keywords.matched.length} matched, ${keywords.missing.length} missing`;

  renderRoles(roles);
  renderCompanyBrief(bestRole, signals, keywords);
  renderManagerBrief(bestRole, signals, keywords);
  renderEvidenceLedger(bestRole, signals, keywords);
  renderSignals(signals);
  renderBullets(bestRole, signals, keywords);
  renderGaps(bestRole, signals, keywords);
  renderStories(bestRole, signals);
  renderKeywords(keywords);
  renderCoverLetter(bestRole, keywords);
  renderOutreachMessage(bestRole, keywords);
  renderRecruiterScan(bestRole, signals, keywords);
  renderLetterAudit(bestRole, keywords);
  renderTrainerProof(bestRole, keywords);
  renderEvaluationScorecard(bestRole, signals, keywords);
  renderPortfolioProofPack(bestRole, signals, keywords);
  renderErrorTaxonomy(bestRole, signals, keywords);
  renderInterviewDrill(bestRole, signals, keywords);
  renderRubricMatrix(bestRole, signals, keywords);
  renderGuardrails(bestRole, signals, keywords);
  renderApplicationKit();
  drawFitRadar();
}

function renderRoles(roles) {
  output.roleCards.replaceChildren(
    ...roles.slice(0, 6).map((role, index) => {
      const card = document.createElement("article");
      card.className = `role-card${index === 0 ? " best" : ""}`;
      const head = document.createElement("div");
      head.className = "role-head";
      const title = document.createElement("strong");
      title.textContent = role.title;
      const score = document.createElement("span");
      score.className = "role-score";
      score.textContent = `${role.score}%`;
      head.append(title, score);

      const summary = document.createElement("p");
      summary.textContent = role.summary;

      const meta = document.createElement("div");
      meta.className = "role-meta";
      role.strengths.forEach((strength) => {
        const pill = document.createElement("span");
        pill.className = "mini-pill";
        pill.textContent = strength;
        meta.append(pill);
      });

      card.append(head, summary, meta);
      return card;
    })
  );
}

function renderCompanyBrief(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "target company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const profile = getCompanyProfile(company, target);
  const top = strongestEvidence(signals);
  const validationTerms = profile.searchTerms.map((term) => `${company} ${term}`).slice(0, 3);
  const cards = [
    {
      title: "Company signal",
      value: profile.type,
      text: `Treat ${company} as a ${profile.type}. Validate the role against ${profile.signals.slice(0, 3).join(", ")} before final edits.`
    },
    {
      title: "Resume bridge",
      value: top[0].label,
      text: `Lead with ${top.map((signal) => signal.label.toLowerCase()).join(", ")} and connect those signals to ${target}.`
    },
    {
      title: "Tailoring angle",
      value: keywords.matched[0] || bestRole.strengths[0],
      text: profile.proofAngle
    },
    {
      title: "Truth check",
      value: "Evidence-safe",
      text: `${profile.watchout} Research next: ${validationTerms.join("; ")}.`
    }
  ];

  if (output.companyInsightSummary) output.companyInsightSummary.textContent = `${profile.type} strategy`;
  if (output.companySignalStatus) output.companySignalStatus.textContent = `Works with any company. Current lens: ${profile.type}.`;
  if (!output.companyBrief) return;
  output.companyBrief.replaceChildren(
    ...cards.map((item) => {
      const card = document.createElement("article");
      card.className = "company-card";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const value = document.createElement("span");
      value.className = "brief-value";
      value.textContent = item.value;
      header.append(title, value);
      const text = document.createElement("p");
      text.textContent = item.text;
      card.append(header, text);
      return card;
    })
  );
}

function renderManagerBrief(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "the company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const scenario = currentTrainerScenario();
  const top = strongestEvidence(signals);
  const weak = [...signals].sort((a, b) => a.score - b.score)[0];
  const cards = [
    {
      title: "Positioning thesis",
      value: bestRole.title,
      text: `Present this candidate as a ${target} applicant whose strongest lane is ${bestRole.strengths.join(", ")}.`
    },
    {
      title: "Proof stack",
      value: `${top.length} anchors`,
      text: `Lead with ${top.map((signal) => signal.label.toLowerCase()).join(", ")} and support each claim with a resume example.`
    },
    {
      title: "Company angle",
      value: company,
      text: `Connect matched language like ${keywords.matched.slice(0, 4).join(", ") || "clear communication"} to ${company}'s role needs.`
    },
    {
      title: "Risk to solve",
      value: weak.label,
      text: `Before applying, add one concrete example that strengthens ${weak.label.toLowerCase()} without exaggerating.`
    },
    {
      title: "AI trainer signal",
      value: scenario.label,
      text: `Use the proof lab to show evaluator judgment around ${scenario.promptFocus}.`
    },
    {
      title: "Best next action",
      value: currentAnalysis.readiness >= 86 ? "Export kit" : "Add proof",
      text: currentAnalysis.readiness >= 86 ? "The materials are strong enough to export and refine for submission." : "Strengthen one missing keyword with a real, interview-defensible example."
    }
  ];

  output.briefSummary.textContent = "6-part memo";
  output.managerBrief.replaceChildren(
    ...cards.map((item) => {
      const card = document.createElement("article");
      card.className = "brief-card";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const value = document.createElement("span");
      value.className = "brief-value";
      value.textContent = item.value;
      header.append(title, value);
      const text = document.createElement("p");
      text.textContent = item.text;
      card.append(header, text);
      return card;
    })
  );
}

function renderEvidenceLedger(bestRole, signals, keywords) {
  const top = strongestEvidence(signals);
  const scenario = currentTrainerScenario();
  const rows = [
    {
      claim: `${top[0].label} is a real strength`,
      label: "resume proof",
      evidence: `Detected ${top[0].resumeHits} resume references and ${top[0].jobHits} job-post references tied to ${top[0].keywords.slice(0, 4).join(", ")}.`,
      score: top[0].score
    },
    {
      claim: `Role fit is strongest for ${bestRole.title}`,
      label: "role match",
      evidence: `The best-fit role shares the candidate's strongest signals: ${bestRole.strengths.join(", ")}.`,
      score: bestRole.score
    },
    {
      claim: "AI judgment is more than tool usage",
      label: "trainer proof",
      evidence: `The proof lab asks for ${scenario.label.toLowerCase()} judgment and a preference rationale, which is closer to AI trainer work than generic AI prompting.`,
      score: clamp(currentAnalysis.readiness - 4, 58, 96)
    },
    {
      claim: keywords.missing.length ? `${keywords.missing[0]} needs proof before adding` : "No urgent keyword gap",
      label: keywords.missing.length ? "gap" : "ready",
      evidence: keywords.missing.length
        ? `Do not add "${keywords.missing[0]}" unless the candidate can point to a real project, task, class, or work sample.`
        : "Matched keywords already cover the core role language, so the next step is polishing specificity.",
      score: keywords.missing.length ? 64 : 92
    }
  ];

  output.ledgerSummary.textContent = `${rows.length} defensible claims`;
  output.evidenceLedger.replaceChildren(
    ...rows.map((row) => {
      const card = document.createElement("article");
      card.className = "ledger-row";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = row.claim;
      const label = document.createElement("span");
      label.className = "brief-value";
      label.textContent = row.label;
      header.append(title, label);
      const evidence = document.createElement("p");
      evidence.textContent = row.evidence;
      const score = document.createElement("span");
      score.className = "ledger-score";
      score.textContent = `${row.score}%`;
      card.append(header, evidence, score);
      return card;
    })
  );
}

function renderSignals(signals) {
  output.signalBars.replaceChildren(
    ...signals.map((signal) => {
      const row = document.createElement("div");
      row.className = "signal-row";
      const header = document.createElement("header");
      const label = document.createElement("span");
      label.textContent = signal.label;
      const value = document.createElement("span");
      value.textContent = `${signal.score}%`;
      header.append(label, value);
      const track = document.createElement("div");
      track.className = "bar-track";
      const fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.style.width = `${signal.score}%`;
      track.append(fill);
      row.append(header, track);
      return row;
    })
  );
}

function strongestEvidence(signals) {
  return [...signals].sort((a, b) => b.score - a.score).slice(0, 3);
}

function renderBullets(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "target company";
  const mode = getMode();
  const top = strongestEvidence(signals);
  const verbs = mode === "bold" ? ["Led", "Delivered", "Translated"] : mode === "concise" ? ["Built", "Analyzed", "Improved"] : ["Created", "Analyzed", "Partnered"];
  const bullets = [
    `${verbs[0]} career-facing support workflows by combining ${top[0].label.toLowerCase()} and ${top[1].label.toLowerCase()} to help users turn messy information into clear next steps.`,
    `${verbs[1]} resume and job-post signals to identify role fit, missing keywords, and evidence gaps for ${bestRole.title} opportunities.`,
    `${verbs[2]} complex ideas into recruiter-ready language, using ${keywords.matched.slice(0, 3).join(", ") || "role-specific evidence"} to connect experience with ${company}'s needs.`,
    "Applied responsible AI judgment by reviewing output quality, preserving authentic candidate stories, and avoiding generic application language."
  ];

  output.bulletList.replaceChildren(
    ...bullets.map((bullet) => {
      const item = document.createElement("li");
      item.textContent = bullet;
      return item;
    })
  );
}

function renderGaps(bestRole, signals, keywords) {
  const lowSignals = [...signals].sort((a, b) => a.score - b.score).slice(0, 2);
  const gaps = [
    {
      title: `Add ${keywords.missing[0] || "role-specific"} proof`,
      priority: "high",
      text: `Work "${keywords.missing[0] || bestRole.keywords[0]}" into one resume bullet only if you can support it with a real example.`
    },
    {
      title: `Strengthen ${lowSignals[0].label.toLowerCase()}`,
      priority: lowSignals[0].score < 58 ? "high" : "medium",
      text: `Add one measurable result, tool, or project detail that proves ${lowSignals[0].label.toLowerCase()} for ${bestRole.title}.`
    },
    {
      title: "Prepare a proof story",
      priority: "medium",
      text: "Bring one short interview story that shows the problem, action, result, and what you learned."
    }
  ];

  output.gapSummary.textContent = `${gaps.length} actions`;
  output.gapList.replaceChildren(...gaps.map(createGapCard));
}

function createGapCard(gap) {
  const card = document.createElement("article");
  card.className = "gap-item";
  const header = document.createElement("header");
  const title = document.createElement("strong");
  title.textContent = gap.title;
  const pill = document.createElement("span");
  pill.className = `priority ${gap.priority}`;
  pill.textContent = gap.priority;
  header.append(title, pill);
  const text = document.createElement("p");
  text.textContent = gap.text;
  card.append(header, text);
  return card;
}

function renderStories(bestRole, signals) {
  const top = strongestEvidence(signals);
  const stories = [
    {
      title: "Opening pitch",
      text: `I am a strong fit for ${bestRole.title} because my experience combines ${top.map((signal) => signal.label.toLowerCase()).join(", ")} with clear communication.`
    },
    {
      title: "Proof example",
      text: "Use a specific moment from your resume: what problem you saw, what you did, what changed, and how it connects to the company."
    },
    {
      title: "Authenticity check",
      text: "Keep the cover letter specific enough that you could defend every sentence in an interview."
    }
  ];

  output.storyList.replaceChildren(
    ...stories.map((story) => {
      const card = document.createElement("article");
      card.className = "story-item";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = story.title;
      header.append(title);
      const text = document.createElement("p");
      text.textContent = story.text;
      card.append(header, text);
      return card;
    })
  );
}

function renderKeywords(keywords) {
  output.keywordList.replaceChildren(
    createKeywordCard("Matched keywords", keywords.matched, "matched"),
    createKeywordCard("Keywords to earn or add", keywords.missing, "missing")
  );
}

function renderRecruiterScan(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "the company";
  const top = strongestEvidence(signals);
  const weak = [...signals].sort((a, b) => a.score - b.score)[0];
  const scanItems = [
    {
      title: "First impression",
      status: currentAnalysis.readiness >= 86 ? "strong" : "needs proof",
      tone: currentAnalysis.readiness >= 86 ? "" : "warn",
      text: `The resume reads closest to ${bestRole.title}, with visible strength in ${top[0].label.toLowerCase()} and ${top[1].label.toLowerCase()}.`
    },
    {
      title: "Why it fits",
      status: "evidence",
      tone: "",
      text: `The strongest bridge to ${company} is ${bestRole.strengths.join(", ")} backed by matched language like ${keywords.matched.slice(0, 4).join(", ") || "role-specific proof"}.`
    },
    {
      title: "Recruiter concern",
      status: weak.score < 62 ? "gap" : "minor",
      tone: weak.score < 62 ? "risk" : "warn",
      text: `The weakest visible area is ${weak.label.toLowerCase()}. Add one concrete example before applying if this role emphasizes it.`
    },
    {
      title: "Proof move",
      status: "action",
      tone: "",
      text: `Attach this project as a portfolio artifact: it shows fit analysis, application tailoring, ethical AI use, and clear career judgment.`
    }
  ];

  output.scanSummary.textContent = currentAnalysis.readiness >= 86 ? "strong first pass" : "needs one proof point";
  output.recruiterScan.replaceChildren(...scanItems.map(createInsightCard));
}

function createInsightCard(item) {
  const card = document.createElement("article");
  card.className = "insight-card";
  const header = document.createElement("header");
  const title = document.createElement("strong");
  title.textContent = item.title;
  const status = document.createElement("span");
  status.className = `insight-status ${item.tone || ""}`.trim();
  status.textContent = item.status;
  header.append(title, status);
  const text = document.createElement("p");
  text.textContent = item.text;
  card.append(header, text);
  return card;
}

function renderLetterAudit(bestRole, keywords) {
  const letter = output.coverLetter.value;
  const company = inputs.companyName.value.trim() || "the company";
  const job = inputs.targetJob.value.trim() || bestRole.title;
  const genericTerms = ["hard worker", "passionate", "team player", "perfect fit", "dream job", "dynamic company"];
  const genericHits = genericTerms.filter((term) => letter.toLowerCase().includes(term));
  const companyMention = letter.includes(company);
  const jobMention = letter.includes(job);
  const keywordMentions = keywords.matched.filter((word) => letter.toLowerCase().includes(word.toLowerCase())).length;
  const evidenceMentions = ["analyzed", "built", "supported", "written", "used", "created", "led"].filter((word) =>
    letter.toLowerCase().includes(word)
  ).length;
  const score = clamp(
    44 + (companyMention ? 12 : 0) + (jobMention ? 12 : 0) + keywordMentions * 4 + evidenceMentions * 5 - genericHits.length * 10,
    30,
    98
  );

  const auditItems = [
    {
      title: "Specificity",
      status: `${score}%`,
      tone: score >= 82 ? "" : "warn",
      text: companyMention && jobMention ? `Names ${company} and the ${job} role directly.` : "Add the company and exact role title."
    },
    {
      title: "Evidence density",
      status: `${evidenceMentions} anchors`,
      tone: evidenceMentions >= 3 ? "" : "warn",
      text: evidenceMentions >= 3 ? "Uses enough concrete action language to avoid sounding fully generic." : "Add one real project, result, or responsibility."
    },
    {
      title: "AI sameness risk",
      status: genericHits.length ? "watch" : "low",
      tone: genericHits.length ? "risk" : "",
      text: genericHits.length ? `Remove generic phrases: ${genericHits.join(", ")}.` : "No obvious generic cover-letter filler detected."
    }
  ];

  output.auditSummary.textContent = `${score}% believable`;
  output.letterAudit.replaceChildren(...auditItems.map(createInsightCard));
}

function renderTrainerProof(bestRole, keywords) {
  const company = inputs.companyName.value.trim() || "the company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const scenario = currentTrainerScenario();
  const prompt = `Evaluate whether this candidate should tailor their resume for a ${target} role at ${company}. Focus on ${scenario.promptFocus}. Use evidence from their resume and avoid adding claims they cannot prove.`;
  const weakResponse = `This candidate is a perfect fit and should say they are passionate, hardworking, and ready to do anything the company needs. It ${scenario.weakFault}.`;
  const strongResponse = `The candidate should lead with ${bestRole.strengths.join(", ")} and only add keywords such as ${keywords.missing.slice(0, 3).join(", ") || "role-specific terms"} when backed by real evidence. The strongest application materials should connect resume proof to ${company}'s needs without exaggerating, because strong evaluation is ${scenario.strongTrait}.`;
  const rationale = `Preferred response: B. It is more useful because it grounds the recommendation in evidence, warns against unsupported claims, and gives a concrete tailoring strategy for ${scenario.label.toLowerCase()}. Response A is generic and creates believability risk.`;

  const cards = [
    {
      title: "Evaluation prompt",
      label: "prompt",
      text: prompt
    },
    {
      title: "Model responses",
      label: "A/B",
      list: [`A: ${weakResponse}`, `B: ${strongResponse}`]
    },
    {
      title: "Preference rationale",
      label: "B wins",
      featured: true,
      text: rationale
    }
  ];

  output.trainerProof.replaceChildren(
    ...cards.map((item) => {
      const card = document.createElement("article");
      card.className = `proof-card${item.featured ? " featured" : ""}`;
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const label = document.createElement("span");
      label.className = `proof-label${item.label === "A/B" ? " alt" : ""}`;
      label.textContent = item.label;
      header.append(title, label);
      card.append(header);
      if (item.list) {
        const list = document.createElement("ul");
        item.list.forEach((text) => {
          const li = document.createElement("li");
          li.textContent = text;
          list.append(li);
        });
        card.append(list);
      } else {
        const text = document.createElement("p");
        text.textContent = item.text;
        card.append(text);
      }
      return card;
    })
  );
}

function renderEvaluationScorecard(bestRole, signals, keywords) {
  const scenario = currentTrainerScenario();
  const top = strongestEvidence(signals);
  const missingPenalty = keywords.missing.length ? 6 : 0;
  const rows = scenario.rubric.map(([criterion, description], index) => {
    const signal = top[index % top.length];
    const responseAScore = Math.round(clamp(42 + signal.score * 0.16 - missingPenalty - index * 3, 28, 72));
    const responseBScore = Math.round(clamp(70 + signal.score * 0.18 + keywords.matched.length - index * 2, 74, 98));
    return {
      criterion,
      description,
      signal: signal.label,
      responseAScore,
      responseBScore,
      decision: responseBScore - responseAScore >= 18 ? "B clearly wins" : "B wins"
    };
  });

  output.scorecardSummary.textContent = `${rows.length} criteria`;
  output.evaluationScorecard.replaceChildren(
    ...rows.map((row) => {
      const card = document.createElement("article");
      card.className = "scorecard-row";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = row.criterion;
      const meta = document.createElement("span");
      meta.className = "brief-value";
      meta.textContent = row.signal;
      const text = document.createElement("p");
      text.textContent = row.description;
      header.append(title, meta, text);

      const marks = document.createElement("div");
      marks.className = "scorecard-marks";
      [
        ["Response A", `${row.responseAScore}/100`, ""],
        ["Response B", `${row.responseBScore}/100`, "winner"],
        ["Decision", row.decision, "winner"]
      ].forEach(([labelText, valueText, className]) => {
        const mark = document.createElement("div");
        mark.className = `scorecard-mark ${className}`.trim();
        const label = document.createElement("span");
        label.textContent = labelText;
        const value = document.createElement("strong");
        value.textContent = valueText;
        mark.append(label, value);
        marks.append(mark);
      });

      card.append(header, marks);
      return card;
    })
  );
}

function renderPortfolioProofPack(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "target company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const scenario = currentTrainerScenario();
  const strongest = strongestEvidence(signals)[0];
  const items = [
    {
      title: "Showcase preview",
      status: "qa-desktop.png",
      text: "Use the refreshed desktop screenshot as the project showcase preview so reviewers see the premium cockpit immediately."
    },
    {
      title: "AI trainer work sample",
      status: scenario.label,
      text: `Lead with the Proof of Judgment Lab, Evaluation Scorecard, Error Taxonomy, and Rubric Matrix for ${scenario.label.toLowerCase()}.`
    },
    {
      title: "Employer narrative",
      status: target,
      text: `Explain that the app turns a resume into a tailored ${target} strategy for ${company} while preserving evidence boundaries.`
    },
    {
      title: "Defensible proof",
      status: strongest.label,
      text: `Point reviewers to the Evidence Ledger and Guardrails to show ${strongest.label.toLowerCase()} without unsupported claims.`
    },
    {
      title: "Submission artifact",
      status: "Markdown kit",
      text: "Export the application kit and attach it as a portfolio artifact, interview prep sheet, or follow-up message draft."
    },
    {
      title: "Responsible AI angle",
      status: keywords.missing.length ? "Guarded" : "Ready",
      text: "Emphasize that the tool is local-first, inspectable, and designed to prevent generic or exaggerated AI-written applications."
    }
  ];

  output.portfolioProofPack.replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = "proofpack-card";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const status = document.createElement("span");
      status.className = "brief-value";
      status.textContent = item.status;
      header.append(title, status);
      const text = document.createElement("p");
      text.textContent = item.text;
      card.append(header, text);
      return card;
    })
  );
}

function renderRubricMatrix(bestRole, signals, keywords) {
  const scenario = currentTrainerScenario();
  const topSignals = strongestEvidence(signals);
  const base = currentAnalysis.readiness;
  const cards = scenario.rubric.map(([title, description], index) => {
    const signal = topSignals[index % topSignals.length];
    const score = Math.round(clamp(base - index * 4 + signal.score * 0.08 + keywords.matched.length, 58, 98));
    return { title, description, score };
  });

  output.rubricSummary.textContent = scenario.label;
  output.rubricMatrix.replaceChildren(
    ...cards.map((item) => {
      const card = document.createElement("article");
      card.className = "rubric-card";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const score = document.createElement("span");
      score.className = "rubric-score";
      score.textContent = `${item.score}%`;
      header.append(title, score);
      const meter = document.createElement("div");
      meter.className = "rubric-meter";
      const fill = document.createElement("span");
      fill.style.width = `${item.score}%`;
      meter.append(fill);
      const text = document.createElement("p");
      text.textContent = item.description;
      card.append(header, meter, text);
      return card;
    })
  );
}

function renderGuardrails(bestRole, signals, keywords) {
  const scenario = currentTrainerScenario();
  const weak = [...signals].sort((a, b) => a.score - b.score)[0];
  const items = [
    {
      title: "Evidence-only tailoring",
      severity: keywords.missing.length ? "high" : "normal",
      text: keywords.missing.length
        ? `Do not add "${keywords.missing[0]}" as a keyword unless the resume has a real example to support it.`
        : "Keep the final application focused on real evidence already present in the resume."
    },
    {
      title: "Interview defensibility",
      severity: weak.score < 62 ? "high" : "normal",
      text: `Any claim about ${weak.label.toLowerCase()} should be backed by one situation, action, result, and learning point.`
    },
    {
      title: "Scenario-specific review",
      severity: "normal",
      text: `For ${scenario.label.toLowerCase()}, reject answers that ${scenario.weakFault}; prefer answers that are ${scenario.strongTrait}.`
    },
    {
      title: "Human final edit",
      severity: "normal",
      text: `Use the generated kit as a draft. The candidate should revise language until it sounds like their real voice for ${bestRole.title}.`
    }
  ];

  output.guardrailSummary.textContent = `${items.filter((item) => item.severity === "high").length} high-risk checks`;
  output.guardrailList.replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = `guardrail-item${item.severity === "high" ? " high" : ""}`;
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const label = document.createElement("span");
      label.className = item.severity === "high" ? "insight-status risk" : "insight-status";
      label.textContent = item.severity === "high" ? "review" : "guardrail";
      header.append(title, label);
      const text = document.createElement("p");
      text.textContent = item.text;
      card.append(header, text);
      return card;
    })
  );
}

function createKeywordCard(titleText, wordsList, status) {
  const card = document.createElement("article");
  card.className = "keyword-card";
  const title = document.createElement("strong");
  title.textContent = titleText;
  const row = document.createElement("div");
  row.className = "keyword-row";
  (wordsList.length ? wordsList : ["No major gaps found"]).forEach((word) => {
    const pill = document.createElement("span");
    pill.className = `keyword-pill ${status}`;
    pill.textContent = word;
    row.append(pill);
  });
  card.append(title, row);
  return card;
}

function renderCoverLetter(bestRole, keywords) {
  const company = inputs.companyName.value.trim() || "your team";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const resumeText = inputs.resumeText.value.trim();
  const topProof = strongestEvidence(currentAnalysis.signals).map((signal) => signal.label.toLowerCase()).join(", ");
  const matchedText = keywords.matched.slice(0, 5).join(", ") || bestRole.strengths.join(", ");
  const mode = getMode();
  const opener =
    mode === "bold"
      ? `I am excited to apply for the ${target} role at ${company} because my background already lines up with the judgment, communication, and execution this work requires.`
      : mode === "concise"
        ? `I am applying for the ${target} role at ${company}. My experience fits the role through ${topProof}.`
        : `I am excited to apply for the ${target} role at ${company}. My background combines ${topProof}, and I am drawn to work that turns messy information into clear, useful decisions.`;

  output.coverLetter.value = `${opener}

In my recent work, I have ${summarizeResume(resumeText)}. That experience connects directly to the role's emphasis on ${matchedText}. I can bring a practical mix of careful review, user empathy, and clear writing to help ${company} make stronger decisions for students, customers, or internal teams.

What makes me a strong candidate is not only that I can use AI and career tools, but that I can use them with judgment. I know how to compare outputs, preserve authentic examples, and translate a role description into specific proof instead of generic application language.

I would welcome the chance to bring this combination of ${bestRole.strengths.join(", ")} to ${company}. Thank you for your time and consideration.`;
}

function renderOutreachMessage(bestRole, keywords) {
  const company = inputs.companyName.value.trim() || "your team";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const top = strongestEvidence(currentAnalysis.signals);
  const proof = top.slice(0, 2).map((signal) => signal.label.toLowerCase()).join(" and ");
  const matched = keywords.matched.slice(0, 3).join(", ") || bestRole.strengths.join(", ");

  output.outreachMessage.value = `Hi ${company} recruiting team,

I am interested in the ${target} role and wanted to share a concise reason I think my background is worth a closer look. My strongest fit is ${bestRole.title}, especially around ${proof}. I have been building career-facing AI tools that turn resume and job-post signals into transparent recommendations, while keeping candidate claims evidence-based and interview-defensible.

The project linked in my application, ${PROJECT_NAME}, demonstrates the same judgment I would bring to the role: it compares job fit, identifies missing evidence, drafts tailored materials, audits generic AI writing, and includes an AI-trainer proof sample with rubric calibration. It connects directly to role signals like ${matched}.

Thank you for considering my application. I would be grateful for the chance to discuss how I can contribute careful evaluation, clear writing, and responsible AI judgment to ${company}.`;
}

function renderErrorTaxonomy(bestRole, signals, keywords) {
  const scenario = currentTrainerScenario();
  const weak = [...signals].sort((a, b) => a.score - b.score)[0];
  const items = scenario.errors.map(([title, description], index) => {
    const score = Math.round(
      clamp(currentAnalysis.readiness - index * 5 + (index === 1 && keywords.missing.length ? -8 : 0), 52, 96)
    );
    return { title, description, score, high: score < 72 || (index === 1 && keywords.missing.length > 0) };
  });
  items.push({
    title: `${weak.label} blind spot`,
    description: `A reviewer should check whether the candidate has enough proof for ${weak.label.toLowerCase()} before treating it as a strength for ${bestRole.title}.`,
    score: weak.score,
    high: weak.score < 62
  });

  output.taxonomySummary.textContent = `${items.length} failure modes`;
  output.errorTaxonomy.replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = `taxonomy-card${item.high ? " high" : ""}`;
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const score = document.createElement("span");
      score.className = item.high ? "insight-status risk" : "rubric-score";
      score.textContent = item.high ? "watch" : `${item.score}%`;
      header.append(title, score);
      const text = document.createElement("p");
      text.textContent = item.description;
      card.append(header, text);
      return card;
    })
  );
}

function renderInterviewDrill(bestRole, signals, keywords) {
  const company = inputs.companyName.value.trim() || "the company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const scenario = currentTrainerScenario();
  const top = strongestEvidence(signals);
  const weak = [...signals].sort((a, b) => a.score - b.score)[0];
  const drills = [
    {
      question: `Why are you a strong fit for ${target} at ${company}?`,
      move: `Lead with ${bestRole.strengths.join(", ")} and name one real example that proves ${top[0].label.toLowerCase()}.`
    },
    {
      question: "Tell me about a time you evaluated two different answers or options.",
      move: `Use a preference-rationale structure: criteria, evidence, decision, tradeoff, and what you would monitor next.`
    },
    {
      question: `How would you handle a model response that ${scenario.weakFault}?`,
      move: `Flag the failure mode, explain the risk, and rewrite toward an answer that is ${scenario.strongTrait}.`
    },
    {
      question: `What is the biggest gap in your profile for ${bestRole.title}?`,
      move: `Name ${weak.label.toLowerCase()} honestly, then describe the project or practice plan you are using to strengthen it.`
    }
  ];

  output.drillSummary.textContent = `${drills.length} questions`;
  output.interviewDrill.replaceChildren(
    ...drills.map((item) => {
      const card = document.createElement("article");
      card.className = "drill-card";
      const header = document.createElement("header");
      const title = document.createElement("strong");
      title.textContent = item.question;
      header.append(title);
      const move = document.createElement("p");
      const label = document.createElement("em");
      label.textContent = "Answer move: ";
      move.append(label, document.createTextNode(item.move));
      card.append(header, move);
      return card;
    })
  );
}

function summarizeResume(text) {
  const lowered = text.toLowerCase();
  const parts = [];
  if (lowered.includes("dashboard") || lowered.includes("data") || lowered.includes("excel")) {
    parts.push("analyzed data and built clearer reporting");
  }
  if (lowered.includes("mentor") || lowered.includes("student") || lowered.includes("support")) {
    parts.push("supported students or users through coaching and follow-through");
  }
  if (lowered.includes("write") || lowered.includes("feedback") || lowered.includes("documentation")) {
    parts.push("written feedback, documentation, and recommendations");
  }
  if (lowered.includes("ai")) {
    parts.push("used AI tools responsibly while checking quality and relevance");
  }
  if (!parts.length) {
    parts.push("built experience that combines communication, ownership, and learning agility");
  }
  return parts.join(", ");
}

function cleanExtractedResumeText(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function setUploadStatus(text, tone = "") {
  if (output.uploadStatus) output.uploadStatus.textContent = text;
  if (resumeDropZone) resumeDropZone.classList.toggle("has-error", tone === "error");
}

async function handleResumeFile(file) {
  if (!file) return;
  setUploadStatus(`Reading ${file.name}...`);
  try {
    const extracted = cleanExtractedResumeText(await extractResumeText(file));
    const totalWords = words(extracted).length;
    if (totalWords < 12) {
      throw new Error("I could not find enough readable resume text. Try DOCX, TXT, or paste the resume text directly.");
    }
    inputs.resumeText.value = extracted;
    analyze();
    saveWorkspace();
    setUploadStatus(`Loaded ${file.name} (${totalWords} words).`);
  } catch (error) {
    setUploadStatus(error.message || "This file could not be read. Try exporting the resume as DOCX or TXT.", "error");
  } finally {
    if (resumeFileInput) resumeFileInput.value = "";
  }
}

async function extractResumeText(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".docx")) return extractDocxText(await file.arrayBuffer());
  if (name.endsWith(".pdf")) return extractPdfText(await file.arrayBuffer());
  const raw = await file.text();
  if (name.endsWith(".rtf") || file.type.includes("rtf")) return stripRtf(raw);
  if (name.endsWith(".txt") || name.endsWith(".md") || file.type.startsWith("text/") || !file.type) return raw;
  throw new Error("Supported resume files are TXT, MD, RTF, DOCX, and text-based PDFs.");
}

function stripRtf(raw) {
  return raw
    .replace(/\\par[d]?/gi, "\n")
    .replace(/\\line/gi, "\n")
    .replace(/\\tab/gi, " ")
    .replace(/\\'[0-9a-f]{2}/gi, (match) => String.fromCharCode(parseInt(match.slice(2), 16)))
    .replace(/\\[a-z]+\d* ?/gi, "")
    .replace(/[{}]/g, " ")
    .replace(/\s+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ");
}

function readUint16(view, offset) {
  return view.getUint16(offset, true);
}

function readUint32(view, offset) {
  return view.getUint32(offset, true);
}

function findEndOfCentralDirectory(view) {
  for (let offset = view.byteLength - 22; offset >= 0; offset -= 1) {
    if (readUint32(view, offset) === 0x06054b50) return offset;
  }
  return -1;
}

function findZipEntry(buffer, entryName) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const decoder = new TextDecoder("utf-8");
  const eocd = findEndOfCentralDirectory(view);
  if (eocd < 0) throw new Error("This DOCX file could not be opened as a resume document.");
  const entryCount = readUint16(view, eocd + 10);
  let offset = readUint32(view, eocd + 16);
  for (let index = 0; index < entryCount; index += 1) {
    if (readUint32(view, offset) !== 0x02014b50) break;
    const method = readUint16(view, offset + 10);
    const compressedSize = readUint32(view, offset + 20);
    const fileNameLength = readUint16(view, offset + 28);
    const extraLength = readUint16(view, offset + 30);
    const commentLength = readUint16(view, offset + 32);
    const localHeaderOffset = readUint32(view, offset + 42);
    const nameStart = offset + 46;
    const name = decoder.decode(bytes.slice(nameStart, nameStart + fileNameLength));
    if (name === entryName) {
      const localFileNameLength = readUint16(view, localHeaderOffset + 26);
      const localExtraLength = readUint16(view, localHeaderOffset + 28);
      const dataStart = localHeaderOffset + 30 + localFileNameLength + localExtraLength;
      return { method, data: bytes.slice(dataStart, dataStart + compressedSize) };
    }
    offset += 46 + fileNameLength + extraLength + commentLength;
  }
  return null;
}

async function inflateZipEntry(entry) {
  if (entry.method === 0) return entry.data;
  if (entry.method !== 8) throw new Error("This DOCX compression format is not supported in the browser.");
  if (!("DecompressionStream" in window)) {
    throw new Error("This browser cannot unpack DOCX files. Try TXT, MD, or paste the resume text.");
  }
  const stream = new Blob([entry.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function extractDocxText(buffer) {
  const entry = findZipEntry(buffer, "word/document.xml");
  if (!entry) throw new Error("I could not find resume text inside this DOCX file.");
  const xml = new TextDecoder("utf-8").decode(await inflateZipEntry(entry));
  return decodeXmlEntities(
    xml
      .replace(/<w:tab\/>/g, " ")
      .replace(/<\/w:p>/g, "\n")
      .replace(/<[^>]+>/g, " ")
  );
}

function decodeXmlEntities(text) {
  const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
  return text
    .replace(/&([a-z]+);/gi, (match, entity) => named[entity] || match)
    .replace(/&#(\d+);/g, (match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (match, code) => String.fromCodePoint(parseInt(code, 16)));
}

function extractPdfText(buffer) {
  const raw = decodePdfBytes(buffer);
  const pieces = [];
  const operators = raw.match(/(?:\((?:\\.|[^\\()])*\)|\[(?:[\s\S]*?)\])\s*T[Jj]/g) || [];
  operators.forEach((operator) => {
    const literalStrings = operator.match(/\((?:\\.|[^\\()])*\)/g) || [];
    literalStrings.forEach((literal) => pieces.push(decodePdfLiteral(literal.slice(1, -1))));
  });
  const directText = cleanExtractedResumeText(pieces.join(" "));
  if (words(directText).length >= 20) return directText;
  const fallback = cleanExtractedResumeText(
    (raw.match(/[A-Za-z][A-Za-z0-9 @.,;:'"()/%&+\-\n]{20,}/g) || []).join(" ")
  );
  if (words(fallback).length >= 20) return fallback;
  throw new Error("This PDF looks scanned or compressed. Upload DOCX/TXT or paste the resume text directly.");
}

function decodePdfBytes(buffer) {
  try {
    return new TextDecoder("latin1").decode(buffer);
  } catch {
    return new TextDecoder("utf-8").decode(buffer);
  }
}

function decodePdfLiteral(value) {
  return value
    .replace(/\\([nrtbf()\\])/g, (match, code) => {
      const map = { n: "\n", r: "\r", t: "\t", b: "\b", f: "\f", "(": "(", ")": ")", "\\": "\\" };
      return map[code] || code;
    })
    .replace(/\\([0-7]{1,3})/g, (match, code) => String.fromCharCode(parseInt(code, 8)));
}

function renderApplicationKit() {
  const { bestRole, keywords, readiness } = currentAnalysis;
  const company = inputs.companyName.value.trim() || "Target Company";
  const target = inputs.targetJob.value.trim() || bestRole.title;
  const bullets = [...output.bulletList.querySelectorAll("li")].map((li) => `- ${li.textContent}`).join("\n");
  const brief = [...output.managerBrief.querySelectorAll(".brief-card")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const companyBrief = [...output.companyBrief.querySelectorAll(".company-card")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const ledger = [...output.evidenceLedger.querySelectorAll(".ledger-row")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const recruiterScan = [...output.recruiterScan.querySelectorAll(".insight-card")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const audit = [...output.letterAudit.querySelectorAll(".insight-card")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const taxonomy = [...output.errorTaxonomy.querySelectorAll(".taxonomy-card")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const interview = [...output.interviewDrill.querySelectorAll(".drill-card")]
    .map((card) => `- ${card.querySelector("strong").textContent} ${card.querySelector("p").textContent}`)
    .join("\n");
  const rubric = [...output.rubricMatrix.querySelectorAll(".rubric-card")]
    .map((card) => `- ${card.querySelector("strong").textContent} (${card.querySelector(".rubric-score").textContent}): ${card.querySelector("p").textContent}`)
    .join("\n");
  const guardrails = [...output.guardrailList.querySelectorAll(".guardrail-item")]
    .map((card) => `- ${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
  const proof = [...output.trainerProof.querySelectorAll(".proof-card")]
    .map((card) => {
      const title = card.querySelector("strong").textContent;
      const list = card.querySelector("ul");
      if (list) return `### ${title}\n${[...list.querySelectorAll("li")].map((li) => `- ${li.textContent}`).join("\n")}`;
      return `### ${title}\n${card.querySelector("p").textContent}`;
    })
    .join("\n\n");
  const scorecard = [...output.evaluationScorecard.querySelectorAll(".scorecard-row")]
    .map((card) => {
      const criterion = card.querySelector("strong").textContent;
      const description = card.querySelector("p").textContent;
      const marks = [...card.querySelectorAll(".scorecard-mark")]
        .map((mark) => `${mark.querySelector("span").textContent}: ${mark.querySelector("strong").textContent}`)
        .join("; ");
      return `- ${criterion}: ${description} (${marks})`;
    })
    .join("\n");
  const proofPack = proofPackText();

  output.applicationKit.value = `# ${PROJECT_NAME} Application Kit

## Target
Company: ${company}
Job title: ${target}
Best-fit role family: ${bestRole.title}
Application readiness: ${readiness}/100

## Resume positioning
Lead with ${bestRole.strengths.join(", ")}. The strongest matched keywords are ${keywords.matched.slice(0, 8).join(", ") || "still developing"}.

## Hiring manager candidate brief
${brief}

## Company match brief
${companyBrief}

## Evidence ledger
${ledger}

## Recruiter seven-second scan
${recruiterScan}

## Tailored resume bullets
${bullets}

## Keywords to add only with real evidence
${keywords.missing.slice(0, 8).map((word) => `- ${word}`).join("\n") || "- No major missing keywords found."}

## Cover letter audit
${audit}

## Cover letter draft
${output.coverLetter.value}

## Recruiter outreach message
${output.outreachMessage.value}

## AI trainer proof of judgment
${proof}

## Model evaluation scorecard
${scorecard}

## Showcase proof pack
${proofPack}

## AI trainer error taxonomy
${taxonomy}

## Rubric calibration matrix
${rubric}

## Application guardrails
${guardrails}

## Interview drill
${interview}

## Interview story prompt
Prepare one example that proves the top resume claim. Use this structure: situation, action, result, and what the company should trust you to do next.`;
}

function drawFitRadar() {
  const canvas = output.fitCanvas;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.round(rect.width * scale));
  const height = Math.max(250, Math.round(310 * scale));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(1, 4, 14, 0.7)";
  context.fillRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2 + 8 * scale;
  const radius = Math.min(width, height) * 0.31;
  const signals = currentAnalysis.signals;

  context.strokeStyle = "rgba(255, 255, 255, 0.16)";
  context.lineWidth = 1 * scale;
  for (let ring = 1; ring <= 4; ring += 1) {
    context.beginPath();
    signals.forEach((signal, index) => {
      const angle = (Math.PI * 2 * index) / signals.length - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius * (ring / 4);
      const y = centerY + Math.sin(angle) * radius * (ring / 4);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.closePath();
    context.stroke();
  }

  context.beginPath();
  signals.forEach((signal, index) => {
    const angle = (Math.PI * 2 * index) / signals.length - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius * (signal.score / 100);
    const y = centerY + Math.sin(angle) * radius * (signal.score / 100);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.closePath();
  context.fillStyle = "rgba(140, 242, 255, 0.2)";
  context.strokeStyle = "#8cf2ff";
  context.lineWidth = 2 * scale;
  context.fill();
  context.stroke();

  context.font = `${11 * scale}px Inter, system-ui, sans-serif`;
  context.fillStyle = "#d9e4ff";
  signals.forEach((signal, index) => {
    const angle = (Math.PI * 2 * index) / signals.length - Math.PI / 2;
    const x = centerX + Math.cos(angle) * (radius + 24 * scale);
    const y = centerY + Math.sin(angle) * (radius + 24 * scale);
    context.textAlign = x < centerX - 5 ? "right" : x > centerX + 5 ? "left" : "center";
    context.fillText(signal.label.split(" ")[0], x, y);
  });
  context.textAlign = "left";
}

function applyExample(name) {
  const example = examples[name];
  inputs.targetJob.value = example.targetJob;
  inputs.companyName.value = example.companyName;
  inputs.resumeText.value = example.resume;
  inputs.jobText.value = example.job;
  inputs.careerDirection.value = example.direction;
  inputs.trainerScenario.value = example.trainerScenario;
  chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.example === name));
  analyze();
  saveWorkspace();
}

function downloadKit() {
  const filename = "solarplexus-project-moonlight-application-kit.md";
  const blob = new Blob([output.applicationKit.value], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function proofText() {
  return [...output.trainerProof.querySelectorAll(".proof-card")]
    .map((card) => {
      const title = card.querySelector("strong").textContent;
      const list = card.querySelector("ul");
      if (list) return `${title}\n${[...list.querySelectorAll("li")].map((li) => `- ${li.textContent}`).join("\n")}`;
      return `${title}\n${card.querySelector("p").textContent}`;
    })
    .join("\n\n");
}

function proofPackText() {
  return [...output.portfolioProofPack.querySelectorAll(".proofpack-card")]
    .map((card) => `${card.querySelector("strong").textContent}: ${card.querySelector("p").textContent}`)
    .join("\n");
}

async function copyText(text, button) {
  const label = button.querySelector("span");
  const original = label.textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.classList.add("copied");
    label.textContent = "Copied";
    window.setTimeout(() => {
      button.classList.remove("copied");
      label.textContent = original;
    }, 1400);
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
}

function setSaveStatus(text) {
  if (saveStatus) saveStatus.textContent = text;
}

function workspaceSnapshot() {
  return {
    targetJob: inputs.targetJob.value,
    companyName: inputs.companyName.value,
    resumeText: inputs.resumeText.value,
    jobText: inputs.jobText.value,
    careerDirection: inputs.careerDirection.value,
    trainerScenario: inputs.trainerScenario.value,
    tailorMode: getMode()
  };
}

function saveWorkspace() {
  if (restoringWorkspace) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workspaceSnapshot()));
    setSaveStatus("Autosaved");
  } catch {
    setSaveStatus("Local only");
  }
}

function scheduleSave() {
  setSaveStatus("Saving...");
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveWorkspace, 260);
}

function restoreWorkspace() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    restoringWorkspace = true;
    inputs.targetJob.value = saved.targetJob || inputs.targetJob.value;
    inputs.companyName.value = saved.companyName || inputs.companyName.value;
    inputs.resumeText.value = saved.resumeText || inputs.resumeText.value;
    inputs.jobText.value = saved.jobText || inputs.jobText.value;
    inputs.careerDirection.value = saved.careerDirection || inputs.careerDirection.value;
    inputs.trainerScenario.value = saved.trainerScenario || inputs.trainerScenario.value;
    const mode = saved.tailorMode || "balanced";
    const radio = document.querySelector(`input[name="tailorMode"][value="${mode}"]`);
    if (radio) radio.checked = true;
    return true;
  } catch {
    return false;
  } finally {
    restoringWorkspace = false;
  }
}

if (resumeUploadButton && resumeFileInput) {
  resumeUploadButton.addEventListener("click", (event) => {
    event.stopPropagation();
    resumeFileInput.click();
  });
}

if (resumeFileInput) {
  resumeFileInput.addEventListener("change", () => {
    handleResumeFile(resumeFileInput.files[0]);
  });
}

if (resumeDropZone && resumeFileInput) {
  resumeDropZone.addEventListener("click", (event) => {
    if (event.target !== resumeUploadButton && event.target !== resumeFileInput) resumeFileInput.click();
  });
  resumeDropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      resumeFileInput.click();
    }
  });
  ["dragenter", "dragover"].forEach((name) => {
    resumeDropZone.addEventListener(name, (event) => {
      event.preventDefault();
      resumeDropZone.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach((name) => {
    resumeDropZone.addEventListener(name, (event) => {
      event.preventDefault();
      resumeDropZone.classList.remove("is-dragging");
    });
  });
  resumeDropZone.addEventListener("drop", (event) => {
    handleResumeFile(event.dataTransfer.files[0]);
  });
}

if (analyzeCompanyButton) {
  analyzeCompanyButton.addEventListener("click", analyzeCompanyTarget);
}

Object.values(inputs).forEach((input) => {
  input.addEventListener("input", () => {
    analyze();
    scheduleSave();
  });
  input.addEventListener("change", () => {
    analyze();
    scheduleSave();
  });
});

document.querySelectorAll('input[name="tailorMode"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    analyze();
    scheduleSave();
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => applyExample(chip.dataset.example));
});

resetButton.addEventListener("click", () => applyExample("career"));
downloadButton.addEventListener("click", downloadKit);
copyBulletsButton.addEventListener("click", () => {
  const bullets = [...output.bulletList.querySelectorAll("li")].map((li) => `- ${li.textContent}`).join("\n");
  copyText(bullets, copyBulletsButton);
});
copyLetterButton.addEventListener("click", () => copyText(output.coverLetter.value, copyLetterButton));
copyOutreachButton.addEventListener("click", () => copyText(output.outreachMessage.value, copyOutreachButton));
copyProofButton.addEventListener("click", () => copyText(proofText(), copyProofButton));
copyProofPackButton.addEventListener("click", () => copyText(proofPackText(), copyProofPackButton));
copyKitButton.addEventListener("click", () => copyText(output.applicationKit.value, copyKitButton));
window.addEventListener("resize", () => {
  if (currentAnalysis) drawFitRadar();
});

if (restoreWorkspace()) {
  chips.forEach((chip) => chip.classList.remove("active"));
  analyze();
  setSaveStatus("Restored");
  window.setTimeout(() => setSaveStatus("Autosaved"), 1400);
} else {
  applyExample("career");
}
