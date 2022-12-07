<template>
    <section id="hero" class="hero">
        <div class="container">
            <div class="hero__main">
                <h1 class="hero__title">Это будет качественный массаж</h1>
                <h2>Более 1000 довольных клиентов</h2>
                <my-button>Выбрать массаж</my-button>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.hero__main {
    border-radius: 5px;
    height: 449px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    justify-content: center;

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
</style>

