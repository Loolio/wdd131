
// scripts/getdates.js

// Helper: set textContent safely if element exists
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// 1) Current year for the copyright span
const now = new Date();
setText('currentYear', now.getFullYear());

// 2) Last modified date/time from the document object
// The assignment says we can use it as-is (a simple string).
setText('lastModified', document.lastModified);
