//write your code here
function Reverse (String){
    let word = ""
 for(let i = String.length-1; 0 <= i; i--){
     word += String[i]  
 } 
 return word
}

console.log(Reverse("hello"))
