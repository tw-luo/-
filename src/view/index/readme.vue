<template>
	<div id="readme">
		<h1 class="title">11饭店信息管理系统说明</h1>
		<div class="read">
			<p>1、本系统的所有功能包括：用户登录，获取用户信息，获取表格表单数据，数据的增删改，组件页面间数据的共享等</p><br>
			<p>2、该系统模块包括：用户登录，人事管理，商品管理，成本管理，订单管理，库存管理，会员管理</p><br>
			<p>3、突出技术：vueJs框架；Router页面跳转；Vuex数据共享;vue_resource请求获取json数据</p>
		</div>
		
	</div>
</template>

<script>
	export default {
	name: 'message',
	}
</script>

<style>
    .title{font-size:30px;
           margin-bottom:20px;
           font-weight:bold;}
	.read{text-align:left;
		font-size:20px;
		  margin:0px 30px 0px 30px;}
</style>