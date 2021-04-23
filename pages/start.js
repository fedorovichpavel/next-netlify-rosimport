import Head from "next/head";
import App from "../components/App";

const start = () => {
  return (
    <App>
      <Head>
        <title>Заказ на доставку груза из Китая</title>
        <meta
          name="description"
          content="Быстрый заказ перевозки груза из Китая в Москву"
        />
        <meta property="og:title" content="Заказ на доставку груза из Китая" />
        <meta
          property="og:description"
          content="Быстрый заказ перевозки груза из Китая в Москву"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/start" />
        <link rel="canonical" href="https://rosimport.ru/start" />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="text-uppercase text-center">
                  <p
                    className="carousel-subtitle-v5 border-top-bottom pt-40 pb-10 text-red-site font-20"
                    dataanimation="animated fadeInDown"
                  >
                    Узнайте цену вашей доставки прямо сейчас
                  </p>
                  <h4 className="pt-20 pb-10 text-red-site">8-800-2500-876 </h4>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="text-uppercase text-center"></div>
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
            <li className="active">Заказ на доставку груза из Китая</li>
          </ul>
          <div className="content-page">
            <h3 className="text-center font-24">
              <span className="font-red-site">
                Бесплатный служебный телефон: 8-800-2500-876
              </span>
            </h3>
            <p className="font-18 text-center">
              <span className="font-15">Отвечаем с</span> 8.00{" "}
              <span className="font-15">до</span> 20.00{" "}
            </p>
            <div className="lineheader-white">
              <h1 className="text-center font-20 font-black pt-5">
                Заказ на доставку груза из Китая
              </h1>
            </div>
            <h3 className="text-center mb-30">
              Цены устанавливаемые перевозчиками грузов из Китая
            </h3>
            <p className="font-15">
              Мы можем дать вам две цены на перевозку одного и того же груза с
              одинаковым весом и объемом. Сейчас вы видите обе цены и конечно
              же, вам нравится самая низкая -{" "}
              <span className="text-fon-red-dark">первая цена</span>. Рядом есть
              и <span className="text-fon-blue">вторая цена</span>, но на неё вы
              уже смотрите скептически. А ведь именно вторая цена включает в
              себя многие услуги, которые освободят вас от множества мелких дел
              и дополнительных переплат, о которых вы ещё не знаете.{" "}
            </p>
            <p className="font-15">
              Почему такие разные цены? Всё просто, если объяснить не вдаваясь в
              тонкости, то одна цена за ЧИСТУЮ перевозку, а вторая цена: за
              перевозку и за услуги, сопутствующие этой перевозке - всё
              включено!
            </p>
            <p className="font-15">
              Если вы выбираете первую цену, то мы рады доставить вам груз по
              этой цене, но за за все остальное вам придется платить самим.
              Первая цена может вырасти, если вы не знаете "подводных камней"
              таможенного документооборота в Китае и России.
            </p>
            <p className="font-15">
              {" "}
              В втором случае, мы берем все расходы на себя. И не только
              расходы, но ещё и все временные затраты на поиск решений с
              возможными проблемами на таможне и у поставщика
            </p>
            <div className="smart-grids">
              <div className="smart-wrapper">
                <div className="smart-pricing">
                  <div className="pricing-tables elegant-style comparison-table three-colm">
                    <div className="colm">
                      <div className="pricing-header header-colored">
                        <h4 className="red-lite font-16">1-я цена</h4>
                        <h2 className="red-dark">
                          <div className="font-54">
                            <i
                              className="fa fa-usd text-yellow"
                              aria-hidden="true"
                            ></i>
                            <strong>0.15 </strong>
                          </div>
                          <div className="text-lowercase font-22">за 1 кг.</div>
                        </h2>
                      </div>
                      <ul>
                        <li>Доставка груза</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>СМС-информирование</li>
                      </ul>
                      <div className="pricing-footer p-30">
                        Включено в контракт
                      </div>
                    </div>
                    <div className="colm">
                      <div className="pricing-header header-colored">
                        <h4 className="monoblue-bottom-3 font-16">2-я цена</h4>
                        <h2 className="monoblue-top-3">
                          <div className="font-54">
                            <i
                              className="fa fa-usd text-yellow"
                              aria-hidden="true"
                            ></i>
                            <strong>0.9 </strong>
                          </div>
                          <div className="text-lowercase font-22">за 1 кг.</div>
                        </h2>
                      </div>
                      <ul>
                        <li>Доставка груза</li>
                        <li>Таможенные платежи</li>
                        <li>Таможенное оформление</li>
                        <li>Терминальные расходы</li>
                        <li>СМС-информирование</li>
                      </ul>
                      <div className="pricing-footer p-30">
                        Включено в контракт
                      </div>
                    </div>
                    <div className="colm pl-15">
                      <div className="pricing-footer pt-25 pb-15">
                        <p className="font-16">Дополнительно:</p>
                      </div>
                      <ul>
                        <li>
                          <p className="font-15 pt-5">
                            Бесплатная погрузка на нашем складе
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            Выдаем документы товаром с НДС
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            <a href="dostavka_gruzov_iz_kitaya#sms_informirovanie_o_mestonahozhdenii_konteinera">
                              СМС-информация о статусе груза
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            <a href="dostavka_gruzov_iz_kitaya#postavshchiki_iz_kitaya_i_krupnyi_gruz">
                              Поиск поставщика
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            <a href="uslugi#usluga_perevodchika_v_kitae">
                              Переводчик в Китае
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            <a href="uslugi#biznes_tur_v_guanchzhou">
                              Бизнес-Туры
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="font-15 pt-5">
                            <a href="uslugi#mebelnye_tury_v_kitae">
                              Мебельные туры
                            </a>
                          </p>
                        </li>
                      </ul>
                      <p className="font-16"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row lineheader-white text-center ml-5">
                  <form
                    id="price"
                    name="contact_form"
                    className="form-transparent pt-20"
                    action="send_pricelist.php"
                    method="post"
                  >
                    <div className="col-md-9 col-sm-9">
                      <div className="form-group">
                        <input
                          id="form_email"
                          name="email"
                          className="form-control"
                          type="text"
                          placeholder="ПРАЙС-ЛИСТ на ваш Email"
                          required="Почтовый адрес"
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Отправить"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row lineheader-white  text-center ml-5">
                  <form
                    id="callback"
                    name="contact_form"
                    className="form-transparent"
                    action="callback_rosimport.php"
                    method="post"
                  >
                    <div className="col-md-9">
                      <div className="form-group">
                        <label
                          htmlFor="form_name"
                          className="text-white text-300 font-13"
                        ></label>
                        <input
                          id="form_phone"
                          name="phone"
                          className="form-control"
                          type="text"
                          placeholder="ОБРАТНЫЙ ЗВОНОК"
                          required="Введите номер телефона"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <input
                        className="btn btn-primary mt-20"
                        type="submit"
                        name="submit"
                        value="Отправить"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="lineheader-white mb-30">
              <div className="row">
                <div className="font-18 font-black-2">
                  <div className="col-md-6">
                    <p className="font-14 p-10">
                      Этот вид связи позволит получить ответы от РОСИМПОРТ,
                      почти мгновенно. Вы можете использовать голосовое
                      сообщение. Можно вставлять картинки товара. Вы всегда
                      увидите, когда доставлено и прочитано ваше сообщение.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://wa.me/79252009511"
                      className="btn-social-counter btn-social-counter--whats"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </div>
                      <h6 className="btn-social-counter__title font-18">
                        WHATSAPP
                      </h6>
                      <span className="btn-social-counter__count font-16">
                        <span className="font-10">Отвечаем с</span> 8.00{" "}
                        <span className="font-10">до</span> 20.00
                      </span>
                      <span className="btn-social-counter__add-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-header">
              <span className="pt-10 pb-10">
                <span className="font-14 text-uppercase">
                  СТОИМОСТЬ ДОСТАВКИ ГРУЗА-
                  <span className="font-red-3"> «Контракт Клиента».</span>
                  <strong> Не включено:</strong> таможенное оформление и
                  терминальные расходы
                </span>
              </span>
            </div>
            <div className="table-responsive mt-0">
              <table className="table table-bordered table-schedule mt-0">
                <tbody className="text-center">
                  <tr>
                    <td className="user-td">ПРЯМОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      3.3 за 1 кг.
                    </td>
                    <td className="user-td">1-3 ДНЯ</td>
                  </tr>
                  <tr>
                    <td className="user-td">КОНСОЛИДАЦИОННОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      2.3 за 1 кг.
                    </td>
                    <td className="user-td">5-7 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">ТРАНЗИТНОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      2 за 1 кг.
                    </td>
                    <td className="user-td">7-10 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">УСКОРЕННОЕ АВТО</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      0.7 за 1 кг.
                    </td>
                    <td className="user-td">7-10 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">АВТО</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      0.5 за 1 кг.
                    </td>
                    <td className="user-td">18-25 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">ПРЯМОЕ ЖД</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      0.3 за 1 кг.
                    </td>
                    <td className="user-td">-</td>
                  </tr>
                  <tr>
                    <td className="user-td">КОНСОЛИДАЦИОННОЕ ЖД</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      0.15 за 1 кг.
                    </td>
                    <td className="user-td">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-header">
              <span className="pt-10 pb-10">
                <span className="font-14 text-uppercase">
                  СТОИМОСТЬ ДОСТАВКИ ГРУЗА-
                  <span className="font-red-3">
                    «Контракт Перевозчика».
                  </span>{" "}
                  <strong>Включено:</strong> таможенное оформление и
                  терминальные расходы
                </span>
              </span>
            </div>
            <div className="table-responsive mt-0">
              <table className="table table-bordered table-schedule mt-0">
                <tbody className="text-center">
                  <tr>
                    <td className="user-td">ПРЯМОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      6 за 1 кг.
                    </td>
                    <td className="user-td">1-3 ДНЯ</td>
                  </tr>
                  <tr>
                    <td className="user-td">КОНСОЛИДАЦИОННОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      4.7 за 1 кг.
                    </td>
                    <td className="user-td">5-7 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">ТРАНЗИТНОЕ АВИА</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      3.5 за 1 кг.
                    </td>
                    <td className="user-td">7-10 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">УСКОРЕННОЕ АВТО</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      2.5 за 1 кг.
                    </td>
                    <td className="user-td">7-10 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">АВТО</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      1.5 за 1 кг.
                    </td>
                    <td className="user-td">18-25 ДНЕЙ</td>
                  </tr>
                  <tr>
                    <td className="user-td">ПРЯМОЕ ЖД</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      1.3 за 1 кг.
                    </td>
                    <td className="user-td">-</td>
                  </tr>
                  <tr>
                    <td className="user-td">КОНСОЛИДАЦИОННОЕ ЖД</td>
                    <td className="user-td">
                      <i
                        className="fa fa-usd text-yellow"
                        aria-hidden="true"
                      ></i>
                      0,9 за 1 кг.
                    </td>
                    <td className="user-td">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row recent-work mt-40">
              <div className="col-md-7">
                <h5 className="text-center font-20 font-black pt-10 pb-10 ">
                  <span className="text-red-background pr-50 pl-50">
                    Спросите специалиста
                  </span>
                </h5>
                <form
                  id="ask_specialist"
                  name="contact_form"
                  className="form-transparent mt-30"
                  action="formsend_rosimport.php"
                  method="post"
                >
                  <div className="form-group">
                    <label htmlFor="form_name">
                      Имя <small>*</small>
                    </label>
                    <input
                      id="form_name"
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Обязательное поле"
                      required="Введите своё имя"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form_email">
                      Email <small>*</small>
                    </label>
                    <input
                      id="form_email"
                      name="email"
                      className="form-control"
                      type="text"
                      placeholder="Обязательное поле"
                      required="Введите вашу почту"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form_name">Сообщение</label>
                    <textarea
                      id="form_message"
                      name="message"
                      type="text"
                      className="form-control required"
                      rows="5"
                      placeholder="Что вам нужно доставить, куда, вес, объем. Мы сделаем точный расчет и сообщим вам стоимость перевозки"
                      required=""
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          style={{
                            transform: "scale(0.75)",
                            transformOrigin: "0",
                          }}
                          className="g-recaptcha"
                          data-sitekey="6LdxTM0ZAAAAAHtuMhcvVcumFhfZNdqTezlXwnlr"
                        ></div>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="btn btn-primary pl-70 pr-70 pt-10 pb-10 mt-10"
                          type="submit"
                          name="submit"
                          value="Отправить"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="owl-item active">
                  <div className="recent-work-item">
                    <em>
                      <img
                        src="img/karta_kitaya_2.jpg"
                        alt="Карта Китая с городами"
                        className="img-responsive"
                      />
                    </em>
                    <a className="recent-work-description" href="#">
                      <strong>Карта Китая</strong>
                      <b>Карта Китая с городами, где находятся наши филиалы</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-20 mt-20">
              <div className="col-md-3">
                <img
                  alt="Поставщик 1688 логотип"
                  src="img/postavshchik_1688.jpg"
                  className="img-responsive"
                />
              </div>
              <div className="col-md-3">
                <img
                  alt="Поставщик таобао логотип"
                  src="img/postavshchik_taobao.jpg"
                  className="img-responsive"
                />
              </div>
              <div className="col-md-3">
                <img
                  alt="Поставщик Алибаба логотип"
                  src="img/postavshchik_alibaba.jpg"
                  className="img-responsive"
                />
              </div>
              <div className="col-md-3">
                <img
                  alt="Поставщик TMALL логотип"
                  src="img/postavshchik_tmall.jpg"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default start;
