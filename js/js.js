$('.slider-car').owlCarousel({
    autoHeight:true,
      sfluidSpeed:true,
        loop: true,
        margin: 50,
        padding:5,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          300: {
            items: 1,
          },
          600: {
            items: 1,
          },
          100: {
            items: 1,
          },
          1200: {
            items: 1,
          }
        }
      })
    //simple CSS text animation
