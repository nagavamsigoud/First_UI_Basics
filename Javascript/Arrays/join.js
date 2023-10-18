//join()
a=[10,20,30,40,50]
console.log(a.join(''))
console.log(a.join('-'))
console.log(a.join(' and '))

//update
a=[10,20,30,40,50]
a[0]=100
console.log(a)

//delete
delete a[0]
console.log(a)
console.log(a.length)

//itterations
//create array using for loop ,whiel loop and do while loop a

var a=[10,20,30,40,50]
for(var i=0;i<a.length;i++)
{
    console.log(a[i])
}

var i=0
while(i<a.length){
    console.log(a[i])
    i++
}

var i=0
do{
    console.log(a[i])
    i++
}while(i<a.length)