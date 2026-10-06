/* UI sans dépendances. Le contenu éditorial se trouve dans data/portfolio.js. */
(() => {
  'use strict';
  const data = window.portfolio;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const safeUrl = value => {
    if (!value) return null;
    try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
  };
  const link = (url, label, className = '') => `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span></a>`;
  const technologyLogos = {"Python": "python", "Java": "java", "C": "c", "HTML/CSS": "html", "PostgreSQL": "postgresql", "MySQL": "mysql", "MongoDB": "mongodb", "TensorFlow": "tensorflow", "PyTorch": "pytorch", "Scikit-learn": "scikit", "Docker": "docker", "Kubernetes": "kubernetes", "K3d": "kubernetes", "Prometheus": "prometheus", "Grafana": "grafana", "Linux": "linux", "Git": "git", "FastAPI": "fastapi", "Angular": "angular", "Streamlit": "streamlit", "AWS": "aws", "Pandas": "pandas", "pandas": "pandas", "R": "r", "Mistral API": "mistral", "Twilio": "twilio", "Claude Code": "claude", "OpenSearch": "opensearch", "WhatsApp Business API": "whatsapp", "OpenAI API": "openai", "Codex": "openai", "Whisper": "openai", "Power BI": "powerbi", "LangChain": "langchain", "n8n": "n8n", "BERT": "huggingface", "CamemBERT": "huggingface"};
  const technologyLogo = label => technologyLogos[label] ? `<img class="technology-logo" src="assets/logos/${technologyLogos[label]}.svg" alt="" width="24" height="24" loading="lazy">` : "";
  const socialLinks = ['github', 'linkedin'].map(key => {
    const label = key === 'github' ? 'GitHub' : 'LinkedIn';
    const url = safeUrl(data.links[key]);
    return url ? link(url, label) : `<span class="unavailable">${label} <small>à renseigner</small></span>`;
  }).join('');
  document.querySelector('#hero-links').innerHTML = socialLinks + '<a href="#contact">Me contacter ↗</a>';
  document.querySelector('#contact-links').innerHTML = socialLinks;
  const cv = data.links.cv;
  if (cv && (/^\.?\/?assets\/[a-zA-Z0-9_./-]+\.pdf$/.test(cv) || safeUrl(cv))) {
    document.querySelector('#cv-action').innerHTML = `<a class="button" href="${escape(cv)}" download>Télécharger mon CV <span aria-hidden="true">↓</span></a>`;
  } else {
    document.querySelector('#cv-action').innerHTML = '<button class="button" disabled title="Le PDF du CV doit encore être ajouté">CV à ajouter <span aria-hidden="true">↓</span></button>';
  }
  const email = data.links.email;
  if (email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    const gmailUrl = new URL('https://mail.google.com/mail/');
    gmailUrl.search = new URLSearchParams({view: 'cm', fs: '1', to: email, su: 'Opportunité Data & IA — Safae Chouai'}).toString();
    document.querySelector('#contact-action').innerHTML = `<a class="button primary" href="${escape(gmailUrl.href)}" target="_blank" rel="noopener noreferrer">Discutons d’une opportunité <span aria-hidden="true">↗</span></a>`;
  } else {
    document.querySelector('#contact-action').innerHTML = '<p class="missing-contact">Adresse de contact à renseigner</p>';
  }
  document.querySelector('#year').textContent = new Date().getFullYear();

  const art = {
    rag: '<div class="art-label">RETRIEVAL-AUGMENTED GENERATION</div><div class="rag-flow"><div class="flow-box"><b>▤</b>Documents</div><span class="flow-arrow">→</span><div class="flow-box"><b>⌕</b>Contexte</div><span class="flow-arrow">→</span><div class="flow-box"><b>✳</b>Génération</div></div><div class="rag-result"><span>↳</span> Recherche hybride + réordonnancement</div><span class="art-footnote">Pipeline documentaire · synthèse du CV</span>',
    assistant: '<div class="art-label">MELISSA / CONVERSATION & AUTOMATISATION</div><div class="chat-art"><div class="chat-bubble">WhatsApp Business · Twilio</div><div class="chat-bubble">Melissa · GPT-4 & Whisper</div><div class="chat-bubble">Workflows n8n</div></div><span class="art-footnote">Assistante multilingue · producteurs agricoles</span>',
    travel: '<div class="art-label">COLLABORATION MULTI-AGENTS</div><div class="agents-art"><div class="agent-mini"><b>⌕</b>Vols & séjours</div><span class="agent-connector">⇄</span><div class="agent-mini central"><b>✳</b>Coordonner</div><span class="agent-connector">⇄</span><div class="agent-mini"><b>⌖</b>Activités & météo</div></div><span class="art-footnote">Coordination HTTP/JSON · quatre agents spécialisés</span>'
  };
  art.nlp = '<div class="art-label">DU TEXTE AU SENTIMENT</div><div class="agents-art"><div class="agent-mini"><b>▤</b>Avis</div><span class="agent-connector">→</span><div class="agent-mini central"><b>✳</b>BERT / RNN</div><span class="agent-connector">→</span><div class="agent-mini"><b>≋</b>3 classes</div></div><span class="art-footnote">Entraînement · comparaison · évaluation</span>';
  art.monitoring = '<div class="art-label">OBSERVABILITÉ CLOUD-NATIVE</div><div class="agents-art"><div class="agent-mini"><b>⬡</b>Kubernetes</div><span class="agent-connector">→</span><div class="agent-mini central"><b>⌁</b>Prometheus</div><span class="agent-connector">→</span><div class="agent-mini"><b>▥</b>Grafana</div></div><span class="art-footnote">Métriques · dashboards · alertes</span>';
  const projectCovers = {
    travel: ['VOYAGEPLUS', 'Un voyage, quatre agents.', ['Python', 'FastAPI', 'Streamlit'], 'Vols · Séjours · Activités · Météo'],
    monitoring: ['KUBERNETES MONITORING', 'Observer. Comprendre. Alerter.', ['Kubernetes', 'Prometheus', 'Grafana'], 'Infrastructure & observabilité'],
    nlp: ['SENTIMENT ANALYSIS', 'Ce que les avis racontent.', ['PyTorch', 'TensorFlow', 'BERT'], 'Négatif / Neutre / Positif'],
    jobs: ['DATA SCIENCE JOBS', 'Lire le marché de l’emploi.', ['Power BI', 'Python', 'Pandas'], 'France Travail → Analyse → Power BI'],
    regression: ['RÉGRESSION MULTIPLE', 'Expliquer les données avec R.', ['R', 'ggplot2', 'lmtest'], 'Modélisation · Diagnostics · Évaluation'],
    scraping: ['WEB SCRAPING JUMIA', 'Du web aux données structurées.', ['Python', 'Pandas', 'BeautifulSoup'], 'Collecte · Nettoyage · Export'],
    timeseries: ['SÉRIES TEMPORELLES', 'Analyser une évolution dans le temps.', ['Python', 'TensorFlow', 'Pandas'], 'Action Microsoft · ARIMA · Réseaux récurrents'],
    sentiment: ['ANALYSE DE SENTIMENTS', 'Explorer la tonalité des textes.', ['Python', 'Streamlit', 'Pandas'], 'TextBlob · Analyse de textes · Export CSV']
  };
  Object.entries(projectCovers).forEach(([id, [label, title, logos, note]]) => {
    art[id] = `<div class="project-cover cover-${id}"><span class="cover-label">${label}</span><strong>${title}</strong><div class="cover-logos">${logos.map(name => `<span>${technologyLogo(name)}${escape(name)}</span>`).join('')}</div><span class="cover-note">${note}</span></div>`;
  });
  const metrics = project => project.metrics ? `<div class="project-metrics">${project.metrics.map(metric => `<div><strong>${escape(metric.value)}</strong><span>${escape(metric.label)}</span></div>`).join('')}</div>` : '';
  const renderProject = project => `<article data-group="${escape(project.group)}" class="project-card ${project.featured ? 'featured' : ''}"><div class="project-art" ${project.image && !projectCovers[project.id] ? '' : 'aria-hidden="true"'}>${project.image && !projectCovers[project.id] ? `<figure class="project-screenshot"><img src="${escape(project.image)}" alt="${escape(project.imageAlt)}" loading="lazy" width="1267" height="735"></figure>` : art[project.id] || `<div class="art-label">${escape(project.category)}</div><div class="agents-art">${project.flow.map((step, index) => `${index ? '<span class="agent-connector">→</span>' : ''}<div class="agent-mini ${index === 1 ? 'central' : ''}"><b>${['▤','⌘','↗'][index]}</b>${escape(step)}</div>`).join('')}</div><span class="art-footnote">${escape(project.name)}</span>`}</div><div class="project-copy"><div class="project-meta"><span>${escape(project.category)}</span><span class="project-number">/${escape(project.number)}</span></div><h3>${escape(project.title)}</h3><p class="project-description">${escape(project.description)}</p><div class="tags">${project.tags.map(tag => `<span class="tag">${technologyLogo(tag)}${escape(tag)}</span>`).join('')}</div>${metrics(project)}<div class="project-footer"><span>${escape(project.organization)}</span></div>${safeUrl(project.github) ? `<div class="repo-link">${link(safeUrl(project.github), 'Explorer le dépôt GitHub')}</div>` : ''}</div></article>`;
  document.querySelector('#project-grid').innerHTML = data.projects.filter(project => project.primary).map(renderProject).join('');
  document.querySelector('#other-project-grid').innerHTML = data.projects.filter(project => !project.primary).map(renderProject).join('');
  document.querySelector('#experience-list').innerHTML = data.experiences.map(item => `<article class="experience-item"><div class="experience-top"><h3>${escape(item.company)}</h3><span>${escape(item.period)}</span></div><p class="experience-role">${escape(item.role)}</p><p class="experience-description">${escape(item.text)}</p>${item.contributions ? `<ul class="experience-contributions">${item.contributions.map(value => `<li>${escape(value)}</li>`).join('')}</ul>` : ''}<div class="tags">${item.stack.map(value => `<span class="tag">${escape(value)}</span>`).join('')}</div>${metrics(item.caseStudy)}${safeUrl(item.caseStudy.github) ? `<div class="repo-link">${link(safeUrl(item.caseStudy.github), "Explorer le dépôt GitHub")}</div>` : ""}</article>`).join('');
  document.querySelector('#skills-grid').innerHTML = data.domains.map(domain => `<article class="skill-card"><span class="skill-icon" aria-hidden="true">${escape(domain.icon)}</span><h3>${escape(domain.title)}</h3><ul>${domain.items.map(item => `<li>${technologyLogo(item)}${escape(item)}</li>`).join('')}</ul></article>`).join('');

  document.querySelector('#education-list').innerHTML = data.education.map(item => `<article class="education-card"><div class="education-symbol" aria-hidden="true">↗</div><div><p class="eyebrow">${escape(item.stage)}</p><h3>${escape(item.title)}</h3>${item.school ? `<p>${escape(item.school)}</p>` : ''}${item.period || item.location ? `<p class="education-meta">${[item.period, item.location].filter(Boolean).map(escape).join(' · ')}</p>` : ''}</div></article>`).join('');
  const renderCertification = item => `<article class="certification-card"><div class="issuer-badge" aria-hidden="true">${escape(item.badge)}</div><div class="certification-content"><p class="certificate-issuer">${escape(item.issuer)}</p><h3>${safeUrl(item.url) ? link(safeUrl(item.url), item.name) : escape(item.name)}</h3>${item.date ? `<p class="certificate-date">${escape(item.date)}</p>` : ''}</div></article>`;
  document.querySelector('#certification-list').innerHTML = data.certifications.slice(0, 6).map(renderCertification).join('');
  document.querySelector('#additional-certifications').innerHTML = data.certifications.slice(6).map(renderCertification).join('');
  const structuredData = document.createElement('script'); structuredData.type = 'application/ld+json'; structuredData.textContent = JSON.stringify({'@context':'https://schema.org','@type':'Person',name:data.name,jobTitle:'Data & AI Engineer junior',email:data.links.email,sameAs:[data.links.github,data.links.linkedin]}); document.head.append(structuredData);
  const dialog = document.querySelector('#project-dialog');
  let trigger = null;
  document.querySelector('main').addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (!button) return;
    const project = [...data.projects, ...data.experiences.map(item => item.caseStudy)].find(item => item.id === button.dataset.project);
    if (!project) return;
    trigger = button;
    const fields = [['Le problème', project.problem], ['La solution', project.solution], ['Architecture', project.architecture], ['Ma contribution', project.contribution], ['Technologies', project.stack.length ? project.stack.join(' · ') : 'À renseigner après analyse du CV et du code.'], ['Évaluation & résultats', project.evaluation], ['Périmètre & limites', project.limits]];
    const links = [[project.github, 'Voir le code'], [project.demo, 'Voir la démo']].filter(([url]) => safeUrl(url)).map(([url, label]) => link(safeUrl(url), label, 'button')).join('');
    document.querySelector('#dialog-content').innerHTML = `<h2 id="dialog-title">${escape(project.name)}</h2><p>${escape(project.organization)} · ${escape(project.type)}</p>${project.status !== 'verified' ? '<p class="editorial-notice">Source actuelle : brief utilisateur. Cette fiche est une trame à vérifier ; elle ne constitue pas une description technique validée.</p>' : ''}${fields.filter(([, value]) => value).map(([title, value]) => `<h3>${title}</h3><p>${escape(value)}</p>`).join('')}${project.todos.length ? `<h3>À documenter avant publication</h3><ul>${project.todos.map(todo => `<li>${escape(todo)}</li>`).join('')}</ul>` : ''}${project.image ? `<figure class="project-screenshot"><img src="${escape(project.image)}" alt="${escape(project.imageAlt)}" loading="lazy" width="1267" height="735"></figure>` : ""}${links ? `<div class="dialog-links">${links}</div>` : ''}`;
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
    dialog.querySelector('.dialog-close').focus();
  });
  const closeDialog = () => { dialog.close(); document.body.classList.remove('modal-open'); trigger?.focus(); };
  dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeDialog();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); trigger?.focus(); });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const closeMenu = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Ouvrir le menu'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) nav.querySelectorAll('a').forEach(item => {
        const active = item.hash === `#${entry.target.id}`;
        item.classList.toggle('active', active);
        if (active) item.setAttribute('aria-current', 'location'); else item.removeAttribute('aria-current');
      });
    }), { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
