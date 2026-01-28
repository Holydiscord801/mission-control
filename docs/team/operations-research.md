# Startup Operations Best Practices
## A Comprehensive Guide for Coreline (Early-Stage SaaS)

*Research compiled for the Operations Brain*

---

## Table of Contents
1. [Operational Frameworks](#1-operational-frameworks)
2. [Process Documentation](#2-process-documentation)
3. [Project Management](#3-project-management)
4. [Communication Systems](#4-communication-systems)
5. [Quality Assurance](#5-quality-assurance)
6. [Customer Operations](#6-customer-operations)
7. [Tools & Tech Stack](#7-tools--tech-stack)
8. [Scaling Prep](#8-scaling-prep)
9. [Quick Wins for Coreline](#9-quick-wins-for-coreline)

---

## 1. Operational Frameworks

### EOS (Entrepreneurial Operating System)

**What it is:** A complete system for running a business, developed by Gino Wickman. Uses six key components: Vision, People, Data, Issues, Process, and Traction.

**Best for:** Companies with 10-250 employees looking for structure.

**For Early-Stage (1-5 people):**
- **Use selectively** — full EOS is overkill for tiny teams
- **Adopt these components:**
  - **Rocks** (90-day priorities) — Pick 3-7 major goals per quarter
  - **L10 Meeting** (Level 10) — Weekly 90-min structured meeting
  - **Scorecard** — 5-15 weekly metrics that tell the health of the business
  - **Issues List (IDS)** — Identify, Discuss, Solve format

**EOS Lite for Startups:**
```
Weekly:
- Review scorecard (15 min)
- Rock check-in (5 min)
- IDS on blockers (30-45 min)

Quarterly:
- Set new Rocks
- Review/update vision
```

**Skip for now:** Accountability charts, people analyzer, process documentation templates (too heavy early on)

---

### OKRs (Objectives & Key Results)

**What it is:** Goal-setting framework from Intel/Google. Objectives are qualitative goals; Key Results are measurable outcomes.

**Structure:**
```
Objective: [Inspiring, qualitative goal]
├── KR1: [Measurable outcome] — Target: X
├── KR2: [Measurable outcome] — Target: Y
└── KR3: [Measurable outcome] — Target: Z
```

**Best Practices for Small Teams:**

1. **Keep it minimal**
   - 1-2 company OKRs per quarter (max)
   - 2-3 Key Results per Objective
   - Don't cascade to individuals until you're 10+ people

2. **Make KRs outcome-based, not task-based**
   - ❌ "Launch email feature"
   - ✅ "50% of active users send at least one email through Coreline"

3. **Score honestly (0.0 - 1.0)**
   - 0.7 = success (stretch goals should be hard)
   - 1.0 = you sandbagged
   - 0.3 = worth discussing what went wrong

4. **Review cadence:**
   - Weekly: 5-min check-in on KR progress
   - Monthly: Deep dive, course correct
   - Quarterly: Score, reflect, set new OKRs

**Example for Coreline:**
```
Q1 Objective: Prove product-market fit with job seekers

KR1: Achieve 40% weekly active user rate (WAU/MAU)
KR2: 25 users organically refer at least 1 friend
KR3: NPS score of 50+ from beta users
```

---

### Agile for Small Teams

**Full Scrum is overkill.** Here's what actually works:

**Lightweight Agile:**

| Practice | Keep | Modify | Skip |
|----------|------|--------|------|
| Sprints | ✅ 1-2 weeks | — | — |
| Daily standup | — | ✅ Async, 3x/week | — |
| Sprint planning | ✅ Keep short (30 min) | — | — |
| Retrospectives | ✅ Bi-weekly | — | — |
| Story points | — | — | ❌ Use T-shirt sizes |
| Velocity tracking | — | — | ❌ Too early |
| Scrum master | — | — | ❌ Everyone owns process |
| Sprint review/demo | ✅ Internal, informal | — | — |

**Kanban Hybrid (Recommended):**
- Simple board: `Backlog → This Week → In Progress → Review → Done`
- WIP limits: Max 2 items "In Progress" per person
- No sprint commitment pressure — pull when ready
- Weekly planning instead of sprint ceremonies

**Shape Up (Basecamp method) — Worth Considering:**
- 6-week cycles with 2-week cooldowns
- "Appetite" instead of estimates ("We'll spend 2 weeks on this, max")
- Gives more creative freedom, less meeting overhead
- Good for product-focused small teams

---

### Framework Recommendation for Coreline

**Hybrid approach:**

```
From EOS:     Rocks (quarterly priorities) + Weekly L10 meetings
From OKRs:    1-2 company objectives with measurable KRs
From Agile:   Kanban board + weekly planning + bi-weekly retros
```

This gives you:
- Strategic alignment (Rocks/OKRs)
- Tactical execution (Kanban)
- Continuous improvement (Retros)
- Minimal overhead

---

## 2. Process Documentation

### The Documentation Paradox

**Problem:** Early startups either:
1. Document nothing → Knowledge in people's heads → Bus factor risk
2. Over-document → Bureaucracy → Nobody reads it → Outdated instantly

**Solution:** Document at the point of pain, not preemptively.

### What to Document (and When)

**Document immediately:**
- How to deploy (even if it's just you)
- How to set up local dev environment
- Customer-facing processes (support, onboarding)
- Anything you've explained twice

**Document when you hire:**
- Role-specific workflows
- Decision-making authority
- Access/permissions setup

**Don't document yet:**
- Internal processes still changing weekly
- "Best practices" you haven't validated
- Anything with exactly one person who does it (they should document it when handing off)

### SOP Structure (Keep it Lean)

**Template:**
```markdown
# [Process Name]

**Purpose:** Why this exists (1 sentence)
**Owner:** Who maintains this doc
**Last updated:** YYYY-MM-DD

## When to use
[Trigger conditions]

## Steps
1. First thing
2. Second thing
   - Sub-detail if needed
3. Third thing

## Common issues
- Problem → Solution
- Problem → Solution

## Related
- Link to related doc
```

**Anti-patterns to avoid:**
- Screenshots that go stale
- Step-by-step for obvious UI actions
- Approval workflows for non-critical processes
- Version history longer than the doc itself

### Runbooks vs SOPs

| Type | Purpose | Example |
|------|---------|---------|
| **SOP** | Regular business process | "How to onboard a new customer" |
| **Runbook** | Technical incident response | "Database is down — what to do" |
| **Playbook** | Strategic guidance | "How to handle an angry customer" |

**Runbook essentials (for SaaS):**
```markdown
# [Incident Type] Runbook

## Symptoms
- What does this look like?

## Severity
- P1/P2/P3 and what that means

## Immediate actions
1. Step one (copy-paste commands if applicable)
2. Step two

## Escalation
- Who to contact if stuck

## Post-incident
- What to document
- Where to log
```

### Documentation Tools Philosophy

**Start simple:**
- GitHub repo with markdown files
- Or Notion (if you prefer GUI)
- One source of truth, not five

**Organize by access pattern:**
```
docs/
├── engineering/        # Dev setup, architecture
├── operations/         # Runbooks, deploys
├── customer/           # Support, onboarding
└── company/            # Policies, culture
```

**Keep docs close to code when possible:**
- README in each service/repo
- Architecture Decision Records (ADRs) in `/docs/decisions/`
- API docs auto-generated from code

---

## 3. Project Management

### For 1-5 Person Teams

**Core principles:**

1. **Visibility over process**
   - Everyone should see what everyone's working on
   - Simple board beats complex tracking

2. **Weekly rhythm**
   - Plan on Monday (or Friday for next week)
   - Ship by Friday
   - Demo/celebrate wins

3. **Ruthless prioritization**
   - If everything's P1, nothing is
   - Maximum 3 priorities per week per person

### Async-First Work

**Why it matters:**
- Deep work requires uninterrupted time
- Small teams can't afford meeting tax
- Documentation improves as a side effect

**Async practices:**

| Instead of... | Do this... |
|--------------|------------|
| Status meeting | Daily async check-in (Slack/Discord) |
| "Got a minute?" | Loom video or written doc |
| Brainstorm meeting | Async doc with comments, then short sync |
| Email thread | Threaded discussion in project tool |

**When to go sync:**
- Conflict resolution
- Complex problem-solving that's ping-ponging
- Relationship building
- Urgent incidents

**Async check-in template:**
```
🔵 Yesterday: [What you shipped]
🟢 Today: [What you're working on]
🔴 Blockers: [What's in your way]
```

### Project Structure

**For features/initiatives:**
```markdown
# [Project Name]

## Goal
One sentence: what does success look like?

## Why now
Why is this the priority?

## Scope
### In scope
- Thing 1
- Thing 2

### Out of scope
- Thing we're explicitly not doing

## Approach
High-level how

## Milestones
- [ ] Milestone 1 — Target: Date
- [ ] Milestone 2 — Target: Date

## Open questions
- Question 1?
- Question 2?
```

### Work Breakdown

**Don't over-engineer:**
- Tasks should be < 1 day of work
- If bigger, break it down
- "Definition of done" for each task

**T-shirt sizing (instead of points):**
- **XS:** < 2 hours
- **S:** Half day
- **M:** 1-2 days
- **L:** 3-5 days (probably should break down)
- **XL:** > 1 week (definitely break down)

---

## 4. Communication Systems

### Internal Communication Architecture

**Principle:** Right channel for right communication type.

| Type | Channel | Example |
|------|---------|---------|
| Urgent/real-time | Slack/Discord | "Site is down" |
| Daily work | Project tool comments | "Updated the spec" |
| Announcements | Email or #general | "New hire starting Monday" |
| Decisions | Decision log | "We chose Postgres over Mongo" |
| Knowledge | Documentation | "How to deploy" |

### Channel Structure (Slack/Discord)

**Keep it minimal:**
```
#general        — Company-wide, important only
#engineering    — Dev discussions
#product        — Features, feedback, roadmap
#support        — Customer issues
#random         — Off-topic, social
#alerts         — Automated (errors, deploys, monitoring)
```

**Anti-patterns:**
- Channel per project (creates ghost towns)
- DMs for work discussions (invisible to team)
- Important decisions in chat (use decision log)

### Decision Logs

**Why:** Decisions made in Slack disappear. Future you will wonder "why did we do X?"

**Format:**
```markdown
# Decision Log

## 2024-01-15: Chose Stripe over Paddle for payments
**Context:** Need payment processing for subscriptions
**Options considered:**
1. Stripe — Industry standard, more complex
2. Paddle — Handles tax, simpler, higher fees
**Decision:** Stripe
**Rationale:** Lower fees at scale, team familiarity, better API
**Decided by:** [Name]
```

**Store in:** `/docs/decisions/` or Notion database

### Meeting Cadence

**Recommended for 1-5 person team:**

| Meeting | Frequency | Duration | Purpose |
|---------|-----------|----------|---------|
| Weekly sync | Weekly | 45-60 min | Priorities, blockers, decisions |
| 1:1s | Weekly/bi-weekly | 30 min | If you have reports |
| Retro | Bi-weekly | 30 min | What's working, what's not |
| Planning | Weekly | 30 min | What are we building this week |

**Skip:**
- Daily standups (async is fine for small teams)
- Sprint reviews (just demo in weekly sync)
- All-hands (you ARE all hands)

**Meeting hygiene:**
- Agenda required (no agenda = no meeting)
- Notes captured and shared
- Decisions documented
- "Could this be async?" is always a valid question

### Communication Norms to Establish

```markdown
## Our Communication Norms

### Response expectations
- Slack: Same business day
- Email: 24-48 hours
- @urgent or @here: Within 1 hour
- If truly urgent: Call/text

### Deep work
- "Do Not Disturb" means DND
- Default to async
- Batch non-urgent questions

### Meetings
- Camera on encouraged, not required
- On time = 5 min early for tech setup
- If you're optional and busy, skip it
```

---

## 5. Quality Assurance

### Testing Strategy for Early SaaS

**The Testing Pyramid (scaled for startups):**

```
        /\
       /  \      E2E Tests (few, critical paths only)
      /----\
     /      \    Integration Tests (more, API/DB boundaries)
    /--------\
   /          \  Unit Tests (many, business logic)
  --------------
```

**What to test first:**
1. **Payment/billing flows** — Money bugs are reputation killers
2. **Authentication** — Security is non-negotiable
3. **Core user journeys** — The happy path
4. **Data integrity** — What breaks if DB is inconsistent?

**What to skip early:**
- 100% coverage goals
- Testing UI layouts
- Testing third-party libraries

### Testing Practices

**Unit tests:**
- Test business logic, not framework code
- Fast, isolated, many
- Run on every commit

**Integration tests:**
- Test boundaries (API endpoints, database queries)
- Use test database, not mocks
- Run on PR merge

**E2E tests:**
- Critical user journeys only (signup, core feature, payment)
- Fragile — keep minimal
- Run before deploy, or nightly

### Release Process

**For early-stage SaaS:**

```
Feature branch → PR → Review → Merge to main → Auto-deploy to staging → Manual promote to prod
```

**Simplified CI/CD:**
1. **On PR:** Lint, test, build
2. **On merge to main:** Deploy to staging
3. **On manual trigger/tag:** Deploy to production

**Deploy checklist:**
```markdown
## Pre-deploy
- [ ] All tests passing
- [ ] Staging tested manually
- [ ] Database migrations reviewed
- [ ] Feature flags configured

## Deploy
- [ ] Run deploy script
- [ ] Watch error monitoring for 15 min
- [ ] Smoke test critical paths

## Rollback plan
- If errors spike: `./rollback.sh` or revert merge and redeploy
```

### Feature Flags

**Use early, even for small teams:**
- Decouple deploy from release
- Easy rollback without code revert
- A/B test when ready
- Progressive rollout to reduce blast radius

**Simple implementation:**
```javascript
// Start with config/env vars
const FLAGS = {
  NEW_DASHBOARD: process.env.FLAG_NEW_DASHBOARD === 'true',
  AI_SUGGESTIONS: process.env.FLAG_AI_SUGGESTIONS === 'true',
};

if (FLAGS.NEW_DASHBOARD) {
  // new code
}
```

**Graduate to:** LaunchDarkly, Flagsmith, or PostHog when you need targeting

### Incident Management

**Severity levels:**
```
P1 - Critical: Site down, data loss, security breach
     Response: Immediately, all hands
     
P2 - High: Major feature broken, significant user impact
     Response: Within 1 hour, during business hours

P3 - Medium: Minor feature broken, workaround exists
     Response: Within 1 business day

P4 - Low: Cosmetic, minor inconvenience
     Response: Normal prioritization
```

**Incident response flow:**
```
Detect → Acknowledge → Triage → Fix → Communicate → Post-mortem
```

**Post-mortem template (blameless):**
```markdown
# Incident Post-Mortem: [Title]

**Date:** YYYY-MM-DD
**Duration:** X hours
**Severity:** P1/P2/P3
**Author:** [Name]

## Summary
One paragraph: what happened, impact, resolution

## Timeline
- HH:MM — First alert
- HH:MM — Acknowledged by [name]
- HH:MM — Root cause identified
- HH:MM — Fix deployed
- HH:MM — Confirmed resolved

## Root cause
What actually broke and why

## Impact
- Users affected: X
- Revenue impact: $Y
- Data affected: None/Describe

## What went well
- Quick detection
- Clear communication

## What could improve
- Monitoring gap
- Runbook was outdated

## Action items
- [ ] Action 1 — Owner — Due date
- [ ] Action 2 — Owner — Due date
```

---

## 6. Customer Operations

### Support Workflows

**Tiered support (even for small teams):**

```
Tier 0: Self-service (docs, FAQ, in-app help)
Tier 1: First response (you, initially)
Tier 2: Technical escalation (eng involvement)
Tier 3: Critical/exec escalation
```

**Support SLA suggestions:**
```
Free tier:      Best effort, async (24-48h)
Paid tier:      < 24h first response
Enterprise:     < 4h first response, dedicated contact
```

**Ticket lifecycle:**
```
New → In Progress → Waiting on Customer → Resolved → Closed (after 7 days)
```

**Tagging for insights:**
```
Category: Bug | Feature Request | How-to | Billing | Account
Product area: Dashboard | Contacts | Email | Mobile
Sentiment: Frustrated | Neutral | Happy
```

### Customer Onboarding

**First impression matters most.** Time to value should be < 10 minutes.

**Onboarding checklist for Coreline:**
```markdown
## Onboarding Flow

### Sign up (< 2 min)
- [ ] Account created
- [ ] Email verified

### First value (< 5 min)
- [ ] First contact added (or imported)
- [ ] First job application logged

### Activation (< 24 hours)
- [ ] Profile completed
- [ ] 5+ contacts added
- [ ] First follow-up reminder set

### Engagement (Week 1)
- [ ] Returned at least 3 times
- [ ] Used one advanced feature
- [ ] Invited a friend (if applicable)
```

**Onboarding communications:**
```
Day 0: Welcome email + quick start guide
Day 1: "Did you try X?" (key feature)
Day 3: Tips email (power user features)
Day 7: Check-in (NPS or feedback ask)
Day 14: "We miss you" if inactive
```

### Feedback Loops

**Sources to monitor:**
- Support tickets (what's confusing/broken)
- NPS surveys (overall sentiment)
- In-app feedback widget (contextual)
- User interviews (deep understanding)
- Usage analytics (what they actually do)
- Social mentions (what they tell others)

**Feedback processing:**
```
Collect → Categorize → Prioritize → Act → Close loop
```

**Close the loop:** When you ship something based on feedback, tell the people who asked for it.

**Feedback tracking:**
```markdown
| Date | Source | Feedback | Category | Action | Status |
|------|--------|----------|----------|--------|--------|
| 1/15 | Support | Can't import CSV | Bug | Fix #123 | Shipped |
| 1/16 | NPS | Love the UI | Positive | — | — |
| 1/17 | Interview | Need calendar sync | Feature | Backlog | Planned Q2 |
```

### Customer Health Scoring

**Simple health score for early stage:**

```
Health = Usage Frequency + Feature Depth + Support Sentiment

Green (Healthy):  Active weekly, using core features, positive interactions
Yellow (At Risk): Declining usage, limited features, neutral/no interaction  
Red (Churn Risk): Inactive 14+ days, or negative support interactions
```

**Track per user/account:**
- Last active date
- Key feature usage
- Support ticket sentiment
- NPS score (if collected)

---

## 7. Tools & Tech Stack

### Recommended Ops Stack for Early SaaS

**Principle:** Best tool is the one you'll actually use. Start simple, upgrade when it hurts.

#### Project Management

| Tool | Best For | Price |
|------|----------|-------|
| **Linear** | Dev-focused teams, fast | Free tier, $8/user |
| **Notion** | All-in-one (docs + tasks) | Free tier, $10/user |
| **GitHub Projects** | Already using GitHub | Free |
| **Height** | AI-powered, modern | Free tier |

**Recommendation:** Linear for eng tasks, Notion for docs/planning. Or just Notion for everything early on.

#### Documentation

| Tool | Best For | Price |
|------|----------|-------|
| **Notion** | Flexible, good for non-devs | Free tier |
| **GitBook** | Developer docs | Free for OSS |
| **GitHub/GitLab** | Code-adjacent docs | Free |
| **Slite** | Simple team wiki | Free tier |

**Recommendation:** Notion for internal, Markdown in repo for technical.

#### Communication

| Tool | Best For | Price |
|------|----------|-------|
| **Slack** | Industry standard | Free tier |
| **Discord** | Startup-friendly, free | Free |
| **Loom** | Async video | Free tier |

**Recommendation:** Discord is underrated for small startups — free, good features.

#### Customer Support

| Tool | Best For | Price |
|------|----------|-------|
| **Intercom** | In-app chat + support | $$$, but good |
| **Crisp** | Budget Intercom | Free tier |
| **Plain** | Modern, API-first | $$ |
| **GitHub Issues** | Open source projects | Free |
| **Email** | Simplest start | Free |

**Recommendation:** Start with email (support@coreline.io). Add Crisp or Intercom when volume justifies.

#### Monitoring & Observability

| Tool | Best For | Price |
|------|----------|-------|
| **Sentry** | Error tracking | Free tier |
| **LogSnag** | Event + error logging | Free tier |
| **Better Stack** | Uptime + logs | Free tier |
| **Posthog** | Analytics + session replay | Free tier |

**Recommendation:** Sentry (errors) + PostHog (analytics) + Better Stack (uptime) = solid free foundation.

#### Automation

| Tool | Best For | Price |
|------|----------|-------|
| **Zapier** | No-code automation | Free tier (limited) |
| **Make** | More powerful, cheaper | Free tier |
| **n8n** | Self-hosted, powerful | Free (self-host) |
| **GitHub Actions** | Dev workflows | Free |

**Recommendation:** GitHub Actions for CI/CD, Zapier/Make for business automation.

#### Internal Tools

| Tool | Best For | Price |
|------|----------|-------|
| **Retool** | Admin panels, internal tools | Free tier |
| **Airplane** | Internal tools for devs | Free tier |
| **Your own code** | Full control | Time |

**Recommendation:** Start with direct database access + simple scripts. Build internal tools when the pain is clear.

### The Minimal Viable Stack

For Coreline right now:
```
Project management:   Linear or Notion
Documentation:        Notion + GitHub markdown
Communication:        Discord + Loom
Customer support:     Email → Crisp when ready
Error tracking:       Sentry
Analytics:            PostHog
Uptime:               Better Stack
CI/CD:                GitHub Actions
Automation:           Make or Zapier
```

---

## 8. Scaling Prep

### What to Build Now That Scales Later

**The "Scale Tax" concept:** Some things are easy to implement early but painful to change later. Some things are fine to defer.

#### Build Now (Low Effort, High Future Value)

**1. Event tracking from day one**
```javascript
// Track everything meaningful
analytics.track('contact_added', { source: 'manual', user_id: userId });
analytics.track('job_applied', { company: companyName, user_id: userId });
```
- Costs nothing to add
- Invaluable for decisions later
- Can't go back in time

**2. Audit logs**
```javascript
// Log state changes
auditLog.record({
  actor: userId,
  action: 'contact.updated',
  resource: contactId,
  changes: { email: { from: old, to: new } },
  timestamp: new Date()
});
```
- Required for enterprise sales
- Debugging superpower
- Simple to implement early

**3. Multi-tenancy architecture**
- Design for multiple workspaces from start
- `workspace_id` on every table
- Avoid rebuilding data model later

**4. Rate limiting and quotas**
- Easy to add, hard to retrofit
- Prevents abuse, enables pricing tiers
- Even simple limits help

**5. Structured logging**
```javascript
logger.info('User action', {
  userId,
  action: 'contact_created',
  contactId,
  timestamp: new Date()
});
```
- JSON, not string interpolation
- Searchable, aggregatable
- Makes debugging possible at scale

#### Defer (Don't Overengineer Yet)

- Microservices (monolith is fine, probably forever)
- Kubernetes (Heroku/Render/Railway are fine)
- Complex caching layers
- Message queues (unless you need them)
- Multiple databases/services
- Custom deployment infrastructure

#### Process Foundations for Scale

**Documentation culture**
- Decisions get written down
- Onboarding doc exists
- Someone could figure things out without you

**Blameless post-mortems**
- Start doing them even for small incidents
- Build the habit before it's critical

**Customer feedback system**
- Know what customers want
- Track requests systematically
- Prioritize based on data

**Metrics dashboards**
- Key metrics visible to everyone
- Review weekly
- Data-informed decisions

### Hiring-Ready Operations

When you hire, what will hurt?

**Things to prepare:**
1. **Dev environment setup guide** — One doc, start to running
2. **Access management** — Know all the services, how to grant/revoke
3. **Decision context** — Why things are the way they are
4. **Codebase tour** — Architecture overview, key files

**Checklist for "ready to hire":**
```markdown
- [ ] New dev can set up environment in < 2 hours
- [ ] Core architecture is documented
- [ ] Known tech debt is listed
- [ ] Deploy process doesn't require tribal knowledge
- [ ] Monitoring would alert new person to issues
```

---

## 9. Quick Wins for Coreline

### Three Immediate Improvements

#### Quick Win #1: Weekly Operating Rhythm (30 min setup)

**What:** Establish a consistent weekly cadence that gives structure without overhead.

**Implementation:**

```markdown
## Coreline Weekly Rhythm

### Monday
- [ ] Review metrics (15 min)
  - Active users this week
  - New signups
  - Support tickets
  - Error rates
- [ ] Set weekly priorities (3 max)

### Daily (async)
- Post what you're working on in #standup
- Flag blockers immediately

### Friday
- [ ] Ship something (even small)
- [ ] Update changelog if user-facing
- [ ] Quick retro: What worked? What didn't?
```

**Why it works:** Creates accountability, ensures weekly reflection, catches problems early.

**Effort:** 30 minutes to set up, 2-3 hours/week to maintain.

---

#### Quick Win #2: "One-Pager" for Every Initiative

**What:** Before building anything significant, write a simple one-pager that forces clarity.

**Template:**

```markdown
# [Initiative Name]

## Problem
What problem are we solving? (2-3 sentences)

## Solution  
What are we building? (2-3 sentences)

## Success Criteria
How do we know it worked?
- Metric 1: Target
- Metric 2: Target

## Scope
What's IN: (bullets)
What's OUT: (bullets)

## Timeline
Target completion: [Date]

## Open Questions
1. Question?
2. Question?
```

**Why it works:**
- Forces you to think before building
- Creates alignment (share with advisors, early users)
- Becomes your decision record
- Takes 15-30 minutes, saves hours of rework

**When to use:** Any feature taking > 2 days of work.

---

#### Quick Win #3: Error and Feedback Pipeline

**What:** Set up a lightweight system to catch errors and customer feedback automatically.

**Implementation:**

1. **Error tracking:** Set up Sentry (free tier, 30 min)
   - Install SDK
   - Configure alerts to Slack/Discord
   - You'll know about errors before users report them

2. **Feedback capture:** Add a simple feedback widget
   - Even a mailto: link works
   - Log all feedback in a simple Notion table:
   
   ```
   | Date | User | Feedback | Category | Action |
   ```

3. **Weekly review:** 15 minutes every Friday
   - Top errors this week
   - Feedback themes
   - One thing to improve

**Why it works:**
- Catch problems before they compound
- Build feedback habit early
- Data for prioritization
- Shows customers you care

**Effort:** 2-3 hours initial setup, 30 min/week maintenance.

---

## Summary: Your First 30 Days of Ops

**Week 1: Foundation**
- [ ] Set up weekly rhythm (Quick Win #1)
- [ ] Install error tracking (Sentry)
- [ ] Create decision log in Notion/docs

**Week 2: Process**
- [ ] Write first one-pager for current initiative
- [ ] Document deployment process
- [ ] Set up feedback tracking

**Week 3: Measurement**
- [ ] Define 5-7 weekly metrics (scorecard)
- [ ] Set up basic analytics dashboard
- [ ] First week with full rhythm

**Week 4: Refine**
- [ ] Run first real retrospective
- [ ] Set quarterly OKRs/Rocks
- [ ] Document first SOP (based on what you repeated)

---

## Appendix: Templates

### A. Weekly Metrics Scorecard

```markdown
# Week of [DATE]

## Health Metrics
| Metric | This Week | Last Week | Target | Status |
|--------|-----------|-----------|--------|--------|
| Active Users | | | | 🟢/🟡/🔴 |
| New Signups | | | | |
| Error Rate | | | | |
| Support Tickets | | | | |
| NPS | | | | |

## Notes
[What stood out this week]
```

### B. Retrospective Template

```markdown
# Retro: [Date]

## What went well? ✅
- 
- 

## What could improve? 🔄
- 
- 

## Action items
- [ ] Action — Owner
- [ ] Action — Owner

## Shoutouts 🎉
- 
```

### C. Meeting Notes Template

```markdown
# [Meeting Name] — [Date]

**Attendees:** 
**Duration:** 

## Agenda
1. Topic 1
2. Topic 2

## Notes
### Topic 1
- Note
- Note

## Decisions
- Decision 1: [What] — [Why]

## Action Items
- [ ] Action — Owner — Due date
```

---

*This document is a living resource. Update it as Coreline's operations evolve.*
