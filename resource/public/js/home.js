var domainName = document.domain;
$(document).ready(function(){
	var _w = $(window).width();
	var _h = $(window).height();
	var firstWidth = 150;
	var weightWidth = 8;
	var wWidth = _w - 16;
	var colsNumber = Math.floor(wWidth / (firstWidth+weightWidth));
	var realWidth = (wWidth/colsNumber)-weightWidth;
	$('ul.body li.list').css({width:realWidth+'px', height:realWidth+'px'});
	
	$('ul.toolbar a.order').click(function(){
		var dataIdx = $(this).attr('title');
		$('.order-active').removeClass('order-active').addClass('order');
		if (dataIdx == 'NEW'){
			$('ul.toolbar a.order[title="NEW"]')
				.removeClass('order')
				.addClass('order-active');
		}else {
			$('ul.toolbar a.order[title="TOP"]')
				.removeClass('order')
				.addClass('order-active');
		}
		
		$.get(url_base + '?module=home&ajax=1', {order:dataIdx, width:realWidth}, function (txt) {			
			if (txt != '') {
				location.href =(url_base);
			}
			
		});
		return false;
	});
	$('.box-search').keyup(function(){
		var text = $(this).val();
		if (text != '') {
			$('ul.body li.list').fadeOut(100);
			$('ul.body li.list[title*="'+text.toLowerCase()+'"]').fadeIn(100);
		}else $('ul.body li.list').fadeIn(100);
	});
});