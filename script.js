
/* ---------- ENERGY SIMULATION ---------- */

function updateEnergy(){

let m = document.getElementById("mass")
let h = document.getElementById("height")
let v = document.getElementById("velocity")

if(!m || !h || !v) return

m = Number(m.value)
h = Number(h.value)
v = Number(v.value)

let g = 9.8

let PE = m * g * h
let KE = 0.5 * m * v * v

document.getElementById("pe").innerText =
"Potential Energy: " + PE.toFixed(2) + " J"

document.getElementById("ke").innerText =
"Kinetic Energy: " + KE.toFixed(2) + " J"

}


/* slider updates */

document.querySelectorAll("input").forEach(slider=>{
slider.addEventListener("input",updateEnergy)
})

updateEnergy()



/* ---------- ENDLESS SCIENCE CONTENT ---------- */

let endlessContainer = document.getElementById("endless")

function generateScienceCard(){

if(!endlessContainer) return

const topics = [
"Gravity Experiments",
"Energy Transformation",
"Black Hole Physics",
"Orbital Mechanics",
"Thermodynamics",
"Wave Motion",
"Electric Fields",
"Quantum Mysteries"
]

let card = document.createElement("div")
card.className = "card"

let topic = topics[Math.floor(Math.random()*topics.length)]

card.innerHTML = `
<h3>${topic}</h3>
<p>
This section was generated automatically.
Physics is full of surprising systems where energy moves
between potential and kinetic forms.
Keep scrolling to explore more topics.
</p>
`

endlessContainer.appendChild(card)

}

/* generate starting cards */

for(let i=0;i<6;i++){
generateScienceCard()
}

/* infinite scrolling */

window.addEventListener("scroll",()=>{

if(!endlessContainer) return

if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){

for(let i=0;i<3;i++){
generateScienceCard()
}

}

})



/* ---------- BACKROOMS ROOM GENERATOR ---------- */

let roomContainer = document.getElementById("rooms")

function generateRoom(){

if(!roomContainer) return

let number = Math.floor(Math.random()*10000)

let room = document.createElement("div")
room.className = "card"

room.innerHTML = `
<h3>Backrooms Room ${number}</h3>
<p>
Another identical hallway stretches into the distance.
The fluorescent lights buzz overhead.
The carpet smells damp.
Was this hallway here before?
</p>
`

roomContainer.appendChild(room)

}

/* generate some rooms */

for(let i=0;i<5;i++){
generateRoom()
}
