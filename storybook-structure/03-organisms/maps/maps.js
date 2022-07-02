(function ($, Drupal) {
  $ = jQuery;
  Drupal.behaviors.maps = {
    attach: function (context) {
      /* Iterating through the country names in yml or drupal system.
      Then Adding active-country classes to all the anchor
      pinpoints in svg with similar id's to highlight them on map . */
      $('.countryname').each(function (e, i) {
        $('svg.map-distributor a.country').each(function (k, w) {
          if (i.id === $(w).children().attr('id')) {
            $(w).addClass('active-country');
          }
        });
      });
    },
  };
})(jQuery, Drupal);
