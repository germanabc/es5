$(function(){
	$('#zt').hover(function(){
		$(this).children('.xiala').show();
		$(this).children('a').addClass('current');
	},function(){
		$(this).children('a').removeClass('current');
		$(this).children('.xiala').hide();
	});
	$(document).on('click','.chat',function(){
		doyoo.util.openChat('g=10075030');return false;
	})
	$('.windowUp .close').click(function(){
		$('.windowUp').hide();
		if($(this).attr('name') == 0){
			$(this).attr('name','1')
			setTimeout(function(){
				$('.windowUp').show();
			},20000);
		}else{
			$('.windowUp').hide();
		}
	});
	setTimeout(function(){
		$('.windowUp').show();
	},5000);
	$('.leftUp .return_top').click(function(){
		$('html,body').animate({scrollTop: '0'},30);
	})
})