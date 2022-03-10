let yourName: any = (<HTMLInputElement>document.getElementById("tamaName"))

console.log("Benny")



let myBtn: any = (document.getElementById("mySubmit"))

let img = document.createElement("img")
let imgPlace = document.getElementById("bennyBild")
imgPlace.appendChild(img)
// img.src = "tamagotshin.b3a9c913.png"


myBtn.addEventListener("click", function (e: any) {
    e.preventDefault();
    const letsHunger:any = document.getElementById("hunger")
    letsHunger.reload

    let myNicePicture = document.getElementById('dinPicture') as HTMLSelectElement;
    let pictureChoice = myNicePicture.options[myNicePicture.selectedIndex].value;

    if (pictureChoice == '1') {
        imgPlace.appendChild(img)
        img.src = "tamagotshin.b3a9c913.png"


    } else if (pictureChoice == '2') {
        imgPlace.appendChild(img)
        img.src = "tamabenny.5c1f3e2e.png"

    }

    class Newtamagotchi {
            public tamagotchiName: string = yourName;
            public tamagotchiAvatar: string = pictureChoice;
            public tamagotchiHunger:number = 5;
            public tamagotchiHappiness:number =5;
            private lesHunger;
            private lesHappy;
        
            constructor(tamagotchiName, tamagotchiAvatar) {
                this.tamagotchiName = tamagotchiName;
                this.tamagotchiAvatar = tamagotchiAvatar;

                this.lesHunger = setInterval(this.hungryHunger.bind(this), 4000);
                this.lesHappy = setInterval(this.sadHappiness.bind(this), 4000)
        }

        hungryHunger():number{
            if(this.tamagotchiHunger >=10){
                alert ("Du dog av svält. Testa gärna igen, men kom igen och mata den lille tamagotchin :)")
                location.reload()
            }
            if (this.tamagotchiHunger <=0){
                
            }
                document.getElementById("hunger").innerHTML = "Hunger: " + myNewTamagotchi.tamagotchiHunger
            return this.tamagotchiHunger++
        }
        feedTheHunger():number{
            if(this.tamagotchiHappiness <=0){
                alert ("Din tamagotchi dog at tristess, lek lite med honom nästa gång vettja!! :)")
                location.reload()
            }
            return this.tamagotchiHunger--
        }

        sadHappiness():number{
            document.getElementById("happiness").innerHTML = " Happiness: " + myNewTamagotchi.tamagotchiHappiness

            return this.tamagotchiHappiness--
        }
        playTheHappiness():number{
            return this.tamagotchiHappiness++
        }
        yourNameIs():string{
            return document.getElementById("hitNamn").innerHTML = "Namn: " + myNewTamagotchi.tamagotchiName        
        }
        
    }

//Här skapar vi den nya tamagotchin, 
    const myNewTamagotchi = new Newtamagotchi(yourName.value, pictureChoice);
    // myNewTamagotchi.tamagotchiName




    console.log(myNewTamagotchi)


    let matamataBtn: any = (document.getElementById("matamata"))
    let lekalekaBtn: any = (document.getElementById("lekaleka"))
    let restartaBtn:any = (document.getElementById("restarta"))

    restartaBtn.addEventListener("click", function(){
        location.reload()
    })
    
    matamataBtn.addEventListener("click", function (nr1: any, nr2: any) {
        myNewTamagotchi.feedTheHunger()
        // document.getElementById("hunger").innerHTML = "Hunger: " + myNewTamagotchi.tamagotchiHunger[0]
    })

    lekalekaBtn.addEventListener("click", function (nr1: any, nr2: any) {
        myNewTamagotchi.playTheHappiness()
        // myNewTamagotchi.sadHappiness()
        // document.getElementById("happiness").innerHTML = "Happiness: " + myNewTamagotchi.tamagotchiHappiness[10]
    })
    
})


