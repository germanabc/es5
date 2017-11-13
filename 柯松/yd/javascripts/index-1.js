(function($){
	$(function(){
		wow = new WOW({});
		wow.init();
        //滑屏
		// var swiper = new Swiper('.swiper-container', {
		// 	pagination: '.swiper-pagination',
		// 	paginationClickable: true,
		// 	direction: 'vertical',
		// 	loop: true
		// });
	//	last-page
		var h=$(window).height()-146;
		$(".my-customer").height(h);
		var w=$(".my-customer").width()-20;
		$(".contact").width(w);
	//乐语隐藏
		$("#doyoo_panel").css("display","none");
	//	iphone4单独设置
		var height=$(window).height();
		if(height<=480){
			$(".title-wrap").css("padding-top","10px");
			$(".button a").css("bottom","10px")
		}


	})

})(jQuery)