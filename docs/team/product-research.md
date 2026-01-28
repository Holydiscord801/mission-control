# Product Management Brain: Coreline
## B2C SaaS Job Seeker CRM & Chrome Extension

*Comprehensive product management frameworks and best practices tailored for Coreline*

---

## Table of Contents
1. [Product Frameworks](#1-product-frameworks)
2. [User Research](#2-user-research)
3. [Roadmap Management](#3-roadmap-management)
4. [Feature Prioritization](#4-feature-prioritization)
5. [UX Best Practices](#5-ux-best-practices-b2c-saas)
6. [Chrome Extension Best Practices](#6-chrome-extension-best-practices)
7. [Analytics & Metrics](#7-analytics--metrics)
8. [Iteration Cycles](#8-iteration-cycles)
9. [Quick Wins for Coreline](#9-quick-wins-for-coreline)

---

## 1. Product Frameworks

### Jobs-to-be-Done (JTBD)

**Core Principle:** People don't buy products—they "hire" them to get a job done.

#### The Framework
```
When [situation], I want to [motivation], so I can [expected outcome].
```

#### Coreline JTBD Examples

**Functional Jobs:**
- "When I find a job posting, I want to save it quickly so I can review and apply later without losing it."
- "When I'm preparing for an interview, I want to see all my notes about this company so I can appear informed."
- "When I've applied to many jobs, I want to track which stage each is at so I don't miss follow-ups."

**Emotional Jobs:**
- "When job searching feels overwhelming, I want to feel organized and in control so I don't give up."
- "When I get rejected, I want to see my progress so I stay motivated."

**Social Jobs:**
- "When asked about my job search, I want to demonstrate I'm being methodical so others see me as proactive."

#### Applying JTBD to Coreline
1. **Interview users about their last job search** (not about your product)
2. **Map the timeline:** What triggered the search? What tools did they use? What frustrated them?
3. **Identify struggling moments:** Where did they feel lost, anxious, or disorganized?
4. **Find competing solutions:** Spreadsheets, Notion, sticky notes, Huntr, memory

**Key Insight:** Job seekers aren't hiring a "CRM"—they're hiring peace of mind, organization, and hope.

---

### Kano Model

**Purpose:** Categorize features by customer satisfaction impact.

#### The Five Categories

| Category | Description | Coreline Examples |
|----------|-------------|-------------------|
| **Must-Be (Basic)** | Expected. Absence causes dissatisfaction; presence doesn't delight | Save jobs, basic tracking, login/auth |
| **One-Dimensional (Performance)** | More is better. Linear satisfaction | Faster extension, more integrations |
| **Attractive (Delighters)** | Unexpected features that create delight | AI interview prep, salary negotiation tips |
| **Indifferent** | No impact on satisfaction | Themes/colors, unnecessary customization |
| **Reverse** | Causes dissatisfaction when present | Overly complex features, excessive notifications |

#### Kano Survey Method
Ask two questions per feature:
1. "How would you feel if this feature **existed**?" (Functional)
2. "How would you feel if this feature **didn't exist**?" (Dysfunctional)

**Response Scale:** Like it / Expect it / Neutral / Can tolerate / Dislike it

#### Application Strategy
1. **Nail the Must-Bes first** — these are table stakes
2. **Compete on Performance** — where users compare you to Huntr
3. **Sprinkle in Delighters** — create differentiation and word-of-mouth
4. **Ruthlessly cut Indifferents** — they waste resources
5. **Avoid Reverse features** — simplicity wins

---

### RICE Prioritization

**Components:**
- **R**each — How many users will this impact per quarter?
- **I**mpact — How much will it move the needle? (3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal)
- **C**onfidence — How sure are we about estimates? (100%, 80%, 50%)
- **E**ffort — Person-weeks to complete

**Formula:**
```
RICE Score = (Reach × Impact × Confidence) / Effort
```

#### Example Scoring for Coreline

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| LinkedIn auto-save | 5000 | 3 | 80% | 3 weeks | 4000 |
| Email reminders | 3000 | 2 | 90% | 2 weeks | 2700 |
| Mobile app | 2000 | 2 | 50% | 12 weeks | 167 |
| Dark mode | 4000 | 0.5 | 100% | 1 week | 2000 |

#### RICE Tips
- **Be honest about Confidence** — gut feelings get 50%
- **Standardize Effort units** — person-weeks, not "sprints"
- **Review quarterly** — Reach changes as you grow
- **RICE is a starting point** — not a dictator

---

## 2. User Research

### Continuous Discovery Habits

**The Weekly Cadence:**
- Talk to 1-2 users per week (minimum)
- 30-minute calls, not 60-minute interrogations
- Focus on recent behavior, not hypotheticals

#### Interview Framework

**Opening (5 min):**
> "Tell me about your current job search. How's it going?"

**Timeline Mapping (15 min):**
> "Walk me through the last time you found a job you wanted to apply for. What happened next?"

**Pain Points (10 min):**
> "What's the most frustrating part of tracking your applications?"

**Close:**
> "Is there anything I didn't ask that you think I should know?"

### Feedback Collection Methods

| Method | Best For | Frequency | Effort |
|--------|----------|-----------|--------|
| In-app surveys (NPS, CSAT) | Quantitative pulse | Ongoing | Low |
| User interviews | Deep understanding | Weekly | Medium |
| Session recordings (FullStory, Hotjar) | UX friction | Ongoing | Low |
| Support ticket analysis | Common pain points | Weekly | Low |
| Feature request tracking | Demand signals | Ongoing | Low |
| Social listening (Reddit, Twitter) | Unfiltered feedback | Weekly | Medium |
| Beta testing groups | Validation | Per feature | Medium |

### Synthesis Framework

**Atomic Research Method:**
1. **Observations** — What did you see/hear? (Fact)
2. **Insights** — What does it mean? (Interpretation)
3. **Opportunities** — What could we do? (Action)

**Example:**
- **Observation:** "User spent 3 minutes trying to edit a saved job's status"
- **Insight:** The status change flow is buried and unintuitive
- **Opportunity:** Add quick-status buttons to the job card

### Building a Research Repository

Create a simple database (Notion, Airtable) with:
- Date
- User segment (job seeker type, experience level)
- Theme/topic
- Verbatim quote
- Insight
- Linked opportunities

**Review monthly** to spot patterns and prioritize.

---

## 3. Roadmap Management

### Roadmap Types

| Type | Audience | Time Horizon | Detail Level |
|------|----------|--------------|--------------|
| **Now/Next/Later** | Internal team | 3-6 months | Themes + specific features |
| **Outcome-Based** | Stakeholders | 6-12 months | Goals, not features |
| **Release Plan** | Engineering | 2-6 weeks | Sprint-level detail |

### Now/Next/Later (Recommended for Early-Stage)

**NOW (This Quarter):**
- Committed work in active development
- High confidence, specific features
- Example: "Ship Chrome extension v2 with auto-save"

**NEXT (Next Quarter):**
- Validated problems we'll solve
- Medium confidence, directional
- Example: "Improve interview preparation experience"

**LATER (Future):**
- Ideas we're exploring
- Low confidence, themes only
- Example: "Networking and referral features"

### Communicating Roadmaps

**To Users:**
- Share themes, not dates
- "We're working on making job saving faster"
- Never promise specific features with deadlines

**To Team:**
- Share context and rationale
- "We're prioritizing X because user research shows Y"
- Include confidence levels

**Changelog Best Practices:**
- Ship a public changelog (mandatory for SaaS)
- Celebrate wins, frame improvements
- Link to relevant help docs

### Roadmap Review Cadence
- **Weekly:** Progress check (standup level)
- **Monthly:** Reprioritization based on learnings
- **Quarterly:** Major strategy review

---

## 4. Feature Prioritization

### Multi-Framework Approach

Use different frameworks for different decisions:

| Decision Type | Best Framework |
|---------------|----------------|
| What problem to solve | JTBD + Customer Pain Mapping |
| Which solution to build | Kano Model + RICE |
| When to build it | Effort vs. Impact Matrix |
| Should we build it at all | Opportunity Scoring |

### Opportunity Scoring (Teresa Torres)

For each opportunity/problem:
1. **Opportunity Size** — How many users affected? How painful?
2. **Market Factors** — Competitors solving this? Table stakes?
3. **Company Factors** — Strategic alignment? Technical feasibility?
4. **Evidence Strength** — How many sources validate this?

### Impact vs. Effort Matrix

```
High Impact, Low Effort  →  DO FIRST (Quick Wins)
High Impact, High Effort →  PLAN CAREFULLY (Big Bets)
Low Impact, Low Effort   →  FILL-INS (Nice to Have)
Low Impact, High Effort  →  DON'T DO (Time Sinks)
```

### Feature Request Triage

When you receive a request:
1. **Clarify the problem** — "What are you trying to accomplish?"
2. **Validate demand** — How many others have asked?
3. **Assess fit** — Does this align with our vision?
4. **Estimate effort** — Quick win or major initiative?
5. **Log it** — Even if you won't build it

**Response Template:**
> "Thanks for this suggestion! I've logged it. We're currently focused on [theme], but this aligns with some future plans around [related area]."

---

## 5. UX Best Practices (B2C SaaS)

### Onboarding Flow Design

#### The First 5 Minutes Matter Most

**Progressive Onboarding Principles:**
1. **Time-to-Value < 60 seconds** — Get users to their first "aha" moment fast
2. **Single focus per screen** — Don't overwhelm with choices
3. **Show, don't tell** — Interactive > video > text
4. **Defer account creation** — Let them experience value first
5. **Celebrate progress** — Confetti, checkmarks, encouragement

#### Coreline Onboarding Flow (Suggested)

```
1. Install extension → Immediate success message
2. Visit any job board → "Save this job" prompt appears
3. Click save → Job saved with satisfying animation
4. Prompt to view dashboard (but don't force)
5. Dashboard shows saved job → "You're organized!"
6. Suggest adding status/notes (optional)
7. Email capture for reminders (value-forward: "We'll remind you to follow up")
```

### Engagement Loops

**Core Loop for Job Seekers:**
```
Trigger → Action → Variable Reward → Investment

Example:
Email: "3 applications need follow-up" → 
User opens app → 
Sees organized view (clarity reward) → 
Updates statuses, adds notes (investment) →
More committed to platform
```

#### Hook Model Components

| Component | Coreline Implementation |
|-----------|------------------------|
| **Trigger** | Extension icon badge, email reminders, browser notification |
| **Action** | Save job, update status, add note |
| **Variable Reward** | Progress stats, streak counter, interview tips |
| **Investment** | Time spent organizing, data entered, habits formed |

### B2C SaaS UX Patterns

**Empty States:**
- Never show blank screens
- Provide clear first action: "Save your first job to get started"
- Include example/sample data option

**Dashboard Design:**
- Lead with most important metric (Active Applications)
- Show recent activity (last 5 actions)
- Surface actionable items (needs follow-up, interviews this week)
- Avoid vanity metrics

**Microcopy:**
- Conversational, not corporate
- "You're doing great" > "3 applications submitted"
- Reduce anxiety around job search

**Loading States:**
- Skeleton screens > spinners
- Optimistic UI updates where possible

### Mobile Responsiveness
- Job seekers check on phones (69% mobile job searches)
- Touch-friendly tap targets (44px minimum)
- Swipe actions for quick updates
- Consider PWA before native app

---

## 6. Chrome Extension Best Practices

### Extension UX Principles

**Seamless Integration:**
- Work within the user's workflow, don't interrupt it
- LinkedIn, Indeed, Glassdoor are primary contexts
- Appear when relevant, disappear when not

**Performance:**
- Extension code runs on every page—optimize aggressively
- Lazy load non-critical features
- Minimal permissions = minimal friction

### Permission Strategy

| Permission | User Concern | Mitigation |
|------------|--------------|------------|
| `tabs` | "Can read all my browsing" | Request only when needed, explain why |
| `storage` | Minimal concern | Standard |
| `host_permissions` | "Why this site?" | Limit to job boards, not `<all_urls>` |
| `cookies` | High concern | Avoid if possible |

**Best Practice:** Start with minimal permissions, request more contextually with explanation.

#### Permission Request Copy Examples:
> ✓ "Allow access to LinkedIn to auto-save job posts"
> ✗ "This extension needs access to all websites"

### Content Script Design

**Auto-Detection Patterns:**
- Detect job posting pages via URL patterns + DOM heuristics
- Inject save button near "Apply" button
- Float UI that doesn't obstruct critical page elements

**Visual Design:**
- Match host site's general aesthetic
- Use consistent, recognizable brand element
- Subtle until interacted with

### Chrome Web Store Optimization

**Listing Essentials:**
1. **Title:** Include primary keyword ("Coreline - Job Application Tracker")
2. **Description:** Lead with benefit, include keywords naturally
3. **Screenshots:** Show real use cases, annotate features
4. **Demo video:** 30-60 seconds, no audio required
5. **Category:** Productivity

**Ratings Strategy:**
- Prompt for review after positive interaction (successful save #5)
- Never interrupt flow to ask for rating
- Respond to all negative reviews promptly

**Keywords to Target:**
- Job application tracker
- Job search organizer
- Application management
- Job hunting tool
- Career management

### Technical Best Practices

```javascript
// Manifest V3 compliance (required)
// Service worker instead of background page
// Use chrome.storage instead of localStorage
// Limit content script injection
```

**Update Strategy:**
- Small, frequent updates (weekly if possible)
- Clear changelog in store listing
- Test on multiple sites before publish

---

## 7. Analytics & Metrics

### Core Metrics Stack

#### Acquisition Metrics
| Metric | Definition | Target |
|--------|------------|--------|
| Extension installs | Chrome store downloads | Growth focus |
| Activation rate | % who save 1+ jobs within 7 days | >60% |
| Signup conversion | % installs → registered accounts | >40% |

#### Engagement Metrics
| Metric | Definition | Target |
|--------|------------|--------|
| DAU/MAU | Daily active / Monthly active | >20% (sticky) |
| Jobs saved/week | Avg jobs saved per active user | >5 |
| Feature adoption | % using key features (notes, reminders) | Track per feature |
| Session frequency | Visits per user per week | >3 |

#### Retention Metrics
| Metric | Definition | Target |
|--------|------------|--------|
| D1/D7/D30 retention | % returning after 1/7/30 days | D7 >40%, D30 >20% |
| Churn rate (if paid) | % canceling per period | <5% monthly |
| Resurrection rate | % churned returning | Track trends |

#### Revenue Metrics (if applicable)
| Metric | Definition |
|--------|------------|
| ARPU | Average revenue per user |
| LTV | Lifetime value |
| CAC | Customer acquisition cost |
| LTV:CAC ratio | Should be >3:1 |

### Cohort Analysis

**Weekly Cohorts by Signup Date:**
Track how each cohort behaves over time:
- Week 0: 100% (all signed up)
- Week 1: 65% still active
- Week 4: 35% still active
- Week 12: 20% still active

**Identify:**
- Is retention improving over time? (Product-market fit signal)
- Which cohorts retain best? (What changed?)
- Where's the biggest drop-off? (Fix that week)

### Event Tracking Schema

**Essential Events:**
```
extension_installed
extension_uninstalled (with reason if available)
user_signed_up
job_saved {source: "linkedin"|"indeed"|"manual", ...}
job_status_changed {from, to}
note_added
reminder_set
reminder_completed
dashboard_viewed
interview_scheduled
application_submitted
```

**Tracking Tools:**
- **Product Analytics:** Amplitude, Mixpanel, PostHog (open source)
- **Session Recording:** FullStory, Hotjar, LogRocket
- **Extension Analytics:** Custom events via background service worker

### North Star Metric

For Coreline, consider:

**"Weekly Jobs Actively Tracked"**

Why this works:
- Measures core value delivery
- Leading indicator of retention
- Actionable (can improve via UX, reminders, etc.)
- Easy to understand

Alternative options:
- "Users with 3+ active applications" (engagement depth)
- "Follow-ups completed per week" (action-focused)

---

## 8. Iteration Cycles

### Ship Fast, Learn Fast

#### Two-Week Cycle (Recommended)

**Week 1:**
- Mon-Tue: Plan sprint, finalize scope
- Wed-Fri: Build core feature

**Week 2:**
- Mon-Wed: Polish, QA, edge cases
- Thu: Internal review, bug fixes
- Fri: Ship to production (or staged rollout)

#### Continuous Discovery + Delivery

Run discovery and delivery in parallel:

| Discovery (PM focus) | Delivery (Eng focus) |
|----------------------|----------------------|
| Interview users | Build current sprint |
| Analyze data | Fix bugs |
| Prototype solutions | Technical debt |
| Validate ideas | Ship features |

### Build-Measure-Learn

**Build:** Ship the smallest version that tests your hypothesis
**Measure:** Track the specific metric that validates/invalidates
**Learn:** Document learnings, decide to persevere or pivot

**Example:**
- **Hypothesis:** Users will save more jobs if we show a streak counter
- **Build:** Simple streak badge in extension popup
- **Measure:** Jobs saved/week for test vs. control
- **Learn:** Streak increased saves by 15% → keep and improve

### Feature Flags & Staged Rollouts

**Rollout Strategy:**
1. **Internal/Dogfooding:** Team tests first
2. **Beta users:** 5% of users (power users who opted in)
3. **Gradual rollout:** 10% → 25% → 50% → 100%
4. **Monitor:** Error rates, support tickets, metrics

**Tools:** LaunchDarkly, Split, Flagsmith, or simple config flags

### Retrospectives

**Every 2 weeks, ask:**
1. What shipped that we're proud of?
2. What took longer than expected? Why?
3. What did we learn from users this cycle?
4. What should we do differently next cycle?

---

## 9. Quick Wins for Coreline

### Based on competitor analysis (Huntr) and B2C SaaS best practices:

---

### Quick Win #1: Smart Job Save Auto-Detection

**Problem:** Users manually copying job details is tedious and creates friction.

**Solution:** Intelligent content script that:
- Detects when user is on a job posting page
- Shows floating "Save to Coreline" button near the Apply button
- Auto-extracts: Job title, company, salary (if shown), location, URL
- One-click save with confirmation animation

**Implementation:**
- URL pattern matching for major job boards
- DOM selectors for each site (LinkedIn, Indeed, Glassdoor, etc.)
- Fallback: Manual "save this page" option

**Effort:** 1-2 weeks
**Impact:** Dramatically reduces friction for core use case

---

### Quick Win #2: Follow-Up Reminder System

**Problem:** Job seekers apply and forget. They miss follow-up opportunities and feel disorganized.

**Solution:** Automated follow-up prompts:
- After saving a job: "Want a reminder to apply?"
- After marking "Applied": "Set follow-up reminder for 1 week?"
- Email/browser notification: "Time to follow up with [Company]"
- Dashboard section: "Needs Attention (3 jobs)"

**Implementation:**
- Simple scheduling system (cron + email service)
- Extension badge showing "3" when follow-ups due
- Dashboard highlight section

**Effort:** 1-2 weeks
**Impact:** High engagement + retention driver (brings users back)

---

### Quick Win #3: Progress Dashboard with Motivation

**Problem:** Job searching is demoralizing. Users feel like they're spinning their wheels.

**Solution:** Dashboard that celebrates progress:
- **Metrics that feel good:**
  - "12 applications this month" (not "4 rejections")
  - "3-day streak of job hunting"
  - "You've leveled up: Active Seeker 🎯"
- **Visual progress:**
  - Funnel visualization: Saved → Applied → Interviewing → Offers
  - Weekly activity graph
- **Contextual tips:**
  - "Most users hear back within 2 weeks—hang in there!"
  - "Tuesday is the best day to apply"

**Implementation:**
- Aggregate existing data into dashboard widgets
- Simple gamification (streaks, badges)
- Encouraging microcopy

**Effort:** 1 week
**Impact:** Emotional differentiation, retention, word-of-mouth

---

## Appendix: Recommended Tools

| Category | Tools |
|----------|-------|
| **Product Analytics** | Amplitude, PostHog, Mixpanel |
| **Session Recording** | FullStory, Hotjar |
| **User Research** | Grain, Dovetail, Notion |
| **Roadmapping** | Linear, Productboard, Notion |
| **Feature Flags** | LaunchDarkly, Flagsmith |
| **Feedback Collection** | Canny, Productboard, Typeform |
| **A/B Testing** | Split, Statsig |

---

## Appendix: Huntr Competitive Analysis Notes

**What Huntr does well:**
- Clean, visual Kanban board for job tracking
- Chrome extension with auto-save
- Contact management (networking)
- Interview prep notes

**Opportunities to differentiate:**
- Better auto-detection (more job boards, better extraction)
- Emotional UX (motivation, progress celebration)
- Smarter reminders/follow-ups
- AI-powered features (resume tailoring, interview prep)
- Simpler pricing (freemium with generous free tier)

---

*Last updated: 2025-01-XX*
*Version: 1.0*
