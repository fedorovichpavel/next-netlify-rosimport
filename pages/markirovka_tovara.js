import Head from "next/head";
import App from "../components/App";

const markirovka_tovara = () => {
  return (
    <App navLight="uslugi">
      <Head>
        <title>Маркировка товара</title>
        <meta
          name="description"
          content="Руководство по маркировке товаров для международных грузовых перевозок"
        />
        <meta property="og:title" content="Маркировка товара" />
        <meta
          property="og:description"
          content="Руководство по маркировке товаров для международных грузовых перевозок"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/markirovka_tovara"
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
                    onClick={() => (window.location.href = "contacts.html")}
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
              <a href="index.html">Международные грузоперевозки</a>
            </li>
            <li>Услуги</li>
            <li className="active">Маркировка товара</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8">
              <div className="content-page">
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Идет печать наклеек для маркировки груза"
                    className="fancybox-button"
                    href="img/idet_pechat_nakleek_dlia_markirovki_gruza.jpg"
                  >
                    <img
                      alt="Идет печать наклеек для маркировки груза"
                      src="img/idet_pechat_nakleek_dlia_markirovki_gruza_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Маркировка товара
                  </h1>
                </div>
                <h3 className="font-18 font-black mt-10">
                  Почему необходимо маркировать товар?
                </h3>
                <p className="content-text">
                  Груз с нанесенной маркировкой доходит быстрее.
                </p>
                <p className="content-text">
                  Когда{" "}
                  <a
                    href="konsolidacia_gruza.html#kak_postupaet_gruz_na_sklad"
                    title="Как поступает груз на склад и что с ним происходит"
                  >
                    на наш склад в Китае приходит груз от поставщиков
                  </a>{" "}
                  с вашей маркировкой, то мы понимаем, что груз принадлежит вам.
                  Груз регистрируется и мы сразу же начинаем формировать партию
                  к отправке.
                </p>
                <p className="content-text">
                  На наш склад ежедневно поступает большое количество товаров.
                  Поток автомобилей-полуприцепов с коробками и ящиками, мелкие
                  партии и единичные пакеты с курьерами, все{" "}
                  <a href="skladskie_uslugi.html" title="Складские услуги">
                    прибывшие на наш склад товары
                  </a>
                  , готовятся к отправке сразу после регистрации и обработки. Мы
                  обрабатываем груз, обмеряем, взвешиваем и планируем место в
                  морском и ЖД контейнере, в автомобильном полуприцепе и в
                  различных грузовых трюмах.
                </p>
                <p className="content-text">
                  Китайские партнеры вообще халатно относятся к сопровождающим
                  документам, поэтому лучше восемь раз напомнить им о маркировке
                  груза и проследить за этим.
                </p>
                <p className="content-text">
                  Если же ваши поставщики не нанесли маркировку на груз или
                  наклейка с маркировкой была утеряна в дороге, то нам будет
                  сложно понять, кто хозяин груза.
                </p>
                <p className="content-text">
                  В таких случаях, мы разместим ваши товары в той части склада,
                  где находятся точно такие же коробки и ящики, ожидающие
                  подтверждения владельца.
                </p>
                <div className="col-12 mt-10 mb-30">
                  <blockquote className="yellow">
                    <div className="pb-20">
                      <div className="pull-left pr-30">
                        <img
                          src="img/sotrudnik_lu_yan.jpg"
                          className="blockquote-border"
                          width="200"
                          alt="Начальник склада г. Гуанчжоу - Сунь Синьцзян"
                        />
                      </div>
                      <div className="font-18 text-center pt-20 pb-20 blockquote-head">
                        Начальник склада г. Гуанчжоу - Сунь Синьцзян:
                      </div>
                      <p className="font-16">
                        К сожалению, мы не можем вскрывать безымянные коробки и
                        начинать искать владельца груза, пока к нам на склад,
                        плотным потоком прибывают товары. Мы начнем разбираться
                        с немаркированными товарами , когда поток грузов на
                        склад станет меньше.
                      </p>
                      <p className="font-16">
                        В первую очередь мы отправим маркированные грузы. А с
                        теми товарами, на которых отсутствует маркировка, мы
                        будем разбираться только тогда, когда возникнет пауза в
                        приемке на складе.
                      </p>

                      <p className="font-16">
                        Надо отметить, что китайцы могут не давать водителю
                        сопроводительные документы на груз. Китайские поставщики
                        доставят товар на наш склад в Китае, а после доставки
                        все бремя оформления ляжет на нас. В Китае очень сильны
                        устные договорённости, поэтому к бумажкам они относятся
                        безразлично.
                      </p>

                      <p className="font-16">
                        Но, не переживайте, в любом случае ваш груз не
                        потеряется, даже если он немаркирован. Мы вскроем
                        коробки неустановленных заказчиков, сфотографируем груз
                        и отправим им фото для подтверждения. Владельцы
                        подтвердят свой груз трек-номером, наименование и весом
                        груза. Мы сверим груз с полученной информацией, сделаем
                        под него сопроводительные документы и отправим груз в
                        Россию.
                      </p>
                    </div>
                  </blockquote>
                </div>
                <p className="content-text">
                  Если же у вас абонирован весь контейнер или полностью
                  зафрахтована фура(полуприцеп), то понятно, что все товары в
                  ней ваши.
                </p>
                <p className="content-text">
                  По дороге из Китая в Россию, контролирующая инспекция вправе
                  выгрузить часть вашего груза или весь груз на досмотр. Если на
                  коробках есть маркировка, то проверяемые товары уже не
                  перепутают с товарами другими отправителей.{" "}
                </p>
                <p className="content-text">
                  При{" "}
                  <a
                    title="Автомобильная доставка грузов"
                    href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html"
                  >
                    доставке груза контейнерами и грузовыми автомобилями
                  </a>
                  , прежде всего, рассчитывается полезная площадь и груз
                  укладывается по принципу равномерного распределения по вс ей
                  площади контейнера, с тем, чтобы не осталось незаполненного
                  пространства.
                </p>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Ваши товары уложены в коробки"
                    className="fancybox-button"
                    href="img/vashi_tovary_ulozheny_v_korobki.jpg"
                  >
                    <img
                      alt="Ваши товары уложены в коробки"
                      src="img/vashi_tovary_ulozheny_v_korobki_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Если ваши товары уложены в коробки, а коробки разных размеров
                  и разного веса, то{" "}
                  <a
                    href="poddony_palety_dlia_gruzovyh_perevozok.html"
                    title="Поддоны и палеты"
                  >
                    палеты будут размещаться
                  </a>{" "}
                  не по принципу "товар одного хозяина" рядом, а по регламенту
                  правильной укладки груза в данном транспортном средстве. То
                  есть, тяжелый груз будет в центре, а всё остальное
                  укладывается, исходя из оставшейся полезной площади контейнера
                  или кузова грузовика.
                </p>
                <p className="content-text">
                  Когда груз поступает в место назначения на складе в России, то
                  собрать его по маркировке, не составит труда. К тому же, если
                  маркировка нанесена на товары требующие к себе особого
                  внимания (хрупкий груЗ), то мы будем контролировать этот
                  маркированный груз на всём пути следования.
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Проверкамаркировки товара"
                    className="fancybox-button"
                    href="img/proverka_upakovki_i_markirovki_tovara.jpg"
                  >
                    <img
                      alt="Проверка маркировки товара"
                      src="img/proverka_upakovki_i_markirovki_tovara_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="font-18 font-black mt-10">
                  Как нужно маркировать груз
                </h3>
                <p className="content-text">
                  Желательно взять водостойкий фломастер и с двух сторон коробки
                  написать свои данные. Водостойкий фломастер одинаково хорошо
                  пишет на картоне, на фанерных ящиках, на дереве, на
                  упаковочной пленке и на скотче.
                </p>
                <p className="content-text">
                  Маркировка может быть утеряна, если поставщики налепили на
                  деревянный ящик бумажный лист формата А4 и приклеили его
                  скотчем поверх бумаги. Размокнув, такая бумажная маркировка
                  легко теряется. Любые, плохо приклеенные маркировочные листы и
                  наклейки, могут цепляться за рядом стоящие коробки и
                  отрываться от сильного ветра при погрузке. Надо выбирать
                  наклейки с надёжным клеевым составом.
                </p>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="На складе пишет на коробке маркировку груза"
                    className="fancybox-button"
                    href="img/na_sklade_pishet_na_korobke_markirovku_gruza.jpg"
                  >
                    <img
                      alt="На складе пишет на коробке маркировку груза"
                      src="img/na_sklade_pishet_na_korobke_markirovku_gruza_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="font-18 font-black mt-10">
                  Какие данные писать на коробке с товаром?
                </h3>
                <p className="content-text">
                  <strong>Не пишите лишнего</strong>. Достаточно указать те
                  данные, которые вам скажет менеджер. Обычно, это трехбуквенное
                  обозначение и номер договора. Этой информации достаточно для
                  идентификации груза.
                </p>
                <p className="content-text">
                  <strong>НЕ ПИШИТЕ!</strong> Номера телефонов, номера инвойсов,
                  контрактов, название компании, наименование товара и адрес
                  доставки.
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Маркировка наклеенная на ящик с грузом"
                    className="fancybox-button"
                    href="img/markirovka_nakleennaya_na_yashchik_s_gruzom.jpg"
                  >
                    <img
                      alt="Маркировка наклеенная на ящик с грузом"
                      src="img/markirovka_nakleennaya_na_yashchik_s_gruzom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h2 className="font-18 font-black mt-10">
                  Маркировка груза перед отправкой в Россию
                </h2>
                <img
                  alt="Безопасность груза"
                  src="img/icon_bezopasnost_gruza.png"
                  width="100"
                  className="pull-right"
                />
                <p className="content-text pt-10">
                  На пути через национальные границы ваш груз подвергается
                  многочисленным внешним воздействиям{" "}
                  <a
                    title="Морская транспортировка грузов"
                    href="morskaya_transportirovka_gruzov.html"
                  >
                    при перевозке морем
                  </a>{" "}
                  и проходит через множество ЖД станций. Решающим фактором
                  безопасности, является высокий уровень стабильной защитной
                  функции упаковки, а с помощью соответствующей маркировки, вы
                  повышаете безопасность товаров и гарантируете правильное
                  обращение с ними грузчиков в портах и терминалах.
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Маркировка  и наклейки на груз"
                  src="img/icon_markirovka_gruza.png"
                  width="100"
                  className="pull-right pt-0"
                />
                <p className="content-text pt-10">
                  Желательно маркировать ваши товары соответственно заметной
                  информацией или предупредительными надписями. Важно, чтобы они
                  были понятны на международном уровне, то есть снабжены не
                  зависящими от языка иллюстрациями или содержат ссылки на
                  английский или другие языки
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Индикатор угла наклона груза"
                  src="img/icon_ugol_naklona_gruza.png"
                  width="100"
                  className="pull-right pt-0"
                />
                <p className="content-text pt-10">
                  С помощью индикатора наклона вы можете проверить правильность
                  транспортировки ваших товаров, что обеспечивает очень высокий
                  уровень безопасности. Самоклеящийся индикатор легко
                  прикрепляется к упаковке и нечувствителен к колебаниям
                  влажности и температуры. Он оптически указывает на наличие
                  наклона 83 °, либо дает точное указание на сколько градусов
                  был наклонен пакет.
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Индикатор влажности груза"
                  src="img/icon_indikator_vlazhnosti_gruza.png"
                  width="100"
                  className="pull-right pt-0"
                />
                <p className="content-text pt-10">
                  Если вы перевозите товары в упаковке с барьерным слоем с
                  влагопоглотителями, индикатор влажности или окно контроля
                  влажности показывает, насколько высока влажность внутри
                  упаковки. Таким образом, вы можете легко проверить это
                  значение, тем более, если добавлен дополнительный осушитель
                </p>
                <div className="line-dashed"></div>
                <img
                  alt="Упаковка сопроводительных документов на груз"
                  src="img/icon_upakovka_dokumentov.png"
                  width="100"
                  className="pull-right pt-0"
                />
                <p className="content-text pt-10">
                  Ваши сопроводительные документы на груз тоже должны быть
                  защищены от повреждений. Они упаковаваются в прозрачный пакет
                  для документов. Такой полиэтиленовый или пластиковый пакет
                  снабжается плотным водонепроницаемым замком, для удобной
                  работы на таможне или в складских помещениях
                </p>
                <div className="line-dashed"></div>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Штрих-коды и маркировка коробок с товаром"
                    className="fancybox-button"
                    href="img/markirovka_shtrih_kody_na_korobke_s_tovarom.jpg"
                  >
                    <img
                      alt="Штрих-коды и маркировка коробок с товаром"
                      src="img/markirovka_shtrih_kody_na_korobke_s_tovarom_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="font-16 font-black mt-20 mb-20">
                  Штрих-коды и маркировка коробок с товаром
                </h4>
                <img
                  alt="Маркировка товара"
                  src="img/markirovka_tovara.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Отсутствие или неразборчивость маркировки на вторичной
                  упаковке может вызвать множество проблем, включая штрафы и
                  задержки. Таможенные инспекторы должны знать, откуда
                  происходит продукция, куда она направляется и соответствует ли
                  ее содержание региональным нормам. Если эта информация не
                  видна на вашей упаковке, таможня может задержать или отклонить
                  ваш груз.
                </p>
                <img
                  alt="На упаковке размер и вес"
                  src="img/na_upakovke_razmer_i_ves.png"
                  width="128"
                  className="pull-right pl-10"
                />
                <p className="content-text">
                  Кроме того, они могут оштрафовать вашу компанию в зависимости
                  от стоимости товара, а также взимать плату за возмещение любых
                  расходов, понесенных при транспортировке, хранении или
                  утилизации товара.
                </p>
                <p className="content-text">
                  Следующие маркировки требуются на вторичной упаковке:
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Имя покупателя
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Номер заказа на
                    поставку
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Количество предметов
                    и описание
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Размеры и вес
                    коробки
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Количество коробок в
                    каждом наборе
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Предупреждающие
                    надписи и инструкции по хранению (например, «хрупкие», «этой
                    стороной вверх»)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Штрихкоды
                  </li>
                </ul>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Неправильные штрих-коды на упаковке товара"
                    className="fancybox-button"
                    href="img/nepravilnye_shtrihkody_na_upakovke_tovara.jpg"
                  >
                    <img
                      alt="Неправильные штрих-коды на упаковке товара"
                      src="img/nepravilnye_shtrihkody_na_upakovke_tovara_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text mt-30">
                  Неправильные штрих-коды вызывают задержку доставки груза. Вот
                  общие проблемы, которые могут возникнуть при сканировании
                  штрих-кодов:
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Блёклый или низкий
                    контраст между линиями и фоном
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Штрих-код слишком
                    близко к краю или наклейке
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Мятая или
                    поврежденная наклейка со штрих-кодом
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Штрих-код слишком
                    большой или слишком маленький для сканирования
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Наклейка со
                    штрих-кодом неправильно ориентирована
                  </li>
                </ul>
                <div className="line-dashed"></div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <aside>
                <div className="aside-box">
                  <nav>
                    <a href="aviaperevozka_gruzov_iz_kitaya.html">
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
                          href="aviaperevozka_gruzov_iz_kitaya.html#aviacionnye_nadezhnye_vozdushnye_gruzoperevozki_iz_kitaya_v_rossiyu"
                          title="Надежные воздушные грузоперевозки из Китая в Россию"
                        >
                          Надежные воздушные грузоперевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya.html#process_otgruzki_tovara_i_dostavki_aviatransportom"
                          title="Процесс отгрузки товара и доставки авиатранспортом"
                        >
                          Процесс отгрузки и доставки авиа
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya.html#aviadostavka_srochnogo_sbornogo_gruza"
                          title="Авиадоставка срочного и сборного груза в Россию из Китая"
                        >
                          Авиадоставка срочного и сборного груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="aviaperevozka_gruzov_iz_kitaya.html#osnovnye_aeroporty_v_kitae"
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
                    <a href="zheleznodorozhnaya_perevozka_gruzov.html">
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
                          href="zheleznodorozhnaya_perevozka_gruzov.html#zheleznodorozhnaya_dostavka_gruza"
                          title="Пошаговая железнодорожная доставка груза"
                        >
                          Пошаговая железнодорожная доставка груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov.html#intermodalnye_perevozki_gruzov"
                          title="Интермодальные перевозки грузов"
                        >
                          Интермодальные перевозки грузов
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="zheleznodorozhnaya_perevozka_gruzov.html#optimizacia_zheleznodorozhnoy_cepochki_postavok"
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
                    <a href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html">
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
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html#preimushchestvo_avtomobilnyh_perevozok"
                          title="Преимущества автомобильных перевозок"
                        >
                          Преимущества автомобильных перевозок
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html#vidy_gruzovyh_avtomobiley"
                          title="Виды грузовых автомобилей"
                        >
                          Виды грузовых автомобилей
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avtomobilnaya_dostavka_gruzov_iz_kitaya.html#logisticheskie_shemy_dlia_gruzovikov_iz_kitaya"
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
                    <a href="morskaya_transportirovka_gruzov.html">
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
                          href="morskaya_transportirovka_gruzov.html#morskie_gruzovye_perevozki"
                          title="Морские грузовые перевозки"
                        >
                          Морские грузовые перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov.html#morskaya_konteynernaya_transportirovka"
                          title="Морская контейнерная транспортировка LCL и FCL"
                        >
                          Морская контейнерная транспортировка
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov.html#kak_proishodit_morskaya_dostavka_gruza"
                          title="Как происходит морская доставка груза (подробно)"
                        >
                          Как происходит морская доставка (подробно)
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov.html#upakovka_gruza_dlia_morskih_konteinernyh_perevozok"
                          title="Упаковка груза для морских контейнерных перевозок"
                        >
                          Упаковка груза в контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov.html#osnovnye_morskie_porty_kitaya"
                          title="Основные морские порты Китая"
                        >
                          Основные морские порты Китая
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="morskaya_transportirovka_gruzov.html#korabli_i_konteinerovozy_dlia_moskogo_frahta"
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
                    <a href="avia_express_dostavka.html">
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
                          href="avia_express_dostavka.html#express_dostavka_samoletom_iz_kitaya"
                          className="more"
                          title="Экспресс доставка самолетом из Китая"
                        >
                          Экспресс доставка самолетом
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avia_express_dostavka.html#nadezhnost_bezopasnost_express_dostavki"
                          className="more"
                          title="Надежность и безопасность экспресс доставки"
                        >
                          Безопасность экспресс доставки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="avia_express_dostavka.html#express_dostavka_tovarov_iz_kitaya"
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
                    <a href="uslugi.html">
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
                          href="uslugi.html#uslugi_komplektacii_i_sborki_gruza"
                          title="Услуги комплектации и сборки груза"
                        >
                          Услуги комплектации и сборки груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi.html#upakovka_tovara"
                          title="Упаковка товара"
                        >
                          Упаковка товара
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi.html#usluga_strahovania_gruza"
                          title="Услуга страхования груза"
                        >
                          Услуга страхования груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi.html#usluga_perevodchika_v_kitae"
                          title="Услуга переводчика в Китае"
                        >
                          Услуга переводчика в Китае
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi.html#biznes_tur_v_guanchzhou"
                          title="БИЗНЕС ТУР В ГУАНЧЖОУ"
                        >
                          БИЗНЕС ТУР В ГУАНЧЖОУ
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="uslugi.html#mebelnye_tury_v_kitae"
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
                    <a href="dostavka_gruzov_iz_kitaya.html">
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
                          href="dostavka_gruzov_iz_kitaya.html#otdelnyi_i_sbornyi_konteiner_sbornyi_gruz"
                          title="Отдельный и сборный контейнер (сборный груз)"
                        >
                          Отдельный и сборный контейнер
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#zayavka_na_perevozaku_gruza_iz_kitaya"
                          title="Заявка на перевозку груза из Китая"
                        >
                          Заявка на перевозку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#sms_informirovanie_o_mestonahozhdenii_konteinera"
                          title="СМС информирование о местонахождении контейнера"
                        >
                          СМС информирование
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#strahovanie_gruza_dlia_dostavki_iz_kitaya"
                          title="Страхование груза для доставки из Китая"
                        >
                          Страхование груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#generalnye_chastichnye_sbornye_gruzy"
                          title="Генеральные, частичные и сборные грузы"
                        >
                          Генеральные и сборные грузы
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#postavshchiki_iz_kitaya_i_krupnyi_gruz"
                          title="Поставщики из Китая и крупный груз"
                        >
                          Поставщики из Китая и крупный груз
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#vliyanie_sezona_na_perevozku_gruza_iz_kitaya"
                          title="Влияние сезона на перевозку груза из Китая"
                        >
                          Влияние сезона на перевозку
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#vliyanie_prazdnikov_v_kitae_na_dostavku_gruza"
                          title="Влияние праздников в Китае на доставку груза"
                        >
                          Влияние праздников на доставку груза
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#multimodalnye_perevozki"
                          title="Мультимодальные перевозки"
                        >
                          Мультимодальные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#konteinernye_perevozki"
                          title="Контейнерные перевозки"
                        >
                          Контейнерные перевозки
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#procedura_proverki_konteinera"
                          title="Процедура проверки контейнера"
                        >
                          Процедура проверки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#proverka_zagruzki_konteinera"
                          title="Проверка загрузки контейнера"
                        >
                          Проверка загрузки контейнера
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#informacia_o_konteinereh_dlia_dostavki_tovarov"
                          title="Информация о контейнерах для доставки товаров"
                        >
                          Информация о контейнерах
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#transportnye_kartochki_s_parametrami_dostavki_gruzov"
                          title="Транспортные карточки с параметрами доставки грузов"
                        >
                          Карточки товаров
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>
                        <a
                          href="dostavka_gruzov_iz_kitaya.html#katalog_vvozimyh_tovarov"
                          title="Каталог ввозимых товаров (импорт из Китая)"
                        >
                          Каталог ввозимых товаров
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default markirovka_tovara;
