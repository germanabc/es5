import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'

export default [
    {
        path: '/Home',
        component:Home
    },
    {
        path: '/follow',
        component:Follow
    },
    {
        path: '/Column',
        component:Column
    },
    {
        path: '/user-info',
        component:UserInfo
    },
    {
        path:'/article/:id',
        component:Article
    },
    {  //path:' /user-login' path字符串中不能有空格
        path:'/user-login',
        component:UserLogin
    },
    {
        path:'/user-reg',
        component:UserReg
    },
    {
        path:'/',
        //当没有点击router-link时重定向到/Home
        redirect:'/Home'
    },
    // { 
    //     path: '*', 
    //     redirect: '/home' 
    // }
    
]