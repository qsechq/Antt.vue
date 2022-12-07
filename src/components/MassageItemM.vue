<template>
    <my-modal v-model:show="modalVisible">
        <div class="close__wrapper"  @click="hideModal">
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
            <form class="modal__form">
                <div class="modal__content-form">
                    <div class="modal__content-radio">
                        <div class="modal__radio-title">ВРЕМЯ МАССАЖА</div>
                        <label class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input class="radio" type="radio" name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">30 минут</div>
                            </div>
                            <div class="radio__sum">299 ₽</div>
                        </label>
                        <label class="modal__radio">
                            <div class="modal__radio-wrapper">
                                <input class="radio" type="radio" name="option">
                                <div class="radio__visible"></div>
                                <div class="radio__text">1 час</div>
                            </div>
                            <div class="radio__sum">399 ₽</div>
                        </label>
                    </div>
                </div>
                <div class="modal__input-form">
                    <input placeholder="Имя" type="text" class="modal__input-js">
                    <input placeholder="Телефон" type="text" class="modal__input-js">
                </div>
                <my-button class="btn__modal">Записаться</my-button>
                <span class="form__modal-info">После отправки с вами свяжутся в ближайшее время для назначения времени</span>
            </form>
        </div>
    </my-modal>

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

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            modalVisible: false
        }
    },
    methods: {
        showModal() {
            this.modalVisible = true;
        },
        hideModal(){
            this.modalVisible = false;
        }
    }
}
</script>

<style>
.form__modal-info{
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
    background: #fac83a;
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

.btn__modal{
    align-self: flex-end;
    font-size: 22px;
}

.modal__form{
    display: flex;
    flex-direction: column;
}

.modal__content-radio{
    margin-bottom: 15px;
}

.modal__input-js{
    margin-bottom: 15px;
}

.modal__input-js:last-child{
    margin-bottom: 30px;
}

.modal__input-js{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background: #fff;
    color: #000;
    padding: 5px;
    border: 0;
    border: 3px solid #000;
}

.modal__input-js:focus-visible{
    outline: none;
    border-color: #fac83a;
}


.form__massage-img {
    width: 240px;
    height: 220px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.form__massage-item {
    background: #fac83a;
    border-radius: 5px;
    height: 370px;
    max-width: 250px;
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
    height: 575px;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    padding: 20px 20px;
    position: relative;
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
    border: 2px solid #fac83a;
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
    background: #fac83a;
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