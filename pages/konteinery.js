import Head from "next/head";
import App from "../components/App";

const konteinery = () => {
  return (
    <App navLight="gruz">
      <Head>
        <title>Типы контейнеров. Размеры и применение</title>
        <meta
          name="description"
          content="Подбор контейнеров по заданным параметров для определенного типа груза и вида зафрахтованного транспорта"
        />
        <meta
          property="og:title"
          content="Типы контейнеров. Размеры и применение"
        />
        <meta
          property="og:description"
          content="Подбор контейнеров по заданным параметров для определенного типа груза и вида зафрахтованного транспорта"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/konteinery" />
        <link rel="canonical" href="https://rosimport.ru/konteinery" />
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
            <li className="active">Типы контейнеров. Размеры и применение</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Типы контейнеров. Размеры и применение
                  </h1>
                </div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Типы контейнеров. Размеры и применение"
                    className="fancybox-button"
                    href="img/konteinery_razmery_i_tipy.jpg"
                  >
                    <img
                      alt="Типы контейнеров. Размеры и применение"
                      src="img/konteinery_razmery_i_tipy_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="row mt-30">
                  <div className="col-md-8">
                    <h2 className="text-center font-20 pb-10">
                      Типы контейнеров.Размеры и использование (РУКОВОДСТВО)
                    </h2>
                    <p>
                      Контейнеры бывают разных форм и размеров и используются
                      для разных целей. Знание типов подходящих вам контейнеров,
                      дает уверенность в правильности принятия решения о
                      перевозке груза.
                    </p>
                    <p>
                      Мы решили сделать{" "}
                      <span className="text-fon-yellow">
                        полный обзор контейнеров
                      </span>
                      , чтобы вам было удобно выбрать подходящий для ваших
                      задач.{" "}
                    </p>
                    <p>
                      Международная торговля была поднята на высший уровень
                      обычным транспортным контейнером. В 1950-х годах Малком
                      Маклин создал историю контейнерных перевозок. Он изобрёл
                      контейнер! Повышение прибыли, эффективности и оптимизации
                      времени загрузки контейнерных перевозок - это стал
                      настоящий прорыв в мировых грузоперевозках.
                    </p>
                    <p>
                      Различные типы контейнеров были приведены к общему
                      стандарту в 1970 году. Согласно нормативам ISO, 20-футовый
                      контейнер и 40-футовый контейнер в настоящее время
                      являются отраслевыми стандартами.
                    </p>
                    <p>
                      С тех пор, как они были введены в эксплуатацию, эти
                      контейнеры широко использовались для перевозки грузов в
                      международных морях, но каковы различные типы и размеры
                      контейнеров вы узнаете здесь
                    </p>
                    <p>
                      На этой странице приведены характеристики, типы, детальное
                      описание существующих контейнеров в{" "}
                      <a href="/">международных грузоперевозках</a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Типы контейнеров и размеры"
                        className="fancybox-button"
                        href="img/tipy_konteinerov_i_razmery.jpg"
                      >
                        <img
                          alt="Типы контейнеров и размеры"
                          src="img/tipy_konteinerov_i_razmery_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <h4 className="text-center link-orange">
                  Оглавление этой страницы
                </h4>
                <div className="row mt-20">
                  <div className="col-md-4 col-sm-4">
                    <div className="link-group">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#procedura_proverki_konteinera"
                            className="link-orange scroll"
                          >
                            Процедура проверки контейнера
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#proverka_zagruzki_konteinera"
                            className="link-orange scroll"
                          >
                            Проверка загрузки контейнера
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#specialnye_konteinery"
                            className="link-orange scroll"
                          >
                            Специальные типы контейнеров
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#standartnye_tipy_konteinerov"
                            className="scroll more"
                          >
                            Стандартный контейнер
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_vysokim_potolkom"
                            className="scroll more"
                          >
                            Контейнер с высоким потолком
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="link-group">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#refrizheratornyi_konteiner"
                            className="scroll more"
                          >
                            Рефрижераторный контейнер
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_dvoynoy_dveryu"
                            className="scroll more"
                          >
                            Контейнер с двойной дверью
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_otkrytym_verhom"
                            className="scroll more"
                          >
                            Контейнер с открытым верхом{" "}
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_pod_shirokiy_poddon"
                            className="scroll more"
                          >
                            Контейнер под широкий поддон
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_ploskimi_stoykami"
                            className="scroll more"
                          >
                            Контейнер c плоской стойкой
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="link-group">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_bokovoy_dveryu"
                            className="scroll more"
                          >
                            Контейнер c боковой дверью
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteiner_s_zhestkim_verhom"
                            className="scroll more"
                          >
                            Контейнер с жестким верхом
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#konteinernye_terminaly"
                            className="scroll more"
                          >
                            Контейнерные терминалы: факты и цифры
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#ispolzovanie_konteinerov_v_zhizni"
                            className="scroll more"
                          >
                            Использование контейнеров в жизни
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>
                          <a
                            href="#arenda_i_pokupka_konteinerov"
                            className="scroll more"
                          >
                            Аренда и покупка контейнеров
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-center font-18 pb-10">
                  Типы и различия морских контейнеров{" "}
                </h2>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Типы и различия морских контейнеров"
                    className="fancybox-button"
                    href="img/tipy_i_razlichiya_morskih_konteinerov.jpg"
                  >
                    <img
                      alt="Типы и различия морских контейнеров"
                      width="240"
                      src="img/tipy_i_razlichiya_morskih_konteinerov_sm.jpg"
                      className="img-responsive pull-right pl-20"
                    />
                  </a>
                </figure>
                <p>
                  <span className="text-fon-yellow">
                    Многоцелевые контейнеры:
                  </span>{" "}
                  универсальные контейнеры, они предназначены для перевозки
                  генеральных (полных) грузов. После временных «модификаций» их
                  можно легко использовать для перевозки сыпучих и жидких
                  грузов. Насыпные грузы перевозятся в большом, пневматически
                  нагруженном вставном баке, который заполняет внутреннюю часть
                  контейнера.
                </p>
                <p>
                  <span className="text-fon-yellow">
                    Контейнер с открытой крышей:
                  </span>{" "}
                  Контейнеры с открытой крышей в основном предназначены для
                  перевозки грузов, которые превышают высоту стандартного
                  контейнера и загружаются сверху (например, с помощью крана)
                  или если груз не может быть загружен в стандартный контейнер
                  через дверь.
                </p>
                <p>
                  Крыша контейнера покрыта водонепроницаемым брезентом, который
                  оснащен веревкой с таможенным замком. В контейнерах с жестким
                  верхом стальная крыша (около 450 кг) и дверной проём, оснащены
                  съемной верхней балкой. Во время транспортировки груза который
                  превышает высоту контейнера, он (груз) может быть размещен в
                  контейнере вертикально.
                </p>

                <div className="tab-content mt-20">
                  <div className="tab-pane row fade active in">
                    <div className="col-md-2">
                      <a
                        data-rel="fancybox-button"
                        title="Контейнерные единицы измерения TEU и FEU"
                        className="fancybox-button"
                        href="img/konteinernye_edinizy_izmereniya_teu_feu.jpg"
                      >
                        <img
                          alt="Контейнерные единицы измерения TEU и FEU"
                          src="img/konteinernye_edinizy_izmereniya_teu_feu_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 mt-5">
                      <h2 className="post-title text-center font-16 mb-10">
                        Контейнерные единицы измерения TEU и FEU
                      </h2>
                      <p className="mb-10">
                        Аббревиатура «TEU» в отрасли морских контейнерных
                        перевозок означает «Эквивалент 20-ти футов» и относится
                        к контейнеру 20-ft, используемому в России,
                        соответствует стандартному транспортному контейнеру.
                        Контейнерный размер стандартизирован{" "}
                        <a href="#konteinernye_terminaly">
                          для международных грузоперевозок
                        </a>
                        . Используется для расчета загрузки мощностей
                        контейнеровозов и указания обработки значений в порту.
                        Когда судно, например, емкость 1500 TEU, там стандартные
                        контейнеры длиной 20 Ft (1 Ft = 0.30479 м). А «FEU»
                        контейнер («40 футов - эквивалентная единица») ,
                        содержащий объем 40 Ft, как два TEU контейнера.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="tab-content mt-20">
                  <div className="tab-pane row fade active in">
                    <div className="col-md-2">
                      <a
                        data-rel="fancybox-button"
                        title="Контейнерный стандарт ISO 668"
                        className="fancybox-button"
                        href="img/konteynernyi_standart_iso_668.jpg"
                      >
                        <img
                          alt="Контейнерный стандарт ISO 668"
                          src="img/konteynernyi_standart_iso_668_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="col-md-10 mt-5">
                      <h2 className="post-title text-center font-16 mb-10">
                        Контейнерный стандарт ISO 668{" "}
                      </h2>
                      <p className="mb-10">
                        Стандарт ISO 668 это созданный в 1968 году международный
                        стандарт контейнеров, он регулирует внешние и внутренние
                        характеристики, вес интермодальных грузовых контейнеров.
                        Параметры контейнера определены в ISO 668. Список
                        характеристик:
                      </p>
                      <ul className="list-unstyled mb-10">
                        <li>
                          <i className="fa fa-caret-right"></i>Внешние и
                          внутренние размеры
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Размер дверного
                          проема
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Штабелирование
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Кронштейны,
                          поперечины, погрузочные рельсы
                        </li>
                      </ul>
                      <p className="mb-10">
                        Стандарт был дополнен и расширен несколько раз в
                        последующие годы. Базовая структура, требования в
                        передаче нагрузки, а также вес, были включены в свод
                        правил с момента поправки №1 от 2005 года. Версия R-668
                        E / 2013 в настоящее время применяется к ISO 668.
                      </p>
                      <p className="mb-10">
                        Этот унифицированный стандарт определяет важные значения
                        для транспортировки: благодаря идентичной конструкции
                        контейнеры ISO могут обрабатываться на терминалах по
                        всему миру. Их можно легко штабелировать и перевозить на
                        всех контейнеровозах - независимо от того, прибывает ли
                        судно из Европы, Азии или США. Они подходят{" "}
                        <a
                          title="Железнодорожна перевозка грузов"
                          href="zheleznodorozhnaya_perevozka_gruzov"
                        >
                          для любой железнодорожной перевозки
                        </a>
                        . Для контейнеров, стандартизированных по ISO 668,
                        применяются определенные критерии качества в отношении
                        устойчивости, безопасности и атмосферостойкости, которым
                        они должны соответствовать. Все без исключения!
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-center font-20 font-black pt-5 pt-30 pb-10">
                  Из чего сделаны транспортные контейнеры?
                </h2>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Из чего сделаны транспортные контейнеры"
                    className="fancybox-button"
                    href="img/iz_chego_sdelany_konteinery.jpg"
                  >
                    <img
                      alt="Из чего сделаны транспортные контейнеры"
                      width="330"
                      src="img/iz_chego_sdelany_konteinery_sm.jpg"
                      className="img-responsive pull-right pl-20"
                    />
                  </a>
                </figure>
                <p>
                  Контейнеры являются неотъемлемой частью любых грузоперевозок.
                  Эти металлические ящики со стандартными размерами используются
                  для перевозки полных (генеральных) и{" "}
                  <a
                    href="dostavka_sbornyh_gruzov"
                    title="Доставка сборных грузов"
                  >
                    сборных грузов из Китая
                  </a>
                  . Конечно, многие из нас видели прямоугольную коробку размером
                  с небольшое здание со стенами, полом, дверьми и крышей.
                </p>
                <p>
                  Стальная конструкция угловых стоек, является основой
                  контейнера. Каркас построен вдоль ферм, балок и поперечных
                  балок. Дно контейнера выдерживает маневрирование грузового
                  автомобиля с грузом и возможные удары при погрузке в трюм.
                </p>
                <p>
                  Кронштейны для крепления груза расположены на полу и на
                  внутренних стенках контейнера. Самая крепкая часть контейнера,
                  это угловые стойки с нижним и верхним углами-крюками. Они
                  используются для крепления, подъема и монтажа контейнера.
                  Двойные двери установлены на петлях, приваренных к угловым
                  стойкам. Водонепроницаемая дверь запирается на 2-4 замка и
                  имеет отверстия для навесных замков и уплотнений.
                </p>

                <h2 className="text-center font-20 font-black pt-10 pb-10">
                  Долговечность и ремонт контейнеров
                </h2>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Долговечность и ремонт контейнеров"
                    className="fancybox-button"
                    href="img/dolgovechnost_i_remont_konteinerov.jpg"
                  >
                    <img
                      alt="Долговечность и ремонт контейнеров"
                      width="330"
                      src="img/dolgovechnost_i_remont_konteinerov_sm.jpg"
                      className="img-responsive pull-right pl-20"
                    />
                  </a>
                </figure>
                <p>
                  В последних моделях контейнеров используется множество
                  технологических решений для повышения устойчивости к коррозии
                  и механическим повреждениям. Однако из-за крайне
                  неблагоприятной окружающей среды, а именно,{" "}
                  <a
                    title="Морская транспортировка грузов"
                    href="morskaya_transportirovka_gruzov"
                  >
                    морских перевозок грузов
                  </a>
                  , в которых контейнеры находятся в течение большей части своей
                  жизни, следует предпринять ремонтные меры для защиты от
                  воздействия окружающей среды. Главное - это регулярное
                  техническое обслуживание, которое помогает поддерживать
                  контейнер в хорошем состоянии на срок до 15 лет и
                  предотвращает быструю утилизацию.
                </p>
                <p>
                  Контейнеры, 80% своей жизни используются для перевозки в морях
                  и океанах. Соленая вода, высокие перегрузки и механические
                  повреждения во время погрузки и разгрузки являются наиболее
                  распространенными причинами возникающих дефектов. Старые типы
                  контейнеров, которые составляют большинство на судоходных
                  линиях, выходят из строя еще чаще.{" "}
                </p>
                <p>
                  Главным врагом контейнера, является коррозия. Этой судьбы не
                  сможет избежать ни один контейнер. Даже современные краски и
                  антикоррозийные покрытия не гарантируют полную защиту от
                  ржавчины. В большинстве случаев, контейнеры ржавеют снизу и по
                  углам, из-за чего лакокрасочные покрытия легко стираются при
                  маневрировании, движении кранами и вилочными погрузчиками.
                </p>

                <div
                  id="procedura_proverki_konteinera"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-1 font-black font-18 text-uppercase pt-5">
                    Процедура проверки контейнера
                  </h2>
                </div>
                <div className="row mb-10">
                  <div className="col-md-6">
                    <p>
                      Росимпорт обеспечит прохождение инспекци и наличие
                      инспекторов в шаговой доступности в течение 48 часов. Мы
                      поможем избежать непредвиденных ситуаций, при процедуре
                      проверки товаров в контейнере в Китае или России
                    </p>
                    <h4>
                      Распространенные нарушения выявленные при проверке
                      контейнеров испекторами
                    </h4>
                    <p>
                      Транспортный контейнер в плохом состоянии, может привести
                      к непредвиденной порче груза или к его частичной утрате.
                      Именно на это обращают внимание проверяя груз из Китая
                    </p>
                    <p>
                      Ваши контейнеры должны регулярно проверяться, очищаться и
                      ремонтироваться, чтобы обеспечить надлежащую защиту
                      содержимого. После того, как контейнеры были выгружены и
                      находятся в ожидании на отгрузочной площадке или в порту,
                      инспекторы могут проверять порожние контейнеры, используя
                      контрольный список ISO, чтобы убедиться, что проводится
                      комплексная процедура проверки контейнера.
                    </p>
                    <p>
                      Не ожидайте, что работники на судоремонтном заводе будут
                      должным образом выполнять процедуру проверки контейнера,
                      которая может рассчитывать только на работу
                      субподрядчиков.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Процедура проверки контейнера"
                        className="fancybox-button"
                        href="img/procedura_proverki_konteinera.jpg"
                      >
                        <img
                          alt="Процедура проверки контейнера"
                          src="img/procedura_proverki_konteinera_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="row mb-10">
                  <div className="col-md-4">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Контролеры внутри контейнера"
                        className="fancybox-button"
                        href="img/kontrollery_vnuri_konteinera.jpg"
                      >
                        <img
                          alt="Контролеры внутри контейнера"
                          src="img/kontrollery_vnuri_konteinera_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Проверка рефрижератора из Китая"
                        className="fancybox-button"
                        href="img/proverka_refrizheratora_iz_kitaya.jpg"
                      >
                        <img
                          alt="Проверка рефрижератора из Китая"
                          src="img/proverka_refrizheratora_iz_kitaya_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Дефекты контейнера"
                        className="fancybox-button"
                        href="img/defecty_konteinera.jpg"
                      >
                        <img
                          alt="Дефекты контейнера"
                          src="img/defecty_konteinera_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="table-header">
                  <span className="pt-10 pb-10">
                    <span className="font-14 text-uppercase">
                      Подробности процедуры проверки контейнера
                    </span>
                  </span>
                </div>
                <div className="table-responsive mt-0">
                  <table className="table table-bordered table-schedule mt-0">
                    <tbody className="text-center">
                      <tr>
                        <th className="col-xs-4 text-center">Задача</th>
                        <th className="col-xs-8 text-center">Решение</th>
                      </tr>
                      <tr>
                        <td className="user-td">Подготовить документы</td>
                        <td className="user-td">
                          Запишите данные инспекции ISO: номер контейнера,
                          данные инспектора, время, дату. Убедитесь, что
                          контейнер пуст.
                        </td>
                      </tr>
                      <tr>
                        <th className="col-xs-4 text-center">Внешний осмотр</th>
                        <th className="col-xs-8 text-center">Решение</th>
                      </tr>
                      <tr>
                        <td className="user-td">Ворота, двери, люки</td>
                        <td className="user-td">
                          Проверьте петли, прокладки, держатели, стержни,
                          фиксаторы, J-образные стержни, кулачки, желоба,
                          трафареты, угловые стойки и фитинги
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Стороны</td>
                        <td className="user-td">
                          Верхние и нижние рельсы, угловые стойки, карманы для
                          погрузчиков и держатели
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Фронтальная сторона</td>
                        <td className="user-td">
                          SO номера, держатели, угловые стойки, фитинги и панели
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Крыша</td>
                        <td className="user-td">
                          Номера ISO, угловые фитинги, верхняя направляющая,
                          верхняя направляющая дверного колпака и панели крыши
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Низ. Дно</td>
                        <td className="user-td">
                          Угловые фитинги, нижняя боковая направляющая, накладки
                          на пороги, поперечины и туннели для погрузчиков
                        </td>
                      </tr>
                      <tr>
                        <th className="col-xs-4 text-center">
                          Внутренний осмотр
                        </th>
                        <th className="col-xs-8 text-center">Решение</th>
                      </tr>
                      <tr>
                        <td className="user-td">Пол</td>
                        <td className="user-td">
                          Напольное покрытие, напольные крепежи, пороговая
                          пластина, крепежные устройства и утечки света
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Крыша</td>
                        <td className="user-td">
                          Панели крыши, щели и стыковки, сварку и петли
                        </td>
                      </tr>
                      <tr>
                        <td className="user-td">Стороны</td>
                        <td className="user-td">
                          Фанерная облицовка, ударная рейка, вертикальная плита,
                          горизонтальная рейка и проникание света
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    Инспектор уточняет мелкие и крупные дефекты. Любые серьезные
                    дефекты должны быть немедленно устранены. Более 5 мелких
                    дефектов свидетельствует о том, что контейнер нуждается в
                    ремонте. Подробнее о типе контенерови их характеристиках
                    читайте в статье:{" "}
                    <a title="Типы и размеры контейнеров" href="konteinery">
                      Типы и размеры контейнеров
                    </a>
                  </p>
                </div>

                <figure className="pt-40 pb-30">
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Проверка загрузки контейнера"
                    className="fancybox-button"
                    href="img/proverka_zagruzki_v_konteinerah.jpg"
                  >
                    <img
                      alt="Проверка загрузки контейнера"
                      src="img/proverka_zagruzki_v_konteinerah_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>

                <div
                  id="proverka_zagruzki_konteinera"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-1 font-black font-18 text-uppercase pt-10">
                    Проверка загрузки контейнера
                  </h2>
                </div>
                <p>
                  Когда происходит доставка груза из Китая, во время проверки
                  контейнера прикрепленный инспектор, будет выбирать из
                  контейнера случайные коробки или ящики. Он захочет убедиться,
                  что в вашей упакованной палете или контейнере, находится груз
                  соответствующий заявленному в документах. По спецификации,
                  количеству и характеристикам. Что на поверхности упаковки
                  обозначены корректные штрих-коды, маркировка и другие знаки
                  требующиеся при транспортировке груза.
                </p>
                <p>
                  Для проверки груза используется международная процедура
                  статистической выборки ANSI / ASQC Z1.4 (ISO 2859-1).{" "}
                </p>
                <p>
                  Инспекторы обязаны выдать проверочный сертификат, если это
                  предусмотрено аккредитивом.
                </p>
                <h4 className="text-left font-16 font-black text-uppercase pb-10 pt-5">
                  При проверке контейнера в Китае, мы обеспечиваем
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Оплату инспекции
                    (все включено)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i> Инспектор на месте
                    (48 часов)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i> Отчеты о проверке в
                    тот же день
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i> Сертификат проверки
                  </li>
                </ul>

                <div
                  id="specialnye_konteinery"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Специальные типы контейнеров
                  </h2>
                </div>
                <p>
                  Специальный тип контейнера изготавливается или может быть или
                  переоборудован для различных целей в соответствии с
                  конкретными потребностями, которые не могут быть удовлетворены
                  контейнером стандартных размеров. Многие детали могут быть
                  изменены: различное положение двери (ей), изменения в высоте и
                  ширине самого контейнера или технологического оборудования
                  внутри контейнера.
                </p>
                <p>
                  Ниже приведен список специальных типов и размеров контейнеров,
                  о которых вам следует знать.
                </p>

                <div className="row pb-30">
                  <div className="col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнер с плоской стойкой"
                          src="img/konteiner_s_ploskoy_stoikoy.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнер с плоской стойкой
                        </h5>
                        <p>
                          Контейнеры с плоскими стойками особенно подходят для
                          тяжелых грузов и негабаритных грузов, которые
                          необходимо загружать сверху или сбоку. Существуют
                          складные и неразборные контейнеры со стенками или без
                          них. Контейнеры с плоскими стойками изготавливаются из
                          стали и имеют размеры 20 ′ и 40 ′.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Интермодальный контейнер"
                          src="img/konteiner_intermodalnyi.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Интермодальный контейнер
                        </h5>
                        <p>
                          Интермодальный контейнер может быть легко переброшен с
                          шасси грузовика на ЖД вагон. Эти транспортировочные
                          контейнеры имеют складные ножки для адаптации
                          контейнеров между двумя видами транспорта. Транспорт
                          со сменным кузовом обычно используется в Европе.
                          Сменный кузов весит и стоит дешевле, чем стандартные
                          транспортные контейнеры.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнер-цистерна"
                          src="img/konteiner_cisterna.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">Контейнер-цистерна</h5>
                        <p>
                          Это контейнеры для хранения жидкости. Обычно они
                          изготавливаются из прочной стали и других
                          антикоррозионных материалов для защиты жидкого груза
                          внутри контейнера
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнер с двойной дверью"
                          src="img/konteiner_s_dvoynoy_dveriu.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнер с двойной дверью
                        </h5>
                        <p>
                          Двойные двери облегчают погрузку и разгрузку.
                          Конструкция такого вида транспортных контейнеров
                          производится из стали и железа. Они доступны в
                          стандартных размерах 40 футов и 20 футов.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Рефрижераторный контейнер ISO"
                          src="img/konteiner_refrizherator_iso.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Рефрижераторный контейнер ISO
                        </h5>
                        <p>
                          Рефрижераторный грузовой контейнер ISO - это контейнер
                          с регулируемой температурой и контролируемой низкой
                          температурой. Эти типы единиц используются для
                          перевозки скоропортящихся продуктов на большие
                          расстояния, таких как овощи и фрукты.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнеры специального назначения"
                          src="img/konteiner_spezialnyi.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнеры специального назначения
                        </h5>
                        <p>
                          Эти контейнеры могут быть разных форм и размеров и
                          часто изготавливаются на заказ под конкретный груз.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнер с открытым верхом"
                          src="img/konteiner_s_otkrytym_verhom.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнер с открытым верхом
                        </h5>
                        <p>
                          Контейнеры с открытым верхом не имеют сплошных крыш,
                          вместо этого они имеют съемные дуги и непромокаемую
                          тентовую крышу, которую можно закрепить тросами и
                          которая позволяет значительно упростить процесс
                          погрузки и разгрузки, также можно откинуть верхнюю
                          часть дверцы, что облегчает доступ к грузу. Контейнеры
                          с открытым верхом идеально подходят для
                          крупногабаритных грузов, таких как автомобили.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Туннельный контейнер"
                          src="img/konteiner_tunnelnyi.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">Туннельный контейнер</h5>
                        <p>
                          Туннельные контейнеры для хранения поставляются с
                          дверцами на обоих концах контейнера. Внутри контейнера
                          получается сквозной проход Они очень полезны, когда
                          требуется быстрая загрузка и выгрузка материалов.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Контейнер половинной высоты"
                          src="img/konteiner_polovinnoy_vysoty.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнер половинной высоты
                        </h5>
                        <p>
                          Этот контейнер был разработан для перевозки тяжелых и
                          небольших грузов на судах и поездах. Такие контейнеры
                          можно использовать для перевозки транспортных средств
                          или в качестве грузовой платформы для местной
                          перевозки песка и гравия
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Автомобильные перевозчики"
                          src="img/konteiner_avomobolnye_perevozchiki.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">
                          Контейнеры - Автомобильные перевозчики
                        </h5>
                        <p>
                          Они используются для перевозки жидких материалов,
                          автомобилей и специальных товаров, таких как оружие.
                          Контейнер, используемый для таких грузов, изготовлен
                          из прочных материалов и построен специально для защиты
                          определенного вида товара. Есть много разных типов
                          контейнеров. Это лишь некоторые из наиболее
                          распространенных в настоящее время.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-2">
                        <img
                          alt="Ударные контейнеры"
                          src="img/konteiner_udarnyi.png"
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-md-10 col-sm-10">
                        <h5 className="text-uppercase">Ударные контейнеры</h5>
                        <p>
                          Контейнер в виде барабана, представляет собой
                          цилиндрический транспортировочный контейнер из стали,
                          пластика или волокна. Они часто используются для
                          жидкостей и гранулированных материалов.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="standartnye_tipy_konteinerov"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Стандартные типы контейнеров
                  </h2>
                </div>
                <div className="row mb-10">
                  <div className="col-md-7">
                    <p>
                      Стандартный контейнер - самый распространенный тип
                      контейнера. Обычно он изготавливается из стали, иногда из
                      алюминия. Эти алюминиевые контейнеры имеют более высокую
                      полезную нагрузку. Они герметичны и водостойки,
                      предотвращают повреждения снаружи.{" "}
                    </p>
                    <p>
                      Один конец контейнера имеет двери, через которые
                      укладывается груз. Несмотря на стандартные размеры 20 и
                      40-футовых контейнеров, вместимость контейнеров может
                      варьироваться от операторов.
                    </p>
                    <p>
                      Стандартные контейнеры могут перевозить большинство видов
                      сухих грузов, таких как ящики, поддоны, мешки, бочки и
                      т.д. Он может быть настроен внутри, для перевозки
                      определенного типа товаров.{" "}
                    </p>
                    <p>
                      10, 20, 40 футовые контейнеры, предназначены для хранения
                      сухих товаров. Это самые востребованные и распространенные
                      контейнеры из всего многообразия транспортных контейнеров.
                      Используются только для перевозки сухих грузов, без
                      контрольных и охлаждающих температурных устройств и
                      агрегатов.
                    </p>
                    <hr />
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
                <p>
                  Стандартные контейнеры ещё известны как контейнеры общего
                  назначения. Они относятся к закрытым типам контейнеров, то
                  есть они закрыты со всех сторон. Есть типы стандартных
                  контейнеров:
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>Стандартные контейнеры
                    с дверцами на одной или обеих сторонах
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Стандартные контейнеры
                    с дверцами на одном или обоих концах и дверями в полный рост
                    с одной или обеих сторон
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Стандартные контейнеры
                    с дверцами на одном или обоих концах и дверями на одной или
                    обеих сторонах
                  </li>
                </ul>
                <p>
                  Кроме того, стандартные типы контейнеров различаются по своим
                  размерам и весу, что приводит к большому количеству версий
                  стандартных контейнеров.
                </p>
                <p>
                  Стандартные контейнеры в основном используются как 20 футовые
                  и 40 футовые контейнеры. Контейнеры с меньшими размерами
                  используются очень редко. Тенденция к более длинным
                  контейнерам растет.{" "}
                </p>
                <p>
                  Рама и напольная поперечина выполнены из стальных профилей,
                  для стен используются три различных материала:
                </p>
                <div className="row mb-10">
                  <div className="col-md-6">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Контейнер с высоким потолком"
                        alt="Контейнер с высоким потолком"
                        className="fancybox-button"
                        href="img/standartnyi_kontainer.jpg"
                      >
                        <img
                          alt="Контейнер с высоким потолком"
                          src="img/standartnyi_kontainer_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-md-6">
                    <table className="table table-bordered  table-schedule table-hover">
                      <thead>
                        <tr></tr>
                        <tr>
                          <th className="col-xs-2">Стандартный контейнер</th>
                          <th className="col-xs-2">20ft </th>
                          <th className="col-xs-2">40ft </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td>Внутренняя длина</td>
                          <td>5,9 м / 19,4 фута</td>
                          <td>12,03 м / 39,5 фута</td>
                        </tr>
                        <tr>
                          <td>Внутренняя ширина</td>
                          <td>2,35 м / 7,8 фута</td>
                          <td>2,4 м / 7,9 фута</td>
                        </tr>
                        <tr>
                          <td>Внутренняя высота</td>
                          <td>2,39 м / 7,9 фута</td>
                          <td>2,39 м / 7,9 фута</td>
                        </tr>
                        <tr>
                          <td>Вес тары</td>
                          <td>2 300 кг / 5 071,5 фунтов</td>
                          <td>3750 кг / 8 268,8 фунтов</td>
                        </tr>
                        <tr>
                          <td>Грузоподъемность</td>
                          <td>25 000 кг / 55 126,9 фунтов</td>
                          <td>27 600 кг / 61 200 фунтов</td>
                        </tr>
                        <tr>
                          <td>Кубический объем</td>
                          <td>33,2 м3 / куб футов 1172</td>
                          <td>67,7 м3 /2389 куб футов</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  id="konteiner_s_vysokim_potolkom"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure className="mt-30">
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с высоким потолком"
                    className="fancybox-button"
                    href="img/konteiner_s_vysokim_potolkom.jpg"
                  >
                    <img
                      alt="Контейнер с высоким потолком"
                      src="img/konteiner_s_vysokim_potolkom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black mt-15">
                  Контейнер с высоким потолком HC (High Cube)
                </h4>
                <p>
                  Высокие контейнеры, сокращённо - HC, относятся к контейнерам,
                  которые по структуре похожи на обычные контейнеры. Длина и
                  ширина остаются неизменными, а высота увеличена. Это позволяет
                  им загружать больше товаров.
                </p>
                <table className="table table-bordered  table-schedule table-hover">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">Контейнер с высоким потолком</th>
                      <th className="col-xs-2">40ft HC</th>
                      <th className="col-xs-2">45ft HC</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>12.03m / 39.5ft</td>
                      <td>13.55m / 44.5ft</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,35 м / 7,8 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,70 м / 8,10 фута</td>
                      <td>2,70 м / 8,10 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>3900 кг / 8598 фунтов</td>
                      <td>4 800 кг / 10 552 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>28 600 кг / 63 052 фунта</td>
                      <td>27 700 кг / 61 067 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>76,3 м 3 / 2,694.5 куб футов</td>
                      <td>86 м 3 /3037 куб футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="refrizheratornyi_konteiner"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure className="mt-30">
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Рефрижераторный контейнер"
                    className="fancybox-button"
                    href="img/konteiner_refrizherator.jpg"
                  >
                    <img
                      alt="Рефрижераторный контейнер"
                      src="img/konteiner_refrizherator_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Рефрижераторный контейнер
                </h4>
                <p>
                  Рефрижераторные контейнеры - это холодильники размером с
                  контейнер для перевозки товаров, которые необходимо
                  поддерживать при определенной температуре.
                </p>
                <p>
                  Контейнер имеет Т-образный настил, который направляет
                  охлажденный воздух. Это гарантирует, что между товарами
                  имеется постоянный поток воздуха с установленной температурой.
                  Агрегаты внутри контейнера могут поддерживать любую
                  температуру от -30 ° C до + 30 ° C.
                </p>
                <p>
                  Рефрижераторные контейнеры поставляются (в основном) в
                  20-футовых вариантах исполнения.{" "}
                </p>
                <p>
                  Каждый продукт имеет различные требования к температуре
                  хранения и её необходимо поддерживать, чтобы защитить продукты
                  от гниения. Рефрижераторный контейнер можно разделить на
                  несколько частей, для одновременного цикла охлаждения и
                  заморозки.{" "}
                </p>
                <p>
                  Питание идет от генератора, который обеспечивает
                  электроэнергию в пути. Когда рефрижераторные контейнеры едут
                  на грузовиках, то контейнеры работают на топливе.
                  Рефрижераторный контейнер дорогой, учитывая требования к
                  эл.питанию и техническому обслуживанию.
                </p>
                <p>
                  Рефрижераторные контейнеры используются для перевозки грузов,
                  требующих постоянной температуры. Стены имеют заполняющую
                  структуру, заполненную пенополиуретаном. Пол состоит из
                  алюминиевых тройников, которые служат воздушными каналами.
                  Холодильный агрегат автоматически поддерживает постоянную
                  температуру в диапазоне от + 25 ° C до -25 ° C, при условии,
                  что разница между наружной температурой и температурой потока
                  не превышает 42 ° C для отопления и 65 ° C для охлаждения. При
                  размещении товаров в контейнере убедитесь, что в верхней части
                  имеется воздушный зазор около 75 мм.
                </p>
                <table className="table table-bordered  table-schedule table-hover mt-30">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">Рефрижераторный контейнер</th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,44 м / 17,9 фута</td>
                      <td>11,56 м / 37,9 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,29 м / 7,5 фута</td>
                      <td>2,28 м / 7,5 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,27 м / 7,5 фута</td>
                      <td>2,25 м / 7,4 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>3 080 кг / 6 791,4 фунтов</td>
                      <td>4 800 кг / 10 584 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>27 700 кг / 61 078,5 фунтов</td>
                      <td>29 520 кг / 65 080 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>59,3 м 3 / 2093,3 куб. Фута</td>
                      <td>67,3 м 3 /2380 куб футов</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  id="konteiner_s_dvoynoy_dveryu"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с открытым верхом"
                    className="fancybox-button"
                    href="img/konteiner_s_dvoynoy_dveriyu.jpg"
                  >
                    <img
                      alt="Контейнер с двойной дверью"
                      src="img/konteiner_s_dvoynoy_dveriyu_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер с двойной дверью
                </h4>

                <p>
                  Контейнеры с двойной дверью имеют двери, которые открываются
                  наружу с обоих концов. Обе двери идут с одинаковыми
                  характеристиками. Это очень удобный вариант для загрузки и
                  выгрузки контейнера, поскольку товары могут быть загружены или
                  выгружены с любого конца, по необходимости. Например,
                  загруженный автомобиль может просто проехать перед и не может
                  сдать назад для разгрузки.
                </p>
                <p>
                  Их называют туннельными контейнерами, так как они используются
                  для создания безопасного прохода на строительных площадках.
                  Контейнер может быть настроен в соответствии с целями
                  хранения. Он может быть разделён.
                </p>
                <table className="table table-bordered  table-schedule table-hover mt-30">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">
                        Контейнер с двойной дверью (тоннельный контейнер)
                      </th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,9 м / 19,4 фута</td>
                      <td>12,03 м / 39,5 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,4 м / 7,9 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,39 м / 7,9 фута</td>
                      <td>2,39 м / 7,9 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>2 300 кг / 5 071,5 фунтов</td>
                      <td>3750 кг / 8 268,8 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>25 000 кг / 55 126,9 фунтов</td>
                      <td>27 600 кг / 61 200 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>33,2 м 3 / 1172 футов</td>
                      <td>67,7 м 3 /2389 куб футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="konteiner_s_otkrytym_verhom"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с открытым верхом"
                    className="fancybox-button"
                    href="img/konreiner_s_otkrytym_verhom.jpg"
                  >
                    <img
                      alt="Контейнер с открытым верхом"
                      src="img/konreiner_s_otkrytym_verhom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер с открытым верхом
                </h4>
                <p>
                  Контейнеры с открытым верхом, как следует из названия, имеют
                  открытый верх. Крыша контейнера покрыта брезентовыми листами
                  вместо твердой крыши. Таким образом, его можно накрыть или
                  оставить открытым в зависимости от погоды. Контейнер
                  изготовлен из стали, он идет с деревянными полами, а дверные
                  шарниры открываются для удобства загрузки и выгрузки.
                  Изготавливаются они в 20-футовых и 40-футовых моделях.
                </p>
                <p>
                  Контейнеры с открытым верхом используются, когда груз слишком
                  большой, чтобы помещаться в обычный транспортный контейнер.
                  Например, машины или тяжелые материалы, которые нельзя грузить
                  сбоку, а необходимо укладывать сверху тяжелыми кранами. Эти
                  контейнеры имеют бо́льшую вместимость, чем обычные. Контейнер
                  имеет крепежные кольца, обеспечивающие устойчивость груза и
                  способны выдержать нагрузку до 1000 кг.
                </p>
                <p>
                  Контейнеры с открытым верхом, могут быть дорогими, ведь на
                  рынке их не так много. Цена может отличаться, в зависимости от
                  того, является ли контейнер «мерным» или нет. Высота груза
                  выступает над уровнем крыши. Если груз выступает, это дорого
                  для перевозки, ведь другие контейнеры не могут быть уложены
                  поверх него и это очень расточительно для грузовых компаний.
                </p>
                <p>
                  Некоторые из товаов, загружаемых в контейнер с открытым
                  верхом: трубы, кабели, строительные материалы, оборудование и
                  громоздкие детали.
                </p>
                <table className="table table-bordered  table-schedule table-hover mt-30">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">Контейнер с открытым верхом</th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,89 м / 19,4 фута</td>
                      <td>12,03 м / 39,5 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,4 м / 7,9 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,34 м / 7,8 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>2 260 кг / 5 982 фунтов</td>
                      <td>3980 кг / 8 774 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>28 220 кг / 62 214 фунтов</td>
                      <td>26 500 кг / 58 422 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>32,7 м3 / 1155 футов</td>
                      <td>66,7 м3 /2356 куб футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="konteiner_pod_shirokiy_poddon"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер под широкий поддон"
                    className="fancybox-button"
                    href="img/konteiner_pod_shirokii_poddon.jpg"
                  >
                    <img
                      alt="Контейнер под широкий поддоне"
                      src="img/konteiner_pod_shirokii_poddon_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер под широкий поддон
                </h4>
                <p>
                  Эти контейнеры были разработаны специально для перевозки
                  деревянных европоддонов, которые используются в Европе. Они
                  доступны в 20-футовых, 40-футовых контейнерах и контейнерах с
                  повышенным кубажом. Поддоны имеют размер 1200x800x144.
                  Стандартный 20-футовый контейнер может вмещать 11 поддонов, в
                  то время как 20-футовый контейнер под широкий поддон, может
                  вмещать 15 поддонов. Это возможно, потому что контейнеры
                  внутри, примерно на 5 метров шире, чем стандартные.
                </p>
                <p>
                  Контейнеры под широкий поддон или палету удерживают груз очеь
                  плотно и скользить он точно не будет. Этот вид контейнера
                  предназначен для погрузки ровно двух европоддонов по ширине.
                  Для сравнения, стандартный контейнер может вместить по ширине
                  только один.
                </p>
                <table className="table table-bordered  table-schedule table-hover">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">Контейнер под широкий поддон</th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,89 м / 19,32 фута</td>
                      <td>12.03 м / 39.46 футов</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,44 м / 8 футов</td>
                      <td>2,44 м / 8 футов</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,39 м / 7,84 фута</td>
                      <td>2,38 м / 7,80 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>2400 кг / 5 291,09 фунтов</td>
                      <td>3800 кг / 8 377,56 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>28 080 кг / 61 905,80 фунтов</td>
                      <td>26 680 кг / 58 819,33 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>34,34 м 3 /1 213 футов</td>
                      <td>69,86 м 3 / 2,467.12 футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="konteiner_s_ploskimi_stoykami"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с плоскими cтойками"
                    className="fancybox-button"
                    href="img/konteiner_s_ploskimi_stoykami.jpg"
                  >
                    <img
                      alt="Контейнер с плоскими cтойками"
                      src="img/konteiner_s_ploskimi_stoykami_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер с плоскими cтойками
                </h4>
                <p>
                  Контейнеры с плоскими cтойками используются для тяжелых
                  грузов, которые требуют погрузки сверху или с боков. Это могут
                  быть трубы, машины или автобусы. Контейнеры имеют только
                  боковые стенки на торцевых концах контейнера.
                </p>
                <p>
                  Многочисленные крепежные кольца позволяют надежно закрепить
                  груз в соответствии с требованиями законодательства. Например,
                  ящики, превышающие размер закрытого контейнера, могут быть
                  загружены.{" "}
                </p>
                <p>
                  Контейнеры нового поколения, с плоскими cтойками, способны
                  выдерживать нагрузки до 40 000 - 50 000 кг при равномерном
                  распределении нагрузки. Хотя это позволяет загружать
                  вышеупомянутые товары. Обычно они занимают одно место на
                  контейнеровозе. Из-за размеров груза и его веса штабелирование
                  невозможно.
                </p>
                <p>
                  Существуют разные размеры контейнеров с плоскими стойками и
                  два разных типа. У складной плоской стойки есть боковые части,
                  которые можно сложить, чтобы более эффективно перевозить
                  пустые контейнеры. Плоские стойки с фиксированным концом могут
                  поставляться отдельно и иметь нагрузку выше, так как они имеют
                  более прочную конструкцию.
                </p>
                <table className="table table-bordered  table-schedule table-hover mt-30">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">
                        Контейнер с плоскими cтойками
                      </th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,94 м / 19 футов</td>
                      <td>12,13 м / 39,8 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,7 фута</td>
                      <td>2,40 м / 7,9 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,35 м / 7,7 фута</td>
                      <td>2,14 м / 7 футов</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>2360 кг / 5203,8 фунтов</td>
                      <td>5000 кг / 11 025 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>30 140 кг / 66 458,7 фунтов</td>
                      <td>40 000 кг / 88 200 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>32,7 м 3 / 1,154.3 куб футов</td>
                      <td>62,2 м 3 / 2195,7 куб. Футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="konteiner_s_bokovoy_dveryu"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с боковой дверью"
                    className="fancybox-button"
                    href="img/konteiner_s_bokovoy_dveryu.jpg"
                  >
                    <img
                      alt="Контейнер с боковой дверью"
                      src="img/konteiner_s_bokovoy_dveryu_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер с боковой дверью
                </h4>
                <p>
                  Контейнер с боковой дверью (известный как контейнер с открытой
                  боковой стенкой), имеет дополнительные двери, которые
                  открываются на длинной стороне контейнера . На полу
                  установлены серьги (кольца) для удержания груза на месте.
                  Благодаря боковым дверям очень удобно загружать грузы, которые
                  являются громоздкими и не могут пройти через торцовую дверь.
                  Может работать больше рабочих при погрузке или разгрузке.{" "}
                </p>
                <table className="table table-bordered  table-schedule table-hover mb-20">
                  <thead>
                    <tr></tr>
                    <tr>
                      <th className="col-xs-2">Контейнер с боковой дверью</th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,9 м / 19,4 фута</td>
                      <td>12,03 м / 39,5 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,7 фута</td>
                      <td>2,28 м / 7,4 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,34 м / 7,7 фута</td>
                      <td>2,29 м / 7,5 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>3200 кг / 7054,7 фунтов</td>
                      <td>6 100 кг / 13 448,2 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>20 800 кг / 45 856,1 фунтов</td>
                      <td>30 400 кг / 67 020,5 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>31,0 м 3 / 1094,7 куб. Фута</td>
                      <td>64 м 3 / 2260,1 куб. Футов</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="konteiner_s_zhestkim_verhom"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер с жестким верхом"
                    className="fancybox-button"
                    href="img/konteiner_s_zhestkim_verhom.jpg"
                  >
                    <img
                      alt="Контейнер с жестким верхом"
                      src="img/konteiner_s_zhestkim_verhom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                  Контейнер с жестким верхом
                </h4>
                <p>
                  Контейнеры с жестким верхом очень похожи на открытые
                  контейнеры, с той разницей, что у них съемная стальная крыша
                  вместо брезентовой накидки. Крыша контейнера с жестким верхом
                  имеет серьги, за которые кран может поднять крышу. Такая
                  конструкция позволяет легко загружать и выгружать определенные
                  типы грузов.
                </p>
                <table className="table table-bordered  table-schedule table-hover">
                  <thead>
                    <tr>
                      <th className="col-xs-2">Контейнер с жестким верхом</th>
                      <th className="col-xs-2">20ft</th>
                      <th className="col-xs-2">40ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Внутренняя длина</td>
                      <td>5,89 м / 19,4 фута</td>
                      <td>12,03 м / 39,5 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя ширина</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,4 м / 7,9 фута</td>
                    </tr>
                    <tr>
                      <td>Внутренняя высота</td>
                      <td>2,35 м / 7,8 фута</td>
                      <td>2,34 м / 7,8 фута</td>
                    </tr>
                    <tr>
                      <td>Вес тары</td>
                      <td>2 260 кг / 5 982 фунтов</td>
                      <td>3980 кг / 8 774 фунтов</td>
                    </tr>
                    <tr>
                      <td>Грузоподъемность</td>
                      <td>28 220 кг / 62 214 фунтов</td>
                      <td>26 500 кг / 58 422 фунтов</td>
                    </tr>
                    <tr>
                      <td>Кубический объем</td>
                      <td>32,7 м 3 / 1155 куб. футов</td>
                      <td>64 м 3 / 2260,1 куб. Футов</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  id="konteinernye_terminaly"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="line-dashed"></div>
              </div>
              <h3 className="text-center font-22 font-black pt-5 pt-30 pb-30">
                Контейнерные терминалы: факты и цифры
              </h3>
              <figure className="pull-right">
                {" "}
                <a
                  data-rel="fancybox-button"
                  title="Контейнерные терминалы: факты и цифры"
                  className="fancybox-button"
                  href="img/konteinernye_terminaly.jpg"
                >
                  <img
                    alt="Контейнерные терминалы: факты и цифры"
                    width="400"
                    src="img/konteinernye_terminaly_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </figure>
              <p>
                Контейнерные терминалы в портах - это термин обозначения
                промежуточных пунктов назначения, которые позволяют транспортным
                контейнерам менять методы транспортировки на пути к конечному
                пункту.
              </p>

              <p>
                Груз поступает в контейнерный терминал на одном судне и
                распределяется по нескольким видам транспорта для доставки
                внутренним клиентам. Терминал является зоной, предназначенной
                для обслуживания и временного хранения транспортных контейнеров.
              </p>
              <p>
                Выгрузка, погрузка и хранение груза в этих контейнерах
                осуществляются на контейнерных терминалах.
              </p>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                Роль контейнерного терминала в процессе доставки
              </h4>
              <figure className="pull-left">
                {" "}
                <a
                  data-rel="fancybox-button"
                  title="Роль контейнерного терминала в процессе доставки"
                  className="fancybox-button"
                  href="img/konteinernyi_terminal_v_processe_dostavki.jpg"
                >
                  <img
                    alt="Роль контейнерного терминала в процессе доставки"
                    width="400"
                    src="img/konteinernyi_terminal_v_processe_dostavki_sm.jpg"
                    className="img-responsive pr-20"
                  />
                </a>
              </figure>
              <p>
                Контейнерные терминалы стратегически расположены для облегчения
                построения маршрутов в сложной логистической сети. На морских
                терминалах осуществляется перевалка контейнеров с океанских
                судов на автомобильные и железнодорожные транспортные средства,
                баржи для рек и каналов и наоборот. Они являются частью крупного
                порта большого города. Когда перегрузка осуществляется между
                железной дорогой и автомагистралью, то объект называется
                внутренним контейнерным терминалом. Они расположены в крупных
                городах или поблизости от них
              </p>
              <p>
                Внутренние соединения с морскими терминалами, имеют жизненно
                важное значение для всех цепочек поставок товаров. Рассмотрим
                многие не имеющие выхода к морю страны в Европе и их
                неспособность торговать товарами с соседними странами.
                Организация, которая представляет все порты Европейского союза
                заявила: Необходимо построить устойчивую общеевропейскую
                транспортную сеть, соединяющую все порты с основными внутренними
                узлами». Поскольку многие европейские страны не имеют морских
                портов, их экономическое благосостояние в значительной степени
                зависит от наличия сухопутных соединений с морскими портами в
                других странах.
              </p>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                Рабочий процесс контейнерного терминала
              </h4>
              <figure className="pull-right pl-10">
                {" "}
                <a
                  data-rel="fancybox-button"
                  title="Рабочий процесс контейнерного терминала"
                  className="fancybox-button"
                  href="img/rabochii_process_konteinernogo_terminala.jpg"
                >
                  <img
                    alt="Рабочий процесс контейнерного терминала"
                    width="400"
                    src="img/rabochii_process_konteinernogo_terminala_sm.jpg"
                    className="img-responsive pr-20"
                  />
                </a>
              </figure>
              <p>
                По прибытии корабля в порт, портовые краны забирают контейнеры с
                корабля. Причальные краны переносят контейнеры из трюма судна и
                с палубы на транспортные средства, такие как AGV (автомобили с
                автоматическим управлением). Транспортные средства перемещаются
                между кораблем и штабелем, где они сгружают контейнеры для
                хранения в течение короткого периода времени. По истечении этого
                периода, контейнеры поднимаются из штабеля кранами и перевозятся
                на AGV до следующего режима транспортировки. Это могут быть,
                например, баржи, глубоководные суда, грузовики или поезда.
              </p>
              <p>
                Чтобы загрузить экспортные контейнеры на корабль, эти процессы
                выполняются в обратном порядке. Большинство терминалов
                по-прежнему используют ручное управление на грузообрабатывающих
                средствах. Например: карьерные самосвалы, краны и системы с
                несколькими трейлерами. Хотя, автоматизация контейнерных
                терминалов делает определенные успехи.
              </p>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                {" "}
                Плата за обработку терминала (THC)
              </h4>
              <figure className="pull-left">
                {" "}
                <a
                  data-rel="fancybox-button"
                  title="Плата за обработку терминала (THC)"
                  className="fancybox-button"
                  href="img/plata_za_obrabotku_terminala.jpg"
                >
                  <img
                    alt="Плата за обработку терминала (THC)"
                    width="400"
                    src="img/plata_za_obrabotku_terminala_sm.jpg"
                    className="img-responsive pr-20"
                  />
                </a>
              </figure>
              <p>
                Полностью локализованная оплата услуг, которая устанавливается
                портом самостоятельно, является платой за обработку товаров в
                терминале. THC могут быть разными на терминалах в пределах
                одного и того же порта и даже если контейнер останется с одной и
                той же судоходной морской линией. Этот сбор представляет собой
                совокупность затрат, связанных с собственностью поставщика
                терминала и применяется только к морским перевозкам. К ним
                относятся доступ, оборудование и его использование, техническое
                обслуживание и трудовые ресурсы. Причал, терминал или станция
                контейнерных перевозок (CFS) являются собственностью,
                использование которых покрывается этими деньгами.
              </p>
              <p>
                THC - плата за транзит, которая может быть довольно большой и
                юридически не подлежит обсуждению. Некоторые линии имеют THC на
                основании объема грузов в различных портах по всему миру, в то
                время как плата за обработку терминала является полной ставкой,
                включенной в плату "от порта к порту". Иногда, некоторые
                расходы, такие как причал, не объединяются в общую сумму, а
                взимаются с перевозчика, как отдельная плата.{" "}
              </p>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                Самый большой контейнерный терминал в мире
              </h4>
              <p>
                По состоянию на 2017 год, семь из десяти крупнейших портов мира
                принадлежат Китаю. Шанхай занимает первое место, а Сингапур
                второе место. Лучшие порты мира измеряются с точки зрения
                пропускной способности, которая является стандартным показателем
                производительности морского порта. Пропускная способность
                контейнерного терминала определяется, как мера количества
                контейнеров, обработанных за определенный период времени. Она
                измеряется с использованием двадцатифутовых эквивалентных единиц
                (TEU). TEU - это средство описания грузоподъемности поезда или
                корабля. Например, 40-футовый контейнер занимает пространство
                двух TEU.
              </p>
              <p>
                <strong>
                  Шанхай является не только крупнейшим терминалом с точки зрения
                  TEU, но и по площади. Он расположен на 3619 квадратных
                  километрах - это почти 507 футбольных полей ФИФА!
                </strong>
              </p>
              <div
                id="ispolzovanie_konteinerov_v_zhizni"
                style={{
                  display: "block",
                  marginBottom: "100px",
                  marginTop: "-90px",
                }}
              ></div>
              <figure>
                <img
                  alt="Как можно использовать контейнеры в жизни"
                  src="img/ispolzovanie_konteinerov_v_zhizni.jpg"
                  className="img-responsive"
                />
              </figure>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-10">
                Как можно использовать контейнеры в жизни
              </h4>
              <p>
                Хорошо подготовленные и оборудованные транспортные контейнеры
                подскажут много вариантов использования. Их можно использовать
                на выставках или корпоративных мероприятиях, в выставочных и
                концертных залах. Контейнер можно использовать в качестве
                сезонной платформы в резервных помещениях ресторанов, концертов
                или мероприятий
              </p>
              <p>
                Контейнеры могут использоваться не только для мобильных и
                универсальных технических и санитарно-технических помещений.
                Благодаря необычайной простоте конструкции из нее можно
                построить целые части домов или временных выставочных залов.
              </p>

              <div className="col-12 mt-10 mb-30">
                <blockquote className="yellow">
                  <div className="pb-20">
                    <div className="pull-left pr-30">
                      <img
                        src="img/sotrudnik_dmitriy_shiyan.jpg"
                        className="blockquote-border"
                        width="160"
                        alt="Коммерческий директор компании РОСИМПОРТ - Дмитрий Шиян"
                      />
                    </div>
                    <div className="font-14 text-center pt-10 blockquote-head">
                      Коммерческий директор компании РОСИМПОРТ - Дмитрий Шиян:
                    </div>
                    <h3 className="text-center font-20 pt-10">
                      Их используют там, где даже трудно себе представить!
                    </h3>
                    <p className="font-16  pb-30 pt-10">
                      Использование контейнеров для хранения в жаркую погоду
                      продуктов или в полях, в качестве бытовок и временных
                      офисов, а ещё в малонаселенных пунктах, в качестве
                      заправок, торговых точек и даже временного жилья.
                    </p>
                  </div>
                </blockquote>
              </div>

              <p>
                В контейнере можно установить отопительное и санитарное
                оборудование. Это позволяет получить менее дорогое, легко
                доступное и мобильное пространство, что рационализирует
                логистические процессы многих компаний и крупных компаний
              </p>

              <figure>
                <img
                  alt="использования новейших рефрижераторных контейнеров"
                  src="img/ispolzovanie_refrizheratornyh_konteinerov.jpg"
                  className="img-responsive"
                />
              </figure>

              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-10">
                Использования новейших рефрижераторных контейнеров, кроме
                перевозок
              </h4>
              <p>
                Современные рефрижераторные контейнеры являются альтернативой
                холодильным камерам, они хорошо работают круглый год. Вы
                сможете, с помощью современного оборудования, замораживать
                продукты или охлаждать их в зависимости от сезона и температуры
                внешней среды.{" "}
              </p>
              <p>
                Современные решения для рефрижераторных контейнеров делают их
                энергосберегающими и экологически чистыми. Они все чаще
                используются, в том числе в медицинских центрах донорства крови,
                в качестве дополнительных холодильных камер для хранения крови.
              </p>
              <p>
                Контейнеры-рефки приобретают все большее значение в сфере
                общественного питания, например, когда речь идет об охлаждении
                большого количества продуктов при проведении крупных
                мероприятий.
              </p>

              <div
                id="arenda_i_pokupka_konteinerov"
                style={{
                  display: "block",
                  marginBottom: "100px",
                  marginTop: "-90px",
                }}
              ></div>
              <figure>
                {" "}
                <a
                  data-rel="fancybox-button"
                  title="Аренда или покупка контейнеров"
                  className="fancybox-button"
                  href="img/konteiner_arenda.jpg"
                >
                  <img
                    alt="Аренда или покупка контейнеров"
                    src="img/konteiner_arenda_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </figure>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                Аренда или покупка контейнеров
              </h4>
              <p>
                {" "}
                С эксплуатационной точки зрения, аренда контейнеров оценивается
                примерно на 60-70% дороже, чем владение ими. Что же делает
                лизинг таким привлекательным, несмотря на высокую стоимость?
              </p>
              <p>
                Хотя лизинг контейнера является более гибким вариантом, чем
                собственность, это не единственный допустимый вариант. Для
                компаний, которые нуждаются только в 1 или 2 контейнерах для
                хранения товара, право собственности является правильным
                решением.{" "}
              </p>
              <p>
                Владение контейнером является более выгодным, когда вам нужны
                контейнеры на неопределенный срок и вы часто их используете.
                Покупка контейнера может обойтись от 1400 до 5000 долларов в
                зависимости от типа или количества. Вы можете купить новые или
                подержанные. Использованные будут стоить намного ниже (в
                зависимости от состояния контейнера).
              </p>
              <p>
                Контейнеры, находящиеся на вашем балансе, возможно будут более
                выгодны, поскольку операционные расходы уменьшают ваши налоговые
                обязательства и не создают тревоги, которую может вызвать резкое
                сокращение прибыли (из-за значительных капиталовложений),
                особенно когда вы хотите управлять большим парком.
              </p>
              <h4 className="text-center font-20 font-black pt-5 pt-30 pb-30">
                Когда аренда контейнеров имеет больше смысла, чем собственность
              </h4>
              <p>
                Вам нужны контейнеры, но у вас нет денег сейчас. Если у вас нет
                необходимой суммы наличных денег на покупку контейнера, то
                лизинг контейнеров может быть самым подходящим вариантом.
                Никаких огромных первоначальных затрат - вы просто арендуете
                контейнеры по доступной цене. Цены основаны на многих факторах,
                например, рыночная ставка, необходимое количество,
                местоположение и т.д. Когда наблюдается временный всплеск спроса
                или когда вы не можете с уверенностью предсказать долгосрочный
                спрос, тогда контейнерный лизинг будет лучшим вариантом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default konteinery;
