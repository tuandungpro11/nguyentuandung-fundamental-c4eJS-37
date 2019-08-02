let h1 = document.getElementById("first-h1");
h1.innerText= "Demo heading elements"
let h2 = '<h2>Heading level 2 </h2>';
let div = document.getElementById("demo-div");

div.innerHTML += h2;

let anchor = document.getElementById('demo-anchor');
anchor.remove();
let h5=document.getElementById('first-h5');
h5.addEventListener('click',() => {
    console.log("M vua lick dung ko")
})