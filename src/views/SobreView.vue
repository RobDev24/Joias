<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Menu/>
    <div class="sobre">
        <div class="texto">
            <h2>Sobre nós</h2>
        <p>Tom Joias foi inspirada no nosso designer princial Tom Neves, um artista dedicado
            talentoso e minusuosamente detalhista, com um gosto requintado e exotico ao mesmo tempo
            inspiras suas criações de acordo com cara rosto e estilo, dando ainda mais beleza e
            sofisticação as suas coleções.
        </p></div>
    </div>
    <Rodape/>
  </template>
  
  <script>
  import Menu from '@/components/Menu.vue'
  import Rodape from '@/components/Rodape.vue'
  
  export default{
    name: 'SobreView',
  
    components:{
      Rodape,
      Menu
    }
  }
  
  </script>
  
  <style scoped>
  .sobre{
  align-items:center;background-image:url(../assets/diamante2.PNG);
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  margin-top: 2rem;
  width:231vh;
  height:60vh;
  padding:20px;
  margin-left:-70px;
  }
  .texto{
  color:#000400;
  border:1px solid;
  border-radius:25px;
  width:50%;
  height:80%;
  padding:2rem;
  margin-left:7rem;
  margin-top:2.9rem;
  backdrop-filter:blur(5px);
  }
  
  </style>
  