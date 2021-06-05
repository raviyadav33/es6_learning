var num=["Abhi", "shubham","salomi"];
console.log(num);  /*the output is comming in the form of the array*/


console.log(...num)  /*output of the given code is different i.e abhi shubham salomi just simple a name*/



var digit=[3,7,9];

function add(a, b, c){
    return a+b+c;
}
add(...digit);  /*output of the code is 379undefineundefine but if we used spred operator the output of the code is 19*/ 



