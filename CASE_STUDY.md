# SolaRPlexus Project Moonlight Case Study

## Product summary

SolaRPlexus Project Moonlight is a fully functional browser-based resume analyzer and application-tailoring workspace. It helps users upload or paste a resume, enter a target role and company, review career-fit signals, identify missing evidence, generate application materials, and prepare for interviews.

The product is designed to show software-development and app-creator ability: frontend architecture, career-domain modeling, local file parsing, client-side state management, recommendation logic, data presentation, responsible AI usage checks, and deployed product documentation.

## Problem

Job seekers often have experience but do not know how to translate that experience into a focused application strategy. Generic resume tools can produce vague claims that are hard to defend in an interview. Hiring teams need evidence, not inflated language.

Project Moonlight addresses that by turning resume text and job-post signals into inspectable recommendations, application materials, and AI-trainer-style evaluation artifacts.

## Target users

- Students and early-career job seekers
- Candidates applying to software, AI, operations, support, product, or data roles
- Users who need application materials grounded in real resume evidence
- Reviewers evaluating practical AI-assisted product thinking

## Core features

- Resume upload and pasted-resume analysis
- Job-title and company targeting
- Job-fit comparison across multiple career paths
- Company signal and role targeting support
- Career-readiness feedback
- Application-material drafting support
- Interview preparation prompts
- Responsible AI usage checks
- AI evaluation and rationale-writing exercises
- Local browser autosave
- Exportable application materials
- Premium SolaRPlexus Project Moonlight interface

## Technical architecture

Project Moonlight is a static frontend application deployed through GitHub Pages. It uses local JavaScript logic rather than a backend service.

- `index.html` defines the product interface and input/output panels.
- `styles.css` provides the responsive premium visual system.
- `script.js` contains the resume analysis, role matching, company targeting, application-material generation, state management, autosave, and export logic.
- `QA_REPORT.md` documents verification and stress testing.
- `NOTICE.md` clarifies public access and ownership terms.

The local-first architecture makes the product deployable, inspectable, and safe for portfolio review because resume content does not need to be sent to an external service.

## Engineering decisions

### Local-first privacy

The app performs analysis in the browser. This reduces privacy risk and avoids requiring users to create an account or provide an API key.

### Evidence-first recommendations

The product emphasizes defensible claims, missing evidence, and authenticity checks. It avoids framing generated application content as truth unless the resume supports it.

### Productized career workflow

Instead of only producing a resume score, the app supports the full workflow: resume review, target role, company context, fit explanation, application materials, interview preparation, and AI-evaluation artifacts.

### Portfolio-grade polish

The interface is designed to look like a serious product rather than a basic form. This helps demonstrate product taste, visual hierarchy, and user-experience thinking.

## Quality checks

Manual QA should include:

- Uploading or pasting resume text
- Changing the target job title
- Changing the target company
- Reviewing role-fit cards and readiness metrics
- Checking generated application materials for evidence alignment
- Exporting the application kit
- Testing responsive layout on mobile width
- Confirming saved state restores after refresh

## What this proves to employers

Project Moonlight demonstrates that I can:

- Build a useful live application around a real user workflow
- Turn domain knowledge into product logic
- Design UI around decision support, not only text generation
- Build local-first tools that respect user privacy
- Structure complex output into readable panels and artifacts
- Explain engineering tradeoffs and limitations
- Think like a software developer and app creator

## Current limitations

- The matching engine is local and heuristic-based.
- It does not perform live company research.
- It does not replace human resume judgment or career advising.
- Scanned PDFs may need improved OCR in a future version.
- Generated application content should be edited by the user before submission.

## Next upgrades

- Add saved multi-application workspaces.
- Add stronger scanned-PDF/OCR support.
- Add side-by-side resume version comparison.
- Add a recruiter-view summary export.
- Add unit tests around role matching and evidence extraction.
- Add accessibility audit notes and keyboard-flow testing.
- Add optional LLM-assisted rewriting while keeping source evidence visible.
