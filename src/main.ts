let yourName:any = (<HTMLInputElement>document.getElementById("tamaName"))
let yourAnimal:any = (<HTMLInputElement>document.getElementById("tamaAnimal"))

console.log("Benny")

let myBtn:any = (document.getElementById("mySubmit"))
// let myBtn:any = (<HTMLInputElement>document.getElementById("mySubmit"))


myBtn.addEventListener("click", function(e:any){
    e.preventDefault();
    // let bennyPic = document.getElementById("hitPic") as HTMLImageElement;
    // bennyPic.src = ".tamabenny.png"

    class Newtamagotchi {
        constructor(
            public tamagotchiName: any,
            public tamagotchiAnimal: any
        ) {
        }
    }
    
    const myNewTamagotchi = new Newtamagotchi (yourName.value, yourAnimal.value);
    myNewTamagotchi.tamagotchiName
    console.log(myNewTamagotchi)
    
    document.getElementById("hitNamn").innerHTML = "Ditt namn: "+ myNewTamagotchi.tamagotchiName
    document.getElementById("hitAnimal").innerHTML = "Ditt djur: "+ myNewTamagotchi.tamagotchiAnimal


    
})

