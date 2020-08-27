// 管理mock数据
export default {
    loginData: () => ({ // 登录接口返回的数据
        code: 1,
        msg: "登录成功",
        data: {
            token: 123456,
            teacher_id: 123
        }
    })
}
