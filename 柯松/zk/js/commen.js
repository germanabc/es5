// 美洽
(function(m, ei, q, i, a, j, s) {
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
    };
    j = ei.createElement(q),
        s = ei.getElementsByTagName(q)[0];
    j.async = true;
    j.charset = 'UTF-8';
    j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
    s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', 66468);
_MEIQIA('withoutBtn');
$(function(){
	$('#zt').hover(function(){
		$(this).children('.xiala').show();
		$(this).children('a').addClass('current');
	},function(){
		$(this).children('a').removeClass('current');
		$(this).children('.xiala').hide();
	});
	$(document).on('click','.chat',function(){
		_MEIQIA('showPanel');
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