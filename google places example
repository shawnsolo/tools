let listing = [
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
];
      
      for ( var i = 0; i < place.address_components.length; i ++ ) {
        if( place.address_components[i].types[0] === 'street_number' ) {
          listing.address1 = place.address_components[i].long_name;
        }
        if( place.address_components[i].types[0] === 'route' ) {
          listing.address2 = place.address_components[i].long_name;
        }
        if( place.address_components[i].types[0] === 'locality' ) {
          listing.city = place.address_components[i].long_name;
        }
        if( place.address_components[i].types[0] === 'administrative_area_level_1' ) {
          listing.state = place.address_components[i].short_name;
        }
        if ( place.address_components[i].types[0] === 'postal_code' ) {
          listing.zip = place.address_components[i].long_name;
        }
      }
      
