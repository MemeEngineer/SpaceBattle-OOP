class Ship{
    constructor(hull, firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
   
}

class HumanShip extends Ship{

    constructor(hull= 20,firepower= 5,accuracy = 0.7){
        super(hull,firepower,accuracy)
        this.hull = hull;
        this.firepower= firepower;
        this.accuracy = accuracy;

    }
    attack(Alien){
        Alien.hull -= this.firepower
        console.log(Alien.hull)
    }
}
const  ussAssembly = new HumanShip(20, 5, .7 )

console.log(ussAssembly)

class AlienShip extends Ship{
    constructor(hull=1, firepower=2,accuracy=.3){
        super(hull, firepower,accuracy)
        this.hull =hull;
        this.firepower= firepower;
        this.accuracy=accuracy;
    }
}

const Alien1 = new AlienShip (1, 2, .3)
console.log(Alien1)

console.log(ussAssembly.attack(Alien1))