import { createApp } from 'vue';
import App from './App.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import components from '@/components/UI';

const app=createApp(App);
const myHeader=createApp(Header);

components.forEach(component => {
    app.component(component.name, component)
})

components.forEach(component => {
    myHeader.component(component.name, component)
})

myHeader.mount('#header');
const myFooter=createApp(Footer).mount('#footer');
app.mount('#app'); 

