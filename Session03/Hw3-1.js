
// 4.1 -> 4.4
// let flock = [5,7,300,90,24,50,75];
// alert(`Hello, my name is Dung and here are my sheep sizes: ${flock}`);
// alert(`Now is the end of month, you have to choose one and only one sheep to shear and thus you want to choose the biggest`);
// let x = flock[0]; let y = -1;
// for (let i = 0; i<flock.length;i++){
//     if (x<flock[i]){
//         x = flock[i];
//         y = i;
//     }
// }
// alert(`The biggest sheep has size ${x} let's shear it`);
// flock.splice(y,1,8);
// alert(`After shearing, hear is my flock: ${flock}`);
// --------------------------------
// 4.5 
// let flock = [5,7,300,90,24,50,75];
// alert(`Hello, my name is Dung and here are my sheep sizes: ${flock}`);
// let a = prompt("How many month do you want to execute:");
// for (let j = 1; j<=a;j++){
//     console.log(`month ${j}:`)
//     for (let i = 0; i< flock.length;i++){
//         flock[i] += 50; }
// console.log(`One month has passed, hear is my flock: ${flock}`);
// let q = flock[0]; let w = -1;
// for (let i = 0; i<flock.length;i++){
//     if (q<flock[i]){
//         q = flock[i];
//         w = i;
//     }
// }
// console.log(`The biggest sheep has size ${q} let's shear it`);
//     flock.splice(w,1,8);
// console.log(`After shearing, hear is my flock: ${flock}`);
// console.log(`----------------------------`);
// }
//--------------------------
// 4.6:
let flock = [5,7,300,90,24,50,75];
console.log(`Hello, my name is Dung and here are my sheep sizes: ${flock}`);
let x = flock[0]; let y = -1;
for (let i = 0; i<flock.length;i++){
    if (x<flock[i]){
        x = flock[i];
        y = i;
    }
}
console.log(`The biggest sheep has size ${x} let's shear it`);
flock.splice(y,1,8);
console.log(`After shearing, hear is my flock: ${flock}`);

for (let j = 1; j<=2;j++){
    console.log(`month ${j}:`)
    for (let i = 0; i< flock.length;i++){
        flock[i] += 50; }
console.log(`One month has passed, hear is my flock: ${flock}`);
let q = flock[0]; let w = -1;
for (let i = 0; i<flock.length;i++){
    if (q<flock[i]){
        q = flock[i];
        w = i;
    }
}
console.log(`The biggest sheep has size ${q} let's shear it`);
    flock.splice(w,1,8);
console.log(`After shearing, hear is my flock: ${flock}`);
console.log(`----------------------------`);
}
console.log(`month 3:`)
for (let i = 0; i< flock.length;i++){
    flock[i] += 50; }
console.log(`One month has passed, hear is my flock: ${flock}`);
let total = 0;
for (let i = 0;i<flock.length;i++){
    total += flock[i];
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total*2}$`);




