let yourName:any = (<HTMLInputElement>document.getElementById("tamaName"))
let yourAnimal:any = (<HTMLInputElement>document.getElementById("tamaAnimal"))

console.log("Benny")

let myBtn:any = (document.getElementById("mySubmit"))

let img = document.createElement("img")
let imgPlace = document.getElementById("bennyBild")
imgPlace.appendChild(img)
// img.src = "tamagotshin.b3a9c913.png"


myBtn.addEventListener("click", function(e:any){
    e.preventDefault();

    let myNicePicture = document.getElementById('dinPicture')as HTMLSelectElement;
    let pictureChoice = myNicePicture.options[myNicePicture.selectedIndex].value;

    if(pictureChoice == '1') {
        imgPlace.appendChild(img)
        img.src = "tamagotshin.b3a9c913.png"

    
    } else if(pictureChoice == '2') {
        imgPlace.appendChild(img)
        img.src = "tamabenny.5c1f3e2e.png"

    }

    class Newtamagotchi {
        constructor(
            public tamagotchiName: string,
            public tamagotchiAnimal: string,
            public tamagotchiHunger:any[],
            public tamagotchiHappiness:any[]
        ) {
        }
    }
    // let myTry = setInterval(this.logText.bind(this), 3000);

    
    const myNewTamagotchi = new Newtamagotchi (yourName.value, yourAnimal.value,[0,1,2,3,4,5,6,7,8,9,10], [0,1,2,3,4,5,6,7,8,9,10]);
    myNewTamagotchi.tamagotchiName
    console.log(myNewTamagotchi)
    
    document.getElementById("hitNamn").innerHTML = "Namn: "+ myNewTamagotchi.tamagotchiName
    document.getElementById("hitAnimal").innerHTML = "Djuur: "+ myNewTamagotchi.tamagotchiAnimal
    document.getElementById("hunger").innerHTML = "Hunger poäng: " +myNewTamagotchi.tamagotchiHunger[5]
    document.getElementById("happiness").innerHTML = " Happiness poäng: " +myNewTamagotchi.tamagotchiHappiness[5]




    let matamataBtn:any = (document.getElementById("matamata"))
// let lekalekaBtn:any = (document.getElementById("lekaleka"))

matamataBtn.addEventListener("click", function (nr1:any, nr2:any){
    return nr1-nr2

    //     document.getElementById("happiness").innerHTML =  " Happiness poäng: 10"
    //     document.getElementById("hunger").innerHTML ="Hunger poäng: " +myNewTamagotchi.tamagotchiHunger.values
    // for(let i=5; i<10; i--){
    //     document.getElementById("hunger").innerHTML = "Hunger poäng: " +myNewTamagotchi.tamagotchiHunger[i]       
    //      }
})

    // for (let indexet=5; indexet<10; indexet++){
    //     // myNewTamagotchi.tamagotchiHunger[indexet] 
    //     setInterval(myNewTamagotchi.tamagotchiHunger[indexet].logText.bind(myNewTamagotchi.tamagotchiHunger[indexet]), 3000)

    // }

    
})




// function tryCount(){
//     for
// }

// <button onclick="setTimeout(myFunction, 3000)">Try it</button>

// <script>
// function myFunction() {
//   alert('Hello');
// }
// </script> 
