const sidebar = document.querySelector(".sidebar");

// the div contains the <p> which contains the <a> which will link to the page
const home = document.createElement("div");
const homep = document.createElement("p");
const homea = document.createElement("a");
homea.textContent = "Home";
homea.setAttribute("href", "index.html");
homep.appendChild(homea);
home.appendChild(homep);

const about = document.createElement("div");
const aboutp = document.createElement("p");
const abouta = document.createElement("a");
abouta.textContent = "About";
aboutp.textContent = "| "
abouta.setAttribute("href", "about-me.html");
aboutp.appendChild(abouta);
about.appendChild(aboutp);

const projects = document.createElement("div");
const projectsp = document.createElement("p");
const projectsa = document.createElement("a");
projectsa.textContent = "Projects";
projectsp.textContent = "| "
projectsa.setAttribute("href", "projects.html");
projectsp.appendChild(projectsa);
projects.appendChild(projectsp);

const log = document.createElement("div");
const logp = document.createElement("p");
const loga = document.createElement("a");
loga.textContent = "Log";
logp.textContent = "| "
loga.setAttribute("href", "log.html");
logp.appendChild(loga);
log.appendChild(logp);

const contact = document.createElement("div");
const contactp = document.createElement("p");
const contacta = document.createElement("a");
contacta.textContent = "Contact";
contactp.textContent = "| ";
contacta.setAttribute("href", "contact.html");
contactp.appendChild(contacta);
contact.appendChild(contactp);

// sb-op stands for sidebar option
home.classList.add("sb-op", "home");
about.classList.add("sb-op", "about");
projects.classList.add("sb-op", "projects");
log.classList.add("sb-op", "log");
contact.classList.add("sb-op", "contact");

sidebar.append(home, about, projects, log, contact);