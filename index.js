const body = document.body
document.getElementById("changeBackground").addEventListener("click", changeColor)

const greetingDisplay = document.getElementById("greeting-display")
document.getElementById("form").addEventListener("input", writeGreeting)
document.getElementById("btn").addEventListener("click", ResetForm)

function writeGreeting() {

    const recipient = document.getElementById("recipient-input").value
    const greeting = document.getElementById("greeting-select").value
    const sender = document.getElementById("sender-input").value
    greetingDisplay.textContent = `To ${recipient}, ${greeting} from, ${sender}!`
    
}

function ResetForm() {
    document.getElementById("form").reset()
    greetingDisplay.textContent= "Greeting will go here"  
}

async function changeColor() {
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=1`)
    let data = await response.json()
    let color = data.colors[0].value
    body.style.setProperty("background-color", color)
}
