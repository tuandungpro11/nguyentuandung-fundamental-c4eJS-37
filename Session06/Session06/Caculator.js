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
    let x=0,y=0,mark=null; 
    for (let i=0;i<str.length;i++){
         if (str[i]== "+" | str[i]== "-" | str[i]== "*" | str[i]== ":"){
             x = Number(str.slice(0,i));
            mark = str[i];
             y = Number(str.slice(i+1)); break;
         }
    }
    console.log(x,y,mark);
    
    // document.getElementById("cal").value = math(x,y,mark);
})


