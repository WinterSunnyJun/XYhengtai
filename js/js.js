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
})