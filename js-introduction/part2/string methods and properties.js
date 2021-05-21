var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln)

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos)

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
console.log(pos)

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
console.log(pos)

var str = "Please locate where 'locate' occurs!";
var pos = str.search("w");
console.log(pos)

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res)

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res)

var res = str.slice(7);
console.log(res)


