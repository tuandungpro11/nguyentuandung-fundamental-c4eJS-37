function get_even_list(a){
    for (let i = 0;i<a.length;i++){
        if (a[i]%2 != 0){
      a.splice(i,1); i--;
        }
    }
    return a;
}
console.log(get_even_list([2,3,4,5,6,7]));
