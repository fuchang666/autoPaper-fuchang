
export default {
    install(Vue) {

        // 全局变量
        Vue.prototype.G = {
            CONTENT: '全局变量',
        }
    }
}
// 使用全局函数

