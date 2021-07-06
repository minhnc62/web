
function Charater(name){
    this.name = name;
    this.level = 1;
    this.weapon = hand;
    this.critRate = 0.2;

    this.attack = function () {
        let rate = Math.random();
        let isCrit = rate <= this.critRate;
        if(isCrit)
        {
            console.log("tan cong boi "+ this.weapon);
            console.log("sat thuong chi mang "+ this.critRate);
        }
        else{
            console.log("tan cong boi "+ this.weapon);
            console.log("sat thuong gay ra "+ this.weapon.damage);
        }
        return this;

    }
    this.changWeapon = function (weapon) {
    //     if(typeof weapon == "object" &&  )

    // }

}
function Weapon(type , name , damage){
    this.type = type;
    this.name = name;
    this.damage = damage;
    // this.toString = function (){
    //     return this.
    // }

}
let hand = new Weapon( "Hand","Ringht Hand", 1);
let mouse = new Weapon( "Mouse","Logitech", 100);
let knife = new Weapon( "Knife","Thai lan", 1000);
let macbook = new Weapon( "Macbook","vh", 1);



