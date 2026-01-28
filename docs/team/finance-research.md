# 💰 Coreline Finance Brain
## Startup Finance Best Practices for B2C SaaS ($14.95/month)

*Last Updated: January 2026*

---

## Table of Contents
1. [SaaS Financial Metrics](#1-saas-financial-metrics)
2. [Pricing Strategy](#2-pricing-strategy)
3. [Unit Economics](#3-unit-economics)
4. [Runway & Burn Rate](#4-runway--burn-rate)
5. [Revenue Recognition](#5-revenue-recognition)
6. [Financial Planning](#6-financial-planning)
7. [Tools & Tech Stack](#7-tools--tech-stack)
8. [Metrics Dashboard](#8-metrics-dashboard)
9. [3 Quick Wins for Coreline](#9-3-quick-wins-for-coreline)

---

## 1. SaaS Financial Metrics

### Core Metrics Definitions

#### MRR (Monthly Recurring Revenue)
The predictable revenue you expect each month from active subscriptions.

**Formula:**
```
MRR = Number of Customers × Monthly Subscription Price
```

**For Coreline at $14.95/month:**
- 100 customers = $1,495 MRR
- 1,000 customers = $14,950 MRR
- 10,000 customers = $149,500 MRR

**Track MRR Components:**
- **New MRR**: Revenue from new customers this month
- **Expansion MRR**: Revenue from upgrades (if you add tiers later)
- **Churned MRR**: Lost revenue from cancellations
- **Net New MRR**: New MRR + Expansion MRR - Churned MRR

---

#### ARR (Annual Recurring Revenue)
```
ARR = MRR × 12
```

At $14.95/month:
| Customers | MRR | ARR |
|-----------|-----|-----|
| 100 | $1,495 | $17,940 |
| 500 | $7,475 | $89,700 |
| 1,000 | $14,950 | $179,400 |
| 5,000 | $74,750 | $897,000 |

---

#### CAC (Customer Acquisition Cost)
The total cost to acquire one paying customer.

**Formula:**
```
CAC = Total Sales & Marketing Spend ÷ Number of New Customers Acquired
```

**What to Include:**
- Ad spend (Google, Meta, LinkedIn)
- Content marketing costs
- SEO tools
- Sales team salaries (if applicable)
- Marketing tool subscriptions
- Affiliate/referral payouts

**B2C SaaS Benchmarks:**
- Low-touch B2C: $50-150 CAC is common
- For a $14.95/month product, target **CAC under $45** (3-month payback)

---

#### LTV (Lifetime Value)
The total revenue expected from a customer over their entire relationship.

**Simple Formula:**
```
LTV = ARPA × Gross Margin % × Customer Lifetime
```

**Or using churn:**
```
LTV = (ARPA × Gross Margin %) ÷ Monthly Churn Rate
```

**For Coreline ($14.95/month, assuming 80% gross margin):**
| Monthly Churn | Avg Lifetime | LTV |
|---------------|--------------|-----|
| 10% | 10 months | $119.60 |
| 7% | 14.3 months | $171.14 |
| 5% | 20 months | $239.20 |
| 3% | 33.3 months | $398.67 |

**⚠️ Key Insight:** Every 1% reduction in churn has massive LTV impact!

---

#### Churn Rate

**Customer Churn Rate:**
```
Customer Churn = Customers Lost This Period ÷ Customers at Start of Period
```

**Revenue Churn Rate:**
```
Revenue Churn = MRR Lost This Period ÷ MRR at Start of Period
```

**Industry Benchmarks (from Paddle/Recurly research):**

| Segment | Monthly Churn | Annual Churn |
|---------|---------------|--------------|
| B2B SaaS (Enterprise) | 1-2% | 10-15% |
| B2B SaaS (SMB) | 3-5% | 30-50% |
| B2C SaaS | 5-10% | 45-70% |
| Consumer subscription boxes | 10%+ | 70%+ |

**For Coreline (B2C job seeker market):**
- **Realistic target:** 5-8% monthly churn
- **Stretch goal:** Under 5% monthly
- **Red flag:** Above 10% monthly

**Why B2C churn is higher:**
- Lower switching costs
- Less "stickiness" than enterprise tools
- Job seekers may cancel after finding work (success = churn!)
- Lower commitment at $14.95 price point

---

#### LTV:CAC Ratio

**The Golden Ratio for SaaS Viability**

```
LTV:CAC Ratio = Customer Lifetime Value ÷ Customer Acquisition Cost
```

**Benchmarks (from David Skok @ ForEntrepreneurs):**

| Ratio | Interpretation |
|-------|----------------|
| < 1:1 | 🔴 Losing money on every customer. Unsustainable. |
| 1:1 - 2:1 | 🟡 Barely profitable. Unit economics need work. |
| **3:1** | 🟢 **Healthy SaaS business. The target.** |
| 4:1 - 5:1 | 🟢 Excellent. Strong unit economics. |
| > 5:1 | 🔵 Either very efficient OR underinvesting in growth |

**For Coreline Example:**
- LTV of $180 with CAC of $60 = **3:1 ratio** ✅
- LTV of $120 with CAC of $80 = **1.5:1 ratio** ⚠️ (needs improvement)

---

#### Months to Recover CAC (Payback Period)

```
Payback Period = CAC ÷ (ARPA × Gross Margin %)
```

**Benchmarks:**
- **Target:** Under 12 months
- **Excellent:** Under 6 months
- **For low-price B2C:** Target 3-4 months

**For Coreline ($14.95/month, 80% GM):**
| CAC | Monthly Contribution | Payback |
|-----|---------------------|---------|
| $30 | $11.96 | 2.5 months ✅ |
| $45 | $11.96 | 3.8 months ✅ |
| $60 | $11.96 | 5.0 months ✅ |
| $90 | $11.96 | 7.5 months ⚠️ |
| $120 | $11.96 | 10 months 🔴 |

---

## 2. Pricing Strategy

### The $14.95 Sweet Spot Analysis

**Why $14.95 works for job seekers:**
- **Under $15 psychological barrier** - feels like a "no-brainer"
- **Skip-a-latte framing** - "costs less than 3 coffees"
- **Low commitment** - reduces friction for unemployed users
- **Monthly flexibility** - cancel when employed

**Pricing Psychology Tactics:**

| Tactic | Application for Coreline |
|--------|-------------------------|
| **Charm pricing** | $14.95 vs $15 (perceived as significantly lower) |
| **Value anchoring** | "What most recruiters charge for ONE resume review" |
| **Loss aversion** | "Don't miss applications because you're disorganized" |
| **Pain point focus** | Cost of missed opportunity >> $14.95/month |

---

### Freemium vs. Paid-Only

**Option A: Paid-Only (Current)**
| Pros | Cons |
|------|------|
| Every user = revenue | Higher conversion friction |
| Attracts serious users | Slower top-of-funnel growth |
| Simple unit economics | Harder to compete with free tools |

**Option B: Freemium**
| Pros | Cons |
|------|------|
| Lower barrier to entry | Free users ≠ paying users |
| Viral growth potential | Complicates unit economics |
| "Try before buy" reduces churn | Support/infra costs for free tier |
| SEO/content marketing funnel | Free tier might be "good enough" |

**Recommendation for Coreline:**

Consider a **Limited Free Tier** with:
- Track up to 5 active applications
- Basic status tracking only
- Watermarked exports
- Upgrade to Pro ($14.95) for unlimited + advanced features

**Freemium conversion benchmarks:**
- Typical: 2-5% free → paid
- Good: 5-10%
- Excellent: 10%+

---

### Future Tier Structure (When Ready)

| Tier | Price | Target User |
|------|-------|-------------|
| **Free** | $0 | Casual job seekers, students |
| **Pro** | $14.95/mo | Active job seekers |
| **Annual Pro** | $119/yr ($9.92/mo) | Committed users (20% discount) |
| **Career+** (future) | $29.95/mo | Power users, career changers |

**Annual pricing benefits:**
- Reduces churn (committed for 12 months)
- Improves cash flow
- Higher LTV certainty
- Offer 15-20% discount as incentive

---

### Pricing Experimentation Ideas

1. **A/B test price points:** $9.95, $12.95, $14.95, $19.95
2. **Test annual discount levels:** 10%, 15%, 20%, 25%
3. **Trial length:** 7-day vs 14-day vs 30-day
4. **Payment timing:** Charge immediately vs after trial

---

## 3. Unit Economics

### Unit Economics Model for $14.95/month Product

```
REVENUE PER USER
├── Monthly Price:           $14.95
├── Payment Processing:      -$0.73 (2.9% + $0.30)
├── Net Revenue:             $14.22
│
VARIABLE COSTS
├── Hosting/Infrastructure:  -$0.50 (estimate per user)
├── Email/Notifications:     -$0.10
├── Customer Support:        -$1.00 (amortized)
├── Total Variable Costs:    -$1.60
│
GROSS PROFIT (Contribution Margin)
└── Per User/Month:          $12.62 (84.4% gross margin)
```

### Unit Economics Dashboard

| Metric | Formula | Coreline Target |
|--------|---------|-----------------|
| **ARPU** | Total Revenue ÷ Customers | $14.95 |
| **Gross Margin** | (Revenue - COGS) ÷ Revenue | >80% |
| **Contribution Margin** | Gross Profit per User | ~$12 |
| **CAC** | S&M Spend ÷ New Customers | <$45 |
| **LTV** | ARPU × GM × (1/Churn) | >$150 |
| **LTV:CAC** | LTV ÷ CAC | >3:1 |
| **Payback Period** | CAC ÷ Monthly Contribution | <4 months |

### Tracking Unit Economics

**Weekly:**
- New signups / trials
- Conversions
- Active users
- Support tickets per user

**Monthly:**
- MRR and Net New MRR
- Customer count
- Churn rate (customers and revenue)
- CAC calculation
- LTV estimate

**Quarterly:**
- Full unit economics review
- Cohort analysis (are newer users more/less profitable?)
- Channel-level CAC comparison

---

## 4. Runway & Burn Rate

### Cash Management for Bootstrapped SaaS

**Core Concepts:**

**Burn Rate:**
```
Monthly Burn = Monthly Expenses - Monthly Revenue
```

**Runway:**
```
Runway (months) = Cash on Hand ÷ Monthly Burn Rate
```

---

### Bootstrapped Mindset: Default Alive vs Default Dead

**Default Alive:** Revenue growing faster than expenses → will eventually be profitable
**Default Dead:** Expenses growing faster than revenue → will run out of money

**Rule of thumb:** Always know which state you're in.

---

### Expense Categories to Track

**Fixed Monthly Costs:**
| Category | Typical Range |
|----------|--------------|
| Hosting (Vercel, AWS, etc.) | $20-200 |
| Domain/DNS | $2-5 |
| Email service (Postmark, etc.) | $10-50 |
| Monitoring (Sentry, etc.) | $0-30 |
| Analytics | $0-50 |
| Accounting software | $15-50 |
| Banking fees | $0-20 |
| **Subtotal** | **$50-400** |

**Variable/Growth Costs:**
| Category | Notes |
|----------|-------|
| Paid advertising | Scale with revenue |
| Contractors/freelancers | As needed |
| Legal/accounting | Quarterly/annual |
| Tools & subscriptions | Audit regularly |

---

### Runway Management Rules

**The "6 Month Rule":**
- Always maintain 6+ months runway
- Below 6 months = emergency mode (cut costs immediately)
- Ideal: 12-18 months runway

**Revenue Milestones for Bootstrapped SaaS:**

| Stage | MRR | Status |
|-------|-----|--------|
| **Ramen Profitable** | Covers basic living | ~$3-5K MRR |
| **Sustainable** | Covers business + modest salary | ~$8-15K MRR |
| **Healthy** | Can hire first employee | ~$20-30K MRR |
| **Growth Ready** | Can invest in growth | ~$50K+ MRR |

---

### Cash Flow Tips

1. **Offer annual plans** - Get 12 months cash upfront
2. **Invoice immediately** - No net-30 for subscriptions
3. **Automate collections** - Use Stripe's retry logic
4. **Monitor payment failures** - Dunning emails recover 10-15% of failures
5. **Keep 3 months expenses liquid** - Even when profitable

---

## 5. Revenue Recognition

### SaaS Accounting Basics

**Cash vs. Accrual Accounting:**

| Method | When to Record Revenue |
|--------|----------------------|
| **Cash Basis** | When payment received |
| **Accrual Basis** | When service delivered |

**For SaaS subscriptions, accrual is standard:**
- Customer pays $179.40 for annual plan on Jan 1
- Revenue recognized: $14.95/month over 12 months
- Jan balance sheet shows $164.45 as "deferred revenue"

---

### Key Concepts

**Deferred Revenue (Unearned Revenue):**
- Cash received but not yet earned
- Appears as LIABILITY on balance sheet
- Converts to revenue as service is delivered

**Example for Annual Plan:**
```
Jan 1: Receive $119 annual payment
  - Cash: +$119
  - Deferred Revenue: +$119

Jan 31: Recognize first month
  - Deferred Revenue: -$9.92
  - Revenue: +$9.92
```

---

### ASC 606 Overview (For Future Reference)

The 5-step revenue recognition model:
1. **Identify the contract** - Subscription agreement
2. **Identify performance obligations** - Monthly service access
3. **Determine transaction price** - $14.95/month or $119/year
4. **Allocate price** - Evenly over subscription period
5. **Recognize revenue** - As performance obligation satisfied

**For Coreline at current stage:** Keep it simple with monthly recognition. Worry about ASC 606 compliance when you're raising funds or preparing for acquisition.

---

### Bookkeeping Categories

**Revenue:**
- Subscription Revenue
- Add-on Revenue (if any)

**Cost of Goods Sold (COGS):**
- Payment processing fees
- Hosting/infrastructure
- Direct support costs

**Operating Expenses:**
- Sales & Marketing
- General & Administrative
- Product Development (if capitalizing)

---

## 6. Financial Planning

### Simple Forecasting Model

**Bottom-Up Approach:**

```
Month 1 Starting Customers:    100
+ New Customers:               30 (from marketing)
- Churned Customers:           -7 (7% churn)
= Month 1 Ending Customers:    123

MRR = 123 × $14.95 = $1,838.85
```

**Spreadsheet Template:**

| Month | Start Cust | New | Churned | End Cust | MRR | Expenses | Profit |
|-------|-----------|-----|---------|----------|-----|----------|--------|
| Jan | 100 | 30 | -7 | 123 | $1,839 | $2,000 | -$161 |
| Feb | 123 | 35 | -9 | 149 | $2,228 | $2,000 | $228 |
| Mar | 149 | 40 | -10 | 179 | $2,676 | $2,200 | $476 |

---

### Scenario Planning

**Conservative Case:**
- 5% monthly customer growth
- 8% monthly churn
- Minimal ad spend

**Base Case:**
- 10% monthly customer growth
- 6% monthly churn
- Moderate ad spend

**Optimistic Case:**
- 20% monthly customer growth
- 4% monthly churn
- Aggressive paid acquisition

---

### 12-Month Projections Template

| Metric | Q1 | Q2 | Q3 | Q4 | Year 1 |
|--------|-----|-----|-----|-----|--------|
| Ending Customers | | | | | |
| MRR (End of Q) | | | | | |
| Quarterly Revenue | | | | | |
| Quarterly Expenses | | | | | |
| Net Profit/Loss | | | | | |
| Cumulative P/L | | | | | |
| Cash Position | | | | | |

---

### Key Forecasting Assumptions to Document

- Customer acquisition rate (by channel)
- Churn rate (and expected changes)
- Pricing changes
- Planned expense increases
- Seasonality (job seeking may peak in Jan, Sept)

---

## 7. Tools & Tech Stack

### Recommended Finance Stack

**Tier 1: Essential (Start Here)**

| Function | Tool | Cost |
|----------|------|------|
| **Payments** | Stripe | 2.9% + $0.30/txn |
| **Accounting** | Wave (free) or QuickBooks ($15-25/mo) | $0-25/mo |
| **Banking** | Mercury or Relay | Free |
| **Metrics** | Spreadsheet + Stripe Dashboard | Free |

**Tier 2: Growth Stage**

| Function | Tool | Cost |
|----------|------|------|
| **SaaS Metrics** | Baremetrics, ChartMogul, or ProfitWell | $50-100/mo |
| **Dunning/Recovery** | Stripe Smart Retries or Churnkey | Varies |
| **Tax Compliance** | Stripe Tax or TaxJar | Varies |
| **Expense Tracking** | Expensify or Ramp | Varies |

---

### Stripe Configuration for SaaS

**Must-Have Settings:**
1. ✅ Enable Smart Retries (automatic failed payment recovery)
2. ✅ Set up Customer Portal (self-service management)
3. ✅ Configure webhook endpoints (for app integration)
4. ✅ Enable Stripe Tax (US sales tax compliance)
5. ✅ Set up Radar (fraud protection)

**Stripe Billing Features to Use:**
- Subscription creation and management
- Proration for upgrades/downgrades
- Invoice generation
- Tax calculation
- Revenue recognition reporting

---

### Accounting Software Comparison

| Tool | Best For | Price |
|------|----------|-------|
| **Wave** | Pre-revenue, bootstrapped | Free |
| **QuickBooks Simple Start** | Early revenue | $15/mo |
| **QuickBooks Essentials** | Growing, contractors | $30/mo |
| **Xero** | Tech-forward, integrations | $15-50/mo |

**Recommendation:** Start with Wave or QuickBooks Simple Start. Upgrade when you need payroll or multiple users.

---

### Banking Options for Startups

| Bank | Pros | Cons |
|------|------|------|
| **Mercury** | Free, startup-focused, great UX | Online only |
| **Relay** | Free, multiple accounts, no fees | Online only |
| **Brex** | Credit card + banking, perks | Requires revenue |
| **Chase Business** | Physical branches | Monthly fees |

**Recommendation:** Mercury for the modern startup experience.

---

## 8. Metrics Dashboard

### Weekly KPI Dashboard

| Metric | This Week | Last Week | Δ |
|--------|-----------|-----------|---|
| New Signups | | | |
| Trial Starts | | | |
| Conversions | | | |
| Churned Customers | | | |
| Active Users (DAU) | | | |
| Support Tickets | | | |
| MRR | | | |

---

### Monthly KPI Dashboard

**Acquisition:**
- [ ] Total new customers
- [ ] CAC by channel
- [ ] Trial → Paid conversion rate
- [ ] Website traffic / signups

**Retention:**
- [ ] Customer churn rate
- [ ] Revenue churn rate
- [ ] Net Revenue Retention (NRR)
- [ ] Active user percentage

**Revenue:**
- [ ] MRR (and breakdown: New/Expansion/Churn)
- [ ] ARR
- [ ] ARPU
- [ ] Cash collected

**Unit Economics:**
- [ ] LTV
- [ ] LTV:CAC ratio
- [ ] CAC payback period
- [ ] Gross margin %

**Financial Health:**
- [ ] Cash balance
- [ ] Runway (months)
- [ ] Burn rate
- [ ] Net profit/loss

---

### Dashboard Visualization Template

```
┌─────────────────────────────────────────────────────────┐
│  CORELINE MONTHLY DASHBOARD - [Month/Year]              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  MRR: $____    ARR: $____    Customers: ____           │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │New MRR   │  │Churned   │  │Net New   │              │
│  │$____     │  │MRR $_____│  │MRR $___  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
│  Churn Rate: ____%    LTV:CAC: ___:1    CAC: $_____    │
│                                                         │
│  Cash: $_____    Runway: ___ months    Burn: $_____    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### Cohort Analysis (Track Monthly)

Track how cohorts (users who signed up in the same month) behave over time:

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|---------|---------|----------|
| Jan 2025 | 100% | 85% | 75% | 68% | 50% | 30% |
| Feb 2025 | 100% | 88% | 78% | 72% | | |
| Mar 2025 | 100% | 90% | 82% | | | |

**What to look for:**
- Are newer cohorts retaining better? (Product improvement working)
- Is there a "cliff" where most churn happens? (Target that moment)
- What's the 6-month and 12-month retention? (LTV accuracy check)

---

## 9. 3 Quick Wins for Coreline

### Quick Win #1: Set Up Financial Tracking Today

**Time: 2-4 hours**

1. **Create a metrics spreadsheet** with:
   - Daily signups
   - Weekly MRR tracking
   - Monthly P&L summary
   
2. **Connect Stripe Dashboard** to track:
   - New subscriptions
   - Churned subscriptions
   - MRR chart
   - Failed payments

3. **Open a dedicated business bank account** (Mercury or Relay)
   - Separate business from personal
   - Makes tax time easy
   - Professional for future investors

---

### Quick Win #2: Implement Annual Plan Option

**Time: 1-2 hours**

**Why:** Annual plans reduce churn and improve cash flow.

**Action:**
1. Create annual plan in Stripe: $119/year (save 20%)
2. Add to pricing page with savings callout
3. Offer upgrade to annual for existing customers

**Expected impact:**
- 15-30% of customers choose annual
- Immediate cash flow boost
- Lower effective churn rate

---

### Quick Win #3: Set Up Dunning (Failed Payment Recovery)

**Time: 30 minutes**

**Why:** 10-15% of churn is "involuntary" - failed payments, expired cards.

**Action:**
1. Enable Stripe Smart Retries (automatic)
2. Configure email notifications for failed payments
3. Add card update link to emails

**Template Email:**
```
Subject: Your Coreline subscription needs attention

Hi [Name],

We had trouble processing your payment for Coreline.

To keep tracking your job applications, please update your 
payment method here: [Link]

If your card was recently replaced, that's usually the issue.

Thanks!
The Coreline Team
```

**Expected impact:**
- Recover 30-50% of failed payments
- Reduce involuntary churn by 3-5%
- Immediate MRR protection

---

## 📚 Resources & Further Reading

### Books
- *The SaaS Playbook* by Rob Walling
- *Obviously Awesome* by April Dunford (positioning)
- *Profit First* by Mike Michalowicz (cash management)

### Blogs & Sites
- ForEntrepreneurs.com (David Skok) - SaaS metrics bible
- SaaStr.com - SaaS business advice
- Baremetrics Open Startups - Real SaaS numbers
- IndieHackers.com - Bootstrapped startup community

### Benchmarks to Bookmark
- OpenView SaaS Benchmarks (annual report)
- KeyBanc SaaS Survey
- Paddle/ProfitWell State of Subscription Reports

---

## 🎯 Summary: Coreline Target Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Monthly Churn | <6% | | |
| LTV | >$150 | | |
| CAC | <$45 | | |
| LTV:CAC | >3:1 | | |
| Payback Period | <4 months | | |
| Gross Margin | >80% | | |
| Runway | >6 months | | |

---

*This document is a living guide. Update it quarterly with learnings and refined targets.*

**Next Steps:**
1. Complete Quick Win #1 (tracking)
2. Run first monthly finance review
3. Calculate current unit economics baseline
4. Set 90-day targets for each metric
