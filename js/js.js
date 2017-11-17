/**
 * Created by DELL on 2017/11/16.
 */
$(function () {
//    轮播
    $('.banner-btn').css("margin-left",-($('.banner-btn').width()/2));
//   首页关于我们
    var IaNOW = 0;
    var IaLi = $('.Iabout-list li').length;
    $('.Iabout-left').click(function () {
        IaNOW--;
        if(IaNOW < 0){
            IaNOW = IaLi - 1;
        }
        $('.Iabout-list li').eq(IaNOW).show().siblings().hide();
    })
    $('.Iabout-right').click(function () {
        IaNOW++;
        if(IaNOW > IaLi - 1){
            IaNOW = 0;
        }
        $('.Iabout-list li').eq(IaNOW).show().siblings().hide();
    })
//    首页荣誉资质
    var IhNow = 0;
    var IhLi = $('.Inew-honor-list ul li').length;
    $('.Inew-honor-left').click(function () {
        IhNow--;
        if(IhNow < 0){
            IhNow = IhLi - 1;
        }
        $('.Inew-honor-list ul li').eq(IhNow).show().siblings().hide();
    })
    $('.Inew-honor-right').click(function () {
        IhNow++;
        if(IhNow > IhLi - 1){
            IhNow = 0;
        }
        $('.Inew-honor-list ul li').eq(IhNow).show().siblings().hide();
    })
//    关于我们荣誉资质
    $('.honor-list ul').bxSlider({
        minSlides:4,
        maxSlides:4,
        moveSlides:4,
        slideWidth:300
    });

//    关于我们人才招聘
    $('.recruit-list li').click(function () {
        $(this).find('.recruit-hide').slideToggle();
        if ($(this).find('.recruit-hide').show()){
            $(this).addClass('active');
        }else {
            $(this).removeClass('active');
        }

    })

})