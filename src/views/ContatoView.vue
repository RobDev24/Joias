<template>

<Menu/>
<div class="container">
    <div class="formulario">
         <h2>Entre em contato</h2>
          <form action="https://api.staticforms.xyz/submit" method="post">
  
              <label>Nome</label>
              <input type="text" name="nome" placeholder="Seu nome aqui" minlength="3" maxlength="30" required>
  
              <label>E-mail</label>
              <input type="email" name="mail" placeholder="Digite seu e-mail" minlength="8" maxlength="40" required>
                <label>Assunto</label>
             <select name="select" required>
                <option value="">Esolha o assunto</option>
                <option value="">Contato</option>
                <option value="">Formas de Pagamento</option>
                <option value="">Reclamação</option>
                <option value="">Elogio</option>
             </select>
              
              <label>Mensagem</label>
              <textarea name="mensagem" id="" cols="30" rows="4"></textarea>
  
              <button type="submit">Enviar</button>
  
              <input type="hidden" name="accessKey" value="9f6cfa85-f93e-4f70-9ade-4f94740f9a92">
              <input type="hidden" name="redirectTo" value="http://localhost:5173/C">
  
          </form>
  
      </div>
    </div>
  <Rodape/>

  </template>

  <script>
import Rodape from '@/components/Rodape.vue'
import Menu from '@/components/Menu.vue'


export default{
    name: 'ContatoView',
    components: {
        Rodape,
        Menu
    }
}

</script>


  
  <style scoped>

  .container{
    
    background-image: url('../assets/fundo2.PNG');
    background-repeat: no-repeat;
    background-size: cover;
    width: 99vw;
    height: 60vh;
    
    
  }
  .formulario{
    background: transparent;
     width:30vw;
     height: 100%;
     display:block;
     box-shadow:rgba(17,17,26,0.1) 0 4px 16px,rgba(17,17,26,0.1) 0 8px 24px,rgba(17,17,26,0.1) 0 16px 56px;
     margin-left:20rem;
     align-items:center;
     padding:5px;
     color:#0b0000;
     font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif
    }
   .formulario h2{
    margin-top: 3px;
    margin-bottom: -10px;
    color:aqua;
   }
    .formulario form{
        display: flex;
        flex-direction:column;
        
    }
    .formulario label{
        text-align: left;
        padding-top: 15px;
        color:aqua;

    }

    button{
        height: 4vh;
        width: 5vw;
        margin-top: 0.30rem;
    }
   
    button:hover{
        background:#1f2628;
        color:#f3df0c;
        border-radius:10px;
        font-family:'Courier New',Courier,monospace
    }

    textarea{
        height: 18vh;
    }
  
  </style>
  