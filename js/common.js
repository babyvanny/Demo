// 页面变化时, 更新html字体大小, 从而整体放大缩小页面
var adjustWith = function (baseWidth) {
    var rate = window.innerWidth/baseWidth;
    console.log(111)
    document.getElementsByTagName("html")[0].style.fontSize = 100 * rate + "px";
}
document.body.onload = window.onresize = function () {
    adjustWith(320);
}