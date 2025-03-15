import {createRouter, createWebHistory} from 'vue-router';
import PrincipalView from "../views/PrincipalView.vue";
import MesaView from "../views/MesaView.vue";
import DedicatoriaView from "../views/DedicatoriaView.vue";

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
        },
        {
            path: '/dedicatoria',
            name: 'dedicatoria',
            component: DedicatoriaView
        }
    ]
})

export default router