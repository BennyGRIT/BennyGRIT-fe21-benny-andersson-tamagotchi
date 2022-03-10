let yourName = document.getElementById("tamaName");
console.log("Benny");
let myBtn = document.getElementById("mySubmit");
let img = document.createElement("img");
let imgPlace = document.getElementById("bennyBild");
imgPlace.appendChild(img);
// img.src = "tamagotshin.b3a9c913.png"
myBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const letsHunger = document.getElementById("hunger");
    letsHunger.reload;
    let myNicePicture = document.getElementById('dinPicture');
    let pictureChoice = myNicePicture.options[myNicePicture.selectedIndex].value;
    if (pictureChoice == '1') {
        imgPlace.appendChild(img);
        img.src = "tamagotshin.b3a9c913.png";
    } else if (pictureChoice == '2') {
        imgPlace.appendChild(img);
        img.src = "tamabenny.5c1f3e2e.png";
    }
    class Newtamagotchi {
        constructor(tamagotchiName, tamagotchiAvatar){
            this.tamagotchiName = yourName;
            this.tamagotchiAvatar = pictureChoice;
            this.tamagotchiHunger = 5;
            this.tamagotchiHappiness = 5;
            this.tamagotchiName = tamagotchiName;
            this.tamagotchiAvatar = tamagotchiAvatar;
            this.lesHunger = setInterval(this.hungryHunger.bind(this), 4000);
            this.lesHappy = setInterval(this.sadHappiness.bind(this), 4000);
        }
        hungryHunger() {
            if (this.tamagotchiHunger >= 10) {
                alert("Du dog av svält. Testa gärna igen, men kom igen och mata den lille tamagotchin :)");
                location.reload();
            }
            this.tamagotchiHunger;
            document.getElementById("hunger").innerHTML = "Hunger: " + myNewTamagotchi.tamagotchiHunger;
            return this.tamagotchiHunger++;
        }
        feedTheHunger() {
            if (this.tamagotchiHappiness <= 0) {
                alert("Din tamagotchi dog at tristess, lek lite med honom nästa gång vettja!! :)");
                location.reload();
            }
            return this.tamagotchiHunger--;
        }
        sadHappiness() {
            document.getElementById("happiness").innerHTML = " Happiness: " + myNewTamagotchi.tamagotchiHappiness;
            return this.tamagotchiHappiness--;
        }
        playTheHappiness() {
            return this.tamagotchiHappiness++;
        }
        yourNameIs() {
            return document.getElementById("hitNamn").innerHTML = "Namn: " + myNewTamagotchi.tamagotchiName;
        }
    }
    //Här skapar vi den nya tamagotchin, 
    const myNewTamagotchi = new Newtamagotchi(yourName.value, pictureChoice);
    // myNewTamagotchi.tamagotchiName
    console.log(myNewTamagotchi);
    let matamataBtn = document.getElementById("matamata");
    let lekalekaBtn = document.getElementById("lekaleka");
    let restartaBtn = document.getElementById("restarta");
    restartaBtn.addEventListener("click", function() {
        location.reload();
    });
    matamataBtn.addEventListener("click", function(nr1, nr2) {
        myNewTamagotchi.feedTheHunger();
    // document.getElementById("hunger").innerHTML = "Hunger: " + myNewTamagotchi.tamagotchiHunger[0]
    });
    lekalekaBtn.addEventListener("click", function(nr1, nr2) {
        myNewTamagotchi.playTheHappiness();
    // myNewTamagotchi.sadHappiness()
    // document.getElementById("happiness").innerHTML = "Happiness: " + myNewTamagotchi.tamagotchiHappiness[10]
    });
});

//# sourceMappingURL=index.bc9084ba.js.map
