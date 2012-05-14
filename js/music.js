(function($){
	$("a").on("click", function(){
		$(this).closest('div').fadeOut().closest('li').siblings().fadeOut();
	});
})(jQuery);