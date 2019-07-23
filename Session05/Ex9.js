window.onload = () => {
even_list = get_even_list([1,2,5,9,-10,6]).toString();
let test = [2,-10,6].toString();
console.log(test);
if (even_list === test){
    console.log("Your function is correct")
}
else {
    console.log("Ooops, bugs detected");
} 
}

