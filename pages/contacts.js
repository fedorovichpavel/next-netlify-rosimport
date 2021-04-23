import Head from "next/head";
import App from "../components/App";

const Contacts = () => {
  return (
    <App navLight="contacts">
      <Head>
        <title>Контакты</title>
        <meta
          name="description"
          content="Контактная информация транспортной компании для заказа услуг перевозки грузов"
        />
        <meta property="og:title" content="Контакты" />
        <meta
          property="og:description"
          content="Контактная информация транспортной компании для заказа услуг перевозки грузов"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/contacts" />
        <link rel="canonical" href="https://rosimport.ru/contacts" />
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
            <li className="active">Контакты</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Контактная информация
                  </h1>
                </div>
                <h3 className="text-center font-16 mb-30">
                  {" "}
                  <span className="font-red-site">
                    Бесплатный служебный телефон: 8-800-2500-876
                  </span>
                </h3>
                <p>
                  Возможно, вам придется оплатить пошлины или налоги для вашего
                  груза. Стоимость будет зависеть от налогового законодательства
                  страны отправителя. Многие рассчитывают стоимость доставки на
                  основе объема и веса (используя вес и объем упаковки), что
                  может привести к непредвиденным расходам. Мы сразу скажем
                  точную цену, так что никаких сюрпризов не будет.
                </p>
                <div className="content-form-page">
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <form
                        name="contact_form"
                        className="form-transparent"
                        action="formsend_rosimport.php"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-sm-6">
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
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
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
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label htmlFor="form_name">
                                Тема письма <small>*</small>
                              </label>
                              <input
                                id="form_subject"
                                name="subject_mail"
                                className="form-control required"
                                type="text"
                                placeholder="Обязательное поле"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label htmlFor="form_phone">Телефон</label>
                              <input
                                id="form_phone"
                                name="phone"
                                className="form-control"
                                type="text"
                                placeholder="По желанию"
                              />
                            </div>
                          </div>
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
                                  transformOrigin: 0,
                                }}
                                className="g-recaptcha"
                                data-sitekey="6LdxTM0ZAAAAAHtuMhcvVcumFhfZNdqTezlXwnlr"
                              ></div>
                            </div>
                            <div className="col-md-6">
                              <input
                                className="btn btn-primary pl-70 pr-70 pt-10 pb-10 mt-5"
                                type="submit"
                                name="submit"
                                value="Отправить"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="lineheader-white mb-30">
                        <div className="row">
                          <div className="font-18 font-black-2">
                            <div className="col-md-4">
                              <p className="font-14 p-10">
                                Ответы по Whatsapp, будут моментальными, есть
                                голосовые сообщения
                              </p>
                            </div>
                            <div className="col-md-8">
                              <a
                                href="https://wa.me/79252009511"
                                className="btn-social-counter btn-social-counter--whats"
                                target="_blank"
                              >
                                <div className="btn-social-counter__icon">
                                  <i
                                    className="fa fa-whatsapp"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <h6 className="btn-social-counter__title font-18">
                                  WHATSAPP
                                </h6>
                                <span className="btn-social-counter__count font-16">
                                  <span className="font-10">Отвечаем с</span>{" "}
                                  8.00 <span className="font-10">до</span> 20.00
                                </span>
                                <span className="btn-social-counter__add-icon"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mt-20">
                      <aside className="widget widget--sidebar widget-social widget-social--condensed">
                        <a
                          href=""
                          className="btn-social-counter btn-social-counter--telegram"
                        >
                          <div className="btn-social-counter__icon">
                            <i
                              className="fa fa-telegram"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h6 className="btn-social-counter__title">
                            Telegram
                          </h6>
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
                            <i
                              className="fa fa-whatsapp"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h6 className="btn-social-counter__title">
                            Whatsapp
                          </h6>
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
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h6 className="btn-social-counter__title">
                            INSTAGRAM
                          </h6>
                          <span className="btn-social-counter__count">
                            <span className="btn-social-counter__count-num"></span>
                            Напишите нам
                          </span>
                          <span className="btn-social-counter__add-icon"></span>
                        </a>
                      </aside>
                      <p>
                        Для запроса стоимости доставки груза и по другим рабочим
                        вопросам, вы можете отправить сообщение в один из наших
                        мессенджеров или позвонить по бесплатному телефону:
                        8-800-2500-876
                      </p>
                      <h4 className="text-red-site text-center">
                        Wechat ROSIMPORT
                      </h4>
                      <img
                        alt="Морская транспортировка грузов"
                        src="img/wechat_rosimport.jpg"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-12">
                    <div className="row mb-10">
                      <h2 className="text-center">Адреса складов</h2>
                      <div className="col-md-4">
                        <address className="margin-bottom-40">
                          <h4 className="text-red-site">Россия</h4>
                          <div className="line-dashed"></div>
                          <a
                            href="https://yandex.ru/maps/?ll=37.385525%2C55.584222&mode=search&pt=37.622504%2C55.753215&sll=37.622504%2C55.753226&source=entity_search&sspn=3.944092%2C1.513388&text=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=9.79"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>МОСКВА </strong>
                            </span>
                          </a>
                          <br />
                          Егорьевский проезд 15с1
                          <br />
                          <a
                            href="https://yandex.ru/maps/50/perm/search/%D0%BF%D0%B5%D1%80%D0%BC%D1%8C/?ll=56.229421%2C58.022833&pt=37.622504%2C55.753215&sll=37.385525%2C55.584222&source=entity_search&sspn=2.281042%2C0.879043&z=11.2"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong> ПЕРМЬ </strong>
                            </span>
                          </a>
                          <br />
                          Героев Хасана 9, оф 502
                          <br />
                        </address>
                      </div>
                      <div className="col-md-4">
                        <address className="margin-bottom-40">
                          <h4 className="text-red-site">Казахстан</h4>
                          <div className="line-dashed"></div>
                          <a
                            href="https://yandex.ru/maps/162/almaty/search/%D0%B0%D0%BB%D0%BC%D0%B0-%D0%B0%D1%82%D1%8B/?ll=76.955436%2C43.223343&pt=37.622504%2C55.753215&sll=56.229421%2C58.022833&source=entity_search&sspn=0.858383%2C0.309867&z=11.41"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>АЛМАТЫ </strong>
                            </span>
                          </a>{" "}
                          <br />
                          Мкр-н Курылысшы, ул.Жанаарка, 10
                        </address>
                      </div>
                      <div className="col-md-4">
                        <h4 className="text-red-site">Китай </h4>
                        <div className="line-dashed"></div>
                        <address className="margin-bottom-40">
                          <a
                            href="https://yandex.ru/maps/?ll=120.309093%2C29.374079&mode=search&pt=37.622504%2C55.753215&sll=120.032222%2C29.344722&source=entity_search&sspn=1.931462%2C1.151331&text=%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%B8%D1%83&z=8.35"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>ИУ </strong>
                            </span>
                          </a>{" "}
                          城北路J86巷8号蝶彩丝花院内
                          <br />
                          <a
                            href="https://yandex.ru/maps/21431/guangzhou/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%D0%93%D1%83%D0%B0%D0%BD%D1%87%D0%B6%D0%BE%D1%83/?ll=113.324869%2C23.195326&pt=37.622504%2C55.753215&sll=120.073194%2C29.307595&source=entity_search&sspn=0.144555%2C0.086201&z=11.63"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>ГУАНЧЖОУ </strong>
                            </span>{" "}
                          </a>
                          <br />
                          <span className="text-red-site"> Склад 1: </span>{" "}
                          广州市越秀区荔德路318号汇富国际商贸中心A26栋107号
                          <br />
                          <span className="text-red-site">Склад 2: </span>{" "}
                          广州市荔湾区站前路87-2号067库房
                          <br />
                          <a
                            href="https://yandex.ru/maps/10590/beijing/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%BF%D0%B5%D0%BA%D0%B8%D0%BD/?ll=116.341697%2C39.960675&pt=37.622504%2C55.753215&sll=87.678393%2C43.825528&source=entity_search&sspn=1.972046%2C0.971371&z=11.37"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>ПЕКИН </strong>
                            </span>{" "}
                          </a>
                          <br />
                          北京市东城区朝阳门内大街银河SOHO D座50911室
                          <br />
                          <a
                            href="https://yandex.ru/maps/10594/urumqi/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%A3%D1%80%D1%83%D0%BC%D1%87%D0%B8/?ll=87.678393%2C43.825528&pt=37.622504%2C55.753215&sll=113.324869%2C23.195326&source=entity_search&sspn=0.637145%2C0.400717&z=10.89"
                            target="_blank"
                          >
                            <span className="text-blue">
                              <strong>УРУМЧИ </strong>
                            </span>
                          </a>
                          <br />
                          新疆乌鲁木齐天山区大湾北路西域ж轻工基地A区 132(75-76)
                          库房
                          <br />
                        </address>
                      </div>
                    </div>
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

export default Contacts;
