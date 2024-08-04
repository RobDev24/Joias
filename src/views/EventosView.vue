<template>
  <div class="eventos">
    <h1>This is an event  page</h1>
    
  </div>
  <Rodape/>
</template>

<script>
import Rodape from '@/components/Rodape.vue'

export default{
  name: 'EventosView',

  components: {
    Rodape
  }
}
</script>

<style scoped>
.eventos{
  border: 2px solid red;
  height: 60vh;
}

</style>
