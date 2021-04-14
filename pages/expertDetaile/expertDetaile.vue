<template>
	<view class="content">
		<view class="tui-bg"></view>
		<view class="tui-content-box">
			<view class="tui-header-center">
				<view class="tui-header-top">
					<image src="../../static/images/avatar.png" mode="aspectFill" class="avatar"></image>
					<view class="tui-btn">
						<view class="btn">
							<text class="font_family icon-bianjigerenzhongxin icon"></text>
							编辑
						</view>
						<view class="btn">
							<text class="font_family icon-renzheng icon"></text>
							编辑
						</view>
					</view>
				</view>
				<view class="tui-header-info">
					<view class="tui-nickname">
						<text class="name">潘绵顺</text>
						<text class="tag">主任医师</text>
						<text class="tag">上海武警医院</text>
						<text class="tag">放射外科</text>
					</view>
					<view class="sign">
						<text class="font_family icon-qianming icon"></text>
						添加签名
					</view>
					<view class="census">
						<view class="item">
							<text class="num">153</text>
							<text class="text">发布</text>
						</view>
						<view class="item">
							<text class="num">62</text>
							<text class="text">关注</text>
						</view>
						<view class="item">
							<text class="num">1530</text>
							<text class="text">粉丝</text>
						</view>
					</view>
					<view class="des" >
						<text :class="move?'text':'ones text'">从事立体定向放射治疗和放射损伤的研究及综合治疗20从事立体定向放射治疗和放射损伤的研究及综合治疗从事立体定向放射治疗和放射的研究及综合治疗从事立体定向放射治疗和放的研究及综合治疗从事立体定向放射治疗和放损伤的研究及综合治疗</text>
						<text :class="['font_family icon-chakangengduo icon',move?'lg180':'']" @click="moves"></text>
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
				move:false,
				tabs:[
					{name:"全部"},
					{name:"动态"},
					{name:"病例"},
					{name:"课程"}
				],
				currentIndex:0,
				list:[],
				status: 'loading',
				status1: 'loading',
				followlist:[],
			};
		},
		onLoad() {
			this.initfollow()
		},
		methods:{
			moves(){
				this.move =! this.move
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
					  	des:"三叉神经痛(trigeminal neuralgia，TN)是脑神经疾病或神经源性疼痛.... 一、TN病理学基础．病因学和发",
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
					// this.status1 = 'nomore'
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
	@import "./expertDetaile.scss";
</style>
