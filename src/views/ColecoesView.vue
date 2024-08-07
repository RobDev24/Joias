<template>
    <Menu/>
    <div class="colecoes">
        <h1>This is an  page</h1>  
    </div>
    <Rodape/>
</template>


<script>

import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'


export default{
    name: 'ColecoesView',
    components: {
        Menu,
        Rodape
    }
}

</script>

<style scoped>
.historia{
    height: 65vh;
    background-image: url('../assets/fundo2.PNG');
    color: aliceblue;
}

</style>

<style scoped>
.colecoes{
    height: 65vh;
    color: aliceblue;
    background-image: url('../assets/fundo2.PNG');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

</style>

