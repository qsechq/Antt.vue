<template>
    <ul id="man-list" class="form__massage-list">
        <massage-item-m v-for="post in posts" :post="post" :key="post.id"></massage-item-m>
    </ul>
</template>

<script>
import MassageItemM from './MassageItemM.vue';

export default {
    components: {
        MassageItemM,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Тайский массаж', body: 'Лучший, нежный, красивый, бодрящий чай настоящий', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' },
                { id: 2, title: 'Мужской массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' },
                { id: 3, title: 'Тестовый массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' },
                { id: 4, title: 'Аладинский массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' },
                { id: 5, title: '10 массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' },
                { id: 6, title: 'Вот такой массаж', body: 'По феншую, тест надпись, лучшийВауЙщуцц', img: require('../img/photo1666251465.jpeg'), timeOne: '35 минут', timeTwo: '1 час', priceOne: '1500 ₽', priceTwo: '5500 ₽' }
            ]
        }
    },
}
</script>

<style>
.form__massage-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>