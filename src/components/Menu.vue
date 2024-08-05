<template>
   
        <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link to="/"> <a class="nav-link active" >Home</a></router-link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Escolha sua opção
          </a>
          <ul class="dropdown-menu">
            <li> <router-link to="/cont"><a class="dropdown-item">Contato</a></router-link> </li>
            <li> <router-link to="/even"><a class="dropdown-item">Eventos</a></router-link> </li>
            <li> <router-link to="/str"><a class="dropdown-item">Store</a></router-link> </li>
            <li> <router-link to="/hist"><a class="dropdown-item">Nossa História</a></router-link> </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
</template>

<script>
export default{
    name
}
</script>

<style scoped>
nav{
    background: #000;
    border: 1px solid #fff;
   
    
}
</style>