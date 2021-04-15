<template>
	<view>
		<view class="list" >
			<view class="item" v-for="(m,index) in list" :key="index">
				<view class="user-box">
					<image :src="m.avatar" mode="scaleToFill" class="img"></image>
					<view class="user-info">
						<view class="info">
							<text class="name">{{m.name}}</text>
							<text class="label">{{m.job}}</text>
						</view>
						<view class="times">
							{{m.createdtime}}
						</view>
					</view>
					<view class="move" v-show="m.move">
						<text class="font_family icon-gengduo icon"></text>
					</view>
				</view>
				<view class="item-content">
					<view class="title">
						{{m.title}}
					</view>
					<view class="news-picbox">
						<!-- 视频 -->
						<view class="block w-full" v-if="m.video_set.length>0">
							<image :src="m.video_set[0].video_cover" mode="aspectFill" class="cover"></image>
							<image src="../../static/images/vr.png" mode="aspectFill" class="video-btn"></image>
						</view>
						<!-- 图片 -->
						<view class="block " v-if="m.image_set.length>0">
							<block v-for="(k,i) in m.image_set" :key="i">
								<image :src="k.img" mode="aspectFill" class="one-third"></image>
							</block>
						</view>
						<!-- LOGO -->
						<view class="block flex-start" v-if="m.newlogo">
							<view class="des">
								{{m.des}}
							</view>
							<image :src="m.newlogo" mode="aspectFill" class="newlogo"></image>
						</view>
						<view class="block flex-start" v-else>
							<view class="des">
								<ellipsis :content="m.des" rows></ellipsis>
							</view>
						</view>
					</view>
				</view>
				<view class="foot">
					<view class="dd">
						<text class="font_family icon-fenxiang icon"></text>
						<text>分享</text>
					</view>
					<view class="dd">
						<text class="font_family icon-xiaoxi icon"></text>
						<text>{{m.collect}}</text>
					</view>
					<view :class="m.isClick?'dd active':'dd'" @click="tappraise(index)">
						<text class="font_family icon-dianzan icon"></text>
						<text>{{m.praise}}</text>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" :loadText="loadText" :icon-type="iconType" :margin-top="30" :margin-bottom="30"/>
	</view>
</template>

<script>

	export default {
		name: "Cards",
		props: [
			'list',
			'status'
		],
		data(){
			return{
				iconType: 'flower',
				loadText: {
					loadmore: '上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				},
			}
		},
		methods:{
			tappraise(index){
				this.$emit('tap_praise',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./cards.scss";
</style>
