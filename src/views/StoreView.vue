<template>
    <Menu/>
    <div class="store">
        <h1>This is an store  page</h1>
    </div>
    <Rodape/>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'


export default{
    name: 'StoreView',

    components: {
        Menu,
        Rodape
    }

}
</script>

<style scoped>
.store{
    height: 65vh;
    color: aliceblue;
    background-image: url('../assets/diamante2.PNG');
}

</style>