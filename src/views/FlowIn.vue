<template>
    <div class="box">
        <VueElementLoading :active="this.$store.state.vueElementLoading"></VueElementLoading>
        <el-tabs tab-position="left">
            <el-tab-pane v-for="(item,index) in result" :key="index" :label="item['year']">
                <p class="title">单位人才流动汇总表-流入人才-{{item.year}}年</p>
                <FlowIn></FlowIn>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style scoped>
    .box {
        margin-top: 20px;
    }
    .title {
        text-align: center;
        font-size: 16px;
        font-weight: bolder;
    }
</style>
<script>
    import FlowIn from '../components/FlowIn.vue'
    import VueElementLoading from 'vue-element-loading'
    export default {
        components:{
            FlowIn,
            VueElementLoading,
        },
        data() {
            return {
                result: [
                    {"year": "2009"},
                    {"year": "2010"},
                    {'year': '2011'},
                    {'year': '2012'},
                    {'year': '2013'},
                    {'year': '2014'},
                    {'year': '2015'},
                    {'year': '2016'},
                    {'year': '2017'},
                    {'year': '2018'}
                ],
            }
        },
        created(){
            this.$store.state.vueElementLoading = true
        },
        mounted(){
            this.$store.state.vueElementLoading = false
        }
    }
</script>