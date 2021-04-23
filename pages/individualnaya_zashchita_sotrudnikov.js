import Head from "next/head";
import App from "../components/App";

const individualnaya_zashchita_sotrudnikov = () => {
  return (
    <App navLight="stat">
      <Head>
        <title>Индивидуальная защита сотрудников</title>
        <meta
          name="description"
          content="Узнайте, что важно, когда речь идет о средствах индивидуальной защиты, таких как перчатки, средства защиты органов слуха, защитные очки"
        />
        <meta property="og:title" content="Индивидуальная защита сотрудников" />
        <meta
          property="og:description"
          content="Узнайте, что важно, когда речь идет о средствах индивидуальной защиты, таких как перчатки, средства защиты органов слуха, защитные очки"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/individualnaya_zashchita_sotridnikov"
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
            <li>Статьи</li>
            <li className="active">Индивидуальная защита сотрудников</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8">
              <div className="content-page">
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Безопасность сотрудников при погрузке и разгрузке товара на складе"
                    className="fancybox-button"
                    href="img/individualnye_sredstva_zashchity.jpg"
                  >
                    <img
                      alt="Индивидуальная защита сотрудников"
                      src="img/individualnye_sredstva_zashchity_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Индивидуальная защита сотрудников
                  </h1>
                </div>
                <p className="content-text">
                  При перевозке грузов, в том числе и{" "}
                  <a href="dostavka_gruzov_iz_kitaya">
                    доставке грузов из Китая
                  </a>
                  , товары многократно{" "}
                  <a href="skladskie_uslugi">перегружаются на складах</a>. Из
                  них составляются сборные грузы, упаковываются и отправляются в
                  Россию. на таких складах должна быть обеспечена безопасность
                  сотрудников и у каждого должны быть средства индивидуальной
                  защиты от механических повреждений и травм, а так же средства
                  от проникновения мелких частиц и брызг в глаза и легкие
                  работников склада.{" "}
                </p>
                <p className="content-text">
                  Средства индивидуальной защиты - сокращенно СИЗ - обеспечивают
                  защиту работников с головы до ног во время работы, от защиты
                  головы до защиты рук и защиты ног. Он предназначен для
                  предотвращения несчастных случаев и укрепления здоровья
                  работников, что также обязаны делать работодатели.
                </p>
                <p className="content-text">
                  Такие статьи подразделяются на три категории{" "}
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Категория I: защита
                    от незначительных рисков (например, погода или пыль)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Категория II: защита
                    от умеренных рисков (таких как травмы, которые требуют
                    медицинской помощи)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Категория III:
                    защита от очень серьезных рисков для жизни и здоровья людей
                    (например, химических веществ)
                  </li>
                </ul>
                <p className="content-text">
                  В зависимости от этой классификации продукты проходят
                  различные процедуры оценки соответствия. Чем выше категория,
                  тем точнее они должны быть проверены. После того как все
                  испытания пройдены, СИЗ могут иметь маркировку. Это
                  подтверждает, что оно соответствует действующим нормам ТКРФ.
                </p>
                <p className="content-text">
                  Что входит в понятие: Средства Индивидуальной Защиты
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Перчатки (защита
                    рук)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Наушники (защита
                    ушей)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Защитные очки
                    (защита глаз)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Респиратор (защита
                    органов дыхания)
                  </li>
                </ul>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Защитные перчатки"
                    className="fancybox-button"
                    href="img/zashchitnye_perchatki.jpg"
                  >
                    <img
                      alt="Защитные перчатки"
                      src="img/zashchitnye_perchatki_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Защитные перчатки
                  </h3>
                </div>

                <p className="content-text">
                  Будь то логистика, сборка груза или погрузо-разгрузочные
                  работы на складе: руки нуждаются в адекватной защите для
                  различных видов деятельности.{" "}
                </p>
                <p className="content-text">
                  "Трудовой кодекс Российской Федерации" описывает общие
                  требования к защитным перчаткам. В дополнение к обработке и
                  минимальным размерам, это также включает требования к
                  маркировке перчаток. Таким образом, необходимо указать, кто
                  является производителем, какого размера и свойств имеет
                  перчатка.
                </p>
                <p className="content-text">
                  В связи с базовым стандартом, есь испытания прочности перчаток
                  СИЗ категории II и III. Текстиль тестируется в соответствии со
                  следующими механическими критериями:
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Устойчивость к
                    истиранию - с помощью наждачной бумаги
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Устойчивость к
                    порезам - с помощью вращающегося дискового ножа, во втором
                    тесте - с длинным прямым лезвием
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Сопротивление к
                    разрыву - приложив усилие к порезанной перчатке
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Сопротивление
                    проколу - с помощью гвоздя
                  </li>
                </ul>
                <p className="content-text">
                  Шкала от 0 до 4 - за исключением сопротивления порезу -
                  показывает, как работает соответствующая перчатка. Если ранее
                  использовался рейтинг от 0 до 5, то теперь существует другой
                  метод испытаний. Он обеспечивает еще более точные результаты,
                  особенно при высоком уровне защиты от порезов. Однако,
                  поскольку существуют два разных метода испытаний, результаты
                  не могут быть сопоставлены. В соответствующих категориях, вы
                  можете сделать тест для разных перчаток и решить, какое
                  изделие лучше подходит для применения у вас.
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Защитные наушники"
                    className="fancybox-button"
                    href="img/zashchitnye_naushniki.jpg"
                  >
                    <img
                      alt="Защитные наушники"
                      src="img/zashchitnye_naushniki_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Наушники - защита ушей
                  </h3>
                </div>
                <p className="content-text">
                  Защита органов слуха ослабляет источники шума, это важная
                  защита при работе в шумной обстановке. С точки зрения охраны
                  здоровья, существуют четкие правила, которые регламентируют
                  максимальный период времени, в течение которого сотрудники
                  могут подвергаться воздействию сильного звука (шума) и до
                  какого уровня децибел. Если вы снизите уровень поступающего в
                  уши звука с помощью правильной защиты, то сотрудник может
                  дольше работать в шумных местах.
                </p>
                <p className="content-text">
                  Будь то наушники или затычки для ушей - российские стандарты
                  определяют, какие требования безопасности должны выполняться в
                  защитной рабочей одежде.
                </p>
                <p className="content-text">
                  Кодекс определяет значение изоляции в единицах (децибелах),
                  которыми понижается уровень звука. Частотный диапазон, в
                  котором действует защита, тоже имеет решающее значение. В
                  зависимости от типа оборудования защита по-разному уменьшает
                  децибелы в диапазоне высокой частоты, средней частоты или
                  низкой частоты
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Защитные очки"
                    className="fancybox-button"
                    href="img/zashchitnye_ochki.jpg"
                  >
                    <img
                      alt="Защитные очки"
                      src="img/zashchitnye_ochki_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Защитные очки
                  </h3>
                </div>
                <p className="content-text">
                  Лицо и особенно глаза должны быть защищены. В зависимости от
                  конструкции, очки защищают от летящих частиц, таких как пыль,
                  стружка или брызги . Основные требования для этого типа
                  средств индивидуальной защиты, чтобы мельчайшие частица не
                  попадали в глаза.
                </p>
                <p className="content-text">
                  Пробы в случае механических воздействий, является неотъемлемой
                  частью тестирования очков. Чтобы определить механическую
                  прочность, смотровые панели бомбардируют стальным шариком. В
                  зависимости от скорости удара, которую выдерживают очки, им
                  присваивается одна из следующих маркировок.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>S: повышенная
                    механическая прочность (испытание на падение - ударная
                    скорость 5,1 м / с)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>F: удар с низкой
                    энергией (скорость удара 45 м / с)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>B: воздействие
                    средней энергии (скорость удара 120 м / с)
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>A: удар высокой
                    энергии (скорость удара 190 м / с)
                  </li>
                </ul>
                <p className="content-text">
                  Максимальные значения различаются в зависимости от типа очков.
                  Это касается пары очков с меткой F, очков с меткой B. Кроме
                  того, очки могут защищать от ультрафиолетового излучения.
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Защита рта и органов дыхания"
                    className="fancybox-button"
                    href="img/zashchita_rta_i_organov_dyhaniya.jpg"
                  >
                    <img
                      alt="Защита рта и органов дыхания"
                      src="img/zashchita_rta_i_organov_dyhaniya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Защита рта и органов дыхания
                  </h3>
                </div>
                <p className="content-text">
                  {" "}
                  Маска для лица удерживает капли жидкости или крупные частицы,
                  которые не попадают в легкие. Этот тип защиты рта и носа
                  используется в гигиенически чувствительных областях труда, в
                  нашем случае это пыль при погрузке{" "}
                  <a href="konsolidacia_gruza">консолидационного груза</a>,
                  щепки от ящиков при упаковке груза.
                </p>
                <p className="content-text">
                  Чем выше производительность фильтра и ниже сопротивление
                  дыханию, тем лучше защита и комфорт при ношении.
                </p>
                <p className="content-text">
                  Респираторная защита фильтрует воздух и уменьшает опасность,
                  например, не допускает попадание мелких частиц пыли, которые
                  могут проникнуть в легкие, если вы без маски.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>защищает от
                    нетоксичной пыли
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>не допускает вредную
                    пыль, дым и аэрозоли
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>обеспечивает
                    высочайшую защиту от токсичной пыли
                  </li>
                </ul>
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

export default individualnaya_zashchita_sotrudnikov;
