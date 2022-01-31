$('.js-open-modal').click(function () {
    event.preventDefault();

    var modalName = $(this).attr('data-modal');
    var modal = $('.js-modal[data-modal="' + modalName + '"]');

    modal.addClass('is-show');
    $('.js-modal-overlay').addClass('is-show');
    $('body').addClass('is-hidden');
});

$('.js-modal-close').click(function () {
    $(this).parent('.js-modal').removeClass('is-show');
    $('.js-modal-overlay.is-show').removeClass('is-show');
    $('body').removeClass('is-hidden');
});

$('.js-modal-overlay').click(function () {
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
    $('body').removeClass('is-hidden');
})