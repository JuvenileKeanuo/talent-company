<template>
    <div class="box">
        <el-tabs tab-position="left">
            <el-tab-pane v-for="(item,index) in result" :key="index" :label="item['year']">
                <p class="title">单位人才情况汇总表-存量信息-{{item.year}}年</p>
                <TalentStatus></TalentStatus>
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
    import TalentStatus from '../components/TalentStatus.vue'

    export default {
        components: {
            TalentStatus,
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
        }
    }
</script>