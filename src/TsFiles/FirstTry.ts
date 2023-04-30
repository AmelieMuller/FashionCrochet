import { Scene, Engine, SceneLoader, FreeCamera, Vector3, HemisphericLight, SceneInstrumentation, MeshBuilder, AbstractMesh, Constants, Mesh, ActionManager, ExecuteCodeAction, PhysicsImpostor, int, AdvancedTimer, StandardMaterial, Texture, Vector4, Color3, Color4, Animation } from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/gui";
import { AdvancedDynamicTexture, Button, Control, GUI3DManager, MeshButton3D, SelectionPanel, TextBlock } from "@babylonjs/gui";
//import setAndStartTimer from "@babylonjs/Misc/timer";

export class FirstTry {
  scene: Scene;
  engine: Engine;
  cptLaine : int;
  textBox : SelectionPanel;
  text : TextBlock ;
  mouton1 : boolean ;
  available1 : string ;
  timing : int ;
  timersec : int ;
  plane : Mesh;
  matcollect : StandardMaterial;
  avancement : int ;
  camera : FreeCamera ;
  

  //attribut pour les vetements:
  wardrobe: Cloth[];
  currentoutfit: string;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);

    this.scene = this.CreateScene();

    this.CreateEnvironment();

    this.camera=new FreeCamera("camera",new Vector3(0,10,0),this.scene);

    this.CreateController();

    this.CreateChooseYourOutfit();

    
    //Setup pour le cpt de Laine
    this.textBox = new SelectionPanel("textBox");
    this.text = new TextBlock();
    this.cptLaine=10;
    this.mouton1 = true;
    this.available1 = "Collect your yarn !";
    this.timing = 0 ;
    this.avancement = 1;
    this.timersec = 5 ;
    const f = new Vector4(0,0, 1 , 1);
    this.plane = MeshBuilder.CreatePlane("plane", {frontUVs: f, backUVs: f, sideOrientation: Mesh.DOUBLESIDE});
    this.matcollect = new StandardMaterial("",this.scene);
    this.matcollect.diffuseTexture = new Texture("./textures/timer/collect.png");
    

    this.CreateCptLaine();
    this.CreateMouton();
    
    this.CreatePersonnage();

    //pour les vetements:
    this.wardrobe = [];
    this.currentoutfit = "";
    
    


    //this.CreateCutScene();
    this.CreateStartRunway();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
  

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const light= new HemisphericLight("light",new Vector3(0,1,0),this.scene);

    scene.onPointerDown=(evt)=>{
        //for the mouse settings, 0:left click,1:middle mouse button,2:right click
        if (evt.button===0) this.engine.enterPointerlock();
        if (evt.button===1) this.engine.exitPointerlock();
    }
    const framesPerSecond=60;
    const gravity=-9.81;
    //gravity on the y axis
    scene.gravity=new Vector3(0,gravity/framesPerSecond,0);
    //enable collisions
    scene.collisionsEnabled=true;


    this.CreateActions(this);

    return scene;
  }

  async CreateMouton(): Promise<void> {
    
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "moutonGwen.glb",
      this.scene
    );
    //apply collisions to every mesh in the model
    //.map goes through every mesh
    let i =0;
    meshes.map(mesh=>{ //for each mesh apply collisions donc c'est comme un for i in list par exemple
       mesh.checkCollisions=true;
       //console.log("meshes : "+i+" "+mesh);
       i++;
      //Création de l'intéraction avec mouton
      mesh.actionManager = new ActionManager(this.scene);
      mesh.actionManager.registerAction(
        new ExecuteCodeAction({trigger: ActionManager.OnPickTrigger},(evt) => this.Mouton1OnClick(this)));  //Quand on click sur la boule ca lance Mouton1OnClick

    })

    //Plan 2D qui donne des infos au dessus
    //const plane = Mesh.CreatePlane("plane",2,this.scene); //plane, le plan 2D sur lequel on va cliquer, 2=size
    //plane.parent = meshes[0];
    //plane.position.y = 2;

    
    //const matcollect = new StandardMaterial("",this.scene);
    //matcollect.diffuseTexture = new Texture("./textures/timer/collect.png");   ////./textures/timer/collect.png
    //textures pour la barres qui augmente
    const matbarre = new StandardMaterial("",this.scene);
    matbarre.diffuseTexture = new Texture("./textures/timer/barre1.png");
    
    
    //const f = new Vector4(0,0, 1 , 1); // front image = half the whole image along the width 
    //const b = new Vector4(1,0, 1, 1); // back image = second half along the width
    
    //const plane = MeshBuilder.CreatePlane("plane", {frontUVs: f, backUVs: f, sideOrientation: Mesh.DOUBLESIDE});
    this.plane.parent = meshes[1];
    this.plane.position.y = 2;
    this.plane.scaling.x=4;
    this.plane.scaling.y=1;
    this.plane.rotate(new Vector3(0,1,0),-1.5708);
    this.plane.material = this.matcollect;
  }

  Mouton1OnClick(self : FirstTry):void{
    if (self.mouton1){
      self.cptLaine+=1;
      self.text.text = "laine : "+self.cptLaine;
      self.mouton1=false;
      console.log("Juste avant timer");
      //button.textBlock!.text = "Please wait to collect your yarn";
      const timer = new AdvancedTimer({timeout:1000,contextObservable: self.scene.onBeforeRenderObservable});  //Timer à 0 jsp pk mais j'ai pas vu de changements en fonctions des valeurs
      timer.onTimerEndedObservable.add((evt) => self.Timer(self));
      timer.onEachCountObservable.add((evt) => self.Waiting(self));
      timer.start(this.timersec*1000); //La durée du timer
      
    }
    self.textBox.addControl(self.text);

  }

  CreateCptLaine():void{
    const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

    this.textBox.width = 0.25;
    this.textBox.height = 0.10;
    this.textBox.background = "#1388AF";
    this.textBox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    this.textBox.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        
    this.text.text = "laine : "+ this.cptLaine;
    this.text.color = "white";
    this.text.fontSize = 30;
    this.textBox.addControl(this.text);  
    advancedTexture.addControl(this.textBox);
  }

  Timer(self : FirstTry) : void{
    self.mouton1=true;
    //button.textBlock!.text = this.available1 ;
    self.plane.material = self.matcollect ;
    self.timing=0;
    self.avancement = 1 ;
  }

  Waiting(self : FirstTry) : void{
    self.mouton1=false;
    if (self.timing%(Math.trunc(self.timersec*1000/340))==0&&self.avancement<=17){
      const matbarre = new StandardMaterial("",this.scene);
      matbarre.diffuseTexture = new Texture("./textures/timer/barre"+self.avancement+".png");
      // mettre self.timersec/340 en entier 
      self.plane.material = matbarre ;
      //console.log("la valeur : "+Math.trunc(self.timersec*1000/340));
      self.avancement+=1;
      //matbarre.diffuseTexture = new Texture("./textures/timer/barre1.png");
      //button.textBlock!.text = `Wait ${self.timersec - (self.timing/(self.timersec*10))} seconds to collect your next yarn` ;
    }
    self.timing+=1;
     
  }

  async CreateEnvironment(): Promise<void> {
    
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "withRunway.glb",
      this.scene
    );

    //apply collisions to every mesh in the model
    //.map goes through every mesh
    meshes.map(mesh=>{ //for each mesh apply collisions donc c'est comme un for i in list par exemple
       mesh.checkCollisions=true;
    })

  }

  CreateController():void{
    //const camera=new FreeCamera("camera",new Vector3(0,10,0),this.scene); //without a camera we can't see anything
    //static camera unless we attach control
    this.camera.attachControl();
    

    this.camera.applyGravity=true; //applies gravity to the camera which is our controller
    this.camera.checkCollisions=true;
    //but this will not work unless we can "detect" the camera, we need to create a 'body' for the camera => elipsoid 

    this.camera.ellipsoid=new Vector3(1,1,1);

    this.camera.minZ=0.45; //this allows us to not get very close to the objects and see through them
    this.camera.speed=0.5;
    this.camera.angularSensibility=4000; //rotate more slowly

    //personalize the keys for the controller movement
    //we can still use arrows keys for movement donc both options are available
    this.camera.keysUp.push(87); //keycode for W is 87 check https://www.toptal.com/developers/keycode
    this.camera.keysUp.push(90); // 90 : z pour les azerty : dsl hajar
    this.camera.keysRight.push(68); //65: d
    this.camera.keysDown.push(83);//83:s
    this.camera.keysLeft.push(81);//81:q

    

    }
    /*
    CreateObjects():void {
      const ball = MeshBuilder.CreateSphere("ball",{diameter : 1} , this.scene);
      /*ball.physicsImpostor = new PhysicsImpostor(
          ball,
          PhysicsImpostor.SphereImpostor,
          { mass: 1, restitution: 0.8 }
        );
        
      ball.position=new Vector3(0,1,1);
      this.CreateActions(ball);

  }
  */

  CreateActions(self : FirstTry): void {
    const ball = MeshBuilder.CreateSphere("ball",{diameter : 1} , this.scene);
    ball.position=new Vector3(0,1,1);
      ball.actionManager = new ActionManager(this.scene);
      ball.actionManager.registerAction(
          new ExecuteCodeAction({trigger: ActionManager.OnPickTrigger}, shop)
          );
      function shop() {
        (document.querySelector(".modal-wrapper") as HTMLDivElement).style.display = "block";  //AFFICHE LA PAGE SHOP
        (document.querySelector(".modal-close") as HTMLDivElement).addEventListener("click", hide);  //Clique de la croix ?
        (document.getElementById("manche") as HTMLButtonElement)!.addEventListener("click",() => buy("manche",self));  //buy cloth1

        (document.querySelector("#fleur_bleu") as HTMLButtonElement)!.addEventListener("click",() => buy("fleur_bleu",self));
        (document.querySelector("#fleur_blanc") as HTMLButtonElement)!.addEventListener("click",() => buy("fleur_blanc",self));
        (document.querySelector("#long_blanc") as HTMLButtonElement)!.addEventListener("click",() => buy("long_blanc",self));
        (document.querySelector("#long_marron") as HTMLButtonElement)!.addEventListener("click",() => buy("long_marron",self));
        (document.querySelector("#bob") as HTMLButtonElement)!.addEventListener("click",() => buy("bob", self));
      
        document.getElementById("./image/horizontal/manche.png")!.addEventListener("click", ()=>wear("manche"));
        document.getElementById("./image/horizontal/manche_bob.png")!.addEventListener("click", ()=>wear("manche_bob"));
        document.getElementById("./image/horizontal/long_blanc.png")!.addEventListener("click", ()=>wear("long_blanc"));
        document.getElementById("./image/horizontal/fleur_blanc.png")!.addEventListener("click", ()=>wear("fleur_blanc"));
        document.getElementById("./image/horizontal/fleur_blanc_bob.png")!.addEventListener("click", ()=>wear("fleur_blanc_bob"));
        document.getElementById("./image/horizontal/fleur_bleu.png")!.addEventListener("click", ()=>wear("fleur_bleu"));
        document.getElementById("./image/horizontal/fleur_bleu_bob.png")!.addEventListener("click", ()=>wear("fleur_bleu_bob"));
        document.getElementById("./image/horizontal/long_blanc.png")!.addEventListener("click", ()=>wear("long_blanc"));
        document.getElementById("./image/horizontal/long_marron_bob.png")!.addEventListener("click", ()=>wear("long_marron_bob"));
        document.getElementById("./image/horizontal/long_marron.png")!.addEventListener("click", ()=>wear("long_marron"));


      function hide() {
          (document.querySelector(".modal-wrapper") as HTMLDivElement).style.display = "none";  //Enlève la page shop
          }

      // fonction pour changer d'outfit 

      function wear(id:string){
        const outfit = [];
        const clothes = ["bob", "manche", "fleur_blanc", "fleur_bleu", "long_blanc", "long_marron"];
        for(let i=0; i<clothes.length; i++){
          if(id.includes(clothes[i])){
            outfit.push(clothes[i]);
          }
        }
        let wearable = true;
        for(let i=0; i<outfit.length; i++){
          if(isOwned(outfit[i])==false){
            wearable = false;
          }
        }
        if(wearable == true){
          //alert("you are wearing"+id);
          self.currentoutfit = "./outfit/"+id+".png";
          console.log(self.currentoutfit);
          document.getElementById("imgoutfit")!.setAttribute('src',self.currentoutfit );
          console.log(document.getElementById("imgoutfit")!.getAttribute("src"));
        }
        else{
          alert("You dont own that outfit for the moment :(");
        }
      }

      //fonction pour obtenir un vetement

      function buy(name: string, self: FirstTry){
        if(isOwned(name)==true){
          alert("You already own "+name);
        }
        else{
          console.log(name);
          let price = 6;
          if(name=="bob"){
            price = 3;
          }
          const cloth = new Cloth(name, price);
          if((self.cptLaine >= cloth.price)){
            self.cptLaine = self.cptLaine-cloth.price;
            self.text.text = "laine : "+self.cptLaine;
            cloth.owned = true;
            self.wardrobe.push(cloth);
            alert("You just bought "+cloth.name);
            }
           
          else{
             alert("You dont have enought wool, soory :(");
          }
        }
      
      }   
    
      //fonction pour voir si on possède un habit
      function isOwned(name: string){
        for(const c of self.wardrobe){
          if(c.name==name){
            return true;
          }
        }
        return false;
      }
    }
    }
    
    CreateChooseYourOutfit():void {
      const plane = Mesh.CreatePlane("plane",3,this.scene); //plane, le plan 2D sur lequel on va cliquer, 2=size
      plane.position.y = 2;
      plane.position.x = -45;
      plane.position.z = 28;
      plane.rotate(new Vector3(0,1,0),-1.5708);
  
      const advancedTexture2 = AdvancedDynamicTexture.CreateForMesh(plane);
  
      const button1 = Button.CreateSimpleButton("but1", "Choose your outfit");
      button1.width = 1;
      button1.height = 0.4;
      button1.color = "black";
      button1.fontSize = 50;
      button1.background = "pink";
      button1.onPointerUpObservable.add(()=>this.ClickOutfit(this));
      advancedTexture2.addControl(button1);
      
    }
    ClickOutfit(self : FirstTry):void{
      (document.querySelector(".modal-wrapper-outfit") as HTMLDivElement).style.display = "block";  //AFFICHE LA PAGE SHOP
      (document.querySelector(".modal-close-outfit") as HTMLDivElement).addEventListener("click", hide);  //Clique de la croix ?
      
      
     /*
      document.getElementById("./image/horizontal/manche.png")!.addEventListener("click", ()=>wear("manche"));
      document.getElementById("./image/horizontal/manche_bob.png")!.addEventListener("click", ()=>wear("manche_bob"));
      document.getElementById("./image/horizontal/long_blanc.png")!.addEventListener("click", ()=>wear("long_blanc"));
      document.getElementById("./image/horizontal/fleur_blanc.png")!.addEventListener("click", ()=>wear("fleur_blanc"));
      document.getElementById("./image/horizontal/fleur_blanc_bob.png")!.addEventListener("click", ()=>wear("fleur_blanc_bob"));
      document.getElementById("./image/horizontal/fleur_bleu.png")!.addEventListener("click", ()=>wear("fleur_bleu"));
      document.getElementById("./image/horizontal/fleur_bleu_bob.png")!.addEventListener("click", ()=>wear("fleur_bleu_bob"));
      document.getElementById("./image/horizontal/long_blanc.png")!.addEventListener("click", ()=>wear("long_blanc"));
      document.getElementById("./image/horizontal/long_marron_bob.png")!.addEventListener("click", ()=>wear("long_marron_bob"));
      document.getElementById("./image/horizontal/long_marron.png")!.addEventListener("click", ()=>wear("long_marron"));
      */

      function hide() {
          (document.querySelector(".modal-wrapper-outfit") as HTMLDivElement).style.display = "none";  //Enlève la page shop
      }



      function isOwned(name: string){
        for(const c of self.wardrobe){
          if(c.name==name){
            return true;
          }
        }
        return false;
      }

      function wear(id:string){
        const outfit = [];
        const clothes = ["bob", "manche", "fleur_blanc", "fleur_bleu", "long_blanc", "long_marron"];
        for(let i=0; i<clothes.length; i++){
          if(id.includes(clothes[i])){
            outfit.push(clothes[i]);
          }
        }
        let wearable = true;
        for(const c in outfit){
          if(isOwned(c)==false){
            wearable = false;
            alert("You dont own that outfit for the moment :(");
            break;
          }
        }

        if(wearable == true){
          alert("you are wearing"+id);
          const link = "./image/outfit/"+id+".png";
          document.getElementById("imgoutfit")!.setAttribute("scr", link);
        }
      }

    }

    CreateCutScene(self : FirstTry):void{
      const camKeys = [];
      console.log("Dans la methode",self);
      const fps = 60;
      const camAnim = new Animation(
        "camAnim",
        "position",
        fps,Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT,
        true);

      camKeys.push({frame:0 , value: new Vector3(-15,3,-20)});
      //camKeys.push({frame:5* fps , value: new Vector3(-35,2,-20)});
      camKeys.push({frame:8* fps , value: new Vector3(-28,3,-20)});
      //camKeys.push({frame:8* fps +1 , value: new Vector3(-28,4,-23)});
      //camKeys.push({frame:16* fps , value: new Vector3(-15,4,-23)});
      camAnim.setKeys(camKeys);
      self.camera.detachControl();
      self.camera.position = new Vector3(-15,3,-20);
      self.camera.rotation = new Vector3(0,Math.PI,0);
      self.camera.minZ=0.45; //this allows us to not get very close to the objects and see through them
      self.camera.speed=0.5;
      self.camera.animations.push(camAnim);
      self.scene.beginAnimation(self.camera, 0,8* fps);
      const timer = new AdvancedTimer({timeout:8* fps,contextObservable: self.scene.onBeforeRenderObservable});  //Timer à 0 jsp pk mais j'ai pas vu de changements en fonctions des valeurs
      timer.onTimerEndedObservable.add(() => self.SecondAnimation(self));
      timer.start(8* fps*18);
    }
    SecondAnimation(self : FirstTry){
      const fps = 60;
      const camKeys = [];
      const camAnim = new Animation(
        "camAnim",
        "position",
        fps,Animation.ANIMATIONTYPE_VECTOR3,
        Animation.ANIMATIONLOOPMODE_CONSTANT,
        true);

      camKeys.push({frame:0, value: new Vector3(-40,5.5,-26)});
      camKeys.push({frame:2* fps, value: new Vector3(-40,5.5,-26)});
      camKeys.push({frame:10* fps , value: new Vector3(-20,5.5,-26)});
      camAnim.setKeys(camKeys);
      self.camera.rotation = new Vector3(Math.PI/8,Math.PI/2,0);
      self.camera.position = new Vector3(-40,5.5,-26);
      self.camera.animations.slice(0,self.camera.animations.length);
      self.camera.animations.push(camAnim);
      self.scene.beginAnimation(self.camera, 0 ,10* fps);
      const timer = new AdvancedTimer({timeout:8* fps,contextObservable: self.scene.onBeforeRenderObservable});  //Timer à 0 jsp pk mais j'ai pas vu de changements en fonctions des valeurs
      timer.onTimerEndedObservable.add(() => self.AfterCutScene(self));
      timer.start(10* fps*18);
    }

    AfterCutScene(self : FirstTry){
      self.camera.position = new Vector3(-10,2,-29);
      self.camera.attachControl();
      self.camera.applyGravity=true; //applies gravity to the camera which is our controller
      self.camera.checkCollisions=true;
      //but this will not work unless we can "detect" the camera, we need to create a 'body' for the camera => elipsoid 

      self.camera.ellipsoid=new Vector3(1,1,1);

      self.camera.minZ=0.45; //this allows us to not get very close to the objects and see through them
      self.camera.speed=0.5;
      self.camera.angularSensibility=4000; //rotate more slowly
      self.camera.keysUp.push(87); //keycode for W is 87 check https://www.toptal.com/developers/keycode
      self.camera.keysUp.push(90); // 90 : z pour les azerty : dsl hajar
      self.camera.keysRight.push(68); //65: d
      self.camera.keysDown.push(83);//83:s
      self.camera.keysLeft.push(81);//81:q

    }

    async CreatePersonnage(): Promise<void> {
      const { meshes , animationGroups } = await SceneLoader.ImportMeshAsync(
        "",
        "./models/",
        "animated.glb",
        this.scene
      );
      meshes[0].rotate(Vector3.Up(),Math.PI/2);
      meshes[0].position = new Vector3(-15,1.65,-26.5);
      meshes[0].scaling = new Vector3(2,2,2);
      
      //console.log("Animation group : ", animationGroups);

      animationGroups[0].stop();
      animationGroups[2].play(true);
    }

    CreateStartRunway():void {
      const plane = Mesh.CreatePlane("plane",3,this.scene); //plane, le plan 2D sur lequel on va cliquer, 2=size
      plane.position.y = 2;
      plane.position.x = -9;
      plane.position.z = -26.5;
      plane.rotate(new Vector3(0,1,0),-1.5708);
  
      const advancedTexture2 = AdvancedDynamicTexture.CreateForMesh(plane);
  
      const button1 = Button.CreateSimpleButton("but1", "Start your runway");
      button1.width = 1;
      button1.height = 0.4;
      button1.color = "black";
      button1.fontSize = 50;
      button1.background = "pink";
      advancedTexture2.addControl(button1);
      console.log("Juste avant",this);
      button1.onPointerUpObservable.add(() => this.CreateCutScene(this));
      
      
    }
    
}

class Cloth{
  name: string;
  price: int;
  worn : boolean;
  owned: boolean;

  constructor(n:string, p: int ){
    this.name = n;
    this.price = p;
    this.worn = false;
    this.owned = false;
  }

}

