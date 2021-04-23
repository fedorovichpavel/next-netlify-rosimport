import Head from "next/head";
import App from "../components/App";

const ErrorPage = () => {
  return (
    <App>
      <Head>
        <title>404 страница</title>
        <meta property="og:title" content="404 страница" />
        <meta
          property="og:description"
          content="Страница на которой можно найти не только три цифры 404, но и буквы, вполне вероятно больше 3-х"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/404" />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://rosimport.ru/404/" />
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
              <a href="index">Международные грузоперевозки</a>
            </li>
            <li className="active">404 страница</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page page-404">
                <div className="number">404</div>
                <div className="details">
                  <h3>Эта страница в разработке</h3>
                  <p>
                    Вы можете прейти на главную страницу
                    <br />
                    <a href="index" className="link">
                      Международная перевозка грузов
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default ErrorPage;
