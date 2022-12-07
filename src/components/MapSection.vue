<template>
      <section id="map"  class="map">
        <h1 class="map__title">ГДЕ МЕНЯ НАЙТИ</h1>
        <div class="map__wrap">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac4e42207e65d0f5787500bf2ff0c8b9b7dc06679a6c3dd0abea0a594d78dea20&amp;source=constructor"
            width="700px" height="500px" frameborder="0"></iframe>
        </div>
      </section>
</template>

<script>
    export default{

    }
</script>

<style>
.map__title{
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
}

.map{
    display: flex;
    align-items:center;
    flex-direction: column;
}


</style>