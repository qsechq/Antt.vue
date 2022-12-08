<template>
    <ul id="wooman-list" class="form__massage-list">
        <massage-item-w v-for="post in posts" :post="post" :key="post.id"></massage-item-w>
    </ul>
</template>

<script>
import MassageItemW from './MassageItemW.vue';

export default {
    components:{
        MassageItemW,
    },
    props:{
        posts:{
            type:Array,
            required:true,
        }
    },
    data(){
        return{
            posts:[
                {id:7, title: 'Женский массаж', body: 'Женский 10 101 Женский 10 101', img:require('../img/photo1666251465.jpeg'), timeOne:'30 минут', timeTwo:'3 часa', priceOne: '55500 ₽', priceTwo: '5500 ₽'},
                {id:8, title: 'Анти массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img:require('../img/photo1666251465.jpeg'), timeOne:'35 минут', timeTwo:'1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽'},
                {id:9, title: 'Защитный массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img:require('../img/photo1666251465.jpeg'), timeOne:'35 минут', timeTwo:'1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽'},
                {id:10, title: 'Ариэльский массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img:require('../img/photo1666251465.jpeg'), timeOne:'35 минут', timeTwo:'1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽'},
                {id:11, title: '12 массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img:require('../img/photo1666251465.jpeg'), timeOne:'35 минут', timeTwo:'1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽'},
                {id:12, title: 'Воооо массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img:require('../img/photo1666251465.jpeg'), timeOne:'35 минут', timeTwo:'1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽'}
            ]
        }
    },
}
</script>

<style>

</style>