<template>
    <section id="benefits" class="benefits">
        <div class="container">
            <h1 class="benefits__title">В чем польза массажа?</h1>
            <ul class="benefits__list">
                <li class="benefit__item benefit__item--immun"><img src="../img/imun.png" alt="иммунитет"
                        class="benefit__img"><span>В укреплении иммунной системы организма</span></li>
                <li class="benefit__item benefit__item--leather"><img src="../img/tkan.png" alt="кожа"
                        class="benefit__img"><span>В повышении упругости и эластичности кожи</span></li>
                <li class="benefit__item benefit__item--leather"><img src="../img/circ.png" alt="кровообращение"
                        class="benefit__img"><span>В улучшении кровообращения и циркуляции лимфы</span></li>
                <li class="benefit__item benefit__item--circulation"><img src="../img/sal.jpg" alt="сальные железы"
                        class="benefit__img"><span>В активизации работы потовых и сальных желёз</span></li>
                <li class="benefit__item benefit__item--emotion"><img src="../img/nervi.png" alt="психоэмоционального"
                        class="benefit__img"><span>В нормализации психоэмоционального состояния</span></li>
                <li class="benefit__item benefit__item--nerves"><img src="../img/stess.png" alt="нервная система"
                        class="benefit__img"><span>В стимулировании работы ЦНС или её успокоении</span></li>
                <li class="benefit__item benefit__item--pain"><img src="../img/pian.png" alt="уменьшение боли"
                        class="benefit__img"><span>В снижении болевых ощущений</span></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.benefits__title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.benefit__item {
    background: #fac83a;
    border-radius: 5px;
    color: #000;
    width: calc(50% - 10px);
    display: flex;
    align-items: center;
    padding: 10px 7px;
    margin-bottom: 20px;
}

.benefit__img {
    width: 70px;
    margin-right: 15px;
}

.benefits__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
</style>
