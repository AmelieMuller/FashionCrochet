<template>

  <canvas></canvas>
  <div id="fashion">
    <div>
      <img id ="etoile0" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile0Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile0Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
    <div>
      <img id ="etoile1" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile1Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile1Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
    <div>
      <img id ="etoile2" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile2Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile2Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
    <div>
      <img id ="etoile3" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile3Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile3Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
    <div>
      <img id ="etoile4" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile4Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile4Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
    <div>
      <img id ="etoile5" src="../../public/fashion/starBlack65.png" class = "etoile" alt="">
      <img id ="etoile5Half" src="../../public/fashion/starHalf65.png" class = "etoileHalf" alt="">
      <img id ="etoile5Obtenue" src="../../public/fashion/star65.png" class = "etoileObtenue" alt="">
    </div>
  </div>
  <div class="modal-wrapper">
     <div class="modal">
         <div class="modal-close">X</div>
         <div class="modal-content">
             <h2 id="titre-shop">Let's shop</h2>

             <div id="un" class="black">
                <img class="img" src="./image/newpose_manche.png">
                <button class="bog" id="manche">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="deux" class="black">
                <img class="img" src="./image/newpose_top_fleur_blanc.png">
                <button class="bog" id="fleur_blanc">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="trois" class="black">
                <img class="img" src="./image/newpose_top_fleur_bleu.png">
                <button class="bog" id="fleur_bleu">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="quatre" class="black">
                <img class="img" src="./image/newpose_top_long_blanc.png">
                <button class="bog" id="long_blanc">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="cinq" class="black">
                <img class="img" src="./image/newpose_top_long_marron.png">
                <button class="bog" id="long_marron">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="six" class="black">
                <img class="img" src="./image/newbob.png">
                <button class="bog" id="bob">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

        
         </div>
     </div>
 </div>
 <div class="modal-wrapper-outfit">
     <div class="modal-outfit">
         <div class="modal-close-outfit">X</div>
         <div class="modal-content-outfit">

            <h2 id="titre-cyo">Choose your outfit !</h2>
            <div id="current-outfit"><img id="imgoutfit" src="./image/outfit/initial.png"></div>
            <div id="choose">
                
                <div id="out-zero" class="initial">
                    <img class="outimg" src="./image/horizontal/initial.png">
                    <button class="wto" id="./image/horizontal/initial.png">Wear</button>
                </div>
                

               
                <div id="out-un" class="manche notOwned">
                    <img class="outimg" src="./image/horizontal/manche.png">
                    <button class="wto" id="./image/horizontal/manche.png">Wear</button>
                </div>
               

                <div id="out-deux" class="fleur_blanc notOwned">
                    <img class="outimg " src="./image/horizontal/fleur_blanc.png">
                    <button class="wto" id="./image/horizontal/fleur_blanc.png">Wear</button>
                </div>

                <div id="out-trois" class="fleur_bleu notOwned">
                    <img class="outimg" src="./image/horizontal/fleur_bleu.png">
                    <button class="wto" id="./image/horizontal/fleur_bleu.png">Wear</button>
                </div>

                <div id="out-quatre" class="long_blanc notOwned">
                    <img class="outimg" src="./image/horizontal/long_blanc.png">
                    <button class="wto" id="./image/horizontal/long_blanc.png">Wear</button>
                </div>

                <div id="out-cinq" class="long_marron notOwned">
                    <img class="outimg" src="./image/horizontal/long_marron.png">
                    <button class="wto" id="./image/horizontal/long_marron.png">Wear</button>
                </div>

                <div id="out-six" class="manche_bob notOwned">
                    <img class="outimg" src="./image/horizontal/manche_bob.png">
                    <button class="wto" id="./image/horizontal/manche_bob.png">Wear</button>
                </div>
                <div id="out-sept" class="fleur_blanc_bob notOwned">
                    <img class="outimg" src="./image/horizontal/fleur_blanc_bob.png">
                    <button class="wto" id="./image/horizontal/fleur_blanc_bob.png">Wear</button>
                </div>
                <div id="out-huit" class="fleur_bleu_bob notOwned">
                    <img class="outimg" src="./image/horizontal/fleur_bleu_bob.png">
                    <button class="wto" id="./image/horizontal/fleur_bleu_bob.png">Wear</button>
                </div>
                <div id="out-neuf" class="long_blanc_bob notOwned">
                    <img class="outimg" src="./image/horizontal/long_blanc_bob.png">
                    <button class="wto" id="./image/horizontal/long_blanc_bob.png">Wear</button>
                </div>
                <div id="out-dix" class="long_marron_bob notOwned">
                    <img class="outimg" src="./image/horizontal/long_marron_bob.png">
                    <button class="wto" id="./image/horizontal/long_marron_bob.png">Wear</button>
                </div>

                <div id="out-onze" class="bob notOwned">
                    <img class="outimg" src="./image/horizontal/initial_bob.png">
                    <button class="wto" id="./image/horizontal/initial_bob.png">Wear</button>
                </div>
                
            </div>
        </div>
    </div>
</div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FirstTry} from '@/TsFiles/FirstTry' ;


export default defineComponent({
  name: 'BabylonExamples',
  mounted(){
    const canvas=document.querySelector("canvas")!;
    new FirstTry(canvas);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only partie css-->
<style scoped>
canvas {
  width:100% ;
  height:100% ;
}


  #fashion{
    background: rgba(216, 93, 93, 0);
    position: fixed;
    bottom: 0%;
    left : 35%;
    height: 65px;
    width: 390px;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr 1fr;
    border: 5px solid rgb(236, 240, 24);
    border-radius: 20px;
}
.etoileObtenue{
  display : none;
}
.etoileHald{
  display:none;
}



.modal-wrapper {
  background: rgba(0, 0, 0, 0.508);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
}
/*
.black{
  background: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
*/
.notOwned{
  background: rgba(0, 0, 0, 0.199);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
}

.notOwned button{
  filter: opacity(30%);
}

.notOwned img{
    filter: opacity(30%);
}
.modal {
  text-align: center;
  max-width: 800px;
  width: 100%;
  background: rgb(183, 194, 207);
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  height: 600px;
  border-radius: 5px;
  position: relative;
}

.modal a {
  text-decoration: none;
  background: rgb(197, 34, 66);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;

}

.modal-content {
  display: grid;
  grid-template-rows: 40px 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  height: 600px;
}

#titre-shop{
    grid-column: 2;
    grid-row: 1;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: auto;
    color: rgb(109, 12, 32);
}

.modal-close {
  color: rgb(197, 34, 66);
  border: 1px solid black;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  width: 20px;
  border-radius: 5px;
}


button{
    outline: 0;
    grid-gap: 8px;
    align-items: center;
    background-color: rgb(197, 34, 66);
    color: white;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-size: 10px;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 12px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all .14s ease-out;
    white-space: nowrap;
    width: 75px;
    height: 20px;
}

button:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px,-4px);
}

button:focus-visible{
    outline-offset: 1px;
}
            
.img{
    grid-row: 1;
    grid-column: 1/3;
    width: 150px;
    margin: auto;
}

.bog{
    
    margin-right: 0px;
    margin-left: 55px;
}

#un{
    grid-row: 2;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}

#deux{
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}

#trois{
    grid-row: 2;
    grid-column: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}

#quatre{
    grid-row: 3;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}

#cinq{
    grid-row: 3;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}

#six{
    grid-row: 3;
    grid-column: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 10px;
}



/*Pour le choose your outfit */

.modal-wrapper-outfit {
  background: rgba(0, 0, 0, 0.508);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
}

.modal-outfit {
  text-align: center;
  max-width: 800px;
  width: 100%;
  background: rgb(183, 194, 207);
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  height: 600px;
  border-radius: 5px;
  position: relative;
}

.modal-close-outfit {
  color: red;
  border: 1px solid black;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  width: 20px;
  border-radius: 5px;
}

.modal-content-outfit{
    display: grid;
    grid-template-rows: 1fr 7fr;
    grid-template-columns: 1fr 2fr ;
    gap: 10px;
    z-index: 1;
}

#choose{
    grid-column: 1;
    grid-row: 1/3;
    display: grid;
    grid-template-rows: repeat(12,145px);
    overflow-y: auto;
    height: 580px;
}

#out-zero{
    grid-row: 12;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-un{
    grid-row: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-deux{
    grid-row: 2;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-trois{
    grid-row: 3;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-quatre{
    grid-row: 4;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-cinq{
    grid-row: 5;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-six{
    grid-row: 6;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;

}

#out-sept{
    grid-row: 7;
    display: grid;
    grid-template-columns: 2fr 1fr;

}


#out-huit{
    grid-row: 8;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-neuf{
    grid-row: 9;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-dix{
    grid-row: 10;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

#out-onze{
    grid-row: 11;
    display: grid;
    grid-template-columns: 2fr 1fr;

}

.outimg{
  grid-column: 1;
  margin:auto;
  width: 150px;
}


#titre-cyo{
    grid-row:1;
    grid-column:2;
    font-size:25px;
    height: 30px;
}

.wto{
    grid-column:2;
    margin:auto;
}

#current-outfit{
    grid-column: 2;
    grid-row: 2;
    margin-left:50px;
    margin-right: 50px;
    margin-bottom: auto;
    margin-top:1px;
      
}

#imgoutfit{
    margin:auto;
}




</style>
