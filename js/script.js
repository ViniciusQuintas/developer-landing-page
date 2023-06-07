// menu mobile

$('.abrirMenu').click(function () { 
    $('.menu-mobile').slideToggle();
    
});

//scroll menu

$('menu-itens li a').click(function () { 
    const href = $(this).attr('href');
    const offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});

// slider

$('.abt-card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    slickPlay: true,
    autoplaySpeed: 3000,
    arrows: true,
});