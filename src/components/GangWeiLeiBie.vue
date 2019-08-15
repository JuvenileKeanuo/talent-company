<template>
    <div>
        <CascaderWithInputWithLabel label="行业分类" v-model="form[0]" :data="gangWeiLeiBie"></CascaderWithInputWithLabel>
    </div>
</template>
<style scoped>

</style>
<script>
    import CascaderWithInputWithLabel from '../components/CascaderWithInputWithLabel.vue';
    import category from '../assets/data/category';
    export default {
        data(){
            return {
                form: {},
                gangWeiLeiBie: [],
            }
        },
        components: {
            CascaderWithInputWithLabel,
        },
        methods: {

        },
        created(){
            this.gangWeiLeiBie = category.jobCategory;
        },
    }
</script>