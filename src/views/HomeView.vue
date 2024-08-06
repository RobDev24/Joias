<template>
  <Menu/>
  <Slider/>
  <div >
    
  </div>
  <Rodape/>
</template>

<script>
import Slider from '@/components/SliderHome.vue'
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'

export default{

  name: 'HomeViwe',
  components: {
    Menu,
    Rodape,
    Slider
  }
}
</script>

<style scoped>
.home{
  height: 65vh;
  background-image: url('../assets/fundo1.PNG');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>