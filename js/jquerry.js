$('.burger').on('click', function (e) {
e.preventDefault()
$('.burger__menu-hidden').toggleClass('burger__menu-open')
})