<template>
	<view class="content">
		<!-- 顶部搜索栏 -->
		<view class="seach-fixed-box">
			<text class="font_family icon-saoyisao icon"></text>
			<view class="seach-input-box">
				<text class="font_family icon-fangdajing icon"></text>
				<text class="placeholder">钟南山</text>
			</view>
			<text class="font_family icon-fabu icon"></text>
		</view>
		<!-- 菜单 -->
		<view class="navber">
			<view class="nav" v-for="(m,index) in navs" :key="index" @click="routerTo(m.href)">
				<image :src="'../../static/images/'+m.icon" mode="aspectFill" class="icon"></image>
				<view class="name">
					{{m.name}}
				</view>
			</view>
		</view>
		
		<!-- 关注 || 热门 -->
		<view class="hot-topic">
			<view class="topic-header">
				<block v-for="(m,index) in tabs" :key="index" >
					<view :class="currentIndex==index?'tabs active':'tabs'" @click="changeTabs(index)">
						<text>{{m.name}}</text>
					</view>
				</block>
			</view>
			<Cards v-if="currentIndex == 0" :list="followlist" :status="status" @tap_praise="tap_praise"></Cards>
			<List v-if="currentIndex == 1" :list="list" :status="status"></List>
		</view>
		
		
	</view>
</template>

<script>
	import List from '../../components/list/list.vue'
	import Cards from '../../components/cards/cards.vue'
	export default {
		components:{
			List,
			Cards
		},
		data() {
			return {
				navs: [{
					icon:"nav1.png",
					name:"资讯",
					href:"/pages/news/news"
				},{
					icon:"nav2.png",
					name:"病例",
					href:""
				},{
					icon:"nav3.png",
					name:"课程",
					href:""
				},{
					icon:"nav4.png",
					name:"会议",
					href:""
				},{
					icon:"nav5.png",
					name:"培训",
					href:""
				},{
					icon:"nav6.png",
					name:"MDT",
					href:""
				},{
					icon:"nav7.png",
					name:"专家",
					href:"/pages/expert/expert"
				},{
					icon:"nav8.png",
					name:"知识库",
					href:""
				}],
				tabs:[
					{name:"关注"},
					{name:"热门"}
				],
				currentIndex:0,
				list:[],
				status: 'loading',
				status1: 'loading',
				followlist:[],
				isClick:"",
				// followlist:[{
				// 	avatar:"../../static/images/avatar.png",
				// 	name:"潘绵顺",
				// 	job:"主任医师",
				// 	createdtime:"2021-04-06",
				// 	title:"三叉神经痛发病机制及伽马刀治疗",
				// 	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
				// 	newlogo:"",
				// 	image_set:[],
				// 	video_set:[],
				// 	collect:'126',
				// 	praise:'109',
				// },{
				// 	avatar:"../../static/images/avatar.png",
				// 	name:"潘绵顺",
				// 	job:"主任医师",
				// 	createdtime:"2021-04-06",
				// 	title:"三叉神经痛发病机制及伽马刀治疗",
				// 	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
				// 	newlogo:"../../static/images/new-logo.png",
				// 	image_set:[],
				// 	video_set:[],
				// 	collect:'126',
				// 	praise:'109',
				// },{
				// 	avatar:"../../static/images/avatar.png",
				// 	name:"潘绵顺",
				// 	job:"主任医师",
				// 	createdtime:"2021-04-06",
				// 	title:"三叉神经痛发病机制及伽马刀治疗",
				// 	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
				// 	newlogo:"",
				// 	image_set:[],
				// 	video_set:[
				// 		{
				// 			video_path:"",
				// 			video_cover:"../../static/images/video_cover.png",
				// 		}
				// 	],
				// 	collect:'126',
				// 	praise:'109',
				// },{
				// 	avatar:"../../static/images/avatar.png",
				// 	name:"潘绵顺",
				// 	job:"主任医师",
				// 	createdtime:"2021-04-06",
				// 	title:"三叉神经痛发病机制及伽马刀治疗",
				// 	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
				// 	newlogo:"",
				// 	image_set:[{img:"../../static/images/new_set_img1.png"},{img:"../../static/images/new_set_img2.png"},{img:"../../static/images/new_set_img3.png"}],
				// 	video_set:[],
				// 	collect:'126',
				// 	praise:'109',
				// }]
			}
		},
		onLoad() {
			this.initfollow()
		},
		methods: {
			routerTo(url){
				uni.navigateTo({
					url
				})
			},
			changeTabs(i){
				this.currentIndex = i
				if(i == 0){
					this.followlist = []
					this.initfollow()
				}else{
					this.list = []
					this.init()
				}
			},
			init() {
				this.status = 'loading'
				setTimeout(()=>{
					this.list = Array.from({ length: 10 }, (_, idx) => ({
					   id: idx + 1,
					   image_set: [{imagePath:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190620%2Ffa04d434499a4b1384cb363a8744767b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620833974&t=8b1744b2c15d56a2d5a4ac14c149b320'}],
					   des:'玛西普平',
					   title: '中国肿瘤学大会第一轮会议' + idx,
					}))
					this.status = 'nomore'
				},400)
			},
			initfollow() {
				this.status1 = 'loading'
				setTimeout(()=>{
					this.followlist = Array.from({ length: 10 }, (_, idx) => ({
					  	avatar:"../../static/images/avatar.png",
					  	name:"潘绵顺",
					  	job:"主任医师",
					  	createdtime:"2021-04-06",
					  	title:"三叉神经痛发病机制及伽马刀治疗",
					  	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
					  	newlogo:idx == 1 ?"../../static/images/new-logo.png":"",
					  	image_set:idx == 2 ? [{img:"../../static/images/new_set_img1.png"},{img:"../../static/images/new_set_img2.png"},{img:"../../static/images/new_set_img3.png"}] :[] ,
						video_set:idx == 3 ?[
							{
								video_path:"",
								video_cover:"../../static/images/video_cover.png",
							}
						]:[],
					  	collect:100+idx,
					  	praise:120+idx,
						isClick:false
					}))
					this.status1 = 'nomore'
				},400)
			},
			
			tap_praise(e){
				if(this.followlist[e].isClick == 0){
					this.$set(this.followlist[e],'isClick',true )
					this.$set(this.followlist[e],'praise',Number(this.followlist[e].praise)+1 )
				}else{
					this.$set(this.followlist[e],'isClick',false )
					this.$set(this.followlist[e],'praise',Number(this.followlist[e].praise)-1 )
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss";
</style>
