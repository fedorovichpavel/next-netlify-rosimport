import Head from "next/head";
import App from "../components/App";

const transportnaya_kompania = () => {
  return (
    <App navLight="index">
      <Head>
        <title>Транспортная компания. РОСИМПОРТ</title>
        <meta
          name="description"
          content="Транспортная компания осуществляющая все виды международных перевозок"
        />
        <meta property="og:title" content="Транспортная компания. РОСИМПОРТ" />
        <meta
          property="og:description"
          content="Транспортная компания осуществляющая все виды международных перевозок"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/transportnaya_kompania"
        />
        <link
          rel="canonical"
          href="https://rosimport.ru/transportnaya_kompania"
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
              <a href="/">Международная перевозка грузов</a>
            </li>
            <li className="active">О транспортной компании РОСИМПОРТ</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <h1 className="text-center">
                  Транспортная компания. РОСИМПОРТ
                </h1>
                <div className="col-md-12 mb-30 mt-20">
                  <div className="service-box-v1">
                    <h3>Наше Достижение</h3>
                    <p>
                      Компания РОСИМПОРТ, признанная и уважаемая компания в
                      отрасли грузоперевозок, благодаря выполненным
                      обязательствам перед клиентами, деловыми партнерами и
                      сотрудниками.
                    </p>
                  </div>
                </div>
                <div className="row  mt-30">
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="no-top-space">О нас</h3>
                      <p>
                        Компания РОСИМПОРТ, основанная в 2010 году, предлагает
                        специализированную и персонализированную поддержку в
                        качестве международного поставщика логистических и
                        экспедиторских услуг для крупных и малых компаний,
                        государственных учреждений, некоммерческих организаций,
                        а также частных лиц. Благодаря совместным усилиям наших
                        опытных специалистов в профессиональной команде, мы
                        можем гарантировать, что ваш груз будет доставлен точно
                        в срок, в отличном состоянии и в рамках запланированного
                        бюджета.
                      </p>
                      <p>
                        Компания РОСИМПОРТ занимается международными
                        перевозками, включая авиаперевозки, морские перевозки,
                        автомобильные перевозки, курьерские услуги, склад и
                        таможенное оформление. Мы привержены строгим принципам
                        порядочности, эффективности, точности и гибкости
                        обслуживания. Мы верим, что завоевали доверие наших
                        клиентов в качестве своего предпочтительного партнёра
                        для доставки грузов.
                      </p>
                      <p>
                        Наш генеральный офис находится в Москве. Филиалы в Перми
                        и склады в Иу, Пекине, Урумчи, Гуанчжоу. Мы стремимся
                        доставить ваш груз своевременно и по конкурентным ценам.
                      </p>
                      <p>
                        {" "}
                        Компания РОСИМПОРТ развивается быстрыми темпами. Мы
                        гордимся тем, что являемся авторитетной, надёжной,
                        востребованной международной транспортной компанией и
                        будем продолжать предоставлять услуги мирового класса,
                        не снижая уровень сервиса.
                      </p>
                      <div className="col-md-12">
                        <div className="row mt-30 mb-30">
                          <img
                            alt="Герб транспортной компании"
                            className="img-responsive"
                            src="img/gerb_transportnaya_kompania_sm.jpg"
                          />
                        </div>
                      </div>
                      <h3>Наши обязательства</h3>
                      <p>
                        Компания РОСИМПОРТ собрала у себя команду опытных
                        специалистов по логистике, которые обеспечат
                        своевременное и безопасное перемещение вашего груза. Мы
                        являемся командой, которая ценит своих клиентов и
                        работает не покладая рук, чтобы предоставить каждому
                        партнеру индивидуальное решение, соответствующее вашим
                        требованиям и заказам.
                      </p>
                      <p>
                        Мы используем нашу собственную сеть партнеров в разных
                        странах мира. Наши активы и наработанные решения помогут
                        нашим менеджерам создать для вас уникальные предложения
                        по перевозкам - от двери до двери. Мы относимся к вам,
                        как к ценному клиенту независимо от размера поставок
                        товаров или потребностей по перевозке грузов.
                      </p>
                      <div className="col-md-12">
                        <div className="row margin-bottom-40">
                          <img
                            alt=""
                            className="img-responsive"
                            src="img/kollektiv_kompanii_rosimport.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="front-skills">
                        <h3 className="block">Перевезено</h3>
                        <span>Доставлено грузов морем 75 тыс.тонн груза</span>
                        <div className="progress">
                          <div
                            role="progressbar"
                            className="progress-bar"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <span>
                          Доставлено грузов железной дорогой 82 тыс.тонн груза
                        </span>
                        <div className="progress">
                          <div
                            role="progressbar"
                            className="progress-bar"
                            style={{ width: "82%" }}
                          ></div>
                        </div>
                        <span>
                          Доставлено самолетами авиакомпаний 14 тыс.тонн груза
                        </span>
                        <div className="progress">
                          <div
                            role="progressbar"
                            className="progress-bar"
                            style={{ width: "14%" }}
                          ></div>
                        </div>
                        <span>Доставлено автомобилями 98 тыс.тонн груза</span>
                        <div className="progress">
                          <div
                            role="progressbar"
                            className="progress-bar"
                            style={{ width: "98%" }}
                          ></div>
                        </div>

                        <ul className="list-unstyled margin-bottom-20">
                          <li>
                            <i className="fa fa-caret-right"></i>Инновационные
                            индивидуальные решения{" "}
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Информирование
                            клиентов на всех точках маршрута
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Согласование
                            деталей для выгодных решений
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Ответственность
                            друг перед другом и перед нашими клиентами
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i> Высокий
                            уровень доверия, честности и этических стандартов
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i> Надежность
                            имеет первостепенное значение для успеха
                          </li>
                        </ul>
                      </div>
                      <div className="front-carousel">
                        <div id="myCarousel" className="carousel slide">
                          <div className="carousel-inner">
                            <div className="item active">
                              <img
                                src="img/pogruzka_na_sklade_kompanii_gruzoperevozok.jpg"
                                alt="Погрузка на транзитном складе в Китае"
                              />
                              <div className="carousel-caption">
                                <p>Погрузка на транзитном складе в Китае</p>
                              </div>
                            </div>
                            <div className="item">
                              <img
                                src="img/akkuratnoe_skladirovanie_gruza.jpg"
                                alt="Аккуратная укладка товара на складе"
                              />
                              <div className="carousel-caption">
                                <p>Аккуратная укладка товара на складе</p>
                              </div>
                            </div>
                            <div className="item">
                              <img
                                src="img/gruz_na_transportirovochnoy_lente.jpg"
                                alt="Груз на транспортировочной ленте"
                              />
                              <div className="carousel-caption">
                                <p>Груз на транспортировочной ленте</p>
                              </div>
                            </div>
                          </div>

                          <a
                            className="carousel-control left"
                            href="#myCarousel"
                            data-slide="prev"
                          >
                            <i className="fa fa-angle-left"></i>
                          </a>
                          <a
                            className="carousel-control right"
                            href="#myCarousel"
                            data-slide="next"
                          >
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        id="komanda_kompanii_rosimport"
                        style={{
                          display: "block",
                          marginBottom: "100px",
                          marginTop: "-90px",
                        }}
                      ></div>
                      <h3 className="pt-30">Команда компании РОСИМПОРТ</h3>
                      <p>
                        {" "}
                        Команда компании РОСИМПОРТ - это выбор российского
                        импортёра для постоянных и разовых поставок груза в
                        Российскую Федерацию. Компания имеет собственную базу и
                        множество арендных складов по всей территории Китая.{" "}
                      </p>
                      <p>
                        {" "}
                        Мы предлагаем услуги премиум-класса по транспортировке,
                        подбору маршрутов, быстрому оформлению документов,
                        распределение груза, по поиску товаров у поставщиков,
                        контролю качества и экспедиторским услугам для больших и
                        средних торговых компаний, которые планируют доставить
                        товар из Китая в Россию.{" "}
                      </p>
                      <p>
                        Мы можем предоставить комплексные и индивидуальные
                        решения для доставки товаров широкого спектра отраслей:
                        электроника и компьютеры, оборудование и инструменты,
                        автомобили, осветительное оборудование, строительные и
                        строительные материалы, машины, текстиль и одежда,
                        игрушки и товары народного потребления, упаковка и
                        многое другое.{" "}
                      </p>
                      <p>
                        РОСИМПОРТ является авторитетной международной
                        транспортно-экспедиторской компанией и выполняем
                        таможенно-брокерские услуги по экспедированию грузов,
                        ввозу и вывозу товаров, страхованию, инспекции,
                        международным экспресс-консультациям и консультационным
                        услугам.{" "}
                      </p>
                      <p>
                        Мы стремимся дать нашим клиентам услугу «без
                        препятствий», когда их груз дойдет экономно и без
                        проблем.
                      </p>
                      <p>
                        Наша команда классных специалистов работает в идеальной
                        синхронизации и координации с китайской командой на
                        складах в Китае и каждый отдельный заказ на доставку
                        груза, который мы берем на себя, доставляется вовремя в
                        идеальном состоянии.
                      </p>
                    </div>
                  </div>
                  <div
                    id="kollektiv_kompanii_rosimport"
                    style={{
                      display: "block",
                      marginBottom: "100px",
                      marginTop: "-90px",
                    }}
                  ></div>
                  <h3 className="mt-50">Коллектив компании РОСИМПОРТ</h3>
                  <div className="row front-team">
                    <ul className="list-unstyled">
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Михаил Шиян, Генеральный директор, транспортная компания"
                            src="img/sotrudnik_director_mihail_shiyan.jpg"
                          />
                          <h3>
                            <strong>Михаил Шиян</strong>
                            <small>Генеральный директор</small>
                          </h3>
                          <p>
                            Руководство компанией РОСИМПОРТ в полном объеме.
                            Принятие стратегических решений по развитию и
                            продвижению компании{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Дмитрий Шиян, коммерческий директор, транспортная компания"
                            src="img/sotrudnik_dmitriy_shiyan.jpg"
                          />
                          <h3>
                            <strong>Дмитрий Шиян</strong>
                            <small>Коммерческий директор</small>
                          </h3>
                          <p>
                            Организация системы финансирования компании,
                            планирование и контроль, оценка рисков и структура
                            ценообразования{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Маргарита Михайлова, начальник отдела логистики и ТО, транспортная компания"
                            src="img/sotrudnik_margarita_mihailova.jpg"
                          />
                          <h3>
                            <strong>Маргарита Михайлова</strong>
                            <small>Начальник отдела логистики и ТО</small>
                          </h3>
                          <p>
                            Организация логистики по основным направлениям
                            импорта и формирование организационной структуры
                            отдела логистики
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Сергей Маслов, руководитель европейского направления, транспортная компания"
                            src="img/sotrudnik_sergey_maslov.jpg"
                          />
                          <h3>
                            <strong>Сергей Маслов</strong>
                            <small>Руководитель европейского направления</small>
                          </h3>
                          <p>
                            Обеспечение выполнения заказов, управление филиалами
                            компании. Взаимодействие со смежниками
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row front-team">
                    <ul className="list-unstyled">
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Екатерина Двоеглазова, координатор направлений стран Азии, транспортная компания"
                            src="img/sotrudnik_ekaterina_dvoeglazova.jpg"
                          />
                          <h3>
                            <strong>Екатерина Двоеглазова</strong>
                            <small>Координатор направлений стран Азии</small>
                          </h3>
                          <p>
                            Моделирование и координирование логистической схемы
                            в соответствии с заданием{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Андрей Пермяков, координатор направлений стран ТС, транспортная компания"
                            src="img/sotrudnik_andrey_permyakov.jpg"
                          />
                          <h3>
                            <strong>Андрей Пермяков</strong>
                            <small>Координатор направлений стран ТС</small>
                          </h3>
                          <p>
                            Выбор способа транспортировки, организация и
                            планирование складских работ{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Рояла Гараева, главный бухгалтер, транспортная компания "
                            src="img/sotrudnik_royala_garaeva.jpg"
                          />
                          <h3>
                            <strong>Рояла Гараева</strong>
                            <small>Главный бухгалтер</small>
                          </h3>
                          <p>
                            Планирование и организация финансово-хозяйственной
                            деятельности компании
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Алла Рахимова, координатор российского направления, транспортная компания"
                            src="img/sotrudnik_alla_rahimova.jpg"
                          />
                          <h3>
                            <strong>Алла Рахимова</strong>
                            <small>Координатор российского направления</small>
                          </h3>
                          <p>
                            Организация основных маршрутов и доставки груза до
                            складских помещений{" "}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row front-team">
                    <ul className="list-unstyled">
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Чжоу Цюнь, руководитель в Китае (г.Пекин), транспортная компания"
                            src="img/sotrudnik_chzhou_tsun.jpg"
                          />
                          <h3>
                            <strong>Чжоу Цюнь</strong>
                            <small>Руководитель в Китае (г.Пекин)</small>
                          </h3>
                          <p>
                            Общее руководство китайским отделением и организация
                            транспортных маршрутов{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Лю Янь, начальник отдела логистики и ТО, транспортная компания"
                            src="img/sotrudnik_sun_sintsdzian.jpg"
                          />
                          <h3>
                            <strong>Лю Янь</strong>
                            <small>Начальник отдела логистики и ТО</small>
                          </h3>
                          <p>
                            Организация основных маршрутов. Документация для
                            очистки и перевозки грузов{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Сунь Синьцзян, начальник склада г. Гуанчжоу, транспортная компания"
                            src="img/sotrudnik_lu_yan.jpg"
                          />
                          <h3>
                            <strong>Сунь Синьцзян</strong>
                            <small>Начальник склада г. Гуанчжоу</small>
                          </h3>
                          <p>
                            Организация работ по упаковке и размещению товара на
                            транзитном складе{" "}
                          </p>
                        </div>
                      </li>
                      <li className="col-md-3">
                        <div className="thumbnail">
                          <img
                            alt="Ло Мин, начальник склада г. Иу, транспортная компания"
                            src="img/sotrudnik_lo_min.jpg"
                          />
                          <h3>
                            <strong>Ло Мин</strong>
                            <small>Начальник склада г. Иу</small>
                          </h3>
                          <p>
                            Контроль по загрузке и отправке транспорта. Контроль
                            документации.
                          </p>
                        </div>
                      </li>
                    </ul>
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

export default transportnaya_kompania;
