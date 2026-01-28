# Coreline Legal Research Report
## Startup Legal Best Practices for a B2C SaaS (Job Seeker CRM)

> ⚠️ **DISCLAIMER**: This document is for informational purposes only and does not constitute legal advice. Always consult a qualified attorney for legal decisions specific to your business.

---

## Table of Contents
1. [Business Structure](#1-business-structure)
2. [Terms of Service](#2-terms-of-service)
3. [Privacy Policy](#3-privacy-policy)
4. [Data Scraping Legality](#4-data-scraping-legality) ⚠️ HIGH RISK AREA
5. [Intellectual Property](#5-intellectual-property)
6. [User Agreements](#6-user-agreements)
7. [Compliance Basics](#7-compliance-basics)
8. [Contractor Agreements](#8-contractor-agreements)
9. [3 Quick Wins](#9-three-quick-wins)

---

## 1. Business Structure

### LLC vs C-Corp: The Decision Matrix

| Factor | LLC | C-Corp |
|--------|-----|--------|
| **Taxation** | Pass-through (profits taxed once on personal return) | Double taxation (corporate + dividend) |
| **Raising VC Funding** | ❌ Complex, VCs rarely invest | ✅ Standard structure VCs expect |
| **Equity Compensation** | Complex (profit interests, capital accounts) | ✅ Clean stock options (ISOs, NSOs) |
| **Flexibility** | ✅ Operating agreement is very flexible | More rigid corporate formalities |
| **Complexity** | Simpler to maintain | Board meetings, minutes, more overhead |
| **Exit/Acquisition** | Often requires conversion | ✅ Clean acquisition structure |

### Recommendation for Coreline

**If you plan to raise venture capital:** → **Delaware C-Corp**
- VCs expect this structure (they won't invest in LLCs due to tax complexity)
- Stock options for employees are straightforward
- Delaware has well-established business law, specialized courts (Court of Chancery)
- Most acquirers prefer buying C-Corps

**If bootstrapping/lifestyle business:** → **LLC (Wyoming or Delaware)**
- Pass-through taxation saves money early on
- Less administrative burden
- Can convert to C-Corp later if needed (costs ~$1-3K)

### State of Incorporation Considerations

| State | Pros | Cons |
|-------|------|------|
| **Delaware** | Gold standard for startups; sophisticated business law; Court of Chancery; VC-friendly | Annual franchise tax ($225-$200K+ based on shares); need registered agent |
| **Wyoming** | No state income tax; strong privacy; low fees (~$100/year); no franchise tax | Less established case law; may raise eyebrows with VCs |
| **Nevada** | No state income tax; strong liability protection | Higher fees than Wyoming; less privacy than advertised |
| **Home State** | Simplicity; avoid foreign qualification fees | May have higher taxes, less favorable laws |

### Key Action Items
- [ ] Decide: VC path → Delaware C-Corp | Bootstrap → Wyoming LLC
- [ ] Budget $500-1,500 for formation (lawyer-assisted) or ~$100-400 DIY
- [ ] Get an EIN from IRS (free, instant online)
- [ ] Open a business bank account (separate finances immediately)
- [ ] Consider: Stripe Atlas ($500) handles Delaware C-Corp formation + bank account

---

## 2. Terms of Service

### Essential Clauses for SaaS ToS

#### 2.1 Service Description & Scope
```
Define exactly what Coreline provides:
- Job tracking and CRM functionality
- Data aggregation from user-authorized sources
- Chrome extension functionality

Be specific about what you DON'T provide:
- Not an employment agency
- No guarantee of job placement
- Not responsible for accuracy of third-party data
```

#### 2.2 User Eligibility & Account Terms
- Minimum age (13+ for COPPA, 16+ for GDPR if EU)
- One account per person
- Accurate information required
- Account security is user's responsibility
- Right to terminate accounts

#### 2.3 Subscription & Payment Terms
```markdown
- Billing cycle (monthly/annual)
- Auto-renewal disclosure (ROSCA compliance - must be clear and conspicuous)
- Cancellation policy (how to cancel, when it takes effect)
- Refund policy (or lack thereof)
- Price change notification (30 days is standard)
- Failed payment handling
- Free trial terms (auto-convert to paid? Require payment method upfront?)
```

**ROSCA (Restore Online Shoppers' Confidence Act) Requirements:**
- Clear disclosure of all material terms BEFORE obtaining billing info
- Express informed consent (checkbox or similar)
- Simple cancellation mechanism

#### 2.4 Acceptable Use Policy
```markdown
Users agree NOT to:
- Violate any third-party terms of service (LinkedIn, job boards)
- Use automated systems beyond the Chrome extension as designed
- Sell, resell, or redistribute scraped data
- Use for competitive intelligence against employers
- Harass hiring managers or abuse contact information
- Circumvent rate limits or security measures
```

#### 2.5 Intellectual Property
- Coreline owns all IP in the service
- User retains ownership of their data
- Limited license granted to users
- User grants Coreline license to process their data

#### 2.6 Disclaimers (CRITICAL FOR YOUR BUSINESS MODEL)

```markdown
THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.

Coreline specifically disclaims:
- Accuracy, completeness, or timeliness of job data
- Availability of any particular job or position
- Accuracy of contact information for hiring managers
- That use of the service will result in employment
- That data scraping complies with all third-party terms
- Uninterrupted or error-free service

USER ASSUMES ALL RISK ASSOCIATED WITH:
- Using scraped data to contact employers
- Compliance with third-party platform terms
- Any consequences from outreach to hiring managers
```

#### 2.7 Limitation of Liability

```markdown
TO THE MAXIMUM EXTENT PERMITTED BY LAW:

1. Cap on damages: Limited to fees paid in last 12 months
   (or $100 if no fees paid)

2. No consequential damages: No liability for:
   - Lost profits
   - Lost data
   - Lost employment opportunities  
   - Reputational harm
   - Indirect, incidental, special, or punitive damages

3. Exceptions (carve-outs required in some jurisdictions):
   - Gross negligence or willful misconduct
   - Death or personal injury from negligence
   - Fraud
```

#### 2.8 Indemnification
```markdown
Users agree to defend/indemnify Coreline against claims arising from:
- User's violation of ToS
- User's violation of third-party rights
- User's use of scraped data
- User's communications with employers/hiring managers
- Content user uploads or creates
```

#### 2.9 Dispute Resolution
```markdown
Options (pick one):
1. Mandatory arbitration + class action waiver
   - Cheaper for company, enforceable post-Epic Systems
   - Must provide opt-out period (usually 30 days)
   
2. Jurisdiction clause only
   - "Disputes governed by [State] law, exclusive jurisdiction in [State] courts"
   
3. Informal resolution first
   - 30-day negotiation period before formal action
```

#### 2.10 Modification Clause
- Right to modify ToS
- Notice period (email + 30 days is standard)
- Continued use = acceptance

#### 2.11 Termination
- User can terminate anytime
- Company can terminate with/without cause
- Effect of termination (data deletion timeline, refunds)
- Survival clause (which terms survive termination)

---

## 3. Privacy Policy

### GDPR Requirements (If serving EU users)

**Lawful Basis for Processing:**
1. **Consent** - For scraping on user's behalf, marketing emails
2. **Contract** - Processing necessary to provide the service
3. **Legitimate Interest** - Analytics, fraud prevention (requires balancing test)

**Required Disclosures:**
- Identity of data controller (Coreline + address)
- Purpose of each type of processing
- Legal basis for each type of processing
- Data retention periods (be specific)
- User rights (access, rectification, erasure, portability, objection)
- Right to withdraw consent
- Right to lodge complaint with supervisory authority
- Whether providing data is required and consequences of not providing
- Any automated decision-making or profiling
- International data transfers and safeguards

**Key GDPR Rights to Support:**
| Right | What It Means | Implementation |
|-------|---------------|----------------|
| Access | Users can request copy of their data | Export feature |
| Rectification | Users can correct inaccurate data | Edit profile |
| Erasure ("Right to be Forgotten") | Delete upon request | Account deletion |
| Data Portability | Provide data in machine-readable format | JSON/CSV export |
| Objection | Opt out of certain processing | Preference center |

### CCPA/CPRA Requirements (California)

**Applies if:** >$25M revenue, OR data on 100K+ CA residents, OR 50%+ revenue from selling data

**Even if doesn't apply:** Good practice, other states following CA's lead

**Required Disclosures:**
- Categories of personal information collected
- Purposes for collection
- Categories of third parties shared with
- Right to know what's collected
- Right to delete
- Right to opt-out of "sale" (broad definition!)
- Right to non-discrimination for exercising rights

**"Do Not Sell My Personal Information" Link:**
- Required if you "sell" data (includes many ad/analytics arrangements)
- Must be on homepage

### Privacy Policy Structure for Coreline

```markdown
1. INFORMATION WE COLLECT
   - Account info (name, email, password)
   - Payment info (processed by Stripe, we don't store cards)
   - Job search data you input
   - Data scraped via Chrome extension (at your direction)
   - Usage data and analytics
   - Device/browser information

2. HOW WE USE YOUR INFORMATION
   - Provide and improve the service
   - Process payments
   - Send service-related communications
   - Marketing (with consent)
   - Analytics and research (aggregated)

3. DATA SCRAPED BY THE CHROME EXTENSION
   ⚠️ Critical section for Coreline:
   - User directs scraping; we process on their behalf
   - Types of data: Job postings, company info, hiring manager names/titles
   - How it's stored and for how long
   - User's responsibility for how they use this data

4. INFORMATION SHARING
   - Service providers (list categories: hosting, payment, analytics)
   - Legal requirements
   - Business transfers (M&A)
   - With consent
   - Aggregated/anonymized data

5. DATA RETENTION
   - Active accounts: Duration of account
   - After deletion: 30 days (backup), then permanent deletion
   - Legal requirements may extend (tax records, etc.)

6. YOUR RIGHTS
   - Access, correction, deletion, portability
   - How to exercise (email, in-app)
   - Response timeframe (30 days GDPR, 45 days CCPA)

7. SECURITY
   - Encryption in transit and at rest
   - Access controls
   - Incident response
   - Disclaimer: No system 100% secure

8. CHILDREN'S PRIVACY
   - Not directed at children under 13/16
   - Will delete if discovered

9. INTERNATIONAL TRANSFERS
   - Data may be processed in US
   - Safeguards used (SCCs if EU transfers)

10. CHANGES TO POLICY
    - Will notify via email/in-app
    - "Last updated" date

11. CONTACT
    - Email for privacy inquiries
    - EU representative (if required)
```

### Third-Party Data Considerations

**Data About Non-Users (Hiring Managers):**
This is legally murky territory. When scraping LinkedIn profiles of hiring managers:

- **GDPR Angle:** Processing personal data of individuals who haven't consented
  - Possible basis: Legitimate interest of users seeking employment
  - Must still provide notice if directly contacting (which you're not doing)
  - Data minimization: Only collect what's necessary
  
- **Practical Approach:**
  - Make clear this data is for user's personal job search
  - Don't aggregate/sell hiring manager databases
  - Allow deletion requests from hiring managers who find their data
  - Rate limit to prevent abuse

---

## 4. Data Scraping Legality

### ⚠️ THIS IS CORELINE'S HIGHEST LEGAL RISK AREA

### The Legal Landscape

#### Key Case: hiQ Labs v. LinkedIn (2022)

**Background:** hiQ scraped public LinkedIn profiles; LinkedIn sent cease-and-desist and blocked scraping; hiQ sued.

**9th Circuit Ruling (2022):**
- CFAA (Computer Fraud and Abuse Act) likely doesn't apply to **public** data
- Scraping publicly accessible data ≠ "unauthorized access"
- LinkedIn's unilateral terms can't create criminal liability

**BUT IMPORTANT CAVEATS:**
1. Case was remanded; not fully resolved
2. Applied only to PUBLIC data (no login required)
3. Other claims (breach of contract, trespass to chattels) not fully resolved
4. LinkedIn's ToS still prohibits scraping
5. Scraping while logged in is different legal territory

#### Other Relevant Cases

| Case | Outcome | Relevance |
|------|---------|-----------|
| **Meta v. Bright Data (2024)** | Meta lost preliminary injunction | Public data scraping strengthened |
| **Ryanair v. PR Aviation** | Scraping terms enforceable in EU | EU may be stricter |
| **LinkedIn v. Mantheos** | Settlement (terms confidential) | Aggressive enforcement continues |

### Coreline's Specific Risks

#### Risk Level Assessment

| Activity | Risk Level | Notes |
|----------|------------|-------|
| Scraping public job postings | 🟡 Medium | Most job boards prohibit in ToS |
| Scraping public LinkedIn profiles | 🟡 Medium | hiQ helps, but LinkedIn actively litigates |
| Scraping while logged into LinkedIn | 🔴 High | User's login = potential CFAA issues |
| Storing/reselling scraped data | 🔴 Very High | Aggregation business is risky |
| User-directed scraping (agent model) | 🟢 Lower | User is scraping their own view |

### Mitigation Strategies

#### 1. Position as User's Agent
```
The Chrome extension acts as the USER's agent, scraping data the user 
could manually copy. Coreline doesn't scrape independently—the user does, 
using our tool, on pages they're already authorized to view.
```

#### 2. Technical Safeguards
- Rate limiting (don't hammer servers)
- Respect robots.txt (even if not legally required)
- User-agent identification
- No bypassing CAPTCHAs or security measures
- No credential sharing/pooling

#### 3. Data Handling
- Scraped data belongs to the user
- Don't aggregate across users to build databases
- Don't sell or share scraped data
- Prompt deletion when user leaves

#### 4. Terms of Service Approach
```markdown
User Representations:
- User has the right to access pages they scrape
- User is using their own LinkedIn account
- User will use scraped data only for personal job search
- User will comply with source platform's terms

Coreline's Position:
- We provide a tool; user is responsible for use
- We don't guarantee legality in all jurisdictions
- We may suspend accounts for abuse
```

#### 5. Don't Poke the Bear
- Don't publicly advertise "LinkedIn scraper"
- Use terms like "job tracking" and "career management"
- Don't compete directly with LinkedIn Recruiter
- Consider: Official APIs where available (LinkedIn has limited ones)

### LinkedIn's Terms of Service (Key Provisions)

LinkedIn explicitly prohibits:
> "Use bots or other automated methods to access the Services, add or download contacts, send or redirect messages"

> "Scrape or copy profiles and information of others through any means"

> "Use or develop any third-party applications that interact with our Services or Members' data without our consent"

**Reality:** Millions violate these terms daily. LinkedIn selectively enforces against competitors and large-scale operations.

### Legal Defense Playbook (If Challenged)

1. **User Agency Defense:** "Users scrape their own authorized view"
2. **hiQ Precedent:** Public data isn't "unauthorized access"
3. **First Amendment:** Information freedom arguments
4. **Antitrust:** LinkedIn can't monopolize public professional data
5. **Proportionality:** Personal job search vs. commercial data harvesting

### Recommendations

1. **Consult IP/Tech Attorney** specializing in scraping cases
2. **Insurance:** Tech E&O / Cyber liability with scraping coverage
3. **User Indemnification:** Make users assume risk (see ToS section)
4. **Documentation:** Save evidence that data was publicly accessible
5. **Response Plan:** Know what you'll do if you receive a cease-and-desist

---

## 5. Intellectual Property

### Trademark Protection

#### What to Trademark

| Asset | Priority | Notes |
|-------|----------|-------|
| "Coreline" wordmark | 🔴 High | Core brand name |
| Logo | 🟡 Medium | When finalized |
| Tagline | 🟢 Low | If distinctive and used consistently |

#### Trademark Process (US)

1. **Clearance Search** (~$300-500 with attorney, or DIY on USPTO)
   - USPTO TESS database
   - State trademark databases
   - Common law (Google, domain search)
   - Similar marks in related classes

2. **Application Filing** ($250-350 per class + attorney fees ~$500-1,500)
   - Class 42: SaaS, software services
   - Consider Class 9 if you distribute downloadable software
   - Intent-to-use (1B) or actual use (1A)

3. **Examination** (3-6 months)
   - Examiner may issue office actions
   - 6 months to respond

4. **Publication** (30 days for opposition)

5. **Registration** (if no opposition)
   - 10-year term, renewable
   - Must maintain use

#### Quick Brand Protection Now (Pre-Registration)
- Use ™ symbol (no registration needed)
- Document first use in commerce
- Register domain variations (.com, .co, .app, common misspellings)
- Secure social handles
- Google yourself monthly for infringers

### Copyright Protection

**Automatically Protected (No Registration Needed):**
- Source code
- Documentation
- Marketing copy
- Blog posts
- UI/UX designs (visual aspects)

**Registration Benefits ($45-65 per work):**
- Required before suing for infringement
- Statutory damages ($750-$30K per work; $150K if willful)
- Attorney's fees recoverable
- Prima facie evidence of ownership

**Recommendation:** Register copyright in major code releases annually

### Trade Secrets

**Protects:** Algorithms, business methods, customer lists, pricing strategies

**Requirements:**
- Must be actually secret
- Must have economic value from secrecy
- Must take reasonable steps to maintain secrecy

**Reasonable Steps:**
- NDAs with employees/contractors
- Access controls (need-to-know basis)
- Mark documents "CONFIDENTIAL"
- Employee/contractor offboarding procedures
- Physical/digital security measures

### Patent Considerations

**For SaaS/Chrome Extension:** Likely not a priority unless you have:
- Novel technical innovation (not just a business method)
- $15-30K+ budget per patent (application + prosecution)
- Plans to defend/license patents

**Defensive Strategy:** Document everything with dates; consider defensive publications

---

## 6. User Agreements

### What Users Agree To

#### Clickwrap vs. Browsewrap

| Type | Mechanism | Enforceability |
|------|-----------|----------------|
| **Clickwrap** | User clicks "I agree" checkbox | ✅ Strong |
| **Scrollwrap** | Must scroll to bottom, then click | ✅ Medium-Strong |
| **Browsewrap** | Link in footer, no action required | ⚠️ Weak |

**Recommendation:** Clickwrap for all key agreements

#### Required Agreements

1. **Terms of Service** - Governs use of Coreline
2. **Privacy Policy** - Required by law, not a contract per se
3. **Subscription Agreement** - Payment terms (can be in ToS)
4. **Acceptable Use Policy** - Can be standalone or in ToS

#### Implementation Best Practices

```markdown
SIGNUP FLOW:
□ "I agree to the Terms of Service" [link opens ToS]
□ "I have read and accept the Privacy Policy" [link opens PP]
□ "I agree to receive marketing emails" (OPTIONAL, unchecked default)

CHROME EXTENSION INSTALL:
□ "I understand this extension will collect data from pages I visit"
□ "I agree to use scraped data only for my personal job search"
```

#### Version Control
- Date every version of ToS/PP
- Keep archived versions accessible
- Log user consent with version number + timestamp
- Email users when terms change materially

### Data Usage Rights

**User → Coreline License:**
```markdown
User grants Coreline a limited, non-exclusive license to:
- Store and process user data to provide the service
- Display data back to user
- Generate anonymized, aggregated insights
- Create backups for disaster recovery

User retains ownership of all their data.
```

**What You CANNOT Do Without Additional Consent:**
- Sell individual user data
- Share identifiable data with third parties (beyond service providers)
- Use data for purposes unrelated to service provision
- Train AI/ML models on individual user content (gray area—be explicit)

**Scraped Data Handling:**
```markdown
Data scraped by the Chrome extension:
- Is stored on behalf of the user
- Belongs to the user
- Will be deleted upon account deletion
- Is not aggregated across users for commercial purposes
- Is not sold or shared with third parties
```

---

## 7. Compliance Basics

### Payment Processing (PCI-DSS)

**If Using Stripe/Payment Processor:**
- You're likely PCI-DSS compliant by proxy
- Never store credit card numbers yourself
- Use Stripe Elements or Checkout
- Annual SAQ-A self-assessment (simplest level)

**Requirements:**
- [ ] Use tokenized payment processing
- [ ] HTTPS everywhere
- [ ] Don't log card details
- [ ] Stripe handles the hard stuff

### Email Marketing Laws

#### CAN-SPAM Act (US)
| Requirement | What It Means |
|-------------|---------------|
| No false headers | From name/email must be accurate |
| No deceptive subject lines | Subject must reflect content |
| Identify as ad | If it's marketing, say so (can be subtle) |
| Physical address | Must include your postal address |
| Opt-out mechanism | Unsubscribe link required |
| Honor opt-outs | 10 business days max to process |
| Monitor third parties | You're liable if your agency violates |

**Penalties:** Up to $51,744 per email

#### GDPR Email Rules (EU)
- **Opt-in required** for marketing (not just opt-out)
- Must be freely given, specific, informed, unambiguous
- Pre-checked boxes don't count
- Easy withdrawal (as easy as giving consent)
- Document consent

#### CASL (Canada)
- **Express consent** required (stricter than CAN-SPAM)
- Implied consent has limits
- Significant penalties (up to $10M CAD per violation)

### Email Best Practices for Coreline
```markdown
TRANSACTIONAL (No opt-in needed):
- Account confirmation
- Password reset
- Payment receipts
- Service notifications

MARKETING (Opt-in required in EU, recommended everywhere):
- Newsletter
- Product updates (if not essential to service)
- Promotional offers
- Partner content

SETUP:
□ Separate checkbox for marketing consent at signup
□ Double opt-in for marketing (email confirmation)
□ Easy unsubscribe in every email
□ Suppression list management
□ Physical address in footer
```

### Accessibility (ADA / WCAG)

**Rising Area of Litigation for SaaS:**
- WCAG 2.1 AA is the standard
- DOJ has clarified websites are covered by ADA
- Lawsuits increasing rapidly

**Basic Compliance:**
- Alt text on images
- Keyboard navigation
- Sufficient color contrast
- Screen reader compatibility
- Form labels

**Tools:** axe DevTools, WAVE, Lighthouse

---

## 8. Contractor Agreements

### Essential Contract Elements

#### 1. Scope of Work
```markdown
- Specific deliverables
- Milestones and deadlines
- What's NOT included
- Change order process
```

#### 2. Compensation
```markdown
- Rate (hourly vs. project)
- Payment schedule
- Invoicing requirements
- Expense reimbursement
- Late payment terms
```

#### 3. IP Assignment (CRITICAL)
```markdown
"Work Product" means all work created under this Agreement.

Contractor assigns to Company all right, title, and interest in 
Work Product, including all IP rights. Contractor will execute 
any documents to perfect this assignment.

Waiver of moral rights (where applicable).

Pre-existing materials: Contractor grants perpetual license OR 
lists specific exclusions.
```

**Without this clause, contractor may own what they create!**

#### 4. Confidentiality
```markdown
- Definition of Confidential Information
- Obligations (don't disclose, don't use except for project)
- Duration (typically 2-5 years, or perpetual for trade secrets)
- Exceptions (public info, prior knowledge, legally required)
```

#### 5. Contractor Status
```markdown
Contractor is an independent contractor, not an employee.
Contractor responsible for own taxes, insurance, equipment.
No benefits, no workers' comp from Company.
Contractor may work for others.
```

**Misclassification Risk:** If you control HOW they work (not just WHAT), they might be employees. Consequences:
- Back taxes + penalties
- Benefits liability
- Workers' comp claims

**Safe Practices:**
- Pay by project/milestone, not hourly (when possible)
- Don't provide equipment
- Allow them to work for others
- Don't set their schedule
- Don't provide training on basic skills

#### 6. Representations & Warranties
```markdown
Contractor represents:
- Has right to enter agreement
- Work will be original (not infringing)
- Will comply with laws
- Has necessary skills/licenses
```

#### 7. Indemnification
```markdown
Contractor indemnifies Company against claims arising from:
- Contractor's breach of agreement
- Contractor's negligence
- IP infringement in deliverables
```

#### 8. Termination
```markdown
- Termination for convenience (with notice)
- Termination for cause (breach, usually with cure period)
- Effect on payment
- Return of materials
- Survival of key terms (confidentiality, IP assignment)
```

#### 9. Non-Solicitation (Optional)
```markdown
During engagement and 12 months after, Contractor won't:
- Solicit Company's employees
- Solicit Company's customers (for competing services)
```

#### 10. Miscellaneous
- Governing law
- Dispute resolution
- Entire agreement
- Amendment requirements
- Notices

### Template Resources
- Clerky (Y Combinator backed) - startup-friendly templates
- Cooley GO - free startup docs
- Docracy - community templates
- UpCounsel - lawyer-reviewed templates

---

## 9. Three Quick Wins

### 🏆 Quick Win #1: Formation + Bank Account (Week 1)

**Do This Now:**
1. **Form your entity** (Delaware C-Corp if seeking funding, Wyoming LLC if bootstrapping)
   - Stripe Atlas: $500, handles everything including bank account
   - DIY: Delaware ~$200 + registered agent ~$50/year
   
2. **Get EIN** (free, instant at IRS.gov)

3. **Open business bank account**
   - Mercury (startup-friendly, no minimums)
   - Relay (also good)
   - Local credit union
   
4. **Never mix personal and business funds again**

**Why It Matters:**
- Liability protection requires separation
- Looks professional
- Makes taxes way easier
- Required before taking payments

---

### 🏆 Quick Win #2: Basic Legal Docs (Week 2)

**Do This Now:**
1. **Create Terms of Service**
   - Use Termly, iubenda, or GetTerms for starting template
   - Customize for Coreline's specific scraping model
   - Add strong disclaimers and user responsibility clauses
   
2. **Create Privacy Policy**
   - Same tools work
   - Be specific about Chrome extension data collection
   - Include GDPR/CCPA basics
   
3. **Implement Properly**
   - Clickwrap agreement at signup (checkbox + link)
   - Footer links on all pages
   - Version and date everything
   
4. **Chrome Extension Disclosure**
   - Clear disclosure of what data is collected
   - Permissions explanation
   - Separate consent for extension functionality

**Total Cost:** $0-200 (generator tools) or $500-1,500 (attorney review)

---

### 🏆 Quick Win #3: Protect Your IP Today (Week 3)

**Do This Now:**
1. **Domain Security**
   - [ ] Register coreline.com, coreline.app, coreline.io
   - [ ] Register common misspellings
   - [ ] Enable registrar lock
   - [ ] Enable WHOIS privacy
   
2. **Trademark Clearance Search**
   - [ ] Search USPTO TESS for "Coreline"
   - [ ] Google search for competitors
   - [ ] Check state databases
   - [ ] If clear, file Intent-to-Use application (~$250-350)
   
3. **Document Your Creation**
   - [ ] Private GitHub repo with commit history
   - [ ] Backup copies dated before launch
   - [ ] Screenshots with timestamps
   
4. **Social Handles**
   - [ ] @coreline or @corelineapp everywhere
   - [ ] LinkedIn company page
   - [ ] Twitter/X, Instagram, TikTok (even if not using)

**Total Cost:** ~$50-100 domains + $250-350 trademark + $0 documentation

---

## Appendix A: Estimated Legal Budget

| Item | DIY Cost | With Attorney |
|------|----------|---------------|
| Entity Formation | $100-400 | $500-1,500 |
| ToS + Privacy Policy | $0-200 | $1,000-3,000 |
| Trademark Application | $250-350 | $750-1,500 |
| Contractor Agreement | $0-50 (template) | $500-1,000 |
| Attorney Consultation | N/A | $200-500/hour |

**Recommended Year 1 Legal Budget:** $2,500-5,000

---

## Appendix B: When to Get a Real Lawyer

**Definitely Consult an Attorney When:**
- Raising investment (even from friends/family)
- Receiving a cease-and-desist
- Being sued or threatened with lawsuit
- Hiring employees (not contractors)
- Acquiring another company
- Selling the company
- Government inquiry (FTC, state AG)
- Data breach affecting customers
- International expansion (especially EU)

**Lawyer Types You Might Need:**
- **Corporate/Startup Attorney:** Entity, fundraising, general business
- **IP Attorney:** Trademarks, patents, copyright
- **Privacy/Tech Attorney:** GDPR, CCPA, data practices, scraping questions
- **Employment Attorney:** Hiring, classification, HR policies

---

## Appendix C: Useful Resources

### Legal Templates
- [Clerky](https://clerky.com) - Y Combinator recommended
- [Cooley GO](https://cooleygo.com) - Free startup legal docs
- [Termly](https://termly.io) - ToS/Privacy generators
- [Docracy](https://docracy.com) - Community legal templates

### Formation Services
- [Stripe Atlas](https://stripe.com/atlas) - $500 all-in
- [Clerky](https://clerky.com) - Startup-focused
- [Northwest Registered Agent](https://northwestregisteredagent.com) - Budget option
- [Firstbase](https://firstbase.io) - International founders

### Reading
- [Startup Law 101 (Cooley)](https://cooleygo.com/startup-law-101/)
- [YC Library - Legal](https://ycombinator.com/library/legal)
- [TechCrunch Legal Articles](https://techcrunch.com/tag/legal/)

### Scraping-Specific
- [EFF on CFAA](https://eff.org/issues/cfaa)
- [hiQ v. LinkedIn Case Summary](https://law.justia.com/cases/federal/appellate-courts/ca9/17-16783/17-16783-2022-04-18.html)

---

## Document Metadata

| Field | Value |
|-------|-------|
| Created | 2025-06-27 |
| Last Updated | 2025-06-27 |
| Version | 1.0 |
| Status | Research Complete |
| Next Review | Quarterly |

---

*This document will be updated as laws change and Coreline evolves. Maintain version history and review quarterly or when significant legal developments occur.*
