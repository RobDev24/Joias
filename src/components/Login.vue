<template>
    <Menu/>
    <div class="login">
        
    </div>
    <Rodape/>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'
export default{
    name,
    components:{
        Menu,
        Rodape
    }
}
</script>

<style scoped>
.login{
    height: 65vh;
}

</style>