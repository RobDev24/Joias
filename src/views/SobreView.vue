<template>
    <Menu/>
    <div class="historia">
        <h1>This is an history  page</h1>  
    </div>
    <Rodape/>
</template>


<script>
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'

export default{
    name: 'SobreView',

    components: {
        Menu,
        Rodape
    }
}

</script>

<style scoped>
.historia{
    height: 60vh;
}

</style>

