# CoreLine Referral Program — "Give a Month, Get a Month"

## Overview
Turn every user into a growth engine. Simple, generous, viral.

---

## The Offer

### For the Referrer (Existing User)
- **Get 1 free month** for every friend who signs up for a paid plan
- No cap — refer 12 friends, get a free year
- Stackable with existing subscription

### For the Referred (New User)
- **Get their first month free** (no credit card required)
- Full access to all features
- Converts to $14.95/month after trial

---

## Mechanics

### Referral Link
Each user gets a unique link:
`coreline.app/r/[USERNAME]` or `coreline.app/r/[CODE]`

### Tracking
- Cookie-based (30-day attribution window)
- Also works if they manually enter referral code at signup

### Credit Timing
- Referrer gets credit when referred user completes first paid month
- Prevents gaming with fake signups

---

## In-App Experience

### Share Modal
**Headline:** "Give your friends a free month of CoreLine"
**Body:** "When they sign up, you both get a free month. No limits."

**Buttons:**
- Copy Link
- Share on LinkedIn
- Share on Twitter
- Email a Friend

### Referral Dashboard
- Total referrals sent
- Pending (signed up, not yet paid)
- Credited (paid, you got your free month)
- Total months earned

---

## Email Sequences

### To Referrer (After Someone Signs Up)
**Subject:** 🎉 [Friend's Name] just signed up — your free month is coming!
**Body:** "[Name] started their free trial using your link. When they go paid, you'll automatically get a free month added to your account."

### To Referrer (When Credit Hits)
**Subject:** You just earned a free month! 🙌
**Body:** "Thanks for spreading the word. Your account has been credited with 1 free month. Keep sharing — there's no limit."

### To Referred (Welcome)
**Subject:** Welcome to CoreLine — your first month is on [Referrer Name]!
**Body:** "[Referrer] thought you'd love CoreLine. Enjoy your free month — here's how to get started..."

---

## Viral Loops

### The Ask (In-App Prompts)
Trigger referral prompts at high-intent moments:
1. After first "you know X people" moment
2. After adding 10th contact
3. After first successful follow-up logged
4. On 7-day anniversary

### Social Proof
Show in dashboard: "127 people joined CoreLine this week through referrals"

---

## Founding Member Bonus
First 100 members get DOUBLE referral credits (2 months per referral instead of 1) for the first 90 days.

---

## Technical Requirements

### Database
- `referral_codes` table (user_id, code, created_at)
- `referrals` table (referrer_id, referred_id, status, credited_at)
- `credits` table (user_id, months_earned, months_used)

### Stripe Integration
- Apply credit as coupon/discount on next invoice
- Or extend subscription end date

---

## Success Metrics
- Referral rate: % of users who share
- Conversion rate: % of referred signups who go paid  
- Viral coefficient: referrals per user
- Target: Viral coefficient > 0.5 (every 2 users bring 1 more)

---

## Launch Plan
1. Week 1: Build referral link system + dashboard
2. Week 2: Add share modal + email sequences
3. Week 3: Add in-app prompts
4. Week 4: Launch with double credits for founding members
