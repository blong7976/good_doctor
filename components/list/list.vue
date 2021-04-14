<template>
	<view>
		<view class="list" >
			<view class="item" v-for="(m,index) in list" :key="index">
				<image :src="m.image_set[0].imagePath" mode="scaleToFill" class="img"></image>
				<view class="item-content">
					<view class="title">
						{{m.title}}
					</view>
					<view class="des">
						{{m.des}}
					</view>
					<view class="foot flex">
						<text class="chi">2020.08.20 - 2020.08.23</text>
						<text class="chi">广州</text>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" :loadText="loadText" :icon-type="iconType" :margin-top="30" :margin-bottom="30"/>
	</view>
</template>

<script>
	export default {
		name: "List",
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
		}
	}
</script>


<style lang="scss" scoped>
	@import "./list.scss";
</style>