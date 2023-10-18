//indexof() and lastindexOf()
a=[10,20,30,40,10,60,10,80,90,100]
//  0  1  2  3  4  5  6  7  8   9
console.log(a.indexOf(10))//0
console.log(a.lastIndexOf(10))
console.log(a.indexOf(10,3))

//concat
a=[10,20]
b=[30,40]
console.log(a.concat(12))

console.log(a.concat([100,200]))//Alternate method

//isArray()
a=[10,20]
console.log(Array.isArray(a))
b="Nameone"
console.log(Array.isArray(12))

//sort
a=[20,10,40,30,50]
console.log(a.sort())
console.log(a.reverse())
