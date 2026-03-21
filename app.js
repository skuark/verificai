const PROMPTS = {
  es: (input) => `Eres un asistente de verificación de noticias. Voy a darte un texto, titular o URL que está circulando en redes sociales o mensajería. Tu tarea es analizarlo y generar dos cosas: un análisis interno y un mensaje de WhatsApp para compartir.

CONTENIDO A VERIFICAR:
${input}

INSTRUCCIONES:

Paso 1 — Identifica las afirmaciones clave: quién, qué, dónde, cuándo, qué se alega.

Paso 2 — Investiga usando búsqueda web:
- Cobertura en medios locales o nacionales consolidados
- Comunicados oficiales de policía, gobierno o instituciones relevantes
- Verificaciones previas de organizaciones como Maldita.es, Newtral, Verificat, AFP Factual, Reuters Fact Check
- Si el mismo bulo ha circulado antes en otros lugares o fechas (patrón recurrente)

Paso 3 — Clasifica con estas reglas estrictas:
- VERIFICADO VERDADERO: evidencia clara y directa de múltiples fuentes fiables. No clasificar como verdadero por mera plausibilidad.
- VERIFICADO FALSO: evidencia clara y directa que contradice o desmiente la afirmación (desmentido policial, comunicado oficial, verificación previa). No clasificar como falso por ausencia de evidencia.
- POSIBLE BULO (por defecto si hay ambigüedad): sin cobertura mediática local, sin comunicado oficial, coincide con patrones de bulo conocidos, o solo circula en redes sociales no verificadas.

Paso 4 — Valida las fuentes: solo cita fuentes de medios consolidados, instituciones oficiales u organizaciones de fact-checking acreditadas. No cites redes sociales, foros ni fuentes anónimas. Verifica que las URLs sean reales y accesibles.

Paso 5 — Genera el mensaje de WhatsApp en español con estas reglas:
- Nunca afirmes que algo es falso sin evidencia directa y documentada de que lo es
- Nunca afirmes que algo es verdadero sin evidencia sólida que lo confirme
- Cuando haya duda, usa siempre el encabezado: ⚠️ POSIBLE BULO
- Solo incluye afirmaciones respaldadas directamente por las fuentes citadas
- Incluye solo URLs reales y verificadas de medios rigurosos
- Explica brevemente por qué existe la duda (patrón conocido, ausencia de cobertura, desmentido oficial, etc.)
- Termina siempre con: "Contrasta siempre antes de compartir." El objetivo es que este mensaje también sea didáctico y ayude a la gente a pensar dos veces antes de compartir informaciones no contrastadas.
- Tono: neutral, factual, respetuoso. Sin alarmismo.
- Longitud: adecuada para WhatsApp (máximo 1500 caracteres si es posible)
- No incluyas descripciones raciales o étnicas de sospechosos salvo que provengan directamente de un comunicado policial oficial y sean directamente relevantes para la verificación
- Si es un patrón habitual de bulo, incluye casos similares que fueron desmentidos y las implicaciones que tuvo la difusión de ese bulo si las hubo, referenciando con un enlace a una fuente seria que lo desmienta.

Devuelve primero el análisis interno y luego el mensaje de WhatsApp listo para copiar.`,

  en: (input) => `You are a fact-checking assistant. I will give you a text, headline, or URL that is circulating on social media or messaging apps. Your task is to analyze it and produce two things: an internal analysis and a WhatsApp message to share.

CONTENT TO VERIFY:
${input}

INSTRUCTIONS:

Step 1 — Extract the core claims: who, what, where, when, and what is being alleged.

Step 2 — Research using web search:
- Coverage by established local or national news outlets
- Official statements from police, government, or relevant institutions
- Prior fact-checks by organizations such as Maldita.es, Newtral, AFP Factual, Reuters Fact Check, Snopes, Full Fact
- Whether the same or similar story has circulated before in other locations or times (recurring hoax pattern)

Step 3 — Classify using these strict rules:
- VERIFIED TRUE: clear, direct evidence from multiple credible sources confirming the claim. Do not classify as true based on plausibility alone.
- VERIFIED FALSE: clear, direct evidence explicitly contradicting or debunking the claim (police denial, official statement, prior fact-check). Do not classify as false based on absence of evidence alone.
- POSSIBLE HOAX (default when evidence is ambiguous): no coverage in local media, no official statement, matches known hoax patterns, or only circulates on unverified social media accounts.

Step 4 — Validate sources: only cite established news outlets, official institutions, or accredited fact-checking organizations. Do not cite social media posts, forums, or anonymous sources. Verify that URLs are real and accessible.

Step 5 — Generate the WhatsApp message in English with these rules:
- Never state something is false unless there is direct, documented evidence of it being false
- Never state something is true unless there is solid evidence confirming it
- Default framing when uncertain: ⚠️ POSSIBLE HOAX
- Only include claims directly supported by the cited sources
- Only include real, verified URLs from credible outlets
- Briefly explain why doubt exists (known pattern, lack of coverage, official denial, etc.)
- End with: "Always verify before sharing." The goal is for this message to be educational and help people think twice before sharing unverified information.
- Tone: neutral, factual, respectful. No alarmism.
- Length: suitable for WhatsApp (under 1500 characters if possible)
- Do not include racial or ethnic descriptions of suspects unless they come directly from an official police statement and are directly relevant to the verification
- If this is a recurring hoax pattern, include similar cases that were debunked and the consequences that the spread of that hoax had, if any, referencing a credible source that debunks it with a link

Return the internal analysis first, then the WhatsApp message ready to copy.`
};

const UI = {
  es: {
    tagline: "Genera un prompt de verificación y ábrelo en tu IA favorita",
    introP1: 'Los bulos se propagan más rápido que los desmentidos. <strong>VerificAI</strong> convierte cualquier noticia, titular o URL en un prompt de verificación estructurado, con instrucciones precisas para que la IA busque fuentes oficiales, detecte patrones de bulo conocidos y clasifique la información antes de que la compartas. No requiere registro y funciona con cualquier IA: ChatGPT, Gemini, Perplexity o Claude.',
    introP2: '',
    labelInput: "Noticia o URL a verificar",
    placeholder: "Pega aquí el texto, titular o URL que quieres contrastar...",
    genBtn: "Generar prompt",
    labelPrompt: "Prompt generado",
    copyBtn: "Copiar prompt al portapapeles",
    copiedBtn: "¡Copiado!",
    labelPlatforms: "Abrir directamente en",
    noteOpen: "Abre con prompt",
    noteCopy: "Copia y pega",
    step1: "Copia el prompt o pulsa un botón para abrirlo en la plataforma.",
    step2: "Si la plataforma no pre-rellena el texto, pégalo en el chat.",
    step3: "La IA analizará la noticia y generará un mensaje de WhatsApp con fuentes contrastadas.",
    footer: "El prompt se genera en tu navegador. La IA elegida procesa el contenido bajo sus propias políticas.",
    emptyAlert: "Por favor, escribe o pega el contenido que quieres verificar.",
  },
  en: {
    tagline: "Generate a fact-checking prompt and open it in your favourite AI",
    introP1: 'Hoaxes spread faster than fact-checks. <strong>VerificAI</strong> turns any news story, headline, or URL into a structured verification prompt — with precise instructions for the AI to search official sources, detect known hoax patterns, and classify the information before you share it. No sign-up required. Works with any AI: ChatGPT, Gemini, Perplexity, or Claude.',
    introP2: '',
    labelInput: "News or URL to verify",
    placeholder: "Paste the text, headline or URL you want to fact-check...",
    genBtn: "Generate prompt",
    labelPrompt: "Generated prompt",
    copyBtn: "Copy prompt to clipboard",
    copiedBtn: "Copied!",
    labelPlatforms: "Open directly in",
    noteOpen: "Opens with prompt",
    noteCopy: "Copy & paste",
    step1: "Copy the prompt or click a button to open it in the platform.",
    step2: "If the platform doesn't pre-fill the text, paste it in the chat.",
    step3: "The AI will analyse the content and generate a WhatsApp message with verified sources.",
    footer: "The prompt is generated in your browser. The AI you choose processes it under its own privacy policy.",
    emptyAlert: "Please write or paste the content you want to verify.",
  }
};

const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
let currentLang = browserLang.startsWith('en') ? 'en' : 'es';
let currentPrompt = '';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  const t = UI[lang];
  document.getElementById('tagline').textContent = t.tagline;
  document.getElementById('intro-p1').innerHTML = t.introP1;
  document.getElementById('intro-p2').textContent = t.introP2;

  document.getElementById('label-input').textContent = t.labelInput;
  document.getElementById('user-input').placeholder = t.placeholder;
  document.getElementById('gen-btn').innerHTML = t.genBtn + ' <span class="arrow">→</span>';
  document.getElementById('label-prompt').textContent = t.labelPrompt;
  document.getElementById('copy-btn').textContent = t.copyBtn;
  document.getElementById('label-platforms').textContent = t.labelPlatforms;
  document.getElementById('note-chatgpt').textContent = t.noteCopy;
  document.getElementById('note-gemini').textContent = t.noteCopy;
  document.getElementById('note-perplexity').textContent = t.noteOpen;
  document.getElementById('note-claude').textContent = t.noteCopy;
  document.getElementById('step1').textContent = t.step1;
  document.getElementById('step2').textContent = t.step2;
  document.getElementById('step3').textContent = t.step3;
  document.getElementById('footer-text').innerHTML = `<svg class="footer-icon opacity-55 inline-block align-middle mr-1" width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` + t.footer;
  if (currentPrompt) {
    const input = document.getElementById('user-input').value.trim();
    if (input) {
      currentPrompt = PROMPTS[lang](input);
      document.getElementById('prompt-box').textContent = currentPrompt;
    }
  }
}

function generatePrompt() {
  const input = document.getElementById('user-input').value.trim();
  if (!input) {
    alert(UI[currentLang].emptyAlert);
    return;
  }
  currentPrompt = PROMPTS[currentLang](input);
  document.getElementById('prompt-box').textContent = currentPrompt;
  // Pre-set all platform hrefs so the browser follows them as plain links —
  // no window.open() needed, which avoids mobile popup blockers entirely.
  const encoded = encodeURIComponent(currentPrompt);
  document.getElementById('btn-chatgpt').href    = 'https://chatgpt.com/';
  document.getElementById('btn-gemini').href     = 'https://gemini.google.com/app';
  document.getElementById('btn-perplexity').href = `https://www.perplexity.ai/?q=${encoded}`;
  document.getElementById('btn-claude').href     = 'https://claude.ai/new';
  const output = document.getElementById('prompt-output');
  output.classList.remove('visible');
  void output.offsetWidth; // force reflow to re-trigger animation
  output.classList.add('visible');
  document.getElementById('copy-btn').textContent = UI[currentLang].copyBtn;
  document.getElementById('copy-btn').classList.remove('copied');
  document.getElementById('prompt-output').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyPrompt() {
  if (!currentPrompt) return;
  navigator.clipboard.writeText(currentPrompt).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = UI[currentLang].copiedBtn;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = UI[currentLang].copyBtn;
      btn.classList.remove('copied');
    }, 2000);
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function openPlatform(platform, e) {
  if (!currentPrompt) {
    e.preventDefault();
    return;
  }
  // Perplexity pre-fills via ?q= so no clipboard needed.
  // ChatGPT, Gemini and Claude don't support URL pre-fill, so copy to clipboard.
  if (platform !== 'perplexity') {
    navigator.clipboard.writeText(currentPrompt).then(() => {
      const msg = currentLang === 'es'
        ? 'Prompt copiado — pégalo en el chat'
        : 'Prompt copied — paste it in the chat';
      showToast(msg);
    });
  }
  // Navigation is handled by the pre-set href — no window.open() needed.
}

// Initialize UI with the detected browser language
setLang(currentLang);
