
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
            Alien.hull -= this.firepower

            Alien.hull <= 0 ? console.log(`Alien ship has been destroyed there are still ${alienDock.length -1} aliens on the dock`) : console.log(`The Alien has ${Alien.hull} hull points remaining, there are ${alienDock.length} ships left`)

            if(Alien.hull <= 0){
                delAlien()
                console.log(alienDock)
            }
        }else{
            console.log(`Noob, Your attack has missed!`)
        }
    }

    retreat(){
        console.log(`You have retreated and branded as a coward there were ${alienDock.length} alien ships remaining`)

    }
}

class AlienShip extends Ship{
    constructor(hull=1, firepower=2,accuracy=.3){
        super(hull, firepower,accuracy)
        this.hull = (Math.floor(Math.random() * 4) + 3)
        this.firepower= Math.floor(Math.random() * 3) + 2;
        this.accuracy=(Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(ussAssembly){
        if(Math.random() < this.accuracy){
            console.log(`AlienShip has hit your ship!`)
        ussAssembly.hull -= this.firepower

        ussAssembly.hull <= 0 ? console.log(`Oh boy! Get Good because you have ${ussAssembly.hull} hull points remaining`) : console.log(`You have ${ussAssembly.hull} hull points remaining`)
        
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
                removeAlienSet()
                setAlienDock()
            const  ussAssembly = new HumanShip(20, 5, .7 )
        }

        if(alienDock.length === 0){
            console.log('Congradulations you have saved the world!')
            setAlienDock()
            const  ussAssembly = new HumanShip(20, 5, .7 )

        }

       
    }
}


 const  ussAssembly = new HumanShip(20, 5, .7 )

// console.log(ussAssembly)

// const Alien1 = new AlienShip (1, 2, .3)

// console.log(Alien1)

const atkbtn = document.querySelector('#atk')

atkbtn.addEventListener('click', function(){

   ussAssembly.attack(alienDock[0])
   gameObject.checkWin()
   alienDock[0].attack(ussAssembly)
   gameObject.checkWin()
})

const retreat = document.querySelector('#retreat')
// console.log(retreat)

retreat.addEventListener('click', function (){
    ussAssembly.retreat()
})

function delAlien (){
    alienDock.splice(0,1)
}
const alienDock =[]
function setAlienDock(){
   
for( let i = 0; i < 6; i++){
    const alienship = new AlienShip()
    alienDock.push(alienship)
    
}
}

function removeSetAlien(){
     alienDock= []
}

const start = document.querySelector('#start')

start.addEventListener('click', function(){
    setAlienDock()
})

const restart = document.querySelector('#restart')

restart.addEventListener('click', function(){
    window.location.reload()
})