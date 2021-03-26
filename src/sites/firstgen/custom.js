$(document).ready(function(){

  $('.student-stories-carousel').slick({
    accessibility: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });

  $('.faculty-stories-carousel').slick({
    accessibility: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });

});