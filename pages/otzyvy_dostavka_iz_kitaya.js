import Head from "next/head";
import App from "../components/App";

const otzyvy_dostavka_iz_kitaya = () => {
  return (
    <App navLight="index">
      <Head>
        <title>Отзывы о доставке груза из Китая</title>
        <meta
          name="description"
          content="Отзывы клиентов о работе транспортной компании РОСИМПОРТ"
        />
        <meta property="og:title" content="Отзывы о доставке груза из Китая" />
        <meta
          property="og:description"
          content="Отзывы клиентов о работе транспортной компании РОСИМПОРТ"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/otzyvy_dostavka_iz_kitaya"
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
            <li className="active">Отзывы о доставке груза из Китая</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8 col-sm-8">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Отзывы о доставке груза из Китая
                  </h1>
                </div>
                <p className="content-text">
                  Здесь размещены отзывы об услугах логистики и отзывы о
                  доставке из Китая. Компания РОСИМПОРТ благодарит от всей души
                  наших клиентов, которые оставили отзывы о нашей работе.
                  Доставка товаров, это прежде всего - наша ответственность за
                  целостность и сохранность товаров на протяжении всего пути из
                  Китая в Россию.{" "}
                </p>
                <p className="content-text">
                  Компания по доставке, достойна таких отзывов только в случае
                  многолетней безошибочной работы, позволяющей нашим клиентам
                  рассчитывать на профессионализм транспортной компании
                  РОСИМПОРТ и на надежность и ответственность партнера по
                  перевозкам, в самых сложных ситуациях в системе "Доставка
                  КАРГО".
                </p>
                <p className="content-text">
                  Мы размещаем ваши отзывы только с разрешения публикации на
                  сайте и скрываем фото и имена по вашему желанию. Надо
                  понимать, что у нас заказывают груз известные компании и
                  первые лица средних и малых предприятий, поэтому в большинстве
                  случаев, при размещении отзывов на этой странице, лица и мена
                  будут скрыты. Если наши заказчики не против публикации их
                  должности и места работы, мы публикуем в отзывах разрешенную
                  информацию.
                </p>

                <div className="testimonials-v1">
                  <blockquote>
                    <div className="carousel-info">
                      <img
                        className="pull-left"
                        src="img/otzyv_o_dostavke_gruza_eugenii.jpg"
                        alt=""
                      />
                      <div className="pull-right">
                        <h6>Отзыв о доставке груза</h6>
                        <time dateTime="2020-07-14">20 июля, 2020</time>
                      </div>
                      <div className="pull-left">
                        <span className="testimonials-name">Евгений</span>
                        <span className="testimonials-post">Руководитеь</span>
                      </div>
                    </div>
                    <p>
                      У меня свой интернет-магазин. Вожу долго и часто. Хотел
                      выразить благодларность всему коллективу компании
                      Росимпорт за грамотно построенную схему отправки. Раньше я
                      часто менял транспортные компании. А сейчас уже 3 года
                      работаю с вашей компанией. Меня все устраивает. Нареканий
                      нет. Рекомендую к сотрудничеству.
                    </p>
                  </blockquote>
                </div>
                <div className="testimonials-v1">
                  <blockquote className="pb-90">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Отзыв о доставке груза от Елены 01"
                        className="fancybox-button"
                        href="img/otzyv_o_dostavke_gruza_01.jpg"
                      >
                        <img
                          className="pull-left img-responsive pr-20"
                          width="250"
                          src="img/otzyv_o_dostavke_gruza_01.jpg"
                          alt="Отзыв о доставке груза от Елены 01"
                        />
                      </a>
                    </figure>
                    <h4>Отзыв о доставке груза от Елены</h4>
                    <p className="content-text pt-30">
                      Спасибо за ваш труд ребята! Все доехало без ухабов и товар
                      весь цел. Я думала там побьется самая хрупкая верхушка, но
                      она осталась целая. Хорошо что уговорили на доп упаковку.
                      Работаем дальше без перерыва. Я вам напишу когда будет
                      следующая поставка, хорошо?
                    </p>
                    <div className="pull-right">
                      <time dateTime="2020-07-16">16 июля, 2020</time>
                    </div>
                  </blockquote>
                </div>

                <div className="testimonials-v1">
                  <blockquote className="pb-90">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Отзыв о доставке груза от Александра Волохова"
                        className="fancybox-button"
                        href="img/otzyv_o_dostavke_gruza_02_volohov_alexander.jpg"
                      >
                        <img
                          className="pull-left img-responsive pr-20"
                          width="250"
                          src="img/otzyv_o_dostavke_gruza_02_volohov_alexander_sm.jpg"
                          alt="Отзыв о доставке груза от Александра Волохова"
                        />
                      </a>
                    </figure>
                    <h4>Отзыв о доставке груза от Александра Волохова</h4>
                    <p className="content-text pt-30">
                      Михаил, ну классно, доставили без боя! Товар принял, уже
                      разгрузили. Спасибо за доставку в срок! 👍 Как доставите
                      вторую партию в Урумчи, напишите мне, плз. Я ещё хоте к
                      ней добавить.
                    </p>
                    <div className="pull-right">
                      <time dateTime="2020-06-27">27 июня, 2020</time>
                    </div>
                  </blockquote>
                </div>
                <div className="testimonials-v1">
                  <blockquote className="pb-30">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Отзыв о доставке груза от Алевтины Черепановой"
                        className="fancybox-button"
                        href="img/otzyv_o_dostavke_gruza_04_alevtina_cherepanova.jpg"
                      >
                        <img
                          className="pull-left img-responsive pr-20"
                          width="250"
                          src="img/otzyv_o_dostavke_gruza_04_alevtina_cherepanova_sm.jpg"
                          alt="Отзыв о доставке груза от Алевтины Черепановой"
                        />
                      </a>
                    </figure>
                    <h4>Отзыв о доставке груза от Алевтины Черепановой</h4>
                    <p className="content-text pt-10">
                      В целом все в порядке, мои отписались что уже на складе в
                      Москве. А в Волгоград вы можете переправить? мне не надо
                      быстро, так как сможете, чтоб по цене было скромно
                    </p>
                    <div className="pull-right">
                      <time dateTime="2020-04-01">1 апреля, 2020</time>
                    </div>
                  </blockquote>
                </div>

                <div className="testimonials-v1">
                  <blockquote className="pb-50">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Отзыв о доставке груза от Максима Берегового"
                        className="fancybox-button"
                        href="img/otzyv_o_dostavke_gruza_05_maksim_beregovoy.jpg"
                      >
                        <img
                          className="pull-left img-responsive pr-20"
                          width="250"
                          src="img/otzyv_o_dostavke_gruza_05_maksim_beregovoy_sm.jpg"
                          alt="Отзыв о доставке груза от  Максима Берегового"
                        />
                      </a>
                    </figure>
                    <h4>Отзыв о доставке груза от Максима Берегового</h4>
                    <p className="content-text pt-20">
                      Вообще девчонкам вашим спасибо. Но я может назойливый был
                      немного, доставал их звонками. И вам спасибо за чуткое
                      отношение{" "}
                    </p>
                    <div className="pull-right">
                      <time dateTime="2020-03-22">22 марта, 2020</time>
                    </div>
                  </blockquote>
                </div>

                <div className="testimonials-v1">
                  <blockquote className="pb-30">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Отзыв о доставке груза от Сергея М."
                        className="fancybox-button"
                        href="img/otzyv_o_dostavke_gruza_06_sergey_m.jpg"
                      >
                        <img
                          className="pull-left img-responsive pr-20"
                          width="250"
                          src="img/otzyv_o_dostavke_gruza_06_sergey_m_sm.jpg"
                          alt="Отзыв о доставке груза от Сергея М."
                        />
                      </a>
                    </figure>
                    <h4>Отзыв о доставке груза от Сергея М.</h4>
                    <p className="content-text pt-20">
                      Мне нет смысла метаться туда-сюда и сроки поджимают, так
                      что ждите заявку, прошлый раз как отработали мне
                      понравилось 🙂, а по таможне так же будет или в этом году
                      с доплатой?
                    </p>
                    <div className="pull-right">
                      <time dateTime="2020-03-15">15 марта, 2020</time>
                    </div>
                  </blockquote>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#aviacionnye_nadezhnye_vozdushnye_gruzoperevozki_iz_kitaya_v_rossiyu"
                          title="Надежные воздушные грузоперевозки из Китая в Россию"
                        >
                          Надежные воздушные грузоперевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#process_otgruzki_tovara_i_dostavki_aviatransportom"
                          title="Процесс отгрузки товара и доставки авиатранспортом"
                        >
                          Процесс отгрузки и доставки авиа
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya#aviadostavka_srochnogo_sbornogo_gruza"
                          title="Авиадоставка срочного и сборного груза в Россию из Китая"
                        >
                          Авиадоставка срочного и сборного груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov#zheleznodorozhnaya_dostavka_gruza"
                          title="Пошаговая железнодорожная доставка груза"
                        >
                          Пошаговая железнодорожная доставка груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov#intermodalnye_perevozki_gruzov"
                          title="Интермодальные перевозки грузов"
                        >
                          Интермодальные перевозки грузов
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya#preimushchestvo_avtomobilnyh_perevozok"
                          title="Преимущества автомобильных перевозок"
                        >
                          Преимущества автомобильных перевозок
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya#vidy_gruzovyh_avtomobiley"
                          title="Виды грузовых автомобилей"
                        >
                          Виды грузовых автомобилей
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#morskie_gruzovye_perevozki"
                          title="Морские грузовые перевозки"
                        >
                          Морские грузовые перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#morskaya_konteynernaya_transportirovka"
                          title="Морская контейнерная транспортировка LCL и FCL"
                        >
                          Морская контейнерная транспортировка
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#kak_proishodit_morskaya_dostavka_gruza"
                          title="Как происходит морская доставка груза (подробно)"
                        >
                          Как происходит морская доставка (подробно)
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#upakovka_gruza_dlia_morskih_konteinernyh_perevozok"
                          title="Упаковка груза для морских контейнерных перевозок"
                        >
                          Упаковка груза в контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov#osnovnye_morskie_porty_kitaya"
                          title="Основные морские порты Китая"
                        >
                          Основные морские порты Китая
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avia_express_dostavka#express_dostavka_samoletom_iz_kitaya"
                          className="more"
                          title="Экспресс доставка самолетом из Китая"
                        >
                          Экспресс доставка самолетом
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avia_express_dostavka#nadezhnost_bezopasnost_express_dostavki"
                          className="more"
                          title="Надежность и безопасность экспресс доставки"
                        >
                          Безопасность экспресс доставки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi#uslugi_komplektacii_i_sborki_gruza"
                          title="Услуги комплектации и сборки груза"
                        >
                          Услуги комплектации и сборки груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi#upakovka_tovara"
                          title="Упаковка товара"
                        >
                          Упаковка товара
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi#usluga_strahovania_gruza"
                          title="Услуга страхования груза"
                        >
                          Услуга страхования груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi#usluga_perevodchika_v_kitae"
                          title="Услуга переводчика в Китае"
                        >
                          Услуга переводчика в Китае
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi#biznes_tur_v_guanchzhou"
                          title="БИЗНЕС ТУР В ГУАНЧЖОУ"
                        >
                          БИЗНЕС ТУР В ГУАНЧЖОУ
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                          title="Отдельный и сборный контейнер (сборный груз)"
                        >
                          Отдельный и сборный контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#zayavka_na_perevozaku_gruza_iz_kitaya"
                          title="Заявка на перевозку груза из Китая"
                        >
                          Заявка на перевозку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#sms_informirovanie_o_mestonahozhdenii_konteinera"
                          title="СМС информирование о местонахождении контейнера"
                        >
                          СМС информирование
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#strahovanie_gruza_dlia_dostavki_iz_kitaya"
                          title="Страхование груза для доставки из Китая"
                        >
                          Страхование груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#generalnye_chastichnye_sbornye_gruzy"
                          title="Генеральные, частичные и сборные грузы"
                        >
                          Генеральные и сборные грузы
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                          title="Поставщики из Китая и крупный груз"
                        >
                          Поставщики из Китая и крупный груз
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                          title="Влияние сезона на перевозку груза из Китая"
                        >
                          Влияние сезона на перевозку
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                          title="Влияние праздников в Китае на доставку груза"
                        >
                          Влияние праздников на доставку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#multimodalnye_perevozki"
                          title="Мультимодальные перевозки"
                        >
                          Мультимодальные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#konteinernye_perevozki"
                          title="Контейнерные перевозки"
                        >
                          Контейнерные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#procedura_proverki_konteinera"
                          title="Процедура проверки контейнера"
                        >
                          Процедура проверки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#proverka_zagruzki_konteinera"
                          title="Проверка загрузки контейнера"
                        >
                          Проверка загрузки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#informacia_o_konteinereh_dlia_dostavki_tovarov"
                          title="Информация о контейнерах для доставки товаров"
                        >
                          Информация о контейнерах
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya#transportnye_kartochki_s_parametrami_dostavki_gruzov"
                          title="Транспортные карточки с параметрами доставки грузов"
                        >
                          Карточки товаров
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
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

export default otzyvy_dostavka_iz_kitaya;
