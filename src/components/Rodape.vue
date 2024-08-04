<template>
    <div class="rodape">
        <div class="contato">
            <h2>Central de Atendimento</h2>
            <h3>(11)3333-3333</h3>
            <h5>Atendimento de Seg a Sex 09hs as 17hs</h5>
            <h5>Sac: Atendimento@tomjoias.com.br</h5>

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
            <h3>Formas de Pagamento</h3>
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
    height:100px;
    


    
}
.contato{
    margin-left: 10px;
    height: 100%;
    width: 350px;
    color:aqua;
    margin-top: -18px;
    

    
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
    .pagtodireitos h3{
        color: beige;
        margin-top: 5px;
        margin-left: -270px;
    }
    .pagtodireitos p{
        color: beige;
        text-align: right;
        margin-top: 70px;
    }

</style>