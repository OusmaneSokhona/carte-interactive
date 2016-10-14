$(function () {
	$('#un').css('margin-top', '3em');
	$('li').hide()
	$('body').css('background', 'white');
	$('h2').on('click', function () {
		$('h2').remove()
		$('#un').show().css('background', 'green');
		$('body').slideDown().css('background', 'blue')
	});
	$('#un').on('click', function () {
		$('#deux').show().css('background', 'yellow');
		$('body').slideDown().css('background', 'green')
	});
	$('#deux').on('click', function () {
		$('#trois').show();
		$('body').css('background', 'yellow')
	});
	$('#trois').on('click', function () {
		$('li').html('Happy Birthday');
		$('body').css('background-image', 'url(../image.jpg)')
	});
})