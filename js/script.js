$(function(){
// adjust slider height
var winH = $(window).height(),
upperH = $('.upper-bar').innerHeight(),
navH = $('.navbar').innerHeight();

$('.slider , .carousel-item , .testimonials ').height(winH - (upperH + navH) );



// work shuffle
shuffle();
$(window).resize(function() {
    shuffle();
});


// hover control icon
$('.carousel-control-prev , .carousel-control-next').mouseenter(function(){
    $(this).css('background','#ec1c23');
    })

    $('.carousel-control-prev , .carousel-control-next').mouseleave(function(){
        $(this).css('background','#000');
        })

        // triggre AOS
        AOS.init();

        // adjust counter Up

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


});





//  shuffle funcation

function shuffle() {
    var $winW = $(window).width();
    if ($winW <= 767) {
      
$('.work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
   if($(this).data('class') == 'all'){
       $('.shuffle-img .hd').show();

   } else {
    $('.shuffle-img .hd').hide();
    $($(this).data('class')).parent().show();

   } ;
}) 
    }
    if ($winW > 768) {
           
$('.work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
   if($(this).data('class') == 'all'){
       $('.shuffle-img .hd').css('opacity',1);

   } else {
     $('.shuffle-img .hd').css('opacity','.08');

    $($(this).data('class')).parent().css('opacity',1);

   } ;
})
    }
}
