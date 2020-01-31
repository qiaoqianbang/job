<template>
    <van-row type="flex" justify="center">
        <van-col span="16" offset="4" v-show="!flag">
            <van-field v-model="user" required label="账号" placeholder="请输入用户名" />
            <van-field v-model="pwd" required label="密码" placeholder="请输入密码" />
            <van-button type="primary" @click="MyUser">登陆</van-button>
            <span class="text" @click="flag = !flag">没有账号？去注册一个！</span>
        </van-col>
        <van-col span="16" offset="4" v-show="flag">
            <van-field v-model="user" required label="账号" placeholder="请输入用户名" />
            <van-field v-model="pwd" required label="密码" placeholder="请输入密码" />
            <van-radio-group v-model="role">
                <van-radio name="v1">v1</van-radio>
                <van-radio name="v2">v2</van-radio>
            </van-radio-group>
            <van-button type="danger" @click="MyUser">注册</van-button>
            <span class="text" @click="flag = !flag">账号已注册，去登陆！</span>
        </van-col>
    </van-row>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            user: '',
            pwd: '',
            role: '',
        };
    },
    methods: {
        setflag() {
            this.flag = !this.flag;
        },
        async MyUser() {
            const { flag, user, pwd, role, $axios, $router } = this;
            if (user === '') {
                this.$toast.fail('请输入用户账号');
                return;
            }
            if (pwd === '') {
                this.$toast.fail('请输入用户密码');
                retutn;
            }
            let url = flag ? '/register' : '/login';
            let param = { user, pwd, role };
            let result = await $axios('post', url, param);
            //登陆成功
            if (result.data.code === 1) {
                window.localStorage.setItem('token', result.data.data.token);
                window.localStorage.setItem('utype', result.data.data.utype);
                this.$toast.success({
                    message: result.data.msg,
                    onClose: () => {
                        $router.push('/home');
                    },
                });
            }
            //登录失败
            if (result.data.code === 0) {
                this.$toast.fail(result.data.msg);
            }
            //注册成功
            if (result.data.code === 2) {
                this.$toast.success({
                    message: result.data.msg,
                    onClose: () => {
                        this.setflag();
                    },
                });
            }
        },
    },
};
</script>

<style>
.text {
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
}
</style>
