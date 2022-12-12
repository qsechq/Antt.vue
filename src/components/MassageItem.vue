<template>
    <transition name="gounce">
    <my-modal v-model:show="modalVisible">
        <div class="close__wrapper" @click="hideModal">
            <span class="close"></span>
            <span class="close close--two"></span>
        </div>
        <div class="modal__content-title modal__content-title--mob">{{ post.title }}</div>
        <img :src="post.img" alt="product" class="modal__content-img">
        <div class="modal__content-info">
            <div class="modal__content-text">
                <div class="modal__content-title">{{ post.title }}</div>
                <div class="modal__content-p">{{ post.body }}
                </div>
            </div>
            <form action="tg.php" class="modal__form" @submit.prevent="onSubmit">
                <input :value="massageName = post.title" type="hidden">
                <div class="modal__content-form">
                    <div class="modal__content-radio">
                        <div class="modal__radio-title">ВРЕМЯ МАССАЖА</div>
                        <label class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input v-model="selectMassageTime" :value="post.timeOne" class="radio" type="radio"
                                    name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">{{ post.timeOne }}</div>
                            </div>
                            <div class="radio__sum">{{ post.priceOne }}</div>
                        </label>
                        <label v-if="post.timeTwo"  class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input v-model="selectMassageTime" :value="post.timeTwo" class="radio" type="radio"
                                    name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">{{ post.timeTwo }}</div>
                            </div>
                            <div class="radio__sum">{{ post.priceTwo }}</div>
                        </label>
                        <label v-if="post.timeThree" class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input v-model="selectMassageTime" :value="post.timeThree" class="radio" type="radio"
                                    name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">{{ post.timeThree }}</div>
                            </div>
                            <div class="radio__sum">{{ post.priceThree }}</div>
                        </label>
                    </div>
                </div>
                <div class="modal__input-form">
                    <input v-bind:value="nameInput" @input="(nameInput = $event.target.value)" placeholder="Имя"
                        type="text" class="modal__input-js">
                    <input v-bind:value="phoneInput" @input="(phoneInput = $event.target.value)" placeholder="Телефон"
                        type="text" class="modal__input-js">
                </div>
                <my-button @click="onSubmit" class="btn__modal">Записаться</my-button>
                <span class="form__modal-info">После отправки с вами свяжутся в ближайшее время для назначения
                    времени</span>
            </form>
        </div>
    </my-modal>
    </transition>
    <li :id="post.id" class="form__massage-item">
        <img :src="post.img" alt="Массаж" class="form__massage-img">
        <div class="form__massage-info">
            <h2 class="form__massage-title">{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
        <my-button @click.prevent="showModal" class="btn-form">Выбрать</my-button>
    </li>
</template>

<script>

import axios from 'axios';

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
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
        selectMassageTimeVal() {
            this.selectMassageTime = this.value;
        },
        selectMassageName() {
            this.massageName = this.value;
        },
        onSubmit() {
            const data = {
                name: this.nameInput,
                phone: this.phoneInput,
                time: this.selectMassageTime,
                massage: this.massageName,
            }
            // const xhr = new XMLHttpRequest();
            // xhr.open('POST', 'C:\Users\HP\Desktop\antt\src\tg.php');
            // xhr.send(JSON.stringify(data));

            axios({
                method: 'post',
                url: '../tg.php',
                data: data
            })
                .then(response => { })
                .catch(e => {
                    this.errors.push(e)
                })

            // axios.post(`https://webdev-api.loftschool.com/sendmail`, {
            //     data: data,
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     port: 8080,
            // })
            //     .then(response => { })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
        }

    }
}
</script>

<style>

.gounce-enter-active {
  animation: gounce-in 0.7s;
}
.gounce-leave-active {
    animation: gounce-in 0.7s reverse;
}
@keyframes gounce-in {
  0% {
    opacity: 0;
    
    transform: translateY(1550px);
    z-index: 1;
  }

  100% {
    opacity: 1;
    transform: translateX(0px);

  }
 
}

#classic{
    width: calc(50% - 10px);
    max-width: none;
}

#classic .form__massage-img{
    width: 100%;
    height: unset;
}

#deep-tissue{
    width: calc(50% - 10px);
    max-width: none;  
}

#deep-tissue .form__massage-img{
    width: 100%;
    height: unset;
}


#anti-cellulite{
    width: calc(50% - 10px);
    max-width: none;  
}

#anti-cellulite .form__massage-img{
    width: 100%;
    height: unset;
}


#lymphatic-drainage{
    width: calc(50% - 10px);
    max-width: none;  
}

#lymphatic-drainage .form__massage-img{
    width: 100%;
    height: unset;
}


.form__modal-info {
    font-size: 12px;
    padding-top: 15px;
    align-self: flex-end;
}

.close__wrapper {
    height: 30px;
    width: 20px;
    padding: 15px 0;
}

.close {
    height: 2px;
    width: 20px;
    background: #e5aa52;
    position: absolute;
    transform: rotate(43deg);
}

.close__wrapper {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 2%;
}

.close--two {
    transform: rotate(137deg);
}

.btn__modal {
    align-self: flex-end;
    font-size: 22px;
}

.modal__form {
    display: flex;
    flex-direction: column;
}

.modal__content-radio {
    margin-bottom: 15px;
}


.modal__input-js:last-child {
    margin-bottom: 30px;
}

.modal__input-js {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #fff;
    color: #000;
    padding: 10px;
    border: 0;
    border: 3px solid #000;
    margin-bottom: 15px;
    transition: 0.3s;
}

.modal__input-js:focus-visible {
    outline: none;
    border-color: #e5aa52;
}


.form__massage-img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
}

.form__massage-item {
    background: #e5aa52;
    border-radius: 5px;
    width: calc(33% - 10px);
    padding: 5px 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
}

.form__massage-title {
    color: #000;
    font-size: 18px;
    margin-bottom: 10px;
}


.form__massage-info {
    width: 100%;
}

.form__massage-info p {
    color: #000;
    font-size: 14px;
}

.btn-form {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 7px 10px;
    color: #000;
    margin-left: auto;
    font-weight: bold;
}


.modal__content {
    background: #000;
    width: 829px;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    padding: 20px 20px;
    position: relative;
    border: 1px solid #e5aa52;
}

.modal__content-img {
    margin-right: 18px;
    width: 50%;
    border-radius: 12px;
}

.modal__content-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
}

.modal__radio-title {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
}

.modal__radio {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: space-between;
}

.modal__radio-wrapper {
    display: flex;
}

.radio {
    display: none;
}

.radio__visible {
    margin-right: 15px;
    border: 2px solid #e5aa52;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.radio__visible::before {
    content: '';
    height: 10px;
    width: 10px;
    background: #e5aa52;
    border-radius: 50%;
    display: none;
}

.modal__radio:last-child {
    margin-bottom: 0;
}

.radio:checked~.radio__visible::before {
    display: block;
}

.modal__content-send {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal__content-title {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 15px;
}




.modal__content-title--mob {
    display: none;
}
</style>