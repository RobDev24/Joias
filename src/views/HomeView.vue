<template>
  
  <div class="home">
    <Menu/>
    <slider/>
    <Rodape/>
    
    
  </div>
</template>

<script>
import Slider from '@/components/SliderHome.vue'
import Rodape from '@/components/Rodape.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'HomeView',
  components: {
    Slider,
    Rodape,
    Menu
   

  
  }
}
</script>

<style scoped>
.home{
  background: #000;
  background-image: url('../assets/fundo1.PNG');
  background-repeat: no-repeat;
  background-size: cover;
  
  
}

</style>
