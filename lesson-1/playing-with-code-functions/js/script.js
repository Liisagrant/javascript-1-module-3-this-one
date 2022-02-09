// // // Function expression
// // const showPetName = function (name) {
// //     console.log("the pet name is : " + name);
// // }
// //
// // // Fat Arrow functions, function expression
// //
// // const showPetNameTwo = (name, age) => console.log("example 2: the pet name is : " + name + " the age is " + age);
// //
// // showPetName("rhino");
// // showPetNameTwo("Lion", "14");
// //
// // // concatenation
// //
// // const name = "Hesham";
// // const age = "30";
// // console.log("my name is" + " " + name + " My age is" + " " + age);
// // console.log(`my name is  ${name}  my age is ${age}`)
// // // my name is hesham my age is 30
// //
// // console.log("my age ", name);
// //
// //
// // function showMeTheCityName() { // 1st time
// //     const cityName = "Oslo"; // function scope local scope
// //     console.log("The city name is: " + cityName);
// // }
// //
// // showMeTheCityName();
// //
// // console.log(cityName); // 2nd time
// //
// //
// // function isScania() {
// //     if (cityName === "Oslo") { // 3rd time
// //         console.log(cityName + " is scandinavian"); // forth time
// //     } else {
// //         console.log("not scandinavian");
// //     }
// // }
// //
// // isScania(cityName); // 5th time
// //
// //
// // {
// //     const name = "Lisa";
// //     const car = "tesla";
// //     let someBuildingNumber = 21;
// //     var someAge = 18;
// //     console.log(name);
// //     console.log(car);
// // }
// //
// // console.log(car);
// // console.log(someAge);
// // console.log(someBuildingNumber);
// //
// //
// //
//
// //
// // console.log(this);
//
//
// const myObject = {
//     number: 10,
//     name: "hesham",
//     myFunction: function() {
//         console.log(this.number);
//         console.log(this.name);
//     }
// }
//
// myObject.myFunction();




const pet = "rhino";
//
// let isDangerous; // Boolean
//
// if(pet === "rhino") {
//     isDangerous = true;
// } else {
//     isDangerous = false;
// }


// const isDangerous = pet === "rhino" ? true : false;


// Sudi way
isDangerous = pet === "rhino";

isDangerous = pet === "hesham" && pet === "rhino";



