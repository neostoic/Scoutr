$(function() {
	setVenueClick();
});

function setVenueClick(){
	$('.venue').click(function(){
		// Enter restaurant details
		var restaurName = $(this).children('.venue_name').text();
		$('#venue-details h4').text(restaurName);
		$('#venue-details .location-address').text(
			$(this).children('.venue_address').text());
		$('#venue-details .location-ph').text(
			$(this).children('.venue_phno').text());

		// Select and populate menu
		var menu = [];
		switch(restaurName) {
			case 'Serafina Always':
				menu = Cap360SerifinaMenu;
				break;
			case 'Pizza By Cer Tè':
				menu = Cap360PizzaMenu;
				break;
			case 'Felidia':
				menu = Cap360FelidiaMenu;
				break;
		}
		$('#venue-details .venue_prods ul').empty();
		$('#venue-details .location-img').empty();
		if (menu[0][3])
			$('#venue-details .location-img').append('<img src="' + menu[0][3] + '">')
		for (i = 0; i < menu.length; i++){
			menu_block = '<li class="item"><span class="prod_name">' + menu[i][0] + '</span> <span class="prod_price">($'+ menu[i][2] +')<br><span class="prod_descr">' + menu[i][1] + '</span>';
			$('#venue-details .venue_prods ul').append(menu_block);
		}
		makeItemsDragable();
	});
}