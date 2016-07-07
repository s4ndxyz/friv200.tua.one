$('ul.toolbar a.order, .order-active').click(function(){
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
	$.get(url_base + '?module=home&ajax=1', {order:dataIdx}, function (txt) {			
		if (txt != '') {
			location.href =(url_base);
		}
		
	});
	return false;
});