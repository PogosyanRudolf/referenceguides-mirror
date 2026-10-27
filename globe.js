/* globe.js — интерактивный глобус ресурсов ReferenceGuides (версия 2, 19.10.2026).
   Что делает: добавляет на каждую страницу круглую кнопку в левом нижнем углу; на ней медленно вращается
   цветная Земля — она рисуется в браузере по встроенной карте суши, без загрузки библиотек: оборот за 36 секунд,
   золотая точка — Ереван; пока открыт большой глобус — пауза. Если в системе посетителя выключены
   эффекты анимации (браузер просит сайты не двигать элементы), Земля вращается только под указателем мыши.
   По щелчку открывается окно: глобус вращается мышью или пальцем, масштаб — колесом мыши и кнопками +/−.
   Страны, по которым в каталоге есть ресурсы, подсвечены золотом и подписаны. Щелчок по стране
   доворачивает к ней глобус и показывает справа её ресурсы: урок языка страны, источники, ссылку в каталог.
   Для любой страны есть плитка-действие «Занятия языком этой страны» — WhatsApp с готовым текстом.
   Библиотеки D3 и TopoJSON, карта мира и таблица кодов стран загружаются с jsdelivr только при первом открытии.
   Подключение: <script src="globe.js" defer></script> перед </body> (в папках en, hy, fr, de — ../globe.js).
   Версия 3 (19.10.2026, подпись: Claude): значок над заголовком страницы заменён таким же вращающимся
   глобусом-кнопкой, а нижний глобус показывается, только когда верхний ушёл с экрана. При наведении на страну —
   число ресурсов каталога и каналов ТВ и радио; в окне страны — ссылка на её онлайн-ТВ и радио (tv.html).
   Всё, что выглядит как кнопка, нажимается: метка страны или языка в списке — фильтр по этой метке
   (для страны — ещё и переход на глобус), метка возраста — фильтр по возрасту, подсказка о типах плиток —
   фильтр плиток, текущий язык в переключателе — наверх. Названия всех стран на пяти языках и счётчики
   каналов лежат в globe-data.js (его создаёт tools\make_tv_page.py); файл грузится вместе с картой.
   Как добавить страну: дописать её числовой код ISO 3166 в объект C и в массив ORDER.
   Версия 4 (20.10.2026, подпись: Claude): на странице «География» (geography.html, её собирает
   tools\make_geography_page.py) большой глобус стоит прямо на странице, а не в окне; щелчок по стране показывает
   справку из window.RG_GEO (флаг, столица, население, площадь, языки, валюта, часть света, соседи — тоже
   нажимаются, местное время, коды, ссылки на OpenStreetMap и Википедию). Поиск страны по названию и ссылки
   на страны в таблице ведут к глобусу. Ссылка в окне страны теперь — «ТВ, радио и веб-камеры страны».
   Версия 5 (20.10.2026, подпись: Claude, просьба Рудольфа): «Гид по сайту» — круглая кнопка с профессором в мантии
   справа внизу; окно «Что вы хотите сделать?» с пятью функциями посетителя (учиться, находить, бывать в культуре,
   помощь, о нас) и подсказкой к каждой странице; при первом заходе — облачко гида (один раз). Подсказки при наведении
   на пункты меню. Круглая кнопка языков в стиле глобуса слева внизу — видна при любой прокрутке.
   Версия 7 (20.10.2026, подпись: Claude, решение Рудольфа 15:06 «по самому высшему классу»): на странице «Справочные
   таблицы» (reference-catalogs.html) — поиск по таблице значений (на всех языках сайта и по формуле: «свинец», «lead»,
   «կապար», «Pb»), кнопки групп, сортировка по названию, плотности и температуре, счётчик «найдено N из M»;
   адрес с ?q=свинец сразу показывает свинец. Таблицу собирает tools\make_quickref.py; метки типа справочника
   (класс kind) — фильтры, как метки стран. Блок «ReferenceGuides UI v6» в конце файла (гид, языки,
   золотые кнопки) — работа AutoClaw 20.10.2026, 15:21–15:41.
   Версия 8 (23.10.2026, подпись: Claude «Маисовый полоз цена», решение совета 20.10 «БЛОК 1» и слово Рудольфа 23.10 00:3x):
   профессор-гид — рисунки Анри от 23.10 (акварель, твид, золотые очки; с 23.10 01:1x по слову Рудольфа — в светлой
   профессорской мантии и квадратной академической шапке; с декабря по февраль значок — прежний, в вязаной шапке)
   сверху справа, прилипает при прокрутке; под ним — круглая золотая кнопка «Записаться на занятие» с подписью снаружи
   круга (замысел и код AutoClaw из cta_circle.js перенесены сюда); в окне гида три позы профессора — объясняет, думает,
   подтвердил; подсказки профессора к строкам таблиц по якорям #v-<ключ> (файл professor.json, его собирает
   tools\make_quickref.py); сквозной поиск по тексту всех страниц — блок «Найдено на страницах сайта» с выдержками
   на языке страницы (указатели search-<язык>.json собирает tools\build_search_index.py); кнопка поиска в шапке.
   Если рисунок не загрузился — прежний рисованный профессор (функция prof).
   Версия 9 (23.10.2026, Claude «Маисовый полоз цена», слово Рудольфа 14:03): у каждой страницы свой глобус — он отмечает
   золотом и подписывает страны с ресурсами ЭТОЙ страницы (данные globe/<язык>/<страница>.json пишет tools\make_globe_pages.py);
   главная и страницы без своих ресурсов — весь сайт: страны каталога и все страны с каналами ТВ и радио; международные
   ресурсы — списком под глобусом. Если файл данных не загрузился — прежний список C (9 стран). */
(function () {
  'use strict';

  // ── Общее для всех страниц (версия 2.2, 19.10.2026): кнопка «Наверх» появляется после прокрутки;
  //    меню «Ещё» закрывается щелчком мимо него и клавишей Escape ──
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    var onScroll = function () { toTop.classList.toggle('show', window.scrollY > 500); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  document.addEventListener('click', function (e) {
    [].forEach.call(document.querySelectorAll('details.more[open]'), function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    [].forEach.call(document.querySelectorAll('details.more[open]'), function (d) { d.removeAttribute('open'); d.querySelector('summary').focus(); });
  });

  var LANG = (document.documentElement.getAttribute('lang') || 'ru').slice(0, 2);
  var RU = LANG === 'ru';
  var BASE = '';  // все страницы теперь есть на каждом из пяти языков — ссылки ведут на страницу того же языка
  var SELF = (document.currentScript && document.currentScript.src) || '';
  var HERE = SELF.replace(/[^\/]*$/, '');  // папка, где лежит globe.js (рядом — globe-data.js)
  var REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var CDN = {
    d3: 'https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js',
    topo: 'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js',
    atlas: 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json',
    codes: 'https://cdn.jsdelivr.net/npm/i18n-iso-countries@7.11.0/codes.json'
  };
  var WA = 'https://wa.me/37499117067?text=';
  var HOME = [44.6, 40.2]; // глобус открывается с Арменией в центре

  // ── Тексты интерфейса ──
  var TT = {
    ru: { btn: 'Глобус ресурсов', hint: 'Тяните — вращение · колесо мыши или +/− — масштаб · щелчок по стране — её ресурсы', intro: 'Выберите страну на глобусе или в списке ниже. Золотом отмечены страны, по которым в каталоге есть ресурсы. Для любой страны можно записаться на занятия её языком.', anylang: 'Занятия языком этой страны', list: 'Страны в каталоге', lesson: ' — пробный урок бесплатно', book: 'Записаться на урок', tickets: 'Афиша и билеты Еревана', buy: 'Купить билеты', res: 'Ресурсы', more: 'Все ресурсы страны в каталоге →', none: 'По этой стране ресурсов в каталоге пока нет. Знаете хороший источник — предложите его.', suggest: 'Предложить ссылку', wa: 'Написать в WhatsApp', close: 'Закрыть', reset: 'Сброс', zin: 'Приблизить', zout: 'Отдалить', loading: 'Загружаю глобус…', error: 'Не удалось загрузить карту. Проверьте подключение к интернету и откройте глобус ещё раз.' },
    en: { btn: 'Resource globe', hint: 'Drag to rotate · scroll or +/− to zoom · click a country to see its resources', intro: 'Choose a country on the globe or in the list below. Countries with resources in the catalog are marked in gold. For any country you can book lessons in its language.', anylang: 'Lessons in this country’s language', list: 'Countries in the catalog', lesson: ' — free trial lesson', book: 'Book a lesson', tickets: 'Yerevan events and tickets', buy: 'Buy tickets', res: 'Resources', more: 'All of this country’s resources in the catalog →', none: 'No resources for this country in the catalog yet. Know a good source? Suggest it.', suggest: 'Suggest a link', wa: 'Write on WhatsApp', close: 'Close', reset: 'Reset', zin: 'Zoom in', zout: 'Zoom out', loading: 'Loading the globe…', error: 'Could not load the map. Check your internet connection and open the globe again.' },
    hy: { btn: 'Ռեսուրսների գլոբուս', hint: 'Քաշեք՝ պտտելու համար · անիվ կամ +/−՝ մասշտաբ · սեղմեք երկրի վրա՝ նրա ռեսուրսները', intro: 'Ընտրեք երկիրը գլոբուսի վրա կամ ստորև ցանկում։ Ոսկեգույնով նշված են այն երկրները, որոնց ռեսուրսները կան կատալոգում։ Ցանկացած երկրի համար կարող եք գրանցվել նրա լեզվի դասերի։', anylang: 'Այս երկրի լեզվի դասեր', list: 'Երկրները կատալոգում', lesson: ' — անվճար փորձնական դաս', book: 'Գրանցվել դասի', tickets: 'Երևանի աֆիշա և տոմսեր', buy: 'Գնել տոմսեր', res: 'Ռեսուրսներ', more: 'Երկրի բոլոր ռեսուրսները կատալոգում →', none: 'Այս երկրի ռեսուրսներ կատալոգում դեռ չկան։ Գիտե՞ք լավ աղբյուր՝ առաջարկեք։', suggest: 'Առաջարկել հղում', wa: 'Գրել WhatsApp-ով', close: 'Փակել', reset: 'Վերակայել', zin: 'Մոտեցնել', zout: 'Հեռացնել', loading: 'Գլոբուսը բեռնվում է…', error: 'Քարտեզը չհաջողվեց բեռնել։ Ստուգեք ինտերնետ կապը և կրկին բացեք գլոբուսը։' },
    fr: { btn: 'Globe des ressources', hint: 'Faites glisser pour tourner · molette ou +/− pour zoomer · cliquez sur un pays pour ses ressources', intro: 'Choisissez un pays sur le globe ou dans la liste ci-dessous. Les pays dotés de ressources dans le catalogue sont en or. Pour chaque pays, vous pouvez réserver des cours de sa langue.', anylang: 'Cours de la langue de ce pays', list: 'Pays du catalogue', lesson: ' — cours d’essai gratuit', book: 'Réserver un cours', tickets: 'Spectacles et billets à Erevan', buy: 'Acheter des billets', res: 'Ressources', more: 'Toutes les ressources du pays dans le catalogue →', none: 'Pas encore de ressources pour ce pays dans le catalogue. Vous connaissez une bonne source ? Proposez-la.', suggest: 'Proposer un lien', wa: 'Écrire sur WhatsApp', close: 'Fermer', reset: 'Réinitialiser', zin: 'Zoomer', zout: 'Dézoomer', loading: 'Chargement du globe…', error: 'Impossible de charger la carte. Vérifiez votre connexion Internet et rouvrez le globe.' },
    de: { btn: 'Ressourcen-Globus', hint: 'Ziehen zum Drehen · Mausrad oder +/− zum Zoomen · Land anklicken für seine Ressourcen', intro: 'Wählen Sie ein Land auf dem Globus oder in der Liste unten. Länder mit Ressourcen im Katalog sind golden markiert. Für jedes Land können Sie Unterricht in seiner Sprache buchen.', anylang: 'Unterricht in der Landessprache', list: 'Länder im Katalog', lesson: ' — kostenlose Probestunde', book: 'Stunde buchen', tickets: 'Veranstaltungen und Tickets in Jerewan', buy: 'Tickets kaufen', res: 'Ressourcen', more: 'Alle Ressourcen des Landes im Katalog →', none: 'Für dieses Land gibt es noch keine Ressourcen im Katalog. Kennen Sie eine gute Quelle? Schlagen Sie sie vor.', suggest: 'Link vorschlagen', wa: 'Auf WhatsApp schreiben', close: 'Schließen', reset: 'Zurücksetzen', zin: 'Vergrößern', zout: 'Verkleinern', loading: 'Globus wird geladen…', error: 'Die Karte konnte nicht geladen werden. Prüfen Sie die Internetverbindung und öffnen Sie den Globus erneut.' }
  };
  var LN = {
    ru: { arm: 'Армянский язык', rus: 'Русский язык', eng: 'Английский язык', fra: 'Французский язык', deu: 'Немецкий язык' },
    en: { arm: 'Armenian', rus: 'Russian', eng: 'English', fra: 'French', deu: 'German' },
    hy: { arm: 'Հայերեն', rus: 'Ռուսերեն', eng: 'Անգլերեն', fra: 'Ֆրանսերեն', deu: 'Գերմաներեն' },
    fr: { arm: 'Arménien', rus: 'Russe', eng: 'Anglais', fra: 'Français', deu: 'Allemand' },
    de: { arm: 'Armenisch', rus: 'Russisch', eng: 'Englisch', fra: 'Französisch', deu: 'Deutsch' }
  };
  var GEN = { arm: 'армянского языка', rus: 'русского языка', eng: 'английского языка', fra: 'французского языка', deu: 'немецкого языка' };
  // Названия стран каталога на всех языках сайта (браузер может не знать армянских, французских или немецких названий)
  var NAMES = {
    ru: { '051': 'Армения', '643': 'Россия', '840': 'США', '826': 'Великобритания', '250': 'Франция', '276': 'Германия', '756': 'Швейцария', '380': 'Италия', '348': 'Венгрия' },
    en: { '051': 'Armenia', '643': 'Russia', '840': 'United States', '826': 'United Kingdom', '250': 'France', '276': 'Germany', '756': 'Switzerland', '380': 'Italy', '348': 'Hungary' },
    hy: { '051': 'Հայաստան', '643': 'Ռուսաստան', '840': 'ԱՄՆ', '826': 'Միացյալ Թագավորություն', '250': 'Ֆրանսիա', '276': 'Գերմանիա', '756': 'Շվեյցարիա', '380': 'Իտալիա', '348': 'Հունգարիա' },
    fr: { '051': 'Arménie', '643': 'Russie', '840': 'États-Unis', '826': 'Royaume-Uni', '250': 'France', '276': 'Allemagne', '756': 'Suisse', '380': 'Italie', '348': 'Hongrie' },
    de: { '051': 'Armenien', '643': 'Russland', '840': 'Vereinigte Staaten', '826': 'Vereinigtes Königreich', '250': 'Frankreich', '276': 'Deutschland', '756': 'Schweiz', '380': 'Italien', '348': 'Ungarn' }
  };
  var T = TT[LANG] || TT.en, L = LN[LANG] || LN.en;
  // Тексты версии 3: счётчики на глобусе, онлайн-ТВ и радио, фильтры по меткам
  var T3x = {
    ru: { res: ['ресурс', 'ресурса', 'ресурсов'], tv: ['канал ТВ и радио', 'канала ТВ и радио', 'каналов ТВ и радио'], zero: 'ресурсов пока нет', tvLink: 'ТВ, радио и веб-камеры страны', tvDo: 'Смотреть и слушать', filter: 'Фильтр', all: 'Показать все', onGlobe: 'На глобусе', top: 'Наверх', pill: 'Показать только ресурсы с этой меткой', age: 'Показать ресурсы для этого возраста', kind: 'Показать только плитки этого типа', type: 'Показать только справочники этого типа' },
    en: { res: ['resource', 'resources'], tv: ['TV or radio channel', 'TV and radio channels'], zero: 'no resources yet', tvLink: 'TV, radio and webcams of this country', tvDo: 'Watch and listen', filter: 'Filter', all: 'Show all', onGlobe: 'On the globe', top: 'Back to top', pill: 'Show only resources with this label', age: 'Show resources for this age', kind: 'Show only tiles of this type', type: 'Show only reference works of this type' },
    hy: { res: ['ռեսուրս', 'ռեսուրս'], tv: ['հեռուստա- կամ ռադիոալիք', 'հեռուստա- և ռադիոալիք'], zero: 'ռեսուրսներ դեռ չկան', tvLink: 'Երկրի հեռուստատեսությունը, ռադիոն և վեբ-տեսախցիկները', tvDo: 'Դիտել և լսել', filter: 'Ֆիլտր', all: 'Ցույց տալ բոլորը', onGlobe: 'Գլոբուսի վրա', top: 'Վերև', pill: 'Ցույց տալ միայն այս նշումով ռեսուրսները', age: 'Ցույց տալ այս տարիքի ռեսուրսները', kind: 'Ցույց տալ միայն այս տեսակի սալիկները', type: 'Ցույց տալ միայն այս տեսակի տեղեկատուները' },
    fr: { res: ['ressource', 'ressources'], tv: ['chaîne TV ou radio', 'chaînes TV et radio'], zero: 'pas encore de ressources', tvLink: 'TV, radio et webcams du pays', tvDo: 'Regarder et écouter', filter: 'Filtre', all: 'Tout afficher', onGlobe: 'Sur le globe', top: 'Haut de page', pill: 'Afficher uniquement les ressources avec cette étiquette', age: 'Afficher les ressources pour cet âge', kind: 'Afficher uniquement les tuiles de ce type', type: 'Afficher uniquement les ouvrages de ce type' },
    de: { res: ['Ressource', 'Ressourcen'], tv: ['TV- oder Radiosender', 'TV- und Radiosender'], zero: 'noch keine Ressourcen', tvLink: 'TV, Radio und Webcams des Landes', tvDo: 'Ansehen und anhören', filter: 'Filter', all: 'Alle zeigen', onGlobe: 'Auf dem Globus', top: 'Nach oben', pill: 'Nur Ressourcen mit dieser Markierung zeigen', age: 'Ressourcen für dieses Alter zeigen', kind: 'Nur Kacheln dieses Typs zeigen', type: 'Nur Nachschlagewerke dieses Typs zeigen' }
  };
  var T3 = T3x[LANG] || T3x.en;
  // «5 ресурсов», «1 resource», «2 ressources»: окончание по правилам языка (в армянском после числа — единственное)
  function plural(n, f) {
    if (f.length === 3) { var a = n % 10, b = n % 100; return n + ' ' + f[(a === 1 && b !== 11) ? 0 : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 1 : 2]; }
    return n + ' ' + f[(LANG === 'fr' ? n < 2 : n === 1) ? 0 : 1];
  }
  // Метки стран в списках → числовой код ISO 3166 (для кнопки «На глобусе»); регионы и языки — без страны
  var PILL = {};
  [['051', 'Армения|Armenia|Arménie|Armenien|Հայաստան|Армянская диаспора|Armenian diaspora|Diaspora arménienne|Armenische Diaspora|Հայկական սփյուռք'],
   ['040', 'Австрия|Austria|Autriche|Österreich|Ավստրիա'],
   ['826', 'Великобритания|UK|Royaume-Uni|Großbritannien|Մեծ Բրիտանիա'],
   ['356', 'Индия|India|Inde|Indien|Հնդկաստան'],
   ['643', 'Россия|Russia|Russie|Russland|Ռուսաստան'],
   ['840', 'США|USA|États-Unis|ԱՄՆ'],
   ['250', 'Франция|France|Frankreich|Ֆրանսիա'],
   ['276', 'Германия|Germany|Allemagne|Deutschland|Գերմանիա']
  ].forEach(function (p) { p[1].split('|').forEach(function (n) { PILL[n.toLowerCase()] = p[0]; }); });
  // Готовый текст сообщения WhatsApp — на языке страницы ({l} — язык занятий в нужной форме, {c} — страна)
  var MSG = {
    ru: { l: GEN, lesson: 'Здравствуйте! Хочу бесплатный пробный урок {l} (ReferenceGuides).', any: 'Здравствуйте! Хочу заниматься языком страны: {c} (ReferenceGuides).', suggest: 'Здравствуйте! Хочу предложить ссылку для каталога ReferenceGuides по стране: {c}' },
    en: { l: LN.en, lesson: 'Hello! I would like a free trial {l} lesson (ReferenceGuides).', any: 'Hello! I would like lessons in the language of this country: {c} (ReferenceGuides).', suggest: 'Hello! I would like to suggest a link for the ReferenceGuides catalog for this country: {c}' },
    hy: { l: { arm: 'հայերենի', rus: 'ռուսերենի', eng: 'անգլերենի', fra: 'ֆրանսերենի', deu: 'գերմաներենի' }, lesson: 'Բարև Ձեզ։ Կցանկանայի {l} անվճար փորձնական դաս (ReferenceGuides)։', any: 'Բարև Ձեզ։ Կցանկանայի դասեր այս երկրի լեզվով՝ {c} (ReferenceGuides)։', suggest: 'Բարև Ձեզ։ Կցանկանայի հղում առաջարկել ReferenceGuides կատալոգի համար այս երկրի վերաբերյալ՝ {c}' },
    fr: { l: { arm: 'd’arménien', rus: 'de russe', eng: 'd’anglais', fra: 'de français', deu: 'd’allemand' }, lesson: 'Bonjour ! Je souhaiterais un cours d’essai gratuit {l} (ReferenceGuides).', any: 'Bonjour ! Je souhaiterais des cours de la langue de ce pays : {c} (ReferenceGuides).', suggest: 'Bonjour ! Je souhaiterais proposer un lien pour le catalogue ReferenceGuides pour ce pays : {c}' },
    de: { l: LN.de, lesson: 'Hallo! Ich hätte gern eine kostenlose Probestunde {l} (ReferenceGuides).', any: 'Hallo! Ich hätte gern Unterricht in der Sprache dieses Landes: {c} (ReferenceGuides).', suggest: 'Hallo! Ich möchte einen Link für den ReferenceGuides-Katalog zu diesem Land vorschlagen: {c}' }
  };
  var M = MSG[LANG] || MSG.en;
  function lessonMsg(lang) { return M.lesson.replace('{l}', M.l[lang]); }
  function anyLangMsg(country) { return M.any.replace('{c}', country); }
  function suggestMsg(country) { return M.suggest.replace('{c}', country); }

  // ── Данные: страны каталога (ключ — числовой код ISO 3166) ──
  // f — точка, к которой доворачивается глобус; k — масштаб при выборе; lz — с какого масштаба видна подпись;
  // lang — язык страны (плитка-действие «урок»); more — блок страны в каталоге; res — [название RU, название EN, адрес].
  var C = {
    '051': { f: [44.6, 40.2], k: 3.4, lz: 1, lang: 'arm', tickets: true, more: 'resources.html#am', res: [
      ['Ереванский государственный университет', 'Yerevan State University', 'https://www.ysu.am/'],
      ['Американский университет Армении', 'American University of Armenia', 'https://aua.am/'],
      ['Матенадаран — институт древних рукописей', 'Matenadaran — Institute of Ancient Manuscripts', 'https://matenadaran.am/'],
      ['Национальная галерея Армении', 'National Gallery of Armenia', 'https://www.gallery.am/'],
      ['Исторический музей Армении', 'History Museum of Armenia', 'http://www.historymuseum.am/'],
      ['Nayiri — словари армянского языка', 'Nayiri — Armenian dictionaries', 'https://www.nayiri.com/']] },
    '643': { f: [60, 58], k: 1.3, lz: 1, lang: 'rus', more: 'resources.html#ru', res: [
      ['МГУ имени М. В. Ломоносова', 'Lomonosov Moscow State University', 'https://www.msu.ru/'],
      ['Грамота.ру — справочный портал о русском языке', 'Gramota.ru — Russian language reference', 'https://gramota.ru/'],
      ['КиберЛенинка — научная библиотека', 'CyberLeninka — open science library', 'https://cyberleninka.ru/'],
      ['eLibrary.ru — научная электронная библиотека', 'eLibrary.ru — scientific library', 'https://elibrary.ru/'],
      ['НЭБ — Национальная электронная библиотека', 'National Electronic Library (NEB)', 'https://rusneb.ru/'],
      ['Государственный Эрмитаж', 'The State Hermitage Museum', 'https://www.hermitagemuseum.org/'],
      ['Foxford — онлайн-школа', 'Foxford — online school', 'https://foxford.ru/'],
      ['Uchi.ru — платформа для школьников', 'Uchi.ru — learning platform', 'https://uchi.ru/']] },
    '840': { f: [-98, 39], k: 1.5, lz: 1, lang: 'eng', more: 'resources.html#us', res: [
      ['MIT OpenCourseWare', 'MIT OpenCourseWare', 'https://ocw.mit.edu/'],
      ['Harvard Online Learning', 'Harvard Online Learning', 'https://online-learning.harvard.edu/'],
      ['Stanford Online', 'Stanford Online', 'https://online.stanford.edu/'],
      ['Princeton University', 'Princeton University', 'https://www.princeton.edu/'],
      ['NASA', 'NASA', 'https://www.nasa.gov/'],
      ['PubMed — медицинские публикации', 'PubMed — biomedical literature', 'https://pubmed.ncbi.nlm.nih.gov/'],
      ['JSTOR — научные журналы', 'JSTOR — scholarly journals', 'https://www.jstor.org/'],
      ['Метрополитен-музей', 'The Metropolitan Museum of Art', 'https://www.metmuseum.org/'],
      ['Khan Academy', 'Khan Academy', 'https://www.khanacademy.org/'],
      ['Coursera', 'Coursera', 'https://www.coursera.org/']] },
    '826': { f: [-2.5, 54], k: 2.8, lz: 1.7, lang: 'eng', more: 'resources.html#us', res: [
      ['Cambridge University', 'Cambridge University', 'https://www.cam.ac.uk/'],
      ['Oxford University', 'Oxford University', 'https://www.ox.ac.uk/'],
      ['FutureLearn', 'FutureLearn', 'https://www.futurelearn.com/'],
      ['CORE — статьи открытого доступа', 'CORE — open-access papers', 'https://core.ac.uk/'],
      ['Британский музей', 'The British Museum', 'https://www.britishmuseum.org/'],
      ['Cochrane Library — медицинские обзоры', 'Cochrane Library — medical reviews', 'https://www.cochranelibrary.com/']] },
    '250': { f: [2.5, 46.6], k: 2.6, lz: 1.9, lang: 'fra', more: 'resources.html#fr', res: [
      ['Sorbonne Université', 'Sorbonne Université', 'https://www.sorbonne-universite.fr/'],
      ['Gallica — цифровая библиотека', 'Gallica — digital library', 'https://gallica.bnf.fr/'],
      ['FUN MOOC — курсы университетов', 'FUN MOOC — university courses', 'https://www.fun-mooc.fr/'],
      ['TV5MONDE Apprendre — французский язык', 'TV5MONDE Apprendre — learn French', 'https://apprendre.tv5monde.com/'],
      ['Larousse — словари', 'Larousse — dictionaries', 'https://www.larousse.fr/'],
      ['Лувр', 'The Louvre', 'https://www.louvre.fr/'],
      ['BIPM — Международная система единиц', 'BIPM — International System of Units', 'https://www.bipm.org/']] },
    '276': { f: [10.4, 51.1], k: 2.7, lz: 1.9, lang: 'deu', more: 'resources.html#de', res: [
      ['Heidelberg University', 'Heidelberg University', 'https://www.uni-heidelberg.de/'],
      ['DAAD — учёба в Германии', 'DAAD — study in Germany', 'https://www.daad.de/'],
      ['Deutsche Digitale Bibliothek', 'Deutsche Digitale Bibliothek', 'https://www.deutsche-digitale-bibliothek.de/'],
      ['DW Learn German — курсы немецкого', 'DW Learn German — German courses', 'https://learngerman.dw.com/'],
      ['Duden — словарь и правописание', 'Duden — dictionary and spelling', 'https://www.duden.de/']] },
    '756': { f: [8.2, 46.8], k: 3.6, lz: 3.2, more: 'natural-sciences.html', res: [
      ['CERN — Европейская организация ядерных исследований', 'CERN — European nuclear research', 'https://home.cern/'],
      ['ВОЗ — Всемирная организация здравоохранения', 'WHO — World Health Organization', 'https://www.who.int/']] },
    '380': { f: [12.6, 42.6], k: 2.6, lz: 2.3, more: 'applied-sciences.html', res: [
      ['FAO — продовольствие и сельское хозяйство, ООН', 'FAO — UN Food and Agriculture Organization', 'https://www.fao.org/']] },
    '348': { f: [19.4, 47.2], k: 3.4, lz: 2.6, more: 'art-culture.html', res: [
      ['Web Gallery of Art — европейское искусство', 'Web Gallery of Art — European art', 'https://www.wga.hu/']] }
  };
  var ORDER = ['051', '643', '840', '826', '250', '276', '756', '380', '348'];
  // Версия 9: ресурсы ЭТОЙ страницы по странам — globe/<язык>/<страница>.json (пишет tools\make_globe_pages.py)
  var PAGE = (location.pathname.split('/').pop() || '').replace(/\.html$/i, '') || 'index';
  var PD = null;   // { c: {код: [[название, адрес], …]}, x: международные, n: число ресурсов, all: весь сайт }
  var T9x = {
    ru: { list: 'Страны на этой странице', listAll: 'Страны с ресурсами', here: 'Ресурсы на этой странице', intl: 'Международные ресурсы', marked: 'Отмечено стран: {n}.', resPage: 'Ресурсов на этой странице: {n}.',
      resAll: 'Ресурсов в каталоге: {n}, а также ТВ, радио и веб-камеры стран.',
      intro: 'Выберите страну на глобусе или в списке ниже. Золотом отмечены страны, ресурсы которых есть на этой странице.',
      introAll: 'Выберите страну на глобусе или в списке ниже. Золотом отмечены все страны, по которым на сайте есть ресурсы: каталог, ТВ, радио и веб-камеры.' },
    en: { list: 'Countries on this page', listAll: 'Countries with resources', here: 'Resources on this page', intl: 'International resources', marked: 'Countries marked: {n}.', resPage: 'Resources on this page: {n}.',
      resAll: 'Catalog resources: {n}, plus TV, radio and webcams of the countries.',
      intro: 'Choose a country on the globe or in the list below. Countries with resources on this page are marked in gold.',
      introAll: 'Choose a country on the globe or in the list below. All countries with resources on the site — catalog, TV, radio and webcams — are marked in gold.' },
    hy: { list: 'Երկրներ այս էջում', listAll: 'Ռեսուրսներով երկրներ', here: 'Ռեսուրսներ այս էջում', intl: 'Միջազգային ռեսուրսներ', marked: 'Նշված երկրներ՝ {n}։', resPage: 'Ռեսուրսներ այս էջում՝ {n}։',
      resAll: 'Կատալոգի ռեսուրսներ՝ {n}, ինչպես նաև երկրների հեռուստատեսություն, ռադիո և վեբ-տեսախցիկներ։',
      intro: 'Ընտրեք երկիրը գլոբուսի վրա կամ ստորև ցանկում։ Ոսկեգույնով նշված են այն երկրները, որոնց ռեսուրսները կան այս էջում։',
      introAll: 'Ընտրեք երկիրը գլոբուսի վրա կամ ստորև ցանկում։ Ոսկեգույնով նշված են բոլոր երկրները, որոնց ռեսուրսները կան կայքում՝ կատալոգ, հեռուստատեսություն, ռադիո և վեբ-տեսախցիկներ։' },
    fr: { list: 'Pays de cette page', listAll: 'Pays avec des ressources', here: 'Ressources de cette page', intl: 'Ressources internationales', marked: 'Pays marqués : {n}.', resPage: 'Ressources de cette page : {n}.',
      resAll: 'Ressources du catalogue : {n}, plus la TV, la radio et les webcams des pays.',
      intro: 'Choisissez un pays sur le globe ou dans la liste ci-dessous. Les pays dont les ressources figurent sur cette page sont marqués en or.',
      introAll: 'Choisissez un pays sur le globe ou dans la liste ci-dessous. Tous les pays ayant des ressources sur le site — catalogue, TV, radio et webcams — sont marqués en or.' },
    de: { list: 'Länder auf dieser Seite', listAll: 'Länder mit Ressourcen', here: 'Ressourcen auf dieser Seite', intl: 'Internationale Ressourcen', marked: 'Markierte Länder: {n}.', resPage: 'Ressourcen auf dieser Seite: {n}.',
      resAll: 'Katalogressourcen: {n}, dazu TV, Radio und Webcams der Länder.',
      intro: 'Wählen Sie ein Land auf dem Globus oder in der Liste unten. Länder mit Ressourcen auf dieser Seite sind golden markiert.',
      introAll: 'Wählen Sie ein Land auf dem Globus oder in der Liste unten. Alle Länder mit Ressourcen auf der Website — Katalog, TV, Radio und Webcams — sind golden markiert.' }
  };
  var T9 = T9x[LANG] || T9x.en;
  // Названия ресурсов на армянском, французском и немецком (ключ — адрес); чего нет в списке — показывается по-английски
  var RN = {
    hy: { 'https://www.ysu.am/': 'Երևանի պետական համալսարան', 'https://aua.am/': 'Հայաստանի ամերիկյան համալսարան', 'https://matenadaran.am/': 'Մատենադարան՝ Հին ձեռագրերի ինստիտուտ', 'https://www.gallery.am/': 'Հայաստանի ազգային պատկերասրահ', 'http://www.historymuseum.am/': 'Հայաստանի պատմության թանգարան', 'https://www.nayiri.com/': 'Nayiri՝ հայերենի բառարաններ',
      'https://www.msu.ru/': 'Լոմոնոսովի անվան Մոսկվայի պետական համալսարան', 'https://gramota.ru/': 'Gramota.ru՝ ռուսաց լեզվի տեղեկատու', 'https://cyberleninka.ru/': 'CyberLeninka՝ բաց գիտական գրադարան', 'https://elibrary.ru/': 'eLibrary.ru՝ գիտական գրադարան', 'https://rusneb.ru/': 'Ազգային էլեկտրոնային գրադարան (NEB)', 'https://www.hermitagemuseum.org/': 'Պետական Էրմիտաժ', 'https://foxford.ru/': 'Foxford՝ առցանց դպրոց', 'https://uchi.ru/': 'Uchi.ru՝ ուսումնական հարթակ',
      'https://www.princeton.edu/': 'Փրինսթոնի համալսարան', 'https://pubmed.ncbi.nlm.nih.gov/': 'PubMed՝ կենսաբժշկական գրականություն', 'https://www.jstor.org/': 'JSTOR՝ գիտական ամսագրեր', 'https://www.metmuseum.org/': 'Մետրոպոլիտեն թանգարան',
      'https://www.cam.ac.uk/': 'Քեմբրիջի համալսարան', 'https://www.ox.ac.uk/': 'Օքսֆորդի համալսարան', 'https://core.ac.uk/': 'CORE՝ բաց հասանելիությամբ հոդվածներ', 'https://www.britishmuseum.org/': 'Բրիտանական թանգարան', 'https://www.cochranelibrary.com/': 'Cochrane Library՝ բժշկական ակնարկներ',
      'https://gallica.bnf.fr/': 'Gallica՝ թվային գրադարան', 'https://www.fun-mooc.fr/': 'FUN MOOC՝ համալսարանական դասընթացներ', 'https://apprendre.tv5monde.com/': 'TV5MONDE Apprendre՝ սովորիր ֆրանսերեն', 'https://www.larousse.fr/': 'Larousse՝ բառարաններ', 'https://www.louvre.fr/': 'Լուվր', 'https://www.bipm.org/': 'BIPM՝ Միավորների միջազգային համակարգ',
      'https://www.uni-heidelberg.de/': 'Հայդելբերգի համալսարան', 'https://www.daad.de/': 'DAAD՝ ուսում Գերմանիայում', 'https://learngerman.dw.com/': 'DW Learn German՝ գերմաներենի դասընթացներ', 'https://www.duden.de/': 'Duden՝ բառարան և ուղղագրություն',
      'https://home.cern/': 'CERN՝ Միջուկային հետազոտությունների եվրոպական կազմակերպություն', 'https://www.who.int/': 'ԱՀԿ՝ Առողջապահության համաշխարհային կազմակերպություն', 'https://www.fao.org/': 'FAO՝ ՄԱԿ-ի Պարենի և գյուղատնտեսության կազմակերպություն', 'https://www.wga.hu/': 'Web Gallery of Art՝ եվրոպական արվեստ' },
    fr: { 'https://www.ysu.am/': 'Université d’État d’Erevan', 'https://aua.am/': 'Université américaine d’Arménie', 'https://matenadaran.am/': 'Matenadaran — Institut des manuscrits anciens', 'https://www.gallery.am/': 'Galerie nationale d’Arménie', 'http://www.historymuseum.am/': 'Musée d’histoire de l’Arménie', 'https://www.nayiri.com/': 'Nayiri — dictionnaires arméniens',
      'https://www.msu.ru/': 'Université d’État de Moscou Lomonossov', 'https://gramota.ru/': 'Gramota.ru — référence de la langue russe', 'https://cyberleninka.ru/': 'CyberLeninka — bibliothèque scientifique ouverte', 'https://elibrary.ru/': 'eLibrary.ru — bibliothèque scientifique', 'https://rusneb.ru/': 'Bibliothèque électronique nationale (NEB)', 'https://www.hermitagemuseum.org/': 'Musée de l’Ermitage', 'https://foxford.ru/': 'Foxford — école en ligne', 'https://uchi.ru/': 'Uchi.ru — plateforme d’apprentissage',
      'https://www.princeton.edu/': 'Université de Princeton', 'https://pubmed.ncbi.nlm.nih.gov/': 'PubMed — littérature biomédicale', 'https://www.jstor.org/': 'JSTOR — revues savantes', 'https://www.metmuseum.org/': 'Metropolitan Museum of Art',
      'https://www.cam.ac.uk/': 'Université de Cambridge', 'https://www.ox.ac.uk/': 'Université d’Oxford', 'https://core.ac.uk/': 'CORE — articles en libre accès', 'https://www.britishmuseum.org/': 'British Museum', 'https://www.cochranelibrary.com/': 'Cochrane Library — revues médicales',
      'https://gallica.bnf.fr/': 'Gallica — bibliothèque numérique', 'https://www.fun-mooc.fr/': 'FUN MOOC — cours universitaires', 'https://apprendre.tv5monde.com/': 'TV5MONDE Apprendre — apprendre le français', 'https://www.larousse.fr/': 'Larousse — dictionnaires', 'https://www.louvre.fr/': 'Musée du Louvre', 'https://www.bipm.org/': 'BIPM — Système international d’unités',
      'https://www.uni-heidelberg.de/': 'Université de Heidelberg', 'https://www.daad.de/': 'DAAD — étudier en Allemagne', 'https://learngerman.dw.com/': 'DW Learn German — cours d’allemand', 'https://www.duden.de/': 'Duden — dictionnaire et orthographe',
      'https://home.cern/': 'CERN — Organisation européenne pour la recherche nucléaire', 'https://www.who.int/': 'OMS — Organisation mondiale de la santé', 'https://www.fao.org/': 'FAO — Organisation des Nations unies pour l’alimentation et l’agriculture', 'https://www.wga.hu/': 'Web Gallery of Art — art européen' },
    de: { 'https://www.ysu.am/': 'Staatliche Universität Jerewan', 'https://aua.am/': 'Amerikanische Universität Armeniens', 'https://matenadaran.am/': 'Matenadaran — Institut für alte Handschriften', 'https://www.gallery.am/': 'Nationalgalerie Armeniens', 'http://www.historymuseum.am/': 'Historisches Museum Armeniens', 'https://www.nayiri.com/': 'Nayiri — armenische Wörterbücher',
      'https://www.msu.ru/': 'Staatliche Lomonossow-Universität Moskau', 'https://gramota.ru/': 'Gramota.ru — Nachschlagewerk zur russischen Sprache', 'https://cyberleninka.ru/': 'CyberLeninka — offene Wissenschaftsbibliothek', 'https://elibrary.ru/': 'eLibrary.ru — wissenschaftliche Bibliothek', 'https://rusneb.ru/': 'Nationale Elektronische Bibliothek (NEB)', 'https://www.hermitagemuseum.org/': 'Staatliche Eremitage', 'https://foxford.ru/': 'Foxford — Online-Schule', 'https://uchi.ru/': 'Uchi.ru — Lernplattform',
      'https://pubmed.ncbi.nlm.nih.gov/': 'PubMed — biomedizinische Literatur', 'https://www.jstor.org/': 'JSTOR — wissenschaftliche Zeitschriften', 'https://www.metmuseum.org/': 'Metropolitan Museum of Art',
      'https://www.cam.ac.uk/': 'Universität Cambridge', 'https://www.ox.ac.uk/': 'Universität Oxford', 'https://core.ac.uk/': 'CORE — Open-Access-Artikel', 'https://www.britishmuseum.org/': 'British Museum', 'https://www.cochranelibrary.com/': 'Cochrane Library — medizinische Übersichtsarbeiten',
      'https://gallica.bnf.fr/': 'Gallica — digitale Bibliothek', 'https://www.fun-mooc.fr/': 'FUN MOOC — Universitätskurse', 'https://apprendre.tv5monde.com/': 'TV5MONDE Apprendre — Französisch lernen', 'https://www.larousse.fr/': 'Larousse — Wörterbücher', 'https://www.louvre.fr/': 'Louvre', 'https://www.bipm.org/': 'BIPM — Internationales Einheitensystem',
      'https://www.uni-heidelberg.de/': 'Universität Heidelberg', 'https://www.daad.de/': 'DAAD — Studium in Deutschland', 'https://learngerman.dw.com/': 'DW Deutsch lernen — Deutschkurse', 'https://www.duden.de/': 'Duden — Wörterbuch und Rechtschreibung',
      'https://home.cern/': 'CERN — Europäische Organisation für Kernforschung', 'https://www.who.int/': 'WHO — Weltgesundheitsorganisation', 'https://www.fao.org/': 'FAO — Ernährungs- und Landwirtschaftsorganisation der UN', 'https://www.wga.hu/': 'Web Gallery of Art — europäische Kunst' }
  };
  function resName(r) { return RU ? r[0] : ((RN[LANG] && RN[LANG][r[2]]) || r[1]); }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; }); }

  // ── Вращающаяся Земля на кнопке ──
  // Карта суши: сетка 360 × 180 клеток по 1 градусу (Natural Earth 1:50 млн из пакета world-atlas 2.0.2).
  // Сжата кодированием серий: по очереди длины «вода», «суша», «вода»… — клетки идут строками с севера на юг,
  // в строке — с запада на восток; каждое число записано base64-знаками по 5 бит, шестой бит — «число продолжается».
  var LAND = '+nCKvJBCUMBCYhJBDZEoBBH1IGBBCCBOCzBhCCFCDBfEnFWJuBeIBGkCG1EBGECDCFBMDzBhBIBBuCFuECXKHzBiBEECvCClEDBCBBECEBDCCGBKKwB2CEfMjELFDCCCMVnBuCFaZXICB4CDICQBGEBCYlBrCEbZ9DIKBEECECDCHVjBrCDYbBEBEGCBBNC8CQBDDFCBEEBJVhBrCDNEFBCwBLFjBC2BDDNGBCDDSRBBfqCEMEB4BDFBMyBLgBOHEDUPdBCtBHlBGB2ClBYEBBNDPEBCEGDFJOBCbqBPbEEFB/CCHCCMzBCDCDHCCGCEIHOBBYqBXHBFDBSCCBrDL3BBUBFFCCJKVwBaDBDZBzDGBCuCKMJTvBcBBBbBsDCHEwCBCJICCKOQJaKDKFsEGBHDCpCCEEDBJNMSHaKDLCtEUnCFCMHOKVCbLC9EQpCJBEBIDQIwBMD8EBBPoCQGXHvBMEoEDCCJWNBDDyBRIYDwBNElEHJbIDBLsBRIEClCOG8DCEFDnBERsBPKBE6BBKDCGFBB1DSDoBCCBRrBQP4BEOFFBB0DRGlBCYuBLQ3BDLCDDF1DSHjBBcwBHS3BDKCBBBBH0DTGkCwBDVxBDDCKBH4DTFiCBCwBDXuBEDDGnEBBNEnCvBDXuBECGCrENCqCwBBX0BFCqEBBOBqCkCDBzBCFrEBC6C7BJD3BsECC7C9BFFyBwECB9C7BJDyBuEDB9C8BDB6BhBBECMD1CEB9C/B8BfDCCLE1CjD4BCC/BNDOJJE1CGB9C2B+BFBJDECMMID0CGE7C1B+BMIDEKNHEvCJE8C1B+BMKDDJEEFIFsCKB/CyBhCKHCFDBFCYDkCBHLC+CyBhCJICGBDDDXEiCCCCDMC/CwBiCJVDDWFgCHDLChDuBjCIOCGCEXEhCBCEDJDhDuBmCBGKSCBCC1CFEGFiDtBmCBEMZ0CGDEIjDrBmCRa0CLGpDnBnCTY2CJBCBtDlBnCYFDM2CJCvDkBnCaEHH4CIBxDBCgBnCdBlD8DBBSEBHCnC6BDnC8DBBQNCmC8BCmC9DCCNODjCvBCNEkC+DBCNPCiCwBCOH/BgEBCMQBhCyBCPG9BhEBDKzCyBCPCDKzBDBjEJyC0BDUJxBDBlEIOBBD/B0BDVJtBGBmEIICIC8B2BCULCBOFQBCwEIGEJD7B1BDSPOGOhDByBJFEOD2B1BERPMJMDCxEJCFKBEECByB2BDQQLKMDB1ENoC3BDNSKLNNCrELoC3BEKUJMCBLMCxEJjC5BDJWGSLLCyEJiC6BCGZGSLLC0EHiC7BBEcFSLOB1EDjC8BgBFTBCHlFCLBCB1B7BHBZETBDGNB3EDIJCBwBiCZESBFDQB4EBDBDEBKvBhCZDTBGBrFDBTvB/BbBCBRCXD5EBCTuB/BeCRBWBBD7EUvB8BfCSCPBGC9EYrBKFsBzBDNDkFZsBBNCBnBwBCDDKElFa9BlByBCCDJElFb9BkB0BCCCHHjFd8BjB2BDBBFJiFe7BiB4BEGJCE7EgB6BhB6BEFIPByEkB2BhB7BDGHCDKCxEmB1Bf8BFEGDDLBCFqEqByBd+BEICDBBBEBGLnErByBbgCDNBCBMKmEuBvBbhCCgBIDD/DuBvBbjCDeJkEtBwBakCGZJmEsBwBatCDBBTDDCmEqBxBbvCBEBWDkEqByBazHoBzBblDBsEnBzBcIBxCGFBtElB0BcHCwCGGCsElBzBdHCsCCCGFEsEkBzBdGDrCLFEuEiBzBcFFqCODFvEgBzBaGGoCSBFwEe0BZHFpCYwEe1BWJFoCavEe1BWJFlCftEd3BVIFjCiBQB8Dc4BVIFiCkBrEa7BWIEiClBqEY+BUJDjCmBpEX/BSxCnBoEWgCSxCnBoEX/BSxCnBoEWhCQyCoBnEVjCO0CmBnEVkCO0CmBnEUmCM2ClBnEUmCL3CKISoETnCJ4CJLCBNpESpCC/CDQBCNoEQkGLXBxDQlGKoERlGKZBuDQpGBBCcDtDLsHDtDMtHCtDJyGDYCxDIyGDXDxDIzGBXDyDIpHDyDIqHEyDIrHC0DI+KJgLHhLGjLFKB4KFkLCBCkLG0wDDjLCkLCzDGiBCCDCHDFKBEJ4EBBCvDBCPT+B0ECqDdIpCpECCG/CCEeH0C9DBDCBGkCECHCBHoBD5CBE3DHBGyBCBHBkCDjD7CBaDCGxBvCClD/BBXTDEBCBMtB2FiCBCBCBCFCBKnBsB3F0BBBtCrB3F0BsCoBhGnBHCrCoBmGDBkBuCcGIoGgBEJrCFBDBPIM/FyBqCLFHHLjGsB6CYsGsB8CG+GaDBwKIJHgjC';
  function landMask() {
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var m = new Uint8Array(64800), p = 0, v = 0, sh = 0, on = 0, i, j, d;
    for (i = 0; i < LAND.length; i++) {
      d = A.indexOf(LAND.charAt(i));
      v |= (d & 31) << sh;
      if (d & 32) { sh += 5; continue; }
      if (on) for (j = p; j < p + v; j++) m[j] = 1;
      p += v; on ^= 1; v = 0; sh = 0;
    }
    return m;
  }
  // Рисует Землю на холсте внутри кнопки: свет слева сверху, блик на океане, зелень, степи и пустыни, полярные льды.
  // Возвращает функцию play(true или false) — включить вращение или поставить его на паузу.
  function miniGlobe(btn, opts) {   // opts.keep — не стирать содержимое кнопки (opts.hoverOnly с 24.10.2026 не действует — вращается всегда)
    var cv = document.createElement('canvas');
    var ctx = cv.getContext ? cv.getContext('2d') : null;
    if (!ctx || !window.Uint8Array || !window.Float32Array) return null;
    var mask = landMask(), DEG = 180 / Math.PI, SPEED = 10;          // 10 градусов в секунду — оборот за 36 секунд
    var sT = Math.sin(20 / DEG), cT = Math.cos(20 / DEG), sG = Math.sin(23.4 / DEG), cG = Math.cos(23.4 / DEG);            // смотрим чуть сверху: в центре диска 20° с. ш.
    var N = 0, cnt = 0, lon = HOME[0], last = 0, raf = 0, run = false;
    var pix, lonR, latA, r0, r1, fy, al, oc, ld, img;
    function unit(x, y, z) { var l = Math.sqrt(x * x + y * y + z * z); return [x / l, y / l, z / l]; }
    function smooth(a, b, x) { var t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
    // слово Рудольфа 23.10 01:5x: глобус пергаментный, с сеткой координат через 15° и наклонной осью 23,4° (как настольный)
    function gridAt(la, lo) {                                                  // 0…1 — насколько точка на линии сетки
      var w = 120 / N, far = Math.abs(la) > 76, d1 = far ? 99 : Math.abs(la - Math.round(la / 15) * 15);
      var d2 = far ? 99 : Math.abs(lo - Math.round(lo / 15) * 15) * Math.cos(la / DEG), d = Math.min(d1, d2);
      return d >= w ? 0 : 0.7 * (1 - d / w);
    }
    function size() { return Math.max(32, Math.round((btn.clientWidth || 84) * Math.min(2, window.devicePixelRatio || 1))); }
    function setup() {
      var R, M, x, y, Lg = unit(-0.45, 0.55, 0.7), Hf = unit(-0.45, 0.55, 1.7);
      N = size(); R = N / 2; M = N * N; cnt = 0;
      cv.width = cv.height = N;
      img = ctx.createImageData(N, N);
      pix = new Int32Array(M); lonR = new Float32Array(M); latA = new Float32Array(M); r0 = new Int32Array(M); r1 = new Int32Array(M);
      fy = new Float32Array(M); al = new Uint8Array(M); oc = new Float32Array(M * 3); ld = new Float32Array(M * 3);
      for (y = 0; y < N; y++) for (x = 0; x < N; x++) {
        var nx = (x + 0.5 - R) / R, ny = (R - y - 0.5) / R, rr = Math.sqrt(nx * nx + ny * ny);
        var a = Math.min(1, (1 - rr) * R + 0.5);                       // сглаженный край круга
        if (a <= 0) continue;
        if (rr > 0.999) { nx *= 0.999 / rr; ny *= 0.999 / rr; }
        var nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
        var gx = nx * cG - ny * sG, gy = ny * cG + nx * sG;                      // точка в осях наклонённого глобуса
        var lat = Math.asin(Math.max(-1, Math.min(1, gy * cT + nz * sT))) * DEG;
        var q = 89.5 - lat, ra = Math.floor(q), rb = ra + 1, f = q - ra;
        if (ra < 0) { ra = rb = 0; f = 0; } else if (rb > 179) { ra = rb = 179; f = 0; }
        var s = Math.max(0, nx * Lg[0] + ny * Lg[1] + nz * Lg[2]);
        var shade = (0.45 + 0.65 * s) * (0.85 + 0.15 * nz);
        var spec = Math.pow(Math.max(0, nx * Hf[0] + ny * Hf[1] + nz * Hf[2]), 40) * 110;
        var la = Math.abs(lat), dry = 0.65 * Math.exp(-Math.pow((la - 24) / 11, 2)), ice = smooth(58, 68, la);
        var gr = 186 + 30 * dry, gg = 150 + 32 * dry, gb = 98 + 36 * dry, ps = 0.62 + 0.36 * shade;  // суша — коричневая акварель
        gr += (236 - gr) * ice; gg += (226 - gg) * ice; gb += (204 - gb) * ice;  // полярные льды
        var k = cnt * 3;
        pix[cnt] = (y * N + x) * 4;
        lonR[cnt] = Math.atan2(gx, nz * cT - gy * sT) * DEG; latA[cnt] = lat;                    // долгота от центра диска
        r0[cnt] = ra * 360; r1[cnt] = rb * 360; fy[cnt] = f; al[cnt] = Math.round(a * 255);
        oc[k] = 247 * ps + spec / 3; oc[k + 1] = 238 * ps + spec / 3; oc[k + 2] = 214 * ps + spec / 3;   // море — цвета пергамента
        ld[k] = gr * ps + spec / 5; ld[k + 1] = gg * ps + spec / 5; ld[k + 2] = gb * ps + spec / 5;
        cnt++;
      }
    }
    function frame() {
      var D = img.data, i, u, c0, c1, fx, a, b, f, m, k, p, g;
      for (i = 0; i < cnt; i++) {
        u = lonR[i] + lon + 179.5; u -= Math.floor(u / 360) * 360;
        c0 = u | 0; fx = u - c0; c1 = c0 === 359 ? 0 : c0 + 1; a = r0[i]; b = r1[i]; f = fy[i];
        m = (mask[a + c0] * (1 - fx) + mask[a + c1] * fx) * (1 - f) + (mask[b + c0] * (1 - fx) + mask[b + c1] * fx) * f;
        m = m <= 0.3 ? 0 : m >= 0.7 ? 1 : (m - 0.3) / 0.4; m = m * m * (3 - 2 * m);  // чёткий, но сглаженный берег
        k = i * 3; p = pix[i];
        g = gridAt(latA[i], u - 179.5);                                          // линии сетки — золотисто-коричневые
        D[p] = (oc[k] + (ld[k] - oc[k]) * m) * (1 - g) + 150 * g;
        D[p + 1] = (oc[k + 1] + (ld[k + 1] - oc[k + 1]) * m) * (1 - g) + 112 * g;
        D[p + 2] = (oc[k + 2] + (ld[k + 2] - oc[k + 2]) * m) * (1 - g) + 46 * g;
        D[p + 3] = al[i];
      }
      ctx.putImageData(img, 0, 0);
      var dl = (44.5 - lon) / DEG, la = 40.2 / DEG, R = N / 2;                  // золотая точка — Ереван
      if (sT * Math.sin(la) + cT * Math.cos(la) * Math.cos(dl) > 0.2) {
        ctx.beginPath();
        var ex = Math.cos(la) * Math.sin(dl), ey = cT * Math.sin(la) - sT * Math.cos(la) * Math.cos(dl);   // с учётом наклона оси
        ctx.arc(R + (ex * cG + ey * sG) * R, R - (ey * cG - ex * sG) * R, N / 34, 0, 2 * Math.PI);
        ctx.fillStyle = '#b3262b'; ctx.fill(); ctx.lineWidth = N / 80; ctx.strokeStyle = '#fff8dd'; ctx.stroke();
      }
    }
    function tick(now) {
      raf = 0;
      if (!run) return;
      if (!last) last = now;
      else if (now - last >= 33) { lon -= Math.min(100, now - last) / 1000 * SPEED; last = now; frame(); }
      raf = requestAnimationFrame(tick);
    }
    var active = true, hover = false;  // active — большой глобус закрыт; hover — указатель мыши на кнопке
    function play(on) {
      if (on !== undefined) active = !!on;
      run = active;   // 24.10.2026 (слово Рудольфа 15:52): глобусы вращаются всегда, не дожидаясь наведения, и при настройке «меньше движения»
      last = 0;
      if (run && !raf && window.requestAnimationFrame) raf = requestAnimationFrame(tick);
    }
    btn.addEventListener('mouseenter', function () { hover = true; play(); });
    btn.addEventListener('mouseleave', function () { hover = false; play(); });
    setup(); frame();
    cv.setAttribute('aria-hidden', 'true');
    if (opts && opts.keep) { cv.className = 'rg-mini'; btn.insertBefore(cv, btn.firstChild); }
    else { btn.innerHTML = ''; btn.appendChild(cv); }
    window.addEventListener('resize', function () { if (size() !== N) { setup(); frame(); } });
    play(true);
    return play;
  }

  // ── Кнопка в углу (контурный значок — запасной, если браузер не умеет рисовать) ──
  var fab = document.createElement('button');
  fab.type = 'button';
  fab.className = 'globe-fab';
  fab.title = T.btn;
  fab.setAttribute('aria-label', T.btn);
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 2.7 3.2 15.3 0 18M12 3c-3.2 2.7-3.2 15.3 0 18M5 7.5h14M5 16.5h14"/></svg>';
  document.body.appendChild(fab);
  window.RG_miniGlobe = miniGlobe;   // и кнопке языков (слово Рудольфа 24.10 15:52: все глобусы вращаются всегда)
  var spin = miniGlobe(fab); // вращающаяся Земля на кнопке

  // ── Версия 3: глобус вместо значка над заголовком; нижний глобус — только когда верхний ушёл с экрана ──
  var topBtn = null, spinTop = null, topVisible = false, dialogOpen = false, opener = null, want = null;
  var pageIcon = document.querySelector('#content .icon.page');
  if (pageIcon) {
    topBtn = document.createElement('button');
    topBtn.type = 'button';
    topBtn.className = 'icon page globe-top';
    topBtn.title = T.btn;
    topBtn.setAttribute('aria-label', T.btn);
    topBtn.innerHTML = fab.innerHTML; // запасной значок, если браузер не умеет рисовать
    pageIcon.parentNode.replaceChild(topBtn, pageIcon);
    spinTop = miniGlobe(topBtn);
    topBtn.addEventListener('click', function () { openGlobe(null, topBtn); });
    var topCheck = function () { var r = topBtn.getBoundingClientRect(); topVisible = r.bottom > 0 && r.top < (window.innerHeight || 0); syncFab(); };
    topCheck(); // сразу при загрузке, не дожидаясь наблюдателя
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { topVisible = en[en.length - 1].isIntersecting; syncFab(); }).observe(topBtn);
    } else {
      window.addEventListener('scroll', topCheck, { passive: true });
    }
  }
  function syncFab() {
    fab.classList.toggle('away', topVisible);
    if (topVisible) { fab.setAttribute('tabindex', '-1'); fab.setAttribute('aria-hidden', 'true'); }
    else { fab.removeAttribute('tabindex'); fab.removeAttribute('aria-hidden'); }
    if (spin) spin(!dialogOpen && !topVisible);      // вращается только видимый маленький глобус,
    if (spinTop) spinTop(!dialogOpen && topVisible); // а пока открыт большой — оба стоят
  }

  var ov, stage, side, msg, tip, api = null, loading = false;
  fab.addEventListener('click', function () { openGlobe(null, fab); });

  // ── Версия 4: страница «География» — большой глобус сразу на странице; ссылки на страны в таблице
  //    и поиск страны по названию ведут к нему ──
  var GEO = document.getElementById('geo-globe');
  if (GEO) {
    want = GEO.getAttribute('data-start') || null;
    build();
    load();
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[data-num]');
      if (!a) return;
      e.preventDefault();
      openGlobe(a.getAttribute('data-num'), a);
    });
    var gq = document.getElementById('geo-q');
    if (gq) {
      var go = function () { var v = gq.value.trim(); if (v) { if (api) api.pick(v); else want = v; } };
      gq.addEventListener('change', go);
      gq.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    }
  }

  // ref — страна, которую сразу показать (числовой код ISO или название), from — куда вернуть фокус после закрытия
  function openGlobe(ref, from) {
    if (GEO) { // страница «География»: глобус уже на странице — прокручиваем к нему и показываем страну
      GEO.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
      if (ref) { if (api) api.pick(ref); else want = ref; }
      return;
    }
    opener = from || fab;
    want = ref || null;
    if (!ov) build();
    dialogOpen = true; syncFab();
    ov.hidden = false;
    document.body.style.overflow = 'hidden';
    // 23.10 (доклад Анри, слово Рудольфа «коричневые круги сотри»): фокус — на само окно, а не на «✕» — у крестика не появляется
    // тёмное кольцо фокуса при открытии мышью; с клавиатуры Tab по-прежнему ведёт к кнопкам окна
    var dlg = ov.querySelector('.globe-dialog');
    if (dlg) { dlg.setAttribute('tabindex', '-1'); dlg.focus({ preventScroll: true }); }
    if (api) { api.resize(); if (want) { api.pick(want); want = null; } }
    else if (!loading) load();
  }
  function close() {
    ov.hidden = true;
    document.body.style.overflow = '';
    dialogOpen = false; syncFab();
    var back = opener && document.body.contains(opener) ? opener : fab;
    if (back === fab && topVisible && topBtn) back = topBtn;
    back.focus();
  }

  // ── Версия 5 (20.10.2026, Claude, просьба Рудольфа): «Гид по сайту» — профессор в мантии с навигацией по функции
  //    посетителя (учиться, находить, бывать в культуре, помощь, о нас); подсказки к пунктам меню; круглая кнопка
  //    языков в стиле глобуса — видна всегда, при любой прокрутке ──
  var G5x = {
    ru: { btn: 'Гид по сайту', hello: 'Здравствуйте! Я гид по сайту. Что вы хотите сделать?', hint: 'Я ваш гид — нажмите, и я покажу, где что найти.',
      close: 'Закрыть', lang: 'Выбрать язык', pc: 'Консультанты', pa: 'О проекте', consult: 'Бесплатная Zoom-консультация — записаться',
      f: { relig: 'Религия', books: 'Книги', learn: 'Наука', cult: 'Культура', help: 'Консультанты', about: 'О нас' },  // 24.10.2026: новое меню (слово Рудольфа 14:50)
      d: { 'index.html': 'Содержание сайта: все разделы', 'books.html': 'Бесплатные электронные библиотеки, аудиокниги, учебники и детские книги', 'ecology.html': 'Экология и агроэкология: организации, журналы, данные о почвах и климате, спутниковые атласы', 'science.html': 'Университеты, открытые курсы и научные базы данных', 'formalsciences.html': 'Математика и информатика',
        'natural-sciences.html': 'Физика, химия, биология', 'applied-sciences.html': 'Инженерия и медицина', 'learners.html': 'Малышам, школьникам и студентам: уроки, учебники, развивающие игры',
        'resources.html': 'Страны, университеты и языки мира', 'reference-catalogs.html': 'Плотность и температура плавления веществ, каталог справочников', 'geography.html': 'Глобус со справкой о каждой стране',
        'tv.html': 'Телевидение, радио и веб-камеры всех стран', 'apps.html': 'Бесплатные программы для учёбы, работы и творчества', 'art-culture.html': 'Музеи, галереи и культурное наследие',
        'culture-news.html': 'События культуры Еревана с датами и источниками', 'tickets.html': 'Афиша Еревана и покупка билетов', 'religion.html': 'Религии стран мира: официальные сайты, по числу верующих',
        'consultants.html': 'Помощь специалистов по источникам и данным, бесплатная Zoom-консультация', 'about.html': 'Наша миссия и правила' } },
    en: { btn: 'Site guide', hello: 'Hello! I am your guide to this site. What would you like to do?', hint: 'I am your guide — click me and I will show you where everything is.',
      close: 'Close', lang: 'Choose language', pc: 'Consultants', pa: 'About the project', consult: 'Free Zoom consultation — book now',
      f: { relig: 'Religion', books: 'Books', learn: 'Science', cult: 'Culture', help: 'Consultants', about: 'About us' },
      d: { 'index.html': 'Site contents: all sections', 'books.html': 'Free digital libraries, audiobooks, textbooks and children’s books', 'ecology.html': 'Ecology and agroecology: organisations, journals, soil and climate data, satellite atlases', 'science.html': 'Universities, open courses and research databases', 'formalsciences.html': 'Mathematics and computer science',
        'natural-sciences.html': 'Physics, chemistry and biology', 'applied-sciences.html': 'Engineering and medicine', 'learners.html': 'For little ones, pupils and students: lessons, textbooks, educational games',
        'resources.html': 'Countries, universities and languages of the world', 'reference-catalogs.html': 'Density and melting point of substances, a catalogue of reference works', 'geography.html': 'A globe with a fact sheet on every country',
        'tv.html': 'TV, radio and webcams from every country', 'apps.html': 'Free programs for learning, work and creativity', 'art-culture.html': 'Museums, galleries and cultural heritage',
        'culture-news.html': 'Yerevan cultural events with dates and sources', 'tickets.html': 'Yerevan events and tickets', 'religion.html': 'Religions of the world’s countries: official websites, by number of believers',
        'consultants.html': 'Expert help with sources and data, a free Zoom consultation', 'about.html': 'Our mission and rules' } },
    hy: { btn: 'Կայքի ուղեցույց', hello: 'Բարև Ձեզ։ Ես կայքի ուղեցույցն եմ։ Ի՞նչ եք ցանկանում անել։', hint: 'Ես ձեր ուղեցույցն եմ. սեղմեք՝ ցույց կտամ, թե որտեղ ինչ կա։',
      close: 'Փակել', lang: 'Ընտրել լեզու', pc: 'Խորհրդատուներ', pa: 'Նախագծի մասին', consult: 'Անվճար Zoom խորհրդատվություն՝ գրանցվել',
      f: { relig: 'Կրոն', books: 'Գրքեր', learn: 'Գիտություն', cult: 'Մշակույթ', help: 'Խորհրդատուներ', about: 'Մեր մասին' },
      d: { 'index.html': 'Կայքի բովանդակությունը՝ բոլոր բաժինները', 'books.html': 'Անվճար թվային գրադարաններ, աուդիոգրքեր, դասագրքեր և մանկական գրքեր', 'ecology.html': 'Էկոլոգիա և ագրոէկոլոգիա՝ կազմակերպություններ, ամսագրեր, հողի և կլիմայի տվյալներ, արբանյակային ատլասներ', 'science.html': 'Համալսարաններ, բաց դասընթացներ և գիտական շտեմարաններ', 'formalsciences.html': 'Մաթեմատիկա և ինֆորմատիկա',
        'natural-sciences.html': 'Ֆիզիկա, քիմիա, կենսաբանություն', 'applied-sciences.html': 'Ինժեներիա և բժշկություն', 'learners.html': 'Փոքրիկներին, դպրոցականներին և ուսանողներին՝ դասեր, դասագրքեր, զարգացնող խաղեր',
        'resources.html': 'Աշխարհի երկրներ, համալսարաններ և լեզուներ', 'reference-catalogs.html': 'Նյութերի խտությունը և հալման ջերմաստիճանը, տեղեկատուների ցանկ', 'geography.html': 'Գլոբուս՝ յուրաքանչյուր երկրի մասին տեղեկանքով',
        'tv.html': 'Բոլոր երկրների հեռուստատեսություն, ռադիո և վեբ-տեսախցիկներ', 'apps.html': 'Անվճար ծրագրեր ուսման, աշխատանքի և ստեղծագործության համար', 'art-culture.html': 'Թանգարաններ, պատկերասրահներ և մշակութային ժառանգություն',
        'culture-news.html': 'Երևանի մշակութային իրադարձություններ՝ ամսաթվերով և աղբյուրներով', 'tickets.html': 'Երևանի աֆիշա և տոմսերի գնում', 'religion.html': 'Աշխարհի երկրների կրոնները՝ պաշտոնական կայքեր, ըստ հավատացյալների թվի',
        'consultants.html': 'Մասնագետների օգնություն աղբյուրների և տվյալների հարցում, անվճար Zoom խորհրդատվություն', 'about.html': 'Մեր առաքելությունը և կանոնները' } },
    fr: { btn: 'Guide du site', hello: 'Bonjour ! Je suis votre guide du site. Que souhaitez-vous faire ?', hint: 'Je suis votre guide — cliquez, je vous montre où tout se trouve.',
      close: 'Fermer', lang: 'Choisir la langue', pc: 'Consultants', pa: 'À propos du projet', consult: 'Consultation Zoom gratuite — réserver',
      f: { relig: 'Religion', books: 'Livres', learn: 'Sciences', cult: 'Culture', help: 'Consultants', about: 'À propos' },
      d: { 'index.html': 'Sommaire du site : toutes les rubriques', 'books.html': 'Bibliothèques numériques gratuites, livres audio, manuels et livres pour enfants', 'ecology.html': 'Écologie et agroécologie : organisations, revues, données sur les sols et le climat, atlas satellitaires', 'science.html': 'Universités, cours ouverts et bases de données scientifiques', 'formalsciences.html': 'Mathématiques et informatique',
        'natural-sciences.html': 'Physique, chimie, biologie', 'applied-sciences.html': 'Ingénierie et médecine', 'learners.html': 'Pour les petits, les élèves et les étudiants : leçons, manuels, jeux éducatifs',
        'resources.html': 'Pays, universités et langues du monde', 'reference-catalogs.html': 'Masse volumique et point de fusion des substances, catalogue d’ouvrages de référence', 'geography.html': 'Un globe avec une fiche sur chaque pays',
        'tv.html': 'Télévision, radio et webcams de tous les pays', 'apps.html': 'Logiciels gratuits pour apprendre, travailler et créer', 'art-culture.html': 'Musées, galeries et patrimoine culturel',
        'culture-news.html': 'Événements culturels d’Erevan avec dates et sources', 'tickets.html': 'Spectacles à Erevan et achat de billets', 'religion.html': 'Religions des pays du monde : sites officiels, par nombre de fidèles',
        'consultants.html': 'L’aide d’experts pour les sources et les données, une consultation Zoom gratuite', 'about.html': 'Notre mission et nos règles' } },
    de: { btn: 'Wegweiser', hello: 'Hallo! Ich bin Ihr Wegweiser durch die Seite. Was möchten Sie tun?', hint: 'Ich bin Ihr Wegweiser — klicken Sie, ich zeige Ihnen, wo was zu finden ist.',
      close: 'Schließen', lang: 'Sprache wählen', pc: 'Berater', pa: 'Über das Projekt', consult: 'Kostenlose Zoom-Beratung — anmelden',
      f: { relig: 'Religion', books: 'Bücher', learn: 'Wissenschaft', cult: 'Kultur', help: 'Beratung', about: 'Über uns' },
      d: { 'index.html': 'Inhalt der Website: alle Bereiche', 'books.html': 'Kostenlose digitale Bibliotheken, Hörbücher, Lehrbücher und Kinderbücher', 'ecology.html': 'Ökologie und Agrarökologie: Organisationen, Zeitschriften, Boden- und Klimadaten, Satellitenatlanten', 'science.html': 'Universitäten, offene Kurse und Forschungsdatenbanken', 'formalsciences.html': 'Mathematik und Informatik',
        'natural-sciences.html': 'Physik, Chemie, Biologie', 'applied-sciences.html': 'Ingenieurwesen und Medizin', 'learners.html': 'Für die Kleinsten, Schüler und Studierende: Lektionen, Lehrbücher, Lernspiele',
        'resources.html': 'Länder, Universitäten und Sprachen der Welt', 'reference-catalogs.html': 'Dichte und Schmelzpunkt von Stoffen, Katalog der Nachschlagewerke', 'geography.html': 'Ein Globus mit Steckbrief zu jedem Land',
        'tv.html': 'Fernsehen, Radio und Webcams aus allen Ländern', 'apps.html': 'Kostenlose Programme zum Lernen, Arbeiten und Gestalten', 'art-culture.html': 'Museen, Galerien und Kulturerbe',
        'culture-news.html': 'Kulturveranstaltungen in Jerewan mit Daten und Quellen', 'tickets.html': 'Veranstaltungen in Jerewan und Tickets', 'religion.html': 'Religionen der Länder der Welt: offizielle Websites, nach Zahl der Gläubigen',
        'consultants.html': 'Hilfe von Fachleuten zu Quellen und Daten, kostenlose Zoom-Beratung', 'about.html': 'Unsere Mission und Regeln' } }
  };
  var G5 = G5x[LANG] || G5x.en;
  // подсказки к функциям (тексты AutoClaw; армянский — Анри): видны в окне гида и при наведении на группы меню
  var G5H = {
    ru: { relig: 'Религии стран мира: официальные сайты, по числу верующих', books: 'Книги: электронные библиотеки мира и стран, аудиокниги, учебники и детские книги', learn: 'Науки, курсы, учебники, справочные таблицы, география, ресурсы и программы: от дошкольника до студента', cult: 'Музеи, новости культуры, афиша, билеты, ТВ и радио', help: 'Живая консультация: Zoom и WhatsApp', about: 'Как устроен проект и кто за что отвечает' },
    en: { relig: 'Religions of the world’s countries: official websites, by number of believers', books: 'Books: world and national digital libraries, audiobooks, textbooks and children’s books', learn: 'Sciences, courses, textbooks, reference tables, geography, resources and programs: from preschool to university', cult: 'Museums, culture news, events, tickets, TV and radio', help: 'Live consultation: Zoom and WhatsApp', about: 'How the project works and who is responsible for what' },
    hy: { relig: 'Աշխարհի երկրների կրոնները՝ պաշտոնական կայքեր, ըստ հավատացյալների թվի', books: 'Գրքեր՝ աշխարհի և երկրների թվային գրադարաններ, աուդիոգրքեր, դասագրքեր և մանկական գրքեր', learn: 'Գիտություններ, դասընթացներ, դասագրքեր, աղյուսակներ, աշխարհագրություն, ռեսուրսներ և ծրագրեր՝ նախադպրոցականից մինչև ուսանող', cult: 'Թանգարաններ, մշակութային նորություններ, ազդագիր, տոմսեր, հեռուստատեսություն և ռադիո', help: 'Կենդանի խորհրդատվություն՝ Zoom և WhatsApp', about: 'Ինչպես է աշխատում նախագիծը' },
    fr: { relig: 'Religions des pays du monde : sites officiels, par nombre de fidèles', books: 'Livres : bibliothèques numériques du monde et des pays, livres audio, manuels et livres pour enfants', learn: 'Sciences, cours, manuels, tables de référence, géographie, ressources et logiciels : de la maternelle à l’université', cult: 'Musées, actualités culturelles, spectacles, billets, télé et radio', help: 'Consultation en direct : Zoom et WhatsApp', about: 'Comment fonctionne le projet et qui fait quoi' },
    de: { relig: 'Religionen der Länder der Welt: offizielle Websites, nach Zahl der Gläubigen', books: 'Bücher: digitale Bibliotheken der Welt und der Länder, Hörbücher, Lehrbücher und Kinderbücher', learn: 'Wissenschaften, Kurse, Lehrbücher, Referenztabellen, Geografie, Ressourcen und Programme: vom Kindergarten bis zur Uni', cult: 'Museen, Kulturnachrichten, Veranstaltungen, Tickets, TV und Radio', help: 'Persönliche Beratung: Zoom und WhatsApp', about: 'Wie das Projekt funktioniert und wer wofür zuständig ist' }
  }[LANG] || null;
  // 24.10.2026 (Claude «Маисовый полоз цена», слово Рудольфа 14:50): функции — как новое меню: Религия · Наука · Культура · Консультанты · О нас
  var FUNCS = [['relig', ['religion.html']], ['books', ['books.html']],
    ['learn', ['science.html', 'formalsciences.html', 'natural-sciences.html', 'applied-sciences.html', 'learners.html',
      'resources.html', 'reference-catalogs.html', 'geography.html', 'apps.html']],
    ['cult', ['art-culture.html', 'culture-news.html', 'tickets.html', 'tv.html']], ['help', ['consultants.html']], ['about', ['about.html']]];
  var LANGNAME = { ru: 'Русский', en: 'English', hy: 'Հայերեն', fr: 'Français', de: 'Deutsch' };
  var HEREPAGE = (location.pathname.split('/').pop() || 'index.html');
  // Профессор в мантии и шапочке — рисунок сайта (свой, без чужих персонажей); vb — какую часть показать
  function prof(vb) {
    return '<svg viewBox="' + vb + '" aria-hidden="true" focusable="false">' +
      '<path d="M38 240C40 182 62 150 100 146c38 4 60 36 62 94z" fill="#23305e"/>' +
      '<path d="M86 150l-9 90h17l4-88zM114 150l9 90h-17l-4-88z" fill="#f2c230"/>' +
      '<path d="M84 146l16 22 16-22z" fill="#fff8e6"/><rect x="91" y="126" width="18" height="24" rx="6" fill="#e3ad84"/>' +
      '<ellipse cx="66" cy="104" rx="6" ry="9" fill="#e3ad84"/><ellipse cx="134" cy="104" rx="6" ry="9" fill="#e3ad84"/>' +
      '<ellipse cx="100" cy="102" rx="34" ry="38" fill="#f2c9a0"/>' +
      '<path d="M68 106c2 32 18 46 32 46s30-14 32-46c-8 16-20 22-32 22s-24-6-32-22z" fill="#f1eee6"/>' +
      '<path d="M86 116c6-4 12-2 14 1 2-3 8-5 14-1-6 4-12 4-14 2-2 2-8 2-14-2z" fill="#e2ddd2"/>' +
      '<path d="M93 124q7 5 14 0" stroke="#9c5b3c" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M79 88q8-4 16 0M105 88q8-4 16 0" stroke="#d6d0c2" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="87" cy="101" r="2.6" fill="#2b1d0e"/><circle cx="113" cy="101" r="2.6" fill="#2b1d0e"/>' +
      '<circle cx="87" cy="100" r="9.5" fill="none" stroke="#3a2a12" stroke-width="2.5"/><circle cx="113" cy="100" r="9.5" fill="none" stroke="#3a2a12" stroke-width="2.5"/>' +
      '<path d="M96.5 100h7" stroke="#3a2a12" stroke-width="2.5"/>' +
      '<path d="M70 72v12c10 7 50 7 60 0V72l-30 9z" fill="#1b2346"/><path d="M100 44l54 18-54 18-54-18z" fill="#141a33"/>' +
      '<circle cx="100" cy="62" r="3.5" fill="#f2c230"/><path d="M100 62l40 9v20" stroke="#f2c230" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M136 90h8l-1.5 13h-5z" fill="#f2c230"/>' +
      '<path d="M148 200l38-48" stroke="#8d6b14" stroke-width="4" stroke-linecap="round"/><circle cx="186" cy="152" r="4.5" fill="#f2c230"/>' +
      '<circle cx="147" cy="201" r="9" fill="#f2c9a0"/></svg>';
  }
  // подсказки к пунктам меню: что внутри
  var navEl = document.querySelector('nav.main');
  function pageLabel(h) {
    if (h === 'consultants.html') return G5.pc;
    if (h === 'about.html') return G5.pa;
    if (h === 'religion.html') return { ru: 'Религии стран мира', en: 'Religions of the world’s countries', hy: 'Աշխարհի երկրների կրոնները',
      fr: 'Religions des pays du monde', de: 'Religionen der Länder der Welt' }[LANG] || 'Religions of the world’s countries';  // 24.10.2026
    var a = navEl && navEl.querySelector('a[href="' + h + '"]');
    return a ? a.textContent : h;
  }
  if (navEl) {
    [].forEach.call(navEl.querySelectorAll('a[href]'), function (a) { var d = G5.d[a.getAttribute('href')]; if (d && !a.title) a.title = d; });
    if (G5H) [['religion.html', 'relig'], ['books.html', 'books'], ['consultants.html', 'help'], ['about.html', 'about']].forEach(function (p) {  // «Религия», «Консультанты» и «О нас» в верхнем ряду
      var a = navEl.querySelector(':scope > a[href="' + p[0] + '"]'); if (a) a.title = G5H[p[1]];
    });
    [].forEach.call(navEl.querySelectorAll('details.more > summary'), function (s) {
      var inside = [].map.call(s.parentNode.querySelectorAll('.more-list a'), function (a) { return a.textContent; }).join(' · ');
      var fk = null;  // какая это функция — по первой странице группы
      FUNCS.forEach(function (f) { if (s.parentNode.querySelector('.more-list a[href="' + f[1][0] + '"]')) fk = f[0]; });
      s.title = (G5H && fk ? G5H[fk] + ' — ' : '') + inside;
    });
  }
  // кнопка гида
  var guideBtn = document.createElement('button');
  guideBtn.type = 'button';
  guideBtn.className = 'guide-fab';
  guideBtn.title = G5.btn;
  guideBtn.setAttribute('aria-label', G5.btn);
  guideBtn.innerHTML = prof('46 40 108 108');
  document.body.appendChild(guideBtn);
  var gov = null, gtip = null;
  function hideGuideTip() { if (gtip) { gtip.parentNode.removeChild(gtip); gtip = null; } }
  function guideClose() { gov.hidden = true; document.body.style.overflow = ''; guideBtn.focus(); }
  function guideOpen() {
    hideGuideTip();
    if (!gov) {
      gov = document.createElement('div');
      gov.className = 'guide-overlay';
      gov.setAttribute('role', 'dialog');
      gov.setAttribute('aria-modal', 'true');
      gov.setAttribute('aria-label', G5.btn);
      var cards = FUNCS.map(function (f) {
        return '<section class="guide-card g-' + f[0] + '"><h3>' + esc(G5.f[f[0]]) + '</h3>' + (G5H ? '<p class="guide-fh">' + esc(G5H[f[0]]) + '</p>' : '') + '<ul>' + f[1].map(function (h) {
          return '<li><a href="' + BASE + h + '"' + (h === HEREPAGE ? ' aria-current="page"' : '') + ' title="' + esc(G5.d[h] || '') + '">' + esc(pageLabel(h)) +
            '<small>' + esc(G5.d[h] || '') + '</small></a></li>';
        }).join('') + (f[0] === 'help' ? '<li class="consult"><a class="cta-zoom" href="' + BASE + 'consultants.html#zoom">' + esc(G5.consult) + '</a></li>' : '') + '</ul></section>';
      }).join('');
      gov.innerHTML = '<div class="guide-dialog"><button type="button" class="globe-close guide-close" aria-label="' + esc(G5.close) + '">✕</button>' +
        '<div class="guide-prof">' + prof('0 36 200 204') + '</div><div class="guide-body"><h2>' + esc(G5.btn) + '</h2>' +
        '<p class="guide-hello">' + esc(G5.hello) + '</p><div class="guide-grid">' + cards + '</div></div></div>';
      document.body.appendChild(gov);
      gov.querySelector('.guide-close').addEventListener('click', guideClose);
      gov.addEventListener('click', function (e) { if (e.target === gov) guideClose(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && gov && !gov.hidden) guideClose(); });
    }
    gov.hidden = false;
    document.body.style.overflow = 'hidden';
    gov.querySelector('.guide-close').focus();
  }
  guideBtn.addEventListener('click', guideOpen);
  // всплывающая подсказка гида — один раз для посетителя (если браузер не даёт хранить отметку, не показываем)
  try {
    if (!window.localStorage.getItem('rg-guide-tip')) {
      window.localStorage.setItem('rg-guide-tip', '1');
      setTimeout(function () {
        gtip = document.createElement('div');
        gtip.className = 'guide-tip';
        gtip.setAttribute('role', 'status');
        gtip.textContent = G5.hint;
        gtip.addEventListener('click', guideOpen);
        document.body.appendChild(gtip);
        setTimeout(hideGuideTip, 9000);
      }, 1500);
    }
  } catch (e) { /* хранилище недоступно — подсказку не показываем */ }
  // круглая кнопка языков в стиле глобуса: та же страница на другом языке, при любой прокрутке
  var langSpan = document.querySelector('header .lang') || document.querySelector('.lang');
  var langLinks = langSpan ? [].slice.call(langSpan.querySelectorAll('a[hreflang]')) : [];
  if (langLinks.length) {
    var lfab = document.createElement('div');
    lfab.className = 'lang-fab';
    lfab.innerHTML = '<div class="lang-list" hidden>' + langLinks.map(function (a) {
      var l = a.getAttribute('hreflang');
      return '<a href="' + esc(a.getAttribute('href')) + '" hreflang="' + esc(l) + '" lang="' + esc(l) + '" title="' + esc(LANGNAME[l] || l) + '">' + esc(a.textContent.trim()) + '</a>';
    }).join('') + '</div><button type="button" class="lang-btn" aria-expanded="false" aria-label="' + esc(G5.lang + ': ' + (LANGNAME[LANG] || LANG)) + '" title="' + esc(G5.lang) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 2.7 3.2 15.3 0 18M12 3c-3.2 2.7-3.2 15.3 0 18"/></svg>' +
      '<span>' + esc(LANG.toUpperCase()) + '</span></button>';
    document.body.appendChild(lfab);
    var lbtn = lfab.querySelector('.lang-btn'), llist = lfab.querySelector('.lang-list');
    var setLang = function (open) { llist.hidden = !open; lbtn.setAttribute('aria-expanded', String(open)); };
    lbtn.addEventListener('click', function () { setLang(llist.hidden); });
    document.addEventListener('click', function (e) { if (!lfab.contains(e.target)) setLang(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setLang(false); });
  }

  // ── Версия 7 (20.10.2026, Claude): быстрый справочник значений на странице «Справочные таблицы» ──
  //    Без JavaScript таблица видна целиком; здесь — поиск на всех языках и по формуле, кнопки групп, сортировка, счётчик.
  (function () {
    var box = document.getElementById('values');
    if (!box || !box.classList.contains('qref')) return;
    var tools = box.querySelector('.qref-tools'), inp = document.getElementById('qv'), qn = document.getElementById('qn'),
      empty = document.getElementById('qe'), tb = box.querySelector('tbody'), head = box.querySelector('thead');
    if (!tools || !inp || !tb || !head) return;
    var rows = [].slice.call(tb.rows), grp = '', SUB = '₀₁₂₃₄₅₆₇₈₉';
    var MARKS = new RegExp('[' + String.fromCharCode(0x300) + '-' + String.fromCharCode(0x36f) + ']', 'g');  // ударения и точки над буквами
    tools.hidden = false;
    // как tools\make_quickref.py пишет ключи строк: строчные буквы, без ударений и точек над «ё», цифры формул — обычные
    function norm(s) {
      s = String(s).toLowerCase();
      if (s.normalize) s = s.normalize('NFD').replace(MARKS, '');
      return s.replace(/[₀-₉]/g, function (c) { return String(SUB.indexOf(c)); }).replace(/\s+/g, ' ').trim();
    }
    function apply() {
      var words = norm(inp.value).split(' ').filter(Boolean), k = 0;
      rows.forEach(function (r) {
        var key = r.getAttribute('data-k') || '';
        var ok = (!grp || r.getAttribute('data-g') === grp) && words.every(function (w) { return key.indexOf(w) >= 0; });
        r.hidden = !ok;
        if (ok) k++;
      });
      if (qn) qn.textContent = k;
      if (empty) empty.hidden = k > 0;
    }
    inp.addEventListener('input', apply);
    var gbox = box.querySelector('.qref-groups');
    if (gbox) gbox.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      grp = b.getAttribute('data-g') || '';
      [].forEach.call(gbox.querySelectorAll('button'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      apply();
    });
    var coll = (window.Intl && Intl.Collator) ? new Intl.Collator(LANG).compare : function (a, b) { return a < b ? -1 : a > b ? 1 : 0; };
    head.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-sort]');
      if (!b) return;
      var th = b.parentNode, key = b.getAttribute('data-sort'), dir = th.getAttribute('aria-sort') === 'ascending' ? -1 : 1;
      [].forEach.call(head.querySelectorAll('th[aria-sort]'), function (x) { x.setAttribute('aria-sort', 'none'); });
      th.setAttribute('aria-sort', dir > 0 ? 'ascending' : 'descending');
      rows.sort(function (r1, r2) {
        if (key === 'n') return dir * coll(r1.cells[0].textContent, r2.cells[0].textContent);
        var x = parseFloat(r1.getAttribute('data-' + key)), y = parseFloat(r2.getAttribute('data-' + key));
        if (isNaN(x) && isNaN(y)) return 0;
        if (isNaN(x)) return 1;  // нет значения (нет точки плавления) — всегда в конце
        if (isNaN(y)) return -1;
        return dir * (x - y);
      });
      rows.forEach(function (r) { tb.appendChild(r); });
    });
    // ?q=свинец в адресе — сразу показать найденное (удобно делиться ссылкой)
    var m = /[?&]q=([^&#]*)/.exec(location.search);
    if (m) {
      try { inp.value = decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (err) { inp.value = m[1]; }
      apply();
      box.scrollIntoView({ block: 'start' });
    }
  })();

  // ── Версия 3: всё, что выглядит как кнопка, нажимается ──
  // текущий язык в переключателе → наверх страницы
  [].forEach.call(document.querySelectorAll('.lang > b'), function (b) {
    var a = document.createElement('a');
    a.href = '#top'; a.className = 'cur'; a.title = T3.top;
    a.setAttribute('aria-current', 'true');
    b.parentNode.insertBefore(a, b); a.appendChild(b);
  });
  // метки страны, языка и возраста в списках, подсказка о типах плиток → фильтры
  var PILLS = 'ul.links .country, ul.links .age, .legend .t';
  [].forEach.call(document.querySelectorAll(PILLS), function (el) {
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    if (el.classList.contains('t')) el.setAttribute('aria-pressed', 'false');
    el.title = el.classList.contains('age') ? T3.age : el.classList.contains('t') ? T3.kind : el.classList.contains('kind') ? T3.type : T3.pill;
  });
  var bar = null, undo = null; // полоска «Фильтр: … · Показать все» внизу экрана и функция отмены фильтра
  function showBar(label, n, id, reset) {
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'rg-bar';
      bar.setAttribute('role', 'status');
      document.body.appendChild(bar);
      bar.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        if (b.getAttribute('data-act') === 'globe') openGlobe(b.getAttribute('data-id'), b);
        else clearFilter();
      });
    }
    undo = reset;
    bar.innerHTML = '<span>' + esc(T3.filter) + ': <b>' + esc(label) + '</b> · ' + n + '</span>' +
      '<button type="button" data-act="all">' + esc(T3.all) + '</button>' +
      (id ? '<button type="button" data-act="globe" data-id="' + id + '">' + esc(T3.onGlobe) + '</button>' : '');
    bar.hidden = false;
  }
  function clearFilter() {
    if (undo) { var f = undo; undo = null; f(); }
    if (bar) bar.hidden = true;
  }
  function lists() { // пустые списки и их заголовки прячем
    [].forEach.call(document.querySelectorAll('ul.links'), function (ul) {
      var any = [].some.call(ul.children, function (li) { return !li.hidden; });
      ul.hidden = !any;
      var h = ul.previousElementSibling;
      if (h && h.tagName === 'P' && h.classList.contains('note')) { h.hidden = !any; h = h.previousElementSibling; }  // версия 7
      if (h && /^H[234]$/.test(h.tagName)) h.hidden = !any;
    });
    // 24.10.2026 (Claude «Маисовый полоз цена»): вложенные разделы страницы «Религии стран мира» (.rg-grp) прячутся, когда в них
    // не осталось видимого списка; раздел без списка (проверенных сайтов пока нет) виден только без фильтра
    var filtering = !!document.querySelector('ul.links > li[hidden]');
    [].forEach.call(document.querySelectorAll('.rg-grp'), function (g) {
      g.hidden = g.querySelector('ul.links') ? !g.querySelector('ul.links:not([hidden])') : filtering;
    });
  }
  function showAll() { [].forEach.call(document.querySelectorAll('ul.links > li'), function (li) { li.hidden = false; }); lists(); }
  function goTo(el) { if (el) el.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'center' }); }
  function tagFilter(pill) {
    var txt = pill.textContent.trim(), n = 0, all = document.querySelector('.age-filter button[data-age="all"]');
    clearFilter();
    if (all) all.click(); // фильтр по возрасту сбрасываем, чтобы фильтры не смешивались
    [].forEach.call(document.querySelectorAll('ul.links > li'), function (li) {
      var has = [].some.call(li.querySelectorAll('.country'), function (c) { return c.textContent.trim() === txt; });
      li.hidden = !has;
      if (has) n++;
    });
    lists();
    showBar(txt, n, PILL[txt.toLowerCase()] || null, showAll);
    goTo(document.querySelector('ul.links > li:not([hidden])'));
  }
  function ageFilter(pill) {
    var li = pill.closest('li'), codes = (li && li.getAttribute('data-age')) || '', fb = document.querySelector('.age-filter');
    if (!fb || !codes) return;
    clearFilter();
    var one = fb.querySelector('button[data-age="' + (codes.length >= 3 ? 'all' : codes) + '"]');
    if (one) one.click();
    else { // метка сразу на две группы (например, 3–17): показываем обе
      [].forEach.call(fb.querySelectorAll('button'), function (x) { var a = x.getAttribute('data-age'); x.setAttribute('aria-pressed', String(a !== 'all' && codes.indexOf(a) >= 0)); });
      [].forEach.call(document.querySelectorAll('ul.links li[data-age]'), function (x) {
        var a = x.getAttribute('data-age');
        x.hidden = !codes.split('').some(function (c) { return a.indexOf(c) >= 0; });
      });
      lists();
    }
    goTo(fb);
  }
  function kindFilter(t) {
    var on = t.getAttribute('aria-pressed') !== 'true', act = t.classList.contains('act'), n = 0;
    var cards = document.querySelectorAll('ul.links > li, .grid .card'); // плитки-источники и плитки-действия (класс act)
    clearFilter();
    if (!on) return; // повторный щелчок — снять фильтр
    [].forEach.call(cards, function (c) { var m = c.classList.contains('act') === act; c.hidden = !m; if (m) n++; });
    lists();
    t.setAttribute('aria-pressed', 'true');
    var name = t.firstChild && t.firstChild.nodeType === 3 ? t.firstChild.nodeValue.trim() : t.textContent.trim();
    showBar(name, n, null, function () {
      [].forEach.call(cards, function (c) { c.hidden = false; });
      lists();
      t.setAttribute('aria-pressed', 'false');
    });
    goTo(document.querySelector('ul.links > li:not([hidden]), .grid .card:not([hidden])'));
  }
  function pillAct(el) {
    if (el.classList.contains('age')) ageFilter(el);
    else if (el.classList.contains('t')) kindFilter(el);
    else tagFilter(el);
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest(PILLS);
    if (el) { e.preventDefault(); pillAct(el); return; }
    // выбран возраст кнопкой фильтра — фильтр по метке уже не действует
    if (e.target.closest && e.target.closest('.age-filter button') && undo) { undo = null; if (bar) bar.hidden = true; }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var el = e.target.closest && e.target.closest(PILLS);
    if (el) { e.preventDefault(); pillAct(el); }
  });
  // Версия 4: на странице «География» глобус и справка стоят прямо в тексте страницы — без окна и кнопки «Закрыть»
  function buildInline() {
    var G = window.RG_GEO;
    ov = GEO;
    ov.classList.add('globe-inline');
    ov.innerHTML =
      '<div class="globe-dialog">' +
        '<div class="globe-stage">' +
          '<div class="globe-tools">' +
            '<button type="button" data-z="in" aria-label="' + esc(T.zin) + '">+</button>' +
            '<button type="button" data-z="out" aria-label="' + esc(T.zout) + '">−</button>' +
            '<button type="button" data-z="reset">' + esc(T.reset) + '</button>' +
          '</div>' +
          '<div class="globe-msg">' + esc(T.loading) + '</div>' +
          '<div class="globe-tip" hidden></div>' +
          '<p class="globe-hint">' + esc((G && G.t.hint) || T.hint) + '</p>' +
        '</div>' +
        '<aside class="globe-side" aria-live="polite"><h2>' + esc((G && G.t.title) || T.btn) + '</h2><p>' + esc(T.loading) + '</p></aside>' +
      '</div>';
    stage = ov.querySelector('.globe-stage');
    side = ov.querySelector('.globe-side');
    msg = ov.querySelector('.globe-msg');
    tip = ov.querySelector('.globe-tip');
    ov.querySelector('.globe-tools').addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b && api) api.tool(b.getAttribute('data-z'));
    });
    window.addEventListener('resize', function () { if (api) api.resize(); });
  }
  function build() {
    if (GEO) return buildInline();
    ov = document.createElement('div');
    ov.className = 'globe-overlay';
    ov.hidden = true;
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', T.btn);
    ov.innerHTML =
      '<div class="globe-dialog">' +
        '<button type="button" class="globe-close" aria-label="' + esc(T.close) + '">✕</button>' +
        '<div class="globe-stage">' +
          '<div class="globe-tools">' +
            '<button type="button" data-z="in" aria-label="' + esc(T.zin) + '">+</button>' +
            '<button type="button" data-z="out" aria-label="' + esc(T.zout) + '">−</button>' +
            '<button type="button" data-z="reset">' + esc(T.reset) + '</button>' +
          '</div>' +
          '<div class="globe-msg">' + esc(T.loading) + '</div>' +
          '<div class="globe-tip" hidden></div>' +
          '<p class="globe-hint">' + esc(T.hint) + '</p>' +
        '</div>' +
        '<aside class="globe-side" aria-live="polite"><h2>' + esc(T.btn) + '</h2><p>' + esc(T.loading) + '</p></aside>' +
      '</div>';
    document.body.appendChild(ov);
    stage = ov.querySelector('.globe-stage');
    side = ov.querySelector('.globe-side');
    msg = ov.querySelector('.globe-msg');
    tip = ov.querySelector('.globe-tip');
    ov.querySelector('.globe-close').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ov && !ov.hidden) close(); });
    ov.querySelector('.globe-tools').addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b && api) api.tool(b.getAttribute('data-z'));
    });
    window.addEventListener('resize', function () { if (api && !ov.hidden) api.resize(); });
  }

  function script(src) {
    return new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = fail;
      document.head.appendChild(s);
    });
  }
  function getJSON(u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error(u); return r.json(); }); }
  function load() {
    loading = true;
    msg.style.display = '';
    msg.textContent = T.loading;
    Promise.all([
      (window.d3 ? Promise.resolve() : script(CDN.d3)).then(function () { return window.topojson ? null : script(CDN.topo); }),
      fetch(CDN.atlas).then(function (r) { if (!r.ok) throw new Error('atlas'); return r.json(); }),
      fetch(CDN.codes).then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; }),
      // названия всех стран на пяти языках и счётчики каналов ТВ и радио (без этого файла глобус тоже работает)
      (window.RG_DATA ? Promise.resolve() : script(HERE + 'globe-data.js')).catch(function () { return null; }),
      // версия 9: ресурсы этой страницы по странам (нет своего файла — весь сайт, index.json)
      getJSON(HERE + 'globe/' + LANG + '/' + PAGE + '.json')
        .then(function (d) { return d && d.use ? getJSON(HERE + 'globe/' + LANG + '/' + d.use + '.json') : d; })
        .catch(function () { return getJSON(HERE + 'globe/' + LANG + '/index.json'); })
        .catch(function () { return null; })
    ]).then(function (v) {
      PD = v[4] || null;
      msg.style.display = 'none';
      api = draw(v[1], v[2]);
      if (want) { api.pick(want); want = null; }
    }).catch(function () {
      msg.textContent = T.error;
      side.innerHTML = '<h2>' + esc(T.btn) + '</h2><p>' + esc(T.error) + '</p>';
    }).then(function () { loading = false; });
  }

  // ── Глобус ──
  function draw(world, codes) {
    var d3 = window.d3, topojson = window.topojson;
    var a2 = {};
    (codes || []).forEach(function (c) { a2[c[2]] = c[0]; });
    var dn = null;
    try {
      dn = new Intl.DisplayNames([LANG], { type: 'region' });
      if (dn.resolvedOptions().locale.slice(0, 2) !== LANG) dn = null; // браузер не знает этого языка — не подменяем языком системы
    } catch (e) { dn = null; }
    var own = NAMES[LANG] || NAMES.en;
    var RD = window.RG_DATA || {}, TVN = RD.tv || {}, A2 = RD.a2 || {}, NM = (RD.names && RD.names[LANG]) || {};
    function nameOf(f) {
      if (f && own[f.id]) return own[f.id];
      if (f && NM[f.id]) return NM[f.id];
      var code = f && a2[f.id];
      if (dn && code) { try { var n = dn.of(code); if (n && n !== code) return n; } catch (e) { /* имя из карты */ } }
      return f ? f.properties.name : '';
    }
    // «Армения · 6 ресурсов · 9 каналов ТВ и радио» — подсказка при наведении на страну
    // версия 9: ресурсы этой страницы по стране; на главной — ещё каналы ТВ и радио
    var PC = PD && PD.c, ALL = !PD || !!PD.all;
    function resOf(id) {
      if (PC) return PC[id] || [];
      return C[id] ? C[id].res.map(function (r) { return [resName(r), r[2]]; }) : [];
    }
    function has(id) { return resOf(id).length > 0 || (ALL && !!TVN[id]) || !!(window.RG_GEO && window.RG_GEO.c && window.RG_GEO.c[id]); }
    function counts(id) {
      var p = [], r = resOf(id).length, t = (ALL && TVN[id]) ? TVN[id][0] + TVN[id][1] : 0;
      if (r) p.push(plural(r, T3.res));
      if (t) p.push(plural(t, T3.tv));
      return ' · ' + (p.length ? p.join(' · ') : T3.zero);
    }

    var feats = topojson.feature(world, world.objects.countries).features;
    var byId = {};
    feats.forEach(function (f) { if (f.id) byId[f.id] = f; });
    // версия 9: отмечены и подписаны все страны с ресурсами этой страницы; подпись — в центре самой большой части страны
    // мелкие страны, которых нет на карте (Андорра, Монако, острова…), — золотые точки по координатам со страницы «География»
    var PTS = (PD && PD.p) || {};
    if (window.RG_GEO && window.RG_GEO.c) Object.keys(window.RG_GEO.c).forEach(function (k) {   // «География»: все страны справки
      var ll = window.RG_GEO.c[k].ll;
      if (ll && !PTS[k]) PTS[k] = [ll[1], ll[0]];
    });
    var ids = Object.keys(byId).filter(has).concat(Object.keys(PTS).filter(function (id) { return !byId[id] && has(id); }));
    function pname(id) { return (PD && PD.nm && PD.nm[id]) || NM[id] || id; }   // название страны-точки (Косово — из файла данных)
    function nm(id) { return nameOf(byId[id] || { id: id, properties: { name: pname(id) } }); }
    ids.sort(function (a, b) { return resOf(b).length - resOf(a).length; });
    function mainCenter(f) {
      var g = f.geometry;
      if (g && g.type === 'MultiPolygon') {
        var best = null, ba = -1;
        g.coordinates.forEach(function (poly) { var q = { type: 'Polygon', coordinates: poly }, a = d3.geoArea(q); if (a > ba) { ba = a; best = q; } });
        if (best) return d3.geoCentroid(best);
      }
      return d3.geoCentroid(f);
    }
    var META = {}, MANY = ids.length > 40;   // много стран — точки только у маленьких, подписи крупных видны сразу, мелких — при приближении
    ids.forEach(function (id) {
      var c = C[id], pt = !byId[id], a = pt ? 0 : d3.geoArea(byId[id]);
      META[id] = { f: c ? c.f : (pt ? PTS[id] : mainCenter(byId[id])), a: a, pt: pt,
        k: c ? c.k : (a > 0.12 ? 1.2 : a > 0.04 ? 1.7 : a > 0.012 ? 2.4 : a > 0.003 ? 3.2 : 4.2),
        lz: c ? c.lz : (a > 0.05 ? 1 : a > 0.015 ? 1.6 : a > 0.004 ? 2.4 : 3.4) };
    });

    var proj = d3.geoOrthographic().clipAngle(90).precision(0.5);
    var path = d3.geoPath(proj);
    var svg = d3.select(stage).insert('svg', ':first-child').attr('role', 'img').attr('aria-label', T.btn);
    var ocean = svg.append('path').datum({ type: 'Sphere' }).attr('class', 'g-ocean');
    var grat = svg.append('path').datum(d3.geoGraticule10()).attr('class', 'g-grat');
    var land = svg.append('g').selectAll('path').data(feats).join('path')
      .attr('class', function (f) { return 'g-land' + (has(f.id) ? ' has' : ''); })
      .on('mousemove', function (e, f) {
        var r = stage.getBoundingClientRect();
        tip.textContent = nameOf(f) + counts(f.id);
        tip.style.left = (e.clientX - r.left) + 'px';
        tip.style.top = (e.clientY - r.top) + 'px';
        tip.hidden = false;
      })
      .on('mouseleave', function () { tip.hidden = true; })
      .on('click', function (e, f) { select(f); });
    var marks = svg.append('g').style('pointer-events', 'none').selectAll('g').data(ids).join('g');
    marks.append('circle').attr('class', 'g-dot').attr('r', function (id) { return META[id].pt ? 4.5 : (!MANY || META[id].a < 0.004 ? 3.5 : 0); });
    // точки мелких стран нажимаются и показывают подсказку, как контуры стран
    // невидимая область нажатия радиусом 12 точек — по точке мелкой страны легко попасть пальцем (доклад Анри 23.10)
    marks.filter(function (id) { return META[id].pt; }).insert('circle', ':first-child').attr('class', 'g-hit').attr('r', 12).style('fill', 'transparent');
    marks.filter(function (id) { return META[id].pt; }).style('pointer-events', 'auto').style('cursor', 'pointer')
      .on('mousemove', function (e, id) {
        var r = stage.getBoundingClientRect();
        tip.textContent = nm(id) + counts(id);
        tip.style.left = (e.clientX - r.left) + 'px';
        tip.style.top = (e.clientY - r.top) + 'px';
        tip.hidden = false;
      })
      .on('mouseleave', function () { tip.hidden = true; })
      .on('click', function (e, id) { pick(id); });
    // подписи не налезают друг на друга: сначала выбранная страна, Армения, страны каталога, потом крупные страны
    var NODE = {}, LW = {};
    marks.each(function (id) { NODE[id] = this; LW[id] = nm(id).length * 6.8 + 6; });
    var PRI = ids.slice().sort(function (a, b) {
      function sc(id) { return (id === '051' ? 3 : C[id] ? 2 : 0) + META[id].a; }
      return sc(b) - sc(a);
    });
    function hideOverlaps() {
      var boxes = [], order = (sel && NODE[sel]) ? [sel].concat(PRI) : PRI;
      for (var i = 0; i < order.length; i++) {
        var id = order[i], g = NODE[id];
        if (i > 0 && id === sel) continue;
        if (!g || g.getAttribute('display') === 'none') continue;
        var t = g.lastChild;
        if (!t || t.getAttribute('display') === 'none') continue;
        var p = proj(META[id].f), w = LW[id], x = p[0] - w / 2, y = p[1] - 20, hit = false;
        for (var j = 0; j < boxes.length; j++) { var b = boxes[j]; if (x < b[2] && x + w > b[0] && y < b[3] && y + 13 > b[1]) { hit = true; break; } }
        if (hit) t.setAttribute('display', 'none'); else boxes.push([x, y, x + w, y + 13]);
      }
    }
    marks.append('text').attr('class', 'g-label').attr('text-anchor', 'middle').attr('dy', -8)
      .text(function (id) { return nm(id); });

    var W = 0, H = 0, R = 1, zoom = 1, rot = [-HOME[0], -HOME[1]], sel = null, raf = 0;

    function render() {
      proj.scale(R * zoom).rotate([rot[0], rot[1], -23.4]);   // наклонная ось, как у настольного глобуса (слово Рудольфа 23.10 01:5x)
      ocean.attr('d', path);
      grat.attr('d', path);
      land.attr('d', path);
      var center = [-rot[0], -rot[1]];
      marks.attr('display', function (id) { return d3.geoDistance(META[id].f, center) < 1.45 ? null : 'none'; })
        .attr('transform', function (id) { var p = proj(META[id].f); return 'translate(' + p[0] + ',' + p[1] + ')'; });
      marks.select('text').attr('display', function (id) { return (zoom >= META[id].lz || id === sel) ? null : 'none'; });
      if (MANY) hideOverlaps();
    }
    function resize() {
      W = stage.clientWidth; H = stage.clientHeight;
      R = Math.max(80, Math.min(W, H) * 0.43);
      svg.attr('viewBox', '0 0 ' + W + ' ' + H);
      proj.translate([W / 2, H / 2]);
      render();
    }
    function setZoom(z) { zoom = Math.max(0.8, Math.min(9, z)); render(); }
    function norm(a) { return ((a + 540) % 360) - 180; }
    function fly(lonlat, z) {
      cancelAnimationFrame(raf);
      var r0 = [norm(rot[0]), rot[1]], r1 = [-lonlat[0], -lonlat[1]], z0 = zoom;
      if (r1[0] - r0[0] > 180) r1[0] -= 360;
      if (r0[0] - r1[0] > 180) r1[0] += 360;
      if (REDUCED) { rot = r1; zoom = z; render(); return; }
      var t0 = performance.now(), dur = 950; flyUntil = t0 + dur;
      (function step(now) {
        var t = Math.min(1, (now - t0) / dur);
        var e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        rot = [r0[0] + (r1[0] - r0[0]) * e, r0[1] + (r1[1] - r0[1]) * e];
        zoom = z0 + (z - z0) * e;
        render();
        if (t < 1) raf = requestAnimationFrame(step);
      })(t0);
    }

    // слово Рудольфа 23.10 02:17: глобус вращается, пока над ним курсор мыши; не во время перетаскивания и перелёта к стране;
    // после выбора страны стоит, пока курсор не уйдёт и не вернётся
    var spinRaf = 0, spinLast = 0, overG = false, dragging = false, spinHold = false, flyUntil = 0;
    function spinStep(now) {
      spinRaf = 0;
      if (!overG || dragging || spinHold) return;   // и при настройке «меньше движения»: вращение начинает сам человек
      if (now < flyUntil) spinLast = 0;
      else { if (spinLast) { rot = [rot[0] + Math.min(100, now - spinLast) / 1000 * 8, rot[1]]; render(); } spinLast = now; }
      spinRaf = requestAnimationFrame(spinStep);
    }
    function spinGo() { spinLast = 0; if (overG && !spinRaf) spinRaf = requestAnimationFrame(spinStep); }
    svg.node().addEventListener('mouseenter', function () { overG = true; spinHold = false; spinGo(); });
    svg.node().addEventListener('mouseleave', function () { overG = false; });

    // вращение мышью или пальцем
    svg.call(d3.drag().clickDistance(4)
      .on('start', function () { cancelAnimationFrame(raf); tip.hidden = true; dragging = true; })
      .on('end', function () { dragging = false; spinGo(); })
      .on('drag', function (e) {
        var k = 57.3 / (R * zoom);
        rot = [rot[0] + e.dx * k, Math.max(-89, Math.min(89, rot[1] - e.dy * k))];
        render();
      }));
    // масштаб колесом мыши
    svg.node().addEventListener('wheel', function (e) {
      e.preventDefault();
      cancelAnimationFrame(raf);
      setZoom(zoom * Math.exp(-e.deltaY * 0.0015));
    }, { passive: false });

    // выбор страны
    function select(f) {
      sel = f ? f.id : null; spinHold = true;
      land.classed('sel', function (d) { return d === f; });
      var c = f && META[f.id];
      if (c) fly(c.f, c.k);
      else if (f) fly(d3.geoCentroid(f), Math.max(zoom, 1.4));
      else render();
      panel(f);
    }
    function li(cls, href, text, extra, blank) {
      return '<li' + (cls ? ' class="' + cls + '"' : '') + '><a href="' + esc(href) + '"' +
        (blank ? ' target="_blank" rel="noopener"' : '') + '>' + esc(text) + (extra || '') + '</a></li>'; // кнопка-подпись внутри ссылки — тоже нажимается
    }
    function tvLi(id) { // ТВ, радио и веб-камеры страны — для любой страны, где они есть (t[2] — число веб-камер)
      var t = TVN[id], a = A2[id];
      return (t && a) ? li('act', BASE + 'tv.html#c-' + a, T3.tvLink + ' (' + (t[0] + t[1] + (t[2] || 0)) + ')', '<span class="do">' + esc(T3.tvDo) + '</span>', false) : '';
    }
    function chips() {
      return '<h3>' + esc(ALL ? T9.listAll : T9.list) + '</h3><div class="globe-chips">' + ids.slice().sort(function (a, b) { return nm(a).localeCompare(nm(b), LANG); }).map(function (id) {
        return '<button type="button" data-id="' + id + '" aria-pressed="' + (id === sel) + '">' + esc(nm(id)) + '</button>';
      }).join('') + '</div>';
    }
    // Версия 4: справка о стране для страницы «География» (данные — window.RG_GEO, их пишет make_geography_page.py)
    var G = window.RG_GEO || null;
    function fmt(n) { try { return new Intl.NumberFormat(LANG).format(n); } catch (e) { return String(n); } }
    function localTime(tz) {
      try { return new Intl.DateTimeFormat(LANG, { timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date()); }
      catch (e) { return ''; }
    }
    function geoCard(f) {
      var g = G && G.c[f.id];
      if (!g) return '';
      var t = G.t, rows = [];
      function row(k, v) { if (v) rows.push('<dt>' + esc(k) + '</dt><dd>' + v + '</dd>'); }
      function list(a) { return a && a.length ? esc(a.join(', ')) : ''; }
      row(g.k && g.k.length > 1 ? t.caps : t.cap, list(g.k));
      if (g.p) row(t.pop, esc(fmt(g.p)) + (g.y ? ' <small>(' + g.y + ')</small>' : ''));
      if (g.s) row(t.area, esc(fmt(g.s)) + ' ' + esc(t.km2));
      row(t.langs, list(g.l));
      row(t.cur, list(g.m));
      row(t.cont, list(g.r));
      if (g.z) row(t.time, '<span class="geo-time" data-tz="' + esc(g.z) + '">' + esc(localTime(g.z)) + '</span>');
      row(t.codes, esc([g.a.toUpperCase(), g.i || '', f.id].filter(Boolean).join(' · ')));
      row(t.tel, list(g.t));
      if (g.b && g.b.length) {
        row(t.nb, g.b.filter(function (id) { return byId[id]; }).map(function (id) {
          return '<button type="button" class="geo-nb" data-id="' + id + '">' + esc(nameOf(byId[id])) + '</button>';
        }).join(''));
      }
      var links = '';
      if (g.o) links += li('', 'https://www.openstreetmap.org/relation/' + g.o, t.osm, '', true);
      if (g.w) links += li('', g.w, t.wp, '', true);
      return (g.f ? '<img class="geo-flag" src="' + HERE + 'flags/' + g.a + '.png" alt="' + esc(t.flag + ': ' + nameOf(f)) + '" width="60">' : '') +
        '<dl class="geo-facts">' + rows.join('') + '</dl>' + (links ? '<ul>' + links + '</ul>' : '');
    }
    if (G) setInterval(function () { // местное время в справке идёт
      [].forEach.call(side.querySelectorAll('.geo-time'), function (s) { s.textContent = localTime(s.getAttribute('data-tz')); });
    }, 30000);
    // версия 9: «Отмечено стран: N. Ресурсов на этой странице: M.» и международные ресурсы этой страницы
    function summary() {
      var s = '<p class="globe-sum">' + esc(T9.marked.replace('{n}', ids.length)) +
        (PD ? ' ' + esc((ALL ? T9.resAll : T9.resPage).replace('{n}', PD.n || 0)) : '') + '</p>';
      if (PD && PD.x && PD.x.length) s += '<h3>' + esc(T9.intl) + '</h3><ul>' + PD.x.map(function (r) { return li('', r[1], r[0], '', true); }).join('') + '</ul>';
      return s;
    }
    function panel(f) {
      var h;
      if (!f) {
        h = '<h2>' + esc(G ? G.t.title : T.btn) + '</h2><p>' + esc(G ? G.t.intro : (ALL ? T9.introAll : T9.intro)) + '</p>' + summary();
      } else {
        // версия 9: ресурсы страны — с ЭТОЙ страницы (на главной — со всего сайта)
        var c = C[f.id], name = nameOf(f), rs = resOf(f.id), acts = '';
        h = '<h2>' + esc(name) + '</h2>' + geoCard(f);
        if (c && c.lang) acts += li('act', WA + encodeURIComponent(lessonMsg(c.lang)), L[c.lang] + T.lesson, '<span class="do">' + esc(T.book) + '</span>', true);
        else acts += li('act', WA + encodeURIComponent(anyLangMsg(name)), T.anylang, '<span class="do">' + esc(T.book) + '</span>', true);
        if (c && c.tickets) acts += li('act', BASE + 'tickets.html', T.tickets, '<span class="do">' + esc(T.buy) + '</span>', false);
        if (ALL || PAGE === 'tv') acts += tvLi(f.id);
        h += '<ul>' + acts + '</ul>';
        if (rs.length) {
          h += '<h3>' + esc(ALL ? T.res : T9.here) + '</h3><ul>' + rs.map(function (r) { return li('', r[1], r[0], '', true); }).join('') + '</ul>';
          if (ALL && c && c.more) h += '<a class="globe-more" href="' + esc(BASE + c.more) + '">' + esc(T.more) + '</a>';
        } else {
          h += '<p>' + esc(T.none) + '</p><ul>' + li('act', WA + encodeURIComponent(suggestMsg(name)), T.suggest, '<span class="do">' + esc(T.wa) + '</span>', true) + '</ul>';
        }
      }
      side.innerHTML = h + chips();
    }
    side.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-id]');
      if (b) pick(b.getAttribute('data-id')); // версия 4: так же выбираются соседние страны из справки
    });
    function tool(z) {
      cancelAnimationFrame(raf);
      if (z === 'in') setZoom(zoom * 1.5);
      else if (z === 'out') setZoom(zoom / 1.5);
      else { sel = null; land.classed('sel', false); panel(null); fly(HOME, 1); }
    }

    // показать страну по числовому коду или по названию (метка в списке, кнопка «На глобусе»)
    function pick(ref) {
      var s = String(ref), id = /^\d{3}$/.test(s) ? s : PILL[s.toLowerCase()];
      if (!id && RD.names) {
        Object.keys(RD.names).some(function (lg) {
          return Object.keys(RD.names[lg]).some(function (k) { if (RD.names[lg][k].toLowerCase() === s.toLowerCase()) { id = k; return true; } return false; });
        });
      }
      if (!id && NM) { // версия 4: поиск по началу названия на языке страницы («арм» → Армения)
        var low = s.toLowerCase();
        Object.keys(NM).some(function (k) { if (NM[k].toLowerCase().indexOf(low) === 0 && (byId[k] || (G && G.c[k]))) { id = k; return true; } return false; });
      }
      if (id && byId[id]) select(byId[id]);
      else if (id && META[id] && META[id].pt) { // мелкая страна-точка: глобус — к ней, справа — её ресурсы
        sel = id; spinHold = true; land.classed('sel', false);
        fly(META[id].f, Math.max(zoom, META[id].k));
        panel({ id: id, properties: { name: pname(id) } });
      }
      else if (id && G && G.c[id]) { // маленькая страна, которой нет на карте глобуса: справка без контура, глобус — к её центру
        sel = id; land.classed('sel', false);
        if (G.c[id].ll) fly([G.c[id].ll[1], G.c[id].ll[0]], Math.max(zoom, 4));
        panel({ id: id, properties: { name: NM[id] || id } });
      }
    }

    resize();
    panel(null);
    return { resize: resize, tool: tool, pick: pick };
  }


/* ===== ReferenceGuides UI v6 — 20.10.2026, AutoClaw =====
   Гид-профессор, поиск по разделам, экскурсия по сайту, языковой глобус,
   ярко-золотые кнопки записи. Вставляется внутрь globe.js перед закрытием IIFE. */
(function () {
  "use strict";

  var doc = document;
  var html = doc.documentElement;
  html.className += (html.className ? " " : "") + "gd2-js";

  var PAGE = (location.pathname.split("/").pop() || "index.html");
  var T6 = {
    ru: {
      all: "Все разделы", search: "Что вы ищете? Например: страны, учебники, билеты",
      searchLabel: "Поиск по разделам сайта", funcsLabel: "Функции посетителя",
      tour: "Провести по сайту", next: "Далее", prev: "Назад", skip: "Пропустить", done: "Готово",
      step: "Шаг", of: "из", nothing: "Ничего не найдено. Попробуйте другое слово или откройте раздел «Консультанты».",
      professor: "Профессор Гид", role: "Помогаю учиться, находить и не теряться на сайте",
      tipTitle: "Здравствуйте!", tip: "Я профессор Гид. Нажмите на меня — помогу найти нужный раздел.",
      tipClose: "Скрыть", fab: "Гид по сайту",
      tour1t: "Меню по вашей задаче", tour1x: "Меню сайта: «Содержание», «Религия», «Книги», «Наука», «Культура», «Консультанты», «О нас». Откройте нужный пункт.",
      tour2t: "Язык — в любой момент", tour2x: "Нажмите на глобус и выберите язык. Кнопка остаётся на экране, даже когда вы прокрутили страницу.",
      tour3t: "Поиск и разделы", tour3x: "Ищите страну, тему или программу. Если не знаете, где искать, начните с раздела «Наука».",
      tour4t: "Нужна помощь?", tour4x: "Запишитесь на бесплатную консультацию — золотая кнопка есть на каждой странице.",
      tour5t: "Я всегда рядом", tour5x: "Нажмите на профессора, чтобы открыть гид снова: пять функций, поиск и экскурсия по сайту."
    },
    en: {
      all: "All sections", search: "What are you looking for? E.g. countries, textbooks, tickets",
      searchLabel: "Search site sections", funcsLabel: "Visitor goals",
      tour: "Take a site tour", next: "Next", prev: "Back", skip: "Skip", done: "Done",
      step: "Step", of: "of", nothing: "Nothing found. Try another word or open the Consultants section.",
      professor: "Professor Guide", role: "I help you learn, find things and stay on track",
      tipTitle: "Hello!", tip: "I am Professor Guide. Click me and I will help you find the right section.",
      tipClose: "Hide", fab: "Site guide",
      tour1t: "A menu built around your goal", tour1x: "The site menu: Contents, Religion, Books, Science, Culture, Consultants, About us. Open the item you need.",
      tour2t: "Language at any moment", tour2x: "Click the globe and choose a language. The button stays on screen even after you scroll.",
      tour3t: "Search and sections", tour3x: "Search for a country, topic or program. If you are not sure where to look, start with Science.",
      tour4t: "Need help?", tour4x: "Book a free consultation — the gold button is on every page.",
      tour5t: "I am always here", tour5x: "Click the professor to open the guide again: five goals, search and a site tour."
    },
    hy: {
      all: "Բոլոր բաժինները", search: "Ի՞նչ եք փնտրում։ Օրինակ՝ երկրներ, դասագրքեր, տոմսեր",
      searchLabel: "Որոնում կայքի բաժիններում", funcsLabel: "Այցելուի գործառույթները",
      tour: "Շրջայց կայքում", next: "Հաջորդ", prev: "Նախորդ", skip: "Բաց թողնել", done: "Պատրաստ է",
      step: "Քայլ", of: "ից", nothing: "Ոչինչ չգտնվեց։ Փորձեք այլ բառ կամ բացեք «Խորհրդատուներ» բաժինը։",
      professor: "Պրոֆեսոր Ուղեցույց", role: "Օգնում եմ սովորել, գտնել և չկորչել կայքում",
      tipTitle: "Բարև Ձեզ։", tip: "Ես պրոֆեսոր Ուղեցույցն եմ։ Սեղմեք ինձ վրա՝ կօգնեմ գտնել անհրաժեշտ բաժինը։",
      tipClose: "Թաքցնել", fab: "Կայքի ուղեցույց",
      tour1t: "Մենյուն՝ ըստ ձեր խնդրի", tour1x: "Կայքի մենյուն՝ «Բովանդակություն», «Կրոն», «Գրքեր», «Գիտություն», «Մշակույթ», «Խորհրդատուներ», «Մեր մասին»։ Բացեք անհրաժեշտ կետը։",
      tour2t: "Լեզուն՝ ցանկացած պահի", tour2x: "Սեղմեք գլոբուսին և ընտրեք լեզուն։ Կոճակը մնում է էկրանին նաև էջը ոլորելիս։",
      tour3t: "Որոնում և բաժիններ", tour3x: "Փնտրեք երկիր, թեմա կամ ծրագիր։ Եթե չգիտեք որտեղ փնտրել, սկսեք «Գիտություն» բաժնից։",
      tour4t: "Օգնություն պե՞տք է", tour4x: "Գրանցվեք անվճար խորհրդատվության՝ ոսկե կոճակը կա յուրաքանչյուր էջում։",
      tour5t: "Ես միշտ մոտ եմ", tour5x: "Սեղմեք պրոֆեսորին՝ նորից բացելու ուղեցույցը՝ հինգ գործառույթ, որոնում և շրջայց։"
    },
    fr: {
      all: "Toutes les rubriques", search: "Que cherchez-vous ? Par exemple : pays, manuels, billets",
      searchLabel: "Rechercher dans les rubriques du site", funcsLabel: "Objectifs du visiteur",
      tour: "Faire le tour du site", next: "Suivant", prev: "Retour", skip: "Passer", done: "Terminé",
      step: "Étape", of: "sur", nothing: "Rien trouvé. Essayez un autre mot ou ouvrez la rubrique Consultants.",
      professor: "Professeur Guide", role: "Je vous aide à apprendre, trouver et ne pas vous perdre",
      tipTitle: "Bonjour !", tip: "Je suis le professeur Guide. Cliquez sur moi — je vous aiderai à trouver la bonne rubrique.",
      tipClose: "Masquer", fab: "Guide du site",
      tour1t: "Le menu selon votre besoin", tour1x: "Le menu du site : Sommaire, Religion, Livres, Sciences, Culture, Consultants, À propos. Ouvrez la rubrique voulue.",
      tour2t: "La langue à tout moment", tour2x: "Cliquez sur le globe et choisissez la langue. Le bouton reste à l’écran même après défilement.",
      tour3t: "Recherche et rubriques", tour3x: "Cherchez un pays, un thème ou un programme. Si vous ne savez pas où chercher, commencez par Sciences.",
      tour4t: "Besoin d’aide ?", tour4x: "Réservez une consultation gratuite — le bouton doré est sur chaque page.",
      tour5t: "Je reste à côté", tour5x: "Cliquez sur le professeur pour rouvrir le guide : cinq objectifs, recherche et visite."
    },
    de: {
      all: "Alle Bereiche", search: "Was suchen Sie? Zum Beispiel: Länder, Lehrbücher, Tickets",
      searchLabel: "Suche in den Bereichen der Seite", funcsLabel: "Besucherziele",
      tour: "Rundgang durch die Seite", next: "Weiter", prev: "Zurück", skip: "Überspringen", done: "Fertig",
      step: "Schritt", of: "von", nothing: "Nichts gefunden. Versuchen Sie ein anderes Wort oder öffnen Sie den Bereich Beratung.",
      professor: "Professor Wegweiser", role: "Ich helfe beim Lernen, Finden und Zurechtkommen",
      tipTitle: "Hallo!", tip: "Ich bin Professor Wegweiser. Klicken Sie auf mich — ich helfe, den richtigen Bereich zu finden.",
      tipClose: "Ausblenden", fab: "Wegweiser",
      tour1t: "Menü nach Ihrem Ziel", tour1x: "Das Menü der Seite: Inhalt, Religion, Bücher, Wissenschaft, Kultur, Beratung, Über uns. Öffnen Sie den passenden Punkt.",
      tour2t: "Sprache jederzeit", tour2x: "Klicken Sie auf den Globus und wählen Sie die Sprache. Die Taste bleibt auch beim Scrollen sichtbar.",
      tour3t: "Suche und Bereiche", tour3x: "Suchen Sie Land, Thema oder Programm. Wenn Sie nicht wissen wo, beginnen Sie mit Wissenschaft.",
      tour4t: "Brauchen Sie Hilfe?", tour4x: "Buchen Sie eine kostenlose Beratung — die goldene Taste gibt es auf jeder Seite.",
      tour5t: "Ich bin immer da", tour5x: "Klicken Sie auf den Professor, um den Wegweiser erneut zu öffnen: fünf Ziele, Suche und Rundgang."
    }
  };
  var T = T6[LANG] || T6.ru;

  /* ===== v8 — 23.10.2026, Claude «Маисовый полоз цена»: профессор (рисунки Анри), кнопка записи, позы, подсказки, поиск по страницам ===== */
  /* 28.10.2026 (слово Рудольфа 00:05, Клод (дом)): на страницах раздела «Культура» гид — новая версия профессора (рисунок Анри 27.10 23:56,
     утверждён Рудольфом): картинки в img/prof/culture/ (tools/make_culture_guide_images.py); остальные страницы — прежний набор. */
  var CULT = /(^|\/)(art-culture|culture-news|tickets|tv)(\.html)?$/.test(location.pathname);
  var IMG = HERE + (CULT ? "img/prof/culture/" : "img/prof/");
  var IMGV = "?v=2";   // второй набор рисунков — светлая мантия и профессорская шапка (Анри 23.10 01:07, «да» Рудольфа 01:1x);
                       // метка в адресе — чтобы браузеры посетителей не показывали прежние картинки из памяти
  var MON = new Date().getMonth();
  var WINTER = MON === 11 || MON <= 1;   // декабрь–февраль: профессор в вязаной шапке (зимняя пасхалка, решение 20.10)
  var T8ALL = {
    ru: { enroll: "Записаться на занятие", enrollS: "Записаться", pages: "Найдено на страницах сайта", searchBtn: "Поиск по сайту", prof: "Профессор подсказывает", close: "Закрыть", down: "Вниз страницы", lift: "Лифт: наверх и вниз страницы" },
    en: { enroll: "Book a session", enrollS: "Book", pages: "Found on the site’s pages", searchBtn: "Search the site", prof: "The professor explains", close: "Close", down: "To the bottom", lift: "Lift: up and down the page" },
    hy: { enroll: "Գրանցվել դասի", enrollS: "Գրանցվել", pages: "Գտնվել է կայքի էջերում", searchBtn: "Որոնում կայքում", prof: "Պրոֆեսորը բացատրում է", close: "Փակել", down: "Էջի ներքև", lift: "Վերելակ՝ էջի վերև և ներքև" },
    fr: { enroll: "Réserver une séance", enrollS: "Réserver", pages: "Trouvé sur les pages du site", searchBtn: "Rechercher sur le site", prof: "Le professeur explique", close: "Fermer", down: "Bas de page", lift: "Ascenseur : haut et bas de page" },
    de: { enroll: "Termin buchen", enrollS: "Buchen", pages: "Gefunden auf den Seiten", searchBtn: "Auf der Seite suchen", prof: "Der Professor erklärt", close: "Schließen", down: "Nach unten", lift: "Aufzug: Seite nach oben und unten" }
  };
  var T8 = T8ALL[LANG] || T8ALL.en;
  // перо в золотом круге — «записаться»
  var ENROLL_IC = '<span class="rg-enroll-ic" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 20l1.3-4.7L15.9 4.7a2 2 0 0 1 2.8 0l.6.6a2 2 0 0 1 0 2.8L8.7 18.7z"/><path d="M14.3 6.3l3.4 3.4"/><path d="M4 20h7"/></svg></span>';
  // поисковые синонимы на пяти языках: помогают найти раздел, даже если слово не совпало с подписью
  var KW = {
    learn: "наука науки учиться учёба уроки учебники курсы школа вуз студент образование справочник таблица страны география ресурсы программы приложения science sciences learn study lesson textbook course school university education reference table country countries geography resources programs apps գիտություն սովորել դաս դասեր դասագիրք դպրոց համալսարան ուսանող կրթություն տեղեկատու աղյուսակ երկիր երկրներ աշխարհագրություն ռեսուրս ծրագիր",
    relig: "религия религии вера вероисповедание конфессия церковь мечеть синагога храм монастырь religion religions faith church mosque synagogue temple monastery կրոն կրոններ հավատք եկեղեցի մզկիթ տաճար վանք église mosquée religionen kirche moschee",
    cult: "искусство телевидение радио видео аудио tv radio video audio հեռուստատեսություն ռադիո искусство-культура art arts kunst արվեստ история история-культура history histoire geschichte պատմություն культура музей новости афиша билеты театр концерт culture museum news tickets theatre concert մշակույթ թանգարան նորություններ աֆիշա տոմս թատրոն համերգ",
    help: "помощь консультация консультант консультанты zoom whatsapp help consultation consultant consultants beratung օգնություն խորհրդատվություն խորհրդատու խորհրդատուներ",
    about: "о нас проект миссия правила about project mission rules մեր մասին նախագիծ առաքելություն կանոններ"
  };

  function el(tag, cls, content) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (content != null) n.innerHTML = content;
    return n;
  }

  function icon(name) {
    var s = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">';
    if (name === "cap") s += '<path d="M3 9l9-4 9 4-9 4-9-4z"/><path d="M7 11v4c2 2 8 2 10 0v-4"/><path d="M21 9v5"/>';
    else if (name === "find") s += '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>';
    else if (name === "culture") s += '<path d="M3 9h18M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18M12 3l9 5H3l9-5z"/>';
    else if (name === "help") s += '<path d="M21 12a8 8 0 0 1-8 8H6l-3 2 1-5a8 8 0 1 1 17-5z"/><path d="M9 10a3 3 0 1 1 4 2.8c-.7.3-1 .8-1 1.2"/><circle cx="12" cy="17" r=".7" fill="currentColor" stroke="none"/>';
    else if (name === "about") s += '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.2"/>';
    else if (name === "relig") s += '<path d="M12 2.5c1.6 1.9 2.2 3.1 2.2 4.1a2.2 2.2 0 0 1-4.4 0c0-1 .6-2.2 2.2-4.1z"/><rect x="8.5" y="10" width="7" height="10" rx="1.2"/><path d="M6 21h12"/>';
    else if (name === "globe") s += '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 2.8 3 15.2 0 18M12 3c-3 2.8-3 15.2 0 18"/>';
    else if (name === "grid") s += '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>';
    else if (name === "compass") s += '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>';
    else if (name === "arrow") s += '<path d="M5 12h14M13 6l6 6-6 6"/>';
    else if (name === "check") s += '<path d="M4 12l5 5L20 6"/>';
    return s + "</svg>";
  }

  function prof(vb, sfx) {
    var g = "gd2g" + (sfx || "");
    return '<svg viewBox="' + vb + '" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
      '<linearGradient id="' + g + 'own" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F4E82"/><stop offset=".55" stop-color="#1E3560"/><stop offset="1" stop-color="#142544"/></linearGradient>' +
      '<linearGradient id="' + g + 'kin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6D2AE"/><stop offset="1" stop-color="#E3AC82"/></linearGradient>' +
      '<linearGradient id="' + g + 'old" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE88A"/><stop offset=".55" stop-color="#E8B93A"/><stop offset="1" stop-color="#B97B00"/></linearGradient>' +
      '</defs>' +
      '<ellipse cx="120" cy="316" rx="82" ry="11" fill="#3f3109" opacity=".14"/>' +
      '<path d="M78 112C56 128 46 170 42 230L34 304c28 14 144 14 172 0l-8-74c-4-60-14-102-36-118-12 12-26 18-42 18s-30-6-42-18z" fill="url(#' + g + 'own)"/>' +
      '<path d="M78 118C58 132 48 168 50 206l20 8c4-34 12-64 22-82z" fill="#172A4C"/>' +
      '<path d="M162 118c20 14 30 50 28 88l-20 8c-4-34-12-64-22-82z" fill="#172A4C"/>' +
      '<path d="M104 130l16 24 16-24 12 174H92z" fill="#29446F"/>' +
      '<path d="M104 130l16 24 16-24" fill="none" stroke="url(#' + g + 'old)" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M120 154v150" stroke="url(#' + g + 'old)" stroke-width="3" opacity=".9"/>' +
      '<path d="M36 302c34 14 134 14 168 0" fill="none" stroke="url(#' + g + 'old)" stroke-width="4"/>' +
      '<path d="M70 180c-4 40-8 80-12 120M170 180c4 40 8 80 12 120" stroke="#13213D" stroke-width="2" opacity=".45"/>' +
      '<path d="M96 122l24 22 24-22-8-10-16 14-16-14z" fill="#FFF9E8"/>' +
      '<rect x="108" y="106" width="24" height="30" rx="8" fill="#E8B98F"/>' +
      '<ellipse cx="120" cy="82" rx="36" ry="41" fill="url(#' + g + 'kin)"/>' +
      '<ellipse cx="84" cy="86" rx="7" ry="10" fill="#E8B98F"/><ellipse cx="156" cy="86" rx="7" ry="10" fill="#E8B98F"/>' +
      '<path d="M84 72c-2-14 8-24 20-26v18c-8 2-14 8-16 18zM156 72c2-14-8-24-20-26v18c8 2 14 8 16 18z" fill="#D9D4C8"/>' +
      '<path d="M86 94c2 34 16 52 34 58 18-6 32-24 34-58-6 14-16 22-34 22s-28-8-34-22z" fill="#F4F1E8"/>' +
      '<path d="M96 118c8 12 16 18 24 22 8-4 16-10 24-22-8 8-16 12-24 12s-16-4-24-12z" fill="#E4DFD3" opacity=".8"/>' +
      '<path d="M104 106c6-6 12-4 16 0 4-4 10-6 16 0-6 6-12 6-16 4-4 2-10 2-16-4z" fill="#E8E3D7"/>' +
      '<path d="M112 119c4 4 12 4 16 0" fill="none" stroke="#8A4B32" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M120 94c-2 6-2 10 0 13" fill="none" stroke="#C98E68" stroke-width="2" stroke-linecap="round"/>' +
      '<ellipse cx="98" cy="98" rx="7" ry="4" fill="#E89B7A" opacity=".22"/><ellipse cx="142" cy="98" rx="7" ry="4" fill="#E89B7A" opacity=".22"/>' +
      '<circle cx="105" cy="82" r="14" fill="#FFFFFF" opacity=".13" stroke="#3A2A12" stroke-width="2.6"/>' +
      '<circle cx="135" cy="82" r="14" fill="#FFFFFF" opacity=".13" stroke="#3A2A12" stroke-width="2.6"/>' +
      '<path d="M119 82h2M91 82l-7 2M149 82l7 2" stroke="#3A2A12" stroke-width="2.2"/>' +
      '<circle cx="105" cy="82" r="2.6" fill="#2B1D0E"/><circle cx="135" cy="82" r="2.6" fill="#2B1D0E"/>' +
      '<path d="M94 67c7-4 14-4 20 0M126 67c6-4 13-4 20 0" fill="none" stroke="#D9D4C8" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M92 59c0-8 56-8 56 0v11c0 8-56 8-56 0z" fill="#1B2340"/>' +
      '<path d="M120 33l70 25-70 25-70-25z" fill="#141C33"/>' +
      '<path d="M120 33l70 25-70 25z" fill="#1B2647" opacity=".55"/>' +
      '<path d="M50 58l70 25v5L50 63z" fill="#0E1427"/>' +
      '<circle cx="120" cy="58" r="4.5" fill="url(#' + g + 'old)"/>' +
      '<path d="M190 58c9 12 9 26 3 37" fill="none" stroke="url(#' + g + 'old)" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M193 95l-5 13M193 95l5 13M193 95v15" stroke="url(#' + g + 'old)" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M62 170c-10 16-14 36-10 54M178 170c10 16 14 36 10 54" fill="none" stroke="#29446F" stroke-width="18" stroke-linecap="round"/>' +
      '<path d="M70 222c16-8 34-6 50 4 16-10 34-12 50-4l-4 40c-16-8-32-6-46 4-14-10-30-12-46-4z" fill="#8A5A2B"/>' +
      '<path d="M74 226c14-7 30-5 46 4v30c-15-9-30-11-44-4z" fill="#FFF9E8"/>' +
      '<path d="M166 226c-14-7-30-5-46 4v30c15-9 30-11 44-4z" fill="#FFFDF4"/>' +
      '<path d="M82 234c10-4 22-2 32 4M82 242c10-4 22-2 32 4M126 238c10-6 22-8 32-4M126 246c10-6 22-8 32-4" stroke="#C9B58A" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="68" cy="238" rx="10" ry="8" fill="#E8B98F"/><ellipse cx="172" cy="238" rx="10" ry="8" fill="#E8B98F"/>' +
      '<path d="M176 232l42-82" stroke="#7A4A2A" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="219" cy="148" r="5" fill="url(#' + g + 'old)"/>' +
      '<circle cx="120" cy="184" r="7" fill="url(#' + g + 'old)"/><circle cx="120" cy="184" r="3" fill="#8A5A00"/>' +
      '<path d="M120 202v76" stroke="#E8B93A" stroke-width="1.4" opacity=".35"/>' +
      '</svg>';
  }

  function markGold() {
    var rx = /(консульт|consult|խորհրդատ|beratung|rendez|rdv)/i;
    [].forEach.call(doc.querySelectorAll("a[href]"), function (a) {
      var href = a.getAttribute("href") || "";
      var txt = (a.textContent || "").trim();
      if (a.classList.contains("cta-zoom") || /consultants\.html#zoom/i.test(href) ||
          (rx.test(txt) && /consultants\.html|wa\.me|zoom/i.test(href))) {
        a.classList.add("gold-cta");
      }
    });
  }

  /* ---------- язык: глобус в шапке + плавающий при прокрутке ---------- */
  function langItems() {
    var map = {};
    // полный список языков берём из hreflang в <head>: там есть и текущий язык
    [].forEach.call(doc.querySelectorAll('link[rel="alternate"][hreflang]'), function (l) {
      var code = (l.getAttribute("hreflang") || "").toLowerCase().slice(0, 2);
      if (!code || code === "x-") return;
      var href = (l.getAttribute("href") || "").replace(/^https?:\/\/BASE_URL/i, "");
      map[code] = { code: code, href: href, label: LANGNAME[code] || code };
    });
    var wrap = doc.querySelector("header .lang");
    var links = wrap ? [].slice.call(wrap.querySelectorAll("a[hreflang]")) : [];
    // относительные ссылки из шапки точнее абсолютных заглушек
    links.forEach(function (a) {
      var code = (a.getAttribute("hreflang") || "").toLowerCase().slice(0, 2);
      if (!code) return;
      map[code] = { code: code, href: a.getAttribute("href") || "", label: LANGNAME[code] || code };
    });
    if (!map[LANG]) map[LANG] = { code: LANG, href: location.href, label: LANGNAME[LANG] || LANG };
    map[LANG].href = location.href; // текущий язык — эта же страница, без зависимости от BASE_URL
    return ["ru", "en", "hy", "fr", "de"].filter(function (c) { return map[c]; }).map(function (c) { return map[c]; });
  }

  function langMenu(items, cur) {
    return items.map(function (it) {
      return '<a role="menuitem" href="' + esc(it.href) + '" hreflang="' + esc(it.code) + '" lang="' + esc(it.code) + '"' +
        (it.code === cur ? ' aria-current="true"' : '') + '><span>' + esc(it.label) + '</span><small>' + esc(it.code.toUpperCase()) + '</small></a>';
    }).join("");
  }

  function langButton(cur, fab) {
    return '<button type="button" class="gd2-lang-btn' + (fab ? " gd2-lang-fab-btn" : "") + '" aria-haspopup="true" aria-expanded="false" aria-label="' + esc(G5.lang) + '" title="' + esc(G5.lang) + '">' +
      icon("globe") + '<span>' + esc(cur.toUpperCase()) + '</span><i aria-hidden="true">▾</i></button>';
  }

  function initLang() {
    var items = langItems();
    if (!items.length) return;
    var cur = LANG;
    if (!items.some(function (i) { return i.code === cur; })) cur = items[0].code;
    var menu = langMenu(items, cur);
    var wrap = doc.querySelector("header .lang");
    var box = null;

    if (wrap) {
      var native = el("span", "gd2-lang-native");
      while (wrap.firstChild) native.appendChild(wrap.firstChild);
      wrap.appendChild(native);
      box = el("span", "gd2-lang", langButton(cur, false) + '<span class="gd2-lang-menu" role="menu">' + menu + "</span>");
      wrap.appendChild(box);
    }

    var fab = el("div", "gd2-lang-fab", langButton(cur, true) + '<span class="gd2-lang-menu" role="menu">' + menu + "</span>");
    doc.body.appendChild(fab);

    function wire(root) {
      if (!root) return;
      var btn = root.querySelector(".gd2-lang-btn");
      var list = root.querySelector(".gd2-lang-menu");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !root.classList.contains("open");
        [].forEach.call(doc.querySelectorAll(".gd2-lang.open,.gd2-lang-fab.open"), function (o) {
          o.classList.remove("open");
          var b = o.querySelector(".gd2-lang-btn"); if (b) b.setAttribute("aria-expanded", "false");
        });
        root.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
      list.addEventListener("click", function (e) { e.stopPropagation(); });
    }
    wire(box); wire(fab);
    doc.addEventListener("click", function () {
      [].forEach.call(doc.querySelectorAll(".gd2-lang.open,.gd2-lang-fab.open"), function (o) {
        o.classList.remove("open");
        var b = o.querySelector(".gd2-lang-btn"); if (b) b.setAttribute("aria-expanded", "false");
      });
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      [].forEach.call(doc.querySelectorAll(".gd2-lang.open,.gd2-lang-fab.open"), function (o) {
        o.classList.remove("open");
        var b = o.querySelector(".gd2-lang-btn"); if (b) b.setAttribute("aria-expanded", "false");
      });
    });

    function onScroll() {
      if (!box) { fab.classList.add("show"); doc.body.classList.add("gd2-scrolled"); return; }
      var r = box.getBoundingClientRect();
      var visible = r.bottom > 6 && r.top < window.innerHeight - 6;
      fab.classList.toggle("show", !visible);
      doc.body.classList.toggle("gd2-scrolled", !visible);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  /* ---------- гид ---------- */
  var overlay = null, dialog = null, resultsEl = null, emptyEl = null, searchEl = null;
  var activeFunc = "all", lastFocus = null, tipEl = null, tipTimer = null;

  function pageTitle(h) {
    var t = pageLabel(h);
    return (t && t !== h) ? t : (G5.d[h] || h);
  }

  function buildResults() {
    var out = "";
    FUNCS.forEach(function (f) {
      var key = f[0], pages = f[1];
      out += '<section class="gd2-group" data-func="' + key + '">' +
        '<h3><span class="gd2-gicon">' + icon(key === "relig" ? "relig" : key === "learn" ? "cap" : key === "find" ? "find" : key === "cult" ? "culture" : key === "help" ? "help" : "about") + '</span>' + esc(G5.f[key]) + '</h3>' +
        '<p class="gd2-gdesc">' + esc((G5H && G5H[key]) || "") + '</p><span class="gd2-kw" hidden>' + esc(KW[key] || "") + '</span><ul>';
      pages.forEach(function (h) {
        out += '<li><a href="' + BASE + h + '"' + (h === PAGE ? ' aria-current="page"' : '') + '><b>' + esc(pageTitle(h)) + '</b><small>' + esc(G5.d[h] || "") + '</small></a></li>';
      });
      if (key === "help") {
        out += '<li class="gd2-consult-li"><a class="cta-zoom gold-cta" href="' + BASE + 'consultants.html#zoom">' + esc(G5.consult) + '</a></li>';
      }
      out += '</ul></section>';
    });
    return out;
  }

  function applyFilter() {
    if (!resultsEl) return;
    var q = (searchEl && searchEl.value || "").trim().toLowerCase();
    var any = false;
    [].forEach.call(resultsEl.querySelectorAll(".gd2-group"), function (sec) {
      var key = sec.getAttribute("data-func");
      var groupAllowed = activeFunc === "all" || activeFunc === key;
      var h3 = sec.querySelector("h3"), gd = sec.querySelector(".gd2-gdesc"), kw = sec.querySelector(".gd2-kw");
      var groupText = ((h3 ? h3.textContent : "") + " " + (gd ? gd.textContent : "") + " " + (kw ? kw.textContent : "")).toLowerCase();
      var groupHit = !!q && groupText.indexOf(q) >= 0;
      var shown = 0;
      [].forEach.call(sec.querySelectorAll("li"), function (li) {
        var hit = !q || groupHit || (li.textContent || "").toLowerCase().indexOf(q) >= 0;
        li.hidden = !hit;
        if (hit) shown++;
      });
      var secShown = groupAllowed && (shown > 0 || !q);
      sec.hidden = !secShown;
      if (secShown) any = true;
    });
    afterFilter(q, any);   // v8: поиск по страницам сайта и позы профессора
  }

  function setFunc(key) {
    activeFunc = key;
    if (!overlay) return;
    [].forEach.call(overlay.querySelectorAll(".gd2-chip"), function (b) {
      var on = b.getAttribute("data-func") === key;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    applyFilter();
  }

  function buildGuide() {
    /* старую версию убираем, чтобы не было двух кнопок */
    [".guide-fab", ".guide-tip", ".lang-fab", ".guide-overlay"].forEach(function (s) {
      [].forEach.call(doc.querySelectorAll(s), function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
    });

    var chips = '<button type="button" class="gd2-chip active" data-func="all" aria-pressed="true">' + icon("grid") + '<span>' + esc(T.all) + "</span></button>";
    FUNCS.forEach(function (f) {
      var ic = f[0] === "relig" ? "relig" : f[0] === "learn" ? "cap" : f[0] === "find" ? "find" : f[0] === "cult" ? "culture" : f[0] === "help" ? "help" : "about";
      chips += '<button type="button" class="gd2-chip" data-func="' + f[0] + '" aria-pressed="false">' + icon(ic) + '<span>' + esc(G5.f[f[0]]) + "</span></button>";
    });

    overlay = el("div", "gd2-overlay");
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="gd2-dialog" role="dialog" aria-modal="true" aria-label="' + esc(G5.btn) + '">' +
        '<aside class="gd2-side" data-pose="teach"><div class="gd2-halo"></div><div class="gd2-portrait"><img class="rg-pose" src="' + IMG + 'teach.webp' + IMGV + '" alt="" width="480" height="480" decoding="async"></div>' +
          '<div class="gd2-name">' + esc(T.professor) + '</div><p class="gd2-role">' + esc(T.role) + '</p>' +
          '<a class="rg-enroll rg-enroll-side" href="' + BASE + 'consultants.html#zoom" title="' + esc(G5.consult) + '">' + ENROLL_IC + '<span class="rg-enroll-label">' + esc(T8.enroll) + '</span></a></aside>' +
        '<div class="gd2-main">' +
          '<button type="button" class="gd2-close" aria-label="' + esc(G5.close) + '">×</button>' +
          '<h2>' + esc(G5.btn) + '</h2><p class="gd2-hello">' + esc(G5.hello) + '</p>' +
          '<div class="gd2-search">' + icon("find") + '<input type="search" autocomplete="off" aria-label="' + esc(T.searchLabel) + '" placeholder="' + esc(T.search) + '"><button type="button" class="gd2-clear" aria-label="' + esc(G5.close) + '">×</button></div>' +
          '<div class="gd2-chips" role="group" aria-label="' + esc(T.funcsLabel) + '">' + chips + '</div>' +
          '<div class="gd2-results"><div class="rg-hits" hidden></div>' + buildResults() + '</div>' +
          '<p class="gd2-empty" hidden>' + esc(T.nothing) + '</p>' +
          '<div class="gd2-foot"><button type="button" class="gd2-tour">' + icon("compass") + esc(T.tour) + '</button><span class="gd2-esc">Esc</span></div>' +
        '</div>' +
      '</div>';
    doc.body.appendChild(overlay);

    dialog = overlay.querySelector(".gd2-dialog");
    resultsEl = overlay.querySelector(".gd2-results");
    emptyEl = overlay.querySelector(".gd2-empty");
    searchEl = overlay.querySelector("input[type=search]");
    hitsEl = overlay.querySelector(".rg-hits");
    var poseImg = overlay.querySelector(".rg-pose");
    bowSmile(poseImg);   // слово Рудольфа 02:37: в окне гида профессор тоже кланяется при наведении
    if (poseImg) poseImg.addEventListener("error", function () { var p = poseImg.parentNode; if (p) p.innerHTML = prof("0 0 240 330", "p"); }, { once: true });

    overlay.querySelector(".gd2-close").addEventListener("click", closeGuide);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeGuide(); });
    [].forEach.call(overlay.querySelectorAll(".gd2-chip"), function (b) {
      b.addEventListener("click", function () { setFunc(b.getAttribute("data-func")); });
    });
    searchEl.addEventListener("input", applyFilter);
    overlay.querySelector(".gd2-clear").addEventListener("click", function () { searchEl.value = ""; applyFilter(); searchEl.focus(); });
    overlay.querySelector(".gd2-tour").addEventListener("click", startTour);
    doc.addEventListener("keydown", function (e) {
      if (!overlay || overlay.hidden) return;
      if (e.key === "Escape") { closeGuide(); return; }
      if (e.key === "Tab") {
        var f = [].slice.call(dialog.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')).filter(function (n) { return n.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // v8: вместо золотой кнопки внизу — профессор (рисунок Анри) сверху справа и под ним круглая кнопка записи
    buildDock();
  }

  function openGuide() {
    if (!overlay) return;
    hideTip();
    lastFocus = doc.activeElement;
    overlay.hidden = false;
    doc.body.classList.add("gd2-lock");
    preloadPoses();
    hideBubble();
    searchEl.value = "";
    setFunc("all");
    if (dialog) dialog.scrollTop = 0;
    setTimeout(function () {
      try { searchEl.focus({ preventScroll: true }); } catch (e) { searchEl.focus(); }
    }, 60);
  }

  function closeGuide() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    doc.body.classList.remove("gd2-lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- экскурсия ---------- */
  var tour = null;

  function tourSteps() {
    var inputs = [].filter.call(doc.querySelectorAll('#geo-q,.geo-search input,input[type="search"],input[name="q"],input[placeholder]'), function (n) {
      return !n.closest(".gd2-overlay") && !n.closest(".gd2-lang");
    });
    var pageInput = inputs[0];
    var langTarget = doc.querySelector(".rg-dock .gd2-lang-fab") || doc.querySelector(".gd2-lang") || doc.querySelector(".gd2-lang-fab");
    var consult = doc.querySelector(".rg-dock .rg-enroll") || doc.querySelector("a.cta-zoom.gold-cta,a.cta-zoom,a.gold-cta");
    // 24.10.2026: на телефоне строка меню спрятана в выдвижное меню — первый шаг экскурсии показывает кнопку «☰ Меню»
    var navMain = doc.querySelector("nav.main"), drawerBtn = doc.querySelector(".rg-drawer-btn");
    var menuTarget = (navMain && navMain.getBoundingClientRect().width > 0) ? navMain : (drawerBtn || navMain);
    return [
      { target: menuTarget, title: T.tour1t, text: T.tour1x },
      { target: langTarget, title: T.tour2t, text: T.tour2x },
      { target: pageInput, title: T.tour3t, text: T.tour3x },
      { target: consult, title: T.tour4t, text: T.tour4x },
      { target: doc.querySelector(".rg-prof") || doc.querySelector(".gd2-fab"), title: T.tour5t, text: T.tour5x }
    ];
  }

  function startTour() {
    closeGuide();
    var steps = tourSteps().filter(function (s) { return s.target && s.target.getBoundingClientRect().width > 0; });
    if (!steps.length) return;
    var layer = el("div", "gd2-tour-layer");
    layer.innerHTML = '<div class="gd2-spot"></div><div class="gd2-tour-card" role="dialog" aria-modal="true">' +
      '<div class="gd2-tour-count"></div><h3 class="gd2-tour-title"></h3><p class="gd2-tour-text"></p>' +
      '<div class="gd2-tour-btns"><button type="button" class="gd2-btn gd2-btn-ghost gd2-tour-skip">' + esc(T.skip) + '</button>' +
      '<span class="gd2-tour-nav"><button type="button" class="gd2-btn gd2-btn-ghost gd2-tour-prev">' + esc(T.prev) + '</button>' +
      '<button type="button" class="gd2-btn gd2-btn-gold gd2-tour-next">' + esc(T.next) + '</button></span></div></div>';
    doc.body.appendChild(layer);
    tour = { layer: layer, steps: steps, i: 0, last: -1, spot: layer.querySelector(".gd2-spot"), card: layer.querySelector(".gd2-tour-card") };
    layer.querySelector(".gd2-tour-skip").addEventListener("click", endTour);
    layer.querySelector(".gd2-tour-prev").addEventListener("click", function () { if (tour.i > 0) { tour.i--; drawTour(); } });
    layer.querySelector(".gd2-tour-next").addEventListener("click", function () {
      if (tour.i >= tour.steps.length - 1) endTour(); else { tour.i++; drawTour(); }
    });
    drawTour();
    window.addEventListener("scroll", drawTour, { passive: true });
    window.addEventListener("resize", drawTour);
  }

  function drawTour() {
    if (!tour) return;
    var s = tour.steps[tour.i];
    var changed = tour.last !== tour.i;
    tour.last = tour.i;
    if (changed && getComputedStyle(s.target).position !== "fixed") {
      s.target.scrollIntoView({ block: "center", behavior: "auto" });
      requestAnimationFrame(positionTour);
      return;
    }
    positionTour();
  }

  function positionTour() {
    if (!tour) return;
    var s = tour.steps[tour.i], r = s.target.getBoundingClientRect();
    if (!r.width && !r.height) { if (tour.i < tour.steps.length - 1) { tour.i++; drawTour(); } else endTour(); return; }
    var pad = 8;
    var spot = tour.spot;
    spot.style.left = Math.max(2, r.left - pad) + "px";
    spot.style.top = Math.max(2, r.top - pad) + "px";
    spot.style.width = Math.max(8, r.width + pad * 2) + "px";
    spot.style.height = Math.max(8, r.height + pad * 2) + "px";

    var card = tour.card;
    card.querySelector(".gd2-tour-count").textContent = T.step + " " + (tour.i + 1) + " / " + tour.steps.length;
    card.querySelector(".gd2-tour-title").textContent = s.title;
    card.querySelector(".gd2-tour-text").textContent = s.text;
    var next = card.querySelector(".gd2-tour-next");
    next.textContent = tour.i >= tour.steps.length - 1 ? T.done : T.next;
    card.querySelector(".gd2-tour-prev").style.visibility = tour.i ? "visible" : "hidden";

    var cw = Math.min(390, window.innerWidth - 24), ch = card.offsetHeight || 210;
    var left = Math.min(Math.max(12, r.left + r.width / 2 - cw / 2), window.innerWidth - cw - 12);
    var top = (r.bottom + 16 + ch < window.innerHeight - 12) ? r.bottom + 16 : Math.max(12, r.top - ch - 16);
    card.style.left = left + "px";
    card.style.top = top + "px";
    card.style.width = cw + "px";
  }

  function endTour() {
    if (!tour) return;
    if (tour.layer.parentNode) tour.layer.parentNode.removeChild(tour.layer);
    tour = null;
    window.removeEventListener("scroll", drawTour);
    window.removeEventListener("resize", drawTour);
  }

  /* ---------- подсказки к меню ---------- */
  function initNavTips() {
    var tip = el("div", "gd2-navtip");
    tip.id = "gd2-navtip";
    doc.body.appendChild(tip);
    var current = null;
    function show(n) {
      var txt = n.getAttribute("data-gd2tip") || n.getAttribute("title") || "";
      if (!txt) return;
      if (n.getAttribute("title")) { n.setAttribute("data-gd2tip", txt); n.removeAttribute("title"); }
      current = n;
      tip.textContent = txt;
      tip.classList.add("show");
      n.setAttribute("aria-describedby", "gd2-navtip");
      var r = n.getBoundingClientRect(), tr = tip.getBoundingClientRect();
      var left = Math.min(Math.max(8, r.left), window.innerWidth - tr.width - 8);
      var top = r.bottom + 8;
      if (top + tr.height > window.innerHeight - 8) top = Math.max(8, r.top - tr.height - 8);
      tip.style.left = left + "px";
      tip.style.top = top + "px";
    }
    function hide() {
      tip.classList.remove("show");
      if (current) current.removeAttribute("aria-describedby");
      current = null;
    }
    [].forEach.call(doc.querySelectorAll("nav.main details.more > summary,nav.main > a[title]"), function (n) {
      n.addEventListener("mouseenter", function () { show(n); });
      n.addEventListener("focus", function () { show(n); });
      n.addEventListener("mouseleave", hide);
      n.addEventListener("blur", hide);
    });
    window.addEventListener("scroll", hide, { passive: true });
  }

  /* ---------- облачко при первом заходе ---------- */
  function hideTip() {
    if (tipTimer) { clearTimeout(tipTimer); tipTimer = null; }
    if (tipEl && tipEl.parentNode) tipEl.parentNode.removeChild(tipEl);
    tipEl = null;
  }

  function showTip() {
    try {
      if (window.localStorage.getItem("rg-guide-tip-v2")) return;
      window.localStorage.setItem("rg-guide-tip-v2", "1");
    } catch (e) { return; }
    tipTimer = setTimeout(function () {
      tipEl = el("div", "gd2-tip", '<button type="button" class="gd2-tip-close" aria-label="' + esc(T.tipClose) + '">×</button><b>' + esc(T.tipTitle) + '</b>' + esc(T.tip));
      tipEl.setAttribute("role", "region");   // разбор 23.10: подсказка — именованная область для экранных чтецов
      tipEl.setAttribute("aria-label", T.tipTitle);
      doc.body.appendChild(tipEl);
      placeNearProf(tipEl);
      tipEl.addEventListener("click", function (e) {
        if (e.target.classList.contains("gd2-tip-close")) { hideTip(); return; }
        hideTip(); openGuide();
      });
      setTimeout(hideTip, 11000);
    }, 1600);
  }

  /* ---------- v8: профессор и кнопка записи — сверху справа ---------- */
  var profBtn = null, hitsEl = null;
  /* ---------- профессор при наведении слегка кланяется и улыбается (слово Рудольфа 23.10 02:37 — не трястись по сторонам;
     02:46 — губами не шевелить, «пусть лучше просто улыбнется») ----------
     На кнопке профессора поверх портрета проявляется тот же профессор с широкой улыбкой (рисунок Анри «подтвердил», тот же кадр
     лица — img/prof/face-smile.webp); в окне гида и в облачке подсказки — лёгкий поклон (там профессор и так улыбается). */
  var SMILE = { "face": "face-smile" };
  function bowSmile(img) {
    if (!img || !img.parentNode || (img.parentNode.className || "").indexOf("rg-face") >= 0) return;
    var face = el("span", "rg-face");
    img.parentNode.insertBefore(face, img);
    face.appendChild(img);
    var k = /([a-z-]+)\.webp/.exec(img.getAttribute("src") || ""), s = k && SMILE[k[1]];
    if (!s) return;
    var sm = doc.createElement("img");
    sm.className = "rg-smile"; sm.alt = ""; sm.setAttribute("aria-hidden", "true");
    sm.src = IMG + s + ".webp" + IMGV;
    face.appendChild(sm);
  }

  function buildDock() {
    var d = el("div", "rg-dock");
    profBtn = el("button", "rg-prof", '<img src="' + IMG + (WINTER ? "face-winter.webp" : "face.webp") + IMGV + '" alt="" width="96" height="96" decoding="async">');
    profBtn.type = "button";
    profBtn.title = T.fab;
    profBtn.setAttribute("aria-label", T.fab);
    var im = profBtn.querySelector("img");
    if (im) im.addEventListener("error", function () { profBtn.innerHTML = prof("58 18 124 124", "b"); }, { once: true });
    bowSmile(im);   // слово Рудольфа 02:37 и 02:46: при наведении кланяется и улыбается
    profBtn.addEventListener("click", openGuide);
    var a = el("a", "rg-enroll rg-enroll-dock", ENROLL_IC);
    // слово Рудольфа 02:23 и 02:37: при наведении перо пишет на листке — две строки слева направо, чернила проявляются за пером
    var aic = a.querySelector(".rg-enroll-ic");
    if (aic) aic.insertAdjacentHTML("beforeend", '<span class="rg-sheet" aria-hidden="true"><svg viewBox="0 0 60 30" preserveAspectRatio="none" focusable="false">' +
      '<path class="rg-l1" pathLength="100" d="M4 11c1.5-3 2.5-3 3 0s1 3 2.5 0 1.5-3 3 0 1 3 2.5 0M17.5 11c1.5-3 2.5-3 3 0s1 3 2.5 0 1.5-3 3 0' +
      'M30.5 11c1.2-3 2.6-3 3 0s1.4 3 2.6 0 1.4-3 2.6 0 1.4 3 2.6 0 1.4-3 2.6 0M47.5 11c1.2-3 2.4-3 3 0s1.6 3 2.4 0"/>' +
      '<path class="rg-l2" pathLength="100" d="M4 21c1.5-3 2.5-3 3 0s1 3 2.5 0 1.5-3 3 0M15.5 21c1.2-3 2.6-3 3 0s1.4 3 2.6 0 1.4-3 2.6 0 1.4 3 2.6 0' +
      'M31.5 21c1.5-3 2.5-3 3 0s1 3 2.5 0 1.5-3 3 0 1 3 2.5 0"/></svg></span><span class="rg-quill" aria-hidden="true"></span>');
    a.href = BASE + "consultants.html#zoom";
    a.title = G5.consult;
    a.setAttribute("aria-label", T8.enroll);
    // слово Рудольфа 23.10 01:02: три плавающие кнопки в ряд — язык, запись на занятие, профессор (одного размера);
    // слово Рудольфа 01:22: под ними подпись «Записаться на занятие» во всю ширину ряда, крупными буквами; нажатие на неё — та же запись
    var row = el("div", "rg-dock-row");
    row.appendChild(a);
    row.appendChild(profBtn);
    var lf = doc.querySelector(".gd2-lang-fab");
    if (lf) row.insertBefore(lf, row.firstChild);
    var cap = el("a", "rg-dock-cap", esc(T8.enroll));
    cap.href = a.href;
    cap.title = G5.consult;
    cap.tabIndex = -1;                        // клавиатуре и экранному чтецу хватает самой круглой кнопки записи
    cap.setAttribute("aria-hidden", "true");
    d.appendChild(row);
    // слово Рудольфа 01:5x (образец — акварельный предпросмотр Анри 01:49): подписи под кнопками — язык · запись · профессор;
    // на компьютере, пока страница не прокручена (класс rg-scrolled), на телефоне не показываются
    var LBL = { ru: ["язык", "запись", "профессор"], en: ["language", "booking", "professor"], hy: ["լեզու", "գրանցում", "պրոֆեսոր"],
      fr: ["langue", "réserver", "professeur"], de: ["Sprache", "Termin", "Professor"] }[LANG] || ["language", "booking", "professor"];
    var lb = el("div", "rg-dock-labels", (lf ? "<span>" + esc(LBL[0]) + "</span>" : "") + "<span>" + esc(LBL[1]) + "</span><span>" + esc(LBL[2]) + "</span>");
    lb.setAttribute("aria-hidden", "true");
    d.setAttribute("role", "region");   // разбор 23.10: ряд плавающих кнопок — именованная область для экранных чтецов
    d.setAttribute("aria-label", (lf ? LBL : LBL.slice(1)).join(", "));
    d.appendChild(lb);
    d.appendChild(cap);
    doc.body.appendChild(d);
    var onScroll = function () {
      var s = (window.pageYOffset || doc.documentElement.scrollTop || 0) > 40;
      if (s !== html.classList.contains("rg-scrolled")) html.classList.toggle("rg-scrolled", s);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // слово Рудольфа 02:17: глобус на кнопке языков тоже вращается при наведении — поверх рисунка Анри проступает вращающийся глобус
    // слово Рудольфа 02:23: при наведении профессор шевелится и здоровается — облачко «Здравствуйте!» под ним
    var HELLO = { ru: "Здравствуйте!", en: "Hello!", hy: "Բարև Ձեզ!", fr: "Bonjour !", de: "Guten Tag!" }[LANG] || "Hello!";
    var hi = el("span", "rg-hello", esc(HELLO));
    hi.setAttribute("aria-hidden", "true");
    d.appendChild(hi);
    if (window.matchMedia && window.matchMedia("(any-hover: hover)").matches) {
      profBtn.addEventListener("mouseenter", function () { d.classList.add("rg-hi-on"); });
      profBtn.addEventListener("mouseleave", function () { d.classList.remove("rg-hi-on"); });
      profBtn.addEventListener("click", function () { d.classList.remove("rg-hi-on"); });
    }
    var lbtn = lf && lf.querySelector(".gd2-lang-btn");
    if (lbtn && window.RG_miniGlobe) window.RG_miniGlobe(lbtn, { keep: true });   // 24.10.2026: вращается всегда
    html.className += " rg-dock-on";   // кнопку записи в шапке (.cta-row) заменяет кнопка под профессором; в HTML она остаётся
  }

  /* три позы профессора в окне гида: объясняет (по умолчанию), думает (ищет / ничего не нашёл), подтвердил (нашёл) */
  var poseNow = "teach", poseTimer = null, posesLoaded = false;
  function setPose(p) {
    if (!overlay || p === poseNow) return;
    var img = overlay.querySelector(".rg-pose");
    if (!img) return;
    poseNow = p;
    img.src = IMG + p + ".webp" + IMGV;
    var side = overlay.querySelector(".gd2-side");
    if (side) side.setAttribute("data-pose", p);
  }
  function preloadPoses() {
    if (posesLoaded) return;
    posesLoaded = true;
    ["think", "ok"].forEach(function (p) { var i = new Image(); i.src = IMG + p + ".webp" + IMGV; });
  }

  /* сквозной поиск по тексту всех страниц: указатель search-<язык>.json (tools\build_search_index.py), грузится при первом поиске */
  function n8(s) {   // как make_quickref.py пишет ключи: строчные, без ударений и точек над «ё», цифры формул — обычные
    s = String(s || "").toLowerCase();
    if (s.normalize) s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return s.replace(/[\u2080-\u2089]/g, function (c) { return String(c.charCodeAt(0) - 0x2080); }).replace(/\s+/g, " ").trim();
  }
  function nx(s) {   // то же без сжатия пробелов — позиции совпадают с исходной строкой (для выдержки)
    s = String(s || "").toLowerCase();
    if (s.normalize) s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return s.replace(/[\u2080-\u2089]/g, function (c) { return String(c.charCodeAt(0) - 0x2080); });
  }
  var IDX = null, idxState = 0, idxWait = [];
  function loadIdx(cb) {
    if (idxState === 2) { cb(); return; }
    idxWait.push(cb);
    if (idxState === 1) return;
    idxState = 1;
    function done(list) { IDX = list || []; idxState = 2; var w = idxWait; idxWait = []; w.forEach(function (f) { f(); }); }
    try {
      fetch(HERE + "search-" + LANG + ".json").then(function (r) { return r.ok ? r.json() : []; }).then(done, function () { done([]); });
    } catch (e) { done([]); }
  }
  function searchIdx(q) {
    var words = n8(q).split(" ").filter(Boolean);
    if (!words.length || !IDX || !IDX.length) return [];
    var out = [];
    IDX.forEach(function (e) {
      var hay = e._n || (e._n = n8((e.t || "") + " " + (e.s || "") + " " + (e.x || "") + " " + (e.k || "")));
      for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return;
      var head = e._h || (e._h = n8((e.t || "") + " " + (e.s || "") + " " + (e.k || ""))), score = 0;
      words.forEach(function (w) { if (head.indexOf(w) >= 0) score += 3; });
      out.push({ e: e, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out;
  }
  function snippet(x, q) {
    x = String(x || "");
    var w = n8(q).split(" ").filter(Boolean).sort(function (a, b) { return b.length - a.length; });
    var lx = nx(x), pos = -1, wl = 0;
    if (lx.length === x.length) for (var i = 0; i < w.length; i++) { pos = lx.indexOf(w[i]); if (pos >= 0) { wl = w[i].length; break; } }
    if (pos < 0) return esc(x.slice(0, 150)) + (x.length > 150 ? "…" : "");
    var a = Math.max(0, pos - 60), b = Math.min(x.length, pos + wl + 90);
    if (a > 0) { var sp = x.indexOf(" ", a); if (sp > 0 && sp < pos) a = sp + 1; }
    return (a > 0 ? "…" : "") + esc(x.slice(a, pos)) + "<mark>" + esc(x.slice(pos, pos + wl)) + "</mark>" + esc(x.slice(pos + wl, b)) + (b < x.length ? "…" : "");
  }
  function renderHits(q, list) {
    if (!hitsEl) return;
    if (!q || !list.length) { hitsEl.hidden = true; hitsEl.innerHTML = ""; return; }
    var h = '<h3 class="rg-hits-h">' + icon("find") + esc(T8.pages) + ' <span>' + list.length + '</span></h3><ul>';
    list.slice(0, 15).forEach(function (it) {
      var e = it.e, ttl = e.s && e.s !== e.t ? e.t + " — " + e.s : e.t;
      h += '<li><a href="' + esc(e.u) + '"><b>' + esc(ttl) + '</b><small>' + snippet(e.x, q) + '</small></a></li>';
    });
    hitsEl.innerHTML = h + "</ul>";
    hitsEl.hidden = false;
  }
  function afterFilter(q, anyGroups) {
    var raw = (searchEl && searchEl.value || "").trim();
    if (poseTimer) { clearTimeout(poseTimer); poseTimer = null; }
    if (!raw) { renderHits("", []); if (emptyEl) emptyEl.hidden = anyGroups; setPose("teach"); return; }
    setPose("think");
    if (raw.length < 2) { renderHits("", []); if (emptyEl) emptyEl.hidden = anyGroups; return; }
    loadIdx(function () {
      if (!searchEl || (searchEl.value || "").trim() !== raw) return;   // уже ввели другое
      var list = searchIdx(raw);
      renderHits(raw, list);
      var found = anyGroups || list.length > 0;
      if (emptyEl) emptyEl.hidden = found;
      poseTimer = setTimeout(function () { setPose(found ? "ok" : "think"); }, 450);
    });
  }

  /* кнопка поиска в шапке — открывает окно гида со строкой поиска */
  function initSearchBtn() {
    var wrap = doc.querySelector("header.site .lang");
    if (!wrap) return;
    var b = el("button", "rg-search-btn", icon("find"));
    b.type = "button";
    b.title = T8.searchBtn;
    b.setAttribute("aria-label", T8.searchBtn);
    b.addEventListener("click", function (e) { e.stopPropagation(); openGuide(); });
    wrap.insertBefore(b, wrap.firstChild);
  }

  /* подсказки профессора к строкам таблиц: адрес …#v-<ключ> или щелчок по строке — облачко у профессора (professor.json) */
  var PJ = null, pjState = 0, pjWait = [], bubble = null, bubbleTimer = null;
  function placeNearProf(n) {
    var a = doc.querySelector(".rg-dock");
    if (!n || !a) return;
    var r = a.getBoundingClientRect();
    n.style.position = "fixed";
    n.style.top = Math.round(r.bottom + 8) + "px";
    n.style.right = Math.max(8, Math.round(window.innerWidth - r.right)) + "px";
    n.style.left = "auto";
    n.style.bottom = "auto";
  }
  function hideBubble() {
    if (bubbleTimer) { clearTimeout(bubbleTimer); bubbleTimer = null; }
    if (bubble && bubble.parentNode) bubble.parentNode.removeChild(bubble);
    bubble = null;
  }
  function profSay(text) {
    hideBubble();
    hideTip();
    bubble = el("div", "rg-bubble", '<button type="button" class="rg-bubble-x" aria-label="' + esc(T8.close) + '">×</button>' +
      '<img src="' + IMG + 'teach.webp' + IMGV + '" alt="" width="64" height="64"><div><b>' + esc(T8.prof) + '</b><p>' + esc(text) + '</p></div>');
    bubble.setAttribute("role", "status");
    doc.body.appendChild(bubble);
    bowSmile(bubble.querySelector("img"));   // и в облачке подсказки профессор кланяется при наведении
    placeNearProf(bubble);
    bubble.querySelector(".rg-bubble-x").addEventListener("click", hideBubble);
    bubbleTimer = setTimeout(hideBubble, 16000);
  }
  function loadPJ(cb) {
    if (pjState === 2) { cb(); return; }
    pjWait.push(cb);
    if (pjState === 1) return;
    pjState = 1;
    function done(d) { PJ = d || {}; pjState = 2; var w = pjWait; pjWait = []; w.forEach(function (f) { f(); }); }
    try {
      fetch(HERE + "professor.json").then(function (r) { return r.ok ? r.json() : {}; }).then(done, function () { done({}); });
    } catch (e) { done({}); }
  }
  function hintFor(id) {
    var m = /^v-([\w-]+)$/.exec(id || "");
    if (!m || !doc.getElementById(id)) return;
    loadPJ(function () {
      var e = PJ && PJ[m[1]];
      var t = e && (e[LANG] || e.en || e.ru);
      if (t) profSay(t);
    });
  }
  function initProfHints() {
    if (location.hash) hintFor(decodeURIComponent(location.hash.slice(1)));
    window.addEventListener("hashchange", function () { hintFor(decodeURIComponent(location.hash.slice(1))); });
    window.addEventListener("resize", function () { if (bubble) placeNearProf(bubble); });
    var tb = doc.querySelector(".qref-t tbody");
    if (!tb) return;
    tb.addEventListener("click", function (e) {
      if (e.target.closest("a,button,input")) return;
      var tr = e.target.closest('tr[id^="v-"]');
      if (!tr) return;
      [].forEach.call(tb.querySelectorAll("tr.rg-on"), function (r) { r.classList.remove("rg-on"); });
      tr.classList.add("rg-on");
      try { history.replaceState(null, "", "#" + tr.id); } catch (er) {}
      hintFor(tr.id);
    });
  }

  /* круглая кнопка записи с подписью снаружи круга — замысел и код AutoClaw (build\cta_circle.js, 21.10.2026), перенесено сюда,
     чтобы не подключать второй скрипт на 80 страниц; кнопку в шапке (.cta-row) заменяет кнопка под профессором */
  function initRoundCta() {
    var EMOJI = /^([\uD800-\uDBFF][\uDC00-\uDFFF\uFE0F]?|[\u2600-\u27BF])\s*/;
    [].forEach.call(doc.querySelectorAll("a.cta-zoom"), function (a) {
      if (a.classList.contains("cta-round") || (a.closest && a.closest(".cta-row,.gd2-overlay,.guide-card"))) return;
      var raw = (a.textContent || "").replace(/\s+/g, " ").trim();
      var m = raw.match(EMOJI);
      var ico = m ? m[1] : "\uD83C\uDFA5";
      var label = m ? raw.slice(m[0].length).trim() : raw;
      if (!label) label = raw;
      a.classList.add("cta-round");
      a.textContent = "";
      var ic = doc.createElement("span");
      ic.className = "cta-ic";
      ic.setAttribute("aria-hidden", "true");
      ic.textContent = ico;
      var lb = doc.createElement("span");
      lb.className = "cta-label";
      lb.textContent = label;
      a.appendChild(ic);
      a.appendChild(lb);
    });
  }

  /* ---------- открытая книга у названия сайта — круглая кнопка к справочникам (слово Рудольфа 23.10 01:13) ----------
     Без JavaScript книга остаётся частью ссылки на главную, как раньше. */
  function initBookBtn() {
    var logo = doc.querySelector("header.site .logo");
    var mark = logo && logo.querySelector(".mark");
    if (!mark) return;
    // слово Рудольфа 01:19 и 01:22: книга не синяя и не «сложенный пополам листок», а толстая, объёмная — кремовые страницы
    // с обрезом, коричневый кожаный переплёт, красная закладка; до 25.10.2026 вела на главную страницу («Содержание»)
    // 25.10.2026 22:44 (слово Рудольфа): книга с листающимися страницами открывает раздел «Книги»; название сайта рядом —
    // по-прежнему ссылка на «Содержание»
    var BOOKS = { ru: "Книги", en: "Books", hy: "Գրքեր", fr: "Livres", de: "Bücher" }[LANG] || "Books";
    var half = '<path d="M3 19C10.5 14.5 23.5 16 32 24.5V52.5C23.5 44.5 11 43 3.6 47z" fill="url(#rgBkC)"/>' +
      '<path d="M3.6 47C11 43 23.5 44.5 32 52.5V55C23.4 47 10.9 45.5 3.8 49.4z" fill="#4a2a12"/>' +
      '<path d="M6 37C13 33 24 34.5 32 42.5V49.5C24 41.5 13.8 40 6.8 44z" fill="#ecdab0" stroke="#b39561" stroke-width=".5"/>' +
      '<path d="M6.2 38.4C13.2 34.4 24 35.9 32 43.9M6.4 39.8C13.4 35.8 24 37.3 32 45.3M6.5 41.2C13.5 37.2 24 38.7 32 46.7' +
      'M6.7 42.6C13.7 38.6 24 40.1 32 48.1" fill="none" stroke="#c4a873" stroke-width=".45"/>' +
      '<path d="M6 16.5C13 12.5 24 14 32 22V42.5C24 34.5 13 33 6 37z" fill="url(#rgBkP)" stroke="#b0965f" stroke-width=".6"/>' +
      '<path d="M9.5 21.4C15 18.6 22.5 19.3 28.5 24M9.5 25C15 22.2 22.5 22.9 28.5 27.6M9.5 28.6C15 25.8 22.5 26.5 28.5 31.2' +
      'M9.5 32.2C13 30.4 16.6 30 20 30.4" fill="none" stroke="#c2a675" stroke-width=".9" stroke-linecap="round"/>';
    // слово Рудольфа 01:36 «пусть Анри перерисует», его выбор «Вариант 1»: на кнопке — рисунок Анри (img/ui/book.webp);
    // свой рисунок ниже — только запасной, если картинка не загрузится
    var svgBook = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="rgBkP" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fffdf7"/><stop offset=".72" stop-color="#f8eed5"/>' +
      '<stop offset="1" stop-color="#dcc697"/></linearGradient>' +
      '<linearGradient id="rgBkC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9b6633"/><stop offset="1" stop-color="#6a3f1e"/></linearGradient>' +
      '</defs><g transform="translate(0 -4)"><ellipse cx="32" cy="57" rx="27" ry="3" fill="#3d2b1f" opacity=".16"/>' +
      '<path d="M27.5 51.5Q32 61 36.5 51.5z" fill="#55301a"/>' +
      '<g>' + half + '</g><g transform="matrix(-1 0 0 1 64 0)">' + half + '</g>' +
      '<path d="M32 22V42.5" stroke="#a5854f" stroke-width=".8"/>' +
      '<path d="M31.2 41.8H33.8L36 61 34.6 59.2 33.3 61.3z" fill="#b3262b" stroke="#7a1519" stroke-width=".4" stroke-linejoin="round"/></g></svg>';
    var b = el("a", "rg-book", '<img src="' + HERE + 'img/ui/book.webp" alt="" width="64" height="64" decoding="async">');
    b.querySelector("img").addEventListener("error", function () { b.innerHTML = svgBook; }, { once: true });
    // слово Рудольфа 02:12: при наведении курсора страницы листаются — на правой половине книги справа налево, на левой — слева
    // направо, пока курсор над книгой; на телефоне (нет наведения) не листает; при системной настройке «меньше движения»
    // листает тоже (02:24: у Рудольфа в Windows анимации выключены) — движение начинает сам человек наведением
    var leaf = el("span", "rg-leaf");
    leaf.setAttribute("aria-hidden", "true");
    // толщина стопок страниц слева и справа меняется при листании: каждый перевёрнутый лист делает принимающую сторону толще,
    // отдающую — тоньше, пока листы не кончатся до обложки (функция bookStacks ниже; 24.10 — слово Рудольфа 15:52 и решения Анри,
    // 25.10 — слово Рудольфа 02:38 и его ответы: стопки на рисунке Анри, 10 листов в каждой половине)
    var stk = bookStacks(b);
    b.appendChild(leaf);
    b.querySelector("img").addEventListener("error", function () { var s = b.querySelector(".rg-stk"); if (s) s.remove(); stk = null; }, { once: true });
    var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
    if (mq("(any-hover: hover)")) {
      var side = "";
      var setSide = function (s) {
        if (s === side) return;
        side = s;
        b.classList.remove("leaf-r", "leaf-l");
        if (s && stk && !stk.can(s)) return;                 // на отдающей стороне листов не осталось — не листаем
        if (s) { void leaf.offsetWidth; b.classList.add("leaf-" + s); }
      };
      leaf.addEventListener("animationiteration", function () {   // лист лёг на другую сторону
        if (!stk || !side) return;
        stk.flip(side);
        if (!stk.can(side)) b.classList.remove("leaf-r", "leaf-l");   // листы с этой стороны кончились — дошли до обложки, листание стоит
      });
      b.addEventListener("mousemove", function (e) { var r = b.getBoundingClientRect(); setSide(e.clientX - r.left >= r.width / 2 ? "r" : "l"); });
      b.addEventListener("mouseleave", function () { setSide(""); if (stk) stk.rest(); });
    }
    var home = logo.getAttribute("href") || (BASE + "index.html");
    b.href = /index\.html$/.test(home) ? home.replace(/index\.html$/, "books.html") : home.replace(/\/?$/, "/") + "books.html";
    b.title = BOOKS;
    b.setAttribute("aria-label", BOOKS);
    if (/(^|\/)books(\.html)?$/.test(location.pathname)) b.setAttribute("aria-current", "page");   // уже в «Книгах»
    logo.parentNode.insertBefore(b, logo);
    html.className += " rg-book-on";   // значок внутри ссылки на главную скрывается — в ней остаётся название сайта
  }

  /* ---------- значки плиток на странице «Содержание» (25.10.2026, Claude «Маисовый полоз цена»; слово Рудольфа 13:15: «иконки
     сборников каталогов на плитках страницы "содержание" активными, как иконка мировых ресурсов, и цветными в стиле книги, которая
     с перелистывающимися страницами»). Рисунки — Анри (SVG с плавным повторяющимся движением, img/ui/tiles/*.svg; цвета его книги:
     страницы, кожа переплёта, золото, закладка). Значок «Мировые ресурсы» — прежний вращающийся глобус, цвета — как у книги. ---------- */
  function initTileIcons() {
    if (!/(^|\/)(index(\.html)?)?$/.test(location.pathname)) return;      // только страница «Содержание» (главная) на любом языке
    var MAP = { "religion.html": "religion", "science.html": "science", "formalsciences.html": "formal", "natural-sciences.html": "natural",
      "applied-sciences.html": "applied", "reference-catalogs.html": "reftab", "art-culture.html": "art", "learners.html": "learners",
      "resources.html": "", "books.html": "books" };
    var cards = doc.querySelectorAll(".grid .card");
    for (var i = 0; i < cards.length; i++) {
      var a = cards[i].querySelector("a.more[href]"), ic = cards[i].querySelector(".icon");
      if (!a || !ic) continue;
      var k = MAP[(a.getAttribute("href") || "").replace(/[?#].*$/, "").replace(/^.*\//, "").replace(/^([^.]+)$/, "$1.html")];
      if (k === "") { ic.className += " rg-tile-globe"; continue; }
      if (!k) continue;
      ic.className += " rg-tile-ic";
      ic.innerHTML = '<img src="' + HERE + 'img/ui/tiles/' + k + '.svg" alt="" width="40" height="40" decoding="async">';
    }
  }

  /* ---------- стопки страниц у книги в углу (25.10.2026, Claude «Маисовый полоз цена»; слово Рудольфа 25.10 02:38: «пока курсор
     находится на стороне книги, листы должны перелистываться… до обложки», затем на другой стороне — в обратную сторону, тоже
     до обложки; его ответы 02:4x: «Стопки на рисунке Анри», «10 листов» в каждой половине). Прежний слой 24.10 менял тонкие
     полоски по бокам книги — главная стопка под страницами не двигалась, толщины не было видно, а листание обрывалось на шестом
     листе, хотя листы на рисунке оставались.
     Теперь рисунок Анри (img/ui/book.webp, 192×192) перерисовывается на холсте поверх картинки, страницы стоят на месте:
     • слева переплёт под страницей опускается, между страницей и переплётом видны листы (копия правой стопки зеркально),
       у самого левого края кромка переплёта растягивается вниз;
     • справа кромка под стопкой поднимается и закрывает листы; где кромка наклонная (правый край) — книга обрезается по ней.
     n — листов в левой половине из 20: в покое 10 и 10; 20 — справа обложка (листать направо налево больше нечего); 0 — так
     нарисовала Анри: слева обложка. Каждый перевёрнутый лист — плавный шаг за 0,35 с; курсор ушёл — за 0,5 с назад в покой
     (решение Анри 24.10). Замеры рисунка 25.10 по столбцам x: TL — верх переплёта под левой страницей (x 22…96; до x 33 —
     наклонная кромка слева), BOT — низ книги у левого края (x 22…33); верх кромки под правой стопкой — 119…123 (функция br);
     наклонная кромка справа — y = 62 + 4·(x − 155). ---------- */
  function bookStacks(b) {
    var img = b.querySelector("img"), cv = doc.createElement("canvas");
    var ctx = img && cv.getContext ? cv.getContext("2d") : null;
    if (!ctx) return null;
    cv.width = cv.height = 192;
    cv.className = "rg-stk";
    cv.setAttribute("aria-hidden", "true");
    var cimg = new Image();                                // обложка изнутри — рисунок Анри (SVG), см. cover ниже
    cimg.onload = function () { draw(); };
    cimg.src = (img.getAttribute("src") || "").replace(/book\.webp.*$/, "cover_anri.svg");
    var TL = [118, 115, 112, 109, 106, 103, 100, 97, 94, 91, 88, 85, 109, 109, 109, 108, 108, 108, 108, 107, 107, 107, 107, 107, 106,
      106, 106, 106, 106, 106, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105,
      105, 106, 106, 106, 106, 106, 106, 107, 107, 107, 107, 107, 108, 108, 108, 108, 109, 109, 109, 110, 110, 110, 111, 111, 112];
    var BOT = [126, 126, 126, 126, 126, 126, 125, 126, 125, 125, 125, 125];
    var H = 192, TR = 101, MAXL = 20, MAXR = 22, N = 20, REST = 10, n = REST, cur = REST, raf = 0, ready = false;
    function sm(t) { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); }
    function br(x) { return x <= 124 ? 119 : x <= 144 ? Math.round(119 + (x - 124) * 3 / 20) : 123; }
    function draw() {
      if (!ready) return;
      var f = cur / N, x, t, s, bb;
      ctx.drawImage(img, 0, 0, H, H);
      for (x = 22; x <= 96; x++) {                      // левая половина: переплёт вниз на s, в щели — листы
        s = Math.round(f * MAXL * sm((92 - x) / 18));
        if (s <= 0) continue;
        t = TL[x - 22];
        if (x <= 33) {                                   // наклонная кромка слева — растянуть вниз
          bb = BOT[x - 22];
          ctx.drawImage(img, x, bb, 1, H - bb - s, x, bb + s, 1, H - bb - s);
          ctx.drawImage(img, x, t, 1, bb - t, x, t, 1, bb + s - t);
        } else {
          ctx.drawImage(img, x, t, 1, H - s - t, x, t + s, 1, H - s - t);
          ctx.drawImage(img, Math.min(147, Math.max(114, 192 - x)), TR, 1, s, x, t, 1, s);
        }
      }
      ctx.fillStyle = "rgb(250,242,223)";               // цвет фона рисунка
      for (x = 97; x <= 175; x++) {                     // правая половина: кромка вверх на s, закрывает низ стопки
        s = Math.round(f * MAXR * sm((x - 100) / 16));
        if (s <= 0) continue;
        bb = br(x);
        ctx.drawImage(img, x, bb, 1, H - bb, x, bb - s, 1, H - bb);
        ctx.fillRect(x, H - s, 1, s);
        if (x >= 155 && 62 + 4 * (x - 155) >= bb - s) ctx.fillRect(x, bb - s, 1, H - bb + s);   // за наклонной кромкой — фон
      }
      cover("r", Math.min(1, Math.max(0, cur - (N - 1))));   // справа листов не осталось — обложка
      cover("l", Math.min(1, Math.max(0, 1 - cur)));         // слева листов не осталось — обложка
    }
    // обложка изнутри — видна, когда листы с этой стороны кончились (слово Рудольфа 25.10 03:34: «перелистывалось до тех пор, пока
    // не дойдёт до обложки… обложка имеет другой вид, не такой, как лист»; 03:4x: «светло-жёлто-золотистая, с оттиском и с
    // рисунком — орнаментом»). Рисунок — Анри (25.10 03:5x, по слову Рудольфа 03:49 «пусть Анри предложит другой рисунок»;
    // прежний орнамент кодом не годился): img/ui/cover_anri.svg — двойная золотая рамка с точками, угловые виньетки-лепестки,
    // медальон-овал с ромбом и лучами; фон #F8E8A8. Рисунок натягивается на страницу двумя треугольниками (функция tri).
    // Контур страницы на рисунке и её четыре угла (у корешка сверху, снаружи сверху, снаружи снизу, у корешка снизу) — замер 25.10.
    var PG = {
      r: { p: [[96, 57], [100, 53], [104, 50], [108, 48], [112, 47], [116, 46], [124, 46], [132, 45], [141, 44], [150, 72], [158, 100],
               [130, 101], [110, 103], [100, 106], [96, 108]], q: [[98, 56], [141, 45], [157, 99], [100, 104]] },
      l: { p: [[96, 57], [94, 54], [90, 51], [86, 49], [80, 48], [70, 47], [60, 49], [50, 49], [48, 50], [46, 56], [44, 64], [40, 80],
               [37, 96], [36, 100], [50, 102], [70, 103], [84, 104], [90, 106], [96, 108]], q: [[94, 56], [48, 49], [36, 100], [91, 105]] }
    };
    function cover(side, a) {
      if (a <= 0) return;
      var g = PG[side], q = g.q, i, k;
      var Q = function (u, v) {                            // точка страницы: u — от корешка наружу, v — сверху вниз (0…1)
        var x0 = q[0][0] + (q[1][0] - q[0][0]) * u, y0 = q[0][1] + (q[1][1] - q[0][1]) * u;
        var x1 = q[3][0] + (q[2][0] - q[3][0]) * u, y1 = q[3][1] + (q[2][1] - q[3][1]) * u;
        return [x0 + (x1 - x0) * v, y0 + (y1 - y0) * v];
      };
      ctx.save();
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.moveTo(g.p[0][0], g.p[0][1]);
      for (i = 1; i < g.p.length; i++) ctx.lineTo(g.p[i][0], g.p[i][1]);
      ctx.closePath();
      ctx.fillStyle = "#F8E8A8";
      ctx.fill();
      ctx.clip();
      if (cimg.complete && cimg.naturalWidth) {           // рисунок Анри (img/ui/cover_anri.svg, 100×140) — на страницу двумя треугольниками
        tri([0, 0], [100, 0], [0, 140], q[0], q[1], q[3]);
        tri([100, 0], [100, 140], [0, 140], q[1], q[2], q[3]);
      }
      var s0 = Q(0, 0.5), s1 = Q(0.2, 0.5), gr = ctx.createLinearGradient(s0[0], s0[1], s1[0], s1[1]);   // тень у корешка
      gr.addColorStop(0, "rgba(122,90,38,.45)");
      gr.addColorStop(1, "rgba(122,90,38,0)");
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, H, H);
      ctx.restore();
    }
    function tri(s0, s1, s2, d0, d1, d2) {                // треугольник рисунка s → треугольник страницы d (обрез чуть шире — без шва)
      var cx = (d0[0] + d1[0] + d2[0]) / 3, cy = (d0[1] + d1[1] + d2[1]) / 3;
      var W2 = [d0, d1, d2].map(function (p) {
        var dx = p[0] - cx, dy = p[1] - cy, l = Math.sqrt(dx * dx + dy * dy) || 1;
        return [p[0] + dx / l * 0.6, p[1] + dy / l * 0.6];
      });
      var x1 = s1[0] - s0[0], y1 = s1[1] - s0[1], x2 = s2[0] - s0[0], y2 = s2[1] - s0[1];
      var u1 = d1[0] - d0[0], v1 = d1[1] - d0[1], u2 = d2[0] - d0[0], v2 = d2[1] - d0[1], det = x1 * y2 - x2 * y1;
      var ka = (u1 * y2 - u2 * y1) / det, kb = (u2 * x1 - u1 * x2) / det, kc = (v1 * y2 - v2 * y1) / det, kd = (v2 * x1 - v1 * x2) / det;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(W2[0][0], W2[0][1]); ctx.lineTo(W2[1][0], W2[1][1]); ctx.lineTo(W2[2][0], W2[2][1]);
      ctx.closePath();
      ctx.clip();
      ctx.transform(ka, kc, kb, kd, d0[0] - ka * s0[0] - kb * s0[1], d0[1] - kc * s0[0] - kd * s0[1]);
      ctx.drawImage(cimg, 0, 0, 100, 140);
      ctx.restore();
    }
    function go(to, ms) {                                // плавно к числу листов to за ms
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      var from = cur, t0 = 0;
      if (!window.requestAnimationFrame || from === to) { cur = to; draw(); return; }
      var step = function (now) {
        if (!t0) t0 = now;
        var p = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - p, 3);
        cur = from + (to - from) * e; draw();
        raf = p < 1 ? requestAnimationFrame(step) : 0;
      };
      raf = requestAnimationFrame(step);
    }
    function start() { ready = true; draw(); }
    if (img.complete && img.naturalWidth) start(); else img.addEventListener("load", start, { once: true });
    b.insertBefore(cv, img.nextSibling);
    return {
      can: function (s) { return s === "r" ? n < N : n > 0; },              // остались ли листы на отдающей стороне
      flip: function (s) { n = Math.max(0, Math.min(N, n + (s === "r" ? 1 : -1))); go(n, 350); },
      rest: function () { n = REST; go(REST, 500); }
    };
  }

  /* ---------- глобусы-значки в карточках (слово Рудольфа 23.10 02:17: все глобусы вращаются при наведении; 01:5x — все наклонные):
     ось наклонена на 23,4°, при наведении на карточку по шару бегут меридианы ---------- */
  function initIconGlobes() {
    var list = doc.querySelectorAll(".icon svg");
    for (var i = 0; i < list.length; i++) {
      var s = list[i], p = s.querySelector("path");
      if (!p || !s.querySelector("circle") || (p.getAttribute("d") || "").indexOf("M4 12h16M12 4c3") !== 0) continue;
      s.setAttribute("class", "rg-gl");
      s.innerHTML = '<g transform="rotate(23.4 12 12)"><circle cx="12" cy="12" r="8"/><path d="M4 12h16"/>' +
        '<ellipse class="rg-m rg-m1" cx="12" cy="12" rx="8" ry="8"/><ellipse class="rg-m rg-m2" cx="12" cy="12" rx="8" ry="8"/>' +
        '<ellipse class="rg-m rg-m3" cx="12" cy="12" rx="8" ry="8"/></g>';
    }
  }

  /* ---------- кнопка «наверх» — в виде лифта: ▲ наверх, ▼ вниз страницы (слово Рудольфа 23.10 01:13) ----------
     Без JavaScript остаётся прежняя кнопка «наверх» (a.to-top). */
  function initLift() {
    // слово Рудольфа 23.10 10:09: лифт — круглая кнопка, как остальные (64 точки, на телефоне 44), внутри две половинки: «вверх»
    // и «вниз». Короткое нажатие — к началу или к концу страницы; если держать — страница прокручивается, пока кнопку не отпустят
    // (сначала медленно, потом быстрее). 02:37: лифт и слева, и справа (для клавиатуры и экранного чтеца — правый).
    var old = doc.querySelector("a.to-top");
    var up = old ? (old.getAttribute("aria-label") || old.getAttribute("title") || "↑") : "↑";
    function make(left) {
      var L = el("div", "rg-lift" + (left ? " rg-lift-left" : ""),
        '<button type="button" class="rg-lift-btn rg-lift-up" aria-label="' + esc(up) + '" title="' + esc(up) + '"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 6.5l6.5 9h-13z"/></svg></button>' +
        '<button type="button" class="rg-lift-btn rg-lift-down" aria-label="' + esc(T8.down) + '" title="' + esc(T8.down) + '"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 17.5l-6.5-9h13z"/></svg></button>');
      L.setAttribute("role", "region");   // разбор 23.10: лифт — именованная область (не простая группа) для экранных чтецов
      L.setAttribute("aria-label", T8.lift);
      if (left) {
        L.setAttribute("aria-hidden", "true");
        var bs = L.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) bs[i].tabIndex = -1;
      }
      doc.body.appendChild(L);
      return L;
    }
    var lifts = [make(false), make(true)];
    html.className += " rg-lift-on";
    function go(y) { try { window.scrollTo({ top: y, behavior: REDUCED ? "auto" : "smooth" }); } catch (e) { window.scrollTo(0, y); } }
    function hold(btn, dir) {
      var timer = 0, raf = 0, held = false, t0 = 0, last = 0;
      function step(now) {
        var dt = last ? Math.min(50, now - last) : 16;
        last = now;
        var v = Math.min(2600, 500 + (now - t0) * 1.4);                 // точек в секунду: с 500 разгоняется до 2600
        window.scrollBy(0, dir * v * dt / 1000);
        raf = requestAnimationFrame(step);
      }
      function stop() { clearTimeout(timer); if (raf) cancelAnimationFrame(raf); raf = 0; btn.classList.remove("is-held"); }
      btn.addEventListener("pointerdown", function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        held = false;
        stop();
        timer = setTimeout(function () {
          held = true; btn.classList.add("is-held"); t0 = performance.now(); last = 0; raf = requestAnimationFrame(step);
        }, 280);
      });
      ["pointerup", "pointerleave", "pointercancel", "blur"].forEach(function (ev) { btn.addEventListener(ev, stop); });
      btn.addEventListener("contextmenu", function (e) { e.preventDefault(); });
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (held) { held = false; return; }                             // держали — уже прокрутили, без прыжка к краю
        go(dir < 0 ? 0 : doc.documentElement.scrollHeight);
      });
    }
    lifts.forEach(function (L) { hold(L.querySelector(".rg-lift-up"), -1); hold(L.querySelector(".rg-lift-down"), 1); });
    function upd() {
      var y = window.scrollY || window.pageYOffset || 0, max = doc.documentElement.scrollHeight - window.innerHeight;
      lifts.forEach(function (L) { L.classList.toggle("at-top", y < 40); L.classList.toggle("at-bottom", y > max - 40); });
    }
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
    upd();
  }

  function init() {
    markGold();
    initLang();
    buildGuide();
    initSearchBtn();
    initProfHints();
    initRoundCta();
    initBookBtn();
    initTileIcons();
    initLift();
    initIconGlobes();
    initNavTips();
    showTip();
    window.addEventListener("scroll", function () { if (tipEl) hideTip(); }, { passive: true });
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init);
  else init();
})();

})();


/* Круги 1 и 2 разбора сайта 23.10.2026:
   1) кнопка «Открыть афишу» (страница «Билеты»): по обычному щелчку встраивает окно афиши прямо в страницу —
      окно чужого сайта грузится долго, поэтому только по просьбе посетителя; без скриптов ссылка открывает афишу в новой вкладке;
   2) на опубликованном адресе (*.pages.dev) переходы по ссылкам сайта идут сразу на адрес без «.html» — без лишнего перенаправления;
   3) разметка «основное содержимое» (role="main") для экранных чтецов, если её ещё нет. */
(function () {
  "use strict";
  var d = document;
  function plain(e) { return !(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey); }
  d.addEventListener("click", function (e) {
    if (!plain(e)) return;
    var a = e.target && e.target.closest ? e.target.closest("a.window-load") : null;
    var box = a && a.closest(".window-lazy");
    if (!box) return;
    e.preventDefault();
    var win = box.closest(".window"), cap = win && win.querySelector(".window-bar span");
    var f = d.createElement("iframe");
    f.src = a.href;
    f.title = cap ? cap.textContent : a.textContent;
    box.parentNode.replaceChild(f, box);
  });
  var PRETTY = /(^|\.)pages\.dev$/i;   /* адреса, где сервер сам отдаёт страницы без «.html» */
  if (PRETTY.test(location.hostname)) {
    d.addEventListener("click", function (e) {
      if (!plain(e)) return;
      var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a || a.hasAttribute("download")) return;
      var tg = a.getAttribute("target");
      if (tg && tg !== "_self") return;
      var u;
      try { u = new URL(a.href, location.href); } catch (_) { return; }
      if (u.origin !== location.origin) return;
      var p = u.pathname, np = p.replace(/\/index\.html$/i, "/").replace(/\.html$/i, "");
      if (np === p) return;
      e.preventDefault();
      location.assign(np + u.search + u.hash);
    });
  }
  function markMain() {
    var c = d.getElementById("content");
    if (c && !d.querySelector("main,[role=main]")) c.setAttribute("role", "main");
    /* дополнение 23.10 (проверка axe «region»): всё содержимое — внутри именованных областей страницы:
       цепочка «Вы здесь» — навигация; разделы вне основного содержимого (новости, языки) — области по своему заголовку */
    var LM = "main,[role=main],[role=region],nav,[role=navigation],header,footer,aside,[role=complementary],[role=banner],[role=contentinfo],[role=search]";
    var YOU = { ru: "Вы здесь", en: "You are here", hy: "Դուք այստեղ եք", fr: "Vous êtes ici", de: "Sie sind hier" }[(d.documentElement.lang || "").slice(0, 2)] || "You are here";
    [].forEach.call(d.querySelectorAll(".crumbs"), function (n) {
      if (n.closest(LM)) return;
      n.setAttribute("role", "navigation");
      if (!n.hasAttribute("aria-label")) n.setAttribute("aria-label", YOU);
    });
    [].forEach.call(d.querySelectorAll("section"), function (s, i) {
      if (s.id === "content" || s.hasAttribute("role")) return;
      if (s.parentNode && s.parentNode.closest && s.parentNode.closest(LM)) return;
      var h = s.querySelector("h1,h2,h3");
      if (!h) return;
      if (!h.id) h.id = "rg-sec-" + i;
      s.setAttribute("role", "region");
      s.setAttribute("aria-labelledby", h.id);
    });
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", markMain);
  else markMain();
})();

/* ── 24.10.2026, Claude «Маисовый полоз цена» (ответы Рудольфа 02:05; спецификация AutoClaw P-1024-0123-01, пункты 2.1 и 2.3):
   1) ВЫДВИЖНОЕ МЕНЮ НА ТЕЛЕФОНЕ (до 640 точек): кнопка «☰ Меню» на месте строки меню; панель слева с группами «Главное» (ссылки
      верхнего уровня меню), «Учиться», «Находить», «Искусство и культура» (из раскрывающихся групп меню — названия на языке
      страницы, поэтому всегда совпадают с меню), внизу — языки и запись на консультацию; текущая страница — золотом; закрытие —
      ✕, щелчок мимо панели, Esc; фокус ходит внутри панели; при «меньше движения» — без сдвига. На компьютере кнопки нет.
   2) ЗАПИСЬ НА БЕСПЛАТНУЮ ZOOM-КОНСУЛЬТАЦИЮ (страница «Консультанты», блок #zoom, div.rg-slots): свободное время на 7 дней —
      ежедневно 9:00–21:00 по Еревану (UTC+4 круглый год), по 30 минут, не раньше чем через час; рядом — время посетителя, если
      у него другой часовой пояс; время — ссылка на WhatsApp с готовым сообщением на языке страницы. Подтверждает дом вручную,
      как раньше; чужих служб и доступа к Zoom нет. Без JavaScript остаётся прежняя кнопка WhatsApp. ── */
(function () {
  var doc = document;
  var L = (doc.documentElement.getAttribute('lang') || 'ru').slice(0, 2);
  var REDUCE = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // 1) выдвижное меню
  var DTA = {
    // 25.10.2026, слово Рудольфа 03:34: на телефоне не «Меню», а «Содержание» («мы не в ресторане»); переводы — Анри
    ru: { menu: 'Содержание', main: 'Содержание', close: 'Закрыть содержание', lang: 'Язык' },
    en: { menu: 'Contents', main: 'Contents', close: 'Close contents', lang: 'Language' },
    hy: { menu: 'Բովանդակություն', main: 'Բովանդակություն', close: 'Փակել բովանդակությունը', lang: 'Լեզու' },
    fr: { menu: 'Sommaire', main: 'Sommaire', close: 'Fermer le sommaire', lang: 'Langue' },
    de: { menu: 'Inhalt', main: 'Inhalt', close: 'Inhalt schließen', lang: 'Sprache' }
  };
  var DT = DTA[L] || DTA.ru;
  var nav = doc.querySelector('header.site nav.main');
  if (nav && !doc.querySelector('.rg-drawer-wrap')) {
    var btn = doc.createElement('button');
    btn.type = 'button';
    btn.className = 'rg-drawer-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'rg-drawer');
    btn.innerHTML = '<span aria-hidden="true">☰</span> ' + esc(DT.menu);
    nav.parentNode.insertBefore(btn, nav);
    var grp = function (title, links) {
      if (!links.length) return '';
      return '<section class="rg-dg"><h3>' + esc(title) + '</h3><ul>' + links.map(function (a) {
        return '<li><a href="' + esc(a.getAttribute('href')) + '"' + (a.hasAttribute('aria-current') ? ' aria-current="page"' : '') + '>' +
          esc(a.textContent.trim()) + '</a></li>';
      }).join('') + '</ul></section>';
    };
    // 24.10.2026, 15:50 (слово Рудольфа 14:50): панель повторяет порядок меню — пункты верхнего уровня и группы по очереди
    // (Главное · Религия · Наука · Культура · Консультанты · О нас); первый пункт («Главное») крупнее (стиль 3.43)
    var topLink = function (a, cls) {
      return '<p class="rg-dg-top' + (cls ? ' ' + cls : '') + '"><a href="' + esc(a.getAttribute('href')) + '"' +
        (a.hasAttribute('aria-current') ? ' aria-current="page"' : '') + '>' + esc(a.textContent.trim()) + '</a></p>';
    };
    var html = '';
    [].forEach.call(nav.children, function (n, i) {
      if (n.tagName === 'A') html += topLink(n, i === 0 ? 'rg-dg-home' : '');
      else if (n.tagName === 'DETAILS') {
        var s = n.querySelector('summary');
        html += grp(s ? s.textContent.trim() : '', [].slice.call(n.querySelectorAll('.more-list a')));
      }
    });
    var lg = doc.querySelector('header.site .lang');
    if (lg) {
      html += '<section class="rg-dg rg-dg-lang"><h3>' + esc(DT.lang) + '</h3><p>' + [].map.call(lg.querySelectorAll('a,b'), function (x) {
        return x.tagName === 'B' ? '<b aria-current="true">' + esc(x.textContent) + '</b>' :
          '<a href="' + esc(x.getAttribute('href')) + '" hreflang="' + esc(x.getAttribute('hreflang') || '') + '">' + esc(x.textContent) + '</a>';
      }).join('') + '</p></section>';
    }
    var cta = doc.querySelector('header.site .cta-zoom');
    if (cta) html += '<p class="rg-dg-cta"><a href="' + esc(cta.getAttribute('href')) + '">' + esc(cta.textContent.trim()) + '</a></p>';
    var wrap = doc.createElement('div');
    wrap.className = 'rg-drawer-wrap';
    wrap.hidden = true;
    wrap.innerHTML = '<div class="rg-drawer-back"></div><div class="rg-drawer" id="rg-drawer" role="dialog" aria-modal="true" aria-label="' +
      esc(DT.menu) + '" tabindex="-1"><div class="rg-drawer-head"><b>' + esc(DT.menu) + '</b><button type="button" class="rg-drawer-x" aria-label="' +
      esc(DT.close) + '">✕</button></div><nav class="rg-drawer-body" aria-label="' + esc(DT.menu) + '">' + html + '</nav></div>';
    doc.body.appendChild(wrap);
    var panel = wrap.querySelector('.rg-drawer');
    var openD = function () {
      wrap.hidden = false;
      doc.body.classList.add('rg-drawer-on');
      btn.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () { wrap.classList.add('open'); try { panel.focus({ preventScroll: true }); } catch (e) { panel.focus(); } });
    };
    var closeD = function (back) {
      if (wrap.hidden) return;
      wrap.classList.remove('open');
      doc.body.classList.remove('rg-drawer-on');
      btn.setAttribute('aria-expanded', 'false');
      setTimeout(function () { wrap.hidden = true; }, REDUCE ? 0 : 220);
      if (back !== false) { try { btn.focus({ preventScroll: true }); } catch (e) { btn.focus(); } }
    };
    btn.addEventListener('click', openD);
    wrap.querySelector('.rg-drawer-x').addEventListener('click', function () { closeD(); });
    wrap.querySelector('.rg-drawer-back').addEventListener('click', function () { closeD(); });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeD(); return; }
      if (e.key !== 'Tab') return;
      var f = [].filter.call(panel.querySelectorAll('a[href],button'), function (n) { return n.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && (doc.activeElement === f[0] || doc.activeElement === panel)) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && doc.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    panel.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a[href]')) closeD(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 640) closeD(false); });
  }

  // 2) запись по свободному времени
  var box = doc.querySelector('.rg-slots');
  if (!box) return;
  var BTA = {
    ru: { title: 'Свободное время — по Еревану', hint: 'Нажмите на время — откроется WhatsApp с готовым сообщением; подтвердим запись и пришлём ссылку на Zoom.', yours: 'у вас', today: 'Сегодня', tomorrow: 'Завтра', none: 'На этот день свободного времени уже нет — выберите другой день.', msg: 'Здравствуйте! Хочу записаться на бесплатную Zoom-консультацию (ReferenceGuides): {d}, {t} по Еревану. Направление: ...', loc: 'ru-RU' },
    en: { title: 'Free times — Yerevan time', hint: 'Tap a time — WhatsApp opens with a ready message; we will confirm and send you a Zoom link.', yours: 'your time', today: 'Today', tomorrow: 'Tomorrow', none: 'No free times left on this day — please choose another day.', msg: 'Hello! I would like to book a free Zoom consultation (ReferenceGuides): {d}, {t} Yerevan time. Area: ...', loc: 'en-GB' },
    hy: { title: 'Ազատ ժամեր՝ Երևանի ժամով', hint: 'Սեղմեք ժամի վրա՝ կբացվի WhatsApp-ը պատրաստի հաղորդագրությամբ. կհաստատենք գրանցումը և կուղարկենք Zoom-ի հղումը։', yours: 'ձեր ժամով', today: 'Այսօր', tomorrow: 'Վաղը', none: 'Այս օրվա համար ազատ ժամեր այլևս չկան՝ ընտրեք մեկ այլ օր։', msg: 'Բարև Ձեզ։ Կցանկանայի գրանցվել անվճար Zoom-խորհրդատվության (ReferenceGuides)՝ {d}, ժամը {t} Երևանի ժամով։ Ոլորտ՝ ...', loc: 'hy-AM' },
    fr: { title: 'Créneaux libres — heure d’Erevan', hint: 'Touchez un horaire : WhatsApp s’ouvre avec un message prêt ; nous confirmerons et vous enverrons le lien Zoom.', yours: 'chez vous', today: 'Aujourd’hui', tomorrow: 'Demain', none: 'Plus de créneau libre ce jour-là — choisissez un autre jour.', msg: 'Bonjour ! Je souhaite réserver une consultation Zoom gratuite (ReferenceGuides) : {d}, {t}, heure d’Erevan. Domaine : ...', loc: 'fr-FR' },
    de: { title: 'Freie Termine – Jerewaner Zeit', hint: 'Tippen Sie auf eine Uhrzeit – WhatsApp öffnet sich mit einer fertigen Nachricht; wir bestätigen und schicken Ihnen den Zoom-Link.', yours: 'bei Ihnen', today: 'Heute', tomorrow: 'Morgen', none: 'An diesem Tag sind keine Termine mehr frei – bitte wählen Sie einen anderen Tag.', msg: 'Hallo! Ich möchte eine kostenlose Zoom-Beratung buchen (ReferenceGuides): {d}, {t} Uhr Jerewaner Zeit. Bereich: ...', loc: 'de-DE' }
  };
  var BT = BTA[L] || BTA.ru;
  var OFF = 4 * 3600e3, FROM = 9 * 60, TO = 21 * 60, STEP = 30, DAYS = 7, LEAD = 3600e3;
  var NUM = (box.getAttribute('data-wa') || '37499117067').replace(/\D/g, '');
  var now = Date.now(), ye = new Date(now + OFF);
  var y0 = Date.UTC(ye.getUTCFullYear(), ye.getUTCMonth(), ye.getUTCDate()) - OFF;   // полночь по Еревану (мс UTC)
  var sameTz = new Date(now).getTimezoneOffset() === -240;
  var fmt = function (t, o) {
    try { return new Intl.DateTimeFormat(BT.loc, o).format(new Date(t)); }
    catch (e) { var o2 = {}; for (var k in o) if (k !== 'timeZone') o2[k] = o[k]; return new Intl.DateTimeFormat(BT.loc, o2).format(new Date(t)); }
  };
  var hh = function (m) { return ('0' + (m / 60 | 0)).slice(-2) + ':' + ('0' + m % 60).slice(-2); };
  var days = [];
  for (var i = 0; i < DAYS; i++) {
    var d0 = y0 + i * 864e5, sl = [];
    for (var m = FROM; m < TO; m += STEP) { var t = d0 + m * 6e4; if (t >= now + LEAD) sl.push([t, m]); }
    days.push([d0, sl]);
  }
  var cur = days[0][1].length ? 0 : 1;
  // армянские названия дней и месяцев — свои: не во всех браузерах есть армянский язык дат (проверка 24.10 — Chromium
  // показывал дату по-русски); полдень по Еревану + 4 часа и getUTC* дают дату по Еревану в любом поясе посетителя
  var HYW = ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'];
  var HYWS = ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուր', 'շբթ'];
  var HYM = ['հունվարի', 'փետրվարի', 'մարտի', 'ապրիլի', 'մայիսի', 'հունիսի', 'հուլիսի', 'օգոստոսի', 'սեպտեմբերի', 'հոկտեմբերի', 'նոյեմբերի', 'դեկտեմբերի'];
  var HYMS = ['հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'];
  var dayText = function (noon, long) {
    if (L === 'hy') {
      var q = new Date(noon + OFF);
      return (long ? HYW : HYWS)[q.getUTCDay()] + ', ' + q.getUTCDate() + ' ' + (long ? HYM : HYMS)[q.getUTCMonth()];
    }
    return fmt(noon, long ? { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Yerevan' } :
      { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Asia/Yerevan' });
  };
  // время посетителя — всегда 24 часа, как на сайте («с 9:00 до 21:00»), без зависимости от языка браузера
  var localHM = function (t) { var q = new Date(t); return hh(q.getHours() * 60 + q.getMinutes()); };
  var dayName = function (k, d) {
    var w = dayText(d + 432e5, false);
    return k === 0 ? BT.today + ', ' + w : k === 1 ? BT.tomorrow + ', ' + w : w;
  };
  var render = function () {
    var h = '<h3 class="rg-slots-t">' + esc(BT.title) + '</h3><div class="rg-days">';
    days.forEach(function (d, k) {
      h += '<button type="button" class="rg-day" aria-pressed="' + (k === cur) + '" data-i="' + k + '">' + esc(dayName(k, d[0])) + '</button>';
    });
    h += '</div>';
    var sl2 = days[cur][1];
    if (!sl2.length) {
      h += '<p class="note">' + esc(BT.none) + '</p>';
    } else {
      var dl = dayText(days[cur][0] + 432e5, true);
      h += '<div class="rg-times">';
      sl2.forEach(function (s) {
        var tY = hh(s[1]);
        var txt = BT.msg.replace('{d}', dl).replace('{t}', tY);
        h += '<a class="rg-time" target="_blank" rel="noopener" href="https://wa.me/' + NUM + '?text=' + encodeURIComponent(txt) + '">' + tY +
          (sameTz ? '' : '<small>' + esc(BT.yours) + ' ' + esc(localHM(s[0])) + '</small>') + '</a>';
      });
      h += '</div>';
    }
    h += '<p class="note rg-slots-h">' + esc(BT.hint) + '</p>';
    box.innerHTML = h;
  };
  render();
  box.hidden = false;
  box.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.rg-day');
    if (!b) return;
    cur = +b.getAttribute('data-i');
    render();
    var nb = box.querySelector('.rg-day[data-i="' + cur + '"]');
    if (nb) nb.focus();
  });
})();

/* ── 24.10.2026, Claude «Маисовый полоз цена» (слово Рудольфа 15:52; его ответы 17:2x: страна — «по адресу в интернете»,
   в плитке — «доли религий и организации»): страница «Религии стран мира» — плитка «Ваша страна» в самом верху: доли религий
   страны (Pew Research Center, 2020) и организации этой страны из нашего списка (мировые центры — жирным).
   Страну сообщает Cloudflare по адресу подключения (/cdn-cgi/trace на referenceguides.pages.dev — это тот же сайт; адрес
   никуда не отправляется и не сохраняется); если он недоступен (зеркало в России, блокировка) — страна по часовому поясу
   устройства. Проверка: …/religion.html?cc=BG — плитка для Болгарии. Данные — JSON #rg-here-data (tools\make_religion_page.py). ── */
(function () {
  var doc = document, box = doc.getElementById('rg-here'), src = doc.getElementById('rg-here-data');
  if (!box || !src) return;
  var D;
  try { D = JSON.parse(src.textContent); } catch (e) { return; }
  var L = (doc.documentElement.getAttribute('lang') || 'ru').slice(0, 2);
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pct(v) {
    try { return new Intl.NumberFormat(L, { style: 'percent', maximumFractionDigits: v < 1 ? 2 : 1 }).format(v / 100); } catch (e) { return v + ' %'; }
  }
  function num(n) { try { return new Intl.NumberFormat(L).format(n); } catch (e) { return String(n); } }   // 2 793 042
  function big(n) {                                    // от миллиона — словами, как числа верующих на странице: 2,96 млн; 1,4 млрд
    if (n < 1e6) return num(n);
    var b = n >= 1e9, v = n / (b ? 1e9 : 1e6), u = ((D.ui.units || {})[b ? 'b' : 'm']) || '{n}', s;
    try { s = new Intl.NumberFormat(L, { maximumFractionDigits: v < 10 ? 2 : 1 }).format(v); } catch (e) { s = String(Math.round(v * 10) / 10); }
    if (Array.isArray(u)) u = (L === 'fr' ? v < 2 : v === 1) ? u[0] : u[1];
    return u.replace('{n}', s);
  }
  function rnd(n) { if (n >= 1e6 || n < 100) return Math.round(n); var k = Math.pow(10, Math.floor(Math.log10(n)) - 1); return Math.round(n / k) * k; }
  function srcl(y, k) { var t = (D.ui.src || {})[k] || ''; return y ? t.replace('{y}', y) : t.replace(/,? ?\{y\}/, ''); }
  // 25.10.2026 (слово Рудольфа 02:38, ответ «Числа и конфессии»): det — население и церкви и общины страны из religion-detail.json
  function show(cc, how, det) {
    var c = D.c[cc];
    if (!c) return;
    var P = det && det.p;
    var h = '<h2>' + esc(D.ui.title.replace('{c}', c[0])) + '</h2>';
    if (P) h += '<p class="rg-here-pop">' + esc(D.ui.pop.replace('{n}', big(P))) + '</p>';
    if (c[1]) {
      var g = c[1].map(function (v, i) { return [v, i]; }).filter(function (x) { return x[0] >= 1; })
        .sort(function (a, b) { return b[0] - a[0]; });
      if (g.length) {
        h += '<p class="rg-here-shares">' + esc(D.ui.shares) + ' ' + g.map(function (x) {
          var k = D.gk[x[1]], t = esc(D.g[x[1]]) + ' — ' + esc(pct(x[0])) +
            (P ? ' (' + esc(D.ui.approx.replace('{n}', big(rnd(P * x[0] / 100)))) + ')' : '');
          return k ? '<a href="#rel-' + k + '">' + t + '</a>' : t;
        }).join(' · ') + '</p>';
      }
    }
    var dl = (det && det.d) || [];
    if (dl.length) {                                     // церкви и общины страны; один источник — в заголовке, разные — у каждой строки
      var same = dl.every(function (r) { return r[3] === dl[0][3] && r[4] === dl[0][4]; });
      h += '<p class="rg-here-h">' + esc(same ? D.ui.conf.replace('{s}', srcl(dl[0][3], dl[0][4])) : D.ui.conf0) + '</p><ul class="rg-here-conf">' +
        dl.map(function (r) {
          var t = esc(r[0]) + (r[1] != null ? ' — ' + esc(pct(r[1])) : '') + (r[2] != null ? ' (' + esc(num(r[2])) + ')' : '');
          return '<li>' + t + (same ? '' : ' <span class="note">' + esc(srcl(r[3], r[4])) + '</span>') + '</li>';
        }).join('') + '</ul>';
    }
    var o = D.o[cc] || [];
    if (o.length) {
      h += '<p class="rg-here-h">' + esc(D.ui.orgs) + '</p><ul class="rg-here-orgs">' + o.map(function (r) {
        return '<li' + (r[2] ? ' class="w"' : '') + '><a href="' + esc(r[1]) + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a></li>';
      }).join('') + '</ul>';
    } else {
      h += '<p class="rg-here-none">' + esc(D.ui.none).replace('WhatsApp', '<a href="' + esc(D.wa) + '" target="_blank" rel="noopener">WhatsApp</a>') + '</p>';
    }
    if (how === 'ip') h += '<p class="note">' + esc(D.ui.how) + '</p>';
    box.innerHTML = h;
    box.hidden = false;
  }
  function byTz() {
    try { return D.tz[Intl.DateTimeFormat().resolvedOptions().timeZone] || null; } catch (e) { return null; }
  }
  function detail(cc, how) {                           // население и церкви страны — отдельным файлом, только для своей страны
    if (!window.fetch || !D.c[cc]) return;
    fetch('religion-detail.json', { credentials: 'omit' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (j && ((j.p && j.p[cc]) || (j.d && j.d[cc]))) show(cc, how, { p: j.p && j.p[cc], d: j.d && j.d[cc] });
    }).catch(function () {});
  }
  var force = /[?&]cc=([A-Za-z]{2})(?:&|$)/.exec(location.search);
  if (force) { show(force[1].toUpperCase(), 'test'); detail(force[1].toUpperCase(), 'test'); return; }
  var done = false;
  function fin(cc, how) { if (done) return; done = true; if (cc) { show(cc, how); detail(cc, how); } }
  var timer = setTimeout(function () { fin(byTz(), 'tz'); }, 2500);
  if (!window.fetch) { clearTimeout(timer); fin(byTz(), 'tz'); return; }
  var url = /\.pages\.dev$/.test(location.hostname) ? '/cdn-cgi/trace' : 'https://referenceguides.pages.dev/cdn-cgi/trace';
  fetch(url, { cache: 'no-store', credentials: 'omit' }).then(function (r) { return r.ok ? r.text() : ''; }).then(function (t) {
    clearTimeout(timer);
    var m = /(?:^|\n)loc=([A-Z]{2})/.exec(t || ''), cc = m && m[1] !== 'XX' && m[1] !== 'T1' ? m[1] : null;
    if (cc && D.c[cc]) fin(cc, 'ip'); else fin(byTz(), 'tz');
  }).catch(function () { clearTimeout(timer); fin(byTz(), 'tz'); });
})();
