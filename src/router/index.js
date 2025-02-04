import {createRouter, createWebHistory} from 'vue-router';
import PrincipalView from "../views/PrincipalView.vue";
import MesaView from "../views/MesaView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            component: PrincipalView
        },
        {
            path: '/mesa',
            name: 'mesa',
            component: MesaView
        }
    ]
})

export default router