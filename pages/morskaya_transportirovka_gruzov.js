import Head from "next/head";
import App from "../components/App";

const morskaya_transportirovka_gruzov = () => {
  return (
    <App navLight="mega">
      <Head>
        <title>Морская транспортировка грузов</title>
        <meta
          name="description"
          content="Морские грузовые перевозки. Доставка объемных и негабаритных грузов, огромного количества товаров за один рейс"
        />
        <meta property="og:title" content="Морская транспортировка грузов" />
        <meta
          property="og:description"
          content="Морские грузовые перевозки. Доставка объемных и негабаритных грузов, огромного количества товаров за один рейс"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/morskaya_transportirovka_gruzov"
        />
        <link
          rel="canonical"
          href="https://rosimport.ru/morskaya_transportirovka_gruzov"
        />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner-konsolidacia">
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
            <li>Грузы из Китая</li>
            <li className="active">Морская транспортировка грузов</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Морская транспортировка грузов
                  </h1>
                </div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Морская транспортировка грузов"
                    className="fancybox-button"
                    href="img/morskaya_transportirovka_gruzov.jpg"
                  >
                    <img
                      alt="Морская транспортировка грузов"
                      src="img/morskaya_transportirovka_gruzov_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div
                  id="morskie_gruzovye_perevozki"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <h2 className="text-center font-18 pt-20 pb-10">
                  Морские грузовые перевозки
                </h2>
                <p>
                  Более 90% грузов всего мирового грузооборота идет за рубеж.
                  Это делает морские грузовые перевозки одним из самых
                  популярных способов транспортировки. Несмотря на медленные
                  морские транзитные перевозки, они являются экономически
                  эффективным и надежным способом доставки огромных объемов
                  груза.
                </p>

                <div
                  id="morskaya_konteynernaya_transportirovka"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <h4 className="text-center font-18 pb-10">
                  Что такое морская контейнерная транспортировка LCL и FCL?
                </h4>
                <p>
                  Меньшая загрузка 20 и 40 футового контейнера (LCL -{" "}
                  <i>Less Than Container Load</i>) и полная загрузка контейнера
                  20 и 40 футового контейнера (FCL - <i>Full Container Load</i>)
                  - это два варианта доставки контейнерных грузов.
                </p>
                <p>
                  <strong>LCL</strong> означает: несколько грузов разных
                  клиентов объединены в один контейнер.
                </p>
                <p>
                  <strong>FCL</strong> означает: полный контейнер, загруженный
                  одним клиентом грузоотправителем.
                </p>
                <p>
                  Морские грузы перевозятся в контейнерах разных размеров. Самый
                  маленький контейнер имеет вместимость 33 м³, а самый большой
                  содержит 76 м³. В сфере грузоперевозок есть понятие - полные
                  контейнерные и неконтейнерные перевозки. Если у вас
                  недостаточно грузов, чтобы заполнить весь контейнер, вы все
                  равно можете отправить груз, но с особыми условиями.
                </p>

                <h4 className="text-center font-18 pb-10">
                  Какой объем груза экономичней везти морем?
                </h4>
                <p>
                  Груз, свыше 2-х м³ - вы должны рассмотреть транспортировку
                  морем. Если ваш объем составляет менее 2 м³, то можно
                  рассмотреть доставку автотранспортом. Возможно, цена будет та
                  же, но груз дойдет быстрее.
                </p>

                <h4 className="text-center font-18 pb-10">
                  Что предпочтительней, консолидация груза или полный контейнер?
                </h4>
                <p>
                  Если объем вашего груза менее 15 м³, консолидация LCL будет
                  дешевле. Более 15 м³, полный контейнер, будет лучшим
                  вариантом.
                </p>

                <div
                  id="kak_proishodit_morskaya_dostavka_gruza"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h3 className="text-center font-18 font-black pt-5">
                    Как происходит морская доставка груза (подробно)
                  </h3>
                </div>
                <div className="row mb-10">
                  <div className="col-md-6">
                    <p>
                      Первый шаг, это заявка на доставку груза морем в компанию
                      РОСИМПОРТ.{" "}
                      <a
                        href="transportnaya_kompania#komanda_kompanii_rosimport"
                        title="Команда компании РОСИМПОРТ"
                      >
                        Наши специалисты{" "}
                      </a>
                      выберут наиболее оптимальный маршрут доставки морем,
                      учитывая характер груза, его вес и объем. Важно:
                      количество грузовых мест, город в Китае (из которого буде
                      проходить забор груза), условия отправки и пункт
                      назначения в России. Наши менеджеры рассчитают
                      ориентировочную стоимость всех процессов, сопутствующих
                      отправке груза (логистика, упаковка, таможня, документы).
                    </p>

                    <div className="line-dashed"></div>
                    <p>
                      <strong>Документы необходимые на начальном этапе </strong>{" "}
                      предоставляются клиентом (от поставщика).
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-caret-right"></i>Международный
                        контракт (все приложения и спецификации к нему)
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Инвойс (Invoice -
                        документ содержащий информацию о товаре)
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Упаковочный лист
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Подробное описание
                        товара + фото
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>MSDS – паспорт
                        безопасности продукции (требуется не на каждый продукт)
                      </li>
                    </ul>
                    <div className="line-dashed"></div>
                  </div>
                  <div className="col-md-6">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Морская доставка груза"
                        className="fancybox-button"
                        href="img/morskaya_dostavka_gruza.jpg"
                      >
                        <img
                          alt="Морская доставка груза"
                          src="img/morskaya_dostavka_gruza_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <p>
                  Мы связываемся с линиями морских перевозок и уточняем
                  возможность отправки груза морем (не все грузы берут на
                  отправку морем). Морские линии запрашивают подробное описание
                  на товар и MSDS и дает разрешение на отправку груза.
                </p>
                <div className="line-dashed"></div>
                <p>
                  С клиентом заключается договор об организации
                  транспортно-экспедиционного обслуживания. Если в договоре
                  отмечено таможенное оформление груза компанией РОСИМПОРТ, то
                  следует доп.договор с брокером, на оказание услуг таможенного
                  представителя клиента, на территории Китая и Российской
                  Федерации.
                </p>
                <div className="line-dashed"></div>
                <p>
                  По описанию и фотографиям товара, брокер подбирает код ТН ВЭД
                  (Товарная Номенклатура Внешне–Экономической Деятельности).{" "}
                </p>
                <div className="line-dashed"></div>
                <p>
                  Уточняется необходимость разрешительной документации на товар
                  (сертификаты соответствия, декларации, отказные письма и т.д.)
                </p>
                <div className="line-dashed"></div>
                <p>
                  Мы крепим ваш груз, упаковываем его и ставим дополнительную
                  маркировку для прохождения различных этапов цепочки доставки.
                </p>
                <div className="line-dashed"></div>
                <p>
                  Если товар подлежит сертификации, то на нем должна быть
                  соответствующая маркировка.
                </p>
                <div className="line-dashed"></div>
                <p>
                  Маркировка наносится поставщиком перед упаковкой груза.
                  Маркировка заранее согласовывается с брокером и им же
                  рассчитываются таможенные платежи.
                </p>
                <div className="line-dashed"></div>
                <figure className="pull-right mt-20 p-10">
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Контейнер морем из Китая"
                    className="fancybox-button"
                    href="img/konteiner_morem_iz_kitaya.jpg"
                  >
                    <img
                      alt="Контейнер морем из Китая"
                      width="400"
                      src="img/konteiner_morem_iz_kitaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="mt-20">
                  Уточняем у клиента, зарегистрировано ли его юр.лицо на
                  таможенном посту, где будет проходить таможенное оформление
                  данный груз. Если нет, то запрашиваем список необходимых
                  документов для его регистрации. Впоследствии, эти документы
                  пересылаются брокеру, который будет снимать таможенные запреты
                  ("растамаживать"), оформлять необходимые документы для
                  прохождения границы Китай-Россия и предоставлять товар для
                  регистрации.{" "}
                </p>
                <p>
                  Менеджер на консолидационном складе в Китае уточняет у
                  китайского поставщика готовность к отправке и заблаговременно
                  резервирует ("фрахтует") место в контейнере на точную дату
                  морской перевозки.
                </p>
                <p>
                  Груз приходит на склад морской линии, расположенный близ
                  морского порта отправки. Вместе с грузом должны быть:{" "}
                </p>
                <div className="line-dashed"></div>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>Пакет сопроводительных
                    документов (несколько экземпляров) – инвойс
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i> Упаковочный лист
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Экспортная декларация
                  </li>
                </ul>
                <div className="line-dashed"></div>
                <p>
                  Груз взвешивают на складе морской линии, пересчитывают и
                  делают замер объема (ширину, длину, высоту) грузовых мест.
                  Полученные данные сверяют с информацией в упаковочном листе.
                  Если в данных упаковочного листа есть различия между
                  фактическими данными и информацией от поставщика, то у
                  поставщика есть возможность и время исправить упаковочный
                  лист. Если препятствий нет, то груз размещается в контейнере.{" "}
                </p>
                <p>
                  На таможне контейнер проходит оформление и опечатывается. По
                  окончании прохождения всех таможенных процедур и проверок,
                  контейнер грузится на судно и составляется коносамент
                  (расписка перевозчика в получении груза). Затем, судно следует
                  в порт назначения.
                </p>
                <p>
                  В порту назначения, прибывший груз размещается на СВХ (складе
                  временного хранения), о прибытии ставится отметка в
                  коносаменте. Брокер заполняет декларацию на товар, а клиент
                  оплачивает таможенные платежи и пересылает нам платежные
                  поручения с отметками банка. Мы связываемся с брокером и он
                  предоставляет весь пакет документов на таможенный пост. Выдача
                  ГТД (таможенная декларация на товар) позволяет забрать товар с
                  СВХ (склад временного хранения). Груз забирает владелец или
                  контактное лицо (данный вопрос решается заранее) с
                  доверенностью от владельца груза.
                </p>
                <p>
                  Если необходима дальнейшая отправка груза по территории
                  Российской Федерации, то мы доставляем его в филиал местной
                  транспортной компании доводим груз до места назначения.
                </p>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Погрузка товара в морской контейнер"
                    className="fancybox-button"
                    href="img/gruz_v_morskoy_konteiner.jpg"
                  >
                    <img
                      alt="Погрузка товара в морской контейнер"
                      src="img/gruz_v_morskoy_konteiner_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="col-md-12 mt-30">
                  <div className="lineheader-white">
                    <h2 className="text-center font-20 font-black pt-5 ">
                      Полная загрузка морского контейнера
                    </h2>
                  </div>
                  <p>
                    Для каждой отдельной отправки существуют два типа полных
                    контейнеров:
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-caret-right"></i>20 футов - с
                      внутренним объемом 33 м³
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>40 футов - вмещающий
                      до 66 м³ .
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Отправка товара на
                      консолидационный склад в любое время
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Возможность делать
                      частые и небольшие заказы
                    </li>
                  </ul>
                  <p>
                    Решение, взять полный контейнер, обеспечивает безопасный и
                    надежный процесс доставки, так как ваш контейнер будет
                    опечатан от места отправления до конечного адреса
                    назначения.
                  </p>
                  <div className="line-dashed"></div>
                  <div className="row">
                    <h4 className="text-center font-20 font-black pt-5">
                      ВСЕГДА ЛИ МОРСКИЕ ПЕРЕВОЗКИ - САМЫЙ ДЕШЕВЫЙ ВАРИАНТ?{" "}
                    </h4>
                    <p>
                      Груз равен объему в 1 м³. Какая транспортная услуга будет
                      наиболее экономически выгодным вариантом для такой
                      отправки? Важно отметить, что минимальный вес или объем,
                      взимаемый за доставку LCL (меньшая загрузка контейнера),
                      составляет 1 м³ или одну тонну. Многие считают, что
                      морские перевозки всегда дешевле, чем авиаперевозки. Но на
                      самом деле, экспресс-авиа может предложить более
                      экономичные решения для небольших объемов груза. Как
                      правило, авиаперевозки рекомендуются для веса менее 100
                      кг, а иногда даже 200 кг, но для определенных направлений.
                    </p>
                    <div className="line-dashed"></div>

                    <div
                      id="upakovka_gruza_dlia_morskih_konteinernyh_perevozok"
                      style={{
                        display: "block",
                        marginBottom: "100px",
                        marginTop: "-90px",
                      }}
                    ></div>
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Упаковка груза для морских контейнерных перевозок"
                        className="fancybox-button"
                        href="img/upakovka_gruza_dlia_morskih_konteinernyh_perevozok.jpg"
                      >
                        <img
                          alt="Упаковка груза для морских контейнерных перевозок"
                          src="img/upakovka_gruza_dlia_morskih_konteinernyh_perevozok_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                    <h4 className="text-center font-20 font-black pt-20 pb-20  text-uppercase">
                      Упаковка груза для морских контейнерных перевозок
                    </h4>
                    <p>
                      При всех этих операциях (разгрузка и выгрузка) по
                      обработке груза, добротная упаковка является важным
                      аспектом длинного путешествия вашего товара. Упаковка
                      нужна, чтобы обеспечить безопасный процесс доставки
                      товара, от начала до конца, сведя к минимуму
                      дополнительные расходы в случае ущерба. РОСИМПОРТ
                      обеспечит отличный сервис упаковки товаров в полном
                      соответствии с международными стандартами:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>Картонные
                            коробки : 5 слоев
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Пластиковая
                            упаковка : да
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Поддоны : да
                            (стандарт IPPC ISPM 15)
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Примечание по
                            перевозке : да (напечатано на внешней коробке)
                          </li>
                        </ul>
                        <p>Cтандартные размеры поддонов :</p>
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa fa-caret-right"></i>Европа : 1200 *
                            1000 мм или 1200 * 800 мм
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>Австралия :
                            1140 * 1140 мм
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>США : 40 * 48
                            дюймов (1016 * 1219 мм)
                          </li>
                        </ul>
                        <p>
                          При необходимости, вы можете предоставить поставщику
                          спецификации упаковки в соответствии с вашими
                          требованиями и характером перевозимых товаров.
                          Сделайте все как можно более понятным и по возможности
                          предоставьте фотографии, чтобы избежать недоразумений.
                        </p>
                        <div className="line-dashed"></div>
                        <p>
                          Судоходные компании устанавливают максимальный вес для
                          контейнеров:
                        </p>
                        <ul className="list-unstyled list-inline">
                          <li>
                            <i className="fa fa-caret-right"></i>20 футов - 22,1
                            тонны
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>40 футов - 27,4
                            тонны
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>40 HC - 29,6
                            тонн
                          </li>
                        </ul>
                        <div className="line-dashed"></div>
                        <p>
                          Большинство ваших товаров будут упакованы (стандартно)
                          в картонные коробки. Вот размеры в которые должны
                          уложиться поддоны и коробки. Сравните эти цифры с
                          объемами контейнеров{" "}
                        </p>
                        <ul className="list-unstyled list-inline">
                          <li>
                            <i className="fa fa-caret-right"></i>20 футов - 33
                            м3
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>40 футов - 67,3
                            м3
                          </li>
                          <li>
                            <i className="fa fa-caret-right"></i>40 HC - 76 м3
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="Упаковка на складе в Китае"
                            className="fancybox-button"
                            href="img/upakovka_na_sklade_v_kitae.jpg"
                          >
                            <img
                              alt="Упаковка на складе в Китае"
                              src="img/upakovka_na_sklade_v_kitae_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                    </div>

                    <div className="tab-content mt-10">
                      <div className="tab-pane row fade active in">
                        <div className="col-md-2">
                          <a
                            data-rel="fancybox-button"
                            title="Морские перевозки из Китая в Европу"
                            className="fancybox-button"
                            href="img/morskie_perevozki_iz_kitaya_v_evropu.jpg"
                          >
                            <img
                              alt="Морские перевозки из Китая в Европу"
                              src="img/morskie_perevozki_iz_kitaya_v_evropu_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="col-md-10">
                          <h6 className="post-title text-center font-14 mb-10">
                            Морские перевозки из Китая в Европу
                          </h6>
                          <p className="margin-bottom-10">
                            За последние годы многое произошло на транспорте из
                            Дальнего Востока. Постоянная конкуренция
                            судовладельцев привела к банкротству Hanjin - одного
                            из крупнейших китайских операторов морских линий.{" "}
                            <a
                              href="morskaya_transportirovka_gruzov#osnovnye_morskie_porty_kitaya"
                              title="Основные морские порты Китая"
                            >
                              В морских портах Китая
                            </a>
                            , не только Hanjin, но и другие судоходные компании
                            сталкиваются с серьезными финансовыми проблемами
                            из-за постоянного снижения цен на фрахт. Следствием
                            этого стал анализ рентабельности{" "}
                            <a
                              href="morskaya_transportirovka_gruzov#morskaya_konteynernaya_transportirovka"
                              title="Морская контейнерная транспортировка LCL и FCL"
                            >
                              контейнерных перевозок
                            </a>{" "}
                            и связанного с этим роста цен. Морские перевозки в
                            Китае постепенно становятся менее
                            конкурентоспособными, чем это было до недавнего
                            времени. Означает ли это эру железнодорожного
                            транспорта?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content mt-10">
                      <div className="tab-pane row fade active in">
                        <div className="col-md-2">
                          <a
                            data-rel="fancybox-button"
                            title="Морская доставка заменяется на железнодорожный транспорт"
                            className="fancybox-button"
                            href="img/morskaya_dostavka_zameniaetsia_na_zheleznodorozhnyi_transport.jpg"
                          >
                            <img
                              alt="Морская доставка заменяется на железнодорожный транспорт"
                              src="img/morskaya_dostavka_zameniaetsia_na_zheleznodorozhnyi_transport_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="col-md-10">
                          <h6 className="post-title text-center font-14 mb-10">
                            Морская доставка, чаще заменяется на железнодорожный
                            транспорт
                          </h6>
                          <p className="margin-bottom-10">
                            Эта восходящая тенденция, в настоящее время
                            продолжается. Ввиду того, что{" "}
                            <a
                              title="Доставка грузов из Китая"
                              href="dostavka_gruzov_iz_kitaya"
                            >
                              импорт из Китая
                            </a>{" "}
                            и экспорт находятся на очень высоком уровне, а на
                            судах по-прежнему не хватает места и текущая
                            тенденция вероятно сохранится. Эта ситуация
                            означает, что{" "}
                            <a
                              title="Железнодорожная перевозка грузов"
                              href="zheleznodorozhnaya_perevozka_gruzov"
                            >
                              железнодорожная доставка груза
                            </a>{" "}
                            становится все более популярной, а число импортеров,
                            использующих этот вид транспорта, постоянно
                            увеличивается. Создание международного торгового
                            маршрута под названием Новый шелковый путь
                            способствует этому явлению.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content mt-10">
                      <div className="tab-pane row fade active in">
                        <div className="col-md-2">
                          <a
                            data-rel="fancybox-button"
                            title="Морской транспорт дорожает, железнодорожный дешевеет"
                            className="fancybox-button"
                            href="img/morskoy_transport_dorozhaet_zheleznodorozhnyi_desheveet.jpg"
                          >
                            <img
                              alt="Морской транспорт дорожает, железнодорожный дешевеет"
                              src="img/morskoy_transport_dorozhaet_zheleznodorozhnyi_desheveet_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="col-md-10">
                          <h6 className="post-title text-center font-14 mb-10">
                            Морской транспорт дорожает, железнодорожный дешевеет
                          </h6>
                          <p className="margin-bottom-10">
                            {" "}
                            <a
                              href="stoimost_dostavki_gruza#konechnaya_stoimost_dostavki"
                              title="Как рассчитать конечную стоимость доставки импортируемой продукции"
                            >
                              Цены на железнодорожные грузоперевозки
                            </a>{" "}
                            неуклонно падают и постепенно приближаются к ценам
                            на морские перевозки из Китая. Это происходит как с
                            полной{" "}
                            <a
                              href="dostavka_gruzov_iz_kitaya#informacia_o_konteinereh_dlia_dostavki_tovarov"
                              title="Информация о контейнерах для доставки товаров"
                            >
                              загрузкой контейнера FCL
                            </a>
                            , так и с частичной LCL. Это одна из главных причин
                            привлекательности железнодорожного транспорта на
                            Новом шелковом пути. Хотя в море можно перевозить
                            больше грузов (до 40 000 контейнеров), железные
                            дороги заменяют объемы частотой перевозок.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <figure className="mt-20">
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Морские контейнерные перевозки"
                        className="fancybox-button"
                        href="img/morskie_konteinernye_perevozki.jpg"
                      >
                        <img
                          alt="Морские контейнерные перевозки"
                          src="img/morskie_konteinernye_perevozki_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>

                    <div
                      id="osnovnye_morskie_porty_kitaya"
                      style={{
                        display: "block",
                        marginBottom: "100px",
                        marginTop: "-90px",
                      }}
                    ></div>
                    <div className="lineheader-white">
                      <h3 className="text-center font-20 font-black pt-5">
                        Основные морские порты Китая
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="recent-news margin-bottom-10">
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской Порт Шанхая"
                                  className="fancybox-button"
                                  href="img/morskoy_port_shanhai.jpg"
                                >
                                  <img
                                    alt="Морской Порт Шанхая"
                                    src="img/morskoy_port_shanhai_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской Порт Шанхая
                              </h3>
                              <p>
                                Расположенный на стыке «золотого водотока» и
                                «золотого берега», делает его первым
                                международным морским портом Китая с древних
                                времен.
                              </p>
                              <p>
                                Shanghai Pudong работает на площади 500 000 м2 и
                                имеет 147 контейнеровозов, 36 RTG, десять
                                причальных кранов, 73 контейнерогруза и 11
                                вилочных погрузчиков. Shanghai Mingdong
                                облегчает обработку, хранение и транспортировку
                                контейнеров. Другие работы, выполняемые
                                компанией, это техническое обслуживание, очистка
                                и демонтаж контейнеров.
                              </p>
                              <p>
                                Деятельность порта осуществляется причальными
                                кранами на 34 контейнера и 120 РИТЭГами. Работе
                                морского порта помогают неконтейнерные базы,
                                находящиеся на реке Хуанпу. Эти
                                распределительные центры для отдаленных районов
                                морского порта Шанхая, способствуют финансовому
                                развитию долины Янцзы
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Тяньцзинь"
                                  className="fancybox-button"
                                  href="img/morskoy_port_tianjin.jpg"
                                >
                                  <img
                                    alt="Морской порт Тяньцзинь"
                                    src="img/morskoy_port_tianjin_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Тяньцзинь
                              </h3>
                              <p>
                                Порт Тяньцзинь - ворота Пекина со стороны моря,
                                важный международный северный торговый порт
                                Китая и связующее звено между Северной Азией,
                                Центральной и Западной Азией.
                              </p>
                              <p>
                                {" "}
                                Это безгранично-огромный порт столицы Китая, он
                                имеет ультрасовременный контейнерный док. Этот
                                город-порт экономический хаб столицы. Его работа
                                с внутренними потребителями охватывает почти 5
                                миллионов квадратных километров, что составляет
                                52 процента от площади территории Китая.
                              </p>
                              <p>
                                Порт Тяньцзинь, с водной площадью 326 квадратных
                                километров и 121 квадратный километр принадлежит
                                суше. Он обладает специализированными
                                терминалами для контейнеров, железной руды,
                                угля, сырой нефти и продуктов нефтехимии, стали,
                                оборудования, транспортных средств Ro-Ro,
                                насыпного зерна, сыпучих удобрений и
                                пассажирскими, для международных круизных судов.
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Гуанчжоу"
                                  className="fancybox-button"
                                  href="img/morskoy_port_guangzhou.jpg"
                                >
                                  <img
                                    alt="Морской порт Гуанчжоу"
                                    src="img/morskoy_port_guangzhou_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Гуанчжоу
                              </h3>
                              <p>
                                Порт Гуанчжоу расположен в устье реки Чжуцзян,
                                где находится наиболее активная зона
                                экспортно-ориентированной экономики Китая,
                                граничащая с Макао и уникальным Гонконгом.
                                Благодаря своему расположению, он превратился в
                                большой востребованный порт. В настоящее время
                                порт Гуанчжоу имеет более 100 внутренних портов
                                и более 350 портов из более чем 80 стран и
                                регионов.
                              </p>
                              <p>
                                Громадный морской порт в Южном Китае не знает
                                простоев и ожидания судов. В бухте, тесной
                                очередью толпятся корабли на разгрузку.
                                Глобализированный мир выстроился в длинную
                                цепочку ожидания, очередь на погрузку китайских
                                товаров .
                              </p>
                              <p>
                                15 лет назад морской порт Гуанчжоу выполнил
                                сверхнорму на 300 миллионов тонн грузов (получив
                                3-е место из всех портов Китая и 5-е место в
                                первых десяти мировых портах) и 665 миллионов
                                весовых единиц TEU. Этот порт приносит приличный
                                доход своему государству и продолжает наращивать
                                темп.
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Циндао"
                                  className="fancybox-button"
                                  href="img/morskoy_port_qingdao.jpg"
                                >
                                  <img
                                    alt="Морской порт Циндао"
                                    src="img/morskoy_port_qingdao_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Циндао
                              </h3>
                              <p>
                                Порт Циндао, состоящий из несколько близлежащих
                                портов - Да (большой), Чжун (средний) и Хуандао
                                (желтый остров), известен входом "бутылочное
                                горлышко", в бухту и широкой просторной гаванью
                                для стоянки судов. Морской порт Циндао, является
                                вторым после Шанхая и Шэньчжэня по объему
                                контейнерных перевозок. Он располагает,
                                крупнейшим терминалом сырой нефти в Китае,
                                терминалом железной руды и терминалом насыпного
                                зерна мирового класса.
                              </p>
                              <p>
                                Восточный порт Циндао, является домом для
                                первого в Азии, полностью автоматизированного
                                порта Qingdao New Qianwan Automatic Container
                                Terminal, он произвел революцию в глобальном
                                судоходном бизнесе.
                              </p>
                              <p>
                                Автоматизация порта. Благодаря лазерному
                                сканированию и позиционированию, программа
                                способна определить четыре угла каждого
                                контейнера. Затем она дает команду на захват
                                контейнера и помещает его на грузовики без
                                водителя. Она может работать в полной темноте.
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Шэньчжэнь"
                                  className="fancybox-button"
                                  href="img/morskoy_port_shenzhen.jpg"
                                >
                                  <img
                                    alt="Морской порт Шэньчжэнь"
                                    src="img/morskoy_port_shenzhen_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Шэньчжэнь
                              </h3>
                              <p>
                                Огромный порт Шэньчжэнь является важной
                                составляющей морского экспорта и импорта Китая.
                                Порт Шэньчжэнь - один из самых оживленных и
                                быстрорастущих портов в мире. Услуги
                                распространены в Фуюн, Сиадон, Шаючонг, Нейхе,
                                Шекоу, Чиван, Маван, Яньтянь и Дунцзяотоу.
                                Шэньчжэнь имеет 140 причалов, в том числе, 51
                                причал для кораблей дедвейтом 11000 т., 90
                                действующих причалов, 18 контейнерных причалов и
                                девять причалов грузополучателя. В Шэньчжэне
                                находятся 39 судоходных компаний, на балансе
                                которых 560 судов. Он полностью обвязан
                                внутренними маршрутами в дельте Жемчужной реки
                              </p>
                              <p>
                                {" "}
                                Экономический объем производства в Шэньчжэне
                                превышает объемы производства в Ирландии,
                                Португалии и Вьетнаме. Это успешная отдельная
                                экономически-процветающая зона
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Нинбо"
                                  className="fancybox-button"
                                  href="img/morskoy_port_ningbo.jpg"
                                >
                                  <img
                                    alt="Морской порт Нинбо"
                                    src="img/morskoy_port_ningbo_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Нинбо
                              </h3>
                              <p>
                                Базируется на восточном берегу Чжэцзян
                                (провинция) с тремя портовыми ответвлениями.
                                Порт Нинбо всегда был одним из важных портов
                                Китая. Сегодня он превратился в развитый порт
                                Китая.
                              </p>
                              <p>
                                Для доставки груза из Нинбо доступны несколько
                                различных вариантов доставки контейнеров: есть
                                вариант полной загрузки контейнера (FCL) или
                                вариант с малой загрузкой контейнера (LCL) -
                                общий контейнер, генеральный или{" "}
                                <a href="dostavka_sbornyh_gruzov">
                                  сборный груз
                                </a>
                                .
                              </p>
                              <p>
                                Поскольку внешняя торговля Китая за последние
                                пятнадцать лет выросла, такие порты, как Нинбо,
                                становятся все более важными элементами жизненно
                                важной деятельности Китая по импорту и экспорту
                                со всего мира.
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Далянь"
                                  className="fancybox-button"
                                  href="img/morskoy_port_dalian.jpg"
                                >
                                  <img
                                    alt="Морской порт Далянь"
                                    src="img/morskoy_port_dalian_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Далянь
                              </h3>
                              <p>
                                Далянь предоставляет широкий спектр морских и
                                портовых услуг. К ним относятся: обработка нефти
                                и сжиженных химических веществ, сопутствующие
                                логистические услуги, морские контейнерные
                                перевозки, транспортные средства и другие
                                сопутствующие услуги. Обработка генеральных
                                грузов; насыпное зерно; пассажирские;
                              </p>
                              <p>
                                Администрация порта Далянь сообщила о 3,22 млрд
                                юаней (456,1 млн долларов США) дохода,
                                полученного в первой половине 2019 года, из
                                которых 1,33 млрд юаней пришлись на обработку
                                морских контейнерных перевозок. Объем перевалки
                                нефти и сжиженных химикатов составил еще 869
                                миллионов юаней. Перевалка сыпучих грузов
                                составила 426 миллионов юаней. Остальная часть
                                доходов порта была получена за счет зерна,
                                пассажиров и других услуг. Основной движущей
                                силой от нефтяной прибыли, был более высокий
                                доход от обработки и хранения нефти, поскольку
                                объемы сырой нефти увеличивались в течение года.
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Сямынь"
                                  className="fancybox-button"
                                  href="img/morskoy_port_xiamen.jpg"
                                >
                                  <img
                                    alt="Морской порт Сямынь"
                                    src="img/morskoy_port_xiamen_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Сямынь
                              </h3>
                              <p>
                                {" "}
                                Расположенный в низовьях реки Цзюлунцзян, с
                                глубокой бухтой для якорной стоянки порт Сяомынь
                                занимает восьмое место по размерам и семнадцатое
                                - среди 100 лучших мосрких портов, способных
                                обрабатывать сверхбольшие контейнеровозы. В 2013
                                году Сямэнь обработал 191 млн тонн грузов, в том
                                числе 8,08 млн TEUs контейнеров. В 2010 году
                                порт Сямынь присоединил к себе соседний порт
                                Чжанчжоу, чтобы сформировать крупнейший порт на
                                юго-востоке Китая.
                              </p>
                              <p>
                                Все 20 ведущих судоходных компаний мира
                                организовали основные маршруты и операции в
                                Сямыне. В общей сложности, 68 судоходных
                                маршрутов обслуживают более 50 стран почти во
                                всех основных портах мира, обеспечивая в
                                среднем, 469 заходов в порт каждый месяц. Кроме
                                того, пассажирские перевозки осуществляются из
                                Сямыня в Гонконг, Гуанчжоу, Шанхай и Вэньчжоу, а
                                также есть частое паромное сообщение до
                                терминала Шуитоу на острове Кинмен (РПЦ).
                              </p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Ляньюньган"
                                  className="fancybox-button"
                                  href="img/morskoy_port_lianyungang.jpg"
                                >
                                  <img
                                    alt="Морской порт Ляньюньган"
                                    src="img/morskoy_port_lianyungang_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Ляньюньган
                              </h3>
                              <p>
                                Ляньюньган является и остается главным
                                контейнерным и сухогрузным портом провинции. В
                                соответствии с планом правительства провинции за
                                последние годы, в субпорте Ляньюньган, Гуанъюнь,
                                было построено два причала классом до 30 000
                                тонн на первом терминале и два причала класса 50
                                000 тонн на втором терминале . Искусственный
                                канал связывает Гуаньюнь с рекой Янцзы.
                              </p>
                              <p>
                                В 2017 году в Ляньюньгане было обработано 228
                                миллионов тонн грузов, что на 3,2% больше, чем в
                                2016 году. Объемы внутренних перевозок выросли
                                на 5,1% по сравнению с аналогичным периодом
                                прошлого года и составили 122,3 миллиона тонн.
                                Было обработано 4,71 миллиона TEU контейнеров.
                              </p>
                              <p>
                                В ожидании растущих объемов грузов, компания
                                Guanyun планирует построить еще три причала
                                класса 50 000 тонн в третьем терминале,
                                логистический парк площадью 100 000 м 2 и
                                таможенный склад.
                              </p>
                              <p></p>
                            </div>
                          </div>
                          <div className="row margin-bottom-10">
                            <div className="col-md-4">
                              <figure>
                                {" "}
                                <a
                                  data-rel="fancybox-button"
                                  title="Морской порт Инкоу"
                                  className="fancybox-button"
                                  href="img/morskoy_port_incou.jpg"
                                >
                                  <img
                                    alt="Морской порт Инкоу"
                                    src="img/morskoy_port_incou_sm.jpg"
                                    className="img-responsive"
                                  />
                                </a>
                              </figure>
                            </div>
                            <div className="col-md-8 recent-news-inner">
                              <h3 className="text-red-site text-uppercase">
                                Морской порт Инкоу
                              </h3>
                              <p>
                                Порт Инкоу расположен на полуострове Ляотун,
                                также как и порт Далянь. Это второй по величине
                                открытый порт на северо-востоке Китая. Множество
                                грузовых терминалов для отправки груза во все
                                страны мира, создают рабочую, деловую обстановку
                                в городе, обслуживающем огромный порт. Поставки
                                товаров из Китая в Россию, потребовали от
                                китайского порта собранности и множества единиц
                                техники для погрузки контейнеров. 20-ти и 40-ка
                                футовые контейнеры, плывут в страну белых берез
                                и утренних блинов с товарами китайского
                                производства{" "}
                              </p>
                              <p>
                                Объемы перевозок растут каждый год,
                                обрабатывается несколько миллионов тонн грузов
                                из Китая в Россию, доставленных морским путем. А
                                когда-то в начале 19-века, полуостров Ляотун,
                                вернее расположенный на нем китайский город
                                Далянь, был русским городом - Дальний!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="korabli_i_konteinerovozy_dlia_moskogo_frahta"
                      style={{
                        display: "block",
                        marginBottom: "100px",
                        marginTop: "-90px",
                      }}
                    ></div>
                    <div className="lineheader-white">
                      <h3 className="text-center font-22 font-black pt-10 mb-20 ">
                        Корабли и контейнеровозы для морского фрахта
                      </h3>
                    </div>
                    <div className="row mb-10">
                      <div className="col-md-5">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="Контейнеровозы"
                            className="fancybox-button"
                            href="img/konteinerovozy.jpg"
                          >
                            <img
                              alt="Контейнеровозы"
                              src="img/konteinerovozy_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="col-md-7">
                        <h5 className="text-uppercase">Контейнеровозы</h5>
                        <p>
                          Контейнеровозы, это суда для перевозки грузов. Длина
                          контейнеровозов может быть в пределах от восьмидесяти
                          до четырехсот метров, дедвейт тоннажа - от 8000 до
                          20000 тонн, вместимость - от 250000 до 18000
                          контейнеров. Эти корабли оснащены высокой степенью
                          автоматизации. Численность персонала судна может быть
                          11-15 человек.
                        </p>
                        <p>
                          Внутри контейнеровоза есть трюм, оборудованный
                          вертикальными балками. Они облегчают погрузку и
                          разгрузку стандартных контейнеров (контейнеры
                          укладываются друг на друга) и предотвращают ёрзанье
                          при качке в море. После того, как контейнеры загружены
                          в трюмы, они загружаются на палубы, где закрепляются с
                          помощью специального оборудования: крепежных стержней,
                          цепей, фаркопов.
                        </p>
                        <p>
                          Процессы погрузки происходит в разы быстрее, чем на
                          сухогрузах, поскольку трюмы загружаются стандартными
                          грузовыми контейнерами. Такие корабли разгружаются с
                          помощью, имеющегося в порту, погрузочно-разгрузочного
                          оборудования, с грузоподъемностью более 20 тонн.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row mb-10">
                      <div className="col-md-7">
                        <h5 className="text-uppercase">Сухогруз (БАЛКЕР)</h5>
                        <p>
                          Сухогруз (балкер) - этот морской труженик,
                          предназначен для транспортировки неупакованных сыпучих
                          грузов: уголь, строительные материалы, зерно. Балкеры
                          построены с одной палубой и характеризуются огромной
                          грузоподъемностью - (более 144 000 тонн) и обладают
                          низкой скоростью движения.
                        </p>
                        <p>
                          Сыпучие товары внутри сухогрузов могут начать
                          перемещаться во время шторма в море в силу их
                          текучести. Потому, сухогруз разделен на специальные
                          секции с переборками и имеет уникальные технические
                          характеристики, по сравнению с другими судами. В
                          сравнении с другими типами судов, у сухогруза
                          балластные танки расположены у боковых стенок, с их
                          помощью можно предотвратить или компенсировать крен
                          (морской технический термин для наклонного положения).{" "}
                        </p>
                        <p>
                          Кроме того, многие сухогрузы имеют усиленные полы,
                          чтобы выдерживать большой вес груза и противостоять
                          штормам в океанах. В зависимости от требований,
                          некоторые сухогрузы имеют свое собственное погрузочное
                          оборудование.
                        </p>
                        <p>
                          Помимо контейнеровозов, сухогрузы составляют
                          значительную долю в международных морских перевозках.
                          Этот тип корабля часто используется. Есть комбинации
                          сухогрузов и различных других типов грузов, таких как
                          контейнеровозы.
                        </p>
                      </div>
                      <div className="col-md-5">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="Сухогруз (БАЛКЕР)"
                            className="fancybox-button"
                            href="img/balker_suhogruz.jpg"
                          >
                            <img
                              alt="Сухогруз (БАЛКЕР)"
                              src="img/balker_suhogruz_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <hr />
                    <div className="row mb-10">
                      <div className="col-md-5">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="ТАНКЕРЫ"
                            className="fancybox-button"
                            href="img/tanker.jpg"
                          >
                            <img
                              alt="ТАНКЕРЫ"
                              src="img/tanker_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="col-md-7">
                        <h5 className="text-uppercase">ТАНКЕРЫ</h5>
                        <p>
                          Танкер известен всем, но он принимает на борт не
                          только нефть, но другие наливные товары. Танкеры, это
                          узкоспециализированные корабли. Они существуют в
                          разных вариантах и размерах. От небольших самоходных
                          барж до ULCC (сверхбольшой сырой транспортер).
                          Примером того, что танкеры предназначены для
                          перевозки, являются: сырая нефть, сжиженный природный
                          газ, битум, патока, вино и химические вещества
                          (например, аммиак, хлор). Сегмент танкеров составляет
                          около 30% мирового торгового флота.
                        </p>
                        <p>
                          Конструкция танкера похожа на балкерную, за
                          исключением того, что грузовые трюмы были заменены
                          танками. Двигатели, два четырехтактных двигателя в
                          зависимости от размера и конструкции судна. В
                          большинстве случаев ГФО (тяжелое топливо) используется
                          в качестве топлива для приведения танкера в движение,
                          но в некоторых случаях (например, на СПГ) вместо ГФО
                          используется природный газ. Расчетная скорость
                          танкеров составляет от 10 до 18 узлов. Для погрузки и
                          разгрузки, суда-танкеры оснащены системой грузовых
                          насосов, которая тщательно контролируется на предмет
                          риска пожара или взрыва.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row mb-10">
                      <div className="col-md-7">
                        <h5 className="text-uppercase">Рефрижераторы</h5>
                        <p>
                          Рефрижераторное судно - это особая форма грузового
                          корабля. Как следует из названия, он используется для
                          перевозки товаров, которые должны оставаться в
                          холодильнике в течение всей перевозки.
                        </p>
                        <p>
                          Методы, с помощью которых работает современное
                          рефрижераторное судно, известны более 100 лет, но были
                          усовершенствованы и сделаны более эффективными.
                          Автоматические хладоустановки работают с аммиаком,
                          хладагентом, который был запрещен в то же время.
                          Снаружи рефрижераторный корабль трудно
                          идентифицировать, он выглядит почти как классический
                          грузовой корабль. Узнать его можно по белому цвету и
                          несколько более тонкому дизайну.
                        </p>
                        <p>
                          Трюмы, внутри рефрижераторного судна, состоят из палуб
                          высотой 2,20 м каждая. Их называются зоной охлаждения.
                          Следует отметить, что рефрижераторное судно не
                          обязательно может перевозить замороженные товары при
                          температуре ниже 0 C, ещё оно может перевозить фрукты
                          в тепле, до места назначения с низкими температурами.
                          Это стало возможным благодаря изоляции от высоких
                          температур наружного воздуха и компрессионным системам
                          охлаждения.
                        </p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>
                      <div className="col-md-5">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="Рефрижераторы"
                            className="fancybox-button"
                            href="img/ship_refrizherator.jpg"
                          >
                            <img
                              alt="Рефрижераторы"
                              src="img/ship_refrizherator_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <hr />
                    <div className="row mb-10">
                      <div className="col-md-5">
                        <figure>
                          {" "}
                          <a
                            data-rel="fancybox-button"
                            title="Корабли Ро́лкер"
                            className="fancybox-button"
                            href="img/ship_ro_ro_rolker.jpg"
                          >
                            <img
                              alt="Корабли Ро́лкер"
                              src="img/ship_ro_ro_rolker_sm.jpg"
                              className="img-responsive"
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="col-md-7">
                        <h5 className="text-uppercase">Корабли Ро́лкеры</h5>
                        <p>
                          Корабли Ро́лкеры (RORO) - это грузовые суда, которые
                          имеют горизонтальную загрузку колёсных транспортных
                          средств через кормовые аппарели - автомобили,
                          железнодорожные вагоны и все что движется на колесах.
                          Автомобили могут заезжать прямо на судно или будут
                          грузиться, как контейнеры, с использованием грузовых
                          кранов морского порта, с максимальной
                          грузоподъемностью 30 тонн. Тоннаж дедвейта таких
                          кораблей составляет от 1 до 12 тысяч тонн. Одним из
                          главных преимуществ кораблей RORO является высокая
                          скорость погрузки-разгрузки. Палуба используется для
                          дополнительного груза в виде 20-футовых и 40-футовых
                          контейнеров.
                        </p>
                        <p>
                          Корабль Ро́лкер снова и снова адаптируется к
                          современным требованиям. Было создано несколько типов
                          подобных кораблей - корабль ConRo, корабль LoRo,
                          корабль RoPax. Преимущество этих судов заключается в
                          сочетании различных видов транспорта которые можно
                          загрузить на борт для транспортировки, так что
                          судоходная компания может удовлетворить все
                          существующие современные требования перевозчиков.
                        </p>
                        <p>
                          Корабль LoRo может быть использован для перевозки
                          смешанных грузов и для военных целей. Этот тип судна
                          используется в регионах, где контейнеровозы или суда
                          RoRo не подходят или их не разрешают для
                          использования. Этот тип судна является
                          специализированным и занимает свою нишу на рынке
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="tab-pane">
                      <div className="pdf pb-30">
                        <a href="doc/o_licenzirovanii_otdelnyh_vidov_deyatelnosti_na_morskom_i_vnutrennem_vodnom_transporte.pdf">
                          <img
                            className="pull-left img-responsive mr-10"
                            width="100"
                            src="img/pdf_dokument_icon_100x111.png"
                            alt="Документ PDF"
                          />{" "}
                        </a>
                        <h5 className="text-uppercase">
                          "О лицензировании отдельных видов деятельности на
                          морском и внутреннем водном транспорте"{" "}
                        </h5>
                        <p>
                          Скачать файл в формате PDF. Постановление
                          Правительства РФ от 6 марта 2012 г. № 193 "О
                          лицензировании отдельных видов деятельности на морском
                          и внутреннем водном транспорте" (с изменениями и
                          дополнениями 10 августа 2016 г.)
                        </p>
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

export default morskaya_transportirovka_gruzov;
