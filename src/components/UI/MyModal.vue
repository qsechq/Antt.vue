<template>
    <div id="modal" class="modal" v-if="show" @click="hideModal"> 
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'my-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        hideModal(){
            this.$emit("update:show", false)
        }
    }

}
</script>
    
<style>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__content{
    background: #000;
    width: 829px;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    padding: 20px 20px;
}
</style>