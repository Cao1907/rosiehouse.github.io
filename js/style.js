$(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});
$('#responsive').lightSlider({
  item: 4,
  loop: false,
  slideMove: 2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  responsive: [
    {
      breakpoint: 1440, // Kích thước màn hình tối đa
      settings: {
        item: 3,
        slideMove: 2,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 1024, // Kích thước màn hình tối đa
      settings: {
        item: 3,
        slideMove: 2,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 970, // Kích thước màn hình tối đa
      settings: {
        item: 2,
        slideMove: 1,
      }
    },
    {
      breakpoint: 850, // Kích thước màn hình tối đa
      settings: {
        item: 2,
        slideMove: 1,
      }
    },
    {
      breakpoint: 768, // Kích thước màn hình tối đa
      settings: {
        item: 2,
        slideMove: 1,
      }
    },
    {
      breakpoint: 480, // Kích thước màn hình tối đa
      settings: {
        item: 1,
        slideMove: 1,
      }
    }
  ]
});
