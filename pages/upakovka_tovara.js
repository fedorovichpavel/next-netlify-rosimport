import Head from "next/head";
import App from "../components/App";

const upakovka_tovara = () => {
  return (
    <App navLight="uslugi">
      <Head>
        <title>Упаковка товара</title>
        <meta
          name="description"
          content="Руководство об упаковке товара в международных грузоперевозках"
        />
        <meta property="og:title" content="Упаковка и маркировка товара" />
        <meta
          property="og:description"
          content="Руководство о том, как ваши товары должны быть упакованы и маркированы"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta
          property="og:url"
          content="https://rosimport.ru/upakovka_tovara"
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
            <li className="active">Упаковка и маркировка товара</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8">
              <div className="content-page">
                <figure>
                  <img
                    alt="Упаковка товара"
                    src="img/upakovka_tovara.jpg"
                    className="img-responsive"
                  />
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Упаковка товара
                  </h1>
                </div>
                <p className="content-text">
                  При установке дополнительной упаковки перед перевозкой, мы
                  следим за тем, чтобы она плотно прилегала к поддону и не
                  создавала помех, которые могут возникнуть при{" "}
                  <a href="konteinery">транспортировке в контейнере</a>. В
                  случае с коробками для негабаритных товаров, мы разрабатываем
                  безопасную и индивидуальную транспортную упаковку. Её
                  изготавливают недорого, наши китайские партнеры.
                </p>
                <p className="content-text">
                  В такой наружной упаковке, ваши коробки безопасно
                  транспортируются в больших контейнерах к месту назначения.
                  Упаковка точно подобрана для определенного типа груза и
                  поэтому очень эффективна для путешествия с перегрузками на
                  смежные виды транспорта.{" "}
                </p>
                <p className="content-text">
                  <a
                    title="Доставка грузов из Китая"
                    href="dostavka_gruzov_iz_kitaya"
                  >
                    Товары перевозятся из Китая
                  </a>{" "}
                  и через другие национальные границы, где необходимо учитывать
                  множество факторов, в том числе правильную упаковку. Благодаря
                  большим расстояниям и многочисленным воздействиям, она
                  гарантирует сохранность товаров и поэтому имеет большое
                  значение. Что следует учитывать при выборе упаковки?
                </p>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Правильная упаковка груза"
                    className="fancybox-button"
                    href="img/pravilnaya_upakovka_gruza.jpg"
                  >
                    <img
                      alt="Правильная упаковка груза"
                      src="img/pravilnaya_upakovka_gruza_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-10">
                    Правильная упаковка груза
                  </h3>
                </div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Правильная упаковка и маркировка груза"
                    className="fancybox-button pull-right pr-10"
                    href="img/pravilnaya_upakovka_i_markirovka_gruza.jpg"
                  >
                    <img
                      alt="Правильная упаковка и маркировка груза"
                      width="300"
                      src="img/pravilnaya_upakovka_i_markirovka_gruza_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text pt-10">
                  Ваш товар подвержен значительным колебаниям температуры во
                  время транспортировки. Товары перевозятся через различные
                  климатические зоны. Перепад температур при погрузке и внутри
                  транспортного средства, создает влажность внутри упаковки.
                  Товары должны быть защищены от влажности, чтобы не
                  подвергнуться коррозии. Соответствующая экологическая упаковка
                  предотвращает повреждения и коррозию, ржавчину на металле,
                  которая вызвана реакцией влаги и кислорода.{" "}
                </p>
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
                  <h3 className="text-center font-20 font-black pt-10">
                    Как ваши товары должны быть упакованы для перевозки из Китая
                  </h3>
                </div>
                <h4 className="font-16 font-black pt-20">Правила упаковки</h4>
                <p className="content-text pt-10">
                  Каждая партия требует полный адрес и данные отправителя от
                  клиента на упакрвке. Он не должен содержать каких-либо
                  дополнений, которые могут привести к недоразумениям, усложнить
                  или сделать невозможным обработку груза.{" "}
                </p>
                <p className="content-text">
                  Товар должен быть надежно упакован с точки зрения содержимого
                  типа груза, характера отправки и объема, чтобы исключить
                  повреждение во время транспортировки и защитить содержимое от
                  потерь и повреждений. В зависимости от выбранного способа
                  доставки, упаковка должна иметь подходящий внешний материал,
                  поддон, подходящий внутренний материал и надежное крепление на
                  поддоне. Например, груз, который является тяжелым (более 50
                  кг) или слишком громоздким, должен находиться на специальном
                  поддоне, так как один человек может не сможет погрузить его на
                  транспортное средство.
                </p>
                <h4 className="font-16 font-black pt-20">Внешняя упаковка</h4>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Внешняя упаковка"
                    className="fancybox-button pull-left pr-10"
                    href="img/vneshniaya_upakovka_tovara.jpg"
                  >
                    <img
                      alt="Внешняя упаковка"
                      width="300"
                      src="img/vneshniaya_upakovka_tovara.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text pt-10">
                  Внешняя упаковка должна соответствовать содержимому ящика
                  таким образом, чтобы упакованные предметы не выпали, не
                  повредили другие грузы и не повредились сами. Внутренняя
                  упаковка должна быть дополнена наполнителями для заполнения
                  пустого пространства. В случае чувствительных к
                  транспортировке предметов, упаковка должна быть адаптирована.
                  Должна учитывать характер товара, его количество и другие
                  особенности содержимого в отдельных случаях. Упаковка должна
                  надежно защищать содержимое груза от ударов, которым товар
                  подвергается во время транспортировки: сдавливание, падение,
                  вибрация или температурное воздействие.
                </p>
                <p className="content-text">
                  Внешняя упаковка должна быть достаточно прочной и устойчивой к
                  давлению. Она должна быть достаточно большой, чтобы обеспечить
                  пространство для внутренних упаковочных деталей. Она не должна
                  позволить вычислить сведения о типе и стоимости товара.
                </p>
                <p className="content-text">
                  Для фиксации упаковки необходимо использовать стойкие к
                  внешним воздействиям материалы: устойчивые к разрывам стяжки,
                  самоклеящиеся пластиковые упаковочные ленты, натяжные ремни
                  или армированные волокном влажные клейкие ленты.
                </p>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Инспектор поверяет упаковку товара"
                    className="fancybox-button"
                    href="img/inspektor_proveriaet_upakovku_tovara.jpg"
                  >
                    <img
                      alt="Инспектор поверяет упаковку товара"
                      src="img/inspektor_proveriaet_upakovku_tovara_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-10">
                    Инспекция по проверке упаковки
                  </h3>
                </div>
                <img
                  alt="Проверка упаковки"
                  src="img/proverka_upakovki.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  При проведении проверки загрузки контейнера, инспекторы
                  используют контрольный список контроля качества упаковки,
                  который состоит из стандартных международных, общепризнанных
                  критериев и стандартов упаковки местных компаний продавцов или
                  перевозчиков.
                </p>
                <p className="content-text">
                  Инспекторы проверяют, что содержимое коробок содержит
                  содержит: Товары и точное количество товаров в коробке.
                </p>
                <img
                  alt="Проверка качества материала упаковки"
                  src="img/proverka_kachestva_materiala_upakovki.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Инспекторы случайным образом выбирают коробки и просматривают
                  единицу хранения (SKU), включенную в коробку.
                </p>
                <p className="content-text">
                  Затем они подсчитывают количество SKU, чтобы определить,
                  является ли количество продуктов точным или нет.
                </p>
                <div className="line-dashed"></div>
                <h4 className="text-center font-16 font-black pt-10">
                  Используются хорошие упаковочные материалы
                </h4>
                <img
                  alt="Используются хорошие упаковочные материалы"
                  src="img/upakovochnye_prochnye_materialy.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Упаковка должна быть достаточно прочной, чтобы выдержать любую
                  погоду, непритязательные условия хранения и грубое обращение
                  при транспортировке и перегрузке. Как правило, упаковочные и
                  транспортировочные коробки обычно состоят из трех слоев,
                  каждый из которых должен быть проверен.
                </p>
                <div className="line-dashed"></div>
                <h4 className="text-center font-16 font-black pt-10">
                  Первичная упаковка
                </h4>
                <img
                  alt="Первичная упаковка"
                  src="img/pervichnaya_upakovka.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Это внутренняя упаковка, которая контактирует непосредственно
                  с самим товаром
                </p>
                <p className="content-text">
                  Например, первичной упаковкой для фармацевтических препаратов,
                  является бутылка или полоска, содержащая лекарственное
                  средство. Другие примеры включают блистерную упаковку,
                  грейферную упаковку, термоусадочную пленку, картон, картон и
                  пакеты с единичной дозой.
                </p>
                <div className="line-dashed"></div>
                <h4 className="text-center font-16 font-black pt-10">
                  Вторичная упаковка
                </h4>
                <img
                  alt="Вторичная упаковка"
                  src="img/vtorichnaya_upakovka.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Эта упаковка находится сразу за первичной упаковкой, окружает
                  и защищает её. Используется для защиты первичной упаковки или
                  группы первичных упаковок, она называется вторичной упаковкой.
                  Она должна быть более плотной и жесткой. Пример: картонные
                  коробки и картонные или пластиковые ящики.
                </p>
                <div className="line-dashed"></div>
                <h4 className="text-center font-16 font-black pt-10">
                  Третичная упаковка
                </h4>
                <img
                  alt="Третичная упаковка"
                  src="img/tretichnaya_upakovka.png"
                  width="128"
                  className="pull-left pr-10"
                />
                <p className="content-text">
                  Третичная упаковка используется для хранения групп или
                  штабелей картонных коробок, таких как поддоны для
                  транспортировки.
                </p>
                <p className="content-text">
                  Компания-перевозчик должна знать, будут ли грузы на поддонах
                  или будут идти смешанными партиями, а затем определить
                  наилучший упаковочный материал для использования.
                </p>
                <p className="content-text">
                  Третичные упаковочные материалы: листы и коробки из
                  гофрированного картона, пузырчатая пленка, промышленная
                  термоусадочная пленка, полиэтилен и алюминиевая фольга
                </p>
                <div className="line-dashed"></div>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Склад для упакованных грузов"
                    className="fancybox-button"
                    href="img/sklad_dlia_upakovannyh_gruzov.jpg"
                  >
                    <img
                      alt="Склад для упакованных грузов"
                      src="img/sklad_dlia_upakovannyh_gruzov_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Упаковка для больших и негабаритных грузов
                  </h3>
                </div>
                <figure>
                  <a
                    data-rel="fancybox-button"
                    title="Упаковка для негабаритных грузов"
                    className="fancybox-button pull-right pl-10"
                    href="img/upakovka_dlia_negabaritnyh_gruzov.jpg"
                  >
                    <img
                      alt="Упаковка для негабаритных грузов"
                      width="350"
                      src="img/upakovka_dlia_negabaritnyh_gruzov_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <p className="content-text">
                  Эта упаковка подходит для тяжелых транспортных средств от
                  15-100 тонн. Они могут быть частично закрыты (ящики) или
                  полностью закрыты (коробка). Пол может быть сделан из
                  деревянных конструкций, с панелями OSB или другими
                  соединениями. Наши решения подходят для всех видов транспорта:
                  над водой, над землей и для воздушных перевозок и
                  соответствуют международным стандартам, таким как: SEI4, ITN
                  54750A_REV4, MIL-SPEC. (PPP-B-601, MIL-C-26195, MIL-C-104,
                  MIL-C-52950), ASTM (D6251, D6256, D6036), BS1133, HPE. Для
                  заносов термоусадочная пленка используется для дополнительной
                  защиты.
                </p>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Упаковка - деревянные ящики"
                    className="fancybox-button"
                    href="img/upakovka_dereviannye_yashchiki.jpg"
                  >
                    <img
                      alt="Упаковка - деревянные ящики"
                      src="img/upakovka_dereviannye_yashchiki_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="font-16 font-black pt-20">Жестяная упаковка</h4>
                <p className="content-text pt-20">
                  Жестяная упаковка используется, когда нашим клиентам
                  необходимо отгрузить ценные или чувствительные к перевозке
                  товары. такая упаковка потребуется, если речь идет о
                  автозапчастях, коробке передач, двигателях. Если вес не
                  является проблемой, то жестяная упаковка в самый раз
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa fa-caret-right"></i>Подходит под груз
                    любого размера
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Маскировка груза
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Закрепление таблички
                    для идентификации
                  </li>
                  <li>
                    <i className="fa fa fa-caret-right"></i>Нестандартные
                    варианты укладки товара
                  </li>
                </ul>
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Деревянные ящики и специальная деревянная тара"
                    className="fancybox-button"
                    href="img/upakovka_dlia_trub.jpg"
                  >
                    <img
                      alt="Деревянные ящики и специальная деревянная тара"
                      src="img/upakovka_dlia_trub_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="font-16 font-black pt-20">
                  Деревянные ящики и транспортное оборудование
                </h4>
                <p className="content-text pt-20">
                  Деревянные ящики для упаковки, не так прочны, как жестяные.
                  Но, они дешевле и обладают другими полезными свойствами:
                  легче, быстроразборные, взаимозаменяемые, их вес намного
                  меньше жести.
                </p>
                <p className="content-text">
                  Деревянные ящики обеспечивают наилучшую защиту оборудования,
                  такого как различные сложные системы и трубы. Товары будут
                  прекрасно защищены во время транспортировки
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Термоусадочная пленка"
                    className="fancybox-button"
                    href="img/termousadochnaya_plenka.jpg"
                  >
                    <img
                      alt="Термоусадочная пленка"
                      src="img/termousadochnaya_plenka_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="font-16 font-black  pt-20">
                  Экспортная упаковка - термоусадочная пленка
                </h4>
                <p className="content-text pt-20">
                  Упаковка с термоусадочной пленкой защищает оборудование от
                  воды и вредных ультрафиолетовых лучей. Она обеспечивает
                  исключительную защиту при транспортировке. Фольга VCI,
                  используемая для черных металлов, содержит химический продукт,
                  который защищает от коррозии. Процессы электрохимической
                  коррозии предотвращаются. Когда груз распакован, оборудование
                  не имеет признаков коррозии и его можно сразу использовать.
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Упаковка из алюминиевой фольги"
                    className="fancybox-button"
                    href="img/upakovka_iz_aluminievoy_folgi.jpg"
                  >
                    <img
                      alt="Упаковка из алюминиевой фольги"
                      src="img/upakovka_iz_aluminievoy_folgi_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h4 className="font-16 font-black pt-20">
                  Алюминиевая пленка (фольга)
                </h4>
                <p className="content-text pt-20">
                  Товары с риском коррозии, должны перевозиться в «климатической
                  упаковке» для морской, полярной и тропической транспортировки
                  при длительном хранении. Упакованное оборудование покрыто
                  фольгой (из алюминия), которая ограждает упакованные продукты
                  от воздуха и агрессивной морской среды.
                </p>
                <p className="content-text">
                  Внутренняя температура поддерживается около 50% относительной
                  влажности, это значт, что влага из упаковки будет удалена.
                </p>
                <div className="lineheader-white">
                  <h3 className="text-center font-20 font-black pt-5">
                    Виды упаковочных материалов для товаров
                  </h3>
                </div>
                <div className="row mb-10">
                  <div className="col-md-5">
                    <figure className="mt-10">
                      {" "}
                      <a
                        data-rel="fancybox-button"
                        title="Стретч пленка для упаковки"
                        className="fancybox-button"
                        href="img/stretch_plenka_dlia_upakovki.jpg"
                      >
                        <img
                          alt="Стретч пленка для упаковки"
                          src="img/stretch_plenka_dlia_upakovki_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-md-7">
                    <h4 className="text-red-site text-uppercase font-16">
                      Фиксационная пленка (стретч-пленка)
                    </h4>
                    <p>
                      Фиксирующие стрейч-пленки заменяют фиксацию товаров с
                      помощью обвязочных лент или палетных пакетов, особенно для
                      упаковки товаров на поддонах. Ручная стрейч-пленка,
                      механическая стрейч-пленка, аксессуары для стрейч-пленки.
                      Мы поставляем пленки различной ширины и растяжимости до
                      300%.
                    </p>
                  </div>
                </div>
                <div className="line-dashed"></div>
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

export default upakovka_tovara;
