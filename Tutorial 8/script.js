/*object literal improvments*/ 


var country="India";
var state="Delhi";

var ninja={
    country,state,
    chop(x){
        console.log(`you chopped the enemy ${x}times`);
    }
}
    console.log(ninja.chop(4));