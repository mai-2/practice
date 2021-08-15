$(function(){
    $("#slidetoggle-button").on("click", function () {
        $("#slidetoggle-menu").slideToggle();
        $("#slidetoggle-menu").toggleClass("active");
    })

    $(function () {
        var pagetop = $('#page-top');

        pagetop.hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 80) {
                pagetop.fadeIn(300);
            } else {
                pagetop.fadeOut(300);
            }
        });

        pagetop.click(function () {
            $('body,html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });

    $(function(){
        $(".course-wrapper img").click(function() {
            $("#graydisplay").html($(this).prop('outerHTML'));
            $("#graydisplay").fadeIn(200);
        });
        $("#graydisplay, #graydisplay img").click(function() {
            $("#graydisplay").fadeOut(200);
        });
        });
});
