var $ = jQuery.noConflict();



$(document).ready(function(){

    /* Section - Mail */

    $( "input[name=date]" ).datepicker({dateFormat:"dd-mm-yy"});

      
        

});//END ready

  
//       /* Scroll bar */
//       var windowWidth = $(window).width();

//         /* Header - slide */
//         if (windowWidth >991) {
//         // if( $('.sitehome').lenght){
//             $('.sitehome .pr-menu').css({'position':'absolute','transition':'top 0.3s ease'});

//             var a = $('.partners-list').offset().top;
//             $(window).scroll(function (event) {
//                 event.preventDefault();
//                 var scroll = $(window).scrollTop();
//                 console.log(scroll+" - "+a);
//                 if(scroll <= a){
//                     $('.sitehome .pr-menu').css('top', scroll+40 );
//                 }
//             });
//         // }
// }



    $(window).resize(function() {

        slider_page_home();
        /* Slide */
        slider_page_info();
       
    });//END resize

       
    /* Slide */
    slider_page_info();
    slider_page_home();

    $(document).ready(function(){

        $(".page-mobile,.nav-mobile ").click(function(){

            $(".site").toggleClass("slows");


        });

        // $(".sitehome").toggleClass("sl");

        $(".icon-map").click(function(e){

            e.preventDefault();

            $(".address-map ").toggleClass("showmap");
            
        });

         $(".action-play a").click(function(e){

            e.preventDefault();
            
            $(".pr-video-event").toggleClass("plays");
            
        });
         

    });


    /* scroll map */
    $('.box-map').click(function () {
        $('.box-map iframe').css("pointer-events", "auto");
    });

    $( ".box-map" ).mouseleave(function() {
      $('.box-map iframe').css("pointer-events", "none"); 
    });



  

function slider_page_info(){
    var w = 1053;
    var h = 576;

    var WsliderWrap = $('.bb-custom-wrapper').width();
    var HsliderWrap = $('.bb-custom-wrapper').height();

    var p = WsliderWrap / w;

    var returnH = h * p;

    $('.bb-bookblock,.bb-bookblock img  ').css({'width':WsliderWrap+'px'});
    $('.bb-bookblock, .bb-bookblock img ').css({'height':returnH+'px'});
}
function slider_page_home(){
        var windowWidth = $(window).width();

        /* Header - slide */
        if (windowWidth > 1105) {

            var windowHeight = $(window).height();

            $('.pr-slideshow ').css({'height':windowHeight+'px'});

        }  

}
 /* Header - slideshow */
$(function () {
      $('.pr-slideshow').slick({
        dots:true,  
        infinite: true,
        autoplay: true,
        speed: 300,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,   
    });

   /* Main - slideshow */

    $('.list-event').slick({
        dots:false,  
        infinite: true,
        autoplay: true,
        speed: 300,
        // cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 3,   
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    /* Header - Countdown */

    function countdown(endT,callback) {

        var days,hours,minutes,sec,timer;

        end = new Date(endT);

        end = end.getTime(); //Get initial Date in Milliseconds,

        if (isNaN(end)) {

           alert('@ countdown.js @  "Invalid Date", valid format- mm/dd/yyyy hh:mm:ss TT ');

           return;

        }

        timer = setInterval(calculate,1000);//Timer to calculate remaining time

        function calculate(){

         var current = new Date();

         var remaining = parseInt((end - current.getTime())/1000);//remaining seconds, 

            if (remaining <= 0){

                clearInterval(timer);

                days=0;

                hours=0;

                minutes=0;

                sec=0;

                display(days,hours,minutes,sec);

                if (typeof callback === 'function' ) {

                    callback();

                } 

            }else{

                days = parseInt(remaining/86400);

                remaining = (remaining%86400);

                hours = parseInt(remaining/3600);

                remaining = (remaining%3600);

                minutes = parseInt(remaining/60);

                remaining = (remaining%60);

                sec = parseInt(remaining);

                display(days,hours,minutes,sec);

            }

        }

        //Function For displaying Results in HTML page with specific ID's 

        function display(days,hours,minutes,sec) {

            var dl = days.toString().length;

            if (dl == "1") {

                sl = 2;

            }else{

                if (isNaN(dl)) {

                    sl = 3;

                }

                sl = dl;

            }

            document.getElementById("days").innerHTML = ("00"+days).slice(-sl);

            document.getElementById("hours").innerHTML = ("0"+hours).slice(-2);

            document.getElementById("minutes").innerHTML = ("0"+minutes).slice(-2);

            document.getElementById("seconds").innerHTML = ("0"+sec).slice(-2);

        }

    }//END countdown
    function callback(){
        alert('Time Out'); 
    };
    if($(".countDown").length ){
        countdown('03/26/2016  09:00:00 PM',callback);          
    }
 
   

    

  


    
});//END jQuery