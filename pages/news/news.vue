<template>
	<view class="content">
		<!-- 顶部搜索栏 -->
		<view class="seach-fixed-box">
			<view class="seach-input-box">
				<text class="font_family icon-fangdajing icon"></text>
				<input class="input-search" type="text" placeholder="钟南山"  />
			</view>
		</view>
		<view class="offset-top-120">
			<u-tabs :list="list" bg-color="#f4f5f7"  :is-scroll="false" is-scroll :current="current" @change="change"></u-tabs>
			
			<view class="list" >
				<view class="item img-is-right" v-for="(m,index) in datas" :key="index" @click="routerTo('/pages/newsDetaile/newsDetaile')">
					<view class="item-content">
						<view class="title">
							<view class="text">{{m.title}}</view>
						</view>
						<view class="des">
							{{m.des}}
						</view>
						<view class="foot flex">
							<text class="chi">2010人看过</text>
							<text class="chi">508收藏</text>
							<text class="chi">50分钟前</text>
						</view>
					</view>
					<view class="img-box">
						<image :src="m.image_set[0].imagePath" mode="scaleToFill" class="img"></image>
					</view>
				</view>
			</view>
			<u-loadmore :status="status" :loadText="loadText" :icon-type="iconType" :margin-top="30" :margin-bottom="30"/>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:"",
				iconType: 'flower',
				loadText: {
					loadmore: '上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				},
				
				list: [{
					name: '全部'
				}, {
					name:  '肺癌'
				}, {
					name: '乳腺癌'
				},{
					name: '妇科肿瘤'
				},{
					name: '脑肿瘤'
				}, {
					name:  '脑肿瘤2'
				}],
				current: 0,
				
				datas:[]
				
			};
		},
		onLoad() {
			this.init()
		},
		methods:{
			change(index) {
				this.current = index;
				this.datas = []
				this.init()
			},
			init() {
				this.status ="loading"
				setTimeout(()=>{
					this.datas = Array.from({ length: 10 }, (_, idx) => ({
					   id: idx + 1,
					   image_set: [{imagePath:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190620%2Ffa04d434499a4b1384cb363a8744767b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620833974&t=8b1744b2c15d56a2d5a4ac14c149b320'}],
					   des:'中国肿瘤学大会第一轮会议8',
					   title: '中国肿瘤学大会第一轮会议',
					   move:true,
					   date:'2021.04.10',
					   collect:'128',
					   praise:'96'
					}))
					this.status ="nomore"
				},1000)
			},
			routerTo(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./news.scss";
	@import "../../components/list/list.scss";
</style>
