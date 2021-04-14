<template>
	<view>
		<view class="tui-user-box">
			<view class="tui-header-center">
				<view class="tui-avatar">
					<image src="../../static/images/avatar.png" mode="scaleToFill" class="img"></image>
				</view>
				<view class="tui-info">
					<view class="tui-nickname">
						<text class="name">潘绵顺</text>
						<text class="job">主任医师</text>
					</view>
					<view class="tui-explain">
						上海武警医院 放射外科
					</view>
				</view>
				<view class="tui-btn-edit">
					<text class="font_family icon-bianjigerenzhongxin icon"></text>
					<text class="font_family icon-shezhi icon"></text>
				</view>
			</view>
			<view class="tui-header-btm">
				<view class="tui-btm-item">
					<view class="tui-btm-num">
						112
					</view>
					<view class="tui-btm-text">
						发布
					</view>
				</view>
				<view class="tui-btm-item">
					<view class="tui-btm-num">
						3
					</view>
					<view class="tui-btm-text">
						关注
					</view>
				</view>
				<view class="tui-btm-item">
					<view class="tui-btm-num">
						192
					</view>
					<view class="tui-btm-text">
						粉丝
					</view>
				</view>
			</view>
		</view>
		
		<view class="tui-content-box">
			<view class="tui-box">
				<view v-for="(m,i) in navs" :key="i" class="tui-navs-item">
					<view class="tui-navs-icon">
						<image :src="m.icon" mode="aspectFill" class="icon"></image>
					</view>
					<view class="tui-navs-text">
						{{m.name}}
					</view>
				</view>
			</view>
			
			<view class="tui-box">
				<view v-for="(m,i) in order" :key="i" class="tui-navs-item">
					<view class="tui-navs-icon">
						<image v-if="m.icon" :src="m.icon" mode="aspectFill" class="icon"></image>
						<text v-if="m.text" class="text">{{m.text}}</text>
					</view>
					<view class="tui-navs-text">
						{{m.name}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs:[{
					icon:"../../static/images/me1.png",
					name:"收藏",
					path:""
				},{
					icon:"../../static/images/me2.png",
					name:"评论",
					path:""
				},{
					icon:"../../static/images/me3.png",
					name:"点赞",
					path:""
				},{
					icon:"../../static/images/me4.png",
					name:"历史",
					path:""
				},{
					icon:"../../static/images/me5.png",
					name:"课程",
					path:""
				},{
					icon:"../../static/images/me6.png",
					name:"草稿箱",
					path:""
				},{
					icon:"../../static/images/me7.png",
					name:"订单",
					path:""
				},{
					icon:"../../static/images/me8.png",
					name:"会议",
					path:""
				}],
				order:[{
					icon:"",
					text:"50",
					name:"积分"
				},{
					icon:"../../static/images/me9.png",
					name:"优惠券"
				},{
					icon:"../../static/images/me10.png",
					name:"排行榜"
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./me.scss";
</style>
