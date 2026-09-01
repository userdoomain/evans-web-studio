// ===== WhatsApp =====
const WA_NUMBER = "5521981588788";
const wa = (text) => "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);

const waMessages = {
  main: "Hey Evans, how's it going? I saw your portfolio (Evans Web) and I'd like to discuss a website for my company.",
  final: "Hey Evans, how are you? I want to take the next step to create my business website. Shall we talk?",
  similar: (name) => `Hey Evans! I saw the "${name}" project in your portfolio and really liked it. I want a similar style for my business, can we talk?`
};

// ===== Projects =====
const projects = [
  { img: "assets/proj-01.webp", name: "Evolution Fit Studio", cat: "fitness", catLabel: "Fitness", desc: "Modern gym with schedules and plans.", url: "https://userdoomain.github.io/evolution-fit-studio/", keywords: ["academia", "fitness", "treino", "musculacao", "crossfit", "esporte"] },
  { img: "assets/proj-02.webp", name: "Imperial Barber", cat: "barbearias", catLabel: "Barbershop", desc: "Classic-style barbershop with booking.", url: "https://userdoomain.github.io/imperial-barber-site/", keywords: ["barbearia", "barba", "cabelo", "barbeiro", "salao"] },
  { img: "assets/proj-03.webp", name: "Nova Prime Store", cat: "servicos", catLabel: "Service", desc: "Modern and fast store for catalog.", url: "https://userdoomain.github.io/nova-prime-store/", keywords: ["loja", "store", "ecommerce", "vendas", "produtos", "roupas", "comercio"] },
  { img: "assets/proj-04.webp", name: "Sabor e Brasa Premium", cat: "restaurantes", catLabel: "Restaurant", desc: "Restaurant with menu and highlights.", url: "https://userdoomain.github.io/sabor-e-brasa-premium/", keywords: ["restaurante", "comida", "lanchonete", "pizza", "hamburguer", "churrascaria", "bar", "cafe", "gastronomia"] },
  { img: "assets/proj-05.webp", name: "Aurora Palace Hotel", cat: "hoteis", catLabel: "Hotel & Accommodation", desc: "Hotel with rooms and gallery.", url: "https://userdoomain.github.io/aurora-palace-hotel/", keywords: ["hotel", "pousada", "hospedagem", "resort", "quartos", "turismo"] },
  { img: "assets/proj-06.webp", name: "Advocacia Premium", cat: "servicos", catLabel: "Service", desc: "Professional law firm.", url: "https://userdoomain.github.io/advocacia/", keywords: ["advogado", "advocacia", "direito", "juridico", "escritorio"] },
  { img: "assets/proj-07.webp", name: "Clínica Vida+", cat: "saude", catLabel: "Health", desc: "Medical clinic with specialties.", url: "https://userdoomain.github.io/clinica/", keywords: ["clinica", "medico", "saude", "consultorio", "hospital", "pediatra", "cardiologista"] },
  { img: "assets/proj-08.webp", name: "VetCare Veterinária", cat: "saude", catLabel: "Health", desc: "Veterinary clinic and services.", url: "https://userdoomain.github.io/clinica-veterinaria/", keywords: ["veterinario", "pet", "animal", "cachorro", "gato", "clinica pet"] },
  { img: "assets/proj-09.webp", name: "Oficina Mecânica Pro", cat: "servicos", catLabel: "Service", desc: "Automotive workshop and quotes.", url: "https://userdoomain.github.io/oficina-de-carro/", keywords: ["oficina", "carro", "mecanico", "auto", "veiculos", "pneu", "reparo"] },
  { img: "assets/proj-10.webp", name: "Pet Shop Amigo", cat: "servicos", catLabel: "Service", desc: "Pet shop with bathing, grooming and products.", url: "https://userdoomain.github.io/pet-shop/", keywords: ["petshop", "banho e tosa", "racao", "gatos", " caes"] },
  { img: "assets/proj-11.webp", name: "Salão Beleza & Arte", cat: "servicos", catLabel: "Service", desc: "Beauty salon and portfolio.", url: "https://userdoomain.github.io/salao-de-beleza/", keywords: ["salao de beleza", "cabelereiro", "manicure", "estetica", "depilacao"] },
  { img: "assets/proj-12.webp", name: "Salão de Festas Celebrar", cat: "servicos", catLabel: "Service", desc: "Events venue and reservations.", url: "https://userdoomain.github.io/salao-de-festa/", keywords: ["salao de festas", "buffet", "eventos", "casamento", "aniversario"] }
];

const grid = document.getElementById("projectsGrid");
function renderProjects(filter = "all") {
  grid.innerHTML = "";
  projects
    .filter((p) => filter === "all" || p.cat === filter)
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-media">
          <img src="${p.img}" alt="Preview ${p.name}" loading="lazy" />
          <div class="project-tags">
            <span class="tag tag-cat">${p.catLabel}</span>
            <span class="tag tag-demo">Demo</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-name">${p.name}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-actions">
            <a class="btn btn-primary" href="${p.url}" target="_blank" rel="noopener">View project</a>
            <a class="btn btn-outline" data-wa="similar" data-project="${p.name}" href="#">Similar website</a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  bindWhatsApp();
}
renderProjects();

// Filters
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});

// ===== Features =====
const icons = {
  design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  mobile: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>',
  whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2z" fill="currentColor" stroke="none"/><path d="M8.8 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.4-.1.7.3.6.8 1.3 1.5 1.8.5.3 1 .2 1.3-.1l.4-.5c.2-.2.4-.2.6-.1l1.9.9c.5.2.5.4.5.7v.6c0 .5-.3.9-1 1-1.6.5-3.7.2-5.2-1.2-1.8-1.7-2-3.4-1.4-4.9.3-.7 1-1.1 1.8-1.3z" fill="#fff" stroke="none"/>',
  seo: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>',
  domain: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
  host: '<rect x="2" y="4" width="20" height="6" rx="1"/><rect x="2" y="14" width="20" height="6" rx="1"/><line x1="6" y1="7" x2="6" y2="7"/><line x1="6" y1="17" x2="6" y2="17"/>',
  maint: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>'
};

const features = [
  { icon: "design", title: "Custom design", desc: "Clean and professional look focused on your brand." },
  { icon: "mobile", title: "Perfect mobile version", desc: "Your customer opens it on mobile and browses without lag." },
  { icon: "whatsapp", title: "WhatsApp button", desc: "Easy clicks to close sales directly in your chat." },
  { icon: "seo", title: "Basic SEO", desc: "Ready to be found more easily on Google." },
  { icon: "domain", title: "Own domain", desc: "Your .com.br address configured properly." },
  { icon: "host", title: "Hosting included", desc: "Fast, secure website that's always online." },
  { icon: "maint", title: "Support and tweaks", desc: "Help whenever you need to update something." }
];

const fGrid = document.getElementById("featuresGrid");
fGrid.innerHTML = features.map((f) => `
  <div class="feature">
    <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[f.icon]}</svg></div>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
  </div>`).join("");

// ===== WhatsApp binding =====
function bindWhatsApp() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const key = el.dataset.wa;
    let msg;
    if (key === "similar") {
      msg = waMessages.similar(el.dataset.project || "");
    } else {
      msg = waMessages[key] || waMessages.main;
    }
    el.setAttribute("href", wa(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}
bindWhatsApp();

// ===== Chatbot Widget Logic =====
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("open");
});
chatClose.addEventListener("click", () => {
  chatBox.classList.remove("open");
});

function addMsg(text, sender = "bot", html = null) {
  const div = document.createElement("div");
  div.className = `chat-msg ${sender}`;
  if (html) {
    div.innerHTML = html;
  } else {
    div.textContent = text;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processUserMessage(rawText) {
  const text = rawText.toLowerCase().trim();
  addMsg(rawText, "user");
  chatInput.value = "";

  setTimeout(() => {
    if (text.includes("preço") || text.includes("valor") || text.includes("quanto custa") || text.includes("custa")) {
      const waLink = wa("Hey Evans! I saw the site and want to know more about the prices and values to create a website for my company.");
      addMsg("Prices vary depending on what your business needs (number of pages, features, etc.). The price is very fair and agreed directly with Evans on WhatsApp! 📱", "bot");
      addMsg("", "bot", `
        <a href="${waLink}" target="_blank" class="btn btn-whatsapp" style="font-size:0.82rem; padding:8px 14px; margin-top:6px; display:inline-flex;">Talk Prices on WhatsApp</a>
      `);
      return;
    }

    // Search project by keyword
    let matched = projects.find(p => p.keywords.some(k => text.includes(k)) || text.includes(p.name.toLowerCase()));
    
    if (matched) {
      const waProj = wa(`Hey Evans! I saw the demo project "${matched.name}" on your site and I want a similar website for my company.`);
      addMsg(`I found the ideal project for your industry! See the preview of **${matched.name}** below:`, "bot");
      addMsg("", "bot", `
        <div class="chat-card-preview">
          <img src="${matched.img}" alt="${matched.name}" />
          <div class="chat-card-body">
            <strong>${matched.name}</strong>
            <span style="font-size:0.78rem; color:#9ca3af;">${matched.desc}</span>
            <div class="chat-card-actions">
              <a href="${matched.url}" target="_blank" class="c-view">View Site</a>
              <a href="${waProj}" target="_blank" class="c-wa">I want one like this</a>
            </div>
          </div>
        </div>
      `);
    } else {
      const waGeneral = wa(`Hey Evans! I saw your site and would like to create a website for my company. Can you help me?`);
      addMsg("Got it! To serve you best and give you an exact quote for your business, contact Evans directly on WhatsApp:", "bot");
      addMsg("", "bot", `
        <a href="${waGeneral}" target="_blank" class="btn btn-whatsapp" style="font-size:0.82rem; padding:8px 14px; margin-top:6px; display:inline-flex;">Chat on WhatsApp now</a>
      `);
    }
  }, 400);
}

chatSend.addEventListener("click", () => {
  if (chatInput.value.trim()) processUserMessage(chatInput.value);
});
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim()) processUserMessage(chatInput.value);
});

document.querySelectorAll(".quick-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const q = btn.dataset.query;
    if (q === "preco") {
      processUserMessage("What's the price?");
    } else {
      processUserMessage(`I want a website for ${q}`);
    }
  });
});

// ===== Mobile nav =====
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();
