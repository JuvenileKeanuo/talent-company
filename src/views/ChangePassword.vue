<template>
    <div class="container">
        <div class="box">
            <div class="account">
                <div class="account-label">
                    用户名：
                </div>
                <div class="account-input">
                    <Input v-model="account" type="text" placeholder="请输入用户名" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    身份证号：
                </div>
                <div class="account-input">
                    <Input v-model="idNum" type="text" placeholder="请输入注册时的身份证号" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    新密码：
                </div>
                <div class="account-input">
                    <Input v-model="password1" type="password" placeholder="请输入密码" style="width: 230px"/>
                </div>
            </div>
            <div class="account">
                <div class="account-label">
                    确认密码：
                </div>
                <div class="account-input">
                    <Input v-model="password2" type="password" placeholder="请输入密码" style="width: 230px"/>
                </div>
            </div>
            <div class="button">
                <Button type="primary" shape="circle" long @click="buttonHandle">确认</Button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .forget {
        text-align: right;
        width: 300px;
        margin: 0 auto;
    }
    .account {
        display: flex;
        margin: 20px auto;
        width: 500px;
    }
    .account-label {
        flex: 1;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

    }
    .account-input {
        flex: 2;
    }
    .button {
        width: 300px;
        margin: 75px auto 20px;
    }

    .container {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

    }
    .box {
        width: 670px;
        height: 350px;
        margin: 100px auto;
    }
</style>
<script>
    export default {
        data(){
            return {
                account: '',
                idNum: '',
                password1: '',
                password2: '',
            }
        },
        methods: {
            buttonHandle(){
                // this.modal1 = true;
                let title = '密码修改成功';
                this.$Modal.success({
                    title: title,
                    okText: '去登录',
                    onOk: ()=>{
                        this.$router.push('/login');
                    }
                })
            }
        }
    }
</script>