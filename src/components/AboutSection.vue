<template>
    <section id="about" class="about">
        <div class="container">
            <h1 class="title__about">Обо мне</h1>
            <div class="about__wrap">
                <div class="about__wrap-left">
                    <img src="../img/anton.jpeg" alt="Массажист" class="about-img">
                </div>
                <div class="about__wrap-right">
                    <p>Лучший массажист евер, опыт 1231521516 лет, миллиард довольных клиентов, позови друга плиз,нужен
                        текст
                        красивый, больше воды, чтобы выглядело престижнее</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.title__about {
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 40px;
}

.about__wrap {
    display: flex;
}


.about-img {
    max-width: 450px;
    border-radius: 5px;
}

.about__wrap-right p {
    padding-left: 5%;
}
</style>