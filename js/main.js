/*
 * @arthor:tqtan;
 * @title:惠惠购物助手-18禁网购不完全报告;
 * @date:2014/10/12;
*/

 //  onePageScroll
Zepto(function($){
$(".main").onePageScroll({
    loop: false,  
    easing: "ease",
    animationTime: 500,
    pagination: false
  });
});

$('.arrow').bind('tap',function(){
    $(".main").moveDown();
});

$('#durex-btn').bind('tap',function(){
	if($(this).hasClass('ele-durex-btn-disable')){
		$(this).removeClass('ele-durex-btn-disable');
		$('#gangben-btn').addClass('ele-gangben-btn-disable');
		$('.durex-wrap').removeClass('hide');
		$('.gangben-wrap').addClass('hide');
		$('.page5').css('background-color','#32a1ff');
	}
});

$('#gangben-btn').bind('tap',function(){
	if($(this).hasClass('ele-gangben-btn-disable')){
		$(this).removeClass('ele-gangben-btn-disable');
		$('#durex-btn').addClass('ele-durex-btn-disable');
		$('.durex-wrap').addClass('hide');
		$('.gangben-wrap').removeClass('hide');
		$('.page5').css('background-color','#20b573');
	}
});