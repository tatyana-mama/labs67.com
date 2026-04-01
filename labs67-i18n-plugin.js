/* ================================================================
   labs67-i18n-plugin.js v1.0
   Universal i18n plugin for ALL labs67.com pages.

   Usage: add ONE line before </body>:
     <script src="labs67-i18n-plugin.js"></script>

   Auto-detects page, finds elements by CSS selectors, translates.
   Handles lang switcher UI, text labels (no flags), localStorage sync.
   ================================================================ */
(function(){
'use strict';

var LANGS = ['be','en','uk','ru','de','fr','es','it','pt','ja','ko'];
var LABELS = {be:'BY Беларуская',en:'EN English',uk:'UK Українська',ru:'RU Русский',de:'DE Deutsch',fr:'FR Français',es:'ES Español',it:'IT Italiano',pt:'PT Português',ja:'JA 日本語',ko:'KO 한국어'};
var cur = localStorage.getItem('labs67lang') || 'be';

/* ── No flags — text only ── */

/* ── Translation helper ── */
function t(obj, lang) { return (obj && obj[lang]) || (obj && obj.en) || ''; }

/* ── Page detection ── */
function detectPage() {
  var p = location.pathname.split('/').pop().replace('.html','') || 'index';
  return p;
}

/* ================================================================
   TRANSLATIONS — keyed by page, then by CSS selector
   Each value is {be:'...',en:'...',...}
   ================================================================ */
var TX = {

  /* ── STATUS PAGE ── */
  status: {
    '.dash-eyebrow': {
      be:'// Інфраструктура LABS67', en:'// LABS67 Infrastructure', uk:'// Інфраструктура LABS67', ru:'// Инфраструктура LABS67',
      de:'// LABS67 Infrastruktur', fr:'// Infrastructure LABS67', es:'// Infraestructura LABS67', it:'// Infrastruttura LABS67',
      pt:'// Infraestrutura LABS67', ja:'// LABS67 インフラ', ko:'// LABS67 인프라'
    },
    '.dash-hero h1': {
      be:'Статус <em>Дашборд</em>', en:'Status <em>Dashboard</em>', uk:'Статус <em>Дашборд</em>', ru:'Статус <em>Дашборд</em>',
      de:'Status <em>Dashboard</em>', fr:'Statut <em>Tableau de bord</em>', es:'Estado <em>Panel</em>', it:'Stato <em>Dashboard</em>',
      pt:'Status <em>Painel</em>', ja:'ステータス <em>ダッシュボード</em>', ko:'상태 <em>대시보드</em>'
    },
    '.dash-hero-sub': {
      be:'Агляд усіх даменаў канцэрна ў рэальным часе, функцый і стану разгортвання.',
      en:'Real-time overview of all concern domains, features, and deployment state.',
      uk:'Огляд усіх доменів концерну в реальному часі, функцій та стану розгортання.',
      ru:'Обзор всех доменов концерна в реальном времени, функций и состояния развёртывания.',
      de:'Echtzeit-Übersicht aller Konzerndomains, Funktionen und Bereitstellungsstatus.',
      fr:'Vue en temps réel de tous les domaines du groupe, fonctionnalités et état de déploiement.',
      es:'Vista en tiempo real de todos los dominios del grupo, características y estado de despliegue.',
      it:'Panoramica in tempo reale di tutti i domini del gruppo, funzionalità e stato di distribuzione.',
      pt:'Visão em tempo real de todos os domínios do grupo, funcionalidades e estado de implantação.',
      ja:'コンツェルン全ドメインの機能とデプロイ状態のリアルタイム概要。',
      ko:'콘체른 전체 도메인, 기능 및 배포 상태의 실시간 개요.'
    },
    '#totalSites ~ .dash-stat-label': {be:'Усяго сайтаў',en:'Total Sites',uk:'Усього сайтів',ru:'Всего сайтов',de:'Gesamt Sites',fr:'Total sites',es:'Total sitios',it:'Totale siti',pt:'Total de sites',ja:'合計サイト',ko:'총 사이트'},
    '#totalLive ~ .dash-stat-label': {be:'Актыўных',en:'Live',uk:'Активних',ru:'Активных',de:'Aktiv',fr:'En ligne',es:'Activos',it:'Attivi',pt:'Ativos',ja:'稼働中',ko:'활성'},
    '#totalLangs ~ .dash-stat-label': {be:'Макс. моваў',en:'Max Languages',uk:'Макс. мов',ru:'Макс. языков',de:'Max Sprachen',fr:'Max langues',es:'Máx idiomas',it:'Max lingue',pt:'Máx idiomas',ja:'最大言語数',ko:'최대 언어'},
    '#totalBrands ~ .dash-stat-label': {be:'Брэндаў',en:'Brands',uk:'Брендів',ru:'Брендов',de:'Marken',fr:'Marques',es:'Marcas',it:'Marchi',pt:'Marcas',ja:'ブランド',ko:'브랜드'}
  },

  /* ── PORTFOLIO PAGE ── */
  portfolio: {
    '.hero-eyebrow': {
      be:'// Даступны для фрыланса', en:'// Available for freelance', uk:'// Доступний для фрілансу', ru:'// Доступен для фриланса',
      de:'// Verfügbar für Freelance', fr:'// Disponible en freelance', es:'// Disponible para freelance', it:'// Disponibile per freelance',
      pt:'// Disponível para freelance', ja:'// フリーランス可能', ko:'// 프리랜서 가능'
    },
    '.hero h1': {
      be:'AI Solutions Architect<br><span class="thin">& Full-Stack Developer</span>',
      en:'AI Solutions Architect<br><span class="thin">&amp; Full-Stack Developer</span>',
      uk:'AI Solutions Architect<br><span class="thin">& Full-Stack Developer</span>',
      ru:'AI Solutions Architect<br><span class="thin">& Full-Stack Developer</span>',
      de:'AI Solutions Architect<br><span class="thin">& Full-Stack-Entwickler</span>',
      fr:'Architecte Solutions IA<br><span class="thin">& Développeur Full-Stack</span>',
      es:'Arquitecto de Soluciones IA<br><span class="thin">& Desarrollador Full-Stack</span>',
      it:'Architetto Soluzioni AI<br><span class="thin">& Sviluppatore Full-Stack</span>',
      pt:'Arquiteto de Soluções IA<br><span class="thin">& Desenvolvedor Full-Stack</span>',
      ja:'AIソリューションアーキテクト<br><span class="thin">& フルスタック開発者</span>',
      ko:'AI 솔루션 아키텍트<br><span class="thin">& 풀스택 개발자</span>'
    },
    '.hero-desc': {
      be:'Я ствараю AI-прадукты, шматмоўныя сайты, інтэлектуальных чат-ботаў і поўныя брэнд-сістэмы. CEO LABS67 — тэхналагічнага канцэрна, які будуе будучыню MedTech.',
      en:'I build AI-powered products, multilingual websites, intelligent chatbots, and complete brand systems. CEO of LABS67 — a technology concern building the future of MedTech.',
      uk:'Я створюю AI-продукти, багатомовні сайти, інтелектуальних чат-ботів та повні бренд-системи. CEO LABS67 — технологічного концерну, що будує майбутнє MedTech.',
      ru:'Я создаю AI-продукты, многоязычные сайты, интеллектуальных чат-ботов и полные бренд-системы. CEO LABS67 — технологического концерна, строящего будущее MedTech.',
      de:'Ich baue KI-Produkte, mehrsprachige Websites, intelligente Chatbots und komplette Markensysteme. CEO von LABS67 — einem Technologiekonzern, der die Zukunft von MedTech gestaltet.',
      fr:'Je crée des produits IA, des sites multilingues, des chatbots intelligents et des systèmes de marque complets. CEO de LABS67 — un groupe technologique qui construit le futur du MedTech.',
      es:'Creo productos de IA, sitios web multilingües, chatbots inteligentes y sistemas de marca completos. CEO de LABS67 — un grupo tecnológico construyendo el futuro de MedTech.',
      it:'Creo prodotti AI, siti web multilingue, chatbot intelligenti e sistemi di marca completi. CEO di LABS67 — un gruppo tecnologico che costruisce il futuro del MedTech.',
      pt:'Crio produtos de IA, sites multilíngues, chatbots inteligentes e sistemas de marca completos. CEO da LABS67 — um grupo tecnológico construindo o futuro do MedTech.',
      ja:'AI搭載製品、多言語ウェブサイト、インテリジェントチャットボット、完全なブランドシステムを構築。LABS67 CEO — MedTechの未来を築くテクノロジーコンツェルン。',
      ko:'AI 제품, 다국어 웹사이트, 지능형 챗봇, 완전한 브랜드 시스템을 구축합니다. LABS67 CEO — MedTech의 미래를 만드는 기술 콘체른.'
    },
    '#services .label': {be:'// Што я раблю',en:'// What I Do',uk:'// Що я роблю',ru:'// Что я делаю',de:'// Was ich mache',fr:'// Ce que je fais',es:'// Lo que hago',it:'// Cosa faccio',pt:'// O que eu faço',ja:'// 私の仕事',ko:'// 내가 하는 일'},
    '#services .stitle': {be:'Паслугі',en:'Services',uk:'Послуги',ru:'Услуги',de:'Dienstleistungen',fr:'Services',es:'Servicios',it:'Servizi',pt:'Serviços',ja:'サービス',ko:'서비스'},
    '#services .sdesc': {
      be:'Распрацоўка ад канцэпцыі да разгорнутага прадукту. Спецыялізацыя — AI інтэграцыя і шматмоўныя вэб-сістэмы.',
      en:'End-to-end development from concept to deployed product. Specializing in AI integration and multilingual web systems.',
      uk:'Розробка від концепції до розгорнутого продукту. Спеціалізація — AI інтеграція та багатомовні веб-системи.',
      ru:'Разработка от концепции до развёрнутого продукта. Специализация — AI интеграция и многоязычные веб-системы.',
      de:'End-to-End-Entwicklung vom Konzept zum Produkt. Spezialisiert auf KI-Integration und mehrsprachige Websysteme.',
      fr:'Développement de bout en bout du concept au produit déployé. Spécialisé en intégration IA et systèmes web multilingues.',
      es:'Desarrollo integral del concepto al producto desplegado. Especializado en integración de IA y sistemas web multilingües.',
      it:'Sviluppo end-to-end dal concept al prodotto distribuito. Specializzato in integrazione AI e sistemi web multilingue.',
      pt:'Desenvolvimento completo do conceito ao produto implantado. Especializado em integração de IA e sistemas web multilíngues.',
      ja:'コンセプトからデプロイまでのエンドツーエンド開発。AI統合と多言語ウェブシステムに特化。',
      ko:'컨셉에서 배포까지 엔드투엔드 개발. AI 통합 및 다국어 웹 시스템 전문.'
    },
    '#projects .label': {be:'// Партфоліа',en:'// Portfolio',uk:'// Портфоліо',ru:'// Портфолио',de:'// Portfolio',fr:'// Portfolio',es:'// Portafolio',it:'// Portfolio',pt:'// Portfólio',ja:'// ポートフォリオ',ko:'// 포트폴리오'},
    '#projects .stitle': {be:'Актыўныя праекты',en:'Live Projects',uk:'Активні проекти',ru:'Активные проекты',de:'Aktive Projekte',fr:'Projets en ligne',es:'Proyectos activos',it:'Progetti attivi',pt:'Projetos ativos',ja:'稼働中プロジェクト',ko:'활성 프로젝트'},
    '#projects .sdesc': {be:'Рэальныя прадукты ў прадакшне. Кожны праект створаны і разгорнуты мной.',en:'Real products in production. Every project built and deployed by me.',uk:'Реальні продукти у продакшні. Кожен проект створений та розгорнутий мною.',ru:'Реальные продукты в продакшне. Каждый проект создан и развёрнут мной.',de:'Reale Produkte in Produktion. Jedes Projekt von mir gebaut und bereitgestellt.',fr:'Produits réels en production. Chaque projet construit et déployé par moi.',es:'Productos reales en producción. Cada proyecto construido y desplegado por mí.',it:'Prodotti reali in produzione. Ogni progetto costruito e distribuito da me.',pt:'Produtos reais em produção. Cada projeto construído e implantado por mim.',ja:'本番環境の実製品。すべて私が構築・デプロイ。',ko:'프로덕션의 실제 제품. 모든 프로젝트를 직접 구축 및 배포.'},
    '#stack .label': {be:'// Тэхналогіі',en:'// Tech Stack',uk:'// Технології',ru:'// Технологии',de:'// Tech-Stack',fr:'// Stack technique',es:'// Stack tecnológico',it:'// Stack tecnologico',pt:'// Stack tecnológico',ja:'// 技術スタック',ko:'// 기술 스택'},
    '#stack .stitle': {be:'Інструменты і тэхналогіі',en:'Tools & Technologies',uk:'Інструменти та технології',ru:'Инструменты и технологии',de:'Werkzeuge & Technologien',fr:'Outils & Technologies',es:'Herramientas y tecnologías',it:'Strumenti e tecnologie',pt:'Ferramentas e tecnologias',ja:'ツールとテクノロジー',ko:'도구 및 기술'},
    '#stack .sdesc': {be:'Выпрабаваныя тэхналогіі, якія я выкарыстоўваю штодзень.',en:'Battle-tested technologies I use daily to build products.',uk:'Випробувані технології, які я використовую щодня.',ru:'Проверенные технологии, которые я использую ежедневно.',de:'Kampferprobte Technologien, die ich täglich verwende.',fr:'Technologies éprouvées que j\'utilise quotidiennement.',es:'Tecnologías probadas que uso diariamente.',it:'Tecnologie collaudate che uso quotidianamente.',pt:'Tecnologias testadas em batalha que uso diariamente.',ja:'毎日使用する実戦検証済みのテクノロジー。',ko:'매일 사용하는 실전 검증 기술.'},
    '.cta-section h2': {be:'Давайце створым нешта',en:'Let\'s Build Something',uk:'Давайте створимо щось',ru:'Давайте создадим что-то',de:'Lass uns etwas bauen',fr:'Construisons quelque chose',es:'Construyamos algo',it:'Costruiamo qualcosa',pt:'Vamos construir algo',ja:'一緒に何か作りましょう',ko:'함께 무언가를 만들어요'},
    '.cta-section p': {be:'Даступны для фрыланс-праектаў. Хуткая дастаўка, чысты код, AI.',en:'Available for freelance projects. Fast delivery, clean code, AI-powered.',uk:'Доступний для фріланс-проектів. Швидка доставка, чистий код, AI.',ru:'Доступен для фриланс-проектов. Быстрая поставка, чистый код, AI.',de:'Verfügbar für Freelance-Projekte. Schnelle Lieferung, sauberer Code, KI.',fr:'Disponible pour projets freelance. Livraison rapide, code propre, IA.',es:'Disponible para proyectos freelance. Entrega rápida, código limpio, IA.',it:'Disponibile per progetti freelance. Consegna rapida, codice pulito, AI.',pt:'Disponível para projetos freelance. Entrega rápida, código limpo, IA.',ja:'フリーランスプロジェクト対応可能。迅速な納品、クリーンなコード、AI搭載。',ko:'프리랜서 프로젝트 가능. 빠른 배송, 클린 코드, AI 기반.'}
  },

  /* ── ADMIN PAGE ── */
  admin: {
    '.topbar-title': {
      be:'адмін <em>дашборд</em>', en:'admin <em>dashboard</em>', uk:'адмін <em>дашборд</em>', ru:'админ <em>дашборд</em>',
      de:'Admin <em>Dashboard</em>', fr:'admin <em>tableau de bord</em>', es:'admin <em>panel</em>', it:'admin <em>dashboard</em>',
      pt:'admin <em>painel</em>', ja:'管理 <em>ダッシュボード</em>', ko:'관리 <em>대시보드</em>'
    }
  },

  /* ── MODEL PAGE (already has data-i18n via lang-pages.js, skip selectors) ── */
  model: {}
};

/* ── NAV LINKS — universal across all pages ── */
var NAV = {
  'Graph': {be:'Граф',en:'Graph',uk:'Граф',ru:'Граф',de:'Graph',fr:'Graphe',es:'Grafo',it:'Grafo',pt:'Grafo',ja:'グラフ',ko:'그래프'},
  'Portfolio': {be:'Партфоліа',en:'Portfolio',uk:'Портфоліо',ru:'Портфолио',de:'Portfolio',fr:'Portfolio',es:'Portafolio',it:'Portfolio',pt:'Portfólio',ja:'ポートフォリオ',ko:'포트폴리오'},
  'Brand Book': {be:'Брэнд-бук',en:'Brand Book',uk:'Брендбук',ru:'Брендбук',de:'Markenbuch',fr:'Livre de marque',es:'Libro de marca',it:'Brand Book',pt:'Livro de marca',ja:'ブランドブック',ko:'브랜드북'},
  'Model': {be:'Мадэль',en:'Model',uk:'Модель',ru:'Модель',de:'Modell',fr:'Modèle',es:'Modelo',it:'Modello',pt:'Modelo',ja:'モデル',ko:'모델'},
  'Status': {be:'Статус',en:'Status',uk:'Статус',ru:'Статус',de:'Status',fr:'Statut',es:'Estado',it:'Stato',pt:'Status',ja:'ステータス',ko:'상태'},
  'Admin': {be:'Адмін',en:'Admin',uk:'Адмін',ru:'Админ',de:'Admin',fr:'Admin',es:'Admin',it:'Admin',pt:'Admin',ja:'管理',ko:'관리'}
};

/* ── Apply translations ── */
function apply(lang) {
  var page = detectPage();
  var pageTx = TX[page] || {};

  /* page-specific selectors */
  for (var sel in pageTx) {
    var el = document.querySelector(sel);
    if (el) {
      var val = t(pageTx[sel], lang);
      if (val) el.innerHTML = val;
    }
  }

  /* nav links (universal) */
  var links = document.querySelectorAll('.tb-links a');
  for (var i = 0; i < links.length; i++) {
    var orig = links[i].textContent.trim();
    /* find by current text or original English */
    for (var key in NAV) {
      var found = false;
      for (var l in NAV[key]) {
        if (NAV[key][l] === orig) { found = true; break; }
      }
      if (found || key === orig) {
        links[i].textContent = t(NAV[key], lang);
        break;
      }
    }
  }

  /* data-i18n elements (for pages that use them, like model.html) */
  var di = document.querySelectorAll('[data-i18n]');
  for (var j = 0; j < di.length; j++) {
    var k = di[j].getAttribute('data-i18n');
    if (window.PAGE_I18N && window.PAGE_I18N[k] && window.PAGE_I18N[k][lang]) {
      di[j].innerHTML = window.PAGE_I18N[k][lang];
    }
  }
}

/* ── Set language ── */
function setLang(lang) {
  if (LANGS.indexOf(lang) === -1) return;
  cur = lang;
  localStorage.setItem('labs67lang', lang);
  document.documentElement.setAttribute('lang', lang);

  /* update .lang-current button */
  var btn = document.querySelector('.lang-current');
  if (btn) {
    btn.innerHTML = '<span>' + (LABELS[lang]||lang.toUpperCase()) + '</span> <span class="lang-arrow">\u25BE</span>';
  }

  /* mark active */
  var opts = document.querySelectorAll('.lang-opt');
  for (var i = 0; i < opts.length; i++) {
    var dl = opts[i].getAttribute('data-lang');
    if (dl === lang) opts[i].classList.add('active');
    else opts[i].classList.remove('active');
  }

  apply(lang);
}

window.setPageLang = setLang;

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  /* bind lang-opt clicks */
  var opts = document.querySelectorAll('.lang-opt');
  for (var i = 0; i < opts.length; i++) {
    opts[i].addEventListener('click', function(e) {
      e.stopPropagation();
      var lang = this.getAttribute('data-lang');
      /* support brandbook onclick setBBLang pattern */
      if (lang) setLang(lang);
      var sw = document.querySelector('.lang-switcher');
      if (sw) sw.classList.remove('open');
    });
  }

  /* apply saved language */
  setLang(cur);
});

})();
