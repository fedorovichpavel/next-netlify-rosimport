import Head from "next/head";
import App from "../components/App";

const konosoment = () => {
  return (
    <App navLight="uslugi">
      <Head>
        <title>Коносомент (полный обзор)</title>
        <meta
          name="description"
          content="Основные функции коносомента, что он регулирует, когда применять и примеры на практике"
        />
        <meta property="og:title" content="Коносомент (полный обзор)" />
        <meta
          property="og:description"
          content="Основные функции коносомента, что он регулирует, когда применять и примеры на практике"
        />
        <meta
          property="og:image"
          content="https://rosimport.ru/img/logo_banner_china.jpg"
        />
        <meta property="og:url" content="https://rosimport.ru/konosoment" />
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
            <li>Документы</li>
            <li className="active">Коносомент (полный обзор)</li>
          </ul>

          <div className="row margin-bottom-40">
            <div className="col-md-8 col-sm-8">
              <div className="content-page">
                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Документ коносомент на компьютере"
                    className="fancybox-button"
                    href="img/dokument_konosoment_na_komputere.jpg"
                  >
                    <img
                      alt="Документ коносомент на компьютере"
                      src="img/dokument_konosoment_na_komputere_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h1 className="text-center font-20 font-black pt-5">
                    Коносомент (полный обзор)
                  </h1>
                </div>
                <p className="content-text">
                  Вы когда-нибудь слышали о термине "КОНОСОМЕНТ"? Раз вы здесь,
                  значит вы собираете информацию о международных грузоперевозках
                  и вам интересен каждый документ, который понадобится вам для
                  сопровождения вашего груза из другой страны. Предположим, из
                  Китая.
                </p>
                <p className="content-text">
                  Сотни условий доставки, которые существуют в судоходной
                  отрасли морских и речных перевозок, предполагают не меньшее
                  количество разнообразных бумаг. В том числе и коносомент или
                  иначе, морская накладная
                </p>

                <div className="lineheader-white">
                  <h3 className="text-center font-16 font-black pt-5">
                    Введение:Коносомент
                  </h3>
                </div>
                <p className="content-text">
                  Коносамент является многофункциональным документом в
                  международной торговле и используется в{" "}
                  <a
                    title="Морская транспортировка грузов"
                    href="morskaya_transportirovka_gruzov"
                  >
                    морских перевозках
                  </a>
                  . Большинство национальных законов о морских перевозках
                  основаны на международных конвенциях, регулирующих коносамент:
                </p>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Гаагские правила (1924
                    г.)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Гаагско-Висбийские
                    правила (1968 г.)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Гамбургские правила
                    (1978 г.)
                  </li>
                </ul>
                <p className="content-text">
                  Все эти конвенции создавались для стандартизации документов на
                  перевозку. Правила и обязанности при транспортировке груза
                  объединялись в единый и обязательный для всех пакет
                  документов. Единые правила для выдачи накладных и других
                  документов документов, необходимых{" "}
                  <a href="/" title="Международная перевозка грузов">
                    для международных грузоперевозок
                  </a>
                  .{" "}
                </p>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Функции коносомента"
                    className="fancybox-button"
                    href="img/funkcii_konosomenta.jpg"
                  >
                    <img
                      alt="Функции коносомента"
                      src="img/funkcii_konosomenta_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>

                <div className="lineheader-white">
                  <h3 className="text-center font-16 font-black pt-5">
                    Функции коносомента
                  </h3>
                </div>
                <h5 className="font-18 pt-10">
                  Коносомент имеет три основные функции:
                </h5>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Является, товарным
                    чеком
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Действует, как документ
                    о праве собственности
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Служит доказательством
                    транспортного контракта
                  </li>
                </ul>

                <h4 className="pb-0 text-uppercase">Товарный чек</h4>
                <p>
                  Коносамент действует, как квитанция/чек между
                  грузоотправителем и перевозчиком. Когда имущество передается
                  третьей стороне (получателю), он становится договором между
                  перевозчиком и третьей стороной. В договоре предусмотрено, что
                  перевозчик должен сдать груз законным получателям.
                </p>
                <div className="line-dashed"></div>
                <h4 className="pb-0 text-uppercase">
                  Документ о праве собственности
                </h4>
                <p>
                  Коносаменты, часто называют «оборотными», но правильнее
                  называть их «передаваемыми». Это значит, что право
                  собственности на товары может передаваться от одной стороны к
                  другой до момента доставки. Любой, у кого коносамент в месте
                  назначения, имеет право принять груз.
                </p>
                <p>
                  При передаче коносамента третьей стороне, бенефициар должен
                  подтвердить свое согласие на передачу. Подтверждение
                  производится путем письменного разрешения на передачу прав
                  собственности на товар и подписей в подтверждении.
                </p>
                <div className="line-dashed"></div>
                <h4 className="pb-0 text-uppercase">
                  Доказательство транспортного контракта
                </h4>
                <p>
                  Накладные служат доказательством "договора перевозки", который
                  является соглашением между перевозчиком и клиентом и разрешает
                  перевозку груза{" "}
                  <a
                    title="О траспортной компании"
                    href="transportnaya_kompania"
                  >
                    транспортной компанией
                  </a>
                  . В договоре изложены условия и обязанности отправителя и
                  перевозчика, в отношении перевозки данного груза.
                </p>
                <p>
                  Рекомендуется делать все соглашения в письменном виде, чтобы
                  потом легко решать все разногласия, относительно прав
                  собственности на груз.
                </p>
                <div className="line-dashed"></div>

                <figure className="mt-20">
                  <a
                    data-rel="fancybox-button"
                    title="Перевозчик описывает груз на складе"
                    className="fancybox-button"
                    href="img/perevozchik_opisyvaet_gruz_na_sklade.jpg"
                  >
                    <img
                      alt="Перевозчик описывает груз на складе"
                      src="img/perevozchik_opisyvaet_gruz_na_sklade_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="text-center font-16 font-black pt-5 mt-20 text-uppercase">
                  Задачи коносомента
                </h3>
                <h5 className="font-18 pt-10">
                  Три основные задачи коносомента:
                </h5>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Правильное и точное
                    описание груза
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Выдача груза законному
                    получателю в точке назначения
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Защита груза от
                    посягательств
                  </li>
                </ul>

                <h4 className="pb-0 text-uppercase">
                  Правильное описание груза
                </h4>
                <p>
                  <span className="text-fon-yellow">
                    Коносамент является основным документом
                  </span>{" "}
                  у большинства международных продавцов-производителей и каждый
                  получатель отталкивается от точного описания груза в
                  коносоменте. Важно, чтобы экспедитор указал на любые неверные
                  описания или ошибки грузоотправителя в коносаменте. Если
                  перевозчик не сделает этого, то он принимает на себя
                  ответственность (от имени отправителя) по отношению к
                  получателю.
                </p>

                <div className="tab-pane">
                  <div className="pdf pb-30">
                    <h5 className="text-uppercase">Пример:</h5>
                    <p>
                      Вы купили 1500 футболок у{" "}
                      <a
                        href="dostavka_gruzov_iz_kitaya#katalog_vvozimyh_tovarov"
                        title="Каталог ввозимых товаров (импорт из Китая)"
                      >
                        поставщика в Китае
                      </a>
                      . Грузоотправитель доставляет футболки вашему перевозчику
                      и заявляет, что в коробках содержится 1500 футболок, но на
                      самом деле грузоотправитель вложил в коробки только 1000
                      футболок.
                    </p>
                    <p>
                      Перевозчик (ваша логистическая или транспортная компания)
                      по незнанию, указывает данные о грузе в коносаменте,
                      включая сумму за 1500 футболок и выдает отправителю
                      коносамент в обмен на товар.{" "}
                    </p>
                    <figure className="mt-10 mb-10">
                      <a
                        data-rel="fancybox-button"
                        title="Футболки из Китая"
                        className="fancybox-button"
                        href="img/futbolki_iz_kitaya.jpg"
                      >
                        <img
                          alt="Футболки из Китая"
                          src="img/futbolki_iz_kitaya_sm.jpg"
                          className="img-responsive"
                        />
                      </a>
                    </figure>
                    <p>
                      <span className="text-uppercase">
                        {" "}
                        Он должен был проверить груз, чтобы убедиться, что
                        описание груза было правильным!
                      </span>
                    </p>
                    <p>
                      Вы заплатите своему поставщику полную сумму за ваши 1500
                      футболок и он передаст вам коносамент.
                    </p>
                    <p>
                      Когда ваши товары прибывают в пункт назначения, вы должны
                      передать коносамент перевозчику в качестве подтверждения
                      получения. Но вы вдруг обнаруживаете, что к вам приехало
                      только 1000 футболок, а не 1500, как указано в
                      коносоменте.
                    </p>
                    <p>
                      В этом случае перевозчик обязан докупить недостающие 500
                      футболок на свои деньги, поскольку он не проверил груз до
                      выдачи коносамента. Но и перевозчик имеет право
                      потребовать возмещение материального ущерба - если он
                      может доказать, что грузоотправитель{" "}
                      <a
                        href="upakovka_tovara"
                        title="Упаковка и маркировка товара"
                      >
                        упаковал в коробки
                      </a>{" "}
                      только 1000 футболок.
                    </p>
                  </div>
                </div>
                <p className="content-text">
                  На практике в коносаменте есть дополнение, где «указано, что
                  он содержит» и в каком количесте, чтобы избежать проблем. Но,
                  проверять товар, всё же необходимо{" "}
                </p>

                <figure className="mt-10 mb-10">
                  <a
                    data-rel="fancybox-button"
                    title="Что содержит коносомент"
                    className="fancybox-button"
                    href="img/chto_soderzhit_konosoment.jpg"
                  >
                    <img
                      alt="Что содержит коносомент"
                      src="img/chto_soderzhit_konosoment_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Что содержит коносомент
                </h3>
                <p className="font-16 pt-10">
                  Коносамент обычно оформляется в трех оригинальных документах и
                  ​​должен содержать следующую информацию::
                </p>
                <ol className="list3a">
                  <li>
                    Информация об отправителе (о перевозчике) и получателе
                  </li>
                  <li>
                    Порт погрузки или место приема груза (где груз передается
                    перевозчику)
                  </li>
                  <li>Порт разгрузки</li>
                  <li>Конечный пункт назначения и место доставки</li>
                  <li>Название и номер рейса корабля</li>
                  <li>
                    Буквы и цифры, указанные на грузе или номере контейнера
                  </li>
                  <li>Описание груза</li>
                  <li>Количество, включая вес и размеры</li>
                  <li>
                    Сведения о грузе (если они должны быть включены в
                    коносамент)
                  </li>
                  <li>Подпись перевозчика</li>
                </ol>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Коносомент - проверка на складе"
                    className="fancybox-button"
                    href="img/konosoment_proverka_na_sklade.jpg"
                  >
                    <img
                      alt="Коносомент - проверка на складе"
                      src="img/konosoment_proverka_na_sklade_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>

                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Пример коносамента на практике
                </h3>
                <p className="content-text">
                  Ваша компания в России хочет получить товар от поставщика в
                  Китае. Поставщик доставляет товар перевозчику по вашему
                  выбору, а взамен получает коносамент, в качестве квитанции на
                  груз. Товар доставлен на борт корабля и направлен в место
                  назначения.
                </p>
                <p className="content-text">
                  Когда поставщик получит полную сумму за товар, он направит вам
                  коносамент
                </p>
                <p className="content-text">
                  Если вы хотите, то теперь имеете право перепродавать ваши
                  товары кому угодно, одобряя коносамент новому владельцу.
                </p>
                <p className="content-text">
                  После прибытия товара в пункт назначения, вы (или новый
                  владелец груза) должны предъявить транспортную накладную
                  перевозчику, чтобы подтвердить право собственности и принять
                  товар.
                </p>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Телекс-релиз для морских перевозок"
                    className="fancybox-button"
                    href="img/teleks_reliz_dlia_morskih_perevozok.jpg"
                  >
                    <img
                      alt="Телекс-релиз для морских перевозок"
                      src="img/teleks_reliz_dlia_morskih_perevozok_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>

                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Используем телекс-релиз
                </h3>
                <p className="content-text">
                  Выдача телекс-релиза является подтверждением от перевозчика,
                  из порта отправления до порта назначения. Это позволяет
                  высвободить груз без предъявления бумажной версии оригинала
                  коносамента. Это делалось раньше телексом, отсюда и название.
                  Сегодня, это обычно делается по электронной почте, но иногда
                  можно просто обновить подтверждение во внутренней системе
                  судоходной компании.
                </p>
                <p className="content-text">
                  Использование телексного оформления является более быстрым и
                  простым, чем запрос на доставку получателю коносомента и
                  после, возвратить его агенту. Во многих случаях, такая схема
                  может задержать{" "}
                  <a
                    title="Доставка грузов из Китая"
                    href="dostavka_gruzov_iz_kitaya"
                  >
                    доставку вашего груза из Китая
                  </a>
                  .
                </p>
                <p className="content-text">
                  Типичная ситуация использования документов:
                </p>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Вы договорились со
                    своим поставщиком, что платите за товар только после
                    отправки (для этого используется коносамент)
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Поставщик хотел бы
                    сохранить право собственности на товар до получения вашего
                    платежа
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Вы не намерены
                    продавать товары третьим лицам во время перевозки (т. е. вы
                    знаете, что примете товар)
                  </li>
                </ul>
                <p className="content-text">
                  В этом случае мы рекомендуем попросить вашего поставщика
                  договориться об одобрении перевозчика, используя телекс-релиз,
                  поскольку это передаст право собственности на груз вам
                  (получателю) и вы сможете принять груз без первоначального
                  коносамента. Таким образом, вы сэкономите время, усилия и
                  деньги на отправку оригинального коносамента.
                </p>
                <p className="content-text">
                  На практике, грузоотправитель доставляет перевозчику
                  оригинальную накладную в порту погрузки и просит его дать
                  согласие на телекс. Затем агент в порту погрузки сообщает
                  агенту в порту разгрузки, что оригинал коносамента был получен
                  и груз может быть передан названному получателю без
                  предъявления оригинала коносамента.
                </p>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Морская накладная"
                    className="fancybox-button"
                    href="img/morskaya_nakladnaya.jpg"
                  >
                    <img
                      alt="Морская накладная"
                      src="img/morskaya_nakladnaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <div className="lineheader-white">
                  <h2 className="text-center font-16 font-black pt-5">
                    Морская накладная
                  </h2>
                </div>
                <p className="content-text">
                  Морская накладная - это документ, который экспедитор передает
                  грузоотправителю в обмен на груз.{" "}
                  <span className="text-fon-yellow">
                    Морская накладная во многом идентична коносаменту
                  </span>
                  , но в некоторых ключевых отношениях она принципиально
                  отличается. Мы рассмотрим эти различия ниже.
                </p>

                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Функции морской накладной
                </h3>
                <p className="content-text">
                  Морская накладная имеет две функции:
                </p>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Свидетельство о
                    договоре перевозки
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Квитанция на груз
                    (между экспедитором и грузоотправителем)
                  </li>
                </ul>
                <p className="content-text">
                  Как вы можете видеть, назначение морской накладной аналогично
                  назначению коносамента, но в отличие от коносамента, морская
                  накладная не является «документом о праве собственности» и это
                  имеет существенное значение.
                </p>
                <p className="content-text">
                  Если морская накладная не действует как «правоустанавливающий
                  документ», это значит, что она не подлежит передаче сторонним
                  лицам. То есть, транспортируемый груз не может быть повторно
                  загружен (продан), а следовательно, может быть выдан только
                  конкретному получателю, указанному отправителем. Если
                  отправитель хочет изменить свои документы, то он должен это
                  сделать в письменной форме.
                </p>
                <p className="content-text">
                  В результате, морская накладная не должна предъявляться
                  ​​перевозчику для освобождения груза. Груз может быть
                  доставлен только получателю, который определяется
                  отправителем. Перевозчик обязан указать личность получателя
                  груза, а получатель должен подтвердить свою личность.
                </p>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Когда используется морская накладная"
                    className="fancybox-button"
                    href="img/kogda_ispolzuetsia_morskaya_nakladnaya.jpg"
                  >
                    <img
                      alt="Когда используется морская накладная"
                      src="img/kogda_ispolzuetsia_morskaya_nakladnaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Когда используется морская накладная?
                </h3>
                <p className="content-text">
                  Использовать морскую накладную вместо коносамента можно: если
                  получатель заплатил за товар заранее, т.е. до отгрузки товара.
                  Многие транзакции осуществляются по морской накладной в том
                  случае, если получатель груза известен отправителю. Например,
                  при отправке груза между дочерними компаниями или если между
                  отправителем и получателем существует высокий уровень доверия.
                </p>
                <p className="content-text">
                  Морские накладные очень выгодны, если во время перевозки не
                  ожидается пересылка (продажа) груза (для этого требуется
                  оригинальная накладная). Таким образом, товары отправляются
                  непосредственно назначенному получателю и нет необходимости в
                  «освобождении» груза, поскольку{" "}
                  <span className="text-fon-yellow">
                    при использовании морской накладной не выдается коносамент
                  </span>
                  . Это экономит много времени на оформление документов и
                  курьерские расходы.
                </p>

                <figure className="mt-20 mb-20">
                  <a
                    data-rel="fancybox-button"
                    title="Коносамент VS морская накладная"
                    className="fancybox-button"
                    href="img/konosoment_vs_morskaya_nakladnaya.jpg"
                  >
                    <img
                      alt="Коносамент VS морская накладная"
                      src="img/konosoment_vs_morskaya_nakladnaya_sm.jpg"
                      className="img-responsive"
                    />
                  </a>
                </figure>
                <h3 className="text-center font-16 font-black pt-5 text-uppercase">
                  Коносамент VS морская накладная - какой вариант лучше?
                </h3>
                <p className="content-text">
                  Компании, которые пользуются услугами{" "}
                  <a href="/" title="Международные грузоперевозки">
                    международным грузоперевозками РОСИМПОРТ
                  </a>
                  , - это, небольшие или средние компании, являющиеся нашими
                  клиенатами.
                </p>
                <p className="content-text">
                  При импорте (доставке морем) наши клиенты, скорее всего:
                </p>
                <ul className="list-unstyled" style={{ lineHeight: "1.7em" }}>
                  <li>
                    <i className="fa fa-caret-right"></i>Оплатили товар заранее
                  </li>
                  <li>
                    <i className="fa fa-caret-right"></i>Не намерены продавать
                    свой товар в пути
                  </li>
                </ul>
                <p className="content-text">
                  Если эти два критерия выполнены, коносамент становится
                  неактуальным и не потребуется. Ведь коносамент гарантирует,
                  что оплата товара произведена до доставки и что товары
                  доставлены законному владельцу товара (если имущество
                  переместилось во время перевозки).
                </p>
                <p className="content-text">
                  В этом случае, использование морской накладной в качестве
                  альтернативы коносаменту значительно упростит процесс, т. е.
                  вы избежите затрат по передаче оригиналов документов.
                  Соответственно, мы всегда рекомендуем отправлять груз по
                  морской накладной.
                </p>
                <p className="content-text">
                  Если ваш поставщик (фабрика в Китае) настаивает на выдаче
                  оригинала коносамента и вы не планируете продавать товары в
                  пути, мы рекомендуем попросить их, получить разрешение на
                  телекс-релиз, он тоже значительно упрощает оформление
                  документов и процесс их передачи.
                </p>
                <p className="content-text">
                  Морская накладная почти всегда предпочтительней для наших
                  клиентов - если они заплатили за свой товар до того, как он
                  был отправлен и если они являются получателями.
                </p>
              </div>
            </div>
            <aside>
              <div className="col-md-4 col-sm-4">
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
              </div>
            </aside>
          </div>
        </div>
      </div>
    </App>
  );
};

export default konosoment;
