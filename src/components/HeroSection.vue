<template>
    <section id="hero" class="hero">
        <div class="container">
            <div class="hero__main">
                <h1 class="hero__title">Это будет качественный массаж</h1>
                <h2>Более 1000 довольных клиентов</h2>
                <ul class="hero__list">
                    <li class="hero__item" href="#massage"><my-button class="btn__hero">Выбрать массаж</my-button></li>
                    <li class="hero__item"><my-button class="btn__hero">Напишите нам</my-button></li>
                    <li class="hero__item"><my-button class="btn__hero">Запись онлайн</my-button></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero__main {
    border-radius: 5px;
    height: 449px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    justify-content: space-evenly;
}

.hero__list{
    display: flex;
    justify-content: space-between;
    width: 100%;

}

.hero__main h2 {
    margin-bottom: 20px;
    text-shadow: 1px 1px #000;
}

.hero__title {
    margin-bottom: 20px;
    text-shadow: 1px 1px #000;
    font-size: 40px;
    text-transform: uppercase;
}

.btn__hero{
    padding: 15px 20px;
    width: 175px;
    font-weight: bold;
}
</style>

