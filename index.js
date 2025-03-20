// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`Im ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear","drone","doll"];

// function wrapGifts(gifts) {
//     for (let i = 1; i <gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
        
//     }
//     return gifts;
// }
// wrapGifts(gifts); 
// const giftees =  ["Guadalupe", "Ollie", "Aki"]

// function writeCards(giftees) {
//     for(let i = 0; i < giftees.length; i++) {
//         console.log(`Thank you, ${giftees[i]}, for the wonderful surprise gift!`);
//         debugger;
        
//     }
//     return giftees
// }
// writeCards(giftees)

function writeCards(){
   const writeCards = ["Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"
       ]
        return writeCards
}

function countDown(){
   let countDown = 0
       while(countDown < 11){
        console.log(countDown++);
        
       } 
    }
    

