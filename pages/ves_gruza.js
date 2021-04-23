import Head from "next/head";
import App from "../components/App";

const ves_gruza = () => {
  return (
    <App navLight="gruz">
      <Head>
        <title>Вес груза и грузовые классы</title>
        <meta
          name="description"
          content="Вес груза и как рассчитать вес груза для погрузки в морские и автомобильные контейнтеры 20 и 40 футов"
        />
        <meta property="og:title" content="Вес груза и грузовые классы" />
        <meta
          property="og:description"
          content="Вес груза и как рассчитать вес груза для погрузки в морские и автомобильные контейнтеры 20 и 40 футов"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/ves_gruza" />
        <script src="https://rosimport.ru/calculator/email-decode.min.js"></script>
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
            <li className="active">Вес груза и грузовые классы</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-12 col-sm-12">
              <div className="content-page">
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Вес груза и грузовые классы"
                    className="fancybox-button"
                    href="img/ves_gruza_gruzovye_klassy.jpg"
                  >
                    <img
                      alt="Вес груза и грузовые классы"
                      src="img/ves_gruza_gruzovye_klassy_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Вес груза и грузовые классы
                  </h1>
                </div>
                <h5 className="text-center font-28 mb-20">
                  Калькулятор плотности груза{" "}
                </h5>
                <p>
                  Объёмный веc, это плотность груза основанная на сложении
                  габаритов объекта, независимо от его формы и его фактического
                  веса. Объект меньшей плотности займет больший объем при равном
                  весе с более плотным объектом. Пример: у вас тонна хлопка,
                  которая занимает все место в амбаре. Вы сомнете его и упакуете
                  в тюк. В тюке, хлопок будет занимать меньше места по
                  габаритам, но вес останется прежним.
                </p>
                <h3 className="text-center font-20 font-black pt-5">
                  Как рассчитать плотность груза?
                </h3>
                <p>
                  Калькулятор плотности груза для авиаперевозок, основан на
                  измеренном по объему весе, также известном как объемный вес.
                </p>
                <p>
                  {" "}
                  Авиаперевозки всегда взимают плату за килограмм или фунт, будь
                  то фактический или объемный вес.
                </p>
                <div className="row">
                  <div className="col-md-12 widget-contact p-10  track-login">
                    <form
                      name
                      action="http://office.rockitcargo.com/forum/login_user.asp"
                      method="post"
                      className="form-transparent"
                    >
                      <div className="row">
                        <div className="col-md-6 mt-xs">
                          <div className="row  mb-30">
                            <div className="col-md-12">
                              <label>Выберите метрическую систему:</label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="radio"
                                name="dimmeas"
                                id="rad1"
                                defaultChecked="checked"
                                // checked="checked"
                              />{" "}
                              <label className="radiobox">
                                Метрическая (кг, см)
                              </label>{" "}
                              <br />
                              <input
                                type="radio"
                                name="dimmeas"
                                id="rad2"
                              />{" "}
                              <label className="radiobox">
                                Империал (фунт, дюйм)
                              </label>
                            </div>
                          </div>
                          <div className="row  mb-30">
                            <div className="col-md-12">
                              <label>
                                Длина<span className="cm"> см.</span>:{" "}
                              </label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                name="lgth"
                                id="lgth"
                              />
                            </div>
                          </div>
                          <div className="row  mb-30">
                            <div className="col-md-12">
                              <label>
                                Ширина<span className="cm"> см.</span>:
                              </label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                name="wdth"
                                id="wdth"
                              />
                            </div>
                          </div>
                          <div className="row mb-30">
                            <div className="col-md-12">
                              <label>
                                Высота<span className="cm"> см.</span>:
                              </label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                name="hght"
                                id="hght"
                              />
                            </div>
                          </div>
                          <div className="row mb-30">
                            <div className="col-md-12">
                              <label>
                                Фактический вес:<span className="kg"> кг.</span>
                                :
                              </label>
                            </div>
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                name="wght"
                                id="wght"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 mb-0">
                              <input
                                type="button"
                                className="btn btn-primary btn-block btn-calculator"
                                name="cmdSubmit"
                                value="Рассчитать плотность груза"
                              />
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="mt-xs calculation-result-outer"
                            id="result"
                            style={{ display: "none" }}
                          >
                            <div className="calculation-result">
                              <p className="calculation-result-title">
                                Результат:
                              </p>
                              <p>
                                <span id="size">
                                  Размер груза: 50 X 40 X 40, cm
                                </span>
                                <br />
                                <span id="fmass">Фактический вес: 10, kg</span>
                                <br />
                                <span id="vmass">
                                  Плотность груза: 66666666.67
                                </span>
                                <br />
                                <span id="pay">
                                  Вы платите за объем: 66666666.67, kg
                                </span>
                                <br />
                              </p>
                            </div>
                          </div>
                          <h3 className="text-center font-20 font-black pt-5">
                            Что такое плотность груза?
                          </h3>
                          <p>
                            Плотность товаров в вашей коробке означает,
                            насколько она тяжела по сравнению с количеством
                            места, которое занимает фактически.
                          </p>
                          <p>
                            Все товары имеют различный вес и объемы. Некоторые
                            весят много и занимают много места, а другие легкие
                            и маленькие. Следовательно, важно правильно
                            определить плотность груза, чтобы вы могли понять,
                            сколько вы будете платить за перевозку.{" "}
                          </p>
                          <figure>
                            <a
                              data-rel="fancybox-button"
                              title="Плотность груза"
                              className="fancybox-button pull-right pl-10"
                              href="img/plotnost_gruza.jpg"
                            >
                              <img
                                alt="Плотность груза"
                                src="img/plotnost_gruza_sm.jpg"
                                className="img-responsive"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <p>
                  Теперь, когда у вас есть плотность груза вашей посылки, вы
                  можете легко определить, к какому классу она относится.{" "}
                </p>
                <h3 className="text-center font-20 font-black pt-20 pb-30">
                  Как определяется класс фрахта?
                </h3>
                <figure className="pull-left pr-20">
                  <img
                    alt="Фактический вес против объемного веса"
                    width="300"
                    src="img/fakticheskiy_ves_protiv_obiemnogo_vesa.png"
                    className="img-responsive"
                  />
                </figure>
                <p>
                  Грузовой класс определяется специальным кодом грузовой
                  классификации и имеет четыре характеристики классифицируемого
                  груза.
                </p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Плотность груза </strong> относится к весу упаковки
                    относительно количества места, которое она занимает.
                    Предметы высокой плотности относятся к более низкому классу
                    и более дешевы при транспортировке.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Простота в обращении</strong> учитывает размер,
                    форму и хрупкость груза. Предметы, требующие особого
                    внимания (например, опасные или неправильной формы),
                    относятся к более высокому классу и более дороги при
                    транспортировке.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Возможность складирования (укладка)</strong>: как
                    ваш груз может быть складирован совместно с другим грузом в
                    транспортном средстве. То, как груз упакован и безопасно ли
                    его отправлять с другими пакетами, влияет на ваши расходы по
                    доставке.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Ответственность:</strong> включает скоропортящийся
                    товар или возможность кражи груза. Груз, который может
                    нанести ущерб во время перевозки, попадает в более высокий
                    класс из-за большего риска.
                  </li>
                </ul>
                <h3 className="text-center font-20 font-black pt-20 pb-30">
                  Фактический вес против объемного веса
                </h3>
                <p>
                  Если вы планируете отгрузку FCL (полная загрузка контейнера),
                  то вес обычно не учитывается при расчете стоимости. Пока ваш
                  груз находится в пределах допустимого веса, тогда стоимость
                  перевозки FCL будет зависеть от способа доставки и пути вашего
                  груза.
                </p>
                <p>
                  Однако, при небольших партиях отправки, вес может стать важным
                  фактором при расчете стоимости доставки.{" "}
                </p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Фактический вес</strong> - вес груза, обычно
                    измеряется в килограммах (кг)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>
                    <strong>Объемный вес</strong> - пространство, занимаемое
                    грузом, обычно измеряется в кубических метрах (куб.м)
                  </li>
                </ul>
                <h3 className="text-center font-20 font-black pt-20 pb-30">
                  Вес груза в морских перевозках
                </h3>
                <figure className="pull-right">
                  <a
                    data-rel="fancybox-button"
                    title="Вес груза в морских перевозках"
                    className="fancybox-button pull-right pl-10"
                    href="img/ves_gruza_v_morskih_transportirovkah.jpg"
                  >
                    <div className="pictext">
                      <img
                        alt="Вес груза в морских перевозках"
                        width="600"
                        src="img/ves_gruza_v_morskih_transportirovkah_sm.jpg"
                        className="img-responsive"
                      />
                      <span>Вес груза в морских перевозках</span>
                    </div>
                  </a>
                </figure>
                <p>
                  Если вы{" "}
                  <a href="morskaya_transportirovka_gruzov">
                    отправляете морем контейнер
                  </a>{" "}
                  LCL (меньше, чем полная загрузка контейнера), то экспедитор
                  рассчитает вес груза («вес») и кубический объем груза
                  («мера»). Они будут сравниваться на основе того, что 1CBM =
                  1000 кг, а большее из двух будет умножено на норму
                  грузоотправителя на кг.
                </p>
                <p>Например:</p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Вы отправляете груз
                    весом 200 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Объем (длина х ширина х
                    ширина) груза составляет 1,44 куб.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Чтобы сделать эти два
                    измерения сопоставимыми, необходимо преобразовать вес в
                    десятичное число в 1000 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Это преобразование
                    делает вес груза 0,200 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>44 больше чем 0,200;
                    следовательно, кубический объем - это показатель,
                    используемый для расчета платы за фрахт.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Если плата за перевозку
                    составляет £50 x вес / м (вес или мера), стоимость этого
                    груза будет 1,44 x 50 = £72.
                  </li>
                </ul>
                <p>
                  Полезно знать, как оценивается ваш груз. Это может повлиять на
                  способ его упаковки для отправки. Например, если ваш груз
                  рассчитывается по весу, а не по объему, вы можете упаковать
                  его так, чтобы он занимал больше места и был бы лучше защищен
                  во время перевозки. Пока вес груза остается прежним (и
                  остается выше, чем объемный вес), стоимость доставки меняться
                  не должна.
                </p>
                <h3 className="text-center font-20 font-black pt-20 pb-30">
                  Вес груза в автомобильной доставке
                </h3>
                <figure className="pull-right">
                  <a
                    data-rel="fancybox-button"
                    title="Вес груза в автомобильной доставке"
                    className="fancybox-button pull-right pl-10"
                    href="img/ves_gruza_avtomobilnye_perevozki.jpg"
                  >
                    <div className="pictext">
                      <img
                        alt="Вес груза в автомобильной доставке"
                        width="600"
                        src="img/ves_gruza_avtomobilnye_perevozki_sm.jpg"
                        className="img-responsive"
                      />
                      <span>Вес груза в автомобильной доставке</span>
                    </div>
                  </a>
                </figure>
                <p>
                  Как и в случае{" "}
                  <a
                    href="morskaya_transportirovka_gruzov"
                    data-toggle="tooltip"
                    data-original-title="Доставка морем из Китая"
                  >
                    {" "}
                    с морскими перевозками{" "}
                  </a>
                  , когда вы{" "}
                  <a
                    href="avtomobilnaya_dostavka_gruzov_iz_kitaya"
                    data-toggle="tooltip"
                    data-original-title="Автомобильная доставка из Китая"
                  >
                    доставляете товар автомобильным транспортом{" "}
                  </a>
                  . Грузоотправитель будет использовать для расчета стоимости из
                  фактического веса и объемного веса. Однако есть некоторые
                  различия.
                </p>
                <p>
                  При автомобильных перевозках - объем (куб.м) умножается на
                  стандартное кратное число - обычно 333 кг - для создания
                  объемного веса. Затем стоимость рассчитывается по скользящей
                  шкале с фиксированной ставкой и будет зависеть от того, к
                  какой категории тарифа относится более высокий фактический вес
                  и объемный вес.
                </p>
                <p>Например:</p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Вы отправляете груз
                    весом 400 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Кубический объем (длина
                    х ширина х ширина) груза составляет 0,769 куб.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Умножьте кубический
                    объем на 333 кг, чтобы получить 0,769 х 333 кг = 256 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>400 выше 256; поэтому
                    фактический вес груза используется для расчета стоимости
                    фрахта в зависимости от того, где он находится на скользящей
                    шкале сборов.
                  </li>
                </ul>
                <p>
                  Единственным исключением из этого правила является то, что вы
                  отправляете товары, которые нельзя штабелировать, например,
                  что-то громоздкое или слишком тяжелое для укладки поверх
                  другого груза. В этом случае с вас будет взиматься плата, как
                  если бы ваш груз занимал бы пространство над ним, используя
                  размеры вашего основного поддона и стандартные размеры
                  прицепа, чтобы рассчитать «грузоподъемность» вашего груза в
                  кг.
                </p>
                <h3 className="text-center font-20 font-black pt-20 pb-30">
                  Вес груза в авиаперевозках
                </h3>
                <figure className="pull-right">
                  <a
                    data-rel="fancybox-button"
                    title="Вес груза в авиаперевозках"
                    className="fancybox-button pull-right pl-10"
                    href="img/ves_gruza_aviaperevozka.jpg"
                  >
                    <div className="pictext">
                      <img
                        alt="Вес груза в авиаперевозках"
                        width="600"
                        src="img/ves_gruza_aviaperevozka_sm.jpg"
                        className="img-responsive"
                      />
                      <span>Вес груза в авиаперевозках</span>
                    </div>
                  </a>
                </figure>
                <p>
                  Авиаперевозки, как и все, используют вес и объем, чтобы
                  рассчитать стоимость доставки. Но, как вы, наверное, уже
                  поняли, нет ничего проще, когда речь идет о стоимости фрахта!
                  Если вы отправляете воздушным транспортом, стандартный
                  коэффициент деления 6000 также вступит в игру.
                </p>
                <p>Например:</p>
                <ul className="list-unstyled margin-bottom-20">
                  <li>
                    <i className="fa fa-caret-right"></i>Вы отправляете груз
                    весом 0,4 кг.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Кубический объем (длина
                    х ширина х ширина) составляет 12000 кубических сантиметров
                    (кубических сантиметров)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Кубический объем затем
                    делится на 6000, чтобы получить 12000/6000 = 2 кг. 2 кг -
                    это объемный вес груза.
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Поскольку объемный вес
                    превышает фактический вес, объемный вес используется для
                    расчета стоимости (обычно в расчете на кг).
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Таким образом, если
                    плата за перевозку составляет 10 фунтов стерлингов за кг,
                    стоимость отправки этого груза составляет 2 x 10 фунтов
                    стерлингов = 20 фунтов стерлингов.
                  </li>
                </ul>
                <p>
                  Чтобы еще больше усложнить задачу, некоторые перевозчики
                  отклоняются от стандартного делительного коэффициента 6000 -
                  часто вместо этого используют 5000.
                </p>
                <p>
                  Если от прочтения этой статьи у вас заболела голова, вряд ли
                  вам понравится перспектива расчета и сравнения различных
                  методов расчета стоимости самостоятельно. Росимпорт поможет
                  сделать вашу жизнь намного проще. Наши агенты по обслуживанию
                  клиентов являются экспертами по всем вопросам доставки и будут
                  рады
                  <a
                    href="stoimost_dostavki_gruza"
                    data-toggle="tooltip"
                    data-original-title="Доставка морем из Китая"
                  >
                    {" "}
                    рассчитать стоимость отправки вашего груза{" "}
                  </a>{" "}
                  различными способами, чтобы вы могли принять обоснованное
                  решение - без головной боли - или калькулятор!
                </p>
                <h4 className="text-center font-20 font-black pt-5">
                  Таблица грузовых классов
                </h4>
                <p>
                  Существует 18 классов грузов: от 50 до 500. Начиная с 50
                  класса, это тяжелые, но компактные предметы, которые являются
                  наименее дорогими при транспортировке. Далее, предметы
                  становятся менее плотными и более подверженными повреждениям,
                  что делает их более дорогими при транспортировке.
                </p>
                <div className="responsive">
                  <table className="table table-bordered  table-schedule mt-30">
                    <thead>
                      <tr></tr>
                      <tr>
                        <th className="col-xs-2">Грузовой класс</th>
                        <th className="col-xs-2">
                          Плотность груза (фунты на кубический фут)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>50</td>
                        <td>Более 50</td>
                      </tr>
                      <tr>
                        <td>55</td>
                        <td>35 - 50</td>
                      </tr>
                      <tr>
                        <td>60</td>
                        <td>30 - 35</td>
                      </tr>
                      <tr>
                        <td>65</td>
                        <td>22,5 - 30</td>
                      </tr>
                      <tr>
                        <td>70</td>
                        <td>15 - 22,5</td>
                      </tr>
                      <tr>
                        <td>77,5</td>
                        <td>13,5 - 15</td>
                      </tr>
                      <tr>
                        <td>85</td>
                        <td>12 - 13,5</td>
                      </tr>
                      <tr>
                        <td>92,5</td>
                        <td>10,5 - 12</td>
                      </tr>
                      <tr>
                        <td>100</td>
                        <td>9 - 10,5</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>8 - 9</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>7 - 8</td>
                      </tr>
                      <tr>
                        <td>150</td>
                        <td>6 - 7</td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>5 - 6</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>4 - 5</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>3 - 4</td>
                      </tr>
                      <tr>
                        <td>300</td>
                        <td>2 - 3</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>1 - 2</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>Менее 1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Чтобы стандартизировать ценообразование и не напугать клиентов
                  сильно различающимися тарифами на перевозку, ассоциации разных
                  стран автомобильного грузового движения создают классы грузов,{" "}
                  <a
                    href="avtomobilnaya_dostavka_gruzov_iz_kitaya"
                    title="Автомобильная доставка груза из Китая"
                  >
                    перевозимых автотранспортом
                  </a>
                </p>
                <h3 className="text-center font-20 font-black pt-5">
                  Список грузовых классов
                </h3>
                <p>
                  Различные товары имеют различную комбинацию этих четырех
                  факторов, и коды NMFC делят их на 18 классов, пронумерованных
                  от 50 до 500.
                </p>
                <p>
                  В таблице ниже вы увидите образцы товаров, которые обычно
                  встречаются в каждом классе.
                </p>
                <div className="responsive">
                  <table className="table table-bordered  table-schedule mt-30">
                    <thead>
                      <tr></tr>
                      <tr>
                        <th className="col-xs-2">Имя класса</th>
                        <th className="col-xs-4">Категория товара</th>
                        <th className="col-xs-1">
                          Диапазон веса на кубический фут
                        </th>
                        <th className="col-xs-1">Стоимость</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>Класс 50 - Чистая перевозка</td>
                        <td>
                          Устанавливается на стандартный термоусадочный поддон
                          4X4, обвязочный материал, муку
                        </td>
                        <td>Более 50 фунтов.</td>
                        <td>низший</td>
                      </tr>
                      <tr>
                        <td>Класс 55</td>
                        <td>
                          Кирпичи, цемент, строительный раствор, паркет, тряпки
                          или тряпки, журналы, бумага для копирования
                        </td>
                        <td>35 - 50 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 60</td>
                        <td>
                          Автомобильные аксессуары и автозапчасти, стальные
                          тросы, использованные шины, брусчатка, стекло,
                          молдинги
                        </td>
                        <td>30 - 35 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 65</td>
                        <td>
                          Автозапчасти и аксессуары, напитки в бутылках, книги в
                          коробках, конвейеры, шоколад в коробках, электрические
                          шнуры, плитка
                        </td>
                        <td>22,5 - 30 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 70</td>
                        <td>
                          Газеты, деревянные карандаши, машины, шкатулки, мебель
                          в разобранном виде, продукты питания, автомобильные
                          двигатели
                        </td>
                        <td>15 - 22,5 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 77,5</td>
                        <td>
                          Шины, сантехника, одежда, рубашки / штаны,
                          снегоочистители,
                        </td>
                        <td>13,5 - 15 фунтов.</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 85</td>
                        <td>
                          Ящики, коробки передач, сцепления, двери, CD / DVD,
                          мотоциклетный двигатель
                        </td>
                        <td>12 - 13,5 фунтов</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Класс 92,5</td>
                        <td>
                          Компьютеры, мониторы, холодильники и морозильники,
                          газовые генераторы, шкафы, киоски или банкоматы
                        </td>
                        <td>10,5 - 12 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 100</td>
                        <td>
                          Вакуум, чехлы для лодок и автомобилей, холст, винные
                          шкафы, шкатулки
                        </td>
                        <td>9 - 10,5 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 110</td>
                        <td>
                          Шкафы, обрамленные картины и произведения искусства,
                          настольная пила, металлообработка
                        </td>
                        <td>8 - 9 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 125</td>
                        <td>
                          Мелкая бытовая техника, картины / плакаты в коробках,
                          выставочные стенды, торговые автоматы
                        </td>
                        <td>7 - 8 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 150</td>
                        <td>
                          Квадроциклы, водные мотоциклы, мотоциклы, сборная
                          деревянная мебель, рабочие места
                        </td>
                        <td>6 - 7 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 175</td>
                        <td>
                          Одежда, кушетки, мягкая мебель, металлические шкафы,
                        </td>
                        <td>5 - 6 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 200</td>
                        <td>
                          Телевизоры, детали самолетов, алюминиевый стол,
                          упакованные матрасы, снегоходы
                        </td>
                        <td>4 - 5 фунтов</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 250</td>
                        <td>
                          Бамбуковая мебель, капоты двигателя, матрасы и
                          пружины, разобранный диван, плазменный телевизор
                        </td>
                        <td>3 - 4 фунта</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 300</td>
                        <td>
                          Деревянные шкафы, столы, стулья, модельные лодки,
                          байдарки / каноэ, шасси
                        </td>
                        <td>2 - 3 фунта</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Класс 400</td>
                        <td>Рога оленя</td>
                        <td>1 - 2 фунта</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          Класс 500 (низкая плотность или высокая стоимость
                          груза)
                        </td>
                        <td>Пакеты с золотым песком</td>
                        <td>Менее 1 фунта</td>
                        <td>Высокая стоимость</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default ves_gruza;
