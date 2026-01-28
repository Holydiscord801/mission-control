// Paste this entire block into browser console
const importData = {
  "columns": ["backlog", "approved", "in-progress", "review", "done"],
  "cards": [
    {"id":"17","title":"Brand Audit: Landing vs CRM/Extension","column":"done","assignee":"max","project":"marketing","priority":"high"},
    {"id":"18","title":"Brand Unification: CRM + Extension","column":"done","assignee":"max","project":"crm","priority":"high"},
    {"id":"14","title":"Test Extension Shadow DOM Refactor","column":"review","assignee":"micah","project":"extension","priority":"high"},
    {"id":"2","title":"Create features screenshots","column":"approved","assignee":"micah","project":"landing","priority":"high"},
    {"id":"4","title":"Review landing page messaging","column":"backlog","assignee":"micah","project":"landing","priority":"medium"},
    {"id":"19","title":"Deploy Mission Control to Vercel + Supabase","column":"done","assignee":"friday","project":"ops","priority":"high"},
    {"id":"20","title":"Website: Expand positioning beyond job seekers","column":"backlog","assignee":"friday","project":"landing","priority":"high"},
    {"id":"21","title":"Website: Add segment-specific use cases section","column":"backlog","assignee":"friday","project":"landing","priority":"high"},
    {"id":"22","title":"Website: Update hero copy for broader appeal","column":"backlog","assignee":"friday","project":"landing","priority":"high"},
    {"id":"23","title":"Website: Add sticky value prop","column":"backlog","assignee":"friday","project":"landing","priority":"medium"}
  ],
  "activity": [],
  "projects": {
    "landing": {"name": "Landing Site", "color": "#8b5cf6"},
    "crm": {"name": "CRM App", "color": "#FF6B35"},
    "extension": {"name": "Extension", "color": "#10b981"},
    "ops": {"name": "Operations", "color": "#f59e0b"},
    "marketing": {"name": "Marketing", "color": "#ec4899"}
  }
};
data = importData;
saveData();
render();
console.log("✅ Data imported!");
