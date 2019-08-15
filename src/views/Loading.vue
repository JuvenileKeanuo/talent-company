<template>
	<div>数据加载中。。。。</div>
</template>
<style scoped>

</style>
<script>
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'

	export default {
		created() {
			this.$store.state.loaded = true
			axios({
				url: url.getForm,
				method: 'get',
				params: {
					user_name: util.getCookies(this).user_name,
					user_password: util.getCookies(this).user_password
				}
			}).then(res => {
				this.$store.state.form = res.data
				this.$router.push('/form/companyInfo')
			}).catch(err => {
				console.log(err);
			});
		}
	}
</script>
