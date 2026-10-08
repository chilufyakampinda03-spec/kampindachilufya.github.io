"use strict";
// Switch the colour theme; storage is optional and may be unavailable.
const themeButton = document.querySelector("#theme-toggle");
function setTheme(light) {
  document.body.classList.toggle("light", light);
  themeButton.textContent = light ? "Dark theme" : "Light theme";
  themeButton.setAttribute("aria-pressed", String(light));
}
try { setTheme(localStorage.getItem("portfolio-theme") === "light"); } catch (_) {}
themeButton.addEventListener("click", () => {
  const light = !document.body.classList.contains("light"); setTheme(light);
  try { localStorage.setItem("portfolio-theme", light ? "light" : "dark"); } catch (_) {}
});
// Filter the three projects and announce the result, including empty searches.
const search = document.querySelector("#project-search");
const projects = Array.from(document.querySelectorAll(".project-card"));
function filterProjects() {
  const query = search.value.trim().toLowerCase(); let count = 0;
  projects.forEach(project => {
    const match = project.dataset.search.toLowerCase().includes(query);
    project.hidden = !match; if (match) count++;
  });
  document.querySelector("#search-status").textContent = `${count} project${count === 1 ? "" : "s"} shown`;
  document.querySelector("#no-results").hidden = count !== 0;
}
search.addEventListener("input", filterProjects);
document.querySelector("#reset-search").addEventListener("click", () => { search.value = ""; filterProjects(); search.focus(); });
// Keep each expandable button's visible and accessible state in sync.
document.querySelectorAll(".detail-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
    button.textContent = open ? "Hide details −" : "Show details +";
  });
});
// Show local validation errors and a safe preview; never send form data.
const form = document.querySelector("#contact-form");
form.noValidate = true; // Custom feedback replaces browser bubbles when JS is available.
form.addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#preview").hidden = true;
  const values = {};
  ["name", "email", "message"].forEach(id => { values[id] = document.getElementById(id).value.trim(); });
  const errors = {
    name: values.name ? "" : "Enter your name; spaces alone are not valid.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) && document.querySelector("#email").validity.valid ? "" : "Enter a valid email address, such as name@example.com.",
    message: values.message ? "" : "Enter a message; spaces alone are not valid."
  };
  let firstInvalid = null;
  Object.entries(errors).forEach(([id, error]) => {
    document.getElementById(`${id}-error`).textContent = error;
    document.getElementById(id).setAttribute("aria-invalid", String(Boolean(error)));
    if (error && !firstInvalid) firstInvalid = document.getElementById(id);
  });
  if (firstInvalid) { document.querySelector("#form-status").textContent = "Please correct the highlighted fields."; firstInvalid.focus(); return; }
  values.topic = document.querySelector("#topic").value;
  Object.entries(values).forEach(([id, value]) => { document.getElementById(`preview-${id}`).textContent = value; });
  document.querySelector("#preview").hidden = false;
  document.querySelector("#form-status").textContent = "Your data was validated locally. No message was sent.";
});
