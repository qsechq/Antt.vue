<template>
    <section id="prom" class="prom">
        <div class="container">
            <h1 class="prom__title">ОБРАДУЙ БЛИЗКИХ</h1>
            <div class="promo__choise">
                <ul class="promo__choise-list">
                    <li class="promo__choise-item">
                        <label class="promo__choise-radio">
                            <input v-model="showSelectPromo" value="web" name="promo" type="radio"
                                class="promo__choise-input">
                            <div class="promo__choise-visible"></div>
                            <div class="promo__choise-title">Электронный сертификат</div>
                        </label>
                    </li>
                    <li class="promo__choise-item">
                        <label class="promo__choise-radio">
                            <input v-model="showSelectPromo" value="papper" name="promo" type="radio"
                                class="promo__choise-input">
                            <div class="promo__choise-visible"></div>
                            <div class="promo__choise-title">Бумажный сертификат</div>
                        </label>
                    </li>
                </ul>
            </div>
            <transition name="rounse">
                <div v-show="showSelectPromo === 'papper'" class="prom__wrap">
                    <img src="../img/prom.jpeg" alt="Сертификат" class="prom-img">
                    <p>Крутой, красивый бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой,
                        красивый бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой,
                        красивый
                        бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой, красивый бодрый
                        четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой, красивый бодрый четкий
                        престижный желтый черный фотогеничный текст тест крафтовый </p>
                </div>
            </transition>
            <transition name="bounse">
                <div v-show="showSelectPromo === 'web'" class="prom__wrap">
                    <img src="../img/webSert.jpeg" alt="Сертификат" class="prom-img">
                    <p>Крутой, красивый бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой,
                        красивый бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой,
                        красивый
                        бодрый четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой, красивый бодрый
                        четкий престижный желтый черный фотогеничный текст тест крафтовый Крутой, красивый бодрый четкий
                        престижный желтый черный фотогеничный текст тест крафтовый </p>
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showSelectPromo: 'web',
        }
    },
    methods: {
        ChoiseSelectMassage() {
            this.showSelectPromo = this.value;
        }
    }

}
</script>

<style >

.bounse-enter-active {
  animation: bounse-in 0.7s;
}
.bounse-leave-active {
  display: none;
}
@keyframes bounse-in {
  0% {
    opacity: 0;

    transform: translateX(-550px);
    z-index: 1;
  }

  100% {
    opacity: 1;
    transform: translateX(0px);

  }
 
}

.rounse-enter-active {
  animation: rounse-in 1s;
}
.rounse-leave-active {
  display: none;
}
@keyframes rounse-in {
  0% {
    opacity: 0;

    transform: translateX(550px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);

  }
}

.prom__title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
}

.prom-img {
    border-radius: 5px;
    height: 690px;
    width: 100%;
}



.promo__title {
    font-size: 40px;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
}

.promo__choise-input {
    display: none;
}

.promo__choise-visible {
    margin-right: 15px;
    border: 2px solid #e5aa52;
    min-height: 20px;
    min-width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.promo__choise-visible::before {
    content: "";
    height: 10px;
    width: 10px;
    background: #e5aa52;
    border-radius: 50%;
    display: none;
}

.promo__choise-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.promo__choise-input:checked~.promo__choise-visible::before {
    display: block;
}

.promo__choise-list {
    display: flex;
    justify-content: space-between;
}

.promo__choise {
    margin-bottom: 20px;
}
</style>