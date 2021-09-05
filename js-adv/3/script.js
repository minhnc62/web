$("#select").chosen({
    width : "200px",
});

$('.datepicker').pickadate()
$('.timepicker').pickatime()

$(".list").magnificPopup({
    delegate:"img",
    gallery: {
        // options for gallery
        enabled: true
      },
    type:'image'
});




$('.list-2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
  $(".youtube").magnificPopup({
    type: 'iframe',
      
});
 
$(document).ready(function() {
    $('.video1').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\?\&]v=([^\?\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                
            }
        }
    });
});