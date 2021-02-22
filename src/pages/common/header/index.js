// 头部的js代码
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/global.pcss";
import "./index.css";
let i 
$('#menu li').hover(function() {
  // if(!$(this).hasClass('active')) {
    $(this).addClass('active').siblings().removeClass('active')
    var tarLi = $('#headerList .list-wrap').eq($(this).index())
    tarLi.fadeIn().siblings().hide()
  // }
}, function() {
  $('#headerList .list-wrap').eq($(this).index()).hide()
})
$('#menu').hover(function(){}, function() {
  $('#menu li').removeClass('active')
  $('#headerList .list-wrap').hide()
})
$('#headerList .list-wrap').hover(function() {
  $(this).show()
}, function() {
  $('#menu li').removeClass('active')
  $(this).hide()
})