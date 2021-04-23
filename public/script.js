(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(64530355, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});

jQuery(document).ready(function () {
  Layout.init();
  Layout.initOWL();
  Layout.initTwitter();
  Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */
  Layout.initNavScrolling();
});

$(".scroll").on("click", function (e) {
  e.preventDefault();
  var offset = 0;
  var target = this.hash;
  if ($(this).data("offset") != undefined) offset = $(this).data("offset");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top - 70,
      },
      500,
      "swing",
      function () {
        // window.location.hash = target;
      }
    );
});

$(".carousel").carousel({
  interval: 4000,
});
window.onload = () => {
  $("#11").owlCarousel({
    loop: true, //Зацикливаем слайдер
    autoplay: true, //Автозапуск слайдера
    items: 7, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
  });

  $('[data-toggle="tooltip"]').tooltip();
};

function radioClick() {
  var mlength = "cm";
  var mmass = "kg";
  var ilength = "inch";
  var imass = "lb";

  if ($("#rad1:checked").val()) {
    $(".cm").html(", " + mlength);
    $(".kg").html(", " + mmass);
  } else {
    $(".cm").html(", " + ilength);
    $(".kg").html(", " + imass);
  }
}

$(":radio").change(function () {
  radioClick();
});

function calculateWeight() {
  var num = Math.abs(parseFloat($("#pcs").val())) || 0;
  var length = Math.abs(parseFloat($("#lgth").val())) || 0;
  var width = Math.abs(parseFloat($("#wdth").val())) || 0;
  var height = Math.abs(parseFloat($("#hght").val())) || 0;
  var weight = Math.abs(parseFloat($("#wght").val())) || 0;
  var checked = Math.abs(parseFloat($("#rad1:checked").val())) || 0;

  /*var mresult = num*length*width*height/0.006;
      	var iresult = num*length*width*height/166;*/

  var mresult = (length * width * height) / 6000;
  var iresult = (length * width * height) / 166;

  if ($("#rad1:checked").val()) {
    $("#size").html(
      "Размер груза: " + length + " X " + width + " X " + height + ", см"
    );
    $("#fmass").html("Фактический вес: " + weight + ", кг");
    $("#vmass").html("Объемный вес: " + mresult.toFixed(2)) + ", кг";
    if (mresult >= weight) {
      $("#pay").html("Вы платите за: " + mresult.toFixed(2) + ", кг");
    } else {
      $("#pay").html("Вы платите за: " + weight + ", кг");
    }
  } else {
    $("#size").html(
      "Размер груза: " + length + " X " + width + " X " + height + ", дюймов"
    );
    $("#fmass").html("Фактический вес: " + weight + ", фунтов");
    $("#vmass").html("Объемный вес: " + iresult.toFixed(2) + ", фунтов");
    if (iresult >= weight) {
      $("#pay").html("Вы платите за: " + iresult.toFixed(2) + ", фунтов");
    } else {
      $("#pay").html("Вы платите за: " + weight + ", фунтов");
    }
  }

  $("#result").show();
}
$(".btn-primary").click(function () {
  calculateWeight();
});
