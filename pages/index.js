import Head from "next/head";
import App from "../components/App";

const Index = () => {
  return (
    <App navLight="index">
      <Head>
        <title>Международная перевозка грузов</title>
        <meta
          name="description"
          content="Международная перевозка грузов по всему миру, надежная доставка товаров различными видами транспорта с использованием глобальной сети транспортных партнеров"
        />
        <meta property="og:title" content="Международная перевозка грузов" />
        <meta
          property="og:description"
          content="Международная перевозка грузов по всему миру, надежная доставка товаров различными видами транспорта с использованием глобальной сети транспортных партнеров"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/" />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div
          id="carousel-example-generic"
          className="carousel slide carousel-slider"
        >
          <ol className="carousel-indicators carousel-indicators-frontend">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item carousel-item-eight active">
              <div className="container">
                <div className="carousel-position-six text-uppercase text-center">
                  <h1
                    className="animate-delay carousel-title-v5  pb-0"
                    dataanimation="animated fadeInDown"
                  >
                    <span className="font-28">Международная</span> <br />
                    <span className="carousel-title-normal font-24">
                      Перевозка Грузов
                    </span>
                  </h1>
                  <h2
                    className="carousel-subtitle-v5 border-top-bottom margin-bottom-30 font-20"
                    dataanimation="animated fadeInDown"
                  >
                    Доставка груза из Китая в Россию
                  </h2>

                  <a
                    href="#obratnyi_zvonok"
                    className="btn-social-counter btn-social-counter--youtube scroll more"
                  >
                    <div className="btn-social-counter__icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <p className="btn-social-counter__title font-18">
                      ОБРАТНЫЙ ЗВОНОК
                    </p>
                    <span className="btn-social-counter__count pt-10 font-10">
                      Вам перезвонят быстро
                    </span>
                  </a>

                  <div
                    className="modal bd-example-modal-lg"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                    data-backdrop="false"
                  ></div>
                  <br />
                  <aside className="widget widget--sidebar widget-social widget-social--condensed">
                    <a
                      href="#"
                      className="btn-social-counter btn-social-counter--telegram"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-telegram" aria-hidden="true"></i>
                      </div>
                      <h6 className="btn-social-counter__title">Telegram</h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num"></span>
                        Напишите нам
                      </span>
                      <span className="btn-social-counter__add-icon"></span>
                    </a>
                    <a
                      href="https://wa.me/79252009511"
                      className="btn-social-counter btn-social-counter--whatsapp"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </div>
                      <h6 className="btn-social-counter__title">Whatsapp</h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num"></span>
                        Напишите нам
                      </span>
                      <span className="btn-social-counter__add-icon"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/rosimport.pro/"
                      className="btn-social-counter btn-social-counter--instagram2"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                      <h6 className="btn-social-counter__title">INSTAGRAM</h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num"></span>
                        Напишите нам
                      </span>
                      <span className="btn-social-counter__add-icon"></span>
                    </a>
                  </aside>
                </div>
              </div>
            </div>
            <div className="item carousel-item-nine">
              <div className="container">
                <div className="carousel-position-six block-transparent text-center">
                  <h2
                    className="animate-delay carousel-title-v6 text-uppercase"
                    data-animation="animated fadeInDown"
                  >
                    Авиа грузоперевозки
                  </h2>
                  <h3
                    className="carousel-subtitle-v5 text-uppercase font-22 pb-20"
                    data-animation="animated fadeInDown"
                  >
                    Авиа и Экспресс Доставка
                  </h3>
                  <a
                    href="aviaperevozka_gruzov_iz_kitaya"
                    className="btn btn-blue font-18 pl-30 pr-30"
                    data-animation="animated fadeInUp"
                  >
                    Авиа из Китая
                  </a>
                  <p
                    className="carousel-subtitle-v7 margin-bottom-30  pt-20"
                    data-animation="animated fadeInDown"
                  >
                    КИТАЙ АВИА. Обычная и экспресс доставка в кратчайшие сроки
                    <br />
                    Авиа грузы из Китая в Россию. Постоянные перевозки в течении
                    10 лет.
                  </p>
                </div>
              </div>
            </div>

            <div className="item carousel-item-ten">
              <div className="container">
                <div className="carousel-position-six block-transparent text-center">
                  <h2
                    className="animate-delay carousel-title-v6 text-uppercase  pb-20"
                    data-animation="animated fadeInDown"
                  >
                    ЖД перевозки
                  </h2>
                  <a
                    href="zheleznodorozhnaya_perevozka_gruzov"
                    className="btn btn-blue font-18 pl-30 pr-30"
                    data-animation="animated fadeInUp"
                  >
                    Контейнер из Китая
                  </a>
                  <p
                    className="carousel-subtitle-v7 pt-20"
                    data-animation="animated fadeInDown"
                  >
                    Доступность ЖД транспорта в крупных городах позволяет
                    <br />
                    уменьшить сроки доставки груза
                  </p>
                </div>
              </div>
            </div>
            <div className="item carousel-item-eleven">
              <div className="container">
                <div className="carousel-position-six block-transparent text-center">
                  <h2
                    className="animate-delay carousel-title-v6 text-uppercase  pb-20"
                    data-animation="animated fadeInDown"
                  >
                    Морские грузоперевозки
                  </h2>
                  <a
                    href="morskaya_transportirovka_gruzov"
                    className="btn btn-blue font-22 pl-30 pr-30"
                    data-animation="animated fadeInUp"
                  >
                    Морские контейнеры
                  </a>
                  <p
                    className="carousel-subtitle-v7 pt-20"
                    data-animation="animated fadeInDown"
                  >
                    Уменьшение расходов на доставке при выборе
                    <br />
                    морского транспорта
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control carousel-control-shop carousel-control-frontend"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
          <a
            className="right carousel-control carousel-control-shop carousel-control-frontend"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <div id="uslugi_po_mezhdunarodnoy_perevozki_gruzov"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog-posts">
                <h2 className="text-center pt-20 pb-10">
                  Услуги по международной перевозке грузов
                </h2>

                <p>
                  Наши услуги заключаются в оптимизации транспортировки груза от
                  поставщиков в Китае. Мы будем вести ваш груз "за ручку":
                  Получение товара со склада, магазина, фабрики. Проверка
                  целостности полученного товара. Подготовка, упаковка и
                  маркировка груза для последующей доставки по всему миру.
                </p>
                <p>
                  Каждый менеджер компании РОСИМПОРТ имеет глубокое понимание
                  логистики зарубежного рынка перевозок и динамики конкретных
                  сделок. Глубокие экспертные знания позволяют нашим
                  сотрудникам, рекомендовать пути решений задач по доставке
                  вашего товара и указывать на факторы, влияющие на транзит
                  вашего груза. Читайте отзывы клиентов о нашей работе.{" "}
                  <a
                    className="link-orange"
                    href="https://rosimport.ru/otzyvy_dostavka_iz_kitaya"
                  >
                    {" "}
                    Читать отзывы о компании РОСИМПОРТ
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <video
                width="100%"
                height="100%"
                preload="none"
                muted=""
                autoPlay=""
                loop=""
                poster="video/face.jpg"
              >
                <source
                  src="video/video_dostavka_kitay_moskva.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-md-9 row quote-v1 text-center pl-20 pr-30 mt-30">
              <a className="btn-transparent" href="start">
                БЫСТРАЯ ИНФОРМАЦИЯ ПО СТОИМОСТИ И УСЛУГАМ
              </a>
            </div>
          </div>
          <div className="col-12 mt-10 mb-30">
            <blockquote className="yellow">
              <div className="pb-20">
                <div className="pull-left pr-30">
                  <img
                    src="img/sotrudnik_director_mihail_shiyan.jpg"
                    className="blockquote-border"
                    width="200"
                    alt="Генеральный директоркомпании РОСИМПОРТ - Михаил Шиян"
                  />
                </div>
                <div className="font-14 text-center pt-20 blockquote-head">
                  Генеральный директор компании РОСИМПОРТ - Михаил Шиян:
                </div>
                <h3 className="text-center font-20 pt-20">
                  Всё, что вам необходимо, нами давно подготовлено и полноценно
                  работает более 10 лет!
                </h3>
                <p className="font-16  pt-20">
                  Опираясь на свой колоссальный опыт грузоперевозок по всему
                  миру, на отточенный механизм наработанных логистических схем,
                  на коллектив наших сотрудников и зарубежных
                  агентов-представителей - мы являемся профессиональной
                  командой! Грузоперевозки с высокой степенью надежности и
                  сохранности товара, обеспечат своевременную транспортировку,
                  документальное обеспечение на таможне, сопровождение в пути и
                  неусыпное внимание к вашему грузу.{" "}
                </p>
              </div>
            </blockquote>
          </div>

          <div className="row quote-v1 mb-30 text-center">
            <div className="col-md-3">
              <a
                className="btn-transparent"
                href="aviaperevozka_gruzov_iz_kitaya"
                target="_blank"
                data-toggle="tooltip"
                title="Перейдите по этой ссылке на страницу по авиадоставке грузов из Китая, там вы узнаете подробности о деталях"
              >
                <i className="fa fa-rocket margin-right-10"></i>АВИА доставка
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn-transparent"
                href="zheleznodorozhnaya_perevozka_gruzov"
                target="_blank"
                data-toggle="tooltip"
                title="Страница с информацией о ЖД транспортировке груза в Россию"
              >
                <i className="fa fa-rocket margin-right-10"></i>ЖД транспорт
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn-transparent"
                href="morskaya_transportirovka_gruzov"
                target="_blank"
                data-toggle="tooltip"
                title="Морской транспорт: Для отправки груза самым недорогим видом транспорта: Морскими контейнерами"
              >
                <i className="fa fa-rocket margin-right-10"></i>Морской
                траснпорт
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn-transparent"
                href="avtomobilnaya_dostavka_gruzov_iz_kitaya"
                target="_blank"
                data-toggle="tooltip"
                title="Автомобильная доставка: Быстрый и дешёвый для близких и дальних расстояний, всегда востребованный для перевозок товаров любых типов из Китая"
              >
                <i className="fa fa-rocket margin-right-10"></i>Автотранспорт
              </a>
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="row">
              <div className="col-md-3 row quote-v1 text-center pl-20 pr-30">
                <a
                  className="btn-transparent"
                  href="avia_express_dostavka"
                  target="_blank"
                >
                  ЭКСПРЕСС • АВИА{" "}
                </a>
              </div>
              <div className="col-md-9">
                <span className="font-14">
                  Доставка срочного груза "Экспресс-Авиа". Представители
                  РОСИМПОРТ, активно работают в странах экспортирующих товары в
                  Россию и наладили тесные отношения с ведущими авиакомпаниями,
                  чтобы обеспечить эффективность быстрой доставки груза в любую
                  точку России.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-20 mb-40">
            <div className="row">
              <div className="col-md-3 row quote-v1 text-center pl-20 pr-30">
                <a
                  className="btn-transparent"
                  href="dostavka_gruzov_iz_kitaya#sms_informirovanie_o_mestonahozhdenii_konteinera"
                >
                  АВТОИНФОРМИРОВАНИЕ
                </a>
              </div>
              <div className="col-md-9">
                <span className="font-14">
                  Ваш товар всегда под контролем!{" "}
                  <span className="text-red-site">СМС информирование</span> -
                  система информирования клиентов о местоположении и
                  передвижении груза. СМС оповещение о прибытии товара на
                  транзитные склады и в пункты временных остановок транспорта.
                  Система работает без GPS-навигации, которая запрещена в многих
                  странах мира.{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            id="perevozka_gruzov_kak_eto_proishodit"
            style={{
              display: "block",
              marginBottom: "100px",
              marginTop: "-90px",
            }}
          ></div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center pb-20">
                Перевозка грузов. Как это происходит?
              </h2>
              <img
                src="img/kargo_kitay.png"
                alt="Перевозка грузов. Как это происходит"
                className="img-responsive pull-left"
              />
              <p>
                Товар забирается на фабрике в Китае и доставляется в Россию, уже
                "очищенный" и готовый к продаже. Вам уже не придется возиться с
                грузом и документами на таможне и оплачивать дополнительные
                взносы и налоги. Этими вопросами будем заниматься мы. Если ваш
                товар необходимо забрать с нескольких фабрик и торговых
                площадок, то мы объединим партии разнородного товара, поочередно
                доставим их на свой склад и загрузим в один контейнер
                (консолидация груза).
              </p>
              <img
                src="img/logostichaskiy_sklad_v_kitae.png"
                alt="Перевозка грузов. Как это происходит"
                className="img-responsive pull-right"
              />
              <p>
                <a href="konsolidacia_gruza">
                  Объединение груза (консолидация)
                </a>{" "}
                в один контейнер и маршрутный лист, потребует минимум
                документации, а именно, оформление единого транспортного листа
                на весь товар в контейнере, это существенная экономия при
                перевозке товаров.{" "}
              </p>
              <p>
                Пока ваш груз ожидает отправки на нашем логистическом складе в
                Китае, команда РОСИМПОРТ работает с сопроводительными
                документами. На складе груз будет упакован в зависимости от
                требований к упаковке (при перевозке) производителями товара.
                Упаковка и упаковочные материалы бывает различными для авто, ЖД,
                авиа и морской доставки товара.
              </p>
              <p>
                Характер, материал и структура упаковки зависит от маршрута и
                агрессивной внешней среды. К примеру, доставка ноутбуков
                осуществлялась в жестких пластиковых кейсах, в то время, как
                мягкие игрушки могут упаковываться по иной схеме, при одинаковом
                способе доставки и виде транспорта.
              </p>
              <p>
                Мы несем всю ответственность за доставку и сохранность вашего
                груза. Ваш груз может быть упакован дополнительно и маркирован
                по требованию.{" "}
                <a href="stoimost_dostavki_gruza">Стоимость перевозки груза </a>
                зависит от типа товара его веса и объема.{" "}
              </p>
            </div>
          </div>

          <div className="row mt-30 our-clients">
            <div className="col-md-2">
              <h4>Наши партнеры</h4>
              <p>
                Глобальные перевозчики с которыми у нас заключен долгосрочный
                договор на фрахт
              </p>
            </div>
            <div className="col-md-10">
              <div className="owl-carousel" id="11">
                <div className="client-item">
                  <a href="https://lines.coscoshipping.com/home/">
                    <img
                      src="img/partner_more_cosco_gray.png"
                      className="img-responsive"
                      alt="COSCO (COSCO Container Lines) - международный партнер по морской перевозке грузов"
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

          <div className="row service-box margin-bottom-40">
            <div className="col-md-3 col-sm-3">
              <div className="service-box-heading">
                <img
                  alt="Авиаперевозка грузов"
                  width="40"
                  src="img/avia_perevozka_gruzov.png"
                />
                <span>Авиадоставка</span>
              </div>
              <p>
                Когда груз "нужен вчера"! Надежные и стабильные международные
                воздушные поставки на бесперебойных авиалиниях. Авиаперевозки -
                прямой маршрут до вашего склада.
              </p>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="service-box-heading">
                <img
                  alt="Железнодорожная перевозка грузов"
                  width="40"
                  src="img/zheleznodorozhnaya_perevozka_gruzov.png"
                />
                <span>ЖД грузы</span>
              </div>
              <p>
                Железная дорога позволяет реализовать максимальное соотношение:
                Объем груза, кол-во груза и скорость доставки до места
                назначения.
              </p>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="service-box-heading">
                <img
                  alt="Морские грузовые перевозки"
                  width="40"
                  src="img/morskie_gruzovye_perevozki.png"
                />
                <span>Морские грузы</span>
              </div>
              <p>
                Безопасные маршруты и конкурентоспособные тарифы позволят вам
                получить груз вовремя, и достаточно быстро, без лишних
                перегрузок
              </p>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="service-box-heading">
                <img
                  alt="Автомобильные грузоперевозки"
                  width="40"
                  src="img/avtomobilnye_gruzoperevozki.png"
                />
                <span>Автоперевозки</span>
              </div>
              <p>
                Автомобильная доставка. Шелковый путь в действии. Очень
                неприхотливый, нетребовательный, удобный для погрузки, недорогой
                и быстрый транспорт для перевозок из Китая в Россию.{" "}
              </p>
            </div>
          </div>
          <img
            src="img/pogruzka_konteinerov_na_zheleznoy_doroge.jpg"
            alt="Погрузка контейнеров на железной дороге"
            className="img-responsive pb-20 pt-20"
          />
          <div
            id="kak_my_rabotaem_v_kitae"
            style={{
              display: "block",
              marginBottom: "100px",
              marginTop: "-90px",
            }}
          ></div>
          <div className="row">
            <div className="col-md-8">
              <h3>Как мы работаем в Китае (подробно)</h3>
              <p>
                {" "}
                Наши специалисты создают и проводят прозрачные схемы оптимизации
                и транспортировки груза. СМС-информирование и постоянный контакт
                с вами, на каждом этапе пути следования вашего контейнера по
                территории России и Китая, позволит вам не переживать за свой
                груз.
              </p>
              <p>
                Мы позаботимся о каждом штрихе процесса доставки и решим все
                возникающие "шероховатости" с документами и государственными
                инспекциями. У нас есть решение для каждой проблемы, которая
                может возникнуть при транспортировке груза.
              </p>
              <div className="pictext pull-left">
                <img
                  src="img/proverka_komplektazii_pered_otpravkoy.jpg"
                  width="400"
                  alt="Проверка комплектации перед отправкой"
                  className="img-responsive pr-10"
                />
                <span>Проверка товара перед отправкой</span>
              </div>
              <p>
                Транспортировка груза - это метод управления цепочкой поставок,
                при котором получателям товара не нужно заботиться о сложностях
                связанных с международным импортом.{" "}
              </p>
              <p>
                Грузоотправитель (обычно производитель или оптовик) отправит
                товар напрямую на наш склад. А со склада в Китае, проверив
                качество товара и упаковку, мы передадим его вам прямо в руки,
                задействовав свою транспортную сеть, решив проблемы на таможне и
                очистив груз для продажи в России.{" "}
              </p>
              <p>
                Перевозка грузов с нами, экономит ваши деньги на складских
                расходах, снижает затраты на сбор и упаковку товара, и время!
                Конечно же! Вам не придется вникать в тонкости и хитрости
                документооборота в Китае.
              </p>
              <p>
                И это, одно из преимуществ работы с компанией РОСИМПОРТ, а
                именно:{" "}
                <strong>
                  вам не придется иметь дело с товаром ЗА границей
                </strong>
                , заниматься таможенными проблемами с китайскими таможенниками и
                хлопотать с документами при въезде в Россию.
              </p>
              <p>
                Работа с нами, значительно упрощает ваш бизнес! Мы сделаем всю
                работу по доставке груза за владельцев интернет-магазинов,
                торговых точек, крупных заводов и фабрик.{" "}
              </p>
              <p>
                Перед отправкой товара, мы проверим комплектацию и внешнее
                состояние товара. Соберем на консолидационный склад продукцию от
                нескольких поставщиков и обработаем весь груз, упаковав его и
                подготовив для транспортировки в Россию.
              </p>
              <blockquote>
                <p className="text-black">
                  Обслуживание, основанное на эффективности и скорости доставки.
                  Стратегически расположенные склады в Китае, обеспечивают успех
                  нашей логистической схемы.
                </p>
                <small> Коллектив компании РОСИМПОРТ</small>
              </blockquote>
              <p>
                {" "}
                Грузоотправители (оптовики и производители), иногда отправляют
                товары напрямую покупателям, но у большинства покупателей, в
                связи с такой отправкой, возникают проблемы. Особенно,
                <a
                  href="dostavka_gruzov_iz_kitaya#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                  title="Влияние сезона на перевозку груза из Китая"
                >
                  {" "}
                  во время сезона зимних праздников: с декабря по январь.{" "}
                </a>{" "}
              </p>
              <img
                src="img/otgruzhennyi_tovar.jpg"
                width="370"
                alt="Отгруженный товар"
                className="img-responsive pull-left pb-10 pr-10"
              />
              <p>
                {" "}
                Большинство владельцев интернет-магазинов и торговых точек
                получают тысячи заказов на подарки.
              </p>
              <p>
                Покупатели не будут счастливы, если получат новогодний подарок в
                феврале. РОСИМПОРТ, как опытный транспортировочный сервис,
                создает гибкие решения для владельцев торговых предприятий в
                России. Задержек не будет!
              </p>
              <p>
                Когда владелец интернет-магазина или торговых точек принимает
                много разнородных заказов в короткие сроки то возникает проблема
                доставки товара от разных поставщиков и оптовиков в Китае.
              </p>
              <p>
                Мы забираем товар от поставщиков с фабрик или торговых складов в
                Китае (из разных городов) и собираем этот товар на своем
                логистическом складе в одном городе.
              </p>
              <p>
                Мы принимаем товар, если ваши поставщики (по вашему решению)
                отправят товары на наш склад, то мы будем работать с грузами
                централизованно, со всем объемом разнородных товаров.
              </p>
              <img
                src="img/zagruzhennyi_tovar.jpg"
                width="370"
                alt="Отгруженный товар"
                className="img-responsive pull-left pb-10 pr-10"
              />
              <p>
                Весь отгруженный товар будет учтен и переписан, а наша система
                СМС-информирования позволит вам иметь «контролируемую поставку».
              </p>
              <p>
                Контроль заключается в том, что владелец интернет-магазина или
                торговой точки (наш клиент), может отслеживать статус пребывания
                и транспортировки товара в режиме реального времени.
              </p>
              <p>
                СМС приходят сразу по прибытию или убытию товара в промежуточных
                точках, включая таможенные терминалы и пограничный контроль
              </p>
              <p>
                Можно собрать разные товары на одном складе и в одном
                контейнере. Мы соберем весь разнородный товар с нескольких
                китайских фабрик и отправим вам удобным видом транспорта.{" "}
              </p>
            </div>
            <div className="col-md-4 front-skills">
              <h2 className="no-top-space">
                <a href="kompania_gruzovyh_perevozok">О нас</a>
              </h2>
              <ol
                className="nav sidebar-categories mb-40"
                style={{ lineHeight: "2em" }}
              >
                <li>
                  <i className="fa fa-caret-right"></i>Инновационные
                  индивидуальные решения
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Информирование клиентов
                  по всему маршруту
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Согласование деталей для
                  выгодных решений
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Ответственность перед
                  нашими клиентами
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Высокие требования к
                  своим сотрудникам
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Высокий уровень этических
                  стандартов
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Надежность -
                  первостепенное значение
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Интегрированные услуги по
                  перевозкам груза
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Комплексная логистика
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Опытные торговые
                  менеджеры по доставке груза
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Понимание зарубежных
                  рынков перевозок
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Общий рост динамики
                  грузооборота
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Зарубежная транспортная
                  инфраструктура
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Обеспечение безопасности
                  груза
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Индивидуальный спектр
                  услуг
                </li>
              </ol>
              <img
                src="img/express_avia_dostavka_gruza.jpg"
                alt="Экспресс-авиа доставка груза"
                className="img-responsive img-fullwidth"
              />
              <h4 className="no-top-space mt-20">
                <a href="avia_express_dostavka">
                  Быстрая доставка (экспресс-авиа)
                </a>
              </h4>
              <ol
                className="nav sidebar-categories mb-10"
                style={{ lineHeight: "2em" }}
              >
                <li>
                  <i className="fa fa-caret-right"></i>Маленький вес груза
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Небольшой объем
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Критическая ситуация
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>Скоропортящийся продукт
                </li>
              </ol>
            </div>
          </div>

          <div className="row quote-v1 mb-10 mt-20 text-center">
            <div className="col-md-9">
              <span>
                <h4>Рассчитать стоимость доставки товара из Китая в Россию</h4>
              </span>
            </div>
            <div className="col-md-3">
              <a
                className="btn-transparent"
                href="stoimost_dostavki_gruza"
                target="_blank"
              >
                <i className="fa fa-money margin-right-10"></i>Посмотреть и
                рассчитать
              </a>
            </div>
          </div>
          <div
            id="obratnyi_zvonok"
            style={{
              display: "block",
              marginBottom: "100px",
              marginTop: "-90px",
            }}
          >
            {">"}
          </div>
          <div className="content-page">
            <div className="row mt-10 mb-30">
              <div className="col-md-6 col-sm-6">
                <h5 className="text-center font-20 font-black pt-10 pb-10 ">
                  <span className="text-red-background pr-50 pl-50">
                    Обратный звонок
                  </span>
                </h5>
                <form
                  className="form-horizontal form-without-legend"
                  action="callback_rosimport.php"
                  method="post"
                  role="form"
                >
                  <div className="form-group">
                    <label
                      htmlFor="firstname"
                      className="col-lg-3 control-label"
                    >
                      Ваше имя<span className="require">*</span>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="firstname"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefon" className="col-lg-3 control-label">
                      Ваш телефон <span className="require">*</span>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="telefon"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-9 col-md-offset-5 padding-left-0 padding-top-20">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="отправить"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-sm-6 pull-right">
                <div className="form-info">
                  <h2 className="text-uppercase">
                    <em>Узнать</em> Стоимость доставки груза
                  </h2>
                  <p>
                    Опишите характер груза, его вес, объем, стоимость и другие
                    данные. <br /> <strong>По ЖЕЛАНИЮ! </strong> Вы можете
                    указать и другую информацию о грузе, которые могут влиять на
                    стоимость его доставки в Россию. Город в Китае, желаемая
                    дата доставки, отсутствие или наличие документов.
                  </p>
                  <p>
                    Мы рассчитаем точную цену доставки и сообщим вам очень
                    быстро!
                  </p>
                  <a href="contacts" type="button" className="btn btn-default">
                    УЗНАТЬ СТОИМОСТЬ
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="optimizacia_processa_dostavki_gruza_iz_kitaya"
            style={{
              display: "block",
              marginBottom: "100px",
              marginTop: "-90px",
            }}
          ></div>
          <div className="row service-box mb-20 text-center p-5">
            <h3>
              Оптимизация процесса{" "}
              <a
                title="Доставка грузов из Китая"
                href="dostavka_gruzov_iz_kitaya"
              >
                доставки груза из Китая
              </a>
            </h3>
          </div>
          <div className="row multi-row-clearfix">
            <div className="blog-posts">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <article className="post style1 clearfix maxwidth500">
                  <div className="col-md-4 p-0">
                    <div className="entry-header">
                      <div className="post-thumb">
                        <img
                          src="img/obiedinenie_i_vyvoz_gruza.jpg"
                          alt="Объединение и вывоз груза"
                          className="img-responsive img-fullwidth"
                        />
                      </div>
                      <div className="entry-date entry-date-absolute">
                        1 <span> Шаг</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="entry-content pl-50 p-10 pt-20 pr-20">
                      <h4 className="entry-title pt-0">Объединение груза</h4>
                      <p>
                        Мы заберем ваш груз у ваших поставщиков в Китае. Если у
                        вас несколько разных поставщиков, мы можем объединить
                        разнородные товары в{" "}
                        <a href="dostavka_sbornyh_gruzov">общий сборный груз</a>{" "}
                        и отправить все вместе.
                      </p>
                      <a
                        className="text-theme-colored mt-10 mb-0 pull-right flip"
                        href="dostavka_gruzov_iz_kitaya#generalnye_chastichnye_sbornye_gruzy"
                      >
                        Объединение и вывоз груза{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <article className="post style1 clearfix maxwidth500">
                  <div className="col-md-4 p-0">
                    <div className="entry-header">
                      <div className="post-thumb">
                        <img
                          src="img/podgotovka_gruza.jpg"
                          alt="Подготовка груза"
                          className="img-responsive img-fullwidth"
                        />
                      </div>
                      <div className="entry-date entry-date-absolute">
                        2 <span> Шаг</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="entry-content pl-50 p-10 pt-20 pr-20">
                      <h4 className="entry-title pt-0">Подготовка груза</h4>
                      <p>
                        Проверка товара, упаковка в картонные коробки или тару
                        по спецификации характера груза. Маркировка груза в
                        Китае, перед транспортировкой в Россию, производится на
                        нашем складе
                      </p>
                      <a
                        className="text-theme-colored mt-10 mb-0 pull-right flip"
                        href="dostavka_gruzov_iz_kitaya#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                      >
                        Подготовка груза{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <article className="post style1 clearfix maxwidth500">
                  <div className="col-md-4 p-0">
                    <div className="entry-header">
                      <div className="post-thumb">
                        <img
                          src="img/optimizacia_documentov.jpg"
                          alt="Оптимизация документов"
                          className="img-responsive img-fullwidth"
                        />
                      </div>
                      <div className="entry-date entry-date-absolute">
                        3 <span> Шаг</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="entry-content pl-50 p-10 pt-20 pr-20">
                      <h4 className="entry-title pt-0">
                        Оптимизация документов
                      </h4>
                      <p>
                        Подготовка товара, поиск и сбор необходимой документации
                        для очистки груза и прохождения таможенной проверки на
                        границе Китая и при въезде в Россию
                      </p>
                      <a
                        className="text-theme-colored mt-10 mb-0 pull-right flip"
                        href="uslugi#uslugi_komplektacii_i_sborki_gruza"
                        title="Услуги комплектации и сборки груза"
                      >
                        Оптимизация документов{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <article className="post style1 clearfix maxwidth500">
                  <div className="col-md-4 p-0">
                    <div className="entry-header">
                      <div className="post-thumb">
                        <img
                          src="img/dostavka_do_sklada.jpg"
                          alt="Доставка до склада"
                          className="img-responsive img-fullwidth"
                        />
                      </div>
                      <div className="entry-date entry-date-absolute">
                        4 <span> Шаг</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="entry-content pl-50 p-10 pt-20 pr-20">
                      <h4 className="entry-title pt-0">Доставка до склада</h4>
                      <p>
                        Авиа, Морская, ЖД и Авто. Доставка товара от
                        производителя, оптовика или магазина, до склада в Москве
                        или до вашего склада в указанном городе или к месту
                        назначения указанного в договоре
                      </p>
                      <a
                        className="text-theme-colored mt-10 mb-0 pull-right flip"
                        href="dostavka_gruzov_iz_kitaya"
                      >
                        Доставка до склада{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div
            id="vyvoz_gruza_ot_postavshchika"
            style={{
              display: "block",
              marginBottom: "100px",
              marginTop: "-90px",
            }}
          ></div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane row fade active in">
              <div className="col-md-4">
                <a
                  data-rel="fancybox-button"
                  title="Груз от поставщика (вывоз)"
                  className="fancybox-button"
                  href="img/pogruzka_na_sklade_v_kitae.jpg"
                >
                  <img
                    alt="Груз от поставщика (вывоз)"
                    src="img/pogruzka_na_sklade_v_kitae.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-8">
                <h4 className="post-title text-center mb-10">
                  <a href="#" className="font-20">
                    Вывоз груза от поставщика
                  </a>
                </h4>
                <p className="margin-bottom-10">
                  Доставка груза на консолидационный склад происходит по сигналу
                  поставщика о его готовности к отгрузке. Отгрузка товара
                  производится с его склада: фабрики, завода, из оптовых
                  торговых центров, торговых экспортных площадок и из обычных
                  магазинчиков со своим небольшим производством.
                  Грузоотправитель(поставщик) может упаковать товар сам, но мы
                  всегда предупреждаем нашего клиента, если требуется
                  дополнительная упаковка. Отправитель может не знать, каким
                  именно транспортным средством будет отправляться товар и
                  делает стандартную упаковку. На нашем складе имеется все
                  необходимое оборудование и материал для упаковки даже очень
                  сложных (для транспортировки) изделий. К примеру:
                  Металлообрабатывающих станков ЧПУ для заводского производства
                </p>
                <p>
                  <a className="read-more" href="konsolidacia_gruza">
                    Подробно о консолидации груза
                  </a>
                </p>
                <div className="sozialblok">
                  <ul className="social-icons  square-sm m-0">
                    <li>
                      <a href="https://vk.com/">
                        <i className="fa fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/79252009511">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/rosimport.pro/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/rosimport">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9 col-sm-9 blog-posts mt-30">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="front-carousel">
                    <div className="carousel slide" id="774">
                      <div className="carousel-inner">
                        <div className="item">
                          <img
                            alt="Производители товаров в Китае"
                            src="img/proizvoditeli_tovarov_v_kitae.jpg"
                          />
                        </div>
                        <div className="item active">
                          <img
                            alt="Товар для отправки"
                            src="img/tovar_dlia_otpravki.jpg"
                          />
                        </div>
                        <div className="item">
                          <img
                            alt="Товар китайских производителей"
                            src="img/tovar_kitayskih_proizviditeley.jpg"
                          />
                        </div>
                      </div>

                      <a
                        data-slide="prev"
                        href="#774"
                        className="carousel-control left"
                      >
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <a
                        data-slide="next"
                        href="#774"
                        className="carousel-control right"
                      >
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-8">
                  <h2>Лучшие цены от поставщиков товара</h2>
                  <ul className="blog-info">
                    <li>
                      <i className="fa fa-calendar"></i> Личный менеджер
                    </li>
                  </ul>
                  <p>
                    Ваш личный менеджер из компании РОСИМПОРТ будет искать
                    производителей в Китае и найдет лучшего производителя
                    искомого товара или оптовика этого же товара.{" "}
                  </p>
                  <p>
                    Когда вы увидите все разнообразие цен и торговых
                    предприятий, фабрик и оптовых рынков, сложно будет не
                    запутаться в местном многообразии цен и товаров. Наши
                    китайские сотрудники разбираются в этом, потому, что там
                    живут и работают на наших складах.
                  </p>
                </div>
              </div>
              <hr className="blog-post-sep" />
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <img
                    className="img-responsive"
                    alt="Подтверждение образцов"
                    src="img/podtvezhdenie_obraztsov.jpg"
                  />
                </div>
                <div className="col-md-8 col-sm-8">
                  <h2>Подтверждение образцов</h2>
                  <ul className="blog-info">
                    <li>
                      <i className="fa fa-calendar"></i>Подбор товара в Китае
                    </li>
                  </ul>
                  <p>
                    Наш менеджер в Китае подберет вам образцы найденных товаров.
                    Мы переправим вам сначала фотографии, а затем и образцы
                    товара. Когда вы сделаете выбор по фото, мы отправим вам
                    образцы с помощью Экспресс-авиа.{" "}
                  </p>
                  <p>
                    Стоимость доставки образцов и документов вы можете
                    посмотреть по ссылке:
                  </p>
                  <a
                    href="avia_express_dostavka#express_dostavka_samoletom_iz_kitaya"
                    className="more"
                  >
                    Стоимость доставки образцов{" "}
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <hr className="blog-post-sep" />
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <img
                    className="img-responsive"
                    alt="Проверка товара перед отправкой"
                    src="img/proverka_tovara_pered_otpravkoy.jpg"
                  />
                </div>
                <div className="col-md-8 col-sm-8">
                  <h2>Координация с производителями</h2>
                  <ul className="blog-info">
                    <li>
                      <i className="fa fa-calendar"></i>Проверка товара перед
                      отправкой
                    </li>
                  </ul>
                  <p>
                    Ваш менеджер от компании РОСИМПОРТ, поможет наладить
                    контакты и если вы будете руководить им удаленно, то после
                    получения каждой партии товара, мы тщательно проверим
                    качество и соответствие упаковочному листу. Весь ваш груз
                    будет собран на нашем складе, упакован, промаркирован и
                    профессионально уложен в контейнер перед отправкой.
                  </p>
                </div>
              </div>
              <hr className="blog-post-sep" />
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <img
                    className="img-responsive"
                    alt=""
                    src="img/proverka_kachestva_tovara.jpg"
                  />
                </div>
                <div className="col-md-8 col-sm-8">
                  <h2>Проверка качества</h2>
                  <ul className="blog-info">
                    <li>
                      <i className="fa fa-calendar"></i>Бесплатный сервис
                    </li>
                  </ul>
                  <p>
                    Мы поможем вам собрать ваш товар от разных поставщиков на
                    нашем складе и провести осмотр. Мы договоримся с
                    производителем в случае возникновения проблемы. Мы обменяем
                    у него некачественный товар. Это будет лучше, нежели он
                    уедет в Россию и вы уже на месте обнаружите проблемы с
                    товаром. Вернуть его и обменять будет можно, только вот
                    затраты будут совсем другие. Подробнее в услугах...
                  </p>
                  <a
                    href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                    className="more"
                  >
                    Поставщики из Китая и крупный груз{" "}
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <hr className="blog-post-sep" />
            </div>

            <div className="col-md-3 col-sm-3 blog-sidebar">
              <div className="form-info">
                <h2>
                  <em>Мульти</em>модальные
                  <br /> перевозки
                </h2>
                <p>
                  Мультимодальные перевозки (комбинированные перевозки) - это
                  перевозка грузов по одному договору, но осуществляемая, как
                  минимум, двумя различными видами транспорта.
                </p>
                <p>
                  Перевозчик несет ответственность (в юридическом смысле) за всю
                  перевозку, даже если она осуществляется несколькими различными
                  видами транспорта (железнодорожным, морским и автомобильным
                  транспортом).
                </p>
                <p>
                  Перевозчик не обязан владеть всеми транспортными средствами;
                  перевозка, часто осуществляется суб-перевозчиками (на
                  юридическом языке называемыми «фактическими перевозчиками»).
                </p>
                <button
                  onClick={() =>
                    (window.location.href =
                      "dostavka_gruzov_iz_kitaya#multimodalnye_perevozki")
                  }
                  type="button"
                  className="btn btn-default"
                >
                  Узнать больше...
                </button>
              </div>

              <div className="newsblock">
                <h5 className="text-red-background mb-15">
                  Новости CARGO - Китай
                </h5>
                <div className="row mb-20">
                  <div className="pull-left ">
                    <img
                      className="img-responsive pr-10"
                      width="70"
                      alt="Новости грузоперевозок"
                      src="img/news_cargo.png"
                    />
                    <p className="font-11 pt-5">20.05.2020</p>
                  </div>
                  <h4>
                    <a href="#">Запрещается вывозить</a>
                  </h4>
                  <p>
                    Это напоминание о том, что в аэропортах Китая строго
                    запрещено ввозить / вывозить любые опасные грузы.
                  </p>
                  <p>
                    <strong>Аэропорты:</strong> CGQ, CSX, FOC, HAK, SHE, SYX,
                    URC, WEH, WNZ, XUZ, YNZ, YTY. HGH также не разрешается ввоз
                    / вывоз класса 1 ~ 9 д / г. (HGH может принимать только
                    литиевые батареи, содержащиеся в оборудовании (PI967 / 970),
                    Раздел II, UN1845, сухой лед для целей охлаждения.)
                  </p>
                </div>
                <div className="row mb-20">
                  <div className="pull-left ">
                    <img
                      className="img-responsive pr-10"
                      width="70"
                      alt="Новости грузоперевозок"
                      src="img/news_cargo.png"
                    />
                    <p className="font-11 pt-5">20.05.2020</p>
                  </div>
                  <h4>
                    <a href="#">Уведомление</a>
                  </h4>
                  <p>
                    Уведомление о расписании грузовых перевозок из-за
                    распространения нового коронавируса (21FEB-23FEB). В ответ
                    на распространение коронавируса China Airlines Cargo отменит
                    (перенастроит) обслуживание фрахтовщиков в течение
                    21-го-23-го февраля.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-30 mb-30">
            <table className="blueTable">
              <thead>
                <tr className="fon-blue-3">
                  <td className="pt-10 pb-10" colSpan="5">
                    <span className="font-12"></span> Международные грузовые
                    перевозки <span className="font-12"> по контракту</span>
                  </td>
                </tr>
                <tr className="fon-blue-4 pt-20 pb-20">
                  <th>Услуга</th>
                  <th>Китай</th>
                  <th>РФ и страны ТС</th>
                  <th>ЕС и Турция</th>
                  <th>США</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="5">
                    <a href="stoimost_dostavki_gruza">
                      Смотреть стоимость доставки в ваш город
                    </a>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Контракт РОСИМПОРТ</td>
                  <td>
                    Контракт "Наш" <br />{" "}
                    <a
                      href="stoimost_dostavki_gruza"
                      target="_blank"
                      className="more"
                    >
                      Подробнее о контракте{" "}
                    </a>
                  </td>
                  <td> - </td>
                  <td>
                    АВТО <br />
                    (сборные грузы)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Контракт <br /> "Клиентский"
                  </td>
                  <td>
                    АВИА МОРЕ ЖД
                    <br />{" "}
                    <a
                      href="stoimost_dostavki_gruza"
                      target="_blank"
                      className="more"
                    >
                      Подробнее о контракте{" "}
                    </a>
                  </td>
                  <td>Есть</td>
                  <td>Есть</td>
                  <td>Только импорт</td>
                </tr>
                <tr>
                  <td>Денежные переводы</td>
                  <td>Есть</td>
                  <td> - </td>
                  <td>Есть</td>
                  <td>Есть</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                      title="Поставщики из Китая и крупный груз"
                    >
                      Доставка и выкуп
                    </a>
                  </td>
                  <td> с площадок</td>
                  <td>-</td>
                  <td> с площадок</td>
                  <td> с площадок</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="avia_express_dostavka#express_dostavka_samoletom_iz_kitaya"
                      className="more"
                      title="Экспресс доставка самолетом из Китая"
                    >
                      Экспресс доставка
                    </a>
                  </td>
                  <td>АВИА-доставка</td>
                  <td>-</td>
                  <td>АВИА-доставка</td>
                  <td>АВИА-доставка</td>
                </tr>
                <tr>
                  <td>Забрать груз</td>
                  <td>У поставщика</td>
                  <td>У поставщика</td>
                  <td>У поставщика</td>
                  <td>У поставщика</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="uslugi#biznes_tur_v_guanchzhou"
                      title="БИЗНЕС ТУР В ГУАНЧЖОУ"
                    >
                      Бизнес-туры
                    </a>
                  </td>
                  <td>
                    Бизнес и{" "}
                    <a
                      href="uslugi#mebelnye_tury_v_kitae"
                      title="Мебельные туры в Китае"
                    >
                      Мебельный тур
                    </a>
                  </td>
                  <td>-</td>
                  <td>Только Бизнес-тур</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Представительские услуги</td>
                  <td>Есть</td>
                  <td>Есть</td>
                  <td>Есть</td>
                  <td>Есть</td>
                </tr>
                <tr>
                  <td>
                    <a href="tamozhnia" title="Таможня. Информация об импорте">
                      Таможенное оформление
                    </a>
                  </td>
                  <td>(импорт/экспорт)</td>
                  <td>-</td>
                  <td>(импорт/экспорт)</td>
                  <td>Только импорт</td>
                </tr>
                <tr>
                  <td>Сертификация продукции</td>
                  <td>Есть</td>
                  <td>Есть</td>
                  <td>Есть</td>
                  <td>Есть</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row mix-block margin-bottom-40">
            <div className="col-md-12 testimonials-v1">
              <div id="888" className="carousel slide">
                <div className="carousel-inner">
                  <div className="active item">
                    <blockquote>
                      <p>
                        {" "}
                        Мы длительное время подбирали сотрудников в свой
                        коллектив. Их профессиональные качества не раз выручали
                        наших клиентов в практически безнадежных ситуациях. Все
                        становилось решаемым после обращения в нашу компанию. не
                        лучше ли было с неё начать?
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        className="pull-left"
                        src="img/sotrudnik_director_mihail_shiyan.jpg"
                        alt="Генеральный директор Михаил Шиян"
                      />
                      <div className="pull-left">
                        <span className="testimonials-name">Михаил Шиян</span>
                        <span className="testimonials-post">
                          Генеральный директор компании РОСИМПОРТ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <blockquote>
                      <p>
                        Китай - приветливая страна, но у каждого народа есть
                        своя тонкая грань отношения к иностранцам. Это заложено
                        в их истории и менталитете. Чтобы разговаривать с
                        китайскими партнерами на равных и знать все тонкости
                        хитрой Азии, надо проработать в Китае долгое время!
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        className="pull-left"
                        src="img/sotrudnik_ekaterina_dvoeglazova.jpg"
                        alt=""
                      />
                      <div className="pull-left">
                        <span className="testimonials-name">
                          Екатерина Двоеглазова
                        </span>
                        <span className="testimonials-post">
                          Координатор направлений стран Азии
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <a className="left-btn" href="#888" data-slide="prev"></a>
                <a className="right-btn" href="#888" data-slide="next"></a>
              </div>
            </div>
          </div>

          <div itemScope itemType="http://schema.org/NewsArticle">
            <link
              itemProp="mainEntityOfPage"
              href="https://rosimport.ru/skladskie_uslugi"
            />
            <div className="tab-content mt-10">
              <div className="tab-pane row fade active in">
                <div className="col-md-6">
                  <a
                    data-rel="fancybox-button"
                    title="Женщина-кладовщик, заведующая складом"
                    alt="Женщина-кладовщик, заведующая складом"
                    className="fancybox-button"
                    href="img/zhenshchina_kladovshchik_zaveduyushchaya_skladom.jpg"
                  >
                    <img
                      itemProp="image"
                      alt="Женщина-кладовщик, заведующая складом"
                      src="img/zhenshchina_kladovshchik_zaveduyushchaya_skladom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="col-md-6 mt-5">
                  <header>
                    <h2
                      itemProp="headline name"
                      className="post-title text-center font-16 mb-10"
                    >
                      Услуги складирования при перевозке международных грузов
                    </h2>
                  </header>
                  <div itemProp="description">
                    <p className="mb-10">
                      Куда бы вы ни везли свой груз, он всегда потребует
                      остановки. Для подготовки к путешествию в Россию из теплых
                      стран или к длительной тряске на медленных
                      верблюдах-дальнобойщиках и коротких перегонах до
                      транзитных складов. Так вот, самый первый склад для вашего
                      груза, это будет ближайший склад, на котором мы окажем вам
                      следующие услуги:
                    </p>
                    <p className="mb-10">
                      Примем груз, зарегистрируем его как положено, взвесим,
                      установим максимальные габариты для последующей укладки в{" "}
                      <a
                        href="konteinery#standartnye_tipy_konteinerov"
                        title="Стандартные типы контейнеров"
                      >
                        стандартный контейнер
                      </a>
                      , подготовим сопроводительные документы и размести его на
                      полке склада. Предварительно!!! Посморим не разбилось ли
                      чего внутри, осмотрим упаковку и по вашему желанию
                      проверим товар на брак. Товар на складе, будет размещен в
                      помещении с заявленным температурным режимом. Читайте
                      подробно об услугах на складе:{" "}
                      <a className="link-orange" href="skladskie_uslugi">
                        СКЛАДСКИЕ УСЛУГИ
                      </a>
                    </p>
                  </div>
                </div>
                <span
                  itemProp="datePublished"
                  className="pull-right pr-20"
                  content="2020-07-31"
                >
                  31 июля 2020
                </span>
              </div>
            </div>
          </div>

          <div itemScope itemType="http://schema.org/NewsArticle">
            <link
              itemProp="mainEntityOfPage"
              href="https://rosimport.ru/dostavka_gruzov_iz_kitaya"
            />
            <div className="tab-content mt-10">
              <div className="tab-pane row fade active in">
                <div className="col-md-2">
                  <a
                    data-rel="fancybox-button"
                    title="Сборный груз приготовленный к международной грузоперевозке"
                    className="fancybox-button"
                    href="img/sbornyi_gruz_prigotovlennyi_k_mezhdunarodnoy_gruzoperevozke.jpg"
                  >
                    <img
                      itemProp="image"
                      alt="Сборный груз приготовленный к международной грузоперевозке"
                      src="img/sbornyi_gruz_prigotovlennyi_k_mezhdunarodnoy_gruzoperevozke_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="col-md-10 mt-5">
                  <header>
                    <h2
                      itemProp="headline name"
                      className="post-title text-center font-16 mb-10"
                    >
                      Доставка сборных грузов
                    </h2>
                  </header>
                  <div itemProp="description">
                    <p className="margin-bottom-10">
                      Международные грузоперевозки давно освоили такой тип
                      доставки, как сборные грузы. Это товары от нескольких
                      производителей, собранные в одном грузовом кластере
                      (контейнер, палета) и доставленные разным получателям,
                      порой находящихся даже в нескольких удаленных городах
                      России. С развитием торговли и созданием множества
                      интернет-магазинов, поставки малых и частых партий
                      товаров, стали более востребованы, чем редкие, но огромные
                      партии груза. Читайте далее:{" "}
                      <a className="link-orange" href="dostavka_sbornyh_gruzov">
                        Доставка сборных грузов
                      </a>
                    </p>
                  </div>
                </div>
                <span
                  itemProp="datePublished"
                  className="pull-right pr-20"
                  content="2020-07-28"
                >
                  28 июля 2020
                </span>
              </div>
            </div>
          </div>

          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="Девушки в офисе лицензируют импортный груз"
                  className="fancybox-button"
                  href="img/devushki_v_ofice_licenziruyut_importnyi_gruz.jpg"
                >
                  <img
                    alt="В китайском магазине"
                    src="img/devushki_v_ofice_licenziruyut_importnyi_gruz_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10 mt-5">
                <h6 className="post-title text-center font-14 mb-10">
                  Лицензирование товаров в международных грузоперевозках
                </h6>
                <p className="margin-bottom-10">
                  Лицензирование товаров в международных грузоперевозках
                  предусмотрено законодательством всех стран импортеров и
                  экспортеров. В Китае на некоторые товары не требуется лицензия
                  и часть товаров не облагается пошлинами. Для постоянных
                  грузоперевозок создаются автоматические лицензии, которые
                  действуют до 6 месяцев. За этим пристально следит
                  Государственное Главное Управление по контролю качества.
                  Читайте далее:{" "}
                  <a
                    className="link-orange"
                    href="licenzirovanie_importa_eksporta_v_kitae"
                  >
                    {" "}
                    Лицензирование импорта и экспорта в Китае
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="В китайском магазине"
                  className="fancybox-button"
                  href="img/tovary_na_sklade_pered_mezhdunarodnymi_perevozkami.jpg"
                >
                  <img
                    alt="В китайском магазине"
                    src="img/tovary_na_sklade_pered_mezhdunarodnymi_perevozkami_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10 mt-5">
                <h6 className="post-title text-center font-14 mb-10">
                  Упаковка и маркировка товаров перед грузоперевозками
                </h6>
                <p className="margin-bottom-10">
                  На консолидационном складе, непосредственно перед отправкой
                  груза по международному маршруту, груз проходит "доупаковку",
                  переупаковку или внутреннюю упаковку с тем, чтобы доехать без
                  ущерба для владельца товара. Ущерб возникает при перегрузках в
                  терминалах таможни и при смене транспорта, следуя
                  логистической схеме. На китайских фабриках проходит
                  стандартная упаковка для международных перевозок. Ведь они не
                  знают, какой вид транспорта выберет владелец груза.Как
                  проходит упаковка груза и конечно же - маркировка. Читайте
                  далее:{" "}
                  <a className="link-orange" href="upakovka_tovara">
                    {" "}
                    Упаковка и маркировка товаров
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="В китайском магазине"
                  className="fancybox-button"
                  href="img/v_kitayskom_magazine.jpg"
                >
                  <img
                    alt="В китайском магазине"
                    src="img/v_kitayskom_magazine_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10 mt-10">
                <h6 className="post-title text-center font-14 mb-10">
                  Список китайских магазинов для закупок
                </h6>
                <p className="margin-bottom-10">
                  Сотрудничество с нами очень важно, когда вы хотите купить
                  партию товара не осуществляя поездку в Китай. Вам достаточно
                  заказать образцы или просто озвучить нам характеристики
                  товара, с тем, чтобы мы сами нашли вам образцы и сделали
                  закупку для вас. Надо сказать, что мы практикуем закупки
                  товаров для клиентов уже более 10 лет. И ориентируемся сред
                  оптовых покупателей в Китае, как у себя дома. Наши
                  представители работают в Китае на постоянной основе. Список,
                  который вы увидите на странице, даст вам небольшое понятие о
                  разнообразии товара и многочисленности его производителей.{" "}
                  <a className="link-orange" href="tovary_iz_kitaya">
                    {" "}
                    Читать: Товары из Китая без посредников
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="Груз на таможне"
                  className="fancybox-button"
                  href="img/gruz_na_tamozhne.jpg"
                >
                  <img
                    alt="Груз на таможне"
                    src="img/gruz_na_tamozhne_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10 mt-10">
                <h6 className="post-title text-center font-14 mb-10">
                  Груз на таможне
                </h6>
                <p className="margin-bottom-10">
                  Когда груз приходит на таможенный терминал, на на него
                  набрасываются зубастые стихии таможенных деклараций двух
                  стран, на границе которых находится груз. Это может
                  происходить и не на границе, а в месте прибытия груза в
                  страну-импортер. В любом случае, необходимо, чтобы все ваши
                  бумаги получили одобрение таможенной службы. Мы, как компания
                  международных грузоперевозок, расскажем о многих подводных
                  камнях, поджидающих ваши товары на таможенном терминале,
                  читайте на странице.{" "}
                  <a className="link-orange" href="tamozhnia">
                    {" "}
                    Читать: Таможня. Информация об импорте
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="Вес и плотность груза"
                  className="fancybox-button"
                  href="img/ves_gruza.jpg"
                >
                  <img
                    alt="Вес и плотность груза"
                    src="img/ves_gruza_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10">
                <h6 className="post-title text-center font-14 mb-10">
                  Вес и плотность груза
                </h6>
                <p className="margin-bottom-10">
                  Вес перевозимого груза, является второй составной частью для
                  определения цены на доставку в международных грузовых
                  перевозках. Вес и объем, иначе, габариты и стороны.
                  Несоразмерность сторон, влияет на укладку груза и ведет к
                  повышению цены. Такой груз может считаться негабаритным и для
                  его{" "}
                  <a className="read-more" href="konteinery">
                    перевозки в контейнере
                  </a>{" "}
                  уйдет больше свободного места, что естественно повлияет на
                  цену. Вот эти составные части ваших расходов на доставку груза
                  из Китая или любой другой страны. Для точного подсчета
                  стоимости доставки вашего груза, существует калькулятор
                  плотности груза. Его вы найдете на странице "ВЕС ГРУЗА".
                  Достаточно перейти по ссылке.{" "}
                  <a className="link-orange" href="ves_gruza">
                    {" "}
                    Читать: Вес груза и грузовые классы
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="tab-content mt-10">
            <div className="tab-pane row fade active in">
              <div className="col-md-2">
                <a
                  data-rel="fancybox-button"
                  title="Поддоны и Погрузка"
                  className="fancybox-button"
                  href="img/poddony_i_pogruzka_2.jpg"
                >
                  <img
                    alt="Поддоны и Погрузка"
                    src="img/poddony_i_pogruzka_2_sm.jpg"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-10">
                <h6 className="post-title text-center font-14 mb-10">
                  Поддоны и Погрузка
                </h6>
                <p className="margin-bottom-10">
                  Правильно подобранный поддон не позволит грузу болтаться в
                  контейнере. Поддоны ЕВРО2 и мировые стандарты палет экономят
                  деньги! Укладка поддонов зависит от высоты товаров размещенных
                  на них. Надо только учитывать ширину поддона и их вместимость
                  в контейнер при международных грузовых перевозках. Если
                  контейнер будет заполнен не впритык, то к вам поедет пустое
                  место за ваши деньги. Сколько поддонов вы можете поместить в
                  морской контейнер или автомобильную фуру? Как упакрвывать груз
                  на поддонах? Что такое максимизация? Какие стандарты и
                  требования к деревянным поддонам вы можете узнать по ссылке:{" "}
                  <a
                    className="link-orange"
                    href="poddony_palety_dlia_gruzovyh_perevozok"
                  >
                    {" "}
                    Подробно о поддонах для перевозки грузов
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default Index;
