/* ================================================================
   labs67-i18n.js v2.1
   Universal i18n plugin for ALL LABS67 sites.

   Usage — add before </body>:
     <script src="labs67-i18n.js"></script>

   Supported translation sources (checked in order):
     1. window.I18N = { key: { be:'...', en:'...' } }  (key→lang)
     2. window.i18n = { be: { key:'...' }, en: { key:'...' } }  (lang→key, auto-converted)
     3. window.T    = same auto-detect (key→lang or lang→key)
     4. window.PAGE_I18N = same as I18N

   Supported HTML attributes:
     data-i18n="key"             → innerHTML
     data-i18n-html="key"        → innerHTML
     data-i18n-placeholder="key" → placeholder attribute
     data-t="key"                → innerHTML

   Features:
   - 12 languages, sorted alphabetically, no flags
   - localStorage sync (key: labs67lang)
   - Generates dropdown from any <div class="lang-switcher"></div>
   - Default: BE (Беларуская)
   - onLangChange callback for custom per-site logic
   ================================================================ */
(function () {
  'use strict';

  var LANGS = ['be','de','en','es','fr','it','ja','ko','pl','pt','ru','uk'];

  var LABELS = {
    be: 'BY — Беларуская',
    de: 'DE — Deutsch',
    en: 'EN — English',
    es: 'ES — Español',
    fr: 'FR — Français',
    it: 'IT — Italiano',
    ja: 'JA — 日本語',
    ko: 'KO — 한국어',
    pl: 'PL — Polski',
    pt: 'PT — Português',
    ru: 'RU — Русский',
    uk: 'UK — Українська'
  };

  var STORAGE_KEY = 'labs67lang';
  var cur = localStorage.getItem(STORAGE_KEY) || 'be';
  if (LANGS.indexOf(cur) === -1) cur = 'be';

  /* ── Resolve translation dict → always returns { key: { lang: val } } ── */
  function resolveDict() {
    /* 1. window.I18N — primary (key→lang) */
    if (window.I18N) return window.I18N;

    /* 2. window.i18n — detect format */
    if (window.i18n) return normalise(window.i18n);

    /* 3. window.T — detect format */
    if (window.T) return normalise(window.T);

    /* 4. window.PAGE_I18N */
    if (window.PAGE_I18N) return window.PAGE_I18N;

    return {};
  }

  /* Detect if obj is lang→key or key→lang, return key→lang */
  function normalise(obj) {
    var keys = Object.keys(obj);
    if (!keys.length) return obj;

    /* If first key is a known lang code AND its value is a plain object → lang→key format */
    if (LANGS.indexOf(keys[0]) !== -1 && typeof obj[keys[0]] === 'object' && !Array.isArray(obj[keys[0]])) {
      /* Check it's really lang→key (value should be strings, not nested objects with lang codes) */
      var inner = obj[keys[0]];
      var innerKeys = Object.keys(inner);
      if (innerKeys.length && typeof inner[innerKeys[0]] === 'string') {
        /* It's lang→key → flip to key→lang */
        var result = {};
        for (var lang in obj) {
          if (!obj.hasOwnProperty(lang)) continue;
          for (var k in obj[lang]) {
            if (!obj[lang].hasOwnProperty(k)) continue;
            if (!result[k]) result[k] = {};
            result[k][lang] = obj[lang][k];
          }
        }
        return result;
      }
    }

    /* Already key→lang */
    return obj;
  }

  /* ── Translation helper ── */
  function t(dict, key, lang) {
    var entry = dict[key];
    if (!entry) return '';
    return entry[lang] || entry.en || '';
  }

  /* ── Apply translations ── */
  function apply(lang) {
    var dict = resolveDict();

    /* data-i18n → innerHTML */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var val = t(dict, els[i].getAttribute('data-i18n'), lang);
      if (val) els[i].innerHTML = val;
    }

    /* data-i18n-html → innerHTML (alias) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var h = 0; h < htmlEls.length; h++) {
      var hv = t(dict, htmlEls[h].getAttribute('data-i18n-html'), lang);
      if (hv) htmlEls[h].innerHTML = hv;
    }

    /* data-i18n-placeholder → placeholder attr */
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < phEls.length; p++) {
      var pv = t(dict, phEls[p].getAttribute('data-i18n-placeholder'), lang);
      if (pv) phEls[p].setAttribute('placeholder', pv);
    }

    /* data-t → innerHTML (scyra compat) */
    var tEls = document.querySelectorAll('[data-t]');
    for (var d = 0; d < tEls.length; d++) {
      var tv = t(dict, tEls[d].getAttribute('data-t'), lang);
      if (tv) tEls[d].innerHTML = tv;
    }

    /* Fire custom callback if defined */
    if (typeof window.onLangChange === 'function') {
      window.onLangChange(lang, dict);
    }
  }

  /* ── Build switcher dropdown ── */
  function buildSwitcher(container) {
    container.innerHTML = '';
    container.classList.add('labs67-lang');

    var btn = document.createElement('button');
    btn.className = 'lang-current';
    btn.type = 'button';
    btn.innerHTML = '<span>' + LABELS[cur] + '</span> <span class="lang-arrow">\u25BE</span>';
    container.appendChild(btn);

    var dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';

    for (var i = 0; i < LANGS.length; i++) {
      var opt = document.createElement('button');
      opt.type = 'button';
      opt.className = 'lang-opt' + (LANGS[i] === cur ? ' active' : '');
      opt.setAttribute('data-lang', LANGS[i]);
      opt.textContent = LABELS[LANGS[i]];
      dropdown.appendChild(opt);
    }

    container.appendChild(dropdown);

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      container.classList.toggle('open');
    });

    document.addEventListener('click', function () {
      container.classList.remove('open');
    });

    dropdown.addEventListener('click', function (e) {
      var target = e.target.closest('.lang-opt');
      if (!target) return;
      e.stopPropagation();
      var lang = target.getAttribute('data-lang');
      if (lang) setLang(lang);
      container.classList.remove('open');
    });
  }

  /* ── Set language ── */
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    cur = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    var btns = document.querySelectorAll('.lang-current');
    for (var b = 0; b < btns.length; b++) {
      btns[b].innerHTML = '<span>' + LABELS[lang] + '</span> <span class="lang-arrow">\u25BE</span>';
    }

    var opts = document.querySelectorAll('.lang-opt');
    for (var i = 0; i < opts.length; i++) {
      var dl = opts[i].getAttribute('data-lang');
      if (dl === lang) opts[i].classList.add('active');
      else opts[i].classList.remove('active');
    }

    apply(lang);
  }

  /* ── Public API ── */
  window.labs67i18n = {
    setLang: setLang,
    getLang: function () { return cur; },
    LANGS: LANGS,
    LABELS: LABELS
  };
  window.setPageLang = setLang;

  /* ── Inject default CSS (overridable by site CSS) ── */
  (function injectCSS() {
    if (document.getElementById('labs67-i18n-css')) return;
    var s = document.createElement('style');
    s.id = 'labs67-i18n-css';
    s.textContent = [
      '.lang-switcher{position:relative;display:inline-flex;z-index:200}',
      '.lang-current{display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 10px;border:1px solid rgba(128,128,128,.25);background:transparent;font-size:11px;letter-spacing:1.5px;color:inherit;opacity:.7;white-space:nowrap;border-radius:4px;transition:all .2s;font-family:inherit}',
      '.lang-current:hover{opacity:1;border-color:currentColor}',
      '.lang-arrow{font-size:8px;transition:transform .2s}',
      '.lang-switcher.open .lang-arrow{transform:rotate(180deg)}',
      '.lang-dropdown{position:absolute;top:calc(100% + 6px);right:0;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,.3);min-width:180px;opacity:0;pointer-events:none;transform:translateY(-8px);transition:all .25s;z-index:300;max-height:320px;overflow-y:auto;scrollbar-width:thin}',
      '.lang-switcher.open .lang-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}',
      '.lang-opt{display:block;width:100%;padding:9px 14px;cursor:pointer;font-size:12px;letter-spacing:.5px;color:rgba(255,255,255,.7);border:none;background:none;text-align:left;font-family:inherit;transition:all .15s}',
      '.lang-opt:hover{background:rgba(255,255,255,.08);color:#fff}',
      '.lang-opt.active{color:#fff;font-weight:600}',
      '@media(prefers-color-scheme:light){',
      '.lang-dropdown{background:#fff;border-color:rgba(0,0,0,.1);box-shadow:0 8px 32px rgba(0,0,0,.1)}',
      '.lang-opt{color:rgba(0,0,0,.6)}',
      '.lang-opt:hover{background:rgba(0,0,0,.05);color:#000}',
      '.lang-opt.active{color:#000}',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  })();

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    var switchers = document.querySelectorAll('.lang-switcher');
    for (var s = 0; s < switchers.length; s++) {
      buildSwitcher(switchers[s]);
    }

    var existing = document.querySelectorAll('.lang-opt');
    for (var i = 0; i < existing.length; i++) {
      existing[i].addEventListener('click', function (e) {
        e.stopPropagation();
        var lang = this.getAttribute('data-lang');
        if (lang) setLang(lang);
      });
    }

    setLang(cur);
  });

})();
