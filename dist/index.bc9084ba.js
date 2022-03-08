let yourName = document.getElementById("tamaName");
let yourAnimal = document.getElementById("tamaAnimal");
console.log("Benny");
let myBtn = document.getElementById("mySubmit");
// let myBtn:any = (<HTMLInputElement>document.getElementById("mySubmit"))
myBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // let bennyPic = document.getElementById("hitPic") as HTMLImageElement;
    // bennyPic.src = ".tamabenny.png"
    class Newtamagotchi {
        constructor(tamagotchiName, tamagotchiAnimal){
            this.tamagotchiName = tamagotchiName;
            this.tamagotchiAnimal = tamagotchiAnimal;
        }
    }
    const myNewTamagotchi = new Newtamagotchi(yourName.value, yourAnimal.value);
    myNewTamagotchi.tamagotchiName;
    console.log(myNewTamagotchi);
    document.getElementById("hitNamn").innerHTML = "Ditt namn: " + myNewTamagotchi.tamagotchiName;
    document.getElementById("hitAnimal").innerHTML = "Ditt djur: " + myNewTamagotchi.tamagotchiAnimal;
});

//# sourceMappingURL=index.bc9084ba.js.map
