<template>

<a  class="btn"><slot></slot></a>
</template>

<script>
export default{
    name:'my-button'
}
</script>

<style>
.btn {
    background: #e5aa52;
    padding: 7px 10px;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
}
</style>