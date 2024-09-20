//named function
function add(digit1:number,digit2:number):number {
    return digit1+digit2
}
console.log(add(3,4));
add(4,6);
function  hi () {
    console.log("hello");
    
}
hi();
hi();
//anonymouse function main function ka nm nhi hota ossy varibale mystore krwaty hy
let my=function (x:number,y:number):number {
    return x+y
}
console.log(my(5,5));


// anonymouse with explicit type aysy hota or nam sam rkhny ki need nhi
//is varibale ko hum ye function assgine k rhy hy
let my2:(a:number,b:number)=>number =function (x:number,y:number):number {
                                               return x+y
                                                  }
                                                 
 console.log(my2(6,6));

 //lambda function arrow function sam hoty hy arrow function ka short syntx
 let my3=(add1:number,add2:number)=>add1-add2
 // call back topic ak function k andr dosra function pass krny ko khty hy call back hota
function nam(fa:()=>void) {
    console.log("i love my father");
    nme();
}
function nme():void {
    console.log("i love my mother");
    
}
nam(nme);
//name function with optional perameter ? lagnay sy optional perametr hota chao to do nhi to nhi do
function building (firstName:string,lastName?:string):string {
   if (lastName)
    return firstName+" "+lastName
else
return firstName;
}

console.log(building("omer"));
let result=building("anaya");
console.log(result);
let result2=building("wamiq","khan");
console.log(result2);

//anonymouse function with optional permeter with expilcit type
//= ki dono side sam honi chy
let one:(book:string,pencil?:string) =>string  =
function (book:string,pencil?:string):string {
    if(book)
        return "best book"
    else
    return "not book"
}
console.log(one("story"));
console.log(one(""));
//name function with optional  and defulte perameter
function home(father:string,mother="shamim"):string {
    if(father)
        return "best father in the world"
    else " i love my mother"
}
console.log(home("father"));
console.log(home("mother"));




