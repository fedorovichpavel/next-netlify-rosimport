import Head from "next/head";
import App from "../components/App";

const konsolidacia_gruza = () => {
  return (
    <App navLight="gruz">
      <Head>
        <title>Консолидация груза</title>
        <meta
          name="description"
          content="Объединение разрозненного груза от нескольких поставщиков на один склад, для дальнейшей транспортировки до места назначения"
        />
        <meta property="og:title" content="Консолидация груза" />
        <meta
          property="og:description"
          content="Объединение разрозненного груза от нескольких поставщиков на один склад, для дальнейшей транспортировки до места назначения"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/konsolidacia_gruza"
        />
        <link rel="canonical" href="https://rosimport.ru/konsolidacia_gruza" />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner-konsolidacia">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="text-uppercase text-center">
                  <p
                    className="carousel-subtitle-v5 border-top-bottom pt-40 pb-10 text-red-site"
                    data-animation="animated fadeInDown"
                  >
                    Узнайте цену вашей доставки прямо сейчас
                  </p>
                  <button
                    onClick={() => (window.location.href = "contacts")}
                    className="btn btn-primary p-10 mt-20"
                  >
                    <i className="icon-ok"></i>Отправить запрос по цене
                  </button>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="text-uppercase text-center">
                  <h4 className="pt-40 pb-10 text-red-site">8-800-2500-876 </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Международные грузоперевозки</a>
            </li>
            <li>Услуги</li>
            <li className="active">Консолидация груза</li>
          </ul>

          <div className="row">
            <div className="col-md-4">
              <div className="link-group">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#polza_konsolidacii_gruza"
                      className="scroll link-group-item link-butt"
                    >
                      Прямая польза от консолидации груза
                    </a>
                  </li>
                  <li>
                    <a
                      href="#kak_postupaet_gruz_na_sklad"
                      className="scroll link-group-item link-butt"
                    >
                      Что происходит с грузом на складе
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="link-group">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#konsolidacionnaya_proverka_gruza"
                      className="scroll link-group-item link-butt"
                    >
                      Консолидационная проверка груза
                    </a>
                  </li>
                  <li>
                    <a
                      href="#chto_takoe_konsolidacia_gruzov"
                      className="scroll link-group-item link-butt"
                    >
                      Что такое консолидация грузов?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="link-group">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#preimushchestva_konsolidacii"
                      className="scroll link-group-item link-butt"
                    >
                      Каковы преимущества консолидации?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#konsolidacia_tovarov_v_oshchii_gruz"
                      className="scroll link-group-item link-butt"
                    >
                      Пример груза для консолидации
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Консолидация груза
                  </h1>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div
                      id="polza_konsolidacii_gruza"
                      style={{
                        display: "block",
                        marginBottom: "100px",
                        marginTop: "-90px",
                      }}
                    ></div>
                    <h3 className="text-center font-20 pb-10">
                      Прямая польза от консолидации груза
                    </h3>
                    <p>
                      Вы будете всегда сталкиваться с возникающими проблемами
                      при{" "}
                      <a
                        href="/#uslugi_po_mezhdunarodnoy_perevozki_gruzov"
                        title="Услуги по международной перевозке грузов"
                      >
                        перевозках импортного товара
                      </a>
                      . Логистика - живой организм, она дышит и меняется
                      сообразно течению времени. С введением новых транспортных
                      суперскоростных средств будут меняться маршруты и
                      складское обеспечение.{" "}
                    </p>
                    <p>
                      Например, что делать, если вы не хотите терять деньги на
                      тех отправлениях, в которых товар не заполняет весь
                      контейнер? Читайте ниже: Об экономии, о консолидации.
                      РОСИМПОРТ рассказывает подробно, как мы работаем!
                    </p>
                    <div className="line-dashed"></div>
                    <p>
                      Здесь вы узнаете всё о консолидации и{" "}
                      <a href="dostavka_sbornyh_gruzov">сборных грузах</a>.
                      Каким образом консолидация позволяет сэкономить?{" "}
                    </p>
                  </div>
                  <div className="col-md-5">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Консолидация груза на складе"
                        className="fancybox-button"
                        href="img/konsolidacia_gruza_na_sklade.jpg"
                      >
                        <img
                          alt="Консолидация груза на складе"
                          src="img/konsolidacia_gruza_na_sklade_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Консолидация груза на наших складах
                  </h2>
                </div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Консолидация груза на нашем складе"
                    className="fancybox-button pull-right pl-10"
                    href="img/konsolidacia_gruza_na_nashem_sklade.jpg"
                  >
                    <img
                      alt="Консолидация груза на нашем складе"
                      src="img/konsolidacia_gruza_na_nashem_sklade_sm.jpg"
                      width="300"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Консолидация грузов - интеграция разрозненных товаров или
                  групп товаров в общий груз, для хранения на складе и
                  последующей отправке получателю в зафрахтованном транспортном
                  средстве. Такой груз называется консолидированным и будет
                  иметь несколько адресатов/получателей на выбранном
                  направлении.
                </p>
                <p className="content-text">
                  Иногда, понятие <strong>консолидированный груз</strong>{" "}
                  употребляется для товаров одного заказчика. Это происходит в
                  том случае, когда наш клиент просит задержать первую партию на
                  нашем складе в Китае (Урумчи, Иу, Пекин, Гуанчжоу) до
                  поступления следующих партий, для объединения их перед
                  отправкой.{" "}
                </p>
                <p className="content-text">
                  Пример: грузовики с товарами от одного поставщика могут
                  прибыть на наш склад с определенной задержкой. И чтобы весь
                  груз ушел в Россию одной партией, применяется консолидация
                  груза{" "}
                  <a href="skladskie_uslugi" title="Складские услуги">
                    на нашем складе
                  </a>
                  . Мы ждем, пока весь товар прибудет на склад, сообщаем
                  клиенту, что весь его груз доставлен и начинаем обработку и
                  подготовку консолидационного груза{" "}
                  <a
                    title="Доставка грузов из Китая"
                    href="dostavka_gruzov_iz_kitaya"
                  >
                    {" "}
                    к отправке из Китая
                  </a>
                  .
                </p>
                <blockquote className="yellow mt-20">
                  <div className="pb-20">
                    <div className="pull-left pr-30">
                      <img
                        src="img/sotrudnik_margarita_mihailova.jpg"
                        className="blockquote-border"
                        width="150"
                        alt="комментирует Начальник отдела логистики и ТО компании РОСИМПОРТ - Маргарита Михайлова"
                      />
                    </div>
                    <div className="font-14 text-center">
                      Начальник отдела логистики и ТО компании РОСИМПОРТ -
                      Маргарита Михайлова:
                    </div>
                    <h3 className="text-center">
                      Является ли консолидированная доставка лучшим вариантом?
                    </h3>
                    <p className="font-16 pt-20">
                      Консолидация груза - это дешевый (экономически
                      эффективный) и удобный способ перевозки грузов, не
                      требующий длительного ожидания загрузки всего контейнера,
                      грузового места или трюма. Этот тип доставки товаров
                      идеально подходит для тех, кто перевозит палетированные
                      грузы.
                    </p>
                  </div>
                </blockquote>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Объединение пакетов и коробочек в консолидационный груз"
                    className="fancybox-button pull-right pl-10"
                    href="img/obiedinenie_paketov_i_korobochek.jpg"
                  >
                    <img
                      alt="Объединение пакетов и коробочек в консолидационный груз"
                      src="img/obiedinenie_paketov_i_korobochek_sm.jpg"
                      width="600"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Если вам надо перевезти совсем маленький груз, то его
                  отдельная отправка влетит в копеечку. В перевозку войдет цена
                  за контракт, накладные и прочие бумаги. Но, вы не одиноки! У
                  нас есть достаточное количество желающих отправить небольшие
                  грузы и мы объединяем, все эти небольшие пакеты и коробочки с
                  товарами, в один консолидационный груз, а значит делим все
                  расходы по хранению, доставке и бумажной волоките таможенного
                  оформления, на всех долевых участников{" "}
                  <a
                    href="dostavka_gruzov_iz_kitaya#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                    title="сборный контейнер (сборный груз)"
                  >
                    сборного груза
                  </a>
                  . Сюда же входит погрузка на терминалах в Китае и в Москве.
                </p>
                <p className="content-text">
                  Но, чаще всего, консолидация груза происходит от разных
                  поставщиков для отправки в одном грузовом транспорте. Груз
                  может приходить к нам на склад очень мелкими партиями, вплоть
                  до того, что курьер приносит небольшой пакет для отправки.
                  Мелкие пакеты и небольшие отправления сортируются и
                  укладываются в один ящик или коробку.{" "}
                </p>
                <p className="content-text">
                  {" "}
                  Ящики, коробки, большие и маленькие, регистрируются нами на
                  складе и после отчета клиенту о том, что товар соответствует
                  указанным данным, мы определяем место груза на палете,{" "}
                  <a
                    href="poddony_palety_dlia_gruzovyh_perevozok"
                    title="Поддоны и палеты"
                  >
                    место палеты в контейнере
                  </a>{" "}
                  или грузовом отсеке транспортного средства. Затем оформляем
                  документы и отправляем груз из Китая в Россию.
                </p>
                <p className="content-text">
                  {" "}
                  Такая перевозка выгодна именно для мелких грузов. Объединяясь
                  в один общий груз, клиенты платят "скидываясь" на расходы,
                  которые будут одинаковы для маленьких пакетов и одного
                  большого ящика. К тому же, перевозка становится выгодной,
                  когда вес большой, а объем маленький.
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-center font-20 font-black pb-10 pt-5">
                  Консолидация груза от одного поставщика может происходить
                  таким образом:
                </h4>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Консолидация груза от одного поставщика"
                    className="fancybox-button pull-left pr-10"
                    href="img/konsolidacia_gruza_ot_odnogo_postavshchika.jpg"
                  >
                    <img
                      alt="Консолидация груза от одного поставщика"
                      src="img/konsolidacia_gruza_ot_odnogo_postavshchika_sm.jpg"
                      width="400"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  {" "}
                  Вы закупаете товар на{" "}
                  <a
                    href="tovary_iz_kitaya"
                    title="Товары из Китая без посредников"
                  >
                    интернет площадках ТаоБао, Алиэкспресс, других оптовых
                    площадках
                  </a>{" "}
                  , китайских рынках или розничных магазинах. Этот товар из
                  вышеописанных торговых точек поступает на наш склад в Китае и
                  мы консолидируем все ваши заказы в одно грузовое место (по
                  возможности). Мы не только обработаем ваш груз, но откроем его
                  для проверки внешнего вида и надлежащего качества и отправим
                  вам фото или видео груза. Если будут выявлены недостатки по
                  качеству и внешнему виду товара, то по вашему требованию, мы
                  поменяем некачественный товар у этого же{" "}
                  <a
                    href="/#vyvoz_gruza_ot_postavshchika"
                    title="Вывоз груза от поставщика"
                  >
                    поставщика
                  </a>
                  .
                </p>
                <p className="content-text">
                  {" "}
                  Если ваши покупки в китайских интернет-магазинах затянутся на
                  длительное время. Не переживайте. Под ваш поступающий груз
                  будет выделено место на складских стеллажах, где будет
                  консолидироваться только ваш товар.{" "}
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-center font-20 font-black pb-10 pt-5">
                  Порядок наших действий при консолидации груза
                </h4>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Порядок наших действий при консолидации груза"
                    className="fancybox-button pull-left pr-10"
                    href="img/poriadok_deystvii_pri_konsolidacii_gruza.jpg"
                  >
                    <img
                      alt="Порядок наших действий при консолидации груза"
                      src="img/poriadok_deystvii_pri_konsolidacii_gruza_sm.jpg"
                      width="400"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  С нами связывается ваш поставщик и информирует нас о том, что
                  груз отправлен на наш склад, сообщает трек-номер посылки и
                  перечисляет содержимое. Мы встречаем этот груз на складе, при
                  регистрации{" "}
                  <a href="ves_gruza" title="Вес груза и грузовые классы">
                    замеряем объем и вес
                  </a>
                  . Распаковываем для составления фото- и видеоотчета. Мы делаем
                  документы на груз, в которых указываем количество и наличие
                  повреждений или дефектов.
                </p>
                <p className="content-text">
                  Этот товар укладывается на стеллаж, на ваше забронированное
                  место. Таким же образом мы встречаем следующие поступающие
                  товары на ваше имя. Далее, вы сами определяете, когда надо
                  будет готовить груз к отправке, а мы поможем вам с
                  группировкой и сортировкой товара перед упаковкой и укладкой
                  на палету. Получилась консолидированная партия груза для
                  одного клиента.
                </p>
                <p className="content-text">
                  Так происходит локальная консолидация для одного клиента. Это
                  может быть одна или несколько палет или объемные ящики.
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-center font-20 font-black pb-10 pt-5">
                  Консолидация нескольких грузов от разных клиентов
                </h4>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Сортировка по маркировке груза"
                    className="fancybox-button pull-left pr-10"
                    href="img/sortirovka_po_markirovke_gruza.jpg"
                  >
                    <img
                      alt="Сортировка по маркировке груза"
                      src="img/sortirovka_po_markirovke_gruza_sm.jpg"
                      width="400"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Далее следует консолидация нескольких грузов разных клиентов,
                  а именно, объединение небольших грузов в один, более ёмкий. То
                  есть, из готовых и упакованных палет с грузом, уже можно
                  составлять карту размещения в{" "}
                  <a title="Типы и размеры контейнеров" href="konteinery">
                    морском контейнере
                  </a>
                  ,{" "}
                  <a
                    title="Автомобильная доставка грузов"
                    href="avtomobilnaya_dostavka_gruzov_iz_kitaya"
                  >
                    грузовом отсеке автомобиля
                  </a>{" "}
                  или{" "}
                  <a
                    title="Авиаперевозка грузов из Китая"
                    href="aviaperevozka_gruzov_iz_kitaya"
                  >
                    авиалайнера
                  </a>
                  .
                </p>
                <p className="content-text">
                  Когда ваш консолидационный контейнер прибывает на наш склад в
                  Москве, происходит разбор груза по категориям. Группы товаров
                  сортируются по владельцу/получателю. Мы проверяем вес,
                  сохранность упаковки и сообщаем клиенту, что груз прибыл в
                  надлежащем виде. Сортировка происходит по{" "}
                  <a
                    href="markirovka_tovara"
                    title="Упаковка и маркировка товара"
                  >
                    маркировке нанесенной на ящики и коробки
                  </a>{" "}
                  и выбранные грузы отправляются по адресу в России или Ближнего
                  Зарубежья.{" "}
                </p>
                <br />
                <ul className="list list-unstyled mt-30">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Мы принимаем{" "}
                    <a
                      title="Доставка грузов из Китая"
                      href="dostavka_gruzov_iz_kitaya"
                    >
                      грузы для доставки из Китая
                    </a>
                    : Иу, Гуанчжоу Пекин, Урумчи.
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Бесплатное хранение
                    1 месяц.
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Максимальный срок
                    хранения на консолидационном складе в Китае - отсутствует.
                    Оплата хранения по стандартному тарифу.
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Не принимаются на
                    консолидацию опасные грузы.
                  </li>
                </ul>

                <div
                  id="kak_postupaet_gruz_na_sklad"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h3 className="text-center font-17 font-black pt-5">
                    Как поступает груз на консолидационный склад и что с ним
                    происходит
                  </h3>
                </div>
                <div className="row mb-10">
                  <div className="col-md-7">
                    <p className="pt-10">
                      Когда приходит груз от поставщика на наш логистический
                      (консолидационный) склад, мы проверяем содержание товара
                      по упаковочному листу, прилагающемуся к грузу.
                    </p>
                    <p>
                      Вскрываем упаковку и смотрим груз на наличие повреждений
                      при перевозке от поставщика (по Китаю). Мы бережно
                      открываем упаковку и осматриваем содержимое коробок и
                      ящиков.{" "}
                    </p>
                    <p>
                      Осмотреть груз мы обязаны: мебель светильники, стекло,
                      жидкости в таре. Мы документируем повреждения(если есть) и
                      фотографируем товар для фиксации качества товара
                      прибывшего к нам на склад.
                    </p>
                    <p>
                      Следующий этап: Взвешивание и обмерка груза со всех
                      сторон. Если груз должен находиться в определенном
                      положении при перевозке и требует дополнительной упаковки,
                      то мы сообщаем клиенту о подобных вещах и с его одобрения
                      "доупаковываем" его груз.
                    </p>
                    <div className="line-dashed"></div>
                    <p>
                      Внимание ко всему, что происходит с грузом в Китае, это
                      наша работа. Главное: контроль и ещё раз контроль!
                    </p>
                  </div>
                  <div className="col-md-5">
                    <figure className="">
                      <img
                        alt="Консолидация груза на складе"
                        src="img/gruz_postupaet_na_konsolidacionnyi_sklad.jpg"
                        className="img-responsive pull-right"
                      />
                    </figure>
                  </div>
                </div>
                <blockquote>
                  <p className="text-black">
                    Есть реальные ситуации, в которых назревающие проблемы
                    решает консолидация груза.
                  </p>
                  <small> Коллектив компании РОСИМПОРТ</small>
                </blockquote>
                <div
                  id="konsolidacionnaya_proverka_gruza"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="row">
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane row fade active in">
                      <div className="col-md-4">
                        <img
                          alt="Консолидационная проверка груза"
                          src="img/konsolidacionnaya_proverka_gruza.jpg"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-8">
                        <h4 className="post-title text-center pb-10">
                          Консолидационная проверка груза
                        </h4>
                        <p>
                          <strong>Товарищи китайцы, ребята трудолюбивые</strong>
                          , но то ли от излишнего усердства, то ли от
                          переработки, они могут отправить вам СОВЕРШЕННО ДРУГОЙ
                          ГРУЗ!!! Были случаи, когда вместо заявленных бананов,
                          мы получали на своем складе лук. При вскрытии коробок
                          на нашем складе и сверке с накладными, часто
                          оказывалось, что отправили что-то не того размера,
                          иного количества или ужасного качества! Все партии шли
                          с хорошим качеством, а одна попадается из рук вон.{" "}
                        </p>
                        <p>
                          {" "}
                          Все это выясняется на проверке. Детальная проверка
                          товара у нас платная, но будет хуже, если вы
                          сэкономите и получите товар непроверенный, как описано
                          выше. Лук вместо бананов. Тогда ваши расходы на
                          обратное путешествие груза в Китай, могут быть
                          разорительными. Мы "отфасовываем" брак и возвращаем
                          его производителю в Китае, с заменой на товар
                          надлежащего качества.
                        </p>
                        <p>
                          {" "}
                          Мы всегда позаботимся о вашем грузе, это наша работа!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="img/podgotovka_k_otpravke.jpg"
                  alt="Подготовка к отправке"
                  width="150"
                  className="pull-left pr-10"
                />
                <p className="mt-0">
                  Иногда, китайские местные перевозчики перематывают груз
                  скотчем и заклеивают уже нанесённые заводом-изготовителем
                  маркировочные лейблы (стикеры) на ящики. Стикеры с указанием
                  верха и правой стороны, хрупкий груз, опасный груз.
                </p>
                <p>
                  Далее регистрация и подготовка к отправке. Подготовка к
                  транспортировке, это погрузка на палеты и визуальное
                  центрирование и укладка. Если груз уложить на палету
                  неправильно, то при дальнейшем движении груза морским фрахтом,
                  жд или автомобилем, раскачивание неправильно уложенного груза,
                  может привести к нарушению целостности всей упаковки на палете
                  и разрушиться от тряски и качки.
                </p>
                <div
                  id="chto_takoe_konsolidacia_gruzov"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h3 className="text-center font-17 font-black pt-5">
                    Коротко о консолидации груза
                  </h3>
                </div>
                <img
                  src="img/paleta_gruz.png"
                  alt="Палета и груз"
                  width="200"
                  className="pull-left"
                />
                <p>
                  Консолидация грузов - Объединение груза от одного или
                  нескольких грузоотправителей в один транспортный контейнер.
                  Консолидация, это когда грузоотправители могут оплачивать
                  оптовые тарифы, при одновременной отправке груза (полного
                  контейнера), а не отправляют отдельно много мелких грузов.
                </p>
                <p>
                  Консолидация является отличным вариантом для тех наших
                  клиентов, у которых есть только несколько поддонов товара или
                  небольших его партий, который они хотят упаковать и отправить
                  одним контейнером.
                </p>
                <p>
                  Иногда такой груз приходит от разных поставщиков и его
                  необходимо объединить, чтобы избежать более высоких платежей
                  при перевозке. Когда наш клиент решает объединить груз, то его
                  товар мы доставляем на наш консолидационный склад (В одном из
                  4-х городов в Китае: Пекин, Гуанчжоу, Урумчи, Иу). Товар
                  помещается на поддоны и грузится в один контейнер.
                </p>

                <div className="col-md-12 mt-30">
                  <div
                    id="preimushchestva_konsolidacii"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h4 className="text-center font-17 font-black pt-5 ">
                      Каковы преимущества консолидации?
                    </h4>
                  </div>
                  <p>
                    Экономическая эффективность консолидации объясняется
                    несколькими преимуществами.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa fa-caret-right"></i>Экономия денег,
                      получая оптовые тарифы.
                    </li>
                    <li>
                      <i className="fa fa fa-caret-right"></i>Объединение
                      заказов от отдельных поставщиков
                    </li>
                    <li>
                      <i className="fa fa fa-caret-right"></i>Отправка товара на
                      консолидационный склад в любое время
                    </li>
                    <li>
                      <i className="fa fa fa-caret-right"></i>Возможность делать
                      частые и небольшие заказы
                    </li>
                  </ul>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Экономичность консолидации"
                        className="fancybox-button"
                        href="img/economishnost_konsolidacii.jpg"
                      >
                        <img
                          alt="Экономичность консолидации"
                          src="img/economishnost_konsolidacii_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Экономичность консолидации
                      </h5>
                      <p>
                        Экономичность: многие грузоотправители считают, что это
                        самое важное преимущество консолидации. Если вы
                        используете только половину или две трети трейлера, вам,
                        как правило, все равно придется платить за все
                        пространство. Консолидация позволяет объединить
                        несколько отправлений LTL , которые перемещаются в одном
                        и том же районе, в одну полную загрузку грузового
                        автомобиля, при этом оплачивая только пространство,
                        занимаемое их грузом.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Снижение риска повреждения груза"
                        className="fancybox-button"
                        href="img/snizhenie_riska_povrezhdenia_gruza.jpg"
                      >
                        <img
                          alt="Снижение риска повреждения груза"
                          src="img/snizhenie_riska_povrezhdenia_gruza_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Снижение риска повреждения груза
                      </h5>
                      <p>
                        Снижение риска повреждения: даже при всех достижениях в
                        области грузовых перевозок, поврежденный груз все еще
                        остается проблемой. Консолидированная отгрузка
                        использует метод, который не только является более
                        экономически эффективным, но также значительно сокращает
                        время от времени повторную обработку продукта, поскольку
                        груз должен перемещаться только между отправителем,
                        центром консолидации и получателем / получателем. С
                        меньшим количеством точек соприкосновения риск
                        повреждения товаров значительно снижается.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Контроль качества приобретенного товара"
                        className="fancybox-button"
                        href="img/kontrol_kachestva_priobretennogo_tovara.jpg"
                      >
                        <img
                          alt="Контроль качества приобретенного товара"
                          src="img/kontrol_kachestva_priobretennogo_tovara_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Контроль качества приобретенного товара
                      </h5>
                      <p>
                        Улучшенный контроль качества. Еще одним преимуществом
                        консолидации является то, что она позволяет вам быстрее
                        контролировать свои товары. Если по какой-либо причине
                        система контроля качества предупреждает вас о наличии
                        проблемы с вашей перевозкой, и она уже была отправлена,
                        вам, как правило, придется ждать, пока поставщик
                        отправит замену, что означает, что сроки поставки
                        продукта теперь не в ваших руках. Консолидация позволяет
                        выполнять меры контроля качества, как только продукт
                        попадает на склад, что, в свою очередь, снижает
                        вероятность потери времени и контроля из-за
                        непредвиденных проблем с вашим заказом.
                      </p>
                    </div>
                  </div>
                  <div className="line-dashed"></div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <p>
                        <img
                          src="img/icon_konsolidacionnyi_gruz.png"
                          width="90px"
                          className="pull-left"
                          alt="Консолидационный груз"
                        />
                        Некоторые поставщики требуют минимальных заказов при
                        полной загрузке контейнера. Если такие крупные заказы не
                        нужны, то можно работать с этими поставщиками,
                        комбинируя отдельные небольшие поставки в один контейнер
                      </p>
                      <div className="line-dashed"></div>
                      <p>
                        <img
                          src="img/icon_sklad.png"
                          width="90px"
                          className="pull-left"
                          alt="Склад"
                        />
                        Комбинируя груз и отправляя его на консолидационный
                        склад, можно свободно манипулировать закупками и
                        денежными средствами, обеспечивая максимальную
                        эффективность и не теряя лишних денег на перевозке из
                        Китая в Россию.
                      </p>
                      <div className="line-dashed"></div>
                      <p>
                        <img
                          src="img/icon_tovar.png"
                          width="90px"
                          className="pull-left"
                          alt="Товар"
                        />
                        Для некоторых предприятий, консолидация может сохранить
                        в тайне личность вашего оптового поставщика или
                        производителя. Хотя информация о поставщиках не является
                        главным секретом, но теперь она может быть защищена,
                        когда товары доставляются с наших складов консолидации
                        напрямую.
                      </p>
                      <div className="line-dashed"></div>
                      <p>
                        <img
                          src="img/icon_telezhka_s_gruzom.png"
                          width="90px"
                          className="pull-left"
                          alt="Тележка с грузом"
                        />
                        Консолидация также обеспечивает большую гибкость
                        транспортировки, сроков доставки и запасов товаров в
                        вашем магазине. Груз, который хранится на
                        консолидированном складе и готов к отправке, всегда
                        лучше ситуации, когда груз не собран и не упакован у
                        поставщиков. Консолидация позволяет внедрять меры
                        контроля качества на доставленный груз.
                      </p>
                      <div className="line-dashed"></div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <img
                        alt="Экономия на доставке груза"
                        src="img/economia_na_dostavke_gruza.jpg"
                        className="img-responsive pull-right"
                      />
                    </div>
                  </div>
                  <div
                    id="konsolidacia_tovarov_v_oshchii_gruz"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h4 className="text-center font-17 font-black pt-5 ">
                      Пример: Консолидация товаров в общий груз
                    </h4>
                  </div>
                  <div className="table-responsive mt-0">
                    <table className="table table-bordered table-schedule mt-0">
                      <tbody>
                        <tr className="fon-blue-3 pt-20 pb-20">
                          <th>Наименование</th>
                          <th>Вес (кг.)</th>
                          <th>Объем (м3)</th>
                        </tr>
                        <tr>
                          <td className="text-center" colSpan="3">
                            Консолидация груза: Автомобильный полуприцеп (Фура):
                            80м3, 18-20 тонн
                          </td>
                        </tr>
                        <tr>
                          <td className="user-td">джинсы и футболки</td>
                          <td className="user-td">9800</td>
                          <td className="user-td">25,6</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            турмалиновые пояса, налокотники, наколенники
                          </td>
                          <td className="user-td">250</td>
                          <td className="user-td">1,8</td>
                        </tr>
                        <tr>
                          <td className="user-td">х/б ткань</td>
                          <td className="user-td">1275 </td>
                          <td className="user-td">7</td>
                        </tr>
                        <tr>
                          <td className="text-center" colSpan="3">
                            Консолидация груза: Автомобильный полуприцеп (Фура):
                            80м3, 18-20 тонн
                          </td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            светодиоды и светодиодные ленты
                          </td>
                          <td className="user-td">1900</td>
                          <td className="user-td">5,4</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            гарнитура (наушники, зарядки, микрофоны)
                          </td>
                          <td className="user-td">176</td>
                          <td className="user-td">2,1</td>
                        </tr>
                        <tr>
                          <td className="user-td">часы с GPS</td>
                          <td className="user-td">110</td>
                          <td className="user-td">1,7</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            очки виртуальной реальности
                          </td>
                          <td className="user-td">275</td>
                          <td className="user-td">5,8</td>
                        </tr>
                        <tr>
                          <td className="user-td">светильники</td>
                          <td className="user-td">6350</td>
                          <td className="user-td">10,1</td>
                        </tr>
                        <tr>
                          <td className="user-td">LED экран</td>
                          <td className="user-td">1160</td>
                          <td className="user-td">3,6</td>
                        </tr>
                        <tr>
                          <td className="user-td">прожекторы</td>
                          <td className="user-td">2470</td>
                          <td className="user-td">16.4</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            электро самокаты, моно колесо
                          </td>
                          <td className="user-td">4300</td>
                          <td className="user-td">24</td>
                        </tr>
                        <tr>
                          <td className="user-td">массажеры</td>
                          <td className="user-td">540</td>
                          <td className="user-td">3,1</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            чехлы для телефонов, защитные стекла, попсокеты
                          </td>
                          <td className="user-td">133</td>
                          <td className="user-td">1,2</td>
                        </tr>
                        <tr>
                          <td className="user-td">бижутерия</td>
                          <td className="user-td">865</td>
                          <td className="user-td">3,3</td>
                        </tr>
                        <tr>
                          <td className="user-td">весы напольные</td>
                          <td className="user-td">80</td>
                          <td className="user-td">2,6</td>
                        </tr>
                        <tr>
                          <td className="text-center" colSpan="3">
                            Консолидация груза: Автомобильный полуприцеп (Фура):
                            80м3, 18-20 тонн
                          </td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            автозапчасти (форсунки, гильзы, болты, распылители,
                            клапана, поршни, блок цилиндра
                          </td>
                          <td className="user-td">6840</td>
                          <td className="user-td">17,6</td>
                        </tr>
                        <tr>
                          <td className="user-td">трансформаторы</td>
                          <td className="user-td">806</td>
                          <td className="user-td">2,5</td>
                        </tr>
                        <tr>
                          <td className="user-td">клипсы автомобильные</td>
                          <td className="user-td">230</td>
                          <td className="user-td">1,6</td>
                        </tr>
                        <tr>
                          <td className="user-td">насос</td>
                          <td className="user-td">596</td>
                          <td className="user-td">2,8</td>
                        </tr>
                        <tr>
                          <td className="user-td">станок с чпу</td>
                          <td className="user-td">980</td>
                          <td className="user-td">3,4</td>
                        </tr>
                        <tr>
                          <td className="user-td">пресс-форма</td>
                          <td className="user-td">1320</td>
                          <td className="user-td">1,1</td>
                        </tr>
                        <tr>
                          <td className="user-td">токарный станок</td>
                          <td className="user-td">860</td>
                          <td className="user-td">2,1</td>
                        </tr>
                        <tr>
                          <td className="user-td">электрические пилы</td>
                          <td className="user-td">1154</td>
                          <td className="user-td">3,7</td>
                        </tr>
                        <tr>
                          <td className="user-td">станкок для сварки ПВХ</td>
                          <td className="user-td">960</td>
                          <td className="user-td">4</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            садовые инструменты (лопаты, грабли, вилы, секаторы,
                            ножницы, лейки)
                          </td>
                          <td className="user-td">5620</td>
                          <td className="user-td">8,6</td>
                        </tr>
                        <tr>
                          <td className="text-center" colSpan="3">
                            Консолидация груза: Контейнер 20 футов: 32м3, 21
                            тонна
                          </td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            палатки для пэмпинга, спальные мешки, тенты, шатры
                          </td>
                          <td className="user-td">2800</td>
                          <td className="user-td">12,3</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            товары для животных (домики, переноски)
                          </td>
                          <td className="user-td">750</td>
                          <td className="user-td">9,7</td>
                        </tr>{" "}
                        <tr>
                          <td className="user-td">
                            рыболовное снаряжение (спининги, удилища, катушки,
                            крючки, блесна, зимние палатки
                          </td>
                          <td className="user-td">1120</td>
                          <td className="user-td">4</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            детский конструктор (аналоги)
                          </td>
                          <td className="user-td">980</td>
                          <td className="user-td">5,1</td>
                        </tr>
                        <tr>
                          <td className="text-center" colSpan="3">
                            Консолидация груза: Контейнер 40 футов: 65м3, 28
                            тонна
                          </td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            искусственные растения (цветы, деревья, ветки,
                            кусты)
                          </td>
                          <td className="user-td">1430</td>
                          <td className="user-td">17,6</td>
                        </tr>
                        <tr>
                          <td className="user-td">детские коврики</td>
                          <td className="user-td">865</td>
                          <td className="user-td">10,2</td>
                        </tr>
                        <tr>
                          <td className="user-td">ткань (х/б, лен, бязь)</td>
                          <td className="user-td">2300</td>
                          <td className="user-td">5,5</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            канцтовары (тетради, альбомы, блокноты, ежедневники,
                            скетчбуки, дневники)
                          </td>
                          <td className="user-td">4115</td>
                          <td className="user-td">6</td>
                        </tr>
                        <tr>
                          <td className="user-td">тренажеры</td>
                          <td className="user-td">6320</td>
                          <td className="user-td">9,4</td>
                        </tr>
                        <tr>
                          <td className="user-td">спортиное снаряжение</td>
                          <td className="user-td">958</td>
                          <td className="user-td">4,2</td>
                        </tr>
                        <tr>
                          <td className="user-td">станки</td>
                          <td className="user-td">1160</td>
                          <td className="user-td">8,3</td>
                        </tr>
                        <tr>
                          <td className="user-td">
                            упаковочная продукция (коробки, пакеты, банты,
                            ленты, бумага)
                          </td>
                          <td className="user-td">542</td>
                          <td className="user-td">3,6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default konsolidacia_gruza;
