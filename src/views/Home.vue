<template>
<div id="home">
<img src="../assets/logo.jpg" alt="logo.jpg">
<Title text = "This is to Home" />
</div>
</template>

<script>
import Title from '../components/Title'
export default {
    name: "home",
    components:{
        Title 
    }
}
</script>

<style>
#home{
    background-color: #15304D;
}
</style>