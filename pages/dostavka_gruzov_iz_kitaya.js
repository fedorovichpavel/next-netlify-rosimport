import Head from "next/head";
import App from "../components/App";

const dostavka_gruzov_iz_kitaya = () => {
  return (
    <App navLight="mega">
      <Head>
        <title>Доставка грузов из Китая</title>
        <meta
          name="description"
          content="Сайт доставки из из Китая грузов и с применением уникальных логистических схем доставки в Россию"
        />
        <meta property="og:title" content="Доставка грузов из Китая" />
        <meta
          property="og:description"
          content="Сайт доставки из из Китая грузов и с применением уникальных логистических схем доставки в Россию"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/dostavka_gruzov_iz_kitaya"
        />
        <link
          rel="canonical"
          href="https://rosimport.ru/dostavka_gruzov_iz_kitaya"
        />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner-container">
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
            <li>Грузы из Китая</li>
            <li className="active">Доставка грузов из Китая</li>
          </ul>

          <hr />
          <h4 className="mt-10 text-center link-orange">
            Оглавление этой страницы
          </h4>
          <div className="row">
            <nav>
              <div className="col-md-4">
                <div className="link-group">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                        className="link-orange scroll"
                      >
                        Отдельный и сборный контейнер
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#zayavka_na_perevozaku_gruza_iz_kitaya"
                        className="link-orange scroll"
                      >
                        Заявка на перевозку груза из Китая
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#sms_informirovanie_o_mestonahozhdenii_konteinera"
                        className="link-orange scroll"
                      >
                        СМС информирование о грузе
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#strahovanie_gruza_dlia_dostavki_iz_kitaya"
                        className="link-orange scroll"
                      >
                        Страхование груза для доставки из Китая
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#generalnye_chastichnye_sbornye_gruzy"
                        className="link-orange scroll"
                      >
                        Генеральные, частичные и сборные грузы
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
                        href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                        className="link-orange scroll"
                      >
                        Поставщики из Китая и крупный груз
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                        className="link-orange scroll"
                      >
                        Влияние сезона на перевозку груза из Китая
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                        className="link-orange scroll"
                      >
                        Влияние праздников в Китае на доставку груза
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#multimodalnye_perevozki"
                        className="link-orange scroll"
                      >
                        Мультимодальные перевозки
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#konteinernye_perevozki"
                        className="link-orange scroll"
                      >
                        Контейнерные перевозки из Китая
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="link-group">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#informacia_o_konteinereh_dlia_dostavki_tovarov"
                        className="link-orange scroll"
                      >
                        Информация о контейнерах для доставки товаров
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#transportnye_kartochki_s_parametrami_dostavki_gruzov"
                        className="link-orange scroll"
                      >
                        Транспортные карточки доставки грузов
                      </a>
                    </li>
                    <li>
                      <a
                        href="dostavka_gruzov_iz_kitaya#katalog_vvozimyh_tovarov"
                        className="link-orange scroll"
                      >
                        Каталог ввозимых товаров (импорт из Китая)
                      </a>
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <hr />
          <h4 className="mt-10 text-center link-orange">
            Возможно вам будет интересно
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="link-group">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="dostavka_sbornyh_gruzov"
                      className="link-group-item link-butt"
                    >
                      Доставка сборных грузов
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="link-group">
                <ul className="list-unstyled">
                  <li>
                    <a href="uslugi" className="link-group-item link-butt">
                      Услуги компании РОСИМПОРТ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <div className="panel panel-default">
                  <img
                    src="img/konsolidacionnyi_sklad_dlia_gruzov_v_kitae.jpg"
                    width="100%"
                    alt="Огромный склад для сборного и полного груза в Китае"
                    className="img-responsive"
                  />
                  <div className="panel-footer text-center">
                    Консолидационный склад в Китае для грузов
                  </div>
                </div>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Доставка грузов из Китая
                  </h1>
                </div>
                <p>
                  {" "}
                  На этом сайте вы прочтёте всю интересующую вас информацию о
                  доставке груза из Китая{" "}
                  <a
                    title="Отдельная страница о нашей компании и коллективе"
                    href="transportnaya_kompania"
                    className="btn-transparent"
                    data-toggle="tooltip"
                  >
                    транспортной компанией РОСИМПОРТ
                  </a>
                  . Здесь есть примеры транспортировки больших и малых грузов,
                  негабаритных товаров и грузов со множеством различных
                  характеристик: хрупких, жидких, сыпучих и опасных.{" "}
                </p>
                <p>
                  Отправка товара 4-мя транспортными стихиями: Море, Авиа, ЖД и
                  Авто. О каждом виде транспорта и наших комбинациях
                  логистических схем мы расскажем подробнейшим образом. Как
                  лучше доставить ваш груз, какие документы мы можем сделать для
                  очистки груза и когда вы его получите?
                </p>

                <div
                  id="otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div itemScope="" itemType="http://schema.org/NewsArticle">
                  <div className="pb-20">
                    <div className="lineheader-white">
                      <h4
                        itemProp="headline name"
                        className="text-center font-16 font-black  text-uppercase pt-5"
                      >
                        {" "}
                        Отдельный и сборный контейнер (сборный груз) из Китая
                      </h4>
                    </div>
                    <div itemProp="description">
                      <p>
                        Крупные торговые компании заказывают у нас доставку
                        контейнеров из Китая с товарами бытового назначения.
                        Заводы покупают станки, которые требуют тщательной
                        дополнительной упаковки и конечно, такие крупные
                        поставки окупаются. Один контейнер может запросто
                        заказать компания, у которой он будет забит под завязку.{" "}
                      </p>
                      <figure>
                        <a
                          data-rel="fancybox-button"
                          title="Сборный контейнер"
                          className="fancybox-button pull-right pl-10"
                          href="img/sbornyi_konteiner.jpg"
                        >
                          <img
                            itemProp="image"
                            alt="Сборный контейнер"
                            src="img/sbornyi_konteiner_sm.jpg"
                            className="img-responsive"
                          />
                        </a>
                      </figure>
                      <h4 className="text-center font-16 font-black pb-10 pt-5">
                        А что делать с небольшими партиями товара?
                      </h4>
                      <p>
                        Под такой груз, если вы взяли его на себя, придется
                        формировать отдельный сборный контейнер. Под вас и под
                        других предпринимателей с небольшими объемами товаров.
                        Надо выписывать отдельную морскую накладную (коносамент)
                        или другой документ на тот вид транспорта, который
                        повезет ваш груз.
                      </p>
                      <p>
                        Это повлечет за собой дополнительные расходы, состоящие
                        из многих обязательных платежей: за страховку груза,
                        "раскредитацию", погрузку и выгрузку. И сама перевозка,
                        из-за множества мелких платежей, может стать убыточной.
                        Поэтому, российские импортеры доверяют нам всю работу по
                        логистике и доставке.
                      </p>
                      <p>
                        Если мы покупаем ваш товар "под себя", то естественно,
                        будем оптимизировать все сопутствующие платежи, чтобы
                        уменьшить цену за доставку товара. Погрузка-выгрузка и
                        страхование делится уже не на одного, а на всех
                        совладельцев контейнера. В один{" "}
                        <a
                          href="konteinery#standartnye_tipy_konteinerov"
                          title="Стандартные типы контейнеров"
                        >
                          {" "}
                          контейнер{" "}
                        </a>
                        загружается несколько грузов разных покупателей. Такой
                        сборный контейнер (покупка "вскладчину") обходится
                        намного дешевле одного контракта на перевозку с неполной
                        загрузкой контейнера.
                      </p>
                      <p>
                        Сборные грузы очень выгодно возить небольшим торговым
                        компаниям, у которых груз заполняет не весь контейнер, а
                        лишь небольшую его часть - один или несколько кубов.
                        Один контейнер может заказать только та компания, у
                        которой он будет забит под завязку.
                      </p>
                      <p>
                        <button
                          onClick={() =>
                            (window.location.href = "dostavka_sbornyh_gruzov")
                          }
                          type="button"
                          className="btn btn-primary"
                        >
                          Узнать больше о доставке сборного груза
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="zayavka_na_perevozaku_gruza_iz_kitaya"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-18 font-black text-uppercase pt-10">
                    Заявка на доставку груза из Китая{" "}
                  </h2>
                </div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Заявка на перевозку груза из Китая"
                    className="fancybox-button pull-left pr-10"
                    href="img/zayavka_na_perevozku_gruza_iz_kitaya.jpg"
                  >
                    <img
                      alt="Заявка на перевозку груза из Китая"
                      width="300"
                      src="img/zayavka_na_perevozku_gruza_iz_kitaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p>
                  В компанию РОСИМПОРТ приходит запрос в свободной форме, с
                  просьбой{" "}
                  <a
                    href="stoimost_dostavki_gruza#konechnaya_stoimost_dostavki"
                    title="Как рассчитать конечную стоимость доставки импортируемой продукции"
                  >
                    {" "}
                    уточнить цену{" "}
                  </a>{" "}
                  на перевозку товара из Китая: с указанием, веса, объема и
                  желаемыми сроками доставки. Очень хорошо, когда указывают
                  точную стоимость и характер груза. На цену влияет буквально
                  всё. Электроника и продукты - разница огромная. Сколько,
                  какими партиями, сколько штук в одной партии, есть ли
                  обременения на той стороне? Нам важно всё, для калькуляции
                  точной цены и создания логистической схемы маршрута. Мы всегда
                  интересуемся, что у клиента в приоритете. Сроки доставки или
                  цена доставки?
                </p>
                <p>
                  В соответствии с пожеланиями заказчика,{" "}
                  <a
                    title="Стоимость доставки груза"
                    href="stoimost_dostavki_gruza"
                  >
                    {" "}
                    мы делаем полный расчет доставки и озвучиваем детальную
                    калькуляцию{" "}
                  </a>
                  . В неё входит 4 вида стоимости. По одной схеме на каждый вид
                  транспорта: ЖД, море, авиа, авто. Из 4-х вариантов
                  калькуляции, вы можете выбрать один или два, подходящие вам по
                  срокам и ценам. Мы учитываем логистические схемы, где возможно
                  совмещение нескольких видов транспорта для удешевления
                  поставки груза.
                </p>
                <p>
                  Неважно, где находится ваш груз в Китае, мы заберем его из
                  любого места у вашего китайского поставщика и доставим на наш
                  логистический склад в любом из 4-х городов: Иу, Гуанчжоу,
                  Урумчи или Пекин.
                </p>
                <p>
                  Далее идет подготовка груза к длительному путешествию:
                  регистрация, взвешивание, упаковка, дополнительная упаковка
                  (если требуется). Затем{" "}
                  <a href="dostavka_sbornyh_gruzov">сборный груз</a>{" "}
                  отправляется на границу с Китаем.
                </p>

                <div
                  id="sms_informirovanie_o_mestonahozhdenii_konteinera"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h4 className="text-center font-16 font-black text-uppercase pt-5">
                    СМС информирование о местонахождении контейнера
                  </h4>
                </div>
                <p>
                  Два года назад мы внедрили систему СМС-информирования, это
                  отличное решение для клиентов компании РОСИМПОРТ. По
                  законодательству многих стран, через которые будет пролегать
                  путь вашего товара, нельзя использовать GPS трекеры (маячки)
                  для уточнения местоположения груза. А с нашим
                  автоинформированием, вы будете точно знать где находится ваш
                  контейнер и какой этап доставки идет в эту минуту.
                </p>
                <p>
                  У нас своя, запатентованная система информирования. Ей нипочём
                  таможенные "глушилки", недоступность связи в горных районах,
                  нехватка вышек мобильных операторов на необжитых территориях и
                  личная жизнь водителя, который едет с севшим телефоном по
                  пустынным районам без сотовой связи.
                </p>
                <figure>
                  <img
                    alt="Контейнер и перевозка"
                    src="img/konteiner_perevozka.jpg"
                    className="img-responsive pt-20 pb-20"
                  />
                </figure>

                <div
                  id="strahovanie_gruza_dlia_dostavki_iz_kitaya"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-16 font-black text-uppercase pt-10">
                    Страхование груза для доставки из Китая
                  </h2>
                </div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Страхование груза"
                    className="fancybox-button pull-left pr-10"
                    href="img/strahovanie_gruza.jpg"
                  >
                    <img
                      alt="Страхование груза"
                      width="300"
                      src="img/strahovanie_gruza_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p>
                  Страхование обязательно! Это условие международных перевозок.
                  Как происходит страхование груза в компании РОСИМПОРТ.
                  Страховка делится на 2 части: перевозка груза по Китаю, груз в
                  транзитной зоне и передвижение груза по Российской Федерации.
                  Транзитная и Российская зоны транспортировки объединяются в
                  один страховой договор. Стоимость страхования начинается от
                  0.3 процентов до 2,5%.на цену страховки влияет полная оценка
                  стоимости перевозимого груза и ещё зависит от типа груза,
                  характера груза, от способа перевозки и маршрута.
                </p>
                <p>Тип страхования предполагается в 2-х вариантах:</p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Первый вариант - когда
                    клиент сам страхует свой груз без нашего участия.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Второй вариант - мы
                    страхуем весь сборный контейнер на один общий страховой
                    договор, на который приходится небольшая доля платежа всех
                    участников.
                  </li>
                </ul>
                <p>
                  А именно всех, кто загрузил свой небольшой груз в сборный
                  контейнер. Сумма будет больше, но число таких участников может
                  доходить до 5 человек (максимум) на 1 контейнер и до 30
                  человек (сборный мелкий груз) на автомобильную фуру (седельный
                  тягач с полуприцепом). Цена за страховку делится на всех по
                  доле занимаемого объема. Общая страховка выходит намного
                  дешевле.
                </p>

                <div
                  id="generalnye_chastichnye_sbornye_gruzy"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="col-md-12 mt-30">
                  <div className="lineheader-white">
                    <h2 className="text-center font-18 font-black text-uppercase pt-10">
                      Генеральные, частичные и сборные грузы из Китая
                    </h2>
                  </div>
                  <a
                    data-rel="fancybox-button"
                    title="Генеральные грузы, частичные грузы и сборные грузы"
                    className="fancybox-button pull-right pl-10"
                    href="img/polnye_chastichnye_sbornye_gruzy.jpg"
                  >
                    <img
                      alt="Полные грузы, частичные грузы и сборные грузы"
                      src="img/polnye_chastichnye_sbornye_gruzy_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                  <p>
                    Ваша заявка важна для нас! Будь то единичная отправка,
                    несколько поддонов или несколько полных загрузок контейнера.
                    Мы знаем, как обработать ваш груз и доставить его в Россию
                    из Китая в целости и сохранности
                  </p>
                  <p>
                    Когда вам нужно перевезти товар по внутренней территории
                    Китая до консолидационного склада. Мы перевезём, что
                    требуется на одном из наших грузовиков. Благодаря
                    транспортным узлам, стратегически расположенным по всему
                    Китаю, ваш груз будет доставлен куда угодно и когда угодно.
                    Транспортные узлы и дополнительные транзитные склады,
                    являются нашей перевалочной базой по договору с китайскими
                    партнерами. Затем груз следует до нашего склада в одном их
                    4-х городов Китая. Наиболее распространенными видами грузов
                    являются:
                  </p>
                  <ul className="list-unstyled margin-bottom-20">
                    <li>
                      <i className="fa fa-caret-right"></i>Генеральные грузы
                      (доставка из Китая)
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Частичные грузы
                      (доставка из Китая)
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      <a href="dostavka_sbornyh_gruzov">
                        Перевозка сборных грузов из Китая
                      </a>
                    </li>
                  </ul>
                  <p>
                    Внутренние поставки и отгрузки в соседние регионы Китая
                    (города: Иу, Урумчи, Гуанчжоу, Пекин), от поставщиков и
                    оптовых продавцов до наших консолидационных складов могут
                    быть завершены в течение 24-48 часов. Для более отдаленных
                    направлений, по вашему требованию (в указанный морской
                    порт), мы доставим груз в течение одного-пяти дней
                    независимо от пункта назначения в Китае. Из нашего склада,
                    упакованные в контейнер коробки отправятся к границе с
                    Россией.
                  </p>
                  <blockquote className="mt-40">
                    <p className="font-red-site">Как мы грузим товар</p>
                    <p>
                      Как отправитель, мы несем ответственность за то, чтобы
                      упакованные товары выдержали обычную транспортировку. Даже
                      когда нет контроля: водитель не присутствует на погрузке
                      или водитель доступен только на рампе. Учитываются
                      мельчайшие детали и мы закрепляем груз так, чтобы он не
                      скользил, не сдвигался и не переворачивался.{" "}
                    </p>
                    <small> Коллектив компании РОСИМПОРТ</small>
                  </blockquote>

                  <div
                    id="postavshchiki_iz_kitaya_i_krupnyi_gruz"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h3 className="text-center font-20 font-black text-uppercase pt-5">
                      Поставщики из Китая и крупный груз
                    </h3>
                  </div>
                  <div className="row mt-10">
                    <div className="col-md-4 col-sm-4">
                      <a
                        data-rel="fancybox-button"
                        title="Поставщики из Китая и крупный груз"
                        className="fancybox-button"
                        href="img/postavshchiki_iz_kitaya_krupnyi_gruz.jpg"
                      >
                        <img
                          alt="Поставщики из Китая и крупный груз"
                          src="img/postavshchiki_iz_kitaya_krupnyi_gruz_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p>
                        Не доверяйте крупную поставку вашему китайскому
                        поставщику. Он, как всегда сэкономит на логистике и не
                        проследит за вашим товаром так, как делаем это мы. К вам
                        может прийти груз непригодный к продаже и вся
                        ответственность ляжет на неизвестного перевозчика,
                        которого нанял ваш поставщик.
                      </p>
                      <p>
                        Компания РОСИМПОРТ работает непосредственно в Китае и
                        мы, это единственный правильный способ обеспечить
                        контроль над всеми отправлениями и обеспечить их
                        своевременную доставку до вашего склада в России.
                        Главное, заблаговременно уведомить о начале поставок,
                        так как в Китае есть ежегодные праздники и сезонная
                        задержка товарных отправлений товара из Китая.
                      </p>
                      <p>
                        У нас есть контракты с морскими, авиа, жд и
                        автоперевозчиками. Логистические схемы, по которым мы
                        работаем более 10 лет, всегда совершенствуются с
                        текущими изменениями в транспортных схемах перевозчиков
                        и меняющихся условий на мировых рынках перевозок.{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    id="vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h3 className="text-center font-20 font-black text-uppercase pt-5">
                      Влияние сезона на перевозку груза из Китая
                    </h3>
                  </div>
                  <div className="row mt-10">
                    <div className="col-md-4 col-sm-4">
                      <a
                        data-rel="fancybox-button"
                        title="Влияние сезона на перевозку груза из Китая"
                        className="fancybox-button"
                        href="img/vliyanie_sezona_na_perevozku_gruza_iz_kitaya.jpg"
                      >
                        <img
                          alt="Влияние сезона на перевозку груза из Китая"
                          src="img/vliyanie_sezona_na_perevozku_gruza_iz_kitaya_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p>
                        Времена года с дождем, штормом и снегом могут влиять на
                        выход в рейс грузовых автомобилей и судов. Загруженные
                        отправками судоходные сезоны, не всегда будут
                        одинаковыми в южных и северных широтах.{" "}
                      </p>
                      <p>
                        Пиковый сезон для экспорта из Китая наступает за месяц
                        до китайского Нового года. Январь и 3-й квартал каждого
                        года (с июля по сентябрь), когда многие товары,
                        произведенные в Китае, отправляются в Россию перед
                        школой и к Новому Году.
                      </p>
                      <p>
                        {" "}
                        Стоимость перевозки будет выше, так как на складах
                        слишком много грузов ожидающих доставки. Лучше
                        планировать заранее вояж вашего груза, ведь имеется
                        очень ограниченное количество доступных контейнеров и
                        судов в неблагоприятные сезоны.{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    id="vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h3 className="text-center font-20 font-black text-uppercase pt-5">
                      Влияние праздников в Китае на доставку груза
                    </h3>
                  </div>
                  <div className="row mt-10">
                    <div className="col-md-4 col-sm-4">
                      <a
                        data-rel="fancybox-button"
                        title="Влияние праздников в Китае на доставку груза"
                        className="fancybox-button"
                        href="img/prazdnik_v_kitae.jpg"
                      >
                        <img
                          alt="Влияние праздников в Китае на доставку груза"
                          src="img/prazdnik_v_kitae_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p>
                        В грузоперевозках из Китая, вы должны запланировать
                        отправку заранее, учитывая возможны задержки. Время
                        доставки вашего груза является решающим фактором,
                        который определяет способ транспортировки, а
                        транспортные расходы увеличиваются в следующие периоды:
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <strong>Китайский Новый год</strong> - в этот период
                          фабрики и сооружения закрываются, что вызывает скачки
                          цен и задержки;
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <strong>Золотая неделя</strong> - Этот недельный
                          фестиваль усугубляет скачки и задержки цен в
                          праздничный сезон,
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <strong>Праздник лодок-драконов</strong> - для этого
                          праздничного дня, как правило, закрываются на три дня
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <strong>Сезон праздничных покупок</strong> - Цены
                          неуклонно растут в течение нескольких месяцев,
                          поскольку предприятия готовятся к праздничным покупкам
                          (октябрь/декабрь, для воздушных перевозок),
                          июль/октябрь - для морских перевозок).
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12 col-sm-12 mt-15">
                      <p>
                        {" "}
                        Кроме того, зная расписание праздников в Китае и
                        рекомендации по доставке, вы экономите время и деньги. В
                        эти пиковые периоды, цены на доставку резко растут из-за
                        нехватки заводского и дорожного персонала. Когда сезон
                        для транспортировки относительно ровный, цена будет
                        более конкурентной - например, после китайского Нового
                        года, а также с марта по апрель.
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-20">
                    <p className="font-red-site pb-10">
                      Убедитесь, что вы консолидируете свой груз
                    </p>
                    <p className="font-16">
                      Консолидация вашего груза важна, особенно когда товары
                      покупаются у разных поставщиков. Логистический отдел
                      РОСИМПОРТ обеспечит процесс консолидации в любом порту
                      отправления. Мы соберем все ваши грузы на один склад и
                      отправим вам всё вместе
                    </p>
                    <small> Коллектив компании РОСИМПОРТ</small>
                  </blockquote>

                  <div
                    id="multimodalnye_perevozki"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="line-dashed"></div>
                  <div className="row mt-20">
                    <div className="col-md-7 col-sm-7">
                      <h2 className="text-uppercase font-16">
                        Мультимодальная доставка груза из Китая
                      </h2>
                      <p>
                        Если авиаперевозки слишком дороги, а морские перевозки
                        не могут быть доставлены вовремя, то у вас есть в запасе
                        вариант мультимодальной доставки, сочетающий воздушные и
                        морские перевозки с другими видами наземного транспорта
                        (грузовые автомобили, поезда или другие виды транспорта)
                        для доставки груза из Китая.
                      </p>
                      <p>
                        Мультимодальная доставка груза - означает,
                        комбинированный способ доставки груза, используя все
                        доступные виды транспорта.
                      </p>
                      <p>
                        Этот вид перевозки повлечет за собой определенные
                        затраты на перегрузку и обработку, но и преимуществ у
                        такого способа, достаточно! РОСИМПОРТ выигрывает у
                        конкурентов за счет масштаба:{" "}
                      </p>
                      <p>
                        Использование большого международного опыта в
                        перевозках, знание лазеек в бюрократических препонах,
                        эффективное использование доступной инфраструктуры в
                        Китае и эффективные контракты с партнерами на всех
                        линиях транспортных средств, ориентированные на снижение
                        косвенных затрат.
                      </p>
                      <p>
                        Международная транспортировка может представлять собой
                        сложный способ для серьезной доставки или простой способ
                        - переместить груз из пункта А в пункт В. Выбор
                        экономически эффективного и своевременного вида
                        транспорта, имеет решающее значение. Мы подскажем вам
                        совершенные варианты транспортировки, и сможем
                        гарантировать, что вы отправите свой груз по самой
                        низкой цене.
                      </p>
                    </div>
                    <div className="col-md-5 col-sm-5 pt-20">
                      <img
                        alt="Мультимодальные перевозки"
                        src="img/multimodalnye_perevozki.jpg"
                        className="img-responsive"
                      />
                    </div>
                  </div>

                  <div
                    id="konteinernye_perevozki"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <div className="lineheader-white">
                    <h2 className="text-center font-20 font-black text-uppercase pt-5">
                      Контейнерная доставка груза из Китая
                    </h2>
                  </div>

                  <div className="row mt-30">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Упаковка и маркировка. Что необходимо?"
                        className="fancybox-button"
                        href="img/upakovka_i_markirivka_gruza_iz_kitaya.jpg"
                      >
                        <img
                          alt="Упаковка и маркировка. Что необходимо?"
                          src="img/upakovka_i_markirivka_gruza_iz_kitaya_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Упаковка и маркировка товара. Что необходимо?
                      </h5>
                      <p>
                        Чтобы доставить ваш груз в хорошем состоянии до России,
                        необходимо позаботиться об упаковке в Китае. Какая
                        упаковка необходима для защиты ваших товаров? Это
                        зависит не только от самого товара, но и от того, как
                        часто перегружают товар из контейнера при смене
                        транспортного средства. Мы учитываем эту перегрузку на
                        транспортных транзитных терминалах, погоду и многие
                        другие факторы. Плюс: мы подбираем надежную упаковку!
                        При возникновении особой потребности, упакуем груз с
                        повышенной защитой для контейнера или автомобильного
                        тента.{" "}
                        <a
                          href="upakovka_tovara"
                          title="Упаковка и маркировка товара"
                        >
                          {" "}
                          Читать далее: Упаковка и маркировка товара{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Товар на поддоне. Зачем поддон?"
                        className="fancybox-button"
                        href="img/sbornyi_gruz_na_poddone.jpg"
                      >
                        <img
                          alt="Товар на поддоне. Зачем поддон?"
                          src="img/tovar_na_poddone_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Товар на поддоне в контейнере. Зачем поддон?
                      </h5>
                      <p>
                        Если ваш товар весит более 35 кг, он должен быть на
                        поддонах. Товар укладывается на поддон равномерно и
                        распределяется по всей площади поддона. Нижний край
                        поддона оборачивается термоусадочной пленкой, она
                        снижает риск перемещения товара, а значит и риск
                        опрокидывания. Для предотвращения скольжения товара
                        используется специальная прокладка. Тяжелая часть груза
                        (если он неоднородный) ставится в центр поддона и
                        крепится пластиковыми или стальными полосами к поддону.{" "}
                        <a
                          href="poddony_palety_dlia_gruzovyh_perevozok"
                          title="Упаковка и маркировка товара"
                        >
                          Читать далее: Поддоны для грузоперевозок{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Какая внутренняя упаковка товара используется при перевозке?"
                        className="fancybox-button"
                        href="img/vnutrennia_upakovka_tovara.jpg"
                      >
                        <img
                          alt="Какая внутренняя упаковка товара используется при перевозке?"
                          src="img/vnutrennia_upakovka_tovara_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Какая внутренняя упаковка товара используется при
                        перевозке в контейнере?
                      </h5>
                      <p>
                        Это зависит от упаковываемого товара, но варианты
                        внутренней защиты включают: пузырчатую пленку,
                        пенополистирол, подушки безопасности или прокладку,
                        которая защищает товары в каждой коробке, что снижает
                        риск раздавливания.{" "}
                        <a
                          href="konteinery#standartnye_tipy_konteinerov"
                          title="Стандартные типы контейнеров"
                        >
                          Читать далее: Стандартные типы контейнеров
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Какая внешняя упаковка товара применяется при доставке из Китая?"
                        className="fancybox-button"
                        href="img/vneshnia_upakovka_tovara.jpg"
                      >
                        <img
                          alt="Какая внешняя упаковка товара применяется при доставке из Китая?"
                          src="img/vneshnia_upakovka_tovara_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Какая внешняя упаковка товара применяется при доставке
                        из Китая?
                      </h5>
                      <p>
                        Внешняя упаковка может включать картон, разделители
                        поддонов, деревянные ящики, гофрокартон, пузырчатую
                        пленку, защиту краев и термоусадочную пленку. Внешняя
                        упаковка должна соответствовать типу перемещаемых
                        товаров и их весу. Перегруженная коробка легко лопается,
                        в то время как товары, находящиеся в упаковке, могут
                        сдвинуться, увеличивая риск повреждения.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как отправить мебель, двери и другие предметы неудобного размера и формы?"
                        className="fancybox-button"
                        href="img/otpravit_mebel_upakovka.jpg"
                      >
                        <img
                          alt="Как отправить мебель, двери и другие предметы неудобного размера и формы?"
                          src="img/otpravit_mebel_upakovka_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как отправить мебель, двери и другие предметы неудобного
                        размера и формы в контейнере?
                      </h5>
                      <p>
                        Риск повреждения всегда выше при транспортировке
                        специальных товаров, поэтому их следует профессионально
                        упаковать. Этот вид груза должен перевозиться на
                        поддонах, где это возможно. Например, двери и рабочие
                        поверхности столов (мебели) должны быть упакованы с
                        защитой углов и кромок, желательно из прочного
                        гофрокартона.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как минимизировать риск кражи дорогостоящих товаров?"
                        className="fancybox-button"
                        href="img/risk_krazhi_tovarov.jpg"
                      >
                        <img
                          alt="Как минимизировать риск кражи дорогостоящих товаров?"
                          src="img/risk_krazhi_tovarov_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как минимизировать риск кражи дорогостоящих товаров из
                        контейнера?
                      </h5>
                      <p>
                        Если вы перевозите дорогостоящие товары, такие как
                        электроника, одежда или алкоголь, упаковывайте их, как
                        можно более нейтрально (для маскировки). Используйте
                        термоусадочную пленку и защитную ленту, для облегчения
                        отслеживания груза с помощью камер безопасности.
                        Избегайте использования видимых логотипов известных
                        брендов, чтобы не привлекать излишнее внимание.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как упаковать жидкости, чтобы избежать протекания?"
                        className="fancybox-button"
                        href="img/upakovka_zhidkostey_ot_protekania.jpg"
                      >
                        <img
                          alt="Как упаковать жидкости, чтобы избежать протекания?"
                          src="img/upakovka_zhidkostey_ot_protekania_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как упаковать жидкости, чтобы избежать протекания?
                      </h5>
                      <p>
                        Жидкие товары: напитки или банки с краской, должны быть
                        упакованы вместе с абсорбирующим материалом, чтобы
                        избежать подтекания и пролива на другие товары и
                        оборудование в этом же контейнере. Грузоотправитель,
                        отправляющий <strong>ненадлежащим </strong> образом
                        упакованные товары, может быть привлечен к
                        ответственности за ущерб.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как отправить опасный груз?"
                        className="fancybox-button"
                        href="img/otpravka_opasnogo_gruza.jpg"
                      >
                        <img
                          alt="Как отправить опасный груз?"
                          src="img/otpravka_opasnogo_gruza_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как отправить опасный груз?
                      </h5>
                      <p>
                        Вы, как отправитель, несете ответственность за
                        классификацию, упаковку и маркировку опасных грузов в
                        соответствии с правилами, для используемого вида
                        транспорта. Вы должны дать любой документ, требуемый
                        перевозчиком. Ознакомьтесь с местными правилами и
                        помните, что во многих странах все транспортные
                        компании, отправляющие опасные грузы, должны иметь
                        квалифицированного консультанта по безопасности.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как упаковать товары, чувствительные к температуре?"
                        className="fancybox-button"
                        href="img/upakovka_gruzov_chuvstvitelnyh_k_temperature.jpg"
                      >
                        <img
                          alt="Как упаковать товары, чувствительные к температуре?"
                          src="img/upakovka_gruzov_chuvstvitelnyh_k_temperature_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как упаковать товары чувствительные к температуре?
                      </h5>
                      <p>
                        Всегда учитывайте температуру окружающей среды в месте
                        отправления, в пункте назначения и при транспортировке.
                        В некоторых поездках ваши грузы могут подвергаться
                        температурам от "значительно ниже нуля", до высоких
                        летних температур. Особенно, когда товары оставляются на
                        открытом воздухе под прямыми солнечными лучами в течение
                        длительного времени, например, на асфальте в аэропорту.
                        Если товары чувствительны к холоду, они могут быть
                        покрыты специальным термопокрытием. Вы можете заказать
                        контейнеры (дополнительно) с внутренней регулировкой
                        температуры.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как маркировать грузы при отправке из Китая?"
                        className="fancybox-button"
                        href="img/markirovka_gruza_v_kitae.jpg"
                      >
                        <img
                          alt="Как маркировать грузы при отправке из Китая?"
                          src="img/markirovka_gruza_v_kitae_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как маркировать грузы при отправке из Китая?
                      </h5>
                      <p>
                        Необходимо маркировать абсолютно все грузы этикетками до
                        их окончательной упаковки. Отправитель и получатель
                        должны быть четко указаны на этикетке, которая будет
                        прикреплена к плоской поверхности короба и должна быть
                        четко видна на боковой стороне. Размещайте свои штрих
                        коды и логотипы
                      </p>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-md-2 col-sm-2">
                      <a
                        data-rel="fancybox-button"
                        title="Как маркировать хрупкие товары?"
                        className="fancybox-button"
                        href="img/markirovka_hrupkih_tovarov.jpg"
                      >
                        <img
                          alt="Как маркировать хрупкие товары?"
                          src="img/markirovka_hrupkih_tovarov_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <h5 className="pb-0 text-uppercase">
                        Как маркировать хрупкие товары?
                      </h5>
                      <p>
                        Хрупкие товары должны быть обозначены специальными
                        символами стекла и стрелками, которые показывают правую
                        сторону и вверх ящика. При перегрузке ящиков с этими
                        символами и маркировкой, их грузят в щадящем режиме.
                        Многие ящики требуют ручной перегрузки в контейнере,
                        вместо механической.
                      </p>
                    </div>
                  </div>

                  <div className="line-dashed pt-30"></div>
                  <div
                    id="informacia_o_konteinereh_dlia_dostavki_tovarov"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <h4 className="text-center font-20 pt-20 font-black pt-5">
                    Информация о контейнерах для доставки товаров из Китая
                  </h4>
                  <p className="text-center font-14 pt-14 font-black pt-5">
                    <a href="konteinery">
                      Подробно о характеристиках контейнеров для доставки грузов
                      из Китая
                    </a>
                  </p>
                  <div className="pt-20">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr>
                            <th style={{ textAlign: "center" }}>имя</th>
                            <th style={{ textAlign: "center" }}>
                              Визуализация
                            </th>
                            <th style={{ textAlign: "center" }}>Длина, м</th>
                            <th style={{ textAlign: "center" }}>Ширина, м</th>
                            <th style={{ textAlign: "center" }}>Высота, м</th>
                            <th style={{ textAlign: "center" }}>
                              Вместимость, м3
                            </th>
                            <th style={{ textAlign: "center" }}>
                              Вес груза, кг
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{ textAlign: "center" }}
                              colSpan="7"
                              align="center"
                            >
                              <strong>Контейнер 20 FT</strong>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">Стандарт (ГП)</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-117"
                                title="Стандарт (ГП)"
                                src="img/kont_01_standart.jpg"
                                alt="Стандарт (ГП)"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">33,3</td>
                            <td align="center">21 700</td>
                          </tr>
                          <tr>
                            <td align="center">Охлажденный (Reefer)</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-118"
                                title="Охлажденный (Reefer)"
                                src="img/kont_02_ohlazhdennyi.jpg"
                                alt="Охлажденный (Reefer)"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,6</td>
                            <td align="center">26,5</td>
                            <td align="center">24 000</td>
                          </tr>
                          <tr>
                            <td align="center">Изолированный</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-119"
                                title="изолированный"
                                src="img/kont_03_izolirivannyi.jpg"
                                alt="изолированный"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,44</td>
                            <td align="center">26,3</td>
                            <td align="center">17 760</td>
                          </tr>
                          <tr>
                            <td align="center">С открытым верхом</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-120"
                                title="С открытым верхом"
                                src="img/kont_04_otkrytyi_verh.jpg"
                                alt="С открытым верхом"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">32,6</td>
                            <td align="center">21 500</td>
                          </tr>
                          <tr>
                            <td align="center">Контейнер-цистерна</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-121"
                                title="Контейнер-цистерна"
                                src="img/kont_05_cisterna.jpg"
                                alt="Контейнер-цистерна"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,6</td>
                            <td align="center">24</td>
                            <td align="center">21 000</td>
                          </tr>
                          <tr>
                            <td align="center">Flatrack</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-122"
                                title="Flatrack"
                                src="img/kont_06_ploskii_gruz.jpg"
                                alt="Flatrack"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">6,06</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">27,9</td>
                            <td align="center">20 000</td>
                          </tr>
                          <tr>
                            <td
                              style={{ textAlign: "center" }}
                              colSpan="7"
                              align="center"
                            >
                              <strong>40 FT</strong>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">Стандарт (ГП)</td>
                            <td align="center">
                              <img
                                className="alignnone wp-image-123"
                                title="Стандарт (ГП)"
                                src="img/kont_07_40_standart.jpg"
                                alt="Стандарт (ГП)"
                                width="80"
                                height="45"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">67,2</td>
                            <td align="center">26 580</td>
                          </tr>
                          <tr>
                            <td align="center">Высокий</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-124"
                                title="Высокий куб"
                                src="img/kont_08_vysokii.jpg"
                                alt="Высокий куб"
                                width="80"
                                height="45"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,90</td>
                            <td align="center">76,0</td>
                            <td align="center">26 330</td>
                          </tr>
                          <tr>
                            <td align="center">Рефрижератор (Reefer)</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-125"
                                title="Охлажденный (Reefer)"
                                src="img/kont_09_refrizherator.jpg"
                                alt="Охлажденный (Reefer)"
                                width="70"
                                height="45"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,6</td>
                            <td align="center">60</td>
                            <td align="center">26 110</td>
                          </tr>
                          <tr>
                            <td align="center">Высокий рефрижератор</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-126"
                                title="High Cube Reefer"
                                src="img/kont_10_visikii_refrizherator.jpg"
                                alt="High Cube Reefer"
                                width="70"
                                height="47"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,90</td>
                            <td align="center">66</td>
                            <td align="center">26 280</td>
                          </tr>
                          <tr>
                            <td align="center">С открытым верхом</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-127"
                                title="С открытым верхом"
                                src="img/kont_11_otkrytyi_verh.jpg"
                                alt="С открытым верхом"
                                width="90"
                                height="45"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">66,7</td>
                            <td align="center">31 570</td>
                          </tr>
                          <tr>
                            <td align="center">Flatrack</td>
                            <td align="center">
                              <img
                                className="alignnone size-full wp-image-128"
                                title="Flatrack"
                                src="img/kont_12_ploskii.jpg"
                                alt="Flatrack"
                                width="90"
                                height="50"
                              />
                            </td>
                            <td align="center">12,19</td>
                            <td align="center">2,44</td>
                            <td align="center">2,59</td>
                            <td align="center">54,8</td>
                            <td align="center">39 470</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div
                  id="transportnye_kartochki_s_parametrami_dostavki_gruzov"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="col-md-12 mt-20">
                  <div className="row">
                    <div className="lineheader-white">
                      <h2 className="text-center font-18 font-black pt-5">
                        Транспортные карточки с параметрами доставки грузов из
                        Китая
                      </h2>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6 front-carousel">
                          <div className="carousel slide" id="44">
                            <div className="carousel-inner">
                              <div className="item">
                                <img
                                  alt="Доставка света из Китая"
                                  src="img/dostavka_sveta_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>
                                    Доставка света (2-х диодных модулей) из
                                    Китая
                                  </p>
                                </div>
                              </div>
                              <div className="item active">
                                <img
                                  alt="Транспортировка светового оборудования из Китая"
                                  src="img/transportirovka_svetovogo_oborudovania_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>
                                    Транспортировка светового оборудования из
                                    Китая
                                  </p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Светодиоды из Китая, доставка в Россию"
                                  src="img/svetodiody_iz_kitaya_dostavka_v_rossiyu.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Светодиоды из Китая, доставка в Россию</p>
                                </div>
                              </div>
                            </div>

                            <a
                              data-slide="prev"
                              href="#44"
                              className="carousel-control left"
                            >
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a
                              data-slide="next"
                              href="#44"
                              className="carousel-control right"
                            >
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">Светотехника</span>
                          </h2>
                          <p>Светодиодные модули</p>
                          <strong>Наши услуги:</strong> Нанесение маркировки,
                          Доставка Китай – РФ, регистрация на таможенном посту,
                          таможенное оформление, доставка до адреса по РФ.
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> FCA жд станция в Гуанчжоу – жд станция Ворсино
                          – г.Клин
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                {" "}
                                Актуальная проблема{" "}
                              </h4>
                              <p>
                                Таможня хотела оформить корректировку таможенной
                                стоимости товара, т.к. посчитала, что стоимость
                                товара была занижена. Мы собрали необходимые
                                документы, подтверждающие стоимость товара,
                                предоставили их на таможню. Спор был закрыт,
                                товар растаможили по нашей стоимости.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 200кг</td>
                            <td> 0,4м3</td>
                            <td>картон</td>
                            <td>8 шт.</td>
                            <td>Жд + авто</td>
                            <td>17-23 дня</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6 front-carousel">
                          <div className="carousel slide" id="45">
                            <div className="carousel-inner">
                              <div className="item  active">
                                <img
                                  alt="Груз трансформаторов из Китая"
                                  src="img/gruz_transformatorov_izkitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Груз трансформаторов из Китая</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Упаковка груза в картонные коробки"
                                  src="img/upakovka_gruza_v_kartonnye_korobki.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Упаковка груза в картонные коробки</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Доставка ЖД транспортом"
                                  src="img/dostavka_zhd_transportm.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Доставка ЖД транспортом</p>
                                </div>
                              </div>
                            </div>

                            <a
                              data-slide="prev"
                              href="#45"
                              className="carousel-control left"
                            >
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a
                              data-slide="next"
                              href="#45"
                              className="carousel-control right"
                            >
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">
                              Электрооборудование
                            </span>
                          </h2>
                          <p>Траснформаторы</p>
                          <strong>Наши услуги:</strong> Нанесение маркировки,
                          Доставка Китай – РФ, таможенное оформление, оформление
                          Декларации соответствия техническому регламенту
                          Таможенного союза (ДС ТР ТС), доставка до адреса по
                          РФ.
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> FCA жд станция в Сучжоу – жд станция Ворсино –
                          Москва
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                {" "}
                                Актуальная проблема{" "}
                              </h4>
                              <p>Отсутствует</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 950 кг</td>
                            <td> 1,3 м3</td>
                            <td>картон</td>
                            <td>40 шт.</td>
                            <td>Жд + авто</td>
                            <td>17-23 дня</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6 front-carousel">
                          <div className="carousel slide" id="46">
                            <div className="carousel-inner">
                              <div className="item  active">
                                <img
                                  alt="Доставка POWERBANK из Китая"
                                  src="img/dostavka_powerbank_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Груз трансформаторов из Китая</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Перевозка контейнера для внешнего HDD"
                                  src="img/perevozka_konteinera_hdd_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Перевозка контейнера для внешнего HDD</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Компьютерные комплектующие из Китая"
                                  src="img/komputernye_komplektuyushchie_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Компьютерные комплектующие из Китая</p>
                                </div>
                              </div>
                            </div>

                            <a
                              data-slide="prev"
                              href="#46"
                              className="carousel-control left"
                            >
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a
                              data-slide="next"
                              href="#46"
                              className="carousel-control right"
                            >
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">Электроника</span>
                          </h2>
                          <p>Комплектующие. Запчасти для компьютеров</p>
                          <strong>Наши услуги:</strong> Забор груза от
                          поставщика, доставка Китай – РФ, регистрация на
                          таможенном посту, таможенное оформление, страховка,
                          оформление Сертификат соответствия техническому
                          регламенту Таможенного союза (СС ТР ТС), доставка до
                          адреса по РФ.
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br />
                          EXW Дунгуань – порт Янтянь – порт Владивосток – Москва
                          (забор груза от поставщика, доставка до адреса в МСК)
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Сертификат соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Страховой полис
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                {" "}
                                Характер груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>USB
                                  концентратор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Контейнер для внешнего жесткого диска
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Док
                                  станция для чтения HDD/SSD дисков
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Bluetooth аудио ресивер для авто
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Внешний аккумулятор (power bank)
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Контроллер PCIe
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 1326 кг</td>
                            <td> 5,95 м3</td>
                            <td>Картон (коробки)</td>
                            <td>1537 шт.</td>
                            <td>Море + Авто</td>
                            <td>30-35 дней</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6 front-carousel">
                          <div className="carousel slide" id="47">
                            <div className="carousel-inner">
                              <div className="item  active">
                                <img
                                  alt="Водоросли Нори, доставка из Китая"
                                  src="img/vodorosli_nori_dostavka_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Водоросли Нори, доставка из Китая</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Доставка пищевых продуктов из Китая"
                                  src="img/dostavka_pishchevy_produktov_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Доставка пищевых продуктов из Китая</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Погрузка контейнера на железной дороге"
                                  src="img/pogruzka_konteinera_na_zhelezhoy_doroge.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Погрузка контейнера на железной дороге</p>
                                </div>
                              </div>
                            </div>

                            <a
                              data-slide="prev"
                              href="#47"
                              className="carousel-control left"
                            >
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a
                              data-slide="next"
                              href="#47"
                              className="carousel-control right"
                            >
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">
                              Продукты питания
                            </span>
                          </h2>
                          <p>Водоросли Нори</p>
                          <strong>Наши услуги:</strong> Доставка Китай – РФ,
                          регистрация на таможенном посту, таможенное
                          оформление, оформление Декларации соответствия
                          техническому регламенту Таможенного союза (ДС ТР ТС),
                          доставка до адреса по РФ.
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> FOB порт Шанхай – порт Владивосток –
                          Екатеринбург
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Сертификат соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Страховой полис
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                {" "}
                                Характер груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>
                                  Водоросли Нори
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 1622 кг</td>
                            <td> 12,4 м3</td>
                            <td>Картон (коробки)</td>
                            <td>100 шт.</td>
                            <td>Море + Авто</td>
                            <td>20-25 дней</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6 front-carousel">
                          <div className="carousel slide" id="48">
                            <div className="carousel-inner">
                              <div className="item  active">
                                <img
                                  alt="Доставка технического оборудования из Китая"
                                  src="img/dostavka_tehnicheskogo_oborudovania_iz_kitaya.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>
                                    Доставка технического оборудования из Китая
                                  </p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Стеклянный реактор из лаборатории"
                                  src="img/stekliannyi_reactor_dlia_labotatorii.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Стеклянный реактор из лаборатории</p>
                                </div>
                              </div>
                              <div className="item">
                                <img
                                  alt="Доставка стеклянного хрупкого товара"
                                  src="img/dostavka_stekliannogo_hrupkogo_tovara.jpg"
                                />
                                <div className="carousel-caption">
                                  <p>Доставка стеклянного хрупкого товара</p>
                                </div>
                              </div>
                            </div>

                            <a
                              data-slide="prev"
                              href="#48"
                              className="carousel-control left"
                            >
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a
                              data-slide="next"
                              href="#48"
                              className="carousel-control right"
                            >
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">
                              Техническое оборудование
                            </span>
                          </h2>
                          <p>Двухслойный стеклянный реактор для лаборатории</p>
                          <strong>Наши услуги:</strong> Нанесение маркировки,
                          Доставка Китай – РФ, регистрация на таможенном посту,
                          таможенное оформление, оформление Декларации
                          соответствия техническому регламенту Таможенного союза
                          (ДС ТР ТС), вывоз груза со склада временного хранения
                          (СВХ) Шереметьево
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> FCA аэропорт Пекин – Москва, аэропорт
                          Шереметьево
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                Актуальная проблема{" "}
                              </h4>
                              <p>
                                Данный груз подлежит специальной маркировке, но
                                поставщик не проконтролировал этот момент и не
                                нанес ее. Это было выявлено нами при принятии
                                груза в аэропорту Пекина. Мы оперативно решили
                                данную проблему на месте: согласовали маркировку
                                с брокером и самостоятельно нанесли ее,
                                вследствие чего при растаможке груза никаких
                                проблем не возникло.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 205 кг</td>
                            <td> 2 м3</td>
                            <td>Картон (коробки)</td>
                            <td> 3 шт.</td>
                            <td> Авиа</td>
                            <td> 1-2 дня</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="pictext">
                            <img
                              className="img-responsive"
                              alt="Доставка автозапчастей из Китая"
                              src="img/dostavka_avtozapchastey_iz_kitaya.jpg"
                            />
                            <span>Доставка автозапчастей из Китая</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">Автозапчасти</span>
                          </h2>
                          <p>Форсунки</p>
                          <strong>Наши услуги:</strong> Оплата за товар, забор
                          груза от поставщика, жесткая упаковка, страхование,
                          доставка Китай – РФ, экспедирование по Москве до ТК
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> Иу (Китай) – Москва (Россия)
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                Актуальная проблема{" "}
                              </h4>
                              <p>
                                Возникла проблема необходимости дополнительной
                                упаковки. решили, упаковав на своем
                                консолидационном складе в Китае
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr> </tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 230 кг</td>
                            <td> 0,95 м3</td>
                            <td>Картон (коробки)</td>
                            <td> 25 шт.</td>
                            <td> Авто</td>
                            <td> 15-20 дней</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="pictext">
                            <img
                              className="img-responsive"
                              alt="Тормозные колодки из Китая"
                              src="img/tormoznye_kolodki_iz_kitaya.jpg"
                            />
                            <span>Тормозные колодки из Китая</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">
                              Тормозные колодки
                            </span>
                          </h2>
                          <p>Тормозные колодки</p>
                          <strong>Наши услуги:</strong> Забор груза от
                          поставщика, упаковка на паллеты и стретч-пленка,
                          доставка Китай – РФ, экспедирование по Москве до ТК
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> Гуанчжоу (Китай) – Москва (Россия) – Самара
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                Актуальная проблема{" "}
                              </h4>
                              <p>
                                Возникла проблема необходимости дополнительной
                                упаковки. решили, упаковав на своем
                                консолидационном складе в Китае
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 2716 кг</td>
                            <td> 4,71 м3</td>
                            <td>Картон (коробки)</td>
                            <td> 206 шт.</td>
                            <td> ЖД + Авто</td>
                            <td> 30-35 дней</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-planka-gray">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="pictext">
                            <img
                              className="img-responsive"
                              alt="Держатели для телефона"
                              src="img/derzhateli_dlia_telefona.jpg"
                            />
                            <span>Держатели для телефона</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h2>
                            Груз:{" "}
                            <span className="text-red-site">
                              Аксессуары для телефона
                            </span>
                          </h2>
                          <p>Держатели для телефона</p>
                          <strong>Наши услуги:</strong> Оплата товара, прием
                          груза на складе, взвесить и обмерить перед отправкой,
                          сделать жесткую упаковку, доставка Китай – РФ, вывоз
                          груза со склада временного хранения Шереметьево,
                          доставка до адреса по Москве.
                          <div className="line-dashed"></div>
                          <strong>Условия и маршрут доставки из Китая:</strong>
                          <br /> Гуанчжоу (Китай) – Москва (Россия)
                          <div className="line-dashed"></div>
                          <div className="row">
                            <div className="col-md-5">
                              <h4 className="text-black pb-5">
                                {" "}
                                Документы для груза{" "}
                              </h4>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Договор
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Счета
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i> Акты
                                  выполненных работ
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация соответствия
                                </li>
                                <li>
                                  <i className="fa fa fa-caret-right"></i>{" "}
                                  Декларация на товары (ГТД)
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-7">
                              <h4 className="text-black pb-15">
                                Актуальная проблема{" "}
                              </h4>
                              <p>Не возникало</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-bordered  table-schedule table-hover">
                        <thead>
                          <tr></tr>
                          <tr>
                            <th className="col-xs-2">Вес</th>
                            <th className="col-xs-2">Объем</th>
                            <th className="col-xs-2">Упаковка</th>
                            <th className="col-xs-2">Кол-во</th>
                            <th className="col-xs-2">Транспорт</th>
                            <th className="col-xs-2">Сроки</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td> 56 кг</td>
                            <td> 0,2 м3</td>
                            <td>Картон (коробки)</td>
                            <td> 1 шт.</td>
                            <td> Авиа</td>
                            <td> 13-15 дней</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      id="katalog_vvozimyh_tovarov"
                      style={{
                        display: "block",
                        marginBottom: "100px",
                        marginTop: "-90px",
                      }}
                    ></div>
                    <div className="lineheader-white">
                      <h3 className="text-center font-20 font-black pt-5">
                        Каталог ввозимых товаров (импорт из Китая)
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Бытовая электроника</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Бытовая техника</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Электроника и комплектующие</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Одежда (женская, мужская, детская)</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Одежда (Аксессуары)</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Швейная фурнитура</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Текстиль</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Электромобили/бензотехника/</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Автозапчасти</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Спортивные товары</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Товары для отдыха</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Товары для красоты</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Аттракционы</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Для дома и дачи</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Лампы и освещение</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Мебель</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Оборудование для производства</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Инструменты</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Рекламные материалы</a>
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>
                            <a href="#">Еда, напитки</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="smart-grids">
                      <div className="smart-wrapper">
                        <div className="smart-pricing">
                          <div className="pricing-tables separated-tables elegant-style comparison-table  three-colm">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-3 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-3 font-24">
                                  БЫТОВАЯ ЭЛЕКТРОНИКА
                                </h2>
                              </div>
                              <ul>
                                <li>Фотоаппараты</li>
                                <li>Компьютеры, мониторы, мышки, кабели </li>
                                <li>Наушники/гарнитуры</li>
                                <li>Телефоны, рации</li>
                                <li>Электронные сигареты</li>
                                <li>Домашняя аудио/видеотехника</li>
                                <li>Видеоигры</li>
                                <li>Аксессуары и запчасти (быт.элек.)</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="green-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="green-dark  font-24">
                                  БЫТОВАЯ ТЕХНИКА
                                </h2>
                              </div>
                              <ul>
                                <li>Кондиционеры и климатическая техника</li>
                                <li>Вентиляторы, обогреватели</li>
                                <li>Сушилки для рук</li>
                                <li>Кухонное оборудование</li>
                                <li>Водонагреватели</li>
                                <li>Кофемашины</li>
                                <li>Холодильники и морозильники </li>
                                <li>Электрические чайники</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-1 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-1 font-24">
                                  ОДЕЖДА
                                </h2>
                              </div>
                              <ul>
                                <li>Одежда женская </li>
                                <li>Одежда мужская</li>
                                <li>Одежда детская</li>
                                <li>Аксессуары для одежды</li>
                                <li>Швейные принадлежности</li>
                                <li>Манекены</li>
                                <li>Нити</li>
                                <li>Швейное оборудование</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="red-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="red-dark  font-24">Текстиль</h2>
                              </div>
                              <ul>
                                <li>Ткань</li>
                                <li>Пряжа</li>
                                <li>Кожа</li>
                                <li>Полотенца</li>
                                <li>Постельное белье</li>
                                <li>Покрывала</li>
                                <li>Подушки</li>
                                <li>Коврики</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="orange-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="orange-dark  font-24">ОБУВЬ</h2>
                              </div>
                              <ul>
                                <li>Мужская обувь</li>
                                <li>Женская обувь</li>
                                <li>Детская обувь</li>
                                <li>Спортивная обувь</li>
                                <li>Летняя обувь</li>
                                <li>Зимняя обувь</li>
                                <li>Осенне-весенняя обувь</li>
                                <li>Брендовая обувь</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-4 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-4 font-24">
                                  Электромобили
                                </h2>
                              </div>
                              <ul>
                                <li>Электроскейты</li>
                                <li>Электросамокаты</li>
                                <li>Электроквадроциклы</li>
                                <li>Электровелосипед</li>
                                <li>Моноколеса</li>
                                <li>Электроскутер</li>
                                <li>Электромотоциклы</li>
                                <li>Экомобилики</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm  mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-3 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-3 font-24">
                                  Автозапчасти
                                </h2>
                              </div>
                              <ul>
                                <li>Для легковых автомобилей</li>
                                <li>Для грузовых автомобилей </li>
                                <li>Для мотоциклов и скутеров</li>
                                <li>Для строительной техники</li>
                                <li>Для бензиновых и дизельных авто</li>
                                <li>Для дорожной техники</li>
                                <li>Для прицепов и кемпингов</li>
                                <li>Аксессуары для автомобилей</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="green-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="green-dark  font-24">
                                  Спортивные товары
                                </h2>
                              </div>
                              <ul>
                                <li>Гантели, гири, грифы, блины</li>
                                <li>Оборудование для фитнеса</li>
                                <li>Товары для азартных игр</li>
                                <li>Походные и для кемпинга</li>
                                <li>Водонагреватели</li>
                                <li>Для водного спорта</li>
                                <li>Для спортсменов</li>
                                <li>Настольные игры</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-1 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-1 font-24">
                                  Аттракционы
                                </h2>
                              </div>
                              <ul>
                                <li>Батуты </li>
                                <li>Парки и парковое хоз-во</li>
                                <li>Одежда детская</li>
                                <li>Скалодромы</li>
                                <li>Бамперные машинки</li>
                                <li>Игровые площадки</li>
                                <li>Компрессоры и карусели</li>
                                <li>Эл.двинатели и запчасти</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="red-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="red-dark  font-24">Охрана</h2>
                              </div>
                              <ul>
                                <li>Замки и ключи</li>
                                <li>СКУД, видеонаблюдение</li>
                                <li>Сейфы</li>
                                <li>Товары для самообороны</li>
                                <li>Средства индивидуальной защиты</li>
                                <li>Сигнализация</li>
                                <li>Охранные системы</li>
                                <li>Камеры ночного видения</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="orange-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="orange-dark  font-24">
                                  Подарки
                                </h2>
                              </div>
                              <ul>
                                <li>Товары для вечеринок</li>
                                <li>Подарочные наборы</li>
                                <li>Украшения для дома</li>
                                <li>Скульптуры</li>
                                <li>Вышивка</li>
                                <li>Сувениры, брелоки</li>
                                <li>Флаги</li>
                                <li>Безделушки</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-4 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-4 font-24">
                                  Электроника
                                </h2>
                              </div>
                              <ul>
                                <li>Солнечные батареи</li>
                                <li>Электронные приборы</li>
                                <li>Клеммы</li>
                                <li>Контакторы</li>
                                <li>Соединители</li>
                                <li>Предохранители</li>
                                <li>Аккумуляторы</li>
                                <li>Реле</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm  mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-3 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-3 font-24">
                                  Игрушки
                                </h2>
                              </div>
                              <ul>
                                <li>Куклы</li>
                                <li>Воздушные шары</li>
                                <li>Развивающие игры</li>
                                <li>Деревянные игрушки</li>
                                <li>Игрушки на батарейках</li>
                                <li>Игрушки для малышей</li>
                                <li>Ролевые игры</li>
                                <li>Пистолеты</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="green-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="green-dark  font-24">
                                  Красота и здоровье
                                </h2>
                              </div>
                              <ul>
                                <li>Косметика </li>
                                <li>Аппараты для здоровья</li>
                                <li>Для здоровья тела</li>
                                <li>Для упражнений</li>
                                <li>Гели, мази и шампуни</li>
                                <li>Товары для душа и ванны</li>
                                <li>Кремы и лосьоны</li>
                                <li>Утягивающие пояса</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-1 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-1 font-24">
                                  Дом и Дача
                                </h2>
                              </div>
                              <ul>
                                <li>Стекло</li>
                                <li>Окна и двери</li>
                                <li>Москитные сетки</li>
                                <li>Огнезащитные материалы</li>
                                <li>Бамперные машинки</li>
                                <li>Потолки, панели, пленка</li>
                                <li>Камины и печи</li>
                                <li>Дизайн и декор</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="red-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="red-dark  font-24">Освещение</h2>
                              </div>
                              <ul>
                                <li>Лампы</li>
                                <li>Светильники и торшеры</li>
                                <li>Наружные лампы</li>
                                <li>Внутреннее освещение</li>
                                <li>Люстры и бра</li>
                                <li>Лампы накаливания</li>
                                <li>Светодиодные лампы</li>
                                <li>Светильники с датчиками</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="orange-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="orange-dark  font-24">Мебель</h2>
                              </div>
                              <ul>
                                <li>Бамбуковая мебель</li>
                                <li>Офисная мебель</li>
                                <li>Коммерческая мебель</li>
                                <li>Домашняя мебель</li>
                                <li>Металлическая мебель</li>
                                <li>Ротанговая мебель</li>
                                <li>Детская мебель</li>
                                <li>Аксессуары и запчасти для мебели</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-4 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-4 font-24">
                                  Оборудование
                                </h2>
                              </div>
                              <ul>
                                <li>Производство стройка</li>
                                <li>Электроника</li>
                                <li>Лазерное оборудование</li>
                                <li>Оборудование для печати</li>
                                <li>Текстильное оборудование</li>
                                <li>Бумажное оборудование</li>
                                <li>Химическое оборудование</li>
                                <li>Деревообрабатывающее</li>
                              </ul>
                            </div>
                          </div>

                          <div className="pricing-tables separated-tables elegant-style comparison-table three-colm mt-40">
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="red-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="red-dark  font-24">
                                  Инструменты
                                </h2>
                              </div>
                              <ul>
                                <li>Ключи</li>
                                <li>Наборы ключей для авто</li>
                                <li>Наборы ключей универсальные</li>
                                <li>Бензопилы и запчасти</li>
                                <li>Электроинструменты</li>
                                <li>Для производства</li>
                                <li>Для техники</li>
                                <li>Для строительства</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="orange-lite font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="orange-dark  font-24">
                                  Для рекламы
                                </h2>
                              </div>
                              <ul>
                                <li>Пенка</li>
                                <li>Фольга</li>
                                <li>Карты</li>
                                <li>Пластик</li>
                                <li>Крышки и банки</li>
                                <li>Упаковка</li>
                                <li>Пакеты</li>
                                <li>Ручки</li>
                              </ul>
                            </div>
                            <div className="colm">
                              <div className="pricing-header header-colored">
                                <h4 className="monoblue-top-4 font-14">
                                  Товары из Китая
                                </h4>
                                <h2 className="monoblue-bottom-4 font-24">
                                  Питание
                                </h2>
                              </div>
                              <ul>
                                <li>Еда</li>
                                <li>Напитки</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="tab-pane">
            <div className="pdf pb-30">
              <a href="doc/import_tovarov_iz_kitaya_v_rossiyskuyu_federaciyu.pdf">
                <img
                  className="pull-left img-responsive mr-10"
                  width="100"
                  src="img/pdf_dokument_icon_100x111.png"
                  alt="Документ PDF"
                />{" "}
              </a>
              <h5 className="text-uppercase">
                Импорт товаров из Китая в Российскую Федерацию{" "}
              </h5>
              <p>
                Доставка грузов из Китая предполагает не только различный
                транспорт: морской, авиационный, железнодорожный и
                автомобильный, но и серию схем транспортировки, применяемых в
                уникальных условиях со сменой транспорта в дороге и перегрузкой
                товара в терминалах.
                <br />{" "}
                <a
                  className="text-theme-colored mt-10 mb-0 pull-right flip"
                  href="doc/import_tovarov_iz_kitaya_v_rossiyskuyu_federaciyu.pdf"
                >
                  {" "}
                  Скачать документ <i className="fa fa-angle-double-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default dostavka_gruzov_iz_kitaya;
