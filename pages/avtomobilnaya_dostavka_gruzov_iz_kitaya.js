import Head from "next/head";
import App from "../components/App";

const avtomobilnaya_dostavka_gruzov_iz_kitaya = () => {
  return (
    <App navLight="mega">
      <Head>
        <title>Автомобильные перевозки грузов</title>
        <meta
          name="description"
          content="Автоперевозки не нуждаются в особом виде покрытий и пециальных погрузчиков. Довезут груз по любой дороге, ведущей к вашему складу"
        />
        <meta property="og:title" content="Автомобильные перевозки грузов" />
        <meta
          property="og:description"
          content="Автоперевозки не нуждаются в особом виде покрытий и пециальных погрузчиков. Довезут груз по любой дороге, ведущей к вашему складу"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/cover/avto_dostavka_iz_kitaya_v_rossiyu.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/avtomobilnaya_dostavka_gruzov_iz_kitaya"
        />
        <link
          rel="canonical"
          href="https://rosimport.ru/avtomobilnaya_dostavka_gruzov_iz_kitaya"
        />
      </Head>
      <div className="page-slider margin-bottom-40">
        <div className="banner-avto">
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
            <li>Грузы из Китая</li>
            <li className="active">Автомобильные перевозки грузов</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12">
              <div className="content-page">
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Автомобильные перевозки грузов
                  </h1>
                </div>

                <h2 className="pt-20 pb-20 text-center font-20">
                  Автодоставка грузов из Китая
                </h2>
                <p>
                  Отправки автомобильным транспортом осуществляются с основных
                  городов Китая – это Иу, Гуанчжоу и Пекин. Мы можем предложить
                  два тарифа автодоставки – это ускоренное авто и обычное. По
                  ускоренному тарифу, фура двигается без перегруза, остановок, с
                  двумя водителями и по платным дорогам.{" "}
                </p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Сроки доставки до
                    Москвы составляют в среднем 12-17 дней
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>По обычному тарифу,
                    сроки доставки до Москвы от 18 до 25 дней
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Разница в стоимости
                    между двумя тарифами составляет в среднем 20%
                  </li>
                </ul>

                <div itemScope itemType="http://schema.org/VideoObject">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content-box-video">
                        <div className="videoblock-10">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              width="100%"
                              src="https://www.youtube.com/embed/al_-hn-CvKQ"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <h4
                            itemProp="name"
                            className="pt-10 pb-10 text-center"
                          >
                            Видео: <strong>АВТО</strong>доставка груза из Китая
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-15">
                      <div className="captionblock">
                        <div className="caption">
                          <p itemProp="description">
                            В этом видео рассказывается из каких городов в Китае
                            происходит отправка груза. Что мы можем предложить
                            по автомобильной доставке? Какова разница в тарифах?
                            В видео присутствуют графические элементы, которые
                            помогут вам "сориентироваться" на лету.{" "}
                          </p>
                          <p itemProp="description">
                            Достаточно посмотреть этот видеоролик, чтобы сделать
                            представление о том, как поедет ваш груз, какие
                            таможенные барьеры ждут его на пути и по каким дням
                            недели фуры выходят их Китая.{" "}
                          </p>
                          <p itemProp="description">
                            Как походит оплата за груз? Как мы работаем с
                            товаром и каким образом осуществляется отслеживание.
                            Какие усуги мы оказываем дополнительно и почему нет
                            дополнительных затрат при доставке в Москву.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  В случае не выполнения оговоренных сроков, мы компенсируем
                  каждый день просрочки в процентном соотношении. Доставка до
                  склада в Китае осуществляется либо нашим транспортом, либо
                  силами поставщика. После получения груза{" "}
                  <a
                    href="konsolidacia_gruza"
                    data-toggle="tooltip"
                    data-original-title="КОНСОЛИДАЦИЯ ГРУЗА"
                  >
                    {" "}
                    на нашем складе в Китае{" "}
                  </a>
                  , мы его регистрируем, взвешиваем и обмеряем, после чего
                  предоставляем информацию Вам. При необходимости, мы
                  осуществляем бесплатную консолидацию грузов.
                </p>
                <figure className="pull-right">
                  <a
                    data-rel="fancybox-button"
                    title="Автодоставка грузов из Китая"
                    className="fancybox-button pull-right pl-10"
                    href="img/avtodostavka_gruza_iz_kitaya.jpg"
                  >
                    <img
                      alt="Автодоставка грузов из Китая"
                      width="600"
                      src="img/avtodostavka_gruza_iz_kitaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p>
                  Из Иу и Пекина машины выходят ежедневно, а из Гуанчжоу через
                  день. Стоимость фрахта без таможенного оформления начинается
                  от 0,5 долл за 1 кг и 1,2 долл за кг с таможенным оформлением
                  . Мы работаем с физическими и юридическими лицами по договору
                  с возможностью оплаты любыми удобными для Вас способами.
                  Оплата осуществляется по факту доставки груза на наш склад в
                  России. Мы отправляем грузы как по нашему, так и клиентскому
                  контракту, т.е, на Ваш выбор - в качестве импортера можете
                  выступать Вы, или наша компания.
                </p>
                <p>
                  При необходимости, мы оказываем содействие по поиску, выкупу
                  или проверке товара. У нас работает автоматическое смс и
                  емейл-информирование о движении груза, поэтому наши клиенты
                  всегда в курсе, где и на какой стадии находится их товар. На
                  выбор Вы можете застраховать груз, как по территории Китая,
                  так и по всему маршруту следования. У нас имеется выбор по
                  типу страхования груза.{" "}
                </p>
                <p>
                  Оплату за доставку вы можете произвести при получении в Москве
                  или после предоставления Вам фото или видео груза, а также
                  накладной о сдаче его в транспортную компанию, если отправка
                  необходима в другой город. Отправки по России и страны
                  Таможенного союза осуществляются любой удобно для Вас
                  транспортной компанией. В некоторых случаях, мы доставляем
                  собственным автотранспортом до Вашей двери
                </p>
                <p>
                  В Москве мы выгружаемся на своем складе, поэтому, никаких
                  дополнительных затрат в виде терминальной обработки, платного
                  въезда или погрузо-разгрузочных работ у вас не возникнет. Для
                  автодоставки из Китая, имеются следующие требования по
                  параметрам груза:
                </p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Длина одного места не
                    более 8 метров, высота не более 2,4м и ширина не более 2м.{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Вес одного места не
                    должен превышать 3,5 тонн
                  </li>
                </ul>
                <p>
                  Мы не принимаем грузы весом менее 50кг и объемом менее 0,1м3 –
                  для таких грузов целесообразнее использовать способ
                  консолидационного авиа Будем рады проконсультировать Вас по
                  любым имеющимся вопросам и ждем Ваших заявок!
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <h3 className="pt-20 pb-20 text-center font-20">
                      Доставка товаров из Китая автомобилями с различными типами
                      кузовов
                    </h3>
                    <p>
                      Автомобильные грузоперевозки из Китая - одна из самых
                      популярных логистических услуг транспортной компании
                      РОСИМПОРТ. Автомобильный транспорт используется для
                      перевозки большинства видов грузов, в том числе
                      негабаритных. Компания РОСИМПОРТ имеет соглашение с
                      партнерами на фрахт различных видов грузовых автомобилей,
                      для выполнения сложных заказов.
                    </p>
                    <p>
                      РОСИМПОРТ делает перевозки на любое расстояние по гибкому
                      индивидуальному тарифу, подбирает грузовики в соответствии
                      с характеристиками вашего груза и обеспечивает его
                      сопровождение. Компания РОСИМПОРТ предоставляет информацию
                      о местонахождении автомобиля в любой части маршрута,
                      гарантирует безопасность и своевременную доставку товара.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Доставка товаров из Китая автомобилями с различными типами кузовов"
                        className="fancybox-button"
                        href="img/avtomobilnye_perevozki_iz_kitaya.jpg"
                      >
                        <img
                          alt="Доставка товаров из Китая автомобилями с различными типами кузовов"
                          src="img/avtomobilnye_perevozki_iz_kitaya.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  id="preimushchestvo_avtomobilnyh_perevozok"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Какие преимущества у международных автомобильных перевозок?
                  </h2>
                </div>
                <div className="row mt-20">
                  <div className="col-md-2 col-sm-2">
                    <a
                      data-rel="fancybox-button"
                      title="Удобные логистические операции"
                      className="fancybox-button"
                      href="img/udobnye_logosticheskie_operacii.jpg"
                    >
                      <img
                        alt="Удобные логистические операции"
                        src="img/udobnye_logosticheskie_operacii_sm.jpg"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h5 className="pb-0 text-uppercase">
                      Удобные логистические операции
                    </h5>
                    <p>
                      Практически любое автомобильное транспортное средство
                      может быть выгружено грузчиками вручную, без привлечения
                      дорогостоящей спецтехники. Склады в любой стране
                      адаптированы для работы с автомашинами. Это позволяет
                      быстро выполнять погрузочно-разгрузочные работы на складе.
                      Автомобильный транспорт доставит товар со складов
                      отправителя, непосредственно получателю или на
                      железнодорожный вокзал или в морской порт для перегрузки.
                    </p>
                  </div>
                </div>
                <div className="row mt-20">
                  <div className="col-md-2 col-sm-2">
                    <a
                      data-rel="fancybox-button"
                      title="Разнообразие вариантов транспортировки"
                      className="fancybox-button"
                      href="img/varianty_transportirovki.jpg"
                    >
                      <img
                        alt="Разнообразие вариантов транспортировки"
                        src="img/varianty_transportirovki_sm.jpg"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h5 className="pb-0 text-uppercase">
                      Разнообразие вариантов транспортировки
                    </h5>
                    <p>
                      Услуги автогрузоперевозок возможны по всем видам
                      логистических схем. Другой основной вид транспорта (море,
                      жд, авиа) не обладают такими возможностями. При
                      необходимости, автотранспортные средства могут легко
                      изменить маршрут или объехать возникшее препятствие.
                      Доставка груза из морского порта до места назначения или
                      до ЖД транспорта. От ЖД и до корабля-контейнеровоза.
                      Автомобиль, это гибкое решение по смене основного
                      транспорта или подхват товара на транзитной точке.
                    </p>
                  </div>
                </div>
                <div className="row mt-20">
                  <div className="col-md-2 col-sm-2">
                    <a
                      data-rel="fancybox-button"
                      title="Доступная стоимость автоперевозок из Китая в Россию"
                      className="fancybox-button"
                      href="img/dostupnaya_stoimost_avtoperevozok_iz_kitaya_v_rossiyu.jpg"
                    >
                      <img
                        alt="Доступная стоимость автоперевозок из Китая в Россию"
                        src="img/dostupnaya_stoimost_avtoperevozok_iz_kitaya_v_rossiyu_sm.jpg"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h5 className="pb-0 text-uppercase">
                      Доступная стоимость автоперевозок из Китая в Россию
                    </h5>
                    <p>
                      Тарифы на автоперевозки рассчитываются в зависимости от
                      целей, задач и характера груза. Цена, в любом случае,
                      будет относительно низкая. Автомобильный транспорт
                      расходует гораздо меньше топлива, чем воздушный транспорт,
                      преодолевая такое же расстояние. Автомобильный транспорт
                      превосходит железнодорожный транспорт на коротких
                      расстояниях с меньшим объемом. Это удобней для быстрой
                      доставки и разгрузки, не требующей автокара или
                      специального погрузчика для коробочных грузов.
                    </p>
                  </div>
                </div>
                <div className="row mt-20">
                  <div className="col-md-2 col-sm-2">
                    <a
                      data-rel="fancybox-button"
                      title="Высокая мобильность автотранспорта"
                      className="fancybox-button"
                      href="img/vysokaya_mobolnost_avtptransporta.jpg"
                    >
                      <img
                        alt="Высокая мобильность автотранспорта"
                        src="img/vysokaya_mobolnost_avtptransporta_sm.jpg"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h5 className="pb-0 text-uppercase">
                      Высокая мобильность автотранспорта
                    </h5>
                    <p>
                      Автомобильный транспорт будет двигаться по любой
                      местности: мосту, некачественной дороге, пересеченной
                      местности и т.д. С помощью паромов, автомобиль преодолеет
                      водные преграды. Это отличный вид транспорта, доступный
                      для международных перевозок. Автомобиль с фургоном или
                      рефрижератором, может поддерживать температуру, точно так
                      же, как и в морских или ЖД контейнерах, и разгружаться в
                      городах находящихся на его по пути. Грузовику совсем не
                      обязательно прибывать на один региональный склад, для
                      последующей разгрузки и отправки частей груза в регионы.
                    </p>
                  </div>
                </div>

                <div
                  id="vidy_gruzovyh_avtomobiley"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Виды грузовых автомобилей
                  </h2>
                </div>
                <div className="row mt-20 pl-30 pr-30">
                  <div className="col-md-5">
                    <ul className="list-unstyled">
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Тент на кузове,
                        ставится для перевозки грузов, которым не нужна строго
                        поддерживаемая температура, но требуется защита от
                        атмосферных осадков. Достоинства - удобная и быстрая
                        загрузка с нескольких сторон.
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Холодильник
                        (рефрижератор). Оборудован холодильным агрегатом,
                        который поддерживает желаемую температуру на протяжении
                        всего пути. Предназначен для скоропортящихся товаров.
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Изотермы.
                        Изолированный, но не имеет рефрижераторного блока.
                        Оптимален для быстрой перевозки грузов с ограниченным
                        сроком годности.
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Полуприцеп. Годен
                        для перевозки крупных грузов по дорогам общего
                        пользования.
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Автомобиль с
                        полуприцепом. Перевозит морские и железнодорожные
                        контейнеры разных типов.
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Грузовик с плоским
                        кузовом без бортов (трейлер). Предназначен для перевозки
                        большой дорожной техники и других негабаритных грузов
                      </li>
                      <li className="line-dashed">
                        <i className="fa fa-caret-right"></i>Автоцистерна.
                        Назначение - перевозка различных видов жидких и сыпучих
                        грузов.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Виды автомобилей для грузоперевозок"
                        className="fancybox-button"
                        href="img/vidy_avtomobiley_dlia_gruzoperevozok.jpg"
                      >
                        <img
                          alt="Виды автомобилей для грузоперевозок"
                          src="img/vidy_avtomobiley_dlia_gruzoperevozok_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  id="logisticheskie_shemy_dlia_gruzovikov_iz_kitaya"
                  style={{
                    display: "block",
                    marginBottom: "100px",
                    marginTop: "-90px",
                  }}
                ></div>
                <div className="lineheader-white">
                  <h2 className="text-center font-20 font-black pt-5">
                    Логистические схемы для грузовиков из Китая
                  </h2>
                </div>
                <p>
                  Компания РОСИМПОРТ, корректирует свои логистические решения,
                  чтобы соответствовать всем запросам современной системы
                  автомобильных грузоперевозок. Мы, международные
                  грузоперевозчики, используем свой собственный офис в Китае,
                  для перемещения ваших грузов по территории Китая на наш
                  консолидационный склад, перед отправкой в Россию. Это касается
                  и <a href="dostavka_sbornyh_gruzov">сборных грузов</a> и
                  генеральных грузов.{" "}
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <p>
                      Для импорта из Китая товаров, перевозимых автомобильным
                      транспортом, требуется много документов, административных
                      требований, логистических решений, валютных операций и
                      строгих таможенных процедур, которые необходимо учитывать.{" "}
                    </p>
                    <p>
                      В каждой стране, в том числе и в Китае, существуют свои
                      законы, которые должны быть полностью изучены и соблюдены,
                      чтобы гарантировать безопасную и быструю доставку грузов.
                      Мы имеем много возможностей в предложении оптимального
                      сочетания маршрутов и цен. Мы можем адаптировать возникшую
                      ситуацию под свой ресурс в Китае, чтобы обеспечить
                      безопасность и своевременную доставку груза своим
                      клиентам.{" "}
                    </p>
                    <p>
                      В процессе таможенного оформления, когда вы совершаете
                      покупку у более чем одного поставщика или вы приобретаете
                      товары, требующие много разрешительной документации, то
                      процесс таможенного декларирования становится очень
                      сложным и громоздким. Мы решаем эти вопросы по накатанной
                      схеме
                    </p>
                    <p>
                      Мы квалифицированно работаем с документами и берем на себя
                      ответственность по надлежащему оформлению груза для
                      импорта из Китая.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <figure>
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Логистические схемы для грузовых автомобилей"
                        className="fancybox-button"
                        href="img/logisticheskie_shemy_dlia_gruzovyh_avtomobiley.jpg"
                      >
                        <img
                          alt="Логистические схемы для грузовых автомобилей"
                          src="img/logisticheskie_shemy_dlia_gruzovyh_avtomobiley_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
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

export default avtomobilnaya_dostavka_gruzov_iz_kitaya;
