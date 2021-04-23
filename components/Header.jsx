export const Header = ({ navLight }) => {
  return (
    <>
      <ul id="example" className="sticklr">
        <li>
          <a
            href="#"
            className="icon-addthis"
            title="Заказать перевозку груза из Китая"
          ></a>
          <ul>
            <li>
              <a href="tel:88002500876">8 (800) 2500-876</a>
            </li>
            <li>
              <a href="https://wa.me/79252009511">WHATSAPP</a>
            </li>
            <li>
              <a href="#">TELEGRAM</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rosimport.pro/"
                target="_blank"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="contacts">КОНТАКТЫ</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 additional-shop-info">
              <ul className="list-unstyled list-inline">
                <li>
                  <i className="fa fa-phone"></i>
                  <span>8 (800) 2500-876</span>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <span>
                    <a href="contacts">EMAIL</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="col-md-6 col-sm-6 additional-nav">
              <ul className="list-unstyled list-inline pull-right">
                <li>
                  <a href="page-login.html">Войти</a>
                </li>
                <li>
                  <a href="page-reg-page.html">Регистрация</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <a className="site-logo" href="/">
            <img
              src="./assets/corporate/img/logos/rosimport_logo.png"
              alt="РОСИМПОРТ"
            />
          </a>
          <a href="#" className="mobi-toggler">
            <i className="fa fa-bars"></i>
          </a>

          <div className="header-navigation pull-right font-transform-inherit">
            <ul>
              <li
                className={`dropdown${
                  navLight && navLight === "index" ? " active" : ""
                }`}
              >
                <a
                  className="dropdown-toggle"
                  datatoggle="dropdown"
                  datatarget="#"
                  href="#"
                >
                  Главная
                </a>
                <ul className="dropdown-menu">
                  <li className="active">
                    <a href="/">Международная Перевозка Грузов</a>
                  </li>
                  <li>
                    <a href="transportnaya_kompania">О компании РОСИМПОРТ</a>
                  </li>
                  <li>
                    <a href="otzyvy_dostavka_iz_kitaya">
                      Отзывы о доставке груза из Китая
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown dropdown-megamenu${
                  navLight && navLight === "mega" ? " active" : ""
                }`}
              >
                <a
                  className="dropdown-toggle"
                  datatoggle="dropdown"
                  datatarget="#"
                  href="#"
                >
                  Из Китая
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="header-navigation-content">
                      <div className="row">
                        <div className="col-md-6 header-navigation-col">
                          <h4 className="text-uppercase font-14 text-red-site">
                            Доставка Китай-Россия
                          </h4>
                          <ul className="pr-10">
                            <li>
                              <a href="dostavka_gruzov_iz_kitaya">
                                Доставка грузов из Китая
                              </a>
                            </li>
                            <li>
                              <a href="avia_express_dostavka">
                                Экспресс-доставка из Китая (Авиа)
                              </a>
                            </li>
                            <li>
                              <a href="aviaperevozka_gruzov_iz_kitaya">
                                АВИА - перевозка грузов из Китая
                              </a>
                            </li>
                            <li>
                              <a href="zheleznodorozhnaya_perevozka_gruzov">
                                ЖД - перевозка грузов из Китая
                              </a>
                            </li>
                            <li>
                              <a href="avtomobilnaya_dostavka_gruzov_iz_kitaya">
                                АВТО - перевозка грузов из Китая
                              </a>
                            </li>
                            <li>
                              <a href="morskaya_transportirovka_gruzov">
                                МОРЕ - перевозка грузов из Китая
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 header-navigation-col">
                          <h4 className="text-uppercase font-14 text-red-site">
                            Маршруты доставки из Китая{" "}
                          </h4>
                          <img
                            className="img-responsive"
                            width="100%"
                            alt="Карта международных путей перевозок из Китая"
                            src="./img/karta_kitaya.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown${
                  navLight && navLight === "uslugi" ? " active" : ""
                }`}
              >
                <a
                  className="dropdown-toggle"
                  datatoggle="dropdown"
                  datatarget="#"
                  href="#"
                >
                  Услуги
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="uslugi">Услуги компании РОСИМПОРТ</a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">Документы</a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="konosoment">Коносомент</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="tamozhnia">Таможня. Информация об импорте</a>
                  </li>
                  <li>
                    <a href="tovary_iz_kitaya">
                      Товары из Китая без посредников
                    </a>
                  </li>
                  <li>
                    <a href="skladskie_uslugi">Складские услуги</a>
                  </li>
                  <li>
                    <a href="upakovka_tovara">Упаковка товаров и груза</a>
                  </li>
                  <li>
                    <a href="markirovka_tovara">Маркировка товаров и груза</a>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown${
                  navLight && navLight === "gruz" ? " active" : ""
                }`}
              >
                <a
                  className="dropdown-toggle"
                  datatoggle="dropdown"
                  datatarget="#"
                  href="#"
                >
                  Грузы
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="dostavka_sbornyh_gruzov">
                      Доставка сборных грузов
                    </a>
                  </li>
                  <li>
                    <a href="konsolidacia_gruza">Консолидация груза</a>
                  </li>
                  <li>
                    <a href="konteinery">Типы контейнеров</a>
                  </li>
                  <li>
                    <a href="ves_gruza">Вес груза и грузовые классы</a>
                  </li>
                  <li>
                    <a href="poddony_palety_dlia_gruzovyh_perevozok">
                      Поддоны и палеты
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown${
                  navLight && navLight === "stat" ? " active" : ""
                }`}
              >
                <a
                  className="dropdown-toggle"
                  datatoggle="dropdown"
                  datatarget="#"
                  href="#"
                >
                  Статьи
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="licenzirovanie_importa_eksporta_v_kitae">
                      Лицензирование импорта и экспорта из Китая
                    </a>
                  </li>
                  <li>
                    <a href="individualnaya_zashchita_sotrudnikov">
                      Индивидуальная защита сотрудников на складе
                    </a>
                  </li>
                </ul>
              </li>
              <li className={navLight && navLight === "price" ? "active" : ""}>
                <a href="stoimost_dostavki_gruza">Стоимость</a>
              </li>
              <li
                className={navLight && navLight === "contacts" ? "active" : ""}
              >
                <a href="contacts">Контакты</a>
              </li>

              <li className="menu-search">
                <span className="sep"></span>
                <i className="fa fa-search search-btn"></i>
                <div className="search-box">
                  <form
                    id="search-form"
                    action="./search.php"
                    method="GET"
                    acceptCharset="utf-8"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        name="s"
                        placeholder="Что найти?"
                        className="form-control"
                        onBlur={(event) => {
                          if (event.target.value == "") event.target.value = "";
                        }}
                        onFocus={(event) => {
                          if (event.target.value == "") event.target.value = "";
                        }}
                      />
                      <a
                        href="#"
                        onClick={() => {
                          document.getElementById("search-form").submit();
                        }}
                      ></a>
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                          ПОИСК
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
