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
                    密 &nbsp;&nbsp; 码：
                </div>
                <div class="account-input">
                    <Input v-model="password" type="password" placeholder="请输入密码" style="width: 230px"/>
                </div>
            </div>
            <div class="button">
                <Button type="primary" shape="circle" @click="login" long>登录</Button>
            </div>
            <div class="forget">
                <router-link to="/changePassword">忘记密码？</router-link>
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
	import url from '@/service.config.js';
	import axios from 'axios';
	import util from '@/utils.js'
	
    export default {
        data(){
            return {
                account: '',
                password: '',
            }
        },
        methods: {
            login(){
				if (this.$data.account.length < 6) {
					this.$message.error('用户名长度最小为6位！');
					return
				}
				if (this.$data.password.length < 6) {
					this.$message.error('密码长度最小为6位！');
					return
				}
				axios({
				    url: url.login,
				    method: 'get',
				    params: {
						user_name: this.$data.account,
						user_password: this.$data.password
					}
				}).then(res => {
					if (res.data === -1 || res.data === -2) {
						this.$message.error('用户名或密码输入错误！');
					} else {
						util.setCookies(this.$data.account, this.$data.password, this)
						this.$message({
						    message: '登陆成功！',
						    type: 'success'
						});
						this.$router.push('/loading');
					}
				}).catch(err => {
				    console.log(err);
				});
            }
        }
    }
</script>