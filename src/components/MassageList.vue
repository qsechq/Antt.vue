<template>
    <ul id="man-list" class="form__massage-list">
        <massage-item v-for="post in posts" :post="post" :key="post.id"></massage-item>
    </ul>
</template>

<script>
import MassageItem from './MassageItem.vue';

export default {
    components: {
        MassageItem,
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
                { id: 'classic',
                  title: 'Классический ',
                  body: 'Массажная классика, проработаем каждую мышцу. Зону проработки определяем и выбираем во время сеанса.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '60 минут',
                  timeTwo: '90 минут',
                  timeThree: '120 минут',
                  priceOne: '2 000 ₽',
                  priceTwo: '3 000 ₽',
                  priceThree: '4 000 ₽',
                },
                { id: 'deep-tissue',
                  title: 'Глубокотканный',
                  body: 'Та же классика, но с более тщательной проработкой мышечного каркаса. Отлично подходит для мужчин. Зону проработки определяем и выбираем во время сеанса.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '60 минут', 
                  timeTwo: '90 минут', 
                  timeThree: '120 минут',
                  priceOne: '2 200 ₽', 
                  priceTwo: '3 300 ₽',
                  priceThree: '4 400 ₽',
                 },
                 { id: 'anti-cellulite',
                  title: 'Антицеллюлитный',
                  body: 'Разобьем деформированные жировые клетки, подтянем кожу, выведем лишнюю жидкость.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '30 минут', 
                  timeTwo: '60 минут', 
                  timeThree: '90 минут',
                  priceOne: '1 400 ₽', 
                  priceTwo: '2 000 ₽',
                  priceThree: '3 000 ₽',
                 },
                 { id: 'lymphatic-drainage',
                  title: 'Лимфодренажный массаж',
                  body: 'По смыслу, близко к антицеллюлитному, но эффект и техника разные: плавными ритмичными движениями стимулируется усиление лимфотока',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '60 минут', 
                  timeTwo: '120 минут', 
                  priceOne: '2 000 ₽', 
                  priceTwo: '4 000 ₽',
                 },
                 { id: 'foot-massage',
                  title: 'Массаж ног',
                  body: 'Убирает отечность ног, разгонит лимфу, снимет тяжесть.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '30 минут', 
                  priceOne: '1 400 ₽', 
                 },
                 { id: 'behind-massage',
                  title: 'Массаж спины',
                  body: 'Массаж определенной зоны: от поясницы до макушки.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '30 минут', 
                  priceOne: '1 400 ₽', 
                 },
                 { id: 'shvz-massage',
                  title: 'Массаж ШВЗ',
                  body: 'Экспресс массаж, работа с шейно – воротниковой зоной.',
                  img: require('../img/photo1666251465.jpeg'),
                  timeOne: '20 минут', 
                  priceOne: '1 000 ₽', 
                 },
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