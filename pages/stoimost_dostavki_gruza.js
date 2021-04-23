import Head from "next/head";
import { useEffect, useState } from "react";
import App from "../components/App";

const stoimost_dostavki_gruza = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((data) =>
        setData({
          usd:
            data.Valute.USD.Nominal +
            " Доллар -> " +
            data.Valute.USD.Value +
            " Рублей",
          eur:
            data.Valute.EUR.Nominal +
            " ЕВРО -> " +
            data.Valute.EUR.Value +
            " Рублей",
          cny:
            data.Valute.CNY.Nominal +
            " ЮАНЬ -> " +
            data.Valute.CNY.Value +
            " Рублей",
        })
      );
  }, []);

  return (
    <App navLight="price">
      <Head>
        <title>Стоимость доставки груза</title>
        <meta
          name="description"
          content="Цена транспортировки товаров калькулируется исходя от расстояния, вида транспорта, веса, объема, характера и типа перевозимого груза"
        />
        <meta property="og:title" content="Стоимость доставки груза" />
        <meta
          property="og:description"
          content="Цена транспортировки товаров калькулируется исходя от расстояния, вида транспорта, веса, объема, характера и типа перевозимого груза"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/stoimost_dostavki_gruza"
        />
        <link
          rel="canonical"
          href="https://rosimport.ru/stoimost_dostavki_gruza"
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
            <li>Стоимость</li>
            <li className="active">Стоимость доставки груза</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Стоимость доставки груза
                  </h1>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      Основным фактором, который необходимо учитывать при
                      расчете стоимости доставки, является скорость прибытия
                      товара к месту назначения. Второй важный фактор, это вес и
                      объем груза.
                    </p>
                    <p>
                      Вес может быть маленьки, объем огромным! Их этих факторов
                      складывается начальная цена доставки ваших товаров. Важно
                      понимать ставки пошлин и то, как они работают.{" "}
                    </p>
                    <p>
                      Как правило, размер пошлины зависит от типа товара,
                      который вы отправляете, а также от страны, в которую вы
                      отправляете товар.{" "}
                    </p>
                    <p>
                      При международной доставке ваша посылка может облагаться
                      дополнительными сборами и налогами в зависимости от страны
                      импорта.
                    </p>
                  </div>
                  <div className="col-md-4 row quote-v1 text-center pl-20 pr-30">
                    <div className="font-13 text-white">
                      Курс валют на сегодняшний день (Центробанк){" "}
                      <a
                        className="btn-transparent"
                        target="_blank"
                        id="usd"
                        href="https://yandex.ru/news/quotes/1"
                      >
                        {data ? data.usd : ""}
                      </a>
                    </div>
                    <div className="font-13 text-white">
                      <a
                        className="btn-transparent"
                        target="_blank"
                        id="eur"
                        href="https://yandex.ru/news/quotes/23"
                      >
                        {" "}
                        {data ? data.eur : ""}
                      </a>
                    </div>
                    <div className="font-13 text-white">
                      <a
                        className="btn-transparent"
                        target="_blank"
                        id="cny"
                        href="https://yandex.ru/news/quotes/10018"
                      >
                        {" "}
                        {data ? data.cny : ""}
                      </a>
                    </div>
                  </div>
                </div>
                <blockquote>
                  <p className="text-black">
                    Понимание того, как определить стоимость доставки, не должно
                    быть вашей головной болью, для этого есть{" "}
                    <strong>
                      <span className="text-red-site">РОС</span>
                      <span className="text-blue">ИМПОРТ</span>
                    </strong>
                  </p>
                  <small> Коллектив компании РОСИМПОРТ</small>
                </blockquote>
                <div className="row">
                  <div className="col-md-3">
                    <figure>
                      <a
                        data-rel="fancybox-button"
                        title="Вам не придется открывать валютный счет и беспокоиться насчёт финансового мониторинга!"
                        className="fancybox-button pull-right pl-10"
                        href="img/valutnyi_schet.jpg"
                      >
                        <img
                          alt="Вам не придется открывать валютный счет и беспокоиться насчёт финансового мониторинга!"
                          src="img/valutnyi_schet.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-md-5">
                    <p>
                      Иногда возникает проблема, когда физические лица не могут
                      сделать перевод в Китай потому, что есть непреодолимые
                      барьеры в виде валютного контроля. Раньше переводили
                      наличные в банке через вестерн-юнион, юнипэй и др.
                      платежные системы.
                    </p>
                    <p>
                      Позже, когда правительство РФ ввело ограничение на
                      переводы в Китай не более 100 000 руб. в месяц, стало
                      намного сложнее отправить деньги поставщику для закупки
                      товара.
                    </p>
                    <p>
                      Сейчас, лучше работать с нами, компанией международных
                      грузоперевозок РОСИМПОРТ. Вам не придется открывать
                      валютный счет и беспокоиться насчёт финансового
                      мониторинга.
                    </p>
                    <p>
                      Мы отправим ваши деньги грузоотправителю и сами выкупим
                      ваш товар. Проведем необходимые действия с документацией и
                      вы получите чистый (очищенный от обременений) груз на
                      территории Российской Федерации, на складе в Москве или
                      другом городе России и Таможенного Союза.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      <img
                        alt="Ценник"
                        src="img/cennik.png"
                        className="img-responsive pull-right"
                      />
                    </figure>
                  </div>
                </div>
                <div className="content-form-page">
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <form
                        name="contact_form"
                        className="form-transparent"
                        action="form_stoimost.php"
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
                            required=""
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
                            required=""
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
                                className="btn btn-primary pl-70 pr-70 pt-10 pb-10 mt-5"
                                type="submit"
                                name="submit"
                                value="Отправить"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4 col-sm-4 pull-right">
                      <div className="form-info">
                        <h2>
                          <em>Доставка грузов</em> из Китая
                        </h2>
                        <p>
                          Полную информацию о доставке груза из Китая компанией
                          РОСИМПОРТ, вы узнаете на нашем сайте. Весь подробный
                          процесс пошаговой транспортировки груза,
                          дополнительных услуг, как происходит перевозок груза в
                          Россию{" "}
                        </p>
                        <p>
                          Подробно о нашей работе в Китае, обслуживание, работа
                          на складах, вывоз груза от поставщика.{" "}
                        </p>
                        <p>
                          Упаковка, маркировка и отправка на таможенный пост{" "}
                        </p>
                        <a
                          href="dostavka_gruzov_iz_kitaya"
                          className="btn btn-default"
                        >
                          Доставка грузов из Китая
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered table-schedule mt-30">
                    <thead>
                      <tr className="header-blue">
                        <td
                          style={{ textAlign: "center" }}
                          colSpan="7"
                          align="center"
                        >
                          <span className="font-14"> Прайс: </span> По прямому
                          контракту{" "}
                          <span className="font-12">
                            {" "}
                            - без таможенного оформления
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="col-xs-2">Транспорт</th>
                        <th className="col-xs-2">Время</th>
                        <th className="col-xs-2">Цена</th>
                        <th className="col-xs-2">Вес </th>
                        <th className="col-xs-2">цена / Объем</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-plane pull-left"></i> АВИА
                        </td>
                        <td className="user-td">1-2 дня</td>
                        <td className="user-td">$2,7</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">-</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-train pull-left"></i>ЖД
                        </td>
                        <td className="user-td">17-25 дней</td>
                        <td className="user-td">$0,5</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">$80 за 1м³</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-ship pull-left"></i>{" "}
                          <i className="fa fa-train pull-left"></i>{" "}
                          <i className="fa fa-truck pull-left"></i> МОРЕ+ЖД+АВТО
                        </td>
                        <td className="user-td">1-2 дня</td>
                        <td className="user-td">$0,3 </td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">$60 за 1м³</td>
                      </tr>
                      <tr align="center" style={{ background: "#eee" }}>
                        <td
                          style={{ textAlign: "center" }}
                          colSpan="7"
                          align="center"
                          className="font-13"
                        >
                          СТАВКИ УКАЗАНЫ ДЛЯ СБОРНЫХ ГРУЗОВ!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered table-schedule">
                    <thead>
                      <tr className="header-deepblue">
                        <td
                          style={{ textAlign: "center" }}
                          colSpan="7"
                          align="center"
                        >
                          <span className="font-14"> Прайс: </span> По контракту
                          перевозчика{" "}
                          <span className="font-12">
                            {" "}
                            - с таможенным оформлением
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th className="col-xs-2">Транспорт</th>
                        <th className="col-xs-2">Время</th>
                        <th className="col-xs-2">Цена</th>
                        <th className="col-xs-2">Вес </th>
                        <th className="col-xs-2">Характер груза</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-plane pull-left"></i> АВИА
                        </td>
                        <td className="user-td">2-4 дня</td>
                        <td className="user-td">$5</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">-</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-plane pull-left"></i> АВИА
                        </td>
                        <td className="user-td">1-3 дня</td>
                        <td className="user-td">$25</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">Документы и образцы</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-plane pull-left"></i>{" "}
                          <i className="fa fa-truck pull-left"></i> АВИА + АВТО
                        </td>
                        <td className="user-td"> 7 дней</td>
                        <td className="user-td">$3,9</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">-</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          {" "}
                          <i className="fa fa-truck pull-left"></i> АВТО
                        </td>
                        <td className="user-td">18-25 дней</td>
                        <td className="user-td">$1,3</td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">-</td>
                      </tr>
                      <tr>
                        <td className="user-td">
                          <i className="fa fa-train pull-left"></i> ЖД
                        </td>
                        <td className="user-td"> 25 дней</td>
                        <td className="user-td">$0,6 </td>
                        <td className="user-td">за 1кг</td>
                        <td className="user-td">-</td>
                      </tr>
                      <tr align="center" style={{ background: "#eee" }}>
                        <td
                          style={{ textAlign: "center" }}
                          colSpan="7"
                          align="center"
                          className="font-13"
                        >
                          СТАВКИ УКАЗАНЫ ДЛЯ СБОРНЫХ ГРУЗОВ!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  id="konechnaya_stoimost_dostavki"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <h3>
                  Как рассчитать конечную стоимость доставки импортируемой
                  продукции
                </h3>
                <p>
                  Транспортные компании сталкиваются с десятками дополнительных
                  расходов, сборов и платежей, связанных с импортом товаров до
                  конечного пункта доставки груза. Крайне важно, чтобы
                  покупатели заранее понимали фактическую конечную стоимость
                  импортируемых товаров, чтобы принимать разумные решения по
                  транспортировке.
                </p>
                <p>
                  Термин «конечная стоимость» - это обозначение окончательной
                  стоимости продуктов, плюс, все связанные с этим расходы по
                  перевозке и логистике, необходимые для доставки товаров в
                  конечный пункт маршрута. На протяжении всего процесса
                  транспортировки, есть место для десятков дополнительных сборов
                  и конвертации валют, о которых покупатели должны знать
                  заранее, чтобы можно было рассчитать конечную стоимость
                  перевозки. Некоторые из затрат на импорт включают стоимость
                  товара, международные сборы за фрахт и логистику, импортные
                  сборы, портовые сборы, сборы за таможенное оформление,
                  импортные пошлины и налоги и местную доставку, и многие
                  другие.
                </p>
                <p>
                  Предприниматели должны хорошо понимать, сколько будет стоить
                  импортная продукция вместе с доставкой. Если вы планируете
                  импортировать продукты и продавать их на своем рынке, то
                  должны иметь четкое представление о том, какова фактическая
                  конечная стоимость доставки для каждого товара.
                </p>
                <p>
                  Понимание конечной стоимости импортируемых продуктов позволяет
                  бизнесу планировать, сколько финансовых ресурсов нужно будет
                  инвестировать.
                </p>
                <h3>Что потребует от вас экспортер</h3>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-caret-right"></i>Данные
                        грузоотправителя и грузополучателя
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Инкотерм® и место
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Порт погрузки (POL)
                        и порт выгрузки (POD)
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Валюта (чаще всего
                        USD)
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-caret-right"></i>Информация о товаре
                        и цены
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Коды продуктов HS /
                        HTS
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Размеры продукта и
                        упаковки
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Тип отгрузки (по
                        полному контейнеру - FCL или LCL Cargo).
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="list-unstyled">
                  <li></li>
                </ul>
                <h4 className="text-uppercase">
                  Международные морские перевозки из порта погрузки в порт
                  выгрузки (обычно в долларах США)
                </h4>
                <p>
                  {" "}
                  Обратите внимание, что цены на морские и воздушные перевозки
                  меняются в течение года, поэтому вам придется подтвердить
                  действительную дату путешествия вашего груза из Китая в
                  Россию. Учитывайте, сезонные изменения цен в течение года и
                  текущие изменения в глобальном аспекте по всему миру
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-uppercase">
                  Местные сборы в стране импорта (в рублях)
                </h4>
                <p>
                  {" "}
                  Они включают расходы на обработку в местном порту,
                  документацию, таможенное оформление, карантин, страхование
                  морского транзита, внутренние грузоперевозки.
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-uppercase">
                  Местные ставки ввозной пошлины
                </h4>
                <p>
                  Если вы предоставите код ТН ВЭД для импортируемых товаров,
                  компания-перевозчик или таможенный брокер могут подтвердить,
                  какая ставка пошлин будет применяться к импортируемым товарам.
                  Начисляется ввозная пошлина. Этот процесс варьируется по
                  многим причинам, это надо уточнять по факту.
                </p>
                <div className="line-dashed"></div>

                <h4 className="text-uppercase">
                  Пример расчета полной стоимости импортируемой продукции
                </h4>
                <p>
                  Давайте рассмотрим основной пример перевозки 20-футового
                  контейнера с товарами из Китая.
                </p>
                <p>Поставщик указал:</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>100 комплектов мебели
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Инкотерм® - FOB, Порт
                    Шанхай
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Общая стоимость FOB -
                    10 000 долларов
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Тип отгрузки (по
                    полному контейнеру - FCL или LCL Cargo)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Код ТН ВЭД - 1234.56
                  </li>
                </ul>
                <p>
                  Необходимо конвертировать расходы поставщика и сборы
                  International Seafreight в рубли. Добавьте все местные
                  импортные расходы и сборы от экспедитора.{" "}
                </p>
                <p>
                  Существует два основных метода оценки, которые страны
                  используют для взимания ввозных таможенных пошлин и налогов на
                  стоимость товаров в FOB или CIF.
                </p>
                <p>
                  <strong>FOB:</strong> Ввозная пошлина взимается со стоимости
                  товаров, находящихся на борту. т.е. пошлина взимается с FOB
                  стоимости товаров (в валюте страны-импортера).
                </p>
                <p>
                  <strong>CIF:</strong> Ввозная пошлина взимается с стоимости
                  продуктов, «Стоимость, страхование и фрахт». Таким образом,
                  пошлина будет взиматься со стоимости продуктов + стоимость
                  страховки (если есть) + стоимость международных перевозок до
                  порта выгрузки (в валюте страны-импортера).
                </p>
                <p>
                  В этом примере экспедитор подтвердил, что 5-процентная ставка
                  ввозной пошлины будет применяться к стоимости FOB
                  импортируемых товаров (местная валюта)
                </p>
                <p>
                  Добавьте налоги на импорт. В этом примере 10% налог на импорт
                  взимается с окончательной стоимости импортируемых товаров
                </p>

                <h4 className="text-uppercase">
                  Разделите дополнительные расходы, чтобы рассчитать стоимость
                  каждого продукта
                </h4>
                <p>
                  Если вы хотите импортировать несколько единиц товара с одной
                  отправкой, вам нужно будет рассчитать конечную стоимость
                  одного продукта . Вы можете разделить все дополнительные
                  расходы на кубический объем (м3) или на вес, как правило, на
                  больший.
                </p>
                <p>
                  Для этого, вам будет нужно точно знать размеры упаковки, вес
                  каждого продукта и разделить затраты. Самый простой способ
                  сделать это - рассчитать объем (м3) товара или вес (кг)
                  товара. Общая сумма международных расходов на перевозку +
                  местные расходы на импорт может быть затем разделена на полный
                  объем товара или полный вес (что больше).
                </p>

                <h4 className="text-uppercase">
                  Что такое код HS и код HTS, используемый в мировой торговле?
                </h4>
                <p>
                  Код HTS или код HS являются частью всемирной
                  стандартизированной системы классификации товаров в
                  международной торговле. Они также известны как код тарифа. Это
                  уникальные числа, которые используются для идентификации и
                  определения различных типов продуктов, отправленных по всему
                  миру. Эти коды содержат минимум 6 цифр и могут быть длиной до
                  10 цифр. Таможенники будут использовать их для правильной
                  идентификации и очистки груза по всему миру.
                </p>

                <p>
                  Коды ТН ВЭД используется главным образом для идентификации
                  товаров, которым необходимо пройти через таможню разных стран
                  по всему миру.
                </p>

                <h4 className="text-uppercase">Тарифный код</h4>
                <p>
                  Грузоотправители должны правильно идентифицировать и
                  классифицировать товары, чтобы в стране импорта применялась
                  правильная ставка ввозной пошлины. В случае неправильной
                  классификации товаров, грузоотправители могут платить более
                  высокую или более низкую ставку ввозной пошлины. В результате,
                  таможенные органы будут налагать финансовые штрафы за
                  неправильную классификацию товаров. Кроме того, могут быть
                  понесены дополнительные расходы на причал и хранение, если
                  есть задержка груза из-за его неправильной классификации.
                </p>

                <h4 className="text-uppercase">
                  Где узнать правильный список кодов HS для импортируемых
                  продуктов?
                </h4>
                <p>
                  Когда товары декларируются таможне для оформления экспорта или
                  импорта, владелец несет ответственность за правильную
                  классификацию товаров . Иногда поставщики делятся этой
                  информацией, но она не всегда достоверна с точностью.
                  Таможенные органы предоставят обязательное юридическое
                  постановление о правильной классификации, если потребуется,
                  называемое «Тарифная консультация».
                </p>
                <p>
                  Вы можете выполнить поиск на этом веб-сайте, чтобы
                  самостоятельно найти{" "}
                  <a href="https://hts.usitc.gov/">
                    список кодов HS и код тарифа.
                  </a>
                </p>

                <h4 className="text-uppercase">
                  Как соглашения о свободной торговле влияют на ставки ввозной
                  пошлины?
                </h4>
                <p>
                  Ставки ввозной пошлины будут варьироваться в зависимости от
                  страны ввоза и вывоза. Эти ставки будут зависеть от
                  двусторонних или многосторонних торговых соглашений. Поэтому,
                  когда в стране экспорта и стране импорта есть действующее
                  "Соглашение о свободной торговле", импортные пошлины могут
                  быть уменьшены или отменены. В этом случае экспортер должен
                  предоставить импортеру документ с сертификатом происхождения
                  товара. Этот документ будет затем использоваться в процессе
                  таможенного оформления.
                </p>

                <h4 className="text-uppercase">Структура системы кодов HS</h4>
                <p>
                  HS - это описание товаров их кодирование и классификация в
                  международном импорте и экспорте. Классификация тарифов (код
                  ТН ВЭД) определяется с использованием таможенных тарифных
                  таблиц. Он состоит из 6 цифр, но может быть разделен на 8
                  цифр, где страны обычно устанавливают свои ставки пошлин.
                  Товары классифицируются по таким факторам, как форма, функция
                  и состав. Первые шесть цифр кода ГС будут общими для всех
                  стран. Однако цифры, следующие за этим, не будут одинаковыми
                  во всех странах, даже если ваш продукт одинаков.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default stoimost_dostavki_gruza;
