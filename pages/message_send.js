import Head from "next/head";
import App from "../components/App";

const message_send = () => {
  return (
    <App>
      <Head>
        <title>Сообщение отправлено</title>
        <meta
          name="description"
          content="Сообщение отправлено адресату для уведомления, что его письмо дойдет до нашей компании РОСИМПОРТ"
        />
        <meta property="og:title" content="Сообщение отправлено" />
        <meta
          property="og:description"
          content="Сообщение отправлено адресату для уведомления, что его письмо дойдет до нашей компании РОСИМПОРТ"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/message_send" />
        <link rel="canonical" href="https://rosimport.ru/message_send" />
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
            <li className="active">Сообщение отправлено</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page text-center">
                <div className="font-36 mb-40 mt-40 text-red-site">
                  Сообщение отправлено!
                </div>
                <div className="details">
                  <h3>Ожидайте ответ</h3>
                  <p>Вы можете прейти на главную страницу </p>
                  <p>
                    <a href="/" className="link">
                      Международная перевозка грузов
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <img
                  alt="Международная транспортная компания РОСИМОРТ"
                  className="img-responsive"
                  src="img/gerb_transportnaya_kompania_sm.jpg"
                />
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default message_send;
