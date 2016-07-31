$(function() {
	isLowerBrowser() && (window.location = "notice.html"), getVisitNum()
});

function isLowerBrowser() {
	var e = !1;
	return navigator.userAgent.indexOf("MSIE") > 0 && (navigator.userAgent.indexOf("MSIE 6.0") > 0 ? e = !0 : navigator.userAgent.indexOf("MSIE 7.0") > 0 ? e = !0 : navigator.userAgent.indexOf("MSIE 8.0") > 0 ? e = !0 : navigator.userAgent.indexOf("MSIE 9.0") > 0 && (e = !0)), e
}

function getVisitNum() {
	var e = window.localStorage;
	e && (e.getItem("pageLoadCount") || e.setItem("pageLoadCount", 0), e.pageLoadCount = parseInt(e.getItem("pageLoadCount")) + 1, console.log("首页已被访问：" + e.pageLoadCount + " 次，谢谢您的访问~"))
}