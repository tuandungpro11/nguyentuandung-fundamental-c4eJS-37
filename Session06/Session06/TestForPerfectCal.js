document.getElementById("*").addEventListener('click', function(){
    let int = document.getElementById("*").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("+").addEventListener('click', function(){
    let int = document.getElementById("+").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("-").addEventListener('click', function(){
    let int = document.getElementById("-").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("/").addEventListener('click', function(){
    let int = document.getElementById("/").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("1").addEventListener('click', function(){
    let int = document.getElementById("1").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("2").addEventListener('click', function(){
    let int = document.getElementById("2").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("3").addEventListener('click', function(){
    let int = document.getElementById("3").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("4").addEventListener('click', function(){
    let int = document.getElementById("4").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("5").addEventListener('click', function(){
    let int = document.getElementById("5").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("6").addEventListener('click', function(){
    let int = document.getElementById("6").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("7").addEventListener('click', function(){
    let int = document.getElementById("7").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("8").addEventListener('click', function(){
    let int = document.getElementById("8").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("9").addEventListener('click', function(){
    let int = document.getElementById("9").innerText;
    document.getElementById("cal").value += int;
})
document.getElementById("ac").addEventListener('click', function(){
 
    let int = document.getElementById("ac").innerText;
    document.getElementById("cal").value = null;
})
document.getElementById("del").addEventListener('click', function(){
    let str = document.getElementById("cal").value;
    i = str.length-1; 
    let x = str.slice(0,i)
    document.getElementById("cal").value = x;
})
document.getElementById("=").addEventListener('click', function(){
    function math(x,y,mark){
        if(mark == "+"){
            return x+y;
        }
        if(mark == "-"){
            return x-y;
        }
        if(mark == "*"){
            return x*y;
        }
        if(mark == ":"){
            return x/y;
        }
    }
    let str =  document.getElementById("cal").value;
    console.log(str);
    let x=[""],d=0;
    for (let i=0;i<str.length;i++){
         if (str[i]== "+" | str[i]== "-" | str[i]== "*" | str[i]== ":"){ 
             x.push(str[i]); d++;  
         }
         else {
            if (str[i-1]== "+" | str[i-1]== "-" | str[i-1]== "*" | str[i-1]== ":"){
            x.push(str[i]); d++;
            }
            else{
                x[d] += str[i];
            }
         }
    }
//     let q=0;let w=0,y=[],m=[];
// for (let i = 0;i<=d;i++){
//     if (x[i]== "*"){
//         y.push(Number(x[i-1]));
//         y.push(Number(x[i+1]));
//         q+=2;
//     }}
// for (let i = 0;i<=d;i++){
//         if (x[i]== ":"){
//             m.push(Number(x[i-1]));
//             m.push(Number(x[i+1]));
//             w+=2;
//         }
//     }
//     let p = [];
//     for (let i = 0;i<=d;i++){
//         if ((x[i-1]=="+" & x[i+1]=="-") | (x[i-1]=="+" & x[i+1]=="+") | (x[i-1]=="-" & x[i+1]=="-") | (x[i-1]=="-" & x[i+1]=="+")){
//             p.push(Number(x[i]));
//         }
//         else if ((x[i+1] == "+" & x[i-1] == null) | (x[i+1] == "-" & x[i-1] == null) | (x[i-1] == "+" & x[i+1] == null) | (x[i-1] == "+" & x[i+1] == null)){
//             p.push(Number(x[i]));
//         }
//     }
    let tong =0;
    // fail version

//     for (let i = 0;i<p.length;i++){
//   tong += p[i];
//     }
//     function nhan(x,y){
//         return x*y;
//     }
//     function chia(x,y){
//         return x/y;
//     }
//     for (let i = 0;i<y.length;i++){
//         if ((i % 2) == 0){
//             tong += nhan(y[i],y[i+1]);
//         }
//         else {continue;}
//     }
//     for (let i = 0;i<m.length;i++){
//         if ((i % 2) == 0){
//             tong += (m[i]/m[i+1]);
//         }
//         else {continue;}
//     }
//     console.log(tong);

//     console.log(x);
//   console.log(y);  
//   console.log(m);  
//   console.log(p);  
  for (let i=0;i<x.length;i++){
    if (x[i]== "+" | x[i]== "-" | x[i]== "*" | x[i]== ":"){continue;}
    else {
       x[i] = Number(x[i]);
    }
  }
  console.log(x);
  
    // Pecfect here

    for (let i=1;i<=x.length;i++){
  if ((x[i] == "+" & x[i-2] == null) | (x[i] == "+" & x[i-2] == "+") | (x[i] == "-" & x[i-2] == "+") | (x[i] == "-" & x[i-2] == null) | (x[i] == null & x[i-2] == "+")){
      tong += x[i-1];
  }
 else if (x[i] == "-" & x[i-2] == "-" | (x[i] == "+" & x[i-2] == "-") | (x[i] == null & x[i-2] == "-")){
    tong -= x[i-1];
}


else if ((x[i] == "*" & x[i-2] == null) | (x[i] == "*" & x[i-2] == "+")){ 
    console.log("Running!");
    let tongNhan = 1; let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j; console.log (dem1); 
           break;
       }  
   }
   console.log(dem2);
   for (let k = (i-1); k<dem1; k+=2){ console.log("Running!");
       arNhan.push(x[k]);
   }
   console.log(arNhan);
   for (let k = 0;k<arNhan.length;k++){
      tongNhan = tongNhan*arNhan[k];
   }
   tong += tongNhan
 i += (dem2 -2);  
}  
else if (x[i] == "*" & x[i-2] == "-" ){ 
    console.log("Running!");
    let tongNhan = 1; let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j; console.log (dem1); 
           break;
       }  
   }
   console.log(dem2);
   for (let k = (i-1); k<dem1; k+=2){ console.log("Running!");
       arNhan.push(x[k]);
   }
   console.log(arNhan);
   for (let k = 0;k<arNhan.length;k++){
      tongNhan = tongNhan*arNhan[k];
   }
   tong -= tongNhan
 i += (dem2 -2);  
}  

else if ((x[i] == ":" & x[i-2] == null) | (x[i] == ":" & x[i-2] == "+")){ 
    console.log("Running!");
     let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j; console.log (dem1); 
           break;
       }  
   }
   console.log(dem2);
   for (let k = (i-1); k<dem1; k+=2){ console.log("Running!");
       arNhan.push(x[k]);
   }
   let tongNhan = arNhan[0]; console.log (tongNhan);
   for (let k = 0;k<arNhan.length-1;k++){
      tongNhan = tongNhan/arNhan[k+1]; console.log(tongNhan);
   }
   tong += tongNhan;
 i+= (dem2 -2);  
}   
else if ( x[i] == ":" & x[i-2] == "-"){ 
    console.log("Running!");
     let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j; console.log (dem1); 
           break;
       }  
   }
   console.log(dem2);
   for (let k = (i-1); k<dem1; k+=2){ console.log("Running!");
       arNhan.push(x[k]);
   }
   let tongNhan = arNhan[0]; console.log (tongNhan);
   for (let k = 0;k<arNhan.length-1;k++){
      tongNhan = tongNhan/arNhan[k+1]; console.log(tongNhan);
   }
   tong -= tongNhan;
 i+= (dem2 -2);  
}   

    }   
    document.getElementById("cal").value = tong;
})