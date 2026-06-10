const skillTaxonomy = [
  {
    id: "ai",
    label: "AI fluency",
    keywords: ["ai", "llm", "prompt", "model", "automation", "classification", "machine learning", "nlp", "integration", "integrations"],
    evidence: "Use AI as a design material, then explain where automation helps and where human review stays important."
  },
  {
    id: "data",
    label: "Data analysis",
    keywords: ["data", "dashboard", "dashboards", "excel", "sql", "python", "metrics", "survey", "analysis", "analytical", "insights"],
    evidence: "Turn messy information into ranked signals, charts, and decisions."
  },
  {
    id: "product",
    label: "Product thinking",
    keywords: ["product", "user", "users", "stakeholder", "stakeholders", "roadmap", "experiment", "prototype", "journey", "workflow", "requirements"],
    evidence: "Define a concrete user, a painful moment, and a measurable product loop."
  },
  {
    id: "communication",
    label: "Communication",
    keywords: ["present", "presented", "explain", "clear", "writing", "story", "stakeholder", "stakeholders", "mentor", "workshop", "documentation"],
    evidence: "Make technical output understandable to recruiters, peers, and non-technical users."
  },
  {
    id: "responsibility",
    label: "Responsible AI",
    keywords: ["responsible", "fair", "bias", "privacy", "accessibility", "inclusive", "transparent", "trust"],
    evidence: "Name risks, design guardrails, and show an evaluation rubric."
  },
  {
    id: "engineering",
    label: "Execution",
    keywords: ["build", "built", "code", "clean code", "app", "apps", "web app", "web apps", "api", "apis", "endpoint", "endpoints", "javascript", "react", "python", "deploy", "github", "github actions", "test", "tests", "reliable", "full-stack"],
    evidence: "Ship a working prototype with a clean demo path and repeatable setup."
  }
];

const examples = {
  product: {
    targetRole: "AI Product Analyst Intern",
    mission: "Helping first-generation students find roles that match their strengths",
    profileNotes:
      "Built a student club dashboard in Python, led peer mentoring workshops, analyzed survey data in Excel, and designed onboarding materials for new members.",
    jobSignals:
      "Looking for someone who can use AI tools, build dashboards, explain insights to stakeholders, work with messy data, and design responsible user experiences.",
    angle: "responsible-ai",
    window: "week"
  },
  data: {
    targetRole: "Data Analyst Intern",
    mission: "Making campus career outcomes easier to understand",
    profileNotes:
      "Cleaned CSV files for a class project, built Tableau dashboards, wrote SQL queries, and presented recommendations to a student affairs team.",
    jobSignals:
      "Seeking analytical interns who can work with SQL, Python, dashboards, communication, business metrics, data quality, and stakeholder questions.",
    angle: "analytics",
    window: "week"
  },
  software: {
    targetRole: "Software Engineering Intern",
    mission: "Helping students turn job posts into practice projects",
    profileNotes:
      "Built a full-stack habit tracker, wrote JavaScript tests, used GitHub Actions, created API endpoints, and enjoy turning vague requirements into tools.",
    jobSignals:
      "Candidates should build reliable web apps, work with APIs, reason about AI integrations, write clean code, test features, and improve user workflows.",
    angle: "automation",
    window: "sprint"
  },
  research: {
    targetRole: "UX Research Intern",
    mission: "Understanding how students evaluate AI career advice",
    profileNotes:
      "Ran five user interviews, synthesized themes in FigJam, wrote research briefs, facilitated workshops, and care about accessibility.",
    jobSignals:
      "Role includes user interviews, survey design, synthesis, product recommendations, inclusive research, AI literacy, and clear storytelling.",
    angle: "ux-research",
    window: "weekend"
  }
};

const angleDetails = {
  "responsible-ai": {
    title: "Opportunity Lens",
    differentiator: "Explainable AI",
    method: "Explainable scoring",
    focus:
      "analyzes a role, compares it with lived experience, and recommends a proof-of-work project with transparent scoring and fairness checks"
  },
  automation: {
    title: "Signal Sprint Agent",
    differentiator: "Useful automation",
    method: "Workflow agent",
    focus:
      "turns a vague career goal into a scoped build plan, reusable tasks, and a demo script that helps job seekers move faster"
  },
  analytics: {
    title: "Career Evidence Dashboard",
    differentiator: "Decision analytics",
    method: "Signal ranking",
    focus:
      "converts role requirements into measurable skill signals and shows where a candidate already has strong evidence"
  },
  "ux-research": {
    title: "AI Career Advice Audit",
    differentiator: "Research insight",
    method: "Human-centered evaluation",
    focus:
      "tests AI-generated career advice against user needs, accessibility expectations, and recruiter-facing clarity"
  }
};

const timelinePlans = {
  weekend: [
    ["Scope", "Pick one target role, collect three job posts, and define the user problem."],
    ["Prototype", "Build the analyzer flow with sample data, skill extraction, and one output screen."],
    ["Package", "Record a short demo, add screenshots, and write the project story."]
  ],
  week: [
    ["Map", "Create the skill taxonomy, sample inputs, and scoring rubric."],
    ["Build", "Design the input flow, signal map, and generated showcase pitch."],
    ["Evaluate", "Test with three roles and compare whether the recommendations feel useful."],
    ["Publish", "Add a README, demo screenshots, and a post for Handshake or LinkedIn."]
  ],
  sprint: [
    ["Research", "Interview two target users and review five job posts for repeated signals."],
    ["Model", "Create extraction rules, confidence scoring, and a responsible AI checklist."],
    ["Prototype", "Build the interactive dashboard and exportable project brief."],
    ["Validate", "Run usability checks, add examples, and refine weak recommendations."],
    ["Launch", "Publish the demo, write the project case study, and share a one-minute walkthrough."]
  ]
};

const inputs = {
  targetRole: document.querySelector("#targetRole"),
  mission: document.querySelector("#mission"),
  profileNotes: document.querySelector("#profileNotes"),
  jobSignals: document.querySelector("#jobSignals"),
  projectAngle: document.querySelector("#projectAngle")
};

const output = {
  projectTitle: document.querySelector("#projectTitle"),
  projectThesis: document.querySelector("#projectThesis"),
  signalScore: document.querySelector("#signalScore"),
  scoreCircle: document.querySelector("#scoreCircle"),
  roleFit: document.querySelector("#roleFit"),
  differentiator: document.querySelector("#differentiator"),
  demoSize: document.querySelector("#demoSize"),
  coverageText: document.querySelector("#coverageText"),
  skillBars: document.querySelector("#skillBars"),
  signalCanvas: document.querySelector("#signalCanvas"),
  timeline: document.querySelector("#timeline"),
  methodList: document.querySelector("#methodList"),
  pitchText: document.querySelector("#pitchText"),
  planPace: document.querySelector("#planPace")
};

const copyButton = document.querySelector("#copyButton");
const downloadButton = document.querySelector("#downloadButton");
const resetButton = document.querySelector("#resetButton");
const chips = Array.from(document.querySelectorAll(".chip"));

function cleanWords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function countMatches(text, keywords) {
  const lowered = text.toLowerCase();
  return keywords.reduce((sum, keyword) => {
    const pattern = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    return sum + (lowered.match(pattern) || []).length;
  }, 0);
}

function getWindow() {
  return document.querySelector('input[name="window"]:checked').value;
}

function setWindow(value) {
  const selected = document.querySelector(`input[name="window"][value="${value}"]`);
  if (selected) selected.checked = true;
}

function analyze() {
  const profileText = `${inputs.profileNotes.value} ${inputs.mission.value}`;
  const jobText = `${inputs.jobSignals.value} ${inputs.targetRole.value}`;
  const combinedText = `${profileText} ${jobText}`;
  const words = cleanWords(combinedText);
  const uniqueWordCount = new Set(words).size;
  const angle = angleDetails[inputs.projectAngle.value];
  const windowValue = getWindow();

  const skillScores = skillTaxonomy.map((skill) => {
    const profileHits = countMatches(profileText, skill.keywords);
    const jobHits = countMatches(jobText, skill.keywords);
    const raw = 26 + profileHits * 17 + jobHits * 13 + (profileHits && jobHits ? 18 : 0);
    const score = Math.max(24, Math.min(98, raw + Math.min(uniqueWordCount, 60) * 0.25));
    return {
      ...skill,
      profileHits,
      jobHits,
      score: Math.round(score)
    };
  });

  const matched = skillScores.filter((skill) => skill.profileHits || skill.jobHits);
  const average = skillScores.reduce((sum, skill) => sum + skill.score, 0) / skillScores.length;
  const topSkillAverage =
    [...skillScores]
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .reduce((sum, skill) => sum + skill.score, 0) / 4;
  const balanceBonus = matched.length * 2.4;
  const roleSpecificBonus = inputs.targetRole.value.trim().length > 8 ? 5 : 0;
  const score = Math.round(
    Math.max(48, Math.min(97, topSkillAverage * 0.82 + average * 0.18 + balanceBonus + roleSpecificBonus))
  );

  renderOutputs({
    angle,
    windowValue,
    skillScores,
    matched,
    score
  });
}

function renderOutputs(state) {
  const role = inputs.targetRole.value.trim() || "target role";
  const mission = inputs.mission.value.trim() || "a real career problem";
  const windowLabel = {
    weekend: "Weekend",
    week: "7 days",
    sprint: "14 days"
  }[state.windowValue];

  output.projectTitle.textContent = state.angle.title;
  output.projectThesis.textContent = `${state.angle.title} ${state.angle.focus} for ${role.toLowerCase()} candidates working on ${mission.toLowerCase()}.`;
  output.signalScore.textContent = state.score;
  output.scoreCircle.style.strokeDashoffset = String(302 - (302 * state.score) / 100);
  output.roleFit.textContent = state.score >= 82 ? "High" : state.score >= 68 ? "Promising" : "Needs proof";
  output.differentiator.textContent = state.angle.differentiator;
  output.demoSize.textContent = windowLabel;
  output.coverageText.textContent = `${state.matched.length} matched signals`;
  output.planPace.textContent =
    state.windowValue === "weekend" ? "weekend build" : state.windowValue === "week" ? "1 week sprint" : "2 week sprint";

  renderSkillBars(state.skillScores);
  renderTimeline(state.windowValue);
  renderMethods(state);
  renderPitch(state);
  drawSignalMap(state);
}

function renderSkillBars(skills) {
  output.skillBars.replaceChildren(
    ...skills.map((skill) => {
      const row = document.createElement("div");
      row.className = "skill-row";

      const header = document.createElement("header");
      const label = document.createElement("span");
      label.textContent = skill.label;
      const value = document.createElement("span");
      value.textContent = `${skill.score}%`;
      header.append(label, value);

      const track = document.createElement("div");
      track.className = "bar-track";
      const fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.style.width = `${skill.score}%`;
      track.append(fill);

      row.append(header, track);
      return row;
    })
  );
}

function renderTimeline(windowValue) {
  const steps = timelinePlans[windowValue];
  output.timeline.replaceChildren(
    ...steps.map(([title, body], index) => {
      const item = document.createElement("li");
      const badge = document.createElement("span");
      badge.textContent = String(index + 1);
      const content = document.createElement("div");
      const heading = document.createElement("strong");
      heading.textContent = title;
      const text = document.createElement("p");
      text.textContent = body;
      content.append(heading, text);
      item.append(badge, content);
      return item;
    })
  );
}

function renderMethods(state) {
  const topSkills = [...state.skillScores].sort((a, b) => b.score - a.score).slice(0, 3);
  const methods = [
    [
      state.angle.method,
      `Rank role signals against profile evidence, then show the reason each score moved.`
    ],
    [
      "Retrieval-ready structure",
      `Store job snippets, user evidence, and recommendations as reusable records for future embedding search.`
    ],
    [
      "Evaluation rubric",
      `Judge the output on clarity, usefulness, privacy, and whether it gives the user a next action.`
    ],
    [
      "Proof signal",
      `Lead with ${topSkills.map((skill) => skill.label.toLowerCase()).join(", ")} in the case study.`
    ]
  ];

  output.methodList.replaceChildren(
    ...methods.map(([title, body]) => {
      const item = document.createElement("li");
      const heading = document.createElement("strong");
      heading.textContent = title;
      const text = document.createElement("p");
      text.textContent = body;
      item.append(heading, text);
      return item;
    })
  );
}

function renderPitch(state) {
  const role = inputs.targetRole.value.trim() || "my target role";
  const mission = inputs.mission.value.trim() || "a real career problem";
  const topSkills = [...state.skillScores].sort((a, b) => b.score - a.score).slice(0, 3);
  const proof = topSkills.map((skill) => skill.label).join(", ");
  const plan = timelinePlans[state.windowValue].map(([title]) => title.toLowerCase()).join(", ");

  output.pitchText.value = `I built ${state.angle.title}, an AI portfolio tool for ${role} candidates. It turns a target role, job-post signals, and personal experience into an explainable project blueprint for ${mission}. The prototype demonstrates ${proof}, with a transparent scoring rubric, a visual signal map, and an exportable pitch recruiters can quickly understand. My build plan focused on ${plan}, so the final demo shows both technical execution and product judgment.`;
}

function drawSignalMap(state) {
  const canvas = output.signalCanvas;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.round(rect.width * scale));
  const height = Math.max(220, Math.round(280 * scale));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fbfdfd";
  context.fillRect(0, 0, width, height);

  const padding = 34 * scale;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.28;
  const colors = ["#007c89", "#d95c44", "#d99b22", "#2f6fad", "#3f8f64", "#172026"];

  context.strokeStyle = "#d9e2e5";
  context.lineWidth = 1 * scale;
  for (let i = 1; i <= 3; i += 1) {
    context.beginPath();
    context.arc(centerX, centerY, radius * (i / 3), 0, Math.PI * 2);
    context.stroke();
  }

  context.font = `${12 * scale}px Inter, system-ui, sans-serif`;
  context.fillStyle = "#5f6f76";
  context.fillText("proof", padding, padding);
  context.fillText("fit", width - padding - 44 * scale, padding);
  context.fillText("story", centerX - 16 * scale, height - padding + 8 * scale);

  state.skillScores.forEach((skill, index) => {
    const angle = (Math.PI * 2 * index) / state.skillScores.length - Math.PI / 2;
    const pointRadius = radius * (0.28 + skill.score / 130);
    const x = centerX + Math.cos(angle) * pointRadius;
    const y = centerY + Math.sin(angle) * pointRadius;

    context.strokeStyle = "rgba(23, 32, 38, 0.22)";
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(x, y);
    context.stroke();

    context.fillStyle = colors[index % colors.length];
    context.beginPath();
    context.arc(x, y, (7 + skill.score / 18) * scale, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = "#172026";
    context.font = `700 ${11 * scale}px Inter, system-ui, sans-serif`;
    const labelX = x + (Math.cos(angle) > 0 ? 12 : -76) * scale;
    const labelY = y + (Math.sin(angle) > 0 ? 18 : -10) * scale;
    context.fillText(skill.label, labelX, labelY);
  });

  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(centerX, centerY, 30 * scale, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#d9e2e5";
  context.stroke();
  context.fillStyle = "#172026";
  context.font = `800 ${18 * scale}px Inter, system-ui, sans-serif`;
  context.textAlign = "center";
  context.fillText(String(state.score), centerX, centerY + 6 * scale);
  context.textAlign = "start";
}

function applyExample(name) {
  const example = examples[name];
  inputs.targetRole.value = example.targetRole;
  inputs.mission.value = example.mission;
  inputs.profileNotes.value = example.profileNotes;
  inputs.jobSignals.value = example.jobSignals;
  inputs.projectAngle.value = example.angle;
  setWindow(example.window);
  chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.example === name));
  analyze();
}

function downloadPitch() {
  const filename = `${output.projectTitle.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-showcase-pitch.md`;
  const markdown = `# ${output.projectTitle.textContent}\n\n${output.pitchText.value}\n\n## Build Plan\n\n${Array.from(output.timeline.querySelectorAll("li"))
    .map((item) => {
      const title = item.querySelector("strong").textContent;
      const body = item.querySelector("p").textContent;
      return `- **${title}:** ${body}`;
    })
    .join("\n")}\n\n## AI Methods\n\n${Array.from(output.methodList.querySelectorAll("li"))
    .map((item) => {
      const title = item.querySelector("strong").textContent;
      const body = item.querySelector("p").textContent;
      return `- **${title}:** ${body}`;
    })
    .join("\n")}\n`;

  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function copyPitch() {
  try {
    await navigator.clipboard.writeText(output.pitchText.value);
    copyButton.classList.add("copied");
    copyButton.lastChild.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.lastChild.textContent = "Copy";
    }, 1400);
  } catch {
    output.pitchText.select();
    document.execCommand("copy");
  }
}

Object.values(inputs).forEach((input) => {
  input.addEventListener("input", analyze);
  input.addEventListener("change", analyze);
});

document.querySelectorAll('input[name="window"]').forEach((radio) => {
  radio.addEventListener("change", analyze);
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => applyExample(chip.dataset.example));
});

copyButton.addEventListener("click", copyPitch);
downloadButton.addEventListener("click", downloadPitch);
resetButton.addEventListener("click", () => applyExample("product"));
window.addEventListener("resize", analyze);

analyze();
