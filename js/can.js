// scroll to section 

$("a").click(function() {
    let pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000 );
});

