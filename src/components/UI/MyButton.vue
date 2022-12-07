<template>

<a href="#" class="btn"><slot></slot></a>
</template>

<script>
export default{
    name:'my-button'
}
</script>

<style>
.btn {
    background: #fac83a;
    padding: 7px 10px;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
}
</style>