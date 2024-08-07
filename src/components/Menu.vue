<template>
     <div class="menu">

        <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
  <div class="container-fluid">
    <router-link to="/log"><a class="navbar-brand">Login</a></router-link>
    
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link to="/"> <a class="nav-link active">Home</a></router-link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Escolha sua opção
          </a>
          <ul class="dropdown-menu">
            <li> <router-link to="/cole"><a class="dropdown-item">Coleções</a></router-link> </li>
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
</div>
</template>

<script>

export default{
    name
}

</script>

<style scoped>
.navbar{
  background:black;
  
 
 
}
     
    

</style>