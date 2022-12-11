<template>
    <div class="container">
        <transition name="gounce">
            <my-modal v-model:show="modalVisible">
                <div class="close__wrapper" @click="hideModal">
                    <span class="close"></span>
                    <span class="close close--two"></span>
                </div>

                <div class="modal__content-inner">
                    <h1>МОИ КОНТАКТЫ</h1>
                    
                </div>
            </my-modal>
        </transition>
        <header class="header">
            <div class="logo">
                <span class="logo__text">Студия массажа ANT T</span>
                <!-- <img src="./img/logo.png" alt="logo" class="logo__img"> -->
            </div>
            <ul class="header__list">
                <li class="header__item">Новосибирск</li>
                <li class="header__item">
                    <a href="#massage" class="header__link">Услуги и цены</a>
                </li>
                <li class="header__item">
                    <a href="#massage" class="header__link">Сертификаты</a>
                </li>
                <li class="header__item">
                    <a @click.prevent="showModal" href="#" class="header__link">Контакты</a>
                    <!-- <a href="tel" class="header__item-phone">
                            <svg class="phone__svg" width="18" height="20" viewBox="0 0 18 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.25186 0.951173L5.53302 1.64648L5.25186 0.951173C4.85388 1.11211 4.24296 1.39063 3.64507 1.73763C3.06818 2.07245 2.41452 2.5209 2.01478 3.04337C1.87261 3.22919 1.80273 3.44173 1.76445 3.61705C1.72425 3.80119 1.70683 4.0016 1.70423 4.20634C1.69902 4.61609 1.75266 5.10908 1.85939 5.65553C2.07359 6.7523 2.51654 8.13967 3.22626 9.64456C4.64608 12.6551 7.16238 16.196 11.1502 18.8447C11.6301 19.1634 12.2364 19.2165 12.762 18.9971C13.2388 18.7979 13.9395 18.4936 14.6364 18.1377C15.3196 17.7887 16.0548 17.3625 16.5646 16.9102C17.1154 16.4216 17.1647 15.6618 16.8937 15.1034C16.6518 14.605 16.2372 14.0787 15.2172 13.2608C14.82 12.9423 14.3095 12.8264 13.8271 12.9151L11.4508 13.352C11.3755 13.3658 11.3227 13.3433 11.2947 13.3181C10.284 12.4089 7.85515 9.9188 7.05896 7.07085C7.04916 7.03582 7.05037 6.95219 7.13428 6.85672C7.46289 6.48282 7.88679 5.95988 8.207 5.44257C8.45203 5.04671 8.51839 4.54267 8.33224 4.07887C8.06697 3.41793 7.57184 2.65507 6.96422 1.71891C6.90913 1.63403 6.85311 1.54772 6.79625 1.45993C6.65122 1.23601 6.43546 1.03372 6.14584 0.928202C5.84839 0.81983 5.53499 0.836683 5.25186 0.951173Z"
                                    stroke="#fac83a" stroke-width="1.5" />
                            </svg>

                            +7(999)9999999
                        </a> -->
                </li>
            </ul>
        </header>
    </div>
</template>

<script>

export default {
    data() {
        return {
            modalVisible: false,
            nameInput: '',
            phoneInput: '',
            selectMassageTime: '',
            massageName: '',
            errors: []
        }
    },
    methods: {
        showModal() {
            this.modalVisible = true;
        },
        hideModal() {
            this.modalVisible = false;
        },
    }
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

header #modal {
    z-index: 100;
}

.header__item .btn {
    padding: 10px;
}


.header__item-phone {
    display: flex;
    align-items: flex-end;

}

.phone__svg {
    margin-right: 5px;
}

.icon-phone {
    width: 20px;
    height: 20px;
}

header {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 20px;
}

.header__list {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
}

.logo {
    margin-right: 20px;
    background: linear-gradient(to right, #D99057, #EFD2A1);
    border-radius: 40px 0 40px 0;
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
}

.logo__img {
    height: 80px;
    width: 80px;
    position: absolute;
    right: 10px;
}

.logo__text {
    color: #000;
    font-weight: bold;
    font-size: 18px;
}

.modal__content-inner {
    display: flex;
    justify-content: center;
    align-items: center ;
}
</style>