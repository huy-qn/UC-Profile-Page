// external js: flickity.pkgd.js

// $(document).ready( function() {
//   var $gallery = $('.gallery').flickity({
//     prevNextButtons: false,
//     pageDots: false
//   });
//   // Flickity instance
//   var flkty = $gallery.data('flickity');
//   // elements
//   var $cellButtonGroup = $('.button-group--cells');
//   var $cellButtons = $cellButtonGroup.find('.button');

//   // update selected cellButtons
//   $gallery.on( 'cellSelect', function() {
//     $cellButtons.filter('.is-selected')
//       .removeClass('is-selected');
//     $cellButtons.eq( flkty.selectedIndex )
//       .addClass('is-selected');
//   });

//   // select cell on button click
//   $cellButtonGroup.on( 'click', '.button', function() {
//     var index = $(this).index();
//     $gallery.flickity( 'select', index );
//   });
//   // previous
//   $('.button--previous').on( 'click', function() {
//     $gallery.flickity('previous');
//   });
//   // next
//   $('.button--next').on( 'click', function() {
//     $gallery.flickity('next');
//   });
// });

$(document).ready( function() {
  var $slide = $('.slide-wrapper').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false
  });
  var flkty = $slide.data('flickity');
  var $cellButtonGroup = $('.tabs');
  var $cellButtons = $cellButtonGroup.find('.tab');
  //select cell on tab click
  $('.button-group').on( 'click', '.tab', function() {
    var index = $(this).index();
    $slide.flickity( 'select', index );
  });

  //update state for selected tab
  $slide.on('cellSelect', function(){
    $cellButtons.filter('.is-selected')
          .removeClass('is-selected');
        $cellButtons.eq( flkty.selectedIndex )
          .addClass('is-selected');
  });
});