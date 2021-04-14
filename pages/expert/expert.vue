<template>
	<view class="content">
		<!-- 顶部搜索栏 -->
		<view class="seach-fixed-box">
			<view class="seach-input-box">
				<text class="font_family icon-fangdajing icon"></text>
				<input class="input-search" type="text" placeholder="钟南山"  />
			</view>
		</view>
		
		<view class="tui-product-list">
			<view class="tui-pro-item" v-for="(m,i) in expert" :key="i" @click="routerTo('/pages/expertDetaile/expertDetaile')">
				<view class="tui-avatar">
					<image :src="m.avatar" mode="aspectFill" class="avatar"></image>
				</view>
				<view class="tui-info">
					<view class="tui-nickname">
						{{m.name}} <text class="text">{{m.job}}</text>
					</view>
					<view class="adds">
						{{m.adds}}
					</view>
					<view class="des">
						{{m.des}}
					</view>
				</view>
				<view :class="[m.isfollow?'default':'ply','tui-btn-edit']" @click.stop="handel(i)">
					<text :class="['font_family icon',m.isfollow?'icon-yiguanzhu':'icon-guanzhu']"></text>
					<text class="text">{{m.isfollow?'已关注':'关注'}}</text>
				</view>
			</view>
		</view>
		
		<u-loadmore :status="status" :loadText="loadText" :icon-type="iconType" :margin-top="30" :margin-bottom="30"/>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				expert:[],
				
				status:"loading",
				iconType: 'flower',
				loadText: {
					loadmore: '上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				},
			};
		},
		methods:{
			init() {
				this.status = 'loading'
				setTimeout(()=>{
					this.expert = Array.from({ length: 15 }, (_, idx) => ({
					   id: idx + 1,
					   avatar:"../../static/images/avatar.png",
					   name:"潘绵顺",
					   job:"主任医师",
					   adds:"上海武警医院-射外科",
					   des:"从事立体定向放射治疗和放射损伤的研究及综合治疗20余年。",
					   isfollow:idx == 0?true:false,
					}))
					this.status = 'nomore'
				},1000)
			},
			handel(i){
				this.$set(this.expert[i],'isfollow',!this.expert[i].isfollow)
			},
			routerTo(url){
				uni.navigateTo({
					url
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="scss" scoped>
	@import "./expert.scss";
</style>
