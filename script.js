let container = document.getElementById("content");

function generateSection(){

let section = document.createElement("div");
section.className = "card";

let number = Math.floor(Math.random()*100000);

section.innerHTML = `
<h3>Generated World ${number}</h3>
<p>This section was created automatically by JavaScript.
The page keeps expanding forever as you scroll.</p>
<button onclick="alert('You discovered world ${number}')">
Explore
</button>
`;

container.appendChild(section);

}

for(let i=0;i<10;i++){
generateSection();
}

window.addEventListener("scroll", () => {

if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){

for(let i=0;i<5;i++){
generateSection();
}

}

});
