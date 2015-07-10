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
<<<<<<< HEAD
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
=======
  // var $slide = $('.slide-wrapper').flickity({
  //   // options
  //   cellAlign: 'left',
  //   contain: true,
  //   pageDots: false,
  //   prevNextButtons: false
  // });
  // var flkty = $slide.data('flickity');
  // var $cellButtonGroup = $('.tabs');
  // var $cellButtons = $cellButtonGroup.find('.tab');
  // //select cell on tab click
  // $('.button-group').on( 'click', '.tab', function() {
  //   var index = $(this).index();
  //   $slide.flickity( 'select', index );
  // });

  // //update state for selected tab
  // $slide.on('cellSelect', function(){
  //   $cellButtons.filter('.is-selected')
  //         .removeClass('is-selected');
  //       $cellButtons.eq( flkty.selectedIndex )
  //         .addClass('is-selected');
  // });

 $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });



  //toggle `popup` / `inline` mode
  $.fn.editable.defaults.mode = 'inline';    
  
  //make username editable
  $('#realname').editable();
  $('#current-work').editable();
  $('#current-workplace').editable();
  $('#birthday').editable();
  $('#gender').editable();
  $('#hometown').editable();
  $('#languages').editable();
  
  //make status editable
  $('#status').editable({
      type: 'select',
      title: 'Select status',
      placement: 'right',
      value: 2,
      source: [
          {value: 1, text: 'status 1'},
          {value: 2, text: 'status 2'},
          {value: 3, text: 'status 3'}
      ]
      /*
      //uncomment these lines to send data on server
      ,pk: 1
      ,url: '/post'
      */
>>>>>>> light-theme-desktop
  });

  //update state for selected tab
  $slide.on('cellSelect', function(){
    $cellButtons.filter('.is-selected')
          .removeClass('is-selected');
        $cellButtons.eq( flkty.selectedIndex )
          .addClass('is-selected');
  });
});