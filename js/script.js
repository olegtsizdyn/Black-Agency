if ($(window).width() > 1124) {


	$('.textport').css({
		'display': 'flex',
		'opacity': 0
	})
	$('.portfolio>div').hover(function() {
		var por = $(this);
		$(this).addClass('active');
		$(por).children('.textport').css('opacity', 1);

		$(por).children('.logo_portfolio').css('opacity', 0);

	}, function() {
		var por = $(this);
		$(this).removeClass('active');

		$(por).children('.textport').css('opacity', 0);
		$(por).children('.logo_portfolio').css('opacity', 1);

	});

} else {

	$('.portfolio>div').click(function() {
		var por = $(this);
		if ($(this).children('.textport').css('display') == "none") {



			$(this).addClass('active');
			$(por).children('.textport').fadeIn();

			$(por).children('.logo_portfolio').fadeOut();

		} else if ($(this).children('.logo_portfolio').css('display') == "none") {

			$(this).removeClass('active');

			$(por).children('.textport').fadeOut();
			$(por).children('.logo_portfolio').fadeIn();

		}

	});

}



window.onload = function() {
	setTimeout(function() {
		$('.loader').css('opacity', 0);
		setTimeout(function() {
			$('.loader').css('display', 'none');
		}, 1400);
		setTimeout(function() {

			$('.logo').addClass('fadeInn');

		}, 1600);
		setTimeout(function() {
			$('.menu').addClass('fadeInn');

		}, 1500);
		setTimeout(function() {

			$('.down').addClass('fadeInn');
		}, 1550);

		setTimeout(function() {

			$('.down').removeClass('fadeInn');
			$('.down').css('opacity', 1);
		}, 1650);

	}, 1000);

}
var change = "";

$('.wrap_select>div').click(function() {
	$('.wrap_select ul').slideToggle();
	$('.right_input>textarea').slideToggle();
	$('.wrap_select').toggleClass('befo');



});

$('.wrap_select ul li').click(function() {

	if ($(this).find('i').css("display") == "none") {
		$(this).find('i').show();
		if (change == "виберете план") {
			change = "";
		}

		change += " " + $(this).text() + " ";

		$('.wrap_select>div').empty();
		$('.wrap_select>div').append(change);

	} else {
		$(this).find('i').hide();
		change = change.replace($(this).text(), "");
		$('.wrap_select>div').empty();
		$('.wrap_select>div').append(change);
		if (change == "      " || change == "    " || change == "  ") {
			change = "виберете план";
			$('.wrap_select>div').empty();
			$('.wrap_select>div').append(change);
		}

	}


});

$('.down').click(function() {
	$('body,html').animate({
		scrollTop: $('.wrapper>h2').offset().top
	}, 700);
});
$('.one').click(function() {
	$('body,html').animate({
		scrollTop: $('.wrapper>h2').offset().top
	}, 700);
});
$('.two').click(function() {
	$('body,html').animate({
		scrollTop: $('.wrapper>h3').offset().top
	}, 900);
});
$('.three').click(function() {
	$('body,html').animate({
		scrollTop: $('.contact').offset().top
	}, 1500);
});



var ww = $(window).width(),
	wh = $(window).height(),
	li = $('.budda_img img:first');

$(window).on('mousemove', function(e) {
	li.css('left', (ww / 2 - e.clientX) / 50 + '%');
	li.css('top', (wh / 2 - e.clientY) / 50 + '%');
});



$('textarea').click(function() {
	$('textarea').attr("placeholder", "");
});

$(document).mouseup(function(e) {
	var block = $(".wrap_select");
	if (!block.is(e.target) &&
		block.has(e.target).length === 0) {
		$(".wrap_select ul").slideUp();
		$('.right_input>textarea').slideDown();
		$('.wrap_select').removeClass('befo');
	}
});
$(document).mouseup(function(e) {
	var block = $("textarea");
	if (!block.is(e.target) &&
		block.has(e.target).length === 0) {
		block.attr("placeholder", "сообщение");

	}
});


new WOW().init();