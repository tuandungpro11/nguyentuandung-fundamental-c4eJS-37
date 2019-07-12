let a=prompt("enter your height (cm):");
let b = prompt("enter your weight (kg):");
d = a/100;
let c = b / (d*d);
alert(`Your BMI is ${c} so press ok I will show your health status then.`);
if (c<16) {
    alert(`you are Severely underweight!`)
}
if (c<18 & c>16) {
    alert(`you are Underweight!`);
}
if (c>18.5 & c<25){
    alert(`you are normal!`);
}
if (c>25 & c<30){
    lert(`you are overweight!`);
}
if (c>25){
    lert(`you are obese!`);
}
alert(`Now next to the part 2:`);
let q = prompt("Enter your number: ");
let x=1;
if (q==0){
    alert(`Result is: ${1}`);
}
else{
for (let i=1;i<=q;i++){
    x=x*i;
}
alert(`Result is ${x}`);
}
