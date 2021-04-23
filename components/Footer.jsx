import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="pre-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 pre-footer-col">
              <h2>О нас</h2>
              <p>
                Компания РОСИМПОРТ, признанная и уважаемая компания в отрасли
                грузоперевозок, благодаря выполненным обязательствам перед
                клиентами, деловыми партнерами и сотрудниками.
              </p>
              <p>
                Развитие транспортных направлений и поиск новых партнеров в
                мировой сети глобальных путей сообщения позволяют нам двигаться
                вперёд, не сбавляя темпа
              </p>
              <div className="photo-stream">
                <h2>Наша команда</h2>
                <p>
                  Профессионализм нашей команды, подкреплённый большим опытом
                  работы со странами Таможенного Союза, Европейского Союза и
                  Китаем, позволяет разрешить все сложные ситуации
                  логистического характера, согласование и документальное
                  сопровождение груза на всем пути его следования.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <img
                        alt="Михаил Шиян"
                        src="img/sotrudnik_director_mihail_shiyan.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Дмитрий Шиян"
                        src="img/sotrudnik_dmitriy_shiyan.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Маргарита Михайлова"
                        src="img/sotrudnik_margarita_mihailova.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Сергей Маслов"
                        src="img/sotrudnik_sergey_maslov.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Екатерина Двоеглазова"
                        src="img/sotrudnik_ekaterina_dvoeglazova.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Андрей Пермяков"
                        src="img/sotrudnik_andrey_permyakov.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Рояла Гараева"
                        src="img/sotrudnik_royala_garaeva.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Алла Рахимова"
                        src="img/sotrudnik_alla_rahimova.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Чжоу Цюнь" src="img/sotrudnik_lu_yan.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Лю Янь" src="img/sotrudnik_chzhou_tsun.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        alt="Сунь Синьцзян"
                        src="img/sotrudnik_sun_sintsdzian.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="Ло Мин" src="img/sotrudnik_lo_min.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 pre-footer-col">
              <h2>Контакты</h2>
              <h4 className="text-yellow">8-800-2500-876</h4>
              <h6>Wechat ROSIMPORT</h6>
              <h2>Адреса складов</h2>
              <address className="margin-bottom-40">
                <h4 className="text-yellow">Россия</h4>
                <a
                  href="https://yandex.ru/maps/?ll=37.385525%2C55.584222&mode=search&pt=37.622504%2C55.753215&sll=37.622504%2C55.753226&source=entity_search&sspn=3.944092%2C1.513388&text=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=9.79"
                  target="_blank"
                >
                  МОСКВА
                </a>
                <br />
                Егорьевский проезд 15с1
                <br />
                <a
                  href="https://yandex.ru/maps/50/perm/search/%D0%BF%D0%B5%D1%80%D0%BC%D1%8C/?ll=56.229421%2C58.022833&pt=37.622504%2C55.753215&sll=37.385525%2C55.584222&source=entity_search&sspn=2.281042%2C0.879043&z=11.2"
                  target="_blank"
                >
                  Пермь
                </a>
                <br />
                Героев Хасана 9, оф 502
                <br />
                <h4 className="text-yellow">Казахстан</h4>
                <a
                  href="https://yandex.ru/maps/162/almaty/search/%D0%B0%D0%BB%D0%BC%D0%B0-%D0%B0%D1%82%D1%8B/?ll=76.955436%2C43.223343&pt=37.622504%2C55.753215&sll=56.229421%2C58.022833&source=entity_search&sspn=0.858383%2C0.309867&z=11.41"
                  target="_blank"
                >
                  Алматы
                </a>{" "}
                <br />
                Мкр-н Курылысшы, ул.Жанаарка, 10
                <br />
                <h4 className="text-yellow">Китай </h4>
                <a
                  href="https://yandex.ru/maps/?ll=120.309093%2C29.374079&mode=search&pt=37.622504%2C55.753215&sll=120.032222%2C29.344722&source=entity_search&sspn=1.931462%2C1.151331&text=%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%B8%D1%83&z=8.35"
                  target="_blank"
                >
                  ИУ{" "}
                </a>{" "}
                城北路J86巷8号蝶彩丝花院内
                <br />
                <a
                  href="https://yandex.ru/maps/21431/guangzhou/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%D0%93%D1%83%D0%B0%D0%BD%D1%87%D0%B6%D0%BE%D1%83/?ll=113.324869%2C23.195326&pt=37.622504%2C55.753215&sll=120.073194%2C29.307595&source=entity_search&sspn=0.144555%2C0.086201&z=11.63"
                  target="_blank"
                >
                  Гуанчжоу{" "}
                </a>
                <br />
                <span className="text-white">Склад 1: </span>{" "}
                广州市越秀区荔德路318号汇富国际商贸中心A26栋107号
                <br />
                <span className="text-white">Склад 2: </span>{" "}
                广州市荔湾区站前路87-2号067库房
                <br />
                <a
                  href="https://yandex.ru/maps/10590/beijing/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%BF%D0%B5%D0%BA%D0%B8%D0%BD/?ll=116.341697%2C39.960675&pt=37.622504%2C55.753215&sll=87.678393%2C43.825528&source=entity_search&sspn=1.972046%2C0.971371&z=11.37"
                  target="_blank"
                >
                  Пекин{" "}
                </a>
                <br />
                北京市东城区朝阳门内大街银河SOHO D座50911室
                <br />
                <a
                  href="https://yandex.ru/maps/10594/urumqi/search/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%20%D0%A3%D1%80%D1%83%D0%BC%D1%87%D0%B8/?ll=87.678393%2C43.825528&pt=37.622504%2C55.753215&sll=113.324869%2C23.195326&source=entity_search&sspn=0.637145%2C0.400717&z=10.89"
                  target="_blank"
                >
                  Урумчи{" "}
                </a>
                <br />
                新疆乌鲁木齐天山区大湾北路西域ж轻工基地A区 132(75-76) 库房
                <br />
              </address>
            </div>

            <div className="col-md-4 col-sm-6 pre-footer-col">
              <ul className="list-unstyled">
                <h2>Интересные страницы</h2>
                <li>
                  <a title="Международная перевозка грузов" href="index.html">
                    Международная перевозка грузов
                  </a>
                </li>
                <li>
                  <a
                    title="О транспортной компании"
                    href="transportnaya_kompania.html"
                  >
                    О транспортной компании РОСИМПОРТ
                  </a>
                </li>
                <li>
                  <a
                    title="Доставка грузов из Китая"
                    href="dostavka_gruzov_iz_kitaya.html"
                  >
                    Доставка грузов из Китая
                  </a>
                </li>
                <li>
                  <a
                    title="ЭКСПРЕСС АВИАДОСТАВКА ГРУЗОВ ИЗ КИТАЯ"
                    href="avia_express_dostavka.html"
                  >
                    Экспресс-доставка
                  </a>
                </li>
                <li>
                  <a
                    title="Авиаперевозка грузов из Китая"
                    href="aviaperevozka_gruzov_iz_kitaya.html"
                  >
                    Авиаперевозка грузов из Китая
                  </a>
                </li>
                <li>
                  <a
                    title="Автомобильная доставка грузов"
                    href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html"
                  >
                    Автомобильная доставка грузов
                  </a>
                </li>
                <li>
                  <a
                    title="Морская транспортировка грузов"
                    href="morskaya_transportirovka_gruzov.html"
                  >
                    Морская транспортировка грузов
                  </a>
                </li>
                <li>
                  <a
                    title="Железнодорожная перевозка грузов"
                    href="zheleznodorozhnaya_perevozka_gruzov.html"
                  >
                    Железнодорожная перевозка грузов
                  </a>
                </li>
                <li>
                  <a
                    title="Стоимость доставки груза"
                    href="stoimost_dostavki_gruza.html"
                  >
                    Стоимость доставки груза
                  </a>
                </li>
                <li>
                  <a title="Услуги транспортной компании" href="uslugi.html">
                    Услуги транспортной компании
                  </a>
                </li>
                <li>
                  <a title="Консолидация груза" href="konsolidacia_gruza.html">
                    Консолидация груза
                  </a>
                </li>
                <li>
                  <a
                    title="Поддоны и палеты"
                    href="poddony_palety_dlia_gruzovyh_perevozok.html"
                  >
                    Поддоны и палеты
                  </a>
                </li>
                <li>
                  <a title="Типы и размеры контейнеров" href="konteinery.html">
                    Типы и размеры контейнеров
                  </a>
                </li>
                <li>
                  <a title="Вес груза и грузовые классы" href="ves_gruza.html">
                    Вес груза и грузовые классы
                  </a>
                </li>
                <li>
                  <a
                    title="Таможня. Информация об импорте"
                    href="tamozhnia.html"
                  >
                    Таможня. Информация об импорте
                  </a>
                </li>
                <li>
                  <a
                    title="Товары из Китая без посредников"
                    href="tovary_iz_kitaya.html"
                  >
                    Товары из Китая без посредников
                  </a>
                </li>
                <li>
                  <a
                    title="Контакты транспортной компании"
                    href="contacts.html"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 padding-top-10">
              2020 © ALL Rights Reserved.{" "}
              <a href="">Транспортная Компания РОСИМПОРТ</a>
            </div>

            <div className="col-md-3 col-sm-3">
              <ul className="social-footer list-unstyled list-inline pull-right">
                <li>
                  <a href="">
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
                  <a href="">
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

            <div className="col-md-5 col-sm-5 text-right">
              <p className="powered">
                Все материалы защищены авторским правом:{" "}
                <a href="/">ROSIMPORT.RU</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <script src="assets/plugins/respond.min.js"></script>

      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/64530355"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      <script src="preloader/js/jquery.min.js"></script>
      <script src="preloader/js/core.js"></script>
      <script src="preloader/js/init.js"></script>

      <script
        src="assets/plugins/jquery.min.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/plugins/jquery-migrate.min.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/plugins/bootstrap/js/bootstrap.min.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/corporate/scripts/back-to-top.js"
        type="text/javascript"
      ></script>

      <script
        src="assets/plugins/fancybox/source/jquery.fancybox.pack.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/plugins/owl.carousel/owl.carousel.min.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/corporate/scripts/layout.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/pages/scripts/bs-carousel.js"
        type="text/javascript"
      ></script>
      <script src="search/search.js"></script>

      <script src="fix_sidebar/js/jquery-sticklr-1.4.js"></script>

      <script src="script.js"></script>
    </>
  );
};
