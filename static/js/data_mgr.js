function loadData() {
        var grp = [];

        //Venues
        Cap360Venues = []
        MeatPackingVenues = []
        StMarksVenues = []

        //Menus
        Cap360SerifinaMenu = []
        Cap360PizzaMenu = []
        Cap360FelidiaMenu = []

        //Populate a bunch of menus
         _.forEach(DATACap360SerafinaMenu.response.menu.menus.items[0].entries.items[0].entries.items.slice(0,5), function(data) {
            var foodName  = data.name || "";
            var price = data.price || "";
            var description = data.description || "";
            var menuInfo = [foodName, description, price];
            Cap360SerifinaMenu.push(menuInfo);
          });
         _.forEach(DATACap360PizzaByCerTeMenu.response.menu.menus.items[0].entries.items[0].entries.items.slice(0,5), function(data) {
            var foodName  = data.name || "";
            var price = data.price || "";
            var description = data.description || "";
            var menuInfo = [foodName, description, price];
            Cap360PizzaMenu.push(menuInfo);
          });
         _.forEach(DATACap360FelidiaMenu.response.menu.menus.items[0].entries.items[0].entries.items.slice(0,5), function(data) {
            var foodName  = data.name || "";
            var price = data.price || "";
            var description = data.description || "";
            var menuInfo = [foodName, description, price];
            Cap360FelidiaMenu.push(menuInfo);
          });

         // Loop through Capital One 360 Venues
        _.forEach(DATACap360.response.groups[0].items, function(data) {
          var displayName  = data.venue.name || "";
          var address = data.venue.location.address || "";
          var lat = data.venue.location.lat || "";
          var lng = data.venue.location.lng || "";
          var phone = data.venue.contact.formattedPhone || "";
          var venueInfo = [displayName, address, phone];
          Cap360Venues.push(venueInfo);
        });

          // Loop through Meat Packing Venues
        _.forEach(DATAMeatPacking.response.groups[0].items, function(data) {
          var displayName  = data.venue.name || "";
          var address = data.venue.location.address || "";
          var lat = data.venue.location.lat || "";
          var lng = data.venue.location.lng || "";
          var phone = data.venue.contact.formattedPhone || "";
          var venueInfo = [displayName, address, phone];
          MeatPackingVenues.push(venueInfo);
         });

        // Loop through St Marks Venues
        _.forEach(DATAStMarks.response.groups[0].items, function(data) {
          var displayName  = data.venue.name || "";
          var address = data.venue.location.address || "";
          var lat = data.venue.location.lat || "";
          var lng = data.venue.location.lng || "";
          var phone = data.venue.contact.formattedPhone || "";
          var venueInfo = [displayName, address, phone];
          StMarksVenues.push(venueInfo);
         });
}