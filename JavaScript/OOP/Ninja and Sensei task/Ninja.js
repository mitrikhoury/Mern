
class Ninja {

   constructor(name){
    this.name=name;
    this.speed = 3;
    this.health =100;
    this.strength = 3;
   }

   sayName(){
    console.log(this.name);
   }

   showStatus(){
    console.log(`Ninja's name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, and health: ${this.health}.`);
   }
   drinkSake(){
    this.health += 10;
   }
}

// export default Ninja;
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStatus();

class Sensei extends Ninja {
    
   constructor(name){
     super(name);
     this.health=200;
     this.speed=10;
     this.strength=10;
     this.wisdom=10;
   }

   speakWisdom(){
       super.drinkSake();
   }
 }

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStatus();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"