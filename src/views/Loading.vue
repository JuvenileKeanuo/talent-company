<template>
	<div>
		<VueElementLoading :active="this.$store.state.vueElementLoading"></VueElementLoading>
	</div>
</template>
<style scoped>

</style>
<script>
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'
    import VueElementLoading from 'vue-element-loading'
	export default {
	    components:{
            VueElementLoading,
		},
		created() {
            this.$store.state.vueElementLoading = true
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
		},
		mounted(){
            this.$store.state.vueElementLoading = false
		}
	}
</script>
