import Head from "next/head";
import App from "../components/App";

const tovary_iz_kitaya = () => {
  return (
    <App navLight="uslugi">
      <Head>
        <title>Товары из Китая без посредников</title>
        <meta
          name="description"
          content="Самая большая рентабельность у товаров привезенных напрямую из Китая, дешевые товары в китайских магазинах, будут доставлены напрямую в Россию"
        />
        <meta
          property="og:title"
          content="Товары из Китая без посредников с доставкой в Россию"
        />
        <meta
          property="og:description"
          content="Самая большая рентабельность у товаров привезенных напрямую из Китая, дешевые товары в китайских магазинах, будут доставлены напрямую в Россию"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/tovary_iz_kitaya"
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
            <li>Услуги</li>
            <li className="active">Товары из Китая без посредников</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8 col-sm-8">
              <div className="content-page">
                <figure>
                  <img
                    alt="Китайский торговый центр"
                    src="img/kitayskii_torgovyi_center.jpg"
                    className="img-responsive"
                  />
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Товары из Китая без посредников
                  </h1>
                </div>
                <p>
                  Покупка в Китайских магазинах может сэкономить много денег,
                  особенно в области технологий, гаджетов и моды. Мы
                  предоставляем вам список самых востребованных китайских
                  магазинов. Компания РОСИМПОРТ регулярно обновляеи и расширяет
                  список магазинов для покупок в Китае. В результате, наш список
                  стал одним из наиболее полных с магазинами из Азии и идеальной
                  отправной точкой для сравнения цен на китайские товары и цены
                  в России.{" "}
                </p>
                <p>Будьте внимательны к категориям и рейтингу магазинов</p>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Список китайских магазинов с дешевыми товарами для покупок
                  </h3>
                </div>
                <div className="pt-20">
                  <div className="table-responsive">
                    <table className="table table-bordered table-schedule">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "center" }}>Магазин</th>
                          <th style={{ textAlign: "center" }}>Товары</th>
                          <th style={{ textAlign: "center" }}>Перевозка</th>
                          <th style={{ textAlign: "center" }}>Оплата</th>
                          <th style={{ textAlign: "center" }}>Ссылки</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/aliexpress.gif"
                              alt="Алиэкспрес"
                              width="120"
                            />
                            <br />
                            Aliexpress
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://best.aliexpress.ru/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/baginc.gif"
                              alt="Baginc"
                              width="120"
                            />
                            <br />
                            Baginc
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.baginc.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/banggood.gif"
                              alt="Banggood"
                              width="120"
                            />
                            <br />
                            Banggood
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.banggood.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/buyincoins.jpg"
                              alt="Priceelf"
                              width="120"
                            />
                            <br />
                            Priceelf
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.priceelf.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/buysku.gif"
                              alt="buysku"
                              width="120"
                            />
                            <br />
                            Buysku
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="http://www.buysku.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/cafago.gif"
                              alt="Cafago"
                              width="120"
                            />
                            <br />
                            Cafago
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.cafago.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/CECT-Shop.gif"
                              alt="CECT-Shop"
                              width="120"
                            />
                            <br />
                            CECT-Shop
                          </td>
                          <td align="center">Технологии</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.cect-shop.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/chinavasion.gif"
                              alt="Chinavasion"
                              width="120"
                            />
                            <br />
                            Chinavasion
                          </td>
                          <td align="center">Смешанные</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.chinavasion.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/cndirect.gif"
                              alt="Cndirect"
                              width="120"
                            />
                            <br />
                            Cndirect
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Мода
                            <br />
                            Декор
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">магазин</td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/dealextreme.gif"
                              alt="Dealextreme"
                              width="120"
                            />
                            <br />
                            Dealextreme
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Технологии
                            <br />
                            Спорт
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.dx.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/dhgate.gif"
                              alt="Dhgate"
                              width="120"
                            />
                            <br />
                            Dhgate
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Мода
                            <br />
                            Свадебные
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="http://www.dhgate.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/dslogo.gif"
                              alt="Dsstyles"
                              width="120"
                            />
                            <br />
                            Dsstyles
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Мода
                            <br />
                            Техника
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://dsstyles.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/fasttech.gif"
                              alt="Fasttech"
                              width="120"
                            />
                            <br />
                            Fasttech
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Техника
                            <br />
                            Спорт
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.fasttech.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/focalprice.gif"
                              alt="Focalprice"
                              width="120"
                            />
                            <br />
                            Focalprice
                          </td>
                          <td align="center">
                            Техника
                            <br />
                            Моделирование
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.focalprice.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/frontrowshop.gif"
                              alt="Frontrowshop"
                              width="120"
                            />
                            <br />
                            Frontrowshop
                          </td>
                          <td align="center">Мода</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.frontrowshop.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/gearbest-erfahrungen.gif"
                              alt="Gearbest"
                              width="120"
                            />
                            <br />
                            Gearbest
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Косметика
                            <br />
                            Спорт
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.gearbest.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/geekbuying.gif"
                              alt="Geekbuying"
                              width="120"
                            />
                            <br />
                            Geekbuying
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Мода
                            <br />
                            Авто
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.geekbuying.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/kaidomain.gif"
                              alt="Kaidomain"
                              width="120"
                            />
                            <br />
                            Kaidomain
                          </td>
                          <td align="center">
                            Техника
                            <br />
                            Спорт
                            <br />
                            Декор
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="http://www.kaidomain.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/lightake.gif"
                              alt="Lightake"
                              width="120"
                            />
                            <br />
                            Lightake
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Техника
                            <br />
                            Авто
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.lightake.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/lightinthebox.gif"
                              alt="Lightinthebox"
                              width="120"
                            />
                            <br />
                            Lightinthebox
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Техника
                            <br />
                            Косметика
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="https://www.lightinthebox.com"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/maykool.gif"
                              alt="Maykool"
                              width="120"
                            />
                            <br />
                            Maykool
                          </td>
                          <td align="center">
                            Спорт
                            <br />
                            Мода
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.maykool.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/modlily.gif"
                              alt="Modlily"
                              width="120"
                            />
                            <br />
                            Modlily
                          </td>
                          <td align="center">
                            Мода
                            <br />
                            Спорт
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.modlily.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/miusol.gif"
                              alt="Miusol"
                              width="120"
                            />
                            <br />
                            Miusol
                          </td>
                          <td align="center">Мода</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.miusol.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/oasap.gif"
                              alt="Oasap"
                              width="120"
                            />
                            <br />
                            Oasap
                          </td>
                          <td align="center">
                            Спорт
                            <br />
                            Мода
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.oasap.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/romwe.jpg"
                              alt="Romwe"
                              width="120"
                            />
                            <br />
                            Romwe
                          </td>
                          <td align="center">Мода</td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.romwe.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/rotita.jpg"
                              alt="Rotita"
                              width="120"
                            />
                            <br />
                            Rotita
                          </td>
                          <td align="center">
                            Мода
                            <br />
                            Спорт
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.rotita.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/rosegal.gif"
                              alt="Rosegal"
                              width="120"
                            />
                            <br />
                            Rosegal
                          </td>
                          <td align="center">
                            Мода
                            <br />
                            Спорт
                            <br />
                            Косметика
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.rosegal.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/SheIn.gif"
                              alt="SheIn"
                              width="120"
                            />
                            <br />
                            SheIn
                          </td>
                          <td align="center">
                            Мода
                            <br />
                            Косметика
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://us.shein.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/Suntekstore.gif"
                              alt="Suntekstore"
                              width="120"
                            />
                            <br />
                            Suntekstore
                          </td>
                          <td align="center">
                            Мода
                            <br />
                            Косметика
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a
                              href="http://www.suntekstore.com/"
                              target="_blank"
                            >
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/tidebuy.gif"
                              alt="Tidebuy"
                              width="120"
                            />
                            <br />
                            Tidebuy
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Технология
                            <br />
                            Мода
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://tidebuy.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/tomtop.gif"
                              alt="Tomtop"
                              width="120"
                            />
                            <br />
                            Tomtop
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Спорт
                            <br />
                            Мода
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.tomtop.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/tvcmall.gif"
                              alt="Tvcmall"
                              width="120"
                            />
                            <br />
                            Tvcmall
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Автозапчасти
                            <br />
                            Технологии
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.tvc-mall.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <img
                              src="img/magaziny/yesstyle.gif"
                              alt="Yesstyle"
                              width="120"
                            />
                            <br />
                            Yesstyle
                          </td>
                          <td align="center">
                            Смешанные
                            <br />
                            Автозапчасти
                            <br />
                            Технологии
                          </td>
                          <td align="center">
                            Контейнер FCL <br />
                            Консолидация <br />
                            Сборный груз
                          </td>
                          <td align="center">
                            Карта VISA <br />
                            Карта MASTERCARD
                          </td>
                          <td align="center">
                            <a href="https://www.yesstyle.com/" target="_blank">
                              Перейти в магазин
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Прямые поставки товаров из Китая. Покупки в китайских
                    магазинах
                  </h3>
                </div>
                <p>
                  Многие владельцы интернет-магазинов поражены низкими ценами у
                  своих конкурентов и задаются вопросом, как можно предлагать
                  товары так дешево. Ответ заключается в прямом импорте товаров
                  из Китая{" "}
                </p>
                <p>
                  Условия, при которых предлагаются товары, играют решающую роль
                  в успехе интернет-магазинов. С одной стороны, это зависит от
                  цены, по которой товар может быть предложен на рынке, а с
                  другой - от прибыли, которую розничный продавец получает при
                  продаже.
                </p>
                <p>
                  Цена продажи зависит от цены приобретения на площадках Ebay и
                  Amazon. Чем дешевле может быть предложен продукт и чем ниже
                  его перевозка, тем выше вероятность того, что потребитель
                  решит его купить. Маржа прибыли, в свою очередь, является
                  решающим критерием того, можно ли вести бизнес с прибылью в
                  Интернете?{" "}
                </p>
                <p>
                  Такие торговые площадки, как Amazon, обеспечивают
                  покупательский спрос, обработку платежей по покупкам, а также
                  хранение и быструю доставку товаров потребителям. В то время
                  как в розничных магазинах, в зависимости от местоположения,
                  все же удается продавать товары по завышенным ценам, такая
                  торговля в Интернете почти безнадежна. Цены на сторонние
                  бренды и товары должны соответствовать постоянно растущему
                  числу конкурентов, то есть они должны быть низкими и постоянно
                  корректироваться (динамическое ценообразование)
                </p>
                <p>
                  Чтобы иметь возможность предложить оптимальную цену в
                  соотношении между прибылью и возможностями продаж на рынке,
                  интернет-магазины полагаются на особенно выгодные условия
                  покупки товаров
                </p>
                <p>
                  Например, если вы покупаете товары у российского оптовика, вы
                  должны знать, что они в свою очередь купили этот товар у
                  импортера. Тот обычно получает свой товар от посредника,
                  который в свою очередь покупает напрямую у производителя.
                  Каждая участвующая компания добавляет свою часть прибыли к
                  продажной цене, поэтому онлайн-продавец может использовать
                  свою покупку для финансирования целого ряда поставщиков и
                  может быть уверен, что этот продукт будет предлагаться другими
                  конкурентами на рынке.
                </p>
                <p>
                  Цель бизнесмена, ориентированного на успех, с точки зрения
                  закупок, всегда должна заключаться в том, чтобы поставлять
                  свои товары как можно ближе к источнику, то есть от
                  производителя, если это возможно , и заказывать товары таким
                  образом, чтобы на рынке было как можно меньше конкурентов .
                </p>
              </div>
            </div>
            <aside>
              <div className="col-md-4 col-sm-4">
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
              </div>
            </aside>
          </div>
        </div>
      </div>
    </App>
  );
};

export default tovary_iz_kitaya;
