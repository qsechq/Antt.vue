<template>
    <div class="container">
        <transition name="gounce">
            <my-modal v-model:show="modalVisible">
                <div class="close__wrapper" @click="hideModal">
                    <span class="close"></span>
                    <span class="close close--two"></span>
                </div>

                <h1>test</h1>
                <input type="text">
                <input type="text">
            </my-modal>
            </transition>
            <header class="header">
                <a href="#" class="logo"><svg width="120" height="auto" viewBox="-18 -7 358 90.93573882654792"
                        class="css-1j8o68f">
                        <defs id="SvgjsDefs1839">
                            <linearGradient id="SvgjsLinearGradient1844">
                                <stop id="SvgjsStop1845" stop-color="#fbb040" offset="0"></stop>
                                <stop id="SvgjsStop1846" stop-color="#f9ed32" offset="1"></stop>
                            </linearGradient>
                            <linearGradient id="SvgjsLinearGradient1847">
                                <stop id="SvgjsStop1848" stop-color="#fbb040" offset="0"></stop>
                                <stop id="SvgjsStop1849" stop-color="#f9ed32" offset="1"></stop>
                            </linearGradient>
                        </defs>
                        <g id="SvgjsG1840" featurekey="PG4fjM-0"
                            transform="matrix(1.0598384367383058,0,0,1.0598384367383058,-20.991923858396685,-20.75882093620787)"
                            fill="url(#SvgjsLinearGradient1844)">
                            <path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient1844)"
                                d="M49.997,87.549l-36.819-28.54C6.609,54.122,2.823,46.657,2.823,38.552c0-14.1,11.472-25.57,25.573-25.57  c8.85,0,16.964,4.573,21.601,11.92c4.638-7.347,12.757-11.92,21.614-11.92c14.098,0,25.566,11.471,25.566,25.57  c0,8.111-3.786,15.576-10.388,20.481L49.997,87.549z M28.396,16.981c-11.896,0-21.573,9.676-21.573,21.57  c0,6.828,3.198,13.123,8.773,17.271l34.4,26.665l34.375-26.642c5.608-4.167,8.806-10.462,8.806-17.295  c0-11.894-9.675-21.57-21.566-21.57c-8.586,0-16.35,5.096-19.78,12.983l-1.834,4.216l-1.834-4.216  C44.733,22.078,36.974,16.981,28.396,16.981z">
                            </path>
                            <polygon xmlns="http://www.w3.org/2000/svg"
                                points="41.217,50.026 40.455,52.201 27.673,52.201 27.673,48.643 37.931,48.643 40.816,40.402 48.315,57.197   56.207,32.901 62.359,49.532 72.329,49.532 72.329,53.09 59.881,53.09 56.426,43.747 48.84,67.1 ">
                            </polygon>
                        </g>
                        <g id="SvgjsG1841" featurekey="jxYttZ-0"
                            transform="matrix(5.5220878035216625,0,0,5.5220878035216625,119.99999736686334,-27.610439017608314)"
                            fill="url(#SvgjsLinearGradient1847)">
                            <path
                                d="M7.52 5 l6.16 15 l-2.4 0 l-1.5 -3.92 l-5.9 0 l-1.48 3.92 l-2.4 0 l6.16 -15 l1.36 0 z M4.58 14.24 l4.5 0 l-2.24 -5.92 z M24.22 14.3 l0 5.7 l-2.06 0 l0 -5.5 c0 -2 -0.62 -2.88 -2.32 -2.88 c-1.92 0 -2.7 1.34 -2.7 3.08 l0 5.3 l-2.06 0 l0 -9.88 l2.06 0 l0 1.6 c0.28 -0.88 1.52 -1.68 2.7 -1.76 c2.68 -0.2 4.38 1.1 4.38 4.34 z M30.76 18.36 c0.64 0.26 1.14 0.08 1.44 -0.06 l0 1.6 c-0.26 0.16 -0.64 0.3 -1.18 0.3 c-1.18 0 -2.22 -0.38 -2.86 -1.42 c-0.6 -1 -0.6 -1.54 -0.6 -3.1 l0 -3.88 l-1.2 0 l0 -1.68 l1.2 0 l0 -3.12 l2.06 0 l0 3.12 l2.58 0 l0 1.68 l-2.58 0 l0 3.88 c0 1.64 0.16 2.24 1.14 2.68 z M38.400000000000006 18.36 c0.64 0.26 1.14 0.08 1.44 -0.06 l0 1.6 c-0.26 0.16 -0.64 0.3 -1.18 0.3 c-1.18 0 -2.22 -0.38 -2.86 -1.42 c-0.6 -1 -0.6 -1.54 -0.6 -3.1 l0 -3.88 l-1.2 0 l0 -1.68 l1.2 0 l0 -3.12 l2.06 0 l0 3.12 l2.58 0 l0 1.68 l-2.58 0 l0 3.88 c0 1.64 0.16 2.24 1.14 2.68 z">
                            </path>
                        </g>
                    </svg></a>
                <ul class="header__list">
                    <li class="header__item">Новосибирск</li>
                    <li class="header__item">
                        <a href="tel" class="header__item-phone">
                            <svg class="phone__svg" width="18" height="20" viewBox="0 0 18 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.25186 0.951173L5.53302 1.64648L5.25186 0.951173C4.85388 1.11211 4.24296 1.39063 3.64507 1.73763C3.06818 2.07245 2.41452 2.5209 2.01478 3.04337C1.87261 3.22919 1.80273 3.44173 1.76445 3.61705C1.72425 3.80119 1.70683 4.0016 1.70423 4.20634C1.69902 4.61609 1.75266 5.10908 1.85939 5.65553C2.07359 6.7523 2.51654 8.13967 3.22626 9.64456C4.64608 12.6551 7.16238 16.196 11.1502 18.8447C11.6301 19.1634 12.2364 19.2165 12.762 18.9971C13.2388 18.7979 13.9395 18.4936 14.6364 18.1377C15.3196 17.7887 16.0548 17.3625 16.5646 16.9102C17.1154 16.4216 17.1647 15.6618 16.8937 15.1034C16.6518 14.605 16.2372 14.0787 15.2172 13.2608C14.82 12.9423 14.3095 12.8264 13.8271 12.9151L11.4508 13.352C11.3755 13.3658 11.3227 13.3433 11.2947 13.3181C10.284 12.4089 7.85515 9.9188 7.05896 7.07085C7.04916 7.03582 7.05037 6.95219 7.13428 6.85672C7.46289 6.48282 7.88679 5.95988 8.207 5.44257C8.45203 5.04671 8.51839 4.54267 8.33224 4.07887C8.06697 3.41793 7.57184 2.65507 6.96422 1.71891C6.90913 1.63403 6.85311 1.54772 6.79625 1.45993C6.65122 1.23601 6.43546 1.03372 6.14584 0.928202C5.84839 0.81983 5.53499 0.836683 5.25186 0.951173Z"
                                    stroke="#fac83a" stroke-width="1.5" />
                            </svg>

                            +7(999)9999999
                        </a>
                    </li>
                    <li class="header__item">
                        <a href="#massage" class="header__link">Запись</a>
                    </li>
                    <li class="header__item"> <a @click="showModal" href="#" class="btn">Заказать обратный звонок</a>
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

<style>
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
}
</style>