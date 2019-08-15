<template>
    <div>
        <CompanyInfo></CompanyInfo>
        <div class="button-box">
            <Button class="button" type="primary" @click="saveHandle">保存</Button>
        </div>
    </div>
</template>
<style scoped>
    .button-box {
        text-align: right;
        padding-right: 100px;
    }
    .button {
        width: 100px;
    }
</style>
<script>
    import CompanyInfo from '../components/CompanyInfo.vue';
    export default {
        components: {
            CompanyInfo,
        },
        methods: {
            saveHandle(){
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
            }
        }
    }
</script>