import Head from "next/head";
import App from "../components/App";

const skladskie_uslugi = () => {
  return (
    <App navLight="uslugi">
      <Head>
        <title>Складские услуги</title>
        <meta
          name="description"
          content="Услуги складирования груза в наших зарубежных представительских офисах и складах"
        />
        <meta property="og:title" content="Складские услуги" />
        <meta
          property="og:description"
          content="Услуги складирования груза в наших зарубежных представительских офисах и складах"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/skladskie_uslugi"
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
            <li className="active">Складские услуги</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8">
              <div className="content-page">
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Китайский большой склад"
                    alt="Китайский большой склад"
                    className="fancybox-button"
                    href="img/kitayskiy_bolshoy_sklad.jpg"
                  >
                    <img
                      alt="Китайский большой склад"
                      src="img/kitayskiy_bolshoy_sklad_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Складские услуги
                  </h1>
                </div>
                <p className="content-text">
                  Список услуг{" "}
                  <a
                    href="transportnaya_kompania"
                    title="Транспортная компания"
                  >
                    нашей международной транспортной компании
                  </a>{" "}
                  включает в себя всю квинтэссенцию современной и комплексной
                  складской логистики. Складские здания РОСИМПОРТ в Китае, имеют
                  все возможности для долгосрочного хранения груза, его
                  обработки и подготовке к транспортировке в Россию.
                </p>
                <div className="line-dashed"></div>
                <p className="content-text">
                  На наших складах могут хранить и электронная нежная техника и
                  скоропортящиеся продукты. Для каждого товара мы создадим
                  подходящие климатические условия, оградим от солнца и избавим
                  от излишней влажности.
                </p>
                <div className="line-dashed"></div>
                <p className="content-text">
                  Если вы планируете{" "}
                  <a
                    title="Доставка грузов из Китая"
                    href="dostavka_gruzov_iz_kitaya"
                  >
                    доставку товаров из Китая в Россию
                  </a>
                  , то сначала мы доставим ваш груз от поставщика в Китае на
                  один из наших китайских{" "}
                  <a title="Консолидация груза" href="konsolidacia_gruza">
                    консолидационных складов
                  </a>{" "}
                  в городах Урумчи, Пекин, Гуанчжоу, Иу. Мы предоставим вам
                  складской сервис на высочайшем уровне!
                </p>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Здание удаленного склада в Китае"
                    alt="Здание удаленного склада в Китае"
                    className="fancybox-button"
                    href="img/zdanie_udalennogo_sklada_v_kitae.jpg"
                  >
                    <img
                      alt="Здание удаленного склада в Китае"
                      src="img/zdanie_udalennogo_sklada_v_kitae_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h5 className="font-16 font-black pt-10 pb-10 ">
                  Наши услуги на удаленном складе
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>Место для хранения, в
                    том числе негабаритныз грузов.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Объединение груза{" "}
                    <a
                      href="konsolidacia_gruza#kak_postupaet_gruz_na_sklad"
                      title="Как поступает груз на склад и что с ним происходит"
                    >
                      (Консолидация груза)
                    </a>{" "}
                    и компоновка в контейнер
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Проверка груза на
                    качество и уточнение количества товаров от поставщика
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <a
                      href="upakovka_tovara"
                      title="Упаковка и маркировка товара"
                    >
                      Упаковка и маркировка груза
                    </a>{" "}
                    в соответствии с его характеристиками
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Круглосуточная охрана и
                    слежение за состоянием груза
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Разделение и
                    независимая температура в складских отсеках (помещениях)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Складская техника
                    (печать этикеток, принтеры, сканеры, погрузчики)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Хранение ЛЮБЫХ грузов
                  </li>
                </ul>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Погрузчик едет на склад"
                    alt="Погрузчик едет на склад"
                    className="fancybox-button"
                    href="img/pogruzchik_edet_na_sklad.jpg"
                  >
                    <img
                      alt="Погрузчик едет на склад"
                      src="img/pogruzchik_edet_na_sklad_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="line-dashed"></div>
                <h3 className="text-center font-16 font-black pb-10 pt-10">
                  Оптимизированная складская логистика
                </h3>
                <p className="content-text">
                  Наши склады предназначены для хранения больших партий
                  разнородного груза, ожидающего своей отправки со сборной
                  партией грузов от других поставщиков. Независимое регулируемое
                  отопление и кондиционирование для всех типов товаров
                  подверженных температурной зависимости. на нашем складе, ваш
                  груз будет чувствовать себя великолепно. Мы оказываем
                  временное (короткое) и длительное хранение, вне зависимости от
                  времени года и даты транспортировки.
                </p>
                <div className="line-dashed"></div>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-caret-right"></i>Многоярусный склад для
                    товаров
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Наличие многоразовых и
                    одноразовых палет/поддонов
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Консолидационный склад
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Контроль входящих и
                    исходящих товаров
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Регистрация и обработка
                    груза{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Укладка сборного груза
                    ближайшей поставки
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Наружная упаковка
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Этикетирование и
                    маркировка
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Документы для
                    сопровождения груза
                  </li>
                </ul>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Специалисты на складе"
                    alt="Специалисты на складе"
                    className="fancybox-button"
                    href="img/specialisty_na_sklade.jpg"
                  >
                    <img
                      alt="Специалисты на складе"
                      src="img/specialisty_na_sklade_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="text-center font-16 font-black pb-10 pt-20">
                  Профессиональный сервис складского хранения
                </h3>
                <p className="content-text">
                  Наша забота о ваших товарах включается с пересечением линии
                  въезда. Когда товар прибывает на нашу территорию, им начинают
                  заниматься специалисты. Поступление на склад ваших товаров,
                  означает полную ответственность не только за внешний вид, но и
                  за качество.
                </p>
                <p className="content-text">
                  Как правило, наши клиенты , находящиеся в России, доверяют нам
                  посчитать товар прибывший с фабрики или оптового рынка и
                  оценить качество продукции. Мы, взвесим и измерим груз,
                  фотографируем все недостатки и отправляем вам документы и фото
                  по электронной почте для согласования и ждем дальнейших
                  указаний от вас.{" "}
                </p>
                <p className="content-text">
                  Если будет необходимо, мы поменяем бракованный товар
                  оказавшийся в коробках, на изделия хорошего качества. Такой
                  возврат проще сделать сразу в Китае, чем увидеть его в России
                  и отправлять рекламацию будет весьма накладно. Повреждения
                  внешней упаковки товара могут возникнуть при путешествии до
                  нашего склада. мы вас известим обо всем и примем все меры по
                  устранению ущерба, если в нем виновата китайская сторона.
                </p>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Складской рабочий проверяет внешнюю упаковку товара"
                    alt="Складской рабочий проверяет внешнюю упаковку товара"
                    className="fancybox-button"
                    href="img/skladskoy_rabochii_proveriayet_vneshniuyu_upakovku_tovara.jpg"
                  >
                    <img
                      alt="Складской рабочий проверяет внешнюю упаковку товара"
                      src="img/skladskoy_rabochii_proveriayet_vneshniuyu_upakovku_tovara_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text mt-20">
                  Комплектность товара, это "притча во языцах". Опять, же с
                  накладной от производителя или продавца все легко решить на
                  месте.{" "}
                </p>
                <p className="content-text">
                  Если мы знаем каким видом транспорта будет отправлен груз, то
                  подготовим соответствующую упаковку, учитывая характер груза и
                  его чувствительность к агрессивной внешней среде (влажность,
                  холод)
                </p>
                <p className="content-text">
                  Мы можем гарантировать, что вовремя отправим груз, обработав
                  его по всем правилам логистики. Транспортная компания
                  РОСИМПОРТ всегда доставит ваш товар в нужное место и в
                  указанное время.
                </p>
                <div className="col-12 mt-20 mb-30">
                  <blockquote className="yellow">
                    <div className="pb-20">
                      <div className="pull-left pr-30">
                        <img
                          src="img/sotrudnik_chzhou_tsun.jpg"
                          className="blockquote-border"
                          width="200"
                          alt="Руководитель в Китае (г.Пекин) Чжоу Цюнь"
                        />
                      </div>
                      <div className="font-16 text-center pt-0 blockquote-head">
                        Руководитель в Китае (г.Пекин)
                        <strong> Чжоу Цюнь</strong>:
                      </div>
                      <p className="font-12 text-center">
                        Общее руководство китайским отделением
                      </p>
                      <p className="font-16  pt-20">
                        Как специалист по складской логистике, считаю, что наша
                        задача обеспечить: своевременную обработку и сборку
                        товара, его хранение и подготовку к отправке в
                        экологичной надёжной упаковке, без задержки по срокам.
                        Для нас важно четко идентифицировать назначение и
                        характеристики товара и применить к нему наиболее
                        щадящий режим хранения.
                      </p>
                    </div>
                  </blockquote>
                </div>
                <div className="line-dashed"></div>
                <h3 className="text-center font-16 font-black pb-10 pt-10">
                  Безопасность хранения на удаленном складе
                </h3>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Безопасность хранения груза на складе"
                    alt="Безопасность хранения груза на складе"
                    className="fancybox-button pull-left pr-10"
                    href="img/bezopasnost_hranenia_gruza_na_sklade.jpg"
                  >
                    <img
                      alt="Безопасность хранения груза на складе"
                      width="300"
                      src="img/bezopasnost_hranenia_gruza_na_sklade_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Когда ваши товары ожидают отправки на наших складах, мы
                  ежедневно проверяем атмосферные изменения (влажность,
                  температуру) в помещениях склада. Мы соблюдаем все современные
                  технологии для безопасности, ведь наши склады под постоянным
                  контролем опытных сотрудников охраны. Склады оборудованы
                  системами видеонаблюдения и записи круглосуточно с внешних
                  камер наблюдения по периметру территории склада и внутренних
                  камер для слежения за возможными угрозами.
                </p>
                <p className="content-text">
                  Отсутствие безопасности в логистике, может привести к перебоям
                  в цепочке денежных трат, определяющую{" "}
                  <a
                    title="Стоимость доставки груза"
                    href="stoimost_dostavki_gruza"
                  >
                    {" "}
                    общую стоимость перевозки
                  </a>
                  . Это будет не только дорого, но может поставить под угрозу
                  экономическое выживание компании. Надежность услуг
                  логистических компаний важна и в их собственных интересах.
                  Пробелы в безопасности приводят к кражам, ущербу, а значит, к
                  задержкам в поставках, создают значительные риски репутации
                  для поставщика логистических услуг.
                </p>
                <h4 className="text-center font-14 font-black pb-10 pt-10">
                  Новые технические решения, это важный фактор безопасности
                  складского хранения
                </h4>
                <p className="content-text">
                  Требования к мерам безопасности различаются в зависимости от
                  оперативного назначения, стоимости товара или потенциального
                  риска утраты груза. Объединяет все требования то, что все
                  угрозы должны быть предотвращены, насколько это возможно.
                  Должны быть доказаны поступки и найдены виновные. В дополнение
                  к организационным и кадровым мерам, технические решения
                  (современные) являются ключевым элементом концепции складской
                  безопасности.
                </p>
                <div className="line-dashed"></div>
                <figure>
                  {" "}
                  <a
                    data-rel="fancybox-button"
                    title="Автомобили разгружают на складе"
                    alt="Автомобили разгружают на складе"
                    className="fancybox-button"
                    href="img/avtomoboli_razgruzhayut_na_sklade.jpg"
                  >
                    <img
                      alt="Автомобили разгружают на складе"
                      src="img/avtomoboli_razgruzhayut_na_sklade_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <aside>
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
              </aside>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default skladskie_uslugi;
