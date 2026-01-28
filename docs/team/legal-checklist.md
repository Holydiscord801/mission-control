# Legal Implementation Checklist for Coreline

## Files Created
- `TERMS-OF-SERVICE.md` — Ready to convert to webpage
- `PRIVACY-POLICY.md` — Ready to convert to webpage

---

## 📍 Where Things Go

### Landing Site (e.g., coreline.com)

```
/terms           → Terms of Service page
/privacy         → Privacy Policy page
```

**Footer (every page):**
```html
<footer>
  <a href="/terms">Terms of Service</a>
  <a href="/privacy">Privacy Policy</a>
  <span>© 2026 Core Line LLC</span>
</footer>
```

---

### CRM App (/app)

**Footer or Settings page:**
```html
<a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
```

**Settings page additions:**
- "Delete My Account" button (required for GDPR/CCPA)
- "Export My Data" button (good practice)

---

### Signup Flow (CRITICAL)

**Must have clickwrap agreement:**

```jsx
// React example
<label>
  <input 
    type="checkbox" 
    required 
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
  />
  I agree to the <a href="/terms" target="_blank">Terms of Service</a> and 
  <a href="/privacy" target="_blank">Privacy Policy</a>
</label>

<button type="submit" disabled={!agreed}>
  Create Account
</button>
```

**Requirements:**
- [ ] Checkbox must be UNCHECKED by default
- [ ] Links must open in new tab (target="_blank")
- [ ] Cannot proceed without checking
- [ ] Log timestamp of acceptance with user record

---

### Chrome Extension

**manifest.json — already should have:**
```json
{
  "name": "Coreline - Job Search Tracker",
  "description": "Save and organize jobs with one click",
  ...
}
```

**Chrome Web Store listing requires:**
- [ ] Privacy Policy URL (link to /privacy)
- [ ] Clear description of permissions
- [ ] Explanation of data handling

**Extension first-run or install page:**
```
"Coreline helps you save job details from pages you're viewing.

By using this extension, you agree to our Terms of Service 
and Privacy Policy.

The extension only captures data when YOU click the save button.
We don't track your browsing or run in the background."
```

---

## 📝 What to Fill In

Before publishing, replace these placeholders:

| Placeholder | Replace With |
|-------------|--------------|
| `[DATE]` | Publication date (e.g., January 27, 2026) |
| `[SUPPORT EMAIL]` | support@coreline.com or similar |
| `[PRIVACY EMAIL]` | privacy@coreline.com or same as support |
| `[BUSINESS ADDRESS]` | Core Line LLC registered address |

---

## ✅ Implementation Checklist

### Week 1: Setup
- [ ] Convert TERMS-OF-SERVICE.md to /terms page
- [ ] Convert PRIVACY-POLICY.md to /privacy page
- [ ] Add footer links to landing site
- [ ] Fill in all placeholder values

### Week 2: App Integration
- [ ] Add clickwrap to signup flow
- [ ] Log ToS acceptance with timestamp in user record
- [ ] Add footer links to CRM app
- [ ] Add "Delete Account" to Settings
- [ ] Add "Export Data" to Settings (JSON download)

### Week 3: Chrome Extension
- [ ] Update Chrome Web Store listing with Privacy Policy link
- [ ] Add first-run info screen (optional but nice)
- [ ] Verify permissions descriptions are clear

---

## 🔒 Data You Need to Track

For legal compliance, store with each user:

```typescript
interface UserLegalRecord {
  tosAcceptedAt: Date;          // When they agreed to ToS
  tosVersion: string;           // Which version (e.g., "2026-01-27")
  privacyAcceptedAt: Date;      // When they agreed to Privacy Policy  
  privacyVersion: string;       // Which version
  marketingOptIn: boolean;      // Did they opt into marketing?
  marketingOptInAt?: Date;      // When (if yes)
  dataExports: DataExport[];    // Log of data exports
  deletionRequestedAt?: Date;   // If they requested deletion
}
```

---

## 📧 Email Notifications

When you update ToS or Privacy Policy significantly:

**Email subject:** "Updates to Coreline Terms of Service"

**Email body:**
```
Hi [Name],

We've updated our Terms of Service / Privacy Policy.

Key changes:
- [Brief summary of what changed]

The updated terms take effect on [DATE].

By continuing to use Coreline after this date, you agree to the updated terms.

If you have questions, reply to this email.

— The Coreline Team

Read the full Terms of Service: [LINK]
Read the full Privacy Policy: [LINK]
```

---

## 🚨 If Someone Asks to Delete Their Data

**CCPA/GDPR require response within 30-45 days**

1. Verify identity (email from registered account)
2. Export their data (send to them)
3. Delete from database
4. Delete from backups within 30 days
5. Confirm deletion in writing
6. Log the request and completion

---

## Done!

With these docs implemented, you have:
- ✅ Legal protection via ToS disclaimers
- ✅ Privacy compliance (CCPA/GDPR basics)
- ✅ Chrome Web Store requirements met
- ✅ User-agent positioning for extension
- ✅ Clear data handling disclosures
