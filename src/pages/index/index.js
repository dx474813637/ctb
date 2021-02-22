// 首页使用的js
import Swiper, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";

// 引入公共css
import "bootstrap/dist/css/bootstrap.css";
import "../common/reset.css";
import "./index.pcss";
import "@/assets/global.pcss";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

// console.log("首页");
Swiper.use([Pagination, Autoplay, EffectFade]); // 使用需要的功能
const mySwiper = new Swiper("#swiper .swiper-container", {
	pagination: {
		el: ".swiper-pagination", // 分页器
	},
	loop: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});
const mySwiperTbtj = new Swiper("#tbtj .swiper-container", {
	slidesPerView: 4,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination", // 分页器
	},
	loop: true,
	// autoplay: {
	// 	delay: 10000,
	// 	disableOnInteraction: false,
	// },
});
