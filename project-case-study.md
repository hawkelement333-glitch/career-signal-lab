# SolaRPlexus Case Study

## One-line summary

SolaRPlexus is a resume analyzer that helps job seekers find their best-fit role, tailor their resume, generate a company-specific cover letter, and produce an AI-trainer proof-of-judgment sample.

## Problem

Students are often told to "tailor your resume," but that advice is vague. Many candidates do not know which jobs fit their background, which keywords are missing, or how to write a cover letter that sounds specific instead of AI-generated.

## Product solution

I built a local web app that turns resume notes and job-post language into a complete application strategy. The app recommends role families, scores resume signals, identifies matched and missing keywords, creates a hiring-manager brief, separates claims from evidence, creates tailored bullets, drafts a recruiter outreach message, prepares interview prompts, audits cover-letter believability, generates a model-evaluation scorecard, packages a showcase proof pack, and exports a complete application kit. The interface borrows the premium galaxy-and-glass direction from Solarplexus so the product feels more like an investor-backed career cockpit than a simple form.

## Why it is useful

The product helps a candidate move from uncertainty to action:

- Which jobs fit me best?
- What proof should I lead with?
- Which keywords are missing?
- How do I tailor my resume without exaggerating?
- How do I write a cover letter for this company?
- How do I show AI-trainer judgment, not just AI usage?

## AI trainer angle

The Proof of Judgment Lab creates a small model-evaluation work sample. It lets the user choose scenarios such as response quality, hallucination checking, instruction following, fairness, and safety. It then gives a prompt, two model responses, a preferred label, a rationale, a criterion-level evaluation scorecard, an error taxonomy, and a rubric calibration matrix. This demonstrates skills that matter for AI trainer roles: evaluating output quality, spotting generic claims, tagging failure modes, writing preference rationales, and grounding feedback in evidence.

## Responsible AI choices

- The app runs locally and does not send resume text to external services.
- It shows matched and missing keywords instead of hiding the scoring.
- It warns users not to add keywords unless they have real evidence.
- It includes an evidence ledger and guardrails that separate true proof from unsupported claims.
- It audits cover letters for generic AI-writing risk.
- It autosaves locally in the browser instead of sending resume text to an external service.
- It encourages candidates to keep claims interview-defensible.

## What I would improve next

- Add PDF resume upload.
- Add saved application kits for multiple companies.
- Add a custom rubric editor for different industries.
- Add reviewer comments from mentors or career coaches.
- Add optional LLM-assisted rewriting with visible human edits.

## Skills demonstrated

- Product strategy
- Career coaching UX
- Resume and job-post signal extraction
- Recommendation logic
- Data visualization
- Responsible AI design
- AI response evaluation
- Preference rationale writing
- Frontend implementation
