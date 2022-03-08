let yourName = document.getElementById("tamaName");
console.log(yourName.value);
let myBtn = document.getElementById("mySubmit");
// let myBtn:any = (<HTMLInputElement>document.getElementById("mySubmit"))
myBtn.addEventListener("click", function() {
    console.log(yourName.value);
    document.getElementById("hitNamn").innerHTML = yourName.value;
});
class Newtamagotchi {
    constructor(tamagotchiName, tamagotchiAnimal){
        this.tamagotchiName = tamagotchiName;
        this.tamagotchiAnimal = tamagotchiAnimal;
    }
}

//# sourceMappingURL=index.bc9084ba.js.map
