
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
        if(Math.random() < this.accuracy){
            console.log(`You have hit the alien`)
            Alien[i].hull -= this.firepower

            Alien[i].hull <= 0 ? console.log(`Alien ship has been destroyed`) : console.log(`The Alien has ${Alien[i].hull} hull points remaining`)
        }else{
            console.log(`Noob, Your attack has missed!`)
        }
    }
}

class AlienShip extends Ship{
    constructor(hull=1, firepower=2,accuracy=.3){
        super(hull, firepower,accuracy)
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower= Math.floor(Math.random() * 3) + 2;
        this.accuracy=(Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(ussAssembly){
        if(Math.random() < this.accuracy){
            console.log(`AlienShip has hit your ship!`)
        ussAssembly.hull -= this.firepower

        ussAssembly.hull <= 0 ? console.log(`Oh boy! Get Good because you have ${ussAssembly.hull}`) : console.log(`You have ${ussAssembly.hull} hull points remaining`)
        
        }else{
            console.log(`Blast! I have missed, prepare for another! ARGH!`)
        }
    }
}

// console.log(ussAssembly.attack(Alien1))
// console.log(Alien1.attack(ussAssembly))

const gameObject= {
    checkWin(){
        if(ussAssembly.hull <= 0){
                console.log("Game Over! Your ship has exploded.")
        }


       
    }
}
// console.log(gameObject.checkWin())


const  ussAssembly = new HumanShip(20, 5, .7 )

console.log(ussAssembly)

const Alien1 = new AlienShip (1, 2, .3)

console.log(Alien1)

const Alien =[]
for( let i = 0; i < 6; i++){
    const alienship = new AlienShip()
    Alien.push(alienship)
    console.log(Alien)
}




