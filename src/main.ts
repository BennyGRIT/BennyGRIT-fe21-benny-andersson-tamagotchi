let yourName:any = (<HTMLInputElement>document.getElementById("tamaName"))
console.log(yourName.value)

let myBtn:any = (document.getElementById("mySubmit"))
// let myBtn:any = (<HTMLInputElement>document.getElementById("mySubmit"))

myBtn.addEventListener("click", function(){
    console.log(yourName.value)
    document.getElementById("hitNamn").innerHTML = yourName.value
})

class Newtamagotchi {
    constructor(
        public tamagotchiName: string,
        public tamagotchiAnimal: string
    ) {
    }
}


