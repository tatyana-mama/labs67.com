/* ================================================================
   lang-pages.js — i18n for ALL LABS67 subpages
   (model.html, status.html, admin.html, portfolio.html, brandbook.html)
   index.html uses its own lang.js for graph-specific translations.
   ================================================================ */

(function () {
  'use strict';

  var LANGS = ['be','en','uk','ru','de','fr','es','it','pt','ja','ko'];
  var LANG_LABELS = {be:'BY',en:'EN',uk:'UA',ru:'RU',de:'DE',fr:'FR',es:'ES',it:'IT',pt:'PT',ja:'JP',ko:'KR'};

  var curLang = localStorage.getItem('labs67lang') || 'be';

  /* ── No flags — text only ── */

  /* ── Common translations (topbar nav, footer) ── */
  var PAGE_I18N = {
    /* topbar nav links */
    nav_portfolio: {
      be:'Партфоліа', en:'Portfolio', uk:'Портфоліо', ru:'Портфолио',
      de:'Portfolio', fr:'Portfolio', es:'Portafolio', it:'Portfolio',
      pt:'Portfólio', ja:'ポートフォリオ', ko:'포트폴리오'
    },
    nav_model: {
      be:'Мадэль', en:'Model', uk:'Модель', ru:'Модель',
      de:'Modell', fr:'Modèle', es:'Modelo', it:'Modello',
      pt:'Modelo', ja:'モデル', ko:'모델'
    },
    nav_status: {
      be:'Статус', en:'Status', uk:'Статус', ru:'Статус',
      de:'Status', fr:'Statut', es:'Estado', it:'Stato',
      pt:'Status', ja:'ステータス', ko:'상태'
    },
    nav_admin: {
      be:'Адмін', en:'Admin', uk:'Адмін', ru:'Админ',
      de:'Admin', fr:'Admin', es:'Admin', it:'Admin',
      pt:'Admin', ja:'管理', ko:'관리'
    },
    nav_brandbook: {
      be:'Брэнд-бук', en:'Brand Book', uk:'Брендбук', ru:'Брендбук',
      de:'Markenbuch', fr:'Livre de marque', es:'Libro de marca', it:'Brand Book',
      pt:'Livro de marca', ja:'ブランドブック', ko:'브랜드북'
    },
    nav_graph: {
      be:'Граф', en:'Graph', uk:'Граф', ru:'Граф',
      de:'Graph', fr:'Graphe', es:'Grafo', it:'Grafo',
      pt:'Grafo', ja:'グラフ', ko:'그래프'
    },

    /* footer */
    footer_model: {
      be:'Мадэль экасістэмы', en:'Ecosystem Model', uk:'Модель екосистеми', ru:'Модель экосистемы',
      de:'Ökosystem-Modell', fr:'Modèle d\'écosystème', es:'Modelo de ecosistema', it:'Modello di ecosistema',
      pt:'Modelo de ecossistema', ja:'エコシステムモデル', ko:'에코시스템 모델'
    },
    footer_reference: {
      be:'Структурная даведка', en:'Structural Reference', uk:'Структурна довідка', ru:'Структурная справка',
      de:'Strukturelle Referenz', fr:'Référence structurelle', es:'Referencia estructural', it:'Riferimento strutturale',
      pt:'Referência estrutural', ja:'構造リファレンス', ko:'구조 참조'
    },

    /* ── model.html translations ── */
    model_eyebrow: {
      be:'// Архітэктура экасістэмы', en:'// Ecosystem Architecture', uk:'// Архітектура екосистеми', ru:'// Архитектура экосистемы',
      de:'// Ökosystem-Architektur', fr:'// Architecture de l\'écosystème', es:'// Arquitectura del ecosistema', it:'// Architettura dell\'ecosistema',
      pt:'// Arquitetura do ecossistema', ja:'// エコシステム・アーキテクチャ', ko:'// 에코시스템 아키텍처'
    },
    model_sub: {
      be:'Цэнтральная структурная мадэль экасістэмы LABS67. Вызначае міжсайтавыя стандарты, абмен элементамі, патокі даных і ўзаемасувязь паміж графам-хабам і ўсімі суб-сайтамі.',
      en:'Central structural model of the LABS67 ecosystem. Defines cross-site standards, element interchange, data flow, and the relationship between the graph hub and all sub-sites.',
      uk:'Центральна структурна модель екосистеми LABS67. Визначає міжсайтові стандарти, обмін елементами, потоки даних та взаємозв\'язок між графом-хабом і всіма суб-сайтами.',
      ru:'Центральная структурная модель экосистемы LABS67. Определяет межсайтовые стандарты, обмен элементами, потоки данных и взаимосвязь между графом-хабом и всеми суб-сайтами.',
      de:'Zentrales Strukturmodell des LABS67-Ökosystems. Definiert standortübergreifende Standards, Elementaustausch, Datenfluss und die Beziehung zwischen dem Graph-Hub und allen Sub-Sites.',
      fr:'Modèle structurel central de l\'écosystème LABS67. Définit les normes inter-sites, l\'échange d\'éléments, le flux de données et la relation entre le hub graphe et tous les sous-sites.',
      es:'Modelo estructural central del ecosistema LABS67. Define estándares entre sitios, intercambio de elementos, flujo de datos y la relación entre el hub gráfico y todos los sub-sitios.',
      it:'Modello strutturale centrale dell\'ecosistema LABS67. Definisce gli standard tra i siti, lo scambio di elementi, il flusso di dati e la relazione tra l\'hub grafo e tutti i sotto-siti.',
      pt:'Modelo estrutural central do ecossistema LABS67. Define padrões entre sites, intercâmbio de elementos, fluxo de dados e a relação entre o hub gráfico e todos os sub-sites.',
      ja:'LABS67エコシステムの中央構造モデル。サイト間標準、要素交換、データフロー、グラフハブと全サブサイトの関係を定義します。',
      ko:'LABS67 에코시스템의 중앙 구조 모델. 사이트 간 표준, 요소 교환, 데이터 흐름, 그래프 허브와 모든 서브사이트의 관계를 정의합니다.'
    },

    /* Section 01 — Hub Principle */
    ms01_label: {
      be:'01 Прынцып хаба', en:'01 Hub Principle', uk:'01 Принцип хабу', ru:'01 Принцип хаба',
      de:'01 Hub-Prinzip', fr:'01 Principe du hub', es:'01 Principio del hub', it:'01 Principio dell\'hub',
      pt:'01 Princípio do hub', ja:'01 ハブ原則', ko:'01 허브 원칙'
    },
    ms01_title: {
      be:'labs67.com = Цэнтральны хаб', en:'labs67.com = Central Hub', uk:'labs67.com = Центральний хаб', ru:'labs67.com = Центральный хаб',
      de:'labs67.com = Zentraler Hub', fr:'labs67.com = Hub central', es:'labs67.com = Hub central', it:'labs67.com = Hub centrale',
      pt:'labs67.com = Hub central', ja:'labs67.com = セントラルハブ', ko:'labs67.com = 중앙 허브'
    },
    ms01_desc: {
      be:'Граф-навігатар на labs67.com — адзіная кропка ўваходу. Кожная нода графа — міні-сайт арыгінала. Кантэнт-панэль злева паказвае сціснутую версію суб-сайта.',
      en:'Graph navigator on labs67.com is the single entry point. Each graph node is a mini-site of the original. Content panel on the left shows a condensed version of the sub-site.',
      uk:'Граф-навігатор на labs67.com — єдина точка входу. Кожна нода графа — міні-сайт оригіналу. Контент-панель зліва показує стиснуту версію суб-сайту.',
      ru:'Граф-навигатор на labs67.com — единая точка входа. Каждая нода графа — мини-сайт оригинала. Контент-панель слева показывает сжатую версию суб-сайта.',
      de:'Graph-Navigator auf labs67.com ist der einzige Einstiegspunkt. Jeder Graph-Knoten ist eine Mini-Site des Originals. Das Content-Panel links zeigt eine komprimierte Version der Sub-Site.',
      fr:'Le navigateur graphe sur labs67.com est le point d\'entrée unique. Chaque nœud du graphe est un mini-site de l\'original. Le panneau de contenu à gauche affiche une version condensée du sous-site.',
      es:'El navegador gráfico en labs67.com es el punto de entrada único. Cada nodo del grafo es un mini-sitio del original. El panel de contenido a la izquierda muestra una versión condensada del sub-sitio.',
      it:'Il navigatore grafo su labs67.com è l\'unico punto d\'ingresso. Ogni nodo del grafo è un mini-sito dell\'originale. Il pannello contenuti a sinistra mostra una versione condensata del sotto-sito.',
      pt:'O navegador gráfico em labs67.com é o ponto de entrada único. Cada nó do grafo é um mini-site do original. O painel de conteúdo à esquerda mostra uma versão condensada do sub-site.',
      ja:'labs67.comのグラフナビゲーターは唯一のエントリーポイントです。各グラフノードはオリジナルのミニサイトです。左側のコンテンツパネルはサブサイトの要約版を表示します。',
      ko:'labs67.com의 그래프 내비게이터는 단일 진입점입니다. 각 그래프 노드는 원본의 미니사이트입니다. 왼쪽 콘텐츠 패널은 서브사이트의 축약 버전을 표시합니다.'
    },

    /* Section 02 — Site Registry */
    ms02_label: {
      be:'02 Рэестр сайтаў', en:'02 Site Registry', uk:'02 Реєстр сайтів', ru:'02 Реестр сайтов',
      de:'02 Site-Register', fr:'02 Registre des sites', es:'02 Registro de sitios', it:'02 Registro dei siti',
      pt:'02 Registro de sites', ja:'02 サイトレジストリ', ko:'02 사이트 레지스트리'
    },
    ms02_title: {
      be:'Усе дамены', en:'All Domains', uk:'Усі домени', ru:'Все домены',
      de:'Alle Domains', fr:'Tous les domaines', es:'Todos los dominios', it:'Tutti i domini',
      pt:'Todos os domínios', ja:'全ドメイン', ko:'모든 도메인'
    },
    ms02_desc: {
      be:'Поўны рэестр усіх сайтаў экасістэмы LABS67 з іх статусам, тэмай і роллю.',
      en:'Complete registry of all LABS67 ecosystem sites with their status, theme, and role.',
      uk:'Повний реєстр усіх сайтів екосистеми LABS67 з їхнім статусом, темою та роллю.',
      ru:'Полный реестр всех сайтов экосистемы LABS67 с их статусом, темой и ролью.',
      de:'Vollständiges Register aller LABS67-Ökosystem-Sites mit Status, Theme und Rolle.',
      fr:'Registre complet de tous les sites de l\'écosystème LABS67 avec leur statut, thème et rôle.',
      es:'Registro completo de todos los sitios del ecosistema LABS67 con su estado, tema y rol.',
      it:'Registro completo di tutti i siti dell\'ecosistema LABS67 con stato, tema e ruolo.',
      pt:'Registro completo de todos os sites do ecossistema LABS67 com status, tema e função.',
      ja:'LABS67エコシステムの全サイトのステータス、テーマ、役割を含む完全なレジストリ。',
      ko:'상태, 테마, 역할을 포함한 LABS67 에코시스템 모든 사이트의 전체 레지스트리.'
    },

    /* Section 03 — Shared Elements */
    ms03_label: {
      be:'03 Агульныя элементы', en:'03 Shared Elements', uk:'03 Спільні елементи', ru:'03 Общие элементы',
      de:'03 Gemeinsame Elemente', fr:'03 Éléments partagés', es:'03 Elementos compartidos', it:'03 Elementi condivisi',
      pt:'03 Elementos compartilhados', ja:'03 共有要素', ko:'03 공유 요소'
    },
    ms03_title: {
      be:'Міжсайтавы стандарт элементаў', en:'Cross-Site Element Standard', uk:'Міжсайтовий стандарт елементів', ru:'Межсайтовый стандарт элементов',
      de:'Standortübergreifender Element-Standard', fr:'Standard d\'éléments inter-sites', es:'Estándar de elementos entre sitios', it:'Standard di elementi tra i siti',
      pt:'Padrão de elementos entre sites', ja:'サイト間要素標準', ko:'사이트 간 요소 표준'
    },
    ms03_desc: {
      be:'Кожны сайт LABS67 ПАВІНЕН рэалізаваць гэтыя агульныя элементы. Элементы ўзаемазамяняльныя ва ўсёй экасістэме.',
      en:'Every LABS67 site MUST implement these shared elements. Elements are interchangeable across the ecosystem.',
      uk:'Кожен сайт LABS67 ПОВИНЕН реалізувати ці спільні елементи. Елементи взаємозамінні в усій екосистемі.',
      ru:'Каждый сайт LABS67 ДОЛЖЕН реализовать эти общие элементы. Элементы взаимозаменяемы во всей экосистеме.',
      de:'Jede LABS67-Site MUSS diese gemeinsamen Elemente implementieren. Elemente sind im gesamten Ökosystem austauschbar.',
      fr:'Chaque site LABS67 DOIT implémenter ces éléments partagés. Les éléments sont interchangeables dans tout l\'écosystème.',
      es:'Cada sitio LABS67 DEBE implementar estos elementos compartidos. Los elementos son intercambiables en todo el ecosistema.',
      it:'Ogni sito LABS67 DEVE implementare questi elementi condivisi. Gli elementi sono intercambiabili in tutto l\'ecosistema.',
      pt:'Cada site LABS67 DEVE implementar estes elementos compartilhados. Os elementos são intercambiáveis em todo o ecossistema.',
      ja:'すべてのLABS67サイトはこれらの共有要素を実装しなければなりません。要素はエコシステム全体で互換性があります。',
      ko:'모든 LABS67 사이트는 이 공유 요소를 구현해야 합니다. 요소는 에코시스템 전체에서 교환 가능합니다.'
    },

    /* Section 04 — Element Matrix */
    ms04_label: {
      be:'04 Матрыца элементаў', en:'04 Element Matrix', uk:'04 Матриця елементів', ru:'04 Матрица элементов',
      de:'04 Element-Matrix', fr:'04 Matrice d\'éléments', es:'04 Matriz de elementos', it:'04 Matrice degli elementi',
      pt:'04 Matriz de elementos', ja:'04 要素マトリックス', ko:'04 요소 매트릭스'
    },
    ms04_title: {
      be:'Міжсайтавая сумяшчальнасць', en:'Cross-Site Compatibility', uk:'Міжсайтова сумісність', ru:'Межсайтовая совместимость',
      de:'Standortübergreifende Kompatibilität', fr:'Compatibilité inter-sites', es:'Compatibilidad entre sitios', it:'Compatibilità tra i siti',
      pt:'Compatibilidade entre sites', ja:'サイト間互換性', ko:'사이트 간 호환성'
    },
    ms04_desc: {
      be:'Якія агульныя элементы рэалізаваны на якіх сайтах. Зялёны = актыўны, Жоўты = запланавана, Чырвоны = адсутнічае.',
      en:'Which shared elements are implemented on which site. Green = live, Yellow = planned, Red = missing.',
      uk:'Які спільні елементи реалізовані на яких сайтах. Зелений = активний, Жовтий = заплановано, Червоний = відсутній.',
      ru:'Какие общие элементы реализованы на каких сайтах. Зелёный = активен, Жёлтый = запланирован, Красный = отсутствует.',
      de:'Welche gemeinsamen Elemente auf welcher Site implementiert sind. Grün = aktiv, Gelb = geplant, Rot = fehlend.',
      fr:'Quels éléments partagés sont implémentés sur quel site. Vert = actif, Jaune = prévu, Rouge = manquant.',
      es:'Qué elementos compartidos están implementados en qué sitio. Verde = activo, Amarillo = planificado, Rojo = falta.',
      it:'Quali elementi condivisi sono implementati su quale sito. Verde = attivo, Giallo = pianificato, Rosso = mancante.',
      pt:'Quais elementos compartilhados são implementados em qual site. Verde = ativo, Amarelo = planejado, Vermelho = ausente.',
      ja:'どの共有要素がどのサイトで実装されているか。緑 = 稼働中、黄 = 計画中、赤 = 未実装。',
      ko:'어떤 공유 요소가 어떤 사이트에서 구현되었는지. 녹색 = 활성, 노란색 = 계획, 빨간색 = 누락.'
    },

    /* Section 05 — Theme Palette */
    ms05_label: {
      be:'05 Палітра тэм', en:'05 Theme Palette Map', uk:'05 Палітра тем', ru:'05 Палитра тем',
      de:'05 Theme-Palette', fr:'05 Palette de thèmes', es:'05 Paleta de temas', it:'05 Palette dei temi',
      pt:'05 Paleta de temas', ja:'05 テーマパレット', ko:'05 테마 팔레트'
    },
    ms05_title: {
      be:'Тэмы для кожнага праекта', en:'Per-Project Themes', uk:'Теми для кожного проекту', ru:'Темы для каждого проекта',
      de:'Projektspezifische Themes', fr:'Thèmes par projet', es:'Temas por proyecto', it:'Temi per progetto',
      pt:'Temas por projeto', ja:'プロジェクトごとのテーマ', ko:'프로젝트별 테마'
    },
    ms05_desc: {
      be:'Кожная нода праекта запускае поўнае пераключэнне тэмы. Гэта кананічныя значэнні тэм.',
      en:'Each project node triggers a full theme switch. These are the canonical theme values.',
      uk:'Кожна нода проекту запускає повне перемикання теми. Це канонічні значення тем.',
      ru:'Каждая нода проекта запускает полное переключение темы. Это канонические значения тем.',
      de:'Jeder Projekt-Knoten löst einen vollständigen Theme-Wechsel aus. Dies sind die kanonischen Theme-Werte.',
      fr:'Chaque nœud de projet déclenche un changement complet de thème. Ce sont les valeurs canoniques des thèmes.',
      es:'Cada nodo de proyecto activa un cambio completo de tema. Estos son los valores canónicos de los temas.',
      it:'Ogni nodo di progetto attiva un cambio completo di tema. Questi sono i valori canonici dei temi.',
      pt:'Cada nó de projeto aciona uma troca completa de tema. Estes são os valores canônicos dos temas.',
      ja:'各プロジェクトノードはテーマの完全な切り替えをトリガーします。これらは標準的なテーマ値です。',
      ko:'각 프로젝트 노드는 전체 테마 전환을 트리거합니다. 이것이 표준 테마 값입니다.'
    },

    /* Section 06 — Data Flow */
    ms06_label: {
      be:'06 Паток даных', en:'06 Data Flow', uk:'06 Потік даних', ru:'06 Поток данных',
      de:'06 Datenfluss', fr:'06 Flux de données', es:'06 Flujo de datos', it:'06 Flusso di dati',
      pt:'06 Fluxo de dados', ja:'06 データフロー', ko:'06 데이터 흐름'
    },
    ms06_title: {
      be:'Інфармацыйная архітэктура', en:'Information Architecture', uk:'Інформаційна архітектура', ru:'Информационная архитектура',
      de:'Informationsarchitektur', fr:'Architecture de l\'information', es:'Arquitectura de información', it:'Architettura dell\'informazione',
      pt:'Arquitetura da informação', ja:'情報アーキテクチャ', ko:'정보 아키텍처'
    },
    ms06_desc: {
      be:'Як дадзеныя перамяшчаюцца паміж хабам labs67.com і суб-сайтамі.',
      en:'How data moves between labs67.com hub and sub-sites.',
      uk:'Як дані переміщуються між хабом labs67.com та суб-сайтами.',
      ru:'Как данные перемещаются между хабом labs67.com и суб-сайтами.',
      de:'Wie Daten zwischen dem labs67.com-Hub und Sub-Sites fließen.',
      fr:'Comment les données circulent entre le hub labs67.com et les sous-sites.',
      es:'Cómo los datos se mueven entre el hub labs67.com y los sub-sitios.',
      it:'Come i dati si spostano tra l\'hub labs67.com e i sotto-siti.',
      pt:'Como os dados se movem entre o hub labs67.com e os sub-sites.',
      ja:'labs67.comハブとサブサイト間でデータがどのように移動するか。',
      ko:'labs67.com 허브와 서브사이트 간에 데이터가 어떻게 이동하는지.'
    },

    /* Section 07 — File Structure */
    ms07_label: {
      be:'07 Структура файлаў', en:'07 File Structure', uk:'07 Структура файлів', ru:'07 Структура файлов',
      de:'07 Dateistruktur', fr:'07 Structure des fichiers', es:'07 Estructura de archivos', it:'07 Struttura dei file',
      pt:'07 Estrutura de arquivos', ja:'07 ファイル構造', ko:'07 파일 구조'
    },
    ms07_title: {
      be:'Карта рэпазіторыя', en:'Repository Map', uk:'Карта репозиторію', ru:'Карта репозитория',
      de:'Repository-Karte', fr:'Carte du dépôt', es:'Mapa del repositorio', it:'Mappa del repository',
      pt:'Mapa do repositório', ja:'リポジトリマップ', ko:'리포지토리 맵'
    },

    /* Section 08 — Page Template */
    ms08_label: {
      be:'08 Шаблон старонкі', en:'08 Page Template', uk:'08 Шаблон сторінки', ru:'08 Шаблон страницы',
      de:'08 Seitenvorlage', fr:'08 Modèle de page', es:'08 Plantilla de página', it:'08 Template di pagina',
      pt:'08 Template de página', ja:'08 ページテンプレート', ko:'08 페이지 템플릿'
    },
    ms08_title: {
      be:'Стандартны каркас старонкі', en:'Standard Page Skeleton', uk:'Стандартний каркас сторінки', ru:'Стандартный каркас страницы',
      de:'Standard-Seitengerüst', fr:'Squelette de page standard', es:'Esqueleto de página estándar', it:'Scheletro di pagina standard',
      pt:'Esqueleto de página padrão', ja:'標準ページスケルトン', ko:'표준 페이지 스켈레톤'
    },
    ms08_desc: {
      be:'Кожная новая старонка ў экасістэме LABS67 ПАВІННА пачынацца з гэтага каркаса.',
      en:'Every new page in the LABS67 ecosystem MUST start from this skeleton.',
      uk:'Кожна нова сторінка в екосистемі LABS67 ПОВИННА починатися з цього каркасу.',
      ru:'Каждая новая страница в экосистеме LABS67 ДОЛЖНА начинаться с этого каркаса.',
      de:'Jede neue Seite im LABS67-Ökosystem MUSS mit diesem Gerüst beginnen.',
      fr:'Chaque nouvelle page de l\'écosystème LABS67 DOIT partir de ce squelette.',
      es:'Cada nueva página en el ecosistema LABS67 DEBE comenzar desde este esqueleto.',
      it:'Ogni nuova pagina nell\'ecosistema LABS67 DEVE partire da questo scheletro.',
      pt:'Cada nova página no ecossistema LABS67 DEVE começar a partir deste esqueleto.',
      ja:'LABS67エコシステムのすべての新しいページはこのスケルトンから始めなければなりません。',
      ko:'LABS67 에코시스템의 모든 새 페이지는 이 스켈레톤에서 시작해야 합니다.'
    }
  };

  /* ── Public: extend PAGE_I18N from per-page scripts ── */
  window.PAGE_I18N = PAGE_I18N;

  /* ── Apply translations ── */
  function applyTranslations(lang) {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (PAGE_I18N[key] && PAGE_I18N[key][lang]) {
        els[i].innerHTML = PAGE_I18N[key][lang];
      }
    }
  }

  /* ── Set language ── */
  function setPageLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    curLang = lang;
    localStorage.setItem('labs67lang', lang);
    document.documentElement.setAttribute('lang', lang);

    /* update .lang-current button */
    var btn = document.querySelector('.lang-current');
    if (btn) {
      var lbl = LANG_LABELS[lang] || lang.toUpperCase();
      btn.innerHTML = '<span>' + lbl + '</span> <span class="lang-arrow">\u25BE</span>';
    }

    /* mark active lang-opt */
    var opts = document.querySelectorAll('.lang-opt');
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].getAttribute('data-lang') === lang) {
        opts[i].classList.add('active');
      } else {
        opts[i].classList.remove('active');
      }
    }

    applyTranslations(lang);
  }

  window.setPageLang = setPageLang;

  /* ── Init on DOM ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* bind click handlers on .lang-opt buttons */
    var opts = document.querySelectorAll('.lang-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', function (e) {
        e.stopPropagation();
        var lang = this.getAttribute('data-lang');
        setPageLang(lang);
        /* close dropdown */
        var switcher = document.querySelector('.lang-switcher');
        if (switcher) switcher.classList.remove('open');
      });
    }

    /* apply saved language */
    setPageLang(curLang);
  });

})();
