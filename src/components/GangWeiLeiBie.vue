<template>
    <div class="cbox">
        <div class="box-item">
            <Card class="card" :bordered="false">
                <div class="add-box">
                    <p slot="title" class="add-box-title">岗位类别</p>
                    <div class="add">
                        <i-button type="info" @click="addHandle">添加</i-button>
                    </div>
                </div>
                <div class="input-box">
                    <div class="input-box-cascader" v-for="(item,index) in form" :key="index">
                        <CascaderWithInputWithLabel style="width:300px;margin-right: 30px" v-model="item['岗位类别']" :data="gangWeiLeiBie"></CascaderWithInputWithLabel>
                        <div class="del-btn">
                            <i-button type="error" style="margin-right: 10px" v-if="index>0" shape="circle" @click="delHandle(index)">删除</i-button>
                            <div style="width: 56px;margin-right: 10px" v-else></div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>
<style scoped>
    .cbox {
        display: flex;
        flex-wrap: wrap;
        margin: 5px 100px;
    }
    .box-item {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 0 20px 10px 0;
    }
    .input-box {
        display: flex;
        flex-wrap: wrap;
    }
    .card {
        box-sizing: border-box;
    }
    .add-box {
        display: flex;
    }
    .add-box-title {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 14px;
        color: #17233d;
        font-weight: 700;
        padding-left: 3px;
    }
    .add {
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    .input-box-cascader {
        display: flex;
    }

</style>
<script>
    import CascaderWithInputWithLabel from '../components/CascaderWithInputWithLabel.vue';
    import category from '../assets/data/category';
    export default {
        data(){
            return {
                form: [{}],
                gangWeiLeiBie: [],
            }
        },
        components: {
            CascaderWithInputWithLabel,
        },
        methods: {
            addHandle(){
                this.$data.form.push({});
            },
            delHandle(index){
                console.log(index);
                console.log(this.$data.form)
            }
        },
        created(){
            this.gangWeiLeiBie = category.jobCategory;
        },
    }
</script>