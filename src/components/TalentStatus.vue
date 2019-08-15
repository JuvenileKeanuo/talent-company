<template>
    <div>
        <div class="box">
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">职工人数</p>
                    <div class="item-box">
                        <InputNumberWithLabel label="职工人数" v-model="form[0]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">上一年度产值（万元）</p>
                    <div class="item-box">
                        <InputNumberWithLabel label="上一年度产值（万元）：" v-model="form[0]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">研发经费投入（万元）</p>
                    <div class="item-box">
                        <InputNumberWithLabel label="研发经费投入（万元）" v-model="form[0]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">新产品销售收入（万元）</p>
                    <div class="item-box">
                        <InputNumberWithLabel label="新产品销售收入（万元）" v-model="form[0]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">专利申请授权数</p>
                    <div class="item-box">
                        <InputNumberWithLabel label="专利申请授权数" v-model="form[0]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">性别结构</p>
                    <div class="input-box">
                        <InputNumberWithLabel label="男" v-model="form[1]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="女" v-model="form[2]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">年龄结构</p>
                    <div class="input-box">
                        <InputNumberWithLabel label="30岁以下" v-model="form[3]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="31-41" v-model="form[4]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="41-50" v-model="form[5]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="51-60" v-model="form[6]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="61岁以上" v-model="form[7]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">学历结构</p>
                    <div class="input-box">
                        <InputNumberWithLabel label="博士研究生" v-model="form[3]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="硕士研究生" v-model="form[4]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="本科" v-model="form[5]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="大专" v-model="form[6]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="大专以下" v-model="form[7]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">薪酬（月）</p>
                    <div class="input-box">
                        <InputNumberWithLabel label="3000元以下" v-model="form[3]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="3000-4000" v-model="form[4]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="4000-5000" v-model="form[5]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="5000-6000" v-model="form[6]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="6000-8000" v-model="form[7]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="8000-10000" v-model="form[7]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="10000-12000" v-model="form[7]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="12000-15000" v-model="form[7]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="15000-20000" v-model="form[7]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="20000元以上" v-model="form[7]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
            <div class="box-item">
                <Card class="card" :bordered="false">
                    <p slot="title">获得荣誉</p>
                    <div class="input-box">
                        <InputNumberWithLabel label="国家级" v-model="form[3]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="省部级" v-model="form[4]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="厅局级" v-model="form[5]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="其它" v-model="form[6]"></InputNumberWithLabel>
                        <InputNumberWithLabel label="无" v-model="form[7]"></InputNumberWithLabel>
                    </div>
                </Card>
            </div>
        </div>
        <GangWeiLeiBie></GangWeiLeiBie>
    </div>
</template>
<style scoped>
    .box {
        display: flex;
        flex-wrap: wrap;
        margin: 30px 100px;
    }
    .box-item {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 0 20px 10px 0;
    }
    .input-box {
        display: flex;
    }
</style>
<script>
    import InputNumberWithLabel from '../components/InputNumberWithLabel.vue';
    import GangWeiLeiBie from '../components/GangWeiLeiBie.vue';
    export default {
        components: {
            InputNumberWithLabel,
            GangWeiLeiBie,
        },
        data(){
            return {
                form: {},
            }
        }
    }
</script>