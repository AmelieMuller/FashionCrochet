<template>

  <canvas></canvas>
  <div class="modal-wrapper">
     <div class="modal">
         <div class="modal-close">X</div>
         <div class="modal-content">
             <h2 id="titre-shop">Let's shop</h2>
             <div id="un">
                <img class="img" src="./image/newpose_manche.png">
                <button class="bog" id="manche">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="deux">
                <img class="img" src="./image/newpose_top_fleur_blanc.png">
                <button class="bog" id="fleur_blanc">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="trois">
                <img class="img" src="./image/newpose_top_fleur_bleu.png">
                <button class="bog" id="fleur_bleu">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="quatre">
                <img class="img" src="./image/newpose_top_long_blanc.png">
                <button class="bog" id="long_blanc">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="cinq">
                <img class="img" src="./image/newpose_top_long_marron.png">
                <button class="bog" id="long_marron">Buy on game</button>
                <button><a href="https://www.instagram.com/">Buy irl !</a></button>
            </div>

            <div id="six">
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
             <h2>Choose your outfit</h2>
             <p>Welcome to your closet!</p>
             <a href="https://www.instagram.com/">Buy in real life!</a>
             <button class="AV1-outfit">Buy on game</button>
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
.modal-wrapper {
  background: rgba(0, 0, 0, 0.508);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
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
    color: rgb(250, 248, 248);
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
    width: 70px;
    height: 10px;
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
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  max-width: 600px;
  width: 100%;
  background: wheat;
  padding: 20px;
  margin: 35vh auto;
  border-radius: 5px;
  position: relative;
}
.modal-outfit a {
  text-decoration: none;
  background: crimson;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
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
/*
button {
  background: crimson;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px auto;
  cursor: pointer;
}

.AV1-outfit {
  background: crimson;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px auto;
  cursor: pointer;
  }
  */
</style>