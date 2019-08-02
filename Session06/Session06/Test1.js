let div = document.getElementById("listFood");
let input = document.getElementById("int-food")
function food(){
    let foodInput = input.value; 
    console.log(foodInput);
    let int = `<li>${foodInput}</li>`
    div.innerHTML += int;
}


// tab = [], liIndex;
// for (let i=0;i<items.length;i++){
//     tab.push(items[i].innerHTML);
   function disfood(){
     
    let foodInput = input.value; 
   
       if (foodInput == ''){
       
       div.lastElementChild.remove();}
       else {  let foodInput = input.value;      
           for (let i = 0; i<div.children.length;i++){
               
         if (div.children[i].innerHTML.toLowerCase() == foodInput.toLowerCase()){
             div.children[i].remove();i--;
         }
         
           }}}
       
   

// function disfood(){
//  // Get the <ul> element with id="myList"
// let list = document.getElementById("listFood");
// let foodInput = input.value;
// console.dir(list);
// let last = list.childElementCount;
// let t = last 
// // If the <ul> element has any child nodes, remove its first child node
// if (list.hasChildNodes()) {
//   list.removeChild(list.childNodes[last]);
// }
// }