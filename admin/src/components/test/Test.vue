<template>
    <div>
        <img :src="testImage" />
        <div>hello test</div>
        <div>{{ G.CONTENT }}</div>
        <div>{{ $store.state.access.content }}</div>
        <button @click="testFun">按钮</button>
        <router-link to="/login">登录界面</router-link>
    </div>
</template>

<script>
    import testImage from '@/assets/image/logo.png'

    export default {
        name: "test",
        data(){
            return {
                content: this.G.CONTENT,
                testImage: testImage
            }
        },
        methods: {
            testFun(){
                // this.$store.dispatch('access/test')
                this.$store.dispatch('access/login', {username: "123", password: "456"})
                .catch(error => {
                    console.log("登录接口调用出错", error)
                })
                // this.$store.commit('changeContent', "改变内容")
            }
        }
    }
</script>

<style scoped>

</style>
