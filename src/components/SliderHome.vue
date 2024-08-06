<template>
    <div class="container">
        <div class="galery">
            <span style="--i:1"><img src="../assets/tom.jpg"></span>
            <span style="--i:2"><img src="../assets/1.jpg"></span>
            <span style="--i:3"><img src="../assets/2.jpg"></span>
            <span style="--i:4"><img src="../assets/3.jpg"></span>
            <span style="--i:5"><img src="../assets/4.jpg"></span>
            <span style="--i:6"><img src="../assets/5.jpg"></span>
            <span style="--i:7"><img src="../assets/6.jpg"></span>
            <span style="--i:8"><img src="../assets/7.jpg"></span>
        </div>
       
      </div>
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container
{
    height:65vh;
    max-width: 700vh;
    display:grid;
    align-items: center;
   justify-content: right;
    background-image: url('../assets/fundo1.PNG');
    background-size: cover;
    background-color:#101011;
    
}

    .galery{
        position:relative;
        top:0;
        left:0;
        margin-right: 25rem;
        width:100px;
        height:100px;
        transform-style:preserve-3d;
        animation: rotate 20s linear infinite;
    }
        @keyframes rotate{
            0%{transform:perspective(1000px) rotateY(0deg)
            }100%{transform:perspective(1000px) rotateY(360deg)}
        }
            .galery span{
                position:absolute;
                width:100%;
                height:100%;
                top:0;
                left:0;
                transform-origin:center;
                transform-style:preserve-3d;
                transform:rotateY(calc(var(--i) * 45deg)) translateZ(350px)
            }
            .galery span img{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%
            }

</style>

