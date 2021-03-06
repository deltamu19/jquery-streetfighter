$(document).ready(function() {
	playIntro();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1050px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '550px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.which == 88) {
			playRyucool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
			$('#cool-sound').stop();
			$('#cool-sound').load();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
		}
	});

});

function playIntro () {
	$('#intro-sound')[0].volume = 0.5;
	$('#intro-sound')[0].load();
	$('#intro-sound')[0].play();
	$('.logo').fadeIn(2000, function() {
		$(this).fadeOut(1000, function() {
			$('.instruct').fadeIn(1000);
		})
	})
};

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

function playRyucool () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].play();
};




