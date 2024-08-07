<template>
  <Menu/>
  <div class="eventos">
    <h1>This is an event  page</h1>
    
  </div>
  <Rodape/>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'

export default{
  name: 'EventosView',

  components: {
    Menu,
    Rodape
  }
}
</script>

<style scoped>
.eventos{
  color: aliceblue;
  height: 65vh;
  background-image: url('../assets/fundo1.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
