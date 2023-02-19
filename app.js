// chapter No 14 to 17 //
// Q1 

var studentName = [``]
studentName = [`Amir, Naveed, Rashid`]
console.log(studentName)

// Q2

var studentName = [``]
studentName = [`Ali, Shoaib, Mohsin`]
console.log(studentName)

// Q3

var anyVariable = ["Assalam o Alikum"]
console.log(anyVariable)

// Q4

var anyRandomNumber = [4,6,8,3]
console.log(anyRandomNumber)

// Q5

var anyBooleanValue = [true]
console.log(anyBooleanValue)

// Q6

var myName = "Amir"
var mixedValues = ["a,b,v,g",3,5,6,true,myName]
console.log(mixedValues)

// Q7

var mobileNetworkInPak = [`jazz, Telenor, Zong, Ufone, Warid`]
console.log(mobileNetworkInPak);

// Q8

// var educationQualification = ["SSC <br> HSC <br>  BCS <br>  BS <br> Bcom <br>  Mcom <br>  MS <br>  MPhil.. <br> PhD"]
// document.write(educationQualification)

// Q9

// var topMovies = [prompt("enter any movie name")]
// console.log(topMovies)
// topMovies.unshift(prompt())
// console.log(topMovies.unshift())

// Q10 

// var myFAvrtCars = ["Audi","mercedes","Honda","corolla"]
// var carIndexNum = myFAvrtCars.indexOf("Audi")
// var carIndexNum2 = myFAvrtCars.indexOf("corolla")
// document.write(`["Audi","mercedes","Honda","corolla"] <br><br>`)
// document.write("Index number of" + myFAvrtCars[0] + " is "+ carIndexNum + "<br>")
// document.write("car at index of " + carIndexNum + " is " + myFAvrtCars[0] + "</br>")
// document.write("Index number of" + myFAvrtCars[3] + " is "+ carIndexNum2 + "<br>")
// document.write("car at index of " + carIndexNum2 + " is " + myFAvrtCars[3] + "</br>")

// Q11

// var students = ["Amir", "Naveed", "Rashid"]
// var studenScore = [250,300,200]

// document.write(`Score of ${students[0]} is ${studenScore[0]}. Percentage is ${studenScore[0]*100/500} % <br>`)
// document.write(`Score of ${students[1]} is ${studenScore[1]}. Percentage is ${studenScore[1]*100/500} % <br>`)
// document.write(`Score of ${students[2]} is ${studenScore[2]}. Percentage is ${studenScore[2]*100/500} %`)

// Q12 

// un-shift //
  
// var colorName = ["red","green"]
// var addColorName = colorName.unshift(prompt("add color"))

// console.log(colorName)
// console.log(addColorName)
 
// shift //

// var addColorName = colorName.shift()

// console.log(colorName)
//  console.log(addColorName)

 // pop //

// var addColorName = colorName.pop()

//  console.log(colorName)
//  console.log(addColorName)

 // splice for adding //

//  var colorName = ["red","green", "blue"]
//  var addColorName = colorName.splice(2,0, "white");

//  console.log(colorName)
//  console.log(addColorName)

// splice for removing //


// var addColorName = colorName.splice(2,2,);

// console.log(colorName)
// console.log(addColorName)

// Q13

// var scoreOfStudent = [320,230,480,120]
// document.write(`Score of student : ${scoreOfStudent} <br>
// <br>`)
// var sortScore = scoreOfStudent.sort()
// document.write(`Score in ascending order : ${sortScore} <br>`)

// Q14

// var fruits = ["mango","Apple","orange","strawberry"]
// document.write(`fruit list : <br> ${fruits} <br>`)
// var sortFruits = fruits.sort()
// document.write(`fruits after sorting : <br> ${sortFruits}`)

// Q15

// var cities = ["karaci","lahore","multan","islamabad","peshawar","quetta"]
// document.write(`cities : <br> ${cities} <br>`)
// var selectedCities = cities.slice(1,4)
// document.write(`seleced cities : <br> ${selectedCities} <br>`)

// Q16

// var sentence = ["this","is","my","cat"]
// document.write(sentence + "<br>")
// var joinSentence = sentence.join(" ")
// document.write(joinSentence)

// Q17  (FIFO METHOD)

// var randomValue = []
// randomValue.unshift(prompt("enter any value"))
// randomValue.unshift(prompt("enter any value"))
// randomValue.unshift(prompt("enter any value"))
// randomValue.unshift(prompt("enter any value"))
// console.log(randomValue);
// randomValue.shift()
// console.log(randomValue);
// randomValue.shift()
// console.log(randomValue);
// randomValue.shift()
// console.log(randomValue);
// randomValue.shift()
// console.log(randomValue);

// Q18 (LIFO METHOD)

// var randomValue = []
// randomValue.push(prompt("enter any value"))
// randomValue.push(prompt("enter any value"))
// randomValue.push(prompt("enter any value"))
// randomValue.push(prompt("enter any value"))
// console.log(randomValue);
// randomValue.pop()
// console.log(randomValue);
// randomValue.pop()
// console.log(randomValue);
// randomValue.pop()
// console.log(randomValue);
// randomValue.pop()
// console.log(randomValue);

// Q19

// var smartphones = ["smasung " ," iphone "," nokia "," motorolla "," haier "," sony "]
// function devices(a){
//     document.write(a)
    
// }

// Q20

// multi-dimensional Array //

// var arr1 = []
// var arr2 = []
// var resultOfArr = [arr1,arr2]

// Q21

var arr1 = [0,1,2,3]
var arr1Join = arr1.join(" ")

var arr2 = [1,0,1,2]
var arr2Join = arr2.join(" ")

var arr3 = [2,1,0,1]
var arr3Join = arr3.join(" ")

var arrayOfMatrix = [arr1Join,arr2Join,arr3Join]
var matrixJoin = arrayOfMatrix.join("<br>")
document.write("<h1>MATRIX</h1>" + matrixJoin);
