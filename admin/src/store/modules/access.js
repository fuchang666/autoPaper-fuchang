// 登录、注册、忘记密码页面板块
import { login } from "../../api/access.js";

const state = {
    token: '', // 登录之后获取的token
    teacher_id: '' // 存储老师的id
}

const mutations = { // mutations改变state中的数据
    SET_TOKEN: (state, token) => { // 存储token
        state.token = token
    },
    SET_TEACHER_ID: (state, teacher_id) => { // 存储老师id
        state.teacher_id = teacher_id
    }
}

const actions = { // 发送请求
    // 调用登录接口
    login({ commit, state }, userInfo){ // commit 是调用上面mutations中函数的，state是上面的state
        const { username, password } = userInfo
        console.log("token和老师id", state.token, state.teacher_id)
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then( data => {
                if(data.code === 1){ // 登录成功
                    commit('SET_TOKEN', data.data.token)
                    commit('SET_TEACHER_ID', data.data.teacher_id)
                }
                console.log("调用登录接口", data)
                resolve(data);
            } ).catch(error => {
                reject(error)
            })
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
