import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Workflow from './components/Workflows.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/workflow",
            component: Workflow
        }
    ]
})

const app = createApp(App);
app.component('Workflow',Workflow)
app.use(router);
app.mount('#app');


