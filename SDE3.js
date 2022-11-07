//
//
//
//1.
// let practiceFile = ["273.15"];
// practiceFile.push("42");
// practiceFile.push("hello");
// practiceFile.push("false", "-4.6", "87");
// console.log(practiceFile);
//
//
//
//
//
// 2.
// let cargoHold = [
//   "oxygen tanks",
//   "space suits",
//   "parrot",
//   "instruction manual",
//   "meal packs",
//   "slinky",
//   "security blanket",
// ];
// console.log(cargoHold);
// for (let i = 0; i < cargoHold.length; i++) {
//   if (cargoHold[i] == "slinky") {
//     cargoHold[i] = "space tether";
//   }
// }
//console.log(cargoHold);
// cargoHold.pop();
// console.log(cargoHold);
// cargoHold.push("1138");
// cargoHold.push("20 meters");
// console.log(cargoHold);
// console.log(
//   `The Final Array is :
// => ` + cargoHold
// );
//
//
//
//
// 3.
// let cargoHold = [
//   "oxygen tanks",
//   "space suits",
//   "parrot",
//   "instruction manual",
//   "meal packs",
//   "slinky",
//   "security blanket",
// ];
// cargoHold.splice(3, 0, "keys");
// console.log(cargoHold);
// for (let i = 0; i < cargoHold.length; i++) {
//   if (i == 2) {
//     cargoHold.splice(2, 3, "cat", "fob", "string cheese");
//     break;
//   }
// }
// console.log(cargoHold);
//
//
//
//
//
// 4.
//
// let holdCabinet1 = ["duct tape", "gum", 3.14, false, 6.022e23];
// let holdCabinet2 = ["orange drink", "nerf toys", "camera", 42, "parsnip"];
// holdCabinet1 = holdCabinet1.concat(holdCabinet2);
// console.log(holdCabinet1);
// holdCabinet1.splice(1, 2, "hello", "bey");
// console.log(holdCabinet1);
// console.log(holdCabinet1.reverse());
// console.log(holdCabinet1.sort());
//
//
//
//
//
// 5.
// let str = "In space, no one can hear you code.";
// let arr1 = str.split();
// console.log(arr1);
// arr1 = str.split("e");
// console.log(arr1);
// arr1 = str.split(" ");
// console.log(arr1);
// arr1 = str.split("");
// console.log(arr1);
// console.log(arr1.join());
// console.log(arr1.join("a"));
// console.log(arr1.join(" "));
// console.log(arr1.join(""));
// let str2 = "water,space suits,food,plasma sword,batteries";
// console.log(str + str2);
//
//
//
//
//
// 6.
// let element1 = ["hydrogen", "H", 1.008];
// let element2 = ["helium", "He", 4.003];
// let element26 = ["iron", "Fe", 55.85];
// let table = [];
// table.push("element1");
// table.push("element2");
// table.push("element26");
// console.log(table[1]);
// console.log(table[1][1]);
// //table[1] returns the frist element of the array whereas
// //table[1][1] returns the first element's first element
// console.log(`${element1[2]}`);
// console.log(`${element2[0]}`);
// console.log(`${element26[1]}`);
//
//
//
//
//
// 7.
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
people.splice(0, 1);
people.pop();
console.log(people);
people.push("Matt");
//people.push("Ponvel")
console.log(people);
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") {
    break;
  }
}
let copy = people.splice(1, 1);
console.log(copy);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.splice(2, 1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);
let bob = [];
for (let i = 0; i < people.length; i++) {
  bob[i] = people[i] + "bob";
}
console.log(bob);
