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
                        <label class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input v-model="selectMassageTime" :value="post.timeTwo" class="radio" type="radio"
                                    name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">{{ post.timeTwo }}</div>
                            </div>
                            <div class="radio__sum">{{ post.priceTwo }}</div>
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

            axios({
                method: 'post',
                url: '../tg.php',
                data: data
            })
                .then(response => { })
                .catch(e => {
                    this.errors.push(e)
                })

        }

    }
}
</script>

<style>

</style>