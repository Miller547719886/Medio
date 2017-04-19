function mediaquery(){
  var w_width=$(document).width();
  $('html').css('font-size',(w_width / 360 * 125).toFixed(3)+'%');
}
$(function(){
  mediaquery();
})
$(document).resize(function(){
  mediaquery();
})
document.addEventListener('touchstart',function(){},false);
$('.video_switch').click(function(){
	$(this).addClass('switch_active');
	$('.topic_switch').removeClass('switch_active');
	$('.video_box').addClass('active');
	$('.topic_box').removeClass('active');
})
$('.topic_switch').click(function(){
	$(this).addClass('switch_active');
	$('.video_switch').removeClass('switch_active');
	$('.topic_box').addClass('active');
	$('.video_box').removeClass('active');
})
   jQuery(document).ready(function(){
        $.ajax({
             type: "get",
             async: false,
             url: "http://mideo.thehotapps.com/api.php/video/get?token=",
             dataType: "jsonp",
             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
             success: function(json){
                 alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
             },
             error: function(){
                 // alert('fail');
             }
         });
     });