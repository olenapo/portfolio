
		$(document).ready(function(){
			$(".btn-fb").hover(function(){
				$(this).next("em").animate({opacity: 'show', top: "-55"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: 'hide', top: "-65"}, "fast");
			});
		});

		$(document).ready(function(){
			$(".btn-linkid").hover(function(){
				$(this).next("em").animate({opacity: 'show', top: "-55"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: 'hide', top: "-65"}, "fast");
			});
		});

		$(document).ready(function(){
			$(".btn-twit").hover(function(){
				$(this).next("em").animate({opacity: 'show', top: "-55"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: 'hide', top: "-65"}, "fast");
			});
		});

		$(".menu-link").click(function(){
			$(".dropdown-menu").slideToggle("slow")
			$(this).toggleClass("open");
});
		
		
