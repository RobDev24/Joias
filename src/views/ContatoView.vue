<template>
    <Menu/>
    <div class="contato" >
        <div class="form">
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
    </div >
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

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contato{
    display: grid;
    height: 65vh;
    background-image: url('../assets/fundo2.PNG');
    background-repeat: no-repeat;
    background-size: cover;
}
.form{
    background:transparent;
    height: 100%;
    width: 30vw;
    display: grid;
    margin-left: 15rem;
    color:#0b0000;
    font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif
    
}
.form h2{
    margin-top: 3px;
    margin-bottom: -10px;
    color:aqua;
}
.form form{
    display: flex;
    flex-direction:column;
}
.form label{
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
</style>