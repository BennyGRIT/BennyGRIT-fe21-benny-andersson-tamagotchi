//Sökvägar för att skapa bilden
let img = document.createElement("img");
let imgPlace = document.getElementById("bennyBild");
imgPlace.appendChild(img);
//Knapp funktionen för att skapa Tamagotchin
let myBtn = document.getElementById("mySubmit");
myBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const letsHunger = document.getElementById("hunger");
    letsHunger.reload;
    let yourName = document.getElementById("tamaName");
    let nameChoice = yourName.value;
    let myNicePicture = document.getElementById('dinPicture');
    let pictureChoice = myNicePicture.options[myNicePicture.selectedIndex].value;
    //Väljer vilken bild som ska visas, beroende på användarens val
    if (pictureChoice == '1') {
        imgPlace.appendChild(img);
        img.src = "/img/tamagotshin.png";
    } else if (pictureChoice == '2') {
        imgPlace.appendChild(img);
        img.src = "/img/tamabenny.png";
    }
    //Skapar klass för att göra en Tamagotchi
    class Newtamagotchi {
        constructor(tamagotchiName, tamagotchiAvatar){
            this.tamagotchiName = nameChoice;
            this.tamagotchiAvatar = pictureChoice;
            this.tamagotchiHunger = 5;
            this.tamagotchiHappiness = 5;
            this.tamagotchiName = tamagotchiName;
            this.tamagotchiAvatar = tamagotchiAvatar;
            this.lesHunger = setInterval(this.hungryHunger.bind(this), 4000);
            this.lesHappy = setInterval(this.sadHappiness.bind(this), 6000);
        }
        // HUNGER..... "avslutar spelet om du kommer upp i 10, eller ner till 0"
        //Samt räknar upp hungern = ++
        hungryHunger() {
            if (this.tamagotchiHunger == 11) {
                location.reload();
                alert("Du dog av svält. Testa gärna igen, men kom ihåg att mata den lille tamagotchin :)");
            }
            if (this.tamagotchiHunger == 0) {
                alert("Obs, du har nu matat för mycket. Nu håller din tamagotchi på att Take a Shit");
                let imge = document.createElement("img");
                let imgPlacet = document.getElementById("takeTheShit");
                imgPlacet.appendChild(imge);
                imge.setAttribute("id", "lesShit");
                imge.src = "/img/giphy.gif";
                let shitbtn = document.createElement("button");
                let shitMaster = document.getElementById("theShitMaster");
                shitbtn.innerHTML = "Torka skit";
                shitbtn.type = "submit";
                shitMaster.appendChild(shitbtn);
                shitbtn.setAttribute("id", "myShitBtn");
                shitbtn.onclick = function() {
                    document.getElementById("lesShit").style.display = "none";
                };
            }
            if (this.tamagotchiHunger < -1) this.tamagotchiHunger = -1;
            document.getElementById("hunger").innerHTML = "Hunger: " + myNewTamagotchi.tamagotchiHunger;
            return this.tamagotchiHunger++;
        }
        //HUNGER Matar tamagotchin på knappen
        feedTheHunger() {
            return this.tamagotchiHunger--;
        }
        // HAPPINESS,  MINUS MINUS
        sadHappiness() {
            if (this.tamagotchiHappiness == -1) {
                location.reload();
                alert("Din tamagotchi dog at tristess, lek lite med honom nästa gång vettja!! :)");
            }
            if (this.tamagotchiHappiness > 11) this.tamagotchiHappiness = 10;
            document.getElementById("happiness").innerHTML = " Happiness: " + myNewTamagotchi.tamagotchiHappiness;
            return this.tamagotchiHappiness--;
        }
        //HAPPINESS Leker med tama på knappen
        playTheHappiness() {
            return this.tamagotchiHappiness++;
        }
        //Tilldelar namn till den skapade Tamagotchin
        yourNameIs() {
            return document.getElementById("hitNamn").innerHTML = "Namn: " + yourName.value;
        }
    }
    //Här skapar vi den nya tamagotchin, 
    const myNewTamagotchi = new Newtamagotchi(nameChoice, pictureChoice);
    myNewTamagotchi.yourNameIs();
    //Knappar för omstart, Mata och Leka med Tamagotchin
    let matamataBtn = document.getElementById("matamata");
    let lekalekaBtn = document.getElementById("lekaleka");
    let restartaBtn = document.getElementById("restarta");
    restartaBtn.addEventListener("click", function() {
        location.reload();
    });
    matamataBtn.addEventListener("click", function() {
        myNewTamagotchi.feedTheHunger();
    });
    lekalekaBtn.addEventListener("click", function() {
        myNewTamagotchi.playTheHappiness();
    });
});

//# sourceMappingURL=index.bc9084ba.js.map
