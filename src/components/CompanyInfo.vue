<template>
    <div>
        <div class="box">
            <div class="item">
                <InputWithLabel label="单位名称:" v-model="form[0]" />
            </div>
            <div class="item">
                <InputWithLabel label="统一社会信用代码（或组织机构代码）：" v-model="form[1]" />
            </div>
            <div class="item">
                <SelectWithLabel label="所属地域：" v-model="form[2]" :list="suoShuDiYu"></SelectWithLabel>
            </div>
            <div class="item">
                <SelectWithLabel label="所属行业：" v-model="form[3]" :list="suoShuHangYe"></SelectWithLabel>
            </div>
            <div class="item">
                <CascaderWithLabel label="行业分类" v-model="form[4]" :data="industryCategory" ></CascaderWithLabel>
            </div>
            <div class="item">
                <SelectWithLabel label="单位性质：" v-model="form[5]" :list="danWeiXingZhi"></SelectWithLabel>
            </div>
            <div class="item">
                <InputWithLabel label="填报人:" v-model="form[6]" />
            </div>
            <div class="item">
                <InputWithLabel label="联系电话:" v-model="form[7]" />
            </div>
            <div class="item">
                <InputWithLabel label="QQ:" v-model="form[8]" />
            </div>
            <div class="item">
                <InputWithLabel label="微信:" v-model="form[9]" />
            </div>
            <div class="item">
                <InputWithLabel label="电子邮箱:" v-model="form[10]" />
            </div>
            <div class="item">

            </div>
        </div>
    </div>
</template>
<style scoped>
    .box {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        justify-content: space-around;  /*space-between、space-around*/
        padding: 0 100px;
    }
    .item {
        width: 300px;
        height: 80px;
        margin-right: 10px;
    }
    .none {
        display: none;
    }
</style>
<script>
    import InputWithLabel from '../components/InputWithLabel.vue';
    import SelectWithLabel from '../components/SelectWithLabel.vue';
    import CascaderWithLabel from '../components/CascaderWithLabel.vue';
    import category from '../assets/data/category';

    export default {
        components: {
            InputWithLabel,
            SelectWithLabel,
            CascaderWithLabel,
        },
        data(){
            return {
                form: {},
                suoShuDiYu: [],
                suoShuHangYe: [],
                industryCategory: [],
                danWeiXingZhi: [],
            }
        },
        created(){
            this.suoShuDiYu = category.suoShuDiYu;
            this.suoShuHangYe = category.suoShuHangYe;
            this.industryCategory = category.industryCategory;
            this.danWeiXingZhi = category.danWeiXingZhi;
        },

    }
</script>