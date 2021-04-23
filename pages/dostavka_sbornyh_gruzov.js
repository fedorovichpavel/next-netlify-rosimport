import Head from "next/head";
import App from "../components/App";

const dostavka_sbornyh_gruzov = () => {
  return (
    <App navLight="gruz">
      <Head>
        <title>Доставка сборных грузов</title>
        <meta
          name="description"
          content="Эта недорогая доставка позволяет привезти небольшие объемы товаров для разных поставщиков в одном контейнере"
        />
        <meta property="og:title" content="Доставка сборных грузов" />
        <meta
          property="og:description"
          content="Эта недорогая доставка позволяет привезти небольшие объемы товаров для разных поставщиков в одном контейнере"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/dostavka_sbornyh_gruzov"
        />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner-transportnaya-kompania">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="text-uppercase text-center">
                  <p
                    className="carousel-subtitle-v5 border-top-bottom pt-40 pb-10 text-red-site"
                    dataanimation="animated fadeInDown"
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
            <li>Грузы</li>
            <li className="active">Доставка сборных грузов</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8">
              <div className="content-page">
                <figure>
                  <img
                    alt="Сборный груз приемка на складе"
                    src="img/sbornyi_gruz_priemka_na_sklade.jpg"
                    className="img-responsive"
                  />
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Доставка сборных грузов
                  </h1>
                </div>
                <p className="content-text">
                  Перевозка сборных грузов в Россию, является одной из самых
                  часто заказываемых услуг в{" "}
                  <a
                    href="transportnaya_kompania"
                    title="Транспортная компания"
                  >
                    {" "}
                    нашей транспортной компании
                  </a>
                  . Мы организовываем всю цепочку поставок от склада в
                  стране-импортере до места назначения.
                </p>
                <p className="content-text">
                  Имея собственные склады за границей, мы работаем в спокойном
                  режиме и без спешки собираем грузы от производителей на наш
                  склад, где сборный груз и становится "сборным".
                </p>
                <div className="tab-pane">
                  <div className="pdf pb-30">
                    <h5 className="text-uppercase">Сборный груз - что это?</h5>
                    <p>
                      Сборный груз - объединение мелких партий (сбор) товаров
                      или групп товаров нескольких получателей в один контейнер,
                      с целью доставки до центрального логистического склада,
                      где сборный груз делится на клиентские пакеты,
                      перегружается и отправляется по адресу доставки каждого
                      получателя.
                    </p>
                  </div>
                </div>
                <p className="content-text">
                  Заказывая у нас перевозку своего товара в сборном грузе, вы
                  получите полный комплекс дополнительных услуг, которые уже
                  будут входить в{" "}
                  <a
                    href="stoimost_dostavki_gruza"
                    title="стоимость доставки импортируемой продукции"
                  >
                    стоимость доставки.
                  </a>{" "}
                  И заметьте! Она не покажется вам высокой
                </p>
                <figure>
                  <img
                    alt="Погрузчик грузит сборный груз в автомобиль"
                    src="img/pogruzchik_gruzit_sbornyi_gruz_v_avtomobol.jpg"
                    className="img-responsive"
                  />
                </figure>
                <h2 className="font-18 font-black mt-20 pb-10">
                  Пакет услуг при доставке сборных грузов
                </h2>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>Грузовые перевозки из
                    всех внутренних (в стране) складов производителей на наш{" "}
                    <a href="skladskie_uslugi" title="Складские услуги">
                      консолидационный склад
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Обработка грузов,
                    упаковка,{" "}
                    <a href="ves_gruza" title="Вес груза и грузовые классы">
                      взвешивание и замеры
                    </a>{" "}
                    для последующей транспортировки,
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Безопасное хранение
                    единичных товаров
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <a
                      href="/#optimizacia_processa_dostavki_gruza_iz_kitaya"
                      title="Оптимизация процесса доставки груза из Китая"
                    >
                      Оформление всех сопроводительных документов{" "}
                    </a>{" "}
                    на ввоз и вывоз
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Перевозка товаров до
                    места назначения
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Полное{" "}
                    <a href="tamozhnia" title="Таможня. Информация об импорте">
                      {" "}
                      таможенное оформление
                    </a>
                  </li>
                </ul>

                <blockquote className="yellow">
                  <div className="pb-20">
                    <div className="pull-left pr-30">
                      <img
                        src="img/sotrudnik_andrey_permyakov.jpg"
                        className="blockquote-border"
                        width="200"
                        alt="Координатор компании РОСИМПОРТ - Андрей Пермяков"
                      />
                    </div>
                    <div className="font-14 text-center pt-10 blockquote-head">
                      Координатор компании РОСИМПОРТ - Андрей Пермяков:
                    </div>
                    <h3 className="text-center font-20 pt-10">
                      Доставка сборных грузов наиболее эффективна для малых
                      партий товаров
                    </h3>
                    <p className="font-16  pt-10">
                      Мы прекрасно понимаем, что успех вашего бизнеса, во многом
                      зависит от скорости доставки сборного груза и от низкой
                      цены за перевоз. Наша группа опытных сотрудников,
                      работающая на азиатском или европейском направлениях,
                      сталкивается с возникающими проблемами ежедневно.{" "}
                      <span className="text-fon-yellow">
                        Мы решаем все задачи по доставке сборных грузов
                      </span>
                      , независимо от страны и расстояния.{" "}
                    </p>
                    <p className="font-16 pt-0">
                      Какие проблемы? Спросите вы. дело в том. что
                      законодательство стран-импортеров не стоит на месте. Почти
                      каждый квартал меняются законы в области грузоперевозок,
                      принимаются дополнения к таможенному законодательству,
                      применимые к одной стране, а таких стран велико множество
                      и везде свои таможенные правила ввоза и вывоза товаров.
                    </p>
                  </div>
                </blockquote>

                <figure>
                  <img
                    alt="Распределение сборного груза на складе"
                    src="img/raspredelenie_sbornogo_gruza_na_sklade.jpg"
                    className="img-responsive"
                  />
                </figure>
                <h2 className="font-18 font-black mt-20 pb-10">
                  Преимущество сборных грузов
                </h2>
                <p className="content-text">
                  Такой способ ни лучше или не хуже. Это просто способ
                  доставлять мелкие грузы, объединяя их не то что в{" "}
                  <a
                    href="konteinery#standartnye_tipy_konteinerov"
                    title="Стандартные типы контейнеров"
                  >
                    один контейнер
                  </a>
                  , а бывает и в одну палету. Почему вдруг появился такой
                  способ? Именно потому, что резко вырос контингент среднего и
                  малого бизнеса, которому достаточно множества мелких вливаний
                  разнородного товара, подстраиваясь{" "}
                  <a
                    href="dostavka_gruzov_iz_kitaya#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                    title="Влияние сезона на перевозку груза из Китая"
                  >
                    под сезон
                  </a>{" "}
                  или{" "}
                  <a
                    href="dostavka_gruzov_iz_kitaya#vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                    title="Влияние праздников в Китае на доставку груза"
                  >
                    праздники
                  </a>
                  , а не огромные контейнеры однородного товара
                </p>
                <p className="content-text">
                  Поэтому, эффективный сбор штучных товаров в сборный груз и их
                  перевозка, приобретают все большее значение. Преимущество этой
                  системы: она минимизирует транспортные маршруты и затраты на
                  транспортировку
                </p>

                <figure>
                  <img
                    alt="Перевозка сборного груза в контейнере"
                    src="img/perevozka_sbornogo_gruza_v_konteinere.jpg"
                    className="img-responsive"
                  />
                </figure>
                <h2 className="font-18 font-black mt-20 pb-10">
                  Эффективность перевозки сборного груза
                </h2>
                <p className="content-text">
                  Эффективность основана на едином стандарте контейнеров, а
                  возможность перевозить сборные грузы по разумным ценам,
                  основана на способности{" "}
                  <a
                    href="transportnaya_kompania#komanda_kompanii_rosimport"
                    title="Команда компании РОСИМПОРТ"
                  >
                    команды транспортной компании
                  </a>{" "}
                  РОСИМПОРТ, гарантировать высокий уровень профессионализма в
                  сфере доставки груза различными видами транспорта. Это требует
                  большого опыта и современных систем обработки данных.{" "}
                </p>
                <p className="content-text">
                  Одним из наиболее важных изобретений (более 100 лет назад) для
                  эффективной перевозки сборных грузов стал контейнер . Именно с
                  контейнерами перевозка сборных грузов начала свой
                  стремительный путь. Сегодня, контейнер для сборных грузов,
                  является обычным средством выбора перевозок. С помощью
                  контейнеров и стандартных площадок для них, можно легко и
                  быстро перегружаться с одного вида транспорта на другой.
                </p>

                <figure>
                  <img
                    alt="Доставка сборного груза до адресата"
                    src="img/dostavka_sbornogo_gruza_do_adresata.jpg"
                    className="img-responsive"
                  />
                </figure>
                <h2 className="font-18 font-black mt-20 pb-10">
                  Как доставляется сборный груз до адресата
                </h2>
                <p className="content-text">
                  Товары, предназначенные для сборного контейнера, теперь
                  сортируются и суммируются по месту назначения. Мы загружаем
                  созданные сборные грузы в грузовики или другие транспортные
                  средства и доставляем их на центральный склад в регионе России
                  или в Москву. Оказавшись там, сборные грузы разделяются на
                  штучные грузы и затем объединяются в новые сборные грузы таким
                  образом, чтобы доставка адресатам могла осуществляться, как
                  можно быстрее. На последнем этапе мы разделяем весь сборный
                  груз на мелкие пакеты или коробки и доставляем их до склада
                  получателя
                </p>

                <h2 className="font-18 font-black mt-20 pb-10">
                  Преимущества и недостатки сборных грузов
                </h2>
                <h3 className="content-text">
                  Преимущества в доставке сборного груза:
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>эффективные
                    транспортные маршруты
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>оптимизированное
                    использование ресурсов
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>низкие складские и
                    путевые затраты
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>адресная доставка
                    товаров, даже в небольших количествах
                  </li>
                </ul>
                <h3 className="content-text">
                  Недостатки в доставке сборного груза:
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>требуются складская
                    собственная сеть
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>нет возможности резко
                    изменить маршрут
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>невозможен выбор
                    индивидуального вида транспорта
                  </li>
                </ul>
                <p className="content-text">
                  Несмотря на недостатки, преимущества их перевешивают. Cборные
                  грузы остро необходимы для современной, мгновенно меняющейся и
                  развивающейся торговли. Они способствуют новым
                  экономично-выгодным транспортным маршрутам и и понижению цен
                  на грузоперевозки.
                </p>
                <figure>
                  <img
                    alt="Офис по обработке сборных грузов"
                    src="img/ofis_po_obrabotke_sbornyh_gruzov.jpg"
                    className="img-responsive"
                  />
                </figure>

                <div
                  id="sbornyi_gruz_konsolidacia_gruza"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black text-uppercase pt-5">
                    Сборный груз на складе в Китае перед доставкой
                  </h2>
                </div>
                <img
                  alt="Доставка сборного груза на автомобиле"
                  src="img/dostavka_sbornogo_gruza_na_avtomobile.png"
                  className="pull-right pt-30"
                />
                <h2 className="text-uppercase font-16">
                  Доставка сборного груза на автомобиле из Китая
                </h2>
                <p>
                  Перевозка сборного контейнера автотранспортом универсальна и
                  эффективна при малом количестве товара. Автомобили работают
                  независимо от расписания портов, аэропортов и железных дорог,
                  поэтому транспортировка на авто может начаться в любое время
                  суток. Перевозка маленьких объемов или перевозка товаров
                  небольшим количеством грузовых автомобилей, имеет ряд
                  преимуществ: возможность полной загрузки грузового автомобиля,
                  путем объединения вашего товара с грузами других компаний;
                  адаптации специальных температурных режимов; обработки хрупких
                  изделий; консолидации ящиков и коробок на наших складах в
                  Китае.
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Перевозка сборных грузов морским транспортом"
                  src="img/perevozka_sbornyh_gruzov_morskim_transportom.png"
                  className="pull-right"
                />
                <h2 className="pb-0 text-uppercase font-16">
                  Перевозка сборных грузов морским транспортом из Китая
                </h2>
                <p>
                  Отправка сборных контейнеров является выгодным, эффективным и
                  быстрым вариантом транспортировки на дальние расстояния.
                  Контейнеры, используемые для перевозки морем, обеспечивают
                  дополнительную безопасность груза. Преимущества морской
                  перевозки включают в себя: возможность частичного заполнения
                  контейнера, перевозку сыпучих или сухих товаров, реорганизацию
                  в порту и соблюдение упрощенных таможенных процедур в Европе и
                  СНГ.{" "}
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Транспортировка сборного груза по железной дороге"
                  src="img/transportirovka_sbornyh_gruzov_po_zheleznoy_doroge.png"
                  className="pull-right  pt-20"
                />
                <h2 className="pb-0 text-uppercase font-16">
                  Транспортировка сборного груза по железной дороге из Китая
                </h2>
                <p>
                  Перевозка сборных отправлений по железной дороге тоже будет
                  выгодна при доставке на дальние расстояния. Преимущества:
                  быстрая доставка, возможность перегрузки любого вида груза,
                  использование специализированных вагонов, платформ и
                  контейнеров. РОСИМПОРТ предлагает перевозку сборных долей
                  небольшого объема по железной дороге между Китаем и Россией.
                  Поскольку поезда следуют четкому расписанию, то наши клиенты,
                  сделав заказ заранее, получают свой товар в соответствии со
                  сроками и условиями прописанными в договоре.
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Поставка товара в сборном грузе самолетом (авиация)"
                  src="img/postavka_tovara_v_sbornom_gruze_avia.png"
                  className="pull-right pt-20"
                />
                <h2 className="pb-0 text-uppercase font-16">
                  Поставка товара сборным грузом в самолете (авиация) из Китая
                </h2>
                <p>
                  Перевозка сборного ящика по воздуху - отличная альтернатива
                  всем другим видам доставок по скорости и времени. Современные
                  грузовые самолеты обладают значительной вместимостью и это
                  позволяет экономить на цене, в том числе и при доставке на
                  дальние расстояния. Преимущества этого способа перевозки
                  сборного контейнера: возможность их отправки из любого
                  международного аэропорта, перевозка изделий из стекла,
                  использование стыковочных рейсов, комплексное обслуживание в
                  аэропортах и прямая доставка на склад получателя.
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Наши партнеры по перевозкам сборных грузов"
                  src="img/partnery_po_perevozkam.png"
                  className="pull-right"
                />
                <h2 className="pb-0 text-uppercase font-16">
                  Наши партнеры по перевозкам сборных грузов из Китая
                </h2>
                <p>
                  Специалисты РОСИМПОРТ привлекают надежных перевозчиков,
                  принимая во внимание все спецификации товаров и требования к
                  консолидации. При необходимости наши сотрудники разрабатывают
                  комбинированные схемы, включающие авиационный, автомобильный,
                  морской и железнодорожный транспорт. Надо отметить что мы
                  сотрудничаем с глобальными перевозчиками всех типов
                  транспорта. Названия их компаний вы можете увидеть на
                  логотипах ниже.
                </p>

                <div className="row mt-30 our-clients">
                  <div className="col-md-12">
                    <div className="owl-carousel" id="445">
                      <div className="client-item">
                        <a href="https://lines.coscoshipping.com/home/">
                          <img
                            src="img/partner_more_cosco_gray.png"
                            className="img-responsive"
                            alt="COSCO (COSCO Container Lines) - международный партнер по морской перевозке"
                          />
                          <img
                            src="img/partner_more_cosco_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.fesco.ru/">
                          <img
                            src="img/partner_more_fesco_gray.png"
                            className="img-responsive"
                            alt="FESCO (FESCO Shipping Company) - международный партнер по морской перевозке грузов"
                          />
                          <img
                            src="img/partner_more_fesco_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.maersk.com/">
                          <img
                            src="img/partner_more_maersk_gray.png"
                            className="img-responsive"
                            alt="MAERSK (Maersk Line) - международный партнер по морской перевозке грузов"
                          />
                          <img
                            src="img/partner_more_maersk_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.sasco.ru/">
                          <img
                            src="img/partner_more_sasco_gray.png"
                            className="img-responsive"
                            alt="SASCO (Sakhalin Shipping Company) - международный партнер по морской перевозке грузов"
                          />
                          <img
                            src="img/partner_more_sasco_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.rzd.ru/">
                          <img
                            src="img/partner_zheleznaya_doroga_rzhd_gray.png"
                            className="img-responsive"
                            alt="РЖД - международный партнер по железнодорожной перевозке грузов"
                          />
                          <img
                            src="img/partner_zheleznaya_doroga_rzhd_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://trcont.com/">
                          <img
                            src="img/partner_zheleznaya_doroga_transcontainer_gray.png"
                            className="img-responsive"
                            alt="ТРАНСКОНТЕЙНЕР - международный партнер по железнодорожной морской перевозке грузов"
                          />
                          <img
                            src="img/partner_zheleznaya_doroga_transcontainer_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://globaltrans.com/">
                          <img
                            src="img/partner_zheleznaya_doroga_globaltrans_gray.png"
                            className="img-responsive"
                            alt="Globaltrans - международный партнер по железнодорожной перевозке грузов"
                          />
                          <img
                            src="img/partner_zheleznaya_doroga_globaltrans_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.aeroflot.ru/">
                          <img
                            src="img/partner_aviaperevozki_aeroflot_gray.png"
                            className="img-responsive"
                            alt="Аэрофлот - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_aeroflot_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.s7.ru/">
                          <img
                            src="img/partner_aviaperevozki_s7_gray.png"
                            className="img-responsive"
                            alt="S7 Airlines - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_s7_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.utair.ru/">
                          <img
                            src="img/partner_aviaperevozki_utair_gray.png"
                            className="img-responsive"
                            alt="Ютэйр - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_utair_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.airchina.ru/">
                          <img
                            src="img/partner_aviaperevozki_airchina_gray.png"
                            className="img-responsive"
                            alt="Air China - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_airchina_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://www.turkishairlines.com/">
                          <img
                            src="img/partner_aviaperevozki_turkishairlines_gray.png"
                            className="img-responsive"
                            alt="Turkish airlines - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_turkishairlines_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                      <div className="client-item">
                        <a href="https://airastana.com/">
                          <img
                            src="img/partner_aviaperevozki_airastana_gray.png"
                            className="img-responsive"
                            alt="Air Astana - международный партнер по авиаперевозке грузов"
                          />
                          <img
                            src="img/partner_aviaperevozki_airastana_color.png"
                            className="color-img img-responsive"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <aside>
                <div className="aside-box">
                  <nav>
                    <a href="aviaperevozka_gruzov_iz_kitaya">
                      <img
                        alt="Авиаперевозка грузов из Китая"
                        src="img/avia_perevozka_gruzov_iz_kitaya.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Авиаперевозка грузов из Китая</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#aviacionnye_nadezhnye_vozdushnye_gruzoperevozki_iz_kitaya_v_rossiyu"
                          title="Надежные воздушные грузоперевозки из Китая в Россию"
                        >
                          Надежные воздушные грузоперевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#process_otgruzki_tovara_i_dostavki_aviatransportom"
                          title="Процесс отгрузки товара и доставки авиатранспортом"
                        >
                          Процесс отгрузки и доставки авиа
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#aviadostavka_srochnogo_sbornogo_gruza"
                          title="Авиадоставка срочного и сборного груза в Россию из Китая"
                        >
                          Авиадоставка срочного и сборного груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#osnovnye_aeroporty_v_kitae"
                          title="Основные аэропорты в Китае"
                        >
                          Основные аэропорты в Китае
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="zheleznodorozhnaya_perevozka_gruzov">
                      <img
                        alt="Железнодорожная перевозка грузов из Китая"
                        src="img/zheleznodorozhnaya_dostavka_gruzov_iz_kitaya.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Доставка по железной дороге</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov#zheleznodorozhnaya_dostavka_gruza"
                          title="Пошаговая железнодорожная доставка груза"
                        >
                          Пошаговая железнодорожная доставка груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov#intermodalnye_perevozki_gruzov"
                          title="Интермодальные перевозки грузов"
                        >
                          Интермодальные перевозки грузов
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov#optimizacia_zheleznodorozhnoy_cepochki_postavok"
                          title="Оптимизация железнодорожной цепочки поставок между Китаем и Россией"
                        >
                          Оптимизация железнодорожной цепочки
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="avtomobilnaya_dostavka_gruzov_iz_kitaya">
                      <img
                        alt="Автодоставка грузов из Китая"
                        src="img/avto_dostavka_gruzov_iz_kitaya.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Перевозка АВТОмобилями</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya#preimushchestvo_avtomobilnyh_perevozok"
                          title="Преимущества автомобильных перевозок"
                        >
                          Преимущества автомобильных перевозок
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya#vidy_gruzovyh_avtomobiley"
                          title="Виды грузовых автомобилей"
                        >
                          Виды грузовых автомобилей
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya#logisticheskie_shemy_dlia_gruzovikov_iz_kitaya"
                          title="Логистические схемы для грузовиков из Китая"
                        >
                          Логистические схемы для грузовиков из Китая
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="morskaya_transportirovka_gruzov">
                      <img
                        alt="Морская доставка груза из Китая"
                        src="img/morskaya_dostavka_gruza_iz_kitaya.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Морская доставка груза</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#morskie_gruzovye_perevozki"
                          title="Морские грузовые перевозки"
                        >
                          Морские грузовые перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#morskaya_konteynernaya_transportirovka"
                          title="Морская контейнерная транспортировка LCL и FCL"
                        >
                          Морская контейнерная транспортировка
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#kak_proishodit_morskaya_dostavka_gruza"
                          title="Как происходит морская доставка груза (подробно)"
                        >
                          Как происходит морская доставка (подробно)
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#upakovka_gruza_dlia_morskih_konteinernyh_perevozok"
                          title="Упаковка груза для морских контейнерных перевозок"
                        >
                          Упаковка груза в контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#osnovnye_morskie_porty_kitaya"
                          title="Основные морские порты Китая"
                        >
                          Основные морские порты Китая
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#korabli_i_konteinerovozy_dlia_moskogo_frahta"
                          title="Корабли и контейнеровозы для морского фрахта"
                        >
                          Корабли для морского фрахта
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="avia_express_dostavka">
                      <img
                        alt="Авиа Экспресс доставка груза из Китая"
                        src="img/avia_express_dostavka_gruza_iz_kitaya.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">АВИА ЭКСПРЕС доставка из Китая</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avia_express_dostavka#express_dostavka_samoletom_iz_kitaya"
                          className="more"
                          title="Экспресс доставка самолетом из Китая"
                        >
                          Экспресс доставка самолетом
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avia_express_dostavka#nadezhnost_bezopasnost_express_dostavki"
                          className="more"
                          title="Надежность и безопасность экспресс доставки"
                        >
                          Безопасность экспресс доставки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="avia_express_dostavka#express_dostavka_tovarov_iz_kitaya"
                          className="more"
                          title="Товары из Китая требующие экспресс-доставки"
                        >
                          Товары требующие экспресс-доставки
                        </a>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="uslugi">
                      <img
                        alt="Услуги транспортной компании"
                        src="img/uslugi_transportnoy_kompanii.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Услуги транспортной компании</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#uslugi_komplektacii_i_sborki_gruza"
                          title="Услуги комплектации и сборки груза"
                        >
                          Услуги комплектации и сборки груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#upakovka_tovara"
                          title="Упаковка товара"
                        >
                          Упаковка товара
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#usluga_strahovania_gruza"
                          title="Услуга страхования груза"
                        >
                          Услуга страхования груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#usluga_perevodchika_v_kitae"
                          title="Услуга переводчика в Китае"
                        >
                          Услуга переводчика в Китае
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#biznes_tur_v_guanchzhou"
                          title="БИЗНЕС ТУР В ГУАНЧЖОУ"
                        >
                          БИЗНЕС ТУР В ГУАНЧЖОУ
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="uslugi#mebelnye_tury_v_kitae"
                          title="Мебельные туры в Китае"
                        >
                          Мебельные туры в Китае
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-box mt-20">
                  <nav>
                    <a href="dostavka_gruzov_iz_kitaya">
                      <img
                        alt="Услуги транспортной компании"
                        src="img/dostavka_gruzov_iz_kitaya_v_rossiyu.jpg"
                        className="img-responsive"
                      />
                    </a>
                    <h4 className="mt-20">Доставка грузов из Китая</h4>
                    <ul
                      className="list-unstyled"
                      style={{ lineHeight: "1.7em" }}
                    >
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                          title="Отдельный и сборный контейнер (сборный груз)"
                        >
                          Отдельный и сборный контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#zayavka_na_perevozaku_gruza_iz_kitaya"
                          title="Заявка на перевозку груза из Китая"
                        >
                          Заявка на перевозку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#sms_informirovanie_o_mestonahozhdenii_konteinera"
                          title="СМС информирование о местонахождении контейнера"
                        >
                          СМС информирование
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#strahovanie_gruza_dlia_dostavki_iz_kitaya"
                          title="Страхование груза для доставки из Китая"
                        >
                          Страхование груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#generalnye_chastichnye_sbornye_gruzy"
                          title="Генеральные, частичные и сборные грузы"
                        >
                          Генеральные и сборные грузы
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                          title="Поставщики из Китая и крупный груз"
                        >
                          Поставщики из Китая и крупный груз
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                          title="Влияние сезона на перевозку груза из Китая"
                        >
                          Влияние сезона на перевозку
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                          title="Влияние праздников в Китае на доставку груза"
                        >
                          Влияние праздников на доставку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#multimodalnye_perevozki"
                          title="Мультимодальные перевозки"
                        >
                          Мультимодальные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#konteinernye_perevozki"
                          title="Контейнерные перевозки"
                        >
                          Контейнерные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#procedura_proverki_konteinera"
                          title="Процедура проверки контейнера"
                        >
                          Процедура проверки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#proverka_zagruzki_konteinera"
                          title="Проверка загрузки контейнера"
                        >
                          Проверка загрузки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#informacia_o_konteinereh_dlia_dostavki_tovarov"
                          title="Информация о контейнерах для доставки товаров"
                        >
                          Информация о контейнерах
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#transportnye_kartochki_s_parametrami_dostavki_gruzov"
                          title="Транспортные карточки с параметрами доставки грузов"
                        >
                          Карточки товаров
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right link-blue"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#katalog_vvozimyh_tovarov"
                          title="Каталог ввозимых товаров (импорт из Китая)"
                        >
                          Каталог ввозимых товаров
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default dostavka_sbornyh_gruzov;
