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

</style>