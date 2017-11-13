(function($){
	$(function(){
		wow = new WOW({
			mobile: false
		});
		wow.init();
		//客户图片变化
		var height=$(".sec16 .wrap").offset().top;
		$(window).scroll( function() {
			var h=$(window).scrollTop();
			var x=height-h;
			if(x<400){
				$(".sec16 .org").fadeIn();
				$(".sec16 .org").addClass("active");
			}
		} );
		//客户案例图片轮播
		var mySwiper = new Swiper('.sec9 .swiper-container',{
			pagination: '.pagination',
			paginationClickable: true,
			slidesPerView: 2,
			loop: true,
			autoplayDisableOnInteraction : false,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoplay: 2000
		})
		var mySwiper3 = new Swiper('.sec22 .swiper-container',{
			pagination: '.pagination',
			paginationClickable: true,
			slidesPerView: 2,
			loop: true,
			autoplayDisableOnInteraction : false,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoplay: 3000,
			slidesPerGroup:2
		})
		$('.sec9 .arrow-left,.sec22 .arrow-left').on('click', function(e){
			e.preventDefault()
			mySwiper.swipePrev();

		})
		$('.sec9 .arrow-right,.sec22 .arrow-right').on('click', function(e){
			e.preventDefault()
			mySwiper.swipeNext()
		})
		//证书轮播
		var mySwiper2 = new Swiper('.sec15 .swiper-container',{
			pagination: '.pagination',
			paginationClickable: true,
			slidesPerView: 5,
			loop: true,
			autoplay: 2000
		})
    	//锚点
		$('a[href*=#]').on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-60
			}, 1000);
			e.preventDefault();
		});

	})

})(jQuery)