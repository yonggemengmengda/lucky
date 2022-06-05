<!--
 * @Author: Yong
 * @Date: 2022-06-05 18:34:45
 * @LastEditors: Yong
 * @LastEditTime: 2022-06-05 20:08:41
 * @Description: 
-->
<template>
	<div id="app">
		<div class="overall">
			<div class="cj-box">
				<div class="cj-block" v-for="item in 3" :key="item">
					<ul class="prize">
						<li
							v-for="(i, index) in list"
							:key="index"
							class="prize-item"
							:style="`transform: rotateX(${
								(360 / list.length) * index
							}deg)  translateZ(${23 * list.length}px)`"
						>
							<img :src="i.title" style="width: 122px; height: 155px" />
						</li>
					</ul>
				</div>
			</div>
			<div class="chou" @click="start">抽奖</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	data() {
		return {
			list: [
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021189&t=f0c28a952c4f08d6d3c467d85d826422",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109250135543096-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=80a8c823ec3dd16a69632f93b1a5c9e9",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F210924233115O14-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=30ec5000fffb895e594e71c8809c5da1",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F21031FKU44S6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=c8719331c182d56b3a053dafc2ac9173",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F01%2F210924111121L18-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=94049c9427b2dfd80edc344b5e9b8560",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=3b7b5cc711023e2700d3f01504f28238",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210Q6133S9A22-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=ed615fb3fdf9da7cd9a67e205e6b8291",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910021352061916-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=0e3e029742cd74c0e4724f4381014409",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0I120152936%2F200I1152936-5-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=5177f128ecd0cfd4991c45f730d70b56",
				},
				{
					title:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F7%2F10%2Fb87c8e05-344a-48d1-869f-ef6929fc8b17.jpg&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657021190&t=b121cf80fc12ee968c4e666de61616e7",
				},
			], //奖品列表，目前最多支持7个，想支持更多，可以手动添加对应的css样式动画
			winner: null, //指定的奖品 null时为不中奖
			loading: false, //抽奖执行状态，防止用户多次点击
			prizeElement: null, //储存获取到的滚动容器的标签
			animationClass: [], //3个抽奖模块对应的动画属性,方便后来对应添加和移除该class样式
		};
	},
	mounted() {
		//通过获取奖品个数，来改变css样式中每个奖品动画的旋转角度
		// var(--nums) 实现css动画根据奖品个数，动态改变
		let root = document.querySelector(":root");
		root.style.setProperty("--nums", this.list.length);
	},
	methods: {
		//开始抽奖
		start() {
			if (!this.loading) {
				this.prizeElement = document.querySelectorAll(".prize");
				this.prizeElement.forEach((element, index) => {
					if (this.animationClass[index]) {
						element.classList.remove(this.animationClass[index].class);
					}
				});
				//此处可指定后端返回的指定奖品------------------------------------------------
				this.winner = "9";
				this.winCallback();
				this.loading = true;
			}
		},
		//中奖返回方法
		winCallback() {
			setTimeout(() => {
				/* 此处是为了解决当下次抽中的奖励与这次相同，动画不重新执行的 */
				/* 添加一个定时器，是为了解决动画属性的替换效果，实现动画的重新执行 */
				this.prizeElement.forEach((element, index) => {
					element.classList.add(this.getAnimationClass(this.winner, index));
					setTimeout(() => {
						element.style.transform = `rotateX(${this.animationClass[index].rotate}deg)`;
					}, 2000);
				});
			}, 0);
			// 因为动画时间为 3s ，所以这里4s后获取结果，其实结果早就定下了，只是何时显示，告诉用户
			setTimeout(() => {
				this.loading = false;
				console.log(
					`恭喜你获得了${this.winner}-----------------------------------`
				);
			}, 7000);
		},
		//获取对应的class样式，并储存起来，方便后来的class移除
		getAnimationClass(winner, index) {
			//如果是后端指定奖品
			if (winner !== null) {
				this.animationClass[index] = {
					num: winner,
					class: `wr${winner}`,
					rotate: (360 / this.list.length) * -winner,
				};
				return `wr${winner}`;
			} else {
				let ran = this.random(0, this.list.length - 1);
				if (this.animationClass[0]) {
					while (this.animationClass[0].num === ran) {
						ran = this.random(0, this.list.length - 1);
					}
				}
				this.animationClass[index] = {
					num: ran,
					class: `wr${ran}`,
					rotate: (360 / this.list.length) * -ran,
				};
				return `wr${ran}`;
			}
		},
		//随机一个整数
		random(min, max) {
			return parseInt(Math.random() * (max - min + 1) + min);
		},
	},
};
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.overall {
	perspective: 3000px;
}
/* 抽奖按钮 */
.chou {
	user-select: none;
	cursor: pointer;
	padding: 10px;
	margin: 20px auto;
	color: white;
	background: #19aca4;
	width: 100px;
	font-size: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px #ccc;
	&:active {
		transform: scale(0.9);
	}
}
.prize-item {
	box-sizing: border-box;
}
.cj-box {
	background: white;
	box-shadow: 0 0 10px #ccc;
	border-radius: 5px;
	padding: 20px 10px;
	display: flex;
	.cj-block {
		width: 100%;
		height: 150px;
		margin: 0 10px;
		overflow: hidden;
		box-sizing: border-box;
		.prize {
			display: inline-block;
			transform-style: preserve-3d;
			width: 100%;
			height: 100%;
			margin: 0;
			list-style: none;
			padding: 0;
			position: relative;
			perspective: 3000px;
			/* 每个奖品格子的样式 */
			li {
				transform-style: preserve-3d;
				// transform-origin: 50% 0%;
				display: block;
				line-height: 150px;
				font-weight: bold;
				font-size: 30px;
				position: absolute;
				width: 100%;
				height: 100%;
				color: #fcfcfc;
			}
		}
	}
}
/* delay延迟 */
.cj-block:nth-child(1) ul {
	animation-delay: 0.2s;
}
.cj-block:nth-child(2) ul {
	animation-delay: 0.4s;
}
.cj-block:nth-child(3) ul {
	animation-delay: 0.6s;
}
.prize {
	animation-duration: 6s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: both;
	animation-iteration-count: 1;
}
.wr0 {
	animation-name: play0;
}
.wr1 {
	animation-name: play1;
}
.wr2 {
	animation-name: play2;
}
.wr3 {
	animation-name: play3;
}
.wr4 {
	animation-name: play4;
}
.wr5 {
	animation-name: play5;
}
.wr6 {
	animation-name: play6;
}
.wr7 {
	animation-name: play7;
}
.wr8 {
	animation-name: play8;
}
.wr9 {
	animation-name: play9;
}
@keyframes play0 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * 0));
	}
}
@keyframes play1 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -1));
	}
}
@keyframes play2 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -2));
	}
}
@keyframes play3 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -3));
	}
}
@keyframes play4 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -4));
	}
}
@keyframes play5 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -5));
	}
}
@keyframes play6 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -6));
	}
}
@keyframes play7 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -7));
	}
}
@keyframes play8 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -8));
	}
}
@keyframes play9 {
	to {
		transform: rotateX(calc(5 * 360deg + 360deg / var(--nums) * -9));
	}
}
</style>
