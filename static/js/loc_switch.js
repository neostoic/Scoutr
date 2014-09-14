$().ready(function() {
	$('#zipForm input').bind('keypress', function(e){
        if(e.which === 13) { // return
      		$('#gosearch').trigger('click');
    }
	});
	$('#gosearch').click(function() {
		var zipcode = $('#inpzip').val();
		loadVenues(zipcode);
	});
	loadVenues('10002');
	$('#venue-details .venue_prods ul').empty();
});

function loadVenues(zipcode){
	loadData();
	var venues = [];
	switch(zipcode) {
		case '10003':
			// St. Mark's Place
			venues = StMarksVenues;
			break;
		case '10014':
			// Meatpacking
			venues = MeatPackingVenues;
			break;
		default:
			// Capital One 360
			venues = Cap360Venues;
	}
	// clear out existing venues
	$('#productBlock').empty();

	// populate
	for (i = 0; i < venues.length; i++) {
		var ven = venues[i];
		venueBlock = '<div class="venue"><button class="btn btn-default exp-contr"><i class="glyphicon glyphicon-chevron-down"></i></button> <div class="venue_name">' + ven[0] + '</div> <div class="venue_address">' + ven[1] + '</div> <div class="venue_phno">'+ ven[2] +'</div> </div>';
		$('#productBlock').append(venueBlock);
	}
	setVenueClick();
}

function loadMenus() {
	menus = [Cap360SerifinaMenu, Cap360PizzaMenu, Cap360FelidiaMenu];
}