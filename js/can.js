// scroll to section 

$(".scroll-button").click(function() {
    let pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000 );
});

