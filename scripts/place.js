
/* =========================================
   Footer dates: current year & last modified
   ========================================= */
const yearSpan = document.getElementById("year");
const lastModSpan = document.getElementById("last-modified");

const now = new Date();
yearSpan.textContent = now.getFullYear();

// Format last modified using the user's locale
const lastMod = new Date(document.lastModified);
lastModSpan.textContent = lastMod.toLocaleString(undefined, {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});

/* =========================================
   Weather: static inputs (course requirement)
   Set these to match the values in the HTML.
   Units: Metric (°C, km/h) for Kenya
   ========================================= */
const temperatureC = 8;   // °C  (match #temp)
const windKmh = 10;       // km/h (match #wind)

document.getElementById("temp").textContent = temperatureC;
document.getElementById("wind").textContent = windKmh;

/* =========================================
   Wind Chill calculation
   Requirements:
   - Only compute when: T <= 10°C AND V > 4.8 km/h
   - Otherwise display "N/A"
   - Function returns the computed value using
     a single return statement.
   Formula (Metric):
   WCT = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
   (T in °C, V in km/h)
   ========================================= */
function calculateWindChill(Tc, Vkmh) {
  // One-line return (as required)
  return 13.12 + 0.6215 * Tc - 11.37 * Math.pow(Vkmh, 0.16) + 0.3965 * Tc * Math.pow(Vkmh, 0.16);
}

// Gate the call per viable calculation rules
const windChillSpan = document.getElementById("windchill");
if (temperatureC <= 10 && windKmh > 4.8) {
  const wc = calculateWindChill(temperatureC, windKmh);
  // Round to the nearest integer for display (common convention)
  windChillSpan.textContent = Math.round(wc) + " °C";
} else {
  windChillSpan.textContent = "N/A";
}
``
