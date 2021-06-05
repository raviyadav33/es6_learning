function* gen(){
    yield console.log("pear");
    console.log("bannana");
    console.log("apple");
}
var myGen=gen();
myGen.next();
myGen();