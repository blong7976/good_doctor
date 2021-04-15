<template>
	<view>
		<view class="section">
			<view class="tui-news-title">
				Masep参加AANS年度科学会议
			</view>
			<view class="tui-news-cus">
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
				</view>
				<view class="ply tui-btn-edit" >
					<text class="font_family icon icon-guanzhu"></text>
					<text class="text">关注</text>
				</view>
			</view>
			<view class="des-box">
				<view class="title">
					神经外科肿瘤科:
				</view>
				<view class="des">
					美国神经外科医师协会（AANS）最初来自于1931年成立的Harvey和Cushing协会。在1967年，其名称更改为现在的协会 AANS已经发展成为一个科学和教育协会，在全球拥有8,000多个会员。它的任务是促进神经外科的发展，并为患者（主要是脊柱，脊髓，脑和神经）提供高质量的神经外科护理。预防，诊断，治疗和康复系统和周围神经系统疾病的医学专业。					马瑟普医学科技发展（深圳）有限公司参加了本次展览AANS，该展览与来自世界各地的神经外科医生和医务人员进行了交流和沟通。在AANS年的神经外科医生和医务人员进行交流。
				</view>
			</view>
		</view>
		
		
		<view class="tui-operation">
			<view class="tui-operation-left">
				<view class="tui-btn-comment"><text class="font_family icon-xiepinglun icon"></text>写评论</view>
			</view>
			<view class="tui-operation-right">
				<view class="tui-operation-item">
					<text class="font_family icon-xiaoxi icon"></text>
					<text class="tui-badge">3</text>
				</view>
				<view class="tui-operation-item">
					<text class="font_family icon-remendianzan icon"></text>
				</view>
				<view class="tui-operation-item">
					<text class="font_family icon-shoucang1 icon"></text>
				</view>
				<view class="tui-operation-item">
					<text class="font_family icon-zhuanfa icon"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				m:{
				   id:1,
				   avatar:"../../static/images/avatar.png",
				   name:"潘绵顺",
				   job:"主任医师",
				   adds:"上海武警医院-射外科",
				   des:"从事立体定向放射治疗和放射损伤的研究及综合治疗20余年。",
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./newsDetaile.scss";
</style>
