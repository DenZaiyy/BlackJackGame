// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false




let player = {
    name: "Kevin",
    chips: 240
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21 ) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        playerEl.textContent = player.name + ": $" + (player.chips += 100)
    } else {
        message = "You're out of the game!"
        isAlive = false
        playerEl.textContent = player.name + ": $" + (player.chips -= 50)
    }

    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}





// for(let i = 0; i < 6; i++){
//     console.log(i)
// }

// for(let i = 10; i < 101; i+=10){
//     console.log(i)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ]
// for (let i=0; i < messages.length; i++) {
//     console.log(messages[i])
// }

// let cards = [7,3,9]
// for(i=0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Kevin"]
// let greetingEl = document.getElementById("greeting-el")

// for(let i=0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }


// let age = 100
// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// }else {
//     console.log("Not elegible, you have already gotten one")
// }