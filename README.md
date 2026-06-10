# SolaRPlexus Project Moonlight

SolaRPlexus Project Moonlight is a premium resume analyzer and application-tailoring workspace for students and early-career job seekers. It helps a candidate upload or paste their resume, enter any target company and job title, compare likely job fits, identify missing evidence, rewrite resume bullets, and generate company-specific application materials.

The project is designed for AI project showcases and employer review: it demonstrates AI-assisted career thinking while still emphasizing authentic candidate proof, clear writing, and responsible use of automation. The visual system uses a SolaRPlexus-inspired galaxy interface, glass panels, and signal-rich dashboard elements so the experience feels closer to a funded product than a class prototype.

## Why this project stands out

- It does more than generate text. It analyzes role fit across multiple job families and explains why a role matches the resume.
- It supports real job-search behavior: upload or paste a resume, enter any company, enter a job title, tailor materials.
- It creates a full application kit: best-fit role, resume signal map, tailored bullets, keyword plan, gap planner, interview story, cover letter, and export.
- It is broad enough for many career paths, including AI quality, data, product operations, customer success, marketing, and technical support.
- It includes an AI-trainer proof artifact: scenario selection, a mini response-evaluation task, preferred label, rationale, and calibration rubric.
- It separates claims from proof with a hiring-manager brief, evidence ledger, and application guardrails.
- It creates a recruiter outreach message, interview drill, and AI-trainer error taxonomy so the candidate can prepare beyond the resume.
- It adds a model-evaluation scorecard and showcase proof pack so employers can inspect criterion-level AI judgment.
- It audits generated cover letters for specificity, evidence density, and generic AI-writing risk.
- It includes a universal company matcher that works for any company name, with evidence-safe research prompts instead of fake company claims.
- It reads TXT, Markdown, RTF, DOCX, and many text-based PDF resumes directly in the browser.
- It runs locally, autosaves the workspace in the browser, and does not send resume text to an external service.

## Demo

Open `index.html` in a browser. No install, server, account, or API key is required.

Preview screenshots are included as `qa-desktop.png` and `qa-mobile.png`.

For a portfolio-style explanation of the build, see `project-case-study.md`.
For the latest verification notes, see `QA_REPORT.md`.

## Features

- Resume upload and job-post analyzer
- Best-fit job recommendation across multiple career paths
- Universal company targeting for any company name
- Target job title and company tailoring
- Role match cards across multiple career paths
- Hiring-manager candidate brief
- Evidence ledger for interview-defensible claims
- Recruiter seven-second scan
- Resume signal map and fit radar
- Tailored resume bullet generator
- ATS-style keyword plan
- Skill gap planner
- Interview story builder
- Company-specific cover letter draft
- Recruiter outreach message
- Cover letter authenticity audit
- AI trainer scenario selector
- AI trainer proof-of-judgment lab
- Model evaluation scorecard
- Showcase proof pack
- AI trainer error taxonomy
- Rubric calibration matrix
- Interview drill
- Application integrity guardrails
- Local browser autosave
- Exportable application kit
- SolaRPlexus Project Moonlight premium visual theme

## How it works

The app uses transparent local JavaScript heuristics. It compares resume evidence and job-post language against a role library and signal taxonomy. The output is intentionally inspectable so the candidate can decide what to keep, edit, or remove. The workspace also autosaves locally in the browser so the candidate can refresh without losing their tailoring work.

The cover letter generator synthesizes the resume, target job, and company into a draft, similar to the pattern used by modern premium job-search tools. The company matcher works offline by creating a transparent targeting brief from the company name and role, then asking the user to validate details against the real job post and public company materials. The app also includes an authenticity check so the candidate does not submit generic AI language they cannot defend in an interview.

For AI trainer roles, the app creates a proof-of-judgment artifact: a scenario-specific prompt, two model responses, a preferred label, a rationale, a criterion-level scorecard, and a calibration matrix. This shows that the candidate can evaluate AI output, not just use AI to generate application materials.

## Suggested showcase title

**SolaRPlexus Project Moonlight: a universal resume analyzer that finds your best-fit job and builds a tailored application kit**

## Suggested showcase description

I built SolaRPlexus Project Moonlight to help students turn a resume into a focused application strategy for any company. The app can load a resume file, analyze resume text and job-post signals, recommend the best-fit role family, create a company match brief, build a hiring-manager brief, highlight matched and missing keywords, separate defensible claims from risky ones, create tailored resume bullets, draft a company-specific cover letter and recruiter outreach message, prepare interview prompts, and generate AI-trainer proof artifacts including a preference rationale, evaluation scorecard, error taxonomy, and calibration matrix. I designed it to feel like a premium career tool while keeping the logic transparent and local.

## Skills demonstrated

- Product thinking
- Resume and job-post analysis
- Recommendation logic
- Career coaching UX
- Writing and communication
- Data visualization
- Responsible AI design
- Frontend implementation
- Model response evaluation
- Preference rationale writing

## Future upgrades

- Add saved application kits for multiple jobs.
- Add stronger PDF parsing and scanned-resume OCR.
- Add custom role libraries for specific majors.
- Add reviewer feedback and version history.
- Add optional LLM-assisted rewriting while keeping human edits visible.
