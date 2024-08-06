<template>
    <div class="rodape">
        <div class="contato">
            <h3>Central de Atendimento</h3>
            <h4>(11)3333-3333</h4>
            <h6>Atendimento de Seg a Sex 09hs as 17hs</h6>
            <h6>Sac: Atendimento@tomjoias.com.br</h6>

        </div>
        <div class="links">
            <a href="#">link1</a><br>
            <a href="#">link1</a><br>
            <a href="#">link1</a><br>
            <a href="#">link1</a>
        </div>
        <div class="links1">
            <a href="#">link1</a><br>
            <a href="#">link1</a><br>
            <a href="#">link1</a><br>
            <a href="#">link1</a>
        </div>

        <div class="pagtodireitos">
            <h5>Formas de Pagamento</h5>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">

            <p>@ Todos os direitos reservardos</p>
        </div>
    </div>
</template>

<script>
export default{

    name

}

</script>

<style scoped>
.rodape{
    display: flex;
    background: #000;
    height:23vh;
    
    


    
}
.contato{
    margin-left: 10px;
    height: 100;
    width: 350px;
    color:aqua;
    margin-top: 10px;
    

    
}
    .links{
        display: block;
        margin-left: 10px;
        height: 100%;
        width: 200px;
        padding: 10px;
        
    }
    .links1{
        display: block;
        margin-left: 10px;
        height: 100%;
        width: 200px;
        padding: 10px;
        text-align: left;
    }
    .pagtodireitos{
        
        height: 100%;
        width: 560px;
        color: beige;
        padding: 1px;
        margin-left: 10px;
    }
    .pagtodireitos h5{
        color: beige;
        margin-top: 5px;
        margin-left: -340px;
    }
    .pagtodireitos p{
        color: beige;
        text-align: right;
        margin-top: 60px;
    }

</style>