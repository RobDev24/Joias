<template>
  <div class="home">
    <slider/>
    <Rodape/>
    
  </div>
</template>

<script>
import Slider from '@/components/SliderHome.vue'
import Rodape from '@/components/Rodape.vue'

export default {
  name: 'HomeView',
  components: {
    Slider,
    Rodape
   

  
  }
}
</script>

<style>
.home{
  background: #000;
  background-image: url('../assets/fundo1.PNG');
  background-repeat: no-repeat;
  background-size: cover;
  
  
}

</style>
