var userName="Nagavamsi"
var password="Nv"
console.log(userName,password)
console.log(userName,password)
console.log(userName,password)
console.log(userName,password)

//function without args
function userDetails(){

    console.log("userDetails function is invoked")
}
userDetails()

//function with args
function userDetails1(uName,pWord){
    console.log("User Name is "+ uName,",Password is " +pWord)
}

userDetails1("Iron man","admin")
userDetails1("Hulk","admin")
userDetails1("Spiderman","admin")
userDetails1("captain Marvel","admin")

//function using return keyword
function userDetails2(uName,pWord)
{
    return "User Name is "+ uName,"Password is",+pWord
}
console.log(userDetails2("Nv","admin"))