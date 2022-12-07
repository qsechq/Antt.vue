import { createApp } from 'vue';
import App from './App.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import components from '@/components/UI';

const app=createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

const myHeader=createApp(Header).mount('#header');
const myFooter=createApp(Footer).mount('#footer');
app.mount('#app'); 

