// 登录、注册、忘记密码模块
import { request } from '../util/request.js'

export function login(data) { // 登录接口
    return request( '/api/login', data, 'post')
}

export function register(data) { // 注册接口
    return request('/api/register', data, 'post')
}
