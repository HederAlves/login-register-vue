import { createRouter, createWebHistory } from "vue-router";
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Menu from './views/Menu.vue'

 const routes = [{
    path: '/',
    name: 'login',
    component: Login
}, 
 {
    path: '/register',
    name: 'register',
    component: Register
},{
    path: '/menu',
    name: 'menu',
    component: Menu
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;