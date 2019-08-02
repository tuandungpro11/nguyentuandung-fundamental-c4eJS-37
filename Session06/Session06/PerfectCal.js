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
document.getElementById("0").addEventListener('click', function(){
    let int = document.getElementById("0").innerText;
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
    let tong =0;
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
else if ((x[i] == "*" & x[i-2] == null) | (x[i] == "*" & x[i-2] == "+") |  (x[i] == ":" & x[i-2] == "+") | (x[i] == ":" & x[i-2] == null)){ 
     let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ 
       dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j;  
           break;
       }  
   }
   for (let k = (i-1); k<dem1; k+=1){ 
       arNhan.push(x[k]);
   } 
   console.log(arNhan);
   let tongNhan = arNhan[0]; 
   for (let k = 1;k<arNhan.length-1;k+=2){ 
       if (arNhan[k]=="*"){
      tongNhan = tongNhan*arNhan[k+1]; 
       }
   }
   for (let k = 1;k<arNhan.length-1;k+=2){ 
    if (arNhan[k]==":"){
   tongNhan = tongNhan/arNhan[k+1]; 
    }
}
   tong += tongNhan;
 i+= (dem2 -2);  
}   
else if ((x[i] == "*" & x[i-2] == "-") |  (x[i] == ":" & x[i-2] == "-")){ 
     let arNhan =[]; let dem1 = 0; let dem2 = 0;
   for (let j = i;j<=x.length;j++){ 
       dem2++;
       if (x[j] == "+" | x[j] == "-" | j == x.length){
           dem1 = j; 
           break;
       }  
   }
   for (let k = (i-1); k<dem1; k+=1){
       arNhan.push(x[k]);
   } 
   console.log(arNhan);
   let tongNhan = arNhan[0]; 
   for (let k = 1;k<arNhan.length-1;k+=2){ 
       if (arNhan[k]=="*"){
      tongNhan = tongNhan*arNhan[k+1]; 
       }
   }
   for (let k = 1;k<arNhan.length-1;k+=2){ 
    if (arNhan[k]==":"){
   tongNhan = tongNhan/arNhan[k+1]; 
    }
}
   tong -= tongNhan;
 i+= (dem2 -2);  
}   
}   
document.getElementById("cal").value = tong;
})
