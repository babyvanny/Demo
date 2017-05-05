// 页面变化时, 更新html字体大小, 从而整体放大缩小页面
var adjustWith = function (baseWidth) {
    var rate = window.innerWidth/baseWidth;
    console.log(111)
    document.getElementsByTagName("html")[0].style.fontSize = 100 * rate + "px";
}
document.body.onload = window.onresize = function () {
    adjustWith(320);
}

//链接
$(".index-go>img").click(function(){

      window.location.href="arts.html"
})

$(".arts-go>img").click(function(){

      window.location.href="designerInfo.html"
})

//第三个页面，点赞

$(".detail_c").click(function(){
    var heart_n = parseInt($(".heart_n").text());
    if($(this).attr("src")=="img/Likes.png"){

       $(this).attr("src","img/Heart-fill.png");
       $(".heart_n").text(heart_n+1)

    }else{
        $(this).attr("src","img/Likes.png");
         $(".heart_n").text(heart_n)

    }
})
//第三个页面评论滑动的关闭按钮
$(".comment_b").click(function(){
    var bucket_n = parseInt($(".bucket_n").text());
    var msg_n = parseInt($(".msg_n").text());
    $(this).parents(".comment").remove();
    $(".bucket_n").text(bucket_n+1);
    $(".msg_n").text(msg_n-1);

})

