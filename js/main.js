$('.js-hamburger-div').on('click', function() {
    $('.js-dropdown-nav').slideToggle('slow');
});

$('.scroll').on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top}, 500);
});