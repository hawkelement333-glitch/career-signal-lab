# Career Signal Lab

Career Signal Lab is an interactive AI portfolio project that helps job seekers turn a target role, a job description, and their own experience into a polished proof-of-work project. It is designed for a Handshake-style project showcase: the demo is useful on its own, but it also makes the builder's AI, product, data, and communication skills visible.

## Why it stands out

- It solves a real career problem: students often know they need a project, but not which project will signal the right skills.
- It shows explainable AI thinking through a skill taxonomy, confidence scoring, and visible recommendations.
- It includes responsible AI considerations: transparency, privacy, evaluation, and human review.
- It creates recruiter-ready output: a signal score, project plan, AI methods, and a showcase pitch.

## Demo

Open `index.html` in a browser. The project runs locally and does not require an account, server, or API key.

Preview screenshots are included as `qa-desktop.png` and `qa-mobile.png`.

## How it works

The prototype uses local natural-language analysis rather than sending user data to an external model. It scans role and profile text for career signals, scores the overlap, recommends an AI project angle, draws a signal map, and creates an exportable pitch.

The current version is intentionally transparent. A production version could add embeddings, retrieval over job posts, richer LLM generation, and user-controlled data storage.

## AI and product skills demonstrated

- Natural-language signal extraction
- Recommendation logic
- Explainable scoring
- Dashboard design
- Human-centered AI guardrails
- Recruiter-facing storytelling
- Frontend implementation with responsive UI

## Suggested showcase title

**Career Signal Lab: an explainable AI tool that turns job goals into proof-of-work projects**

## Suggested showcase description

I built Career Signal Lab to help students create stronger AI portfolio projects. The tool compares a target role, job-post signals, and personal experience, then generates a project concept, skill evidence map, build plan, and recruiter-ready pitch. I focused on transparent AI behavior so users can see why a recommendation was made and decide whether it actually fits their goals.

## Next upgrades

- Add optional LLM generation for more personalized project names and case-study copy.
- Add a job-post parser that extracts skills, tools, seniority, and soft signals.
- Add an evaluation screen where users rate the usefulness of the recommendation.
- Save multiple project drafts in local storage.
- Add screenshots and a one-minute video walkthrough for the final submission.
