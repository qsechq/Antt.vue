<template>
    <hero-section></hero-section>
    <benefits-section></benefits-section>
    <about-section></about-section>
    <massage-section></massage-section>
    <map-section></map-section>
    <promo-section></promo-section>

</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import BenefitsSection from '@/components/BenefitsSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import MassageSection from '@/components/MassageSection.vue';
import MapSection from '@/components/MapSection.vue';
import PromoSection from '@/components/PromoSection.vue';

export default {
    components:{
        HeroSection,BenefitsSection,AboutSection,MassageSection,MapSection,PromoSection
    },
    data (){
        return{
            modalVisible:false
        }
    }
}
</script>

<style>
html {

    font-family: 'Roboto', sans-serif;
}

body {
    background-color: #000;
    color: #fac83a;
    margin: 0;
}

*{
    box-sizing: border-box;
}

a {
    color: #fac83a;
    text-decoration: none;
}

ul {
    text-decoration: none;
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}

h1,
h2,
h3,
h4 {
    margin: 0;
}

.container {
    width: 57.75rem;
    max-width: 100%;
    margin: 0 auto;

}

.btn {
    background: #fac83a;
    padding: 7px 10px;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
}

section {
    margin-bottom: 50px;
}

main {
    margin-bottom: 445px;
    z-index: 10;
    position: relative;
    background: #000;
}
</style>