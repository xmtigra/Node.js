"use strict"; $(window).scroll(function () { var e = $(".nb-header"), n = $(window).scrollTop(); e && e.length > 0 && n >= 50 ? e.addClass("nb-header_fixed") : e.removeClass("nb-header_fixed") }), $("body").on("click", ".nb-menu__toggle", function () { $(this).toggleClass("nb-menu__toggle_active"), $(this).closest(".nb-header").find(".nb-menu").toggle(), $(this).closest(".nb-header").toggleClass("nb-header_opened") }), $("body").on("click", ".nb-main-bottom__more", function () { var e = $(this); return $(this)[0].hasAttribute("disabled") === !1 && ($(this).addClass("nb-main-bottom__more_active"), $(this).attr("disabled", "disabled"), setTimeout(function () { $(e).removeClass("nb-main-bottom__more_active"), $(e).removeAttr("disabled", "disabled") }, 2e3)), !1 }), $("body").on("click", function (e) { var n = $(".nb-main-filter__item"); if (n && n.length > 0 && $(n).hasClass("nb-main-filter__item_opened")) { 0 === $(e.target).closest(".nb-main-filter__item").length && $(n).removeClass("nb-main-filter__item_opened") } $(e.target).hasClass("opened-mobile-filter") && ($(e.target).removeClass("opened-mobile-filter"), $(e.target).find(".nb-acardion").hide()) }), $("body").on("click", ".nb-main-top", function (e) { $(this).closest("body").addClass("opened-mobile-filter"), $(this).closest("body").find(".nb-acardion").show() }), $("body").on("click", ".nb-main-filter__a", function (e) { $(e.target).closest(".nb-main-filter__item").toggleClass("nb-main-filter__item_opened"), $(e.target).closest(".nb-main-filter__item").siblings(".nb-main-filter__item").removeClass("nb-main-filter__item_opened") }), $("body").on("click", ".nb-main-menu__item", function (e) { if ($(this).hasClass("nb-main-menu__item_active") === !1) { $(this).addClass("nb-main-menu__item_active").siblings("li").removeClass("nb-main-menu__item_active"); var n = $(this).attr("data-sort"); $(this).closest(".nb-main-section").find(".nb-main-list__item").hide(), n && "" !== n && "all" !== n ? $(this).closest(".nb-main-section").find('.nb-main-list__item[data-sort="' + n + '"]').show() : $(this).closest(".nb-main-section").find(".nb-main-list__item").show() } return !1 }), $("body").on("click", 'input[name="distance[]"]', function (e) { "all" === this.value ? ($('input[name="distance[]"]').prop("checked", !1), $('input[name="distance[]"][value="all"]').prop("checked", !0)) : $('input[name="distance[]"][value="all"]').prop("checked", !1) }), $("body").on("click", 'input[name="year[]"]', function (e) { "2017" === this.value ? ($('input[name="year[]"]').prop("checked", !1), $('input[name="year[]"][value="2017"]').prop("checked", !0)) : $('input[name="year[]"][value="2017"]').prop("checked", !1) }), $("body").on("click", 'input[name="year[]"]', function (e) { "y2018" === this.value ? ($('input[name="year[]"]').prop("checked", !1), $('input[name="year[]"][value="y2018"]').prop("checked", !0)) : $('input[name="year[]"][value="y2018"]').prop("checked", !1) });