<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="companyInfo" class="menu" @on-select="select">
            <MenuItem name="companyInfo">
                <Icon type="ios-paper"/>
                单位基本信息
            </MenuItem>
            <MenuItem name="talentStatus">
                <Icon type="ios-people"/>
                单位人才情况汇总
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    单位人才流动汇总
                </template>
                <MenuItem name="flowIn">流入情况统计</MenuItem>
                <MenuItem name="flowOut">流出情况统计</MenuItem>
                <MenuItem name="flowTalentInfo">流出人才信息统计</MenuItem>
            </Submenu>
            <div class="user">
                <div class="submit">
                    <Button type="success">提交问卷</Button>
                </div>
                <div class="user-name">欢迎，{{companyName}}</div>
                <div class="logout">
                    <span @click="logout">退出登录</span>
                </div>
            </div>
        </Menu>
        <router-view/>
    </div>
</template>
<style scoped>
    .logout{
        color: #8CD1FF;
        cursor: pointer;
    }
    .menu {
        position: relative;

    }
    .user {
        display: flex;
        position: absolute;
        right: 30px;
        top: 0;
    }
    .submit {
        margin-right: 20px;
    }
    .user .user-name {
        margin-right: 15px;
    }
</style>
<script>
    export default {
        data() {
            return {
                theme1: 'light',
                companyName: '哈尔滨理工大学',
            }
        },
        methods: {
            logout(){
                this.$router.push('/')
            },
            select(name){
                console.log(name);
                this.$router.push(name);
            }
        },
		created() {
			if (!this.$store.state.loaded) {
				this.$router.push('/loading')
			}
		}
    }
</script>