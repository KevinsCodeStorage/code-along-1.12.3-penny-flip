let numberOfHeads = 0
let percentHeads = 0
let numberOfTails = 0
let percentTails = 0
let initImage = "assets/images/penny-"
// 8 getElementsByClassName or getElementById or querySelector

document.addEventListener('DOMContentLoaded', function () {
    let heads = document.getElementById("heads")
    let tails = document.getElementById("tails")
    let headsPercent = document.getElementById("heads-percent")
    let tailsPercent = document.getElementById("tails-percent")
    let pennyImage = document.getElementById("pennyImage")
    let messageContainer = document.getElementsByClassName("message-container")[0]

    let side
    document.getElementById("flip").addEventListener('click', function(){
        if (Math.round(Math.random()) == 0) {
            numberOfHeads++
            side = "heads"
        } else {
            numberOfTails++
            side = "tails"
        }
        pennyImage.src = `${initImage}${side}.jpg`
        pennyImage.alt = `penny facing ${side}`
        messageContainer.textContent = `You Flipped ${side}!`
        percentHeads = Math.round((numberOfHeads / (numberOfHeads + numberOfTails)) * 100)
        percentTails = Math.round((numberOfTails / (numberOfHeads + numberOfTails)) * 100)

        heads.textContent = numberOfHeads
        tails.textContent = numberOfTails
        headsPercent.textContent = percentHeads + "%"
        tailsPercent.textContent = percentTails + "%"

    })

    document.getElementById("clear").addEventListener("click", function(){
        numberOfHeads = 0
        numberOfTails = 0
        heads.textContent = numberOfHeads
        tails.textContent = numberOfTails
        headsPercent.textContent = "0%"
        tailsPercent.textContent = "0%"
        messageContainer.textContent = "Let's Get Rolling!"
    })
})
