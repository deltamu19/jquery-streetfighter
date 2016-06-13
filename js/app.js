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
			{'left': '81.250em'},
			46.875,
			function() {
				$(this).hide();
				$(this).css('left', '34.375em');
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

	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	})
	.mouseleave(function() {
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'right': '81.250em'},
			46.875,
			function() {
				$(this).hide();
				$(this).css('right', '34.375em');
			}
		);
	})
	.mouseup(function() {
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 89) {
			playRyucool();
			$('.hulk-ryu-still').hide();
			$('.hulk-ryu-ready').hide();
			$('hulk-ryu-throwing').hide();
			$('.hulk-ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 89) {
			$('#cool-sound').stop();
			$('#cool-sound').load();
			$('.hulk-ryu-still').show();
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-throwing').hide();
			$('.hulk-ryu-cool').hide();
		}
	});
});

playIntro = function () {
	$('#intro-sound')[0].volume = 0.5;
	$('#intro-sound')[0].load();
	$('#intro-sound')[0].play();
	$('.logo').fadeIn(2000, function() {
		$(this).fadeOut(1000, function() {
			$('.instruct').fadeIn(1000, function() {
				$(this).fadeOut(3000, function() {
					$('#fight-sound')[0].volume = 0.5;
					$('#fight-sound')[0].load();
					$('#fight-sound')[0].play();
					$('.fight').fadeIn(1000, function() {
						$(this).fadeOut(1000);
					});
				});
			});
		});
	});
};

playHadouken = function () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

playRyucool = function () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].play();
};




