import Mock from 'mockjs'
import decision from './decision/access.js'


Mock.mock('/api/login', 'post', decision.loginData)


export default Mock;
