<template>
    <div style="background:#ECECEC; padding:30px; width: 30%; height: 30%; margin: 10% auto;">
        <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                        v-decorator="[
              'username',
              { rules: [{ required: true, message: '请输入教工号' }] },
            ]"
                        placeholder="教工号"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                        v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码' }] },
            ]"
                        type="password"
                        placeholder="密码"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a class="login-form-forgot" href="">
                    忘记密码
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    登录
                </a-button>
                Or
                <a href="">
                    注册
                </a>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>

    import { mapState } from 'vuex' //

    export default {
        name: "Login",
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        methods: {
            handleSubmit(e) { // 登录
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    console.log('登录的表单数据: ', values);
                    if (!err) {
                        this.$store.dispatch('access/login', values) // 调用登录接口
                        .then( data => {
                            if(data.code === 0){
                                this.$message.error('账号或密码错误');
                            }else {
                                this.$message.success('登录成功，页面跳转');
                                console.log("打印accessStore中的数据", this.accessState.token, this.accessState.teacher_id)
                            }
                        })
                    }
                });
            },
        },
        computed: {
            ...mapState({ // 这个是提取store中access文件夹目录下的数据
                'accessState': 'access'
            })
        }
    };
</script>
<style>
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>
