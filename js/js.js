/**
 * Created by DELL on 2017/11/16.
 */
$(function () {
//    轮播
    $('.banner-btn').css("margin-left",-($('.banner-btn').width()/2));

        $('.banner-pic').bxSlider({
            widthSlide:500
        });
        $('.banner-wrapper .bx-wrapper .bx-prev').html('←');
        $('.banner-wrapper .bx-wrapper .bx-next').html('→');

        $('.banner-wrapper .bx-wrapper .bx-prev').click(function () {
            console.log(0);
        })

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
    if($(window).width() > 768){
        $('.honor-list ul').bxSlider({
            minSlides:4,
            maxSlides:4,
            moveSlides:4,
            slideWidth:300
        });
    }else {
        $('.honor-list ul').bxSlider({
            minSlides:1,
            maxSlides:1,
            moveSlides:1
        });
    }




//    关于我们人才招聘
    $('.recruit-list li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
//    产品中心侧栏
    $('.pd-sidebar-list > li').click(function (e) {
        if($(this).find('.pd-sublist').css('display') == 'none'){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find('.pd-sublist').show();
            $(this).siblings().children('ol.pd-sublist').hide();
        }else{
            $(this).removeClass('active');
            $(this).find('.pd-sublist').hide();
        }
    })

//    案例详情
    $('#zySlide').zySlide();

// 产品详情
    if($(window).width() > 768){
        $('.pdxq-slide').bxSlider({
            minSlides:3,
            maxSlides:3,
            moveSlides:1,
            slideWidth: 400
        });
    }else{
        $('.pdxq-slide').bxSlider({
            minSlides:1,
            maxSlides:3,
            moveSlides:1
        });
    }
    $('.pdxq-recommend-list .bx-wrapper .bx-prev').html('&lt;')
    $('.pdxq-recommend-list .bx-wrapper .bx-next').html('&gt;')

    var pdLi = $('.pdxq-pic-btn ul li').length;
    var pdPicH = $('.pdxq-pic-btn ul').height();
    var pdPicM =$('.pdxq-pic-btn ul li').outerHeight() + 10;
    var pdPici = 0;

    $('.pdxq-pic-l').click(function () {
        pdPici ++;
        if(pdPici > pdLi - 1){
            pdPici = 0;
        }
        $('.pdxq-pic-btn ul').css('margin-top',-pdPicM*pdPici + 'px');
        console.log(pdLi);
        console.log(pdPici);
    })

    $('.pdxq-pic-r').click(function () {
        pdPici --;
        if(pdPici < 0){
            pdPici = pdLi - 1;
        }
        $('.pdxq-pic-btn ul').css('margin-top',-pdPicM*pdPici + 'px');

    })

    $('.pdxq-pic-btn ul li').click(function () {
        var Inow = $(this).index();
        $('.pdxq-pic-pic ul li').eq(Inow).show().siblings().hide();
    })

    var pdTXTh = $('.pdxq-text-box p').height();
    var pdTXTm = $('.pdxq-text-box').height();
    var pdTXTpage = Math.ceil(pdTXTh/pdTXTm);
    var pdTXTi = 0;

    $('.pd-text-l').click(function () {
        pdTXTi--;
        if(pdTXTi < 0){
            pdTXTi = pdTXTpage -1;
        }
        $('.pdxq-text-box p').css('margin-top',-pdPicM*pdTXTi);
    })
    $('.pd-text-r').click(function () {
        pdTXTi++;
        if(pdTXTi > pdTXTpage -1){
            pdTXTi = 0;
        }
        $('.pdxq-text-box p').css('margin-top',-pdPicM*pdTXTi);
    })

//    手机导航
    $('#sj-nav-bar').click(function () {
        $('.sj-nav-menu').slideToggle();
    })

})