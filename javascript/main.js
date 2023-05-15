const images = [
    {
        "image": 'img/01.webp',
        "title": "Marvel\\'s Spiderman Miles Morale" ,
        "text": 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        "image": 'img/02.webp',
        "title": 'Ratchet & Clank: Rift Apart',
        "text": 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        "image": 'img/03.webp',
        "title": 'Fortnite',
        "text": "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        "image": 'img/04.webp',
        "title": 'Stray',
        "text": 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        "image": 'img/05.webp',
        "title": "Marvel's Avengers",
        "text": "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
]; 


let inizio = 0;

// creo il primo elemento div con immagine e bottoni e lo inserisco all'interno del primo container
let centratore = document.getElementById("centratore")
const new_div1 = document.createElement("div");
centratore.append (new_div1);
new_div1.className += " container";
new_div1.className += " active";
new_div1.innerHTML =
 `<div class="container-img"> <img src="${images[inizio].image}" alt=""> </div>

<div class="text">
 <h3 class="title">${images[inizio].title}</h3>
 <p class="subtitle">${images[inizio].text}</p>
 </div>` ; 

 for (i=0; i<images.length-1;i++) {
    // creo il div
    const new_div = document.createElement("div");
    centratore.append (new_div)
    new_div.className += " container";
    new_div.innerHTML = `<div class="container-img"> <img src="${images[inizio + 1 ].image}" alt=""> </div>

    <div class="text">
     <h3 class="title">${images[inizio + 1].title}</h3>
     <p class="subtitle">${images[inizio + 1].text}</p>
     </div>` ; 
     inizio++
 }

 const container_div = document.querySelectorAll (".container");

 console.log(container_div);


 let container_div_active = 0 ;

 let bottone = document.querySelector(".next")



 bottone.addEventListener("click",
 function(){ 
    if(container_div_active < (container_div.length - 1)) {
        
             
    // rimuovo la classe active
    container_div[container_div_active].classList.remove ("active");
    
    // vado al div successivo

    container_div_active = container_div_active + 1 

    bottone2.classList.remove ("hidden");

    // aggiungo la classe active

    container_div[container_div_active].classList.add ("active");
}  
        // lo nascondo se sono all'ultima immagine
    if (container_div_active === (container_div.length - 1)) {

        container_div[container_div_active].classList.remove ("active");
        // vado al prima div

        container_div_active = (container_div_active - (container_div.length - 1));

        container_div[container_div_active].classList.add ("active");

        
        


    }

}             
 
 )
// Aggiungo l'evento click all'altro bottone

let bottone2 = document.querySelector(".before")

bottone2.addEventListener("click",
function(){ 
   if(container_div_active > 0 ) {

    
   // rimuovo la classe active
   container_div[container_div_active].classList.remove ("active");
   
   // vado al div successivo

   container_div_active = container_div_active - 1  
   
} 
   // aggiungo la classe active

   container_div[container_div_active].classList.add ("active");
       // lo nascondo se sono all'ultima immagine
   if (container_div_active === 0) {
    container_div[container_div_active].classList.remove ("active");
    // vado al prima div

    container_div_active = container_div_active + (container_div.length - 1);

    container_div[container_div_active].classList.add ("active");



   }

}             

)






                    
    
   
    


