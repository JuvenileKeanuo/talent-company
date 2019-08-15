<template>
    <div>数据加载中。。。。</div>
</template>
<style scoped>

</style>
<script>
    export default {
        created(){
			this.$store.state.form._basic['单位名称'] = 'hahahahaha'
			this.$store.state.form._basic['所属地域'] = '齐齐哈尔'
			this.$store.state.loaded = true
            this.$router.push('/form/companyInfo')
        }
    }
</script>