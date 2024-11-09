// <-------------------------||1-rasm||-------------------------->

// <--------------1-masala-------------------->

// function calc(a, b){
//      return a + b
// }
//  console.log(calc(prompt("birinchi sonni kiriting")-0, prompt("ikinchi sonni kiriting")-0))

// <--------------3-masala-------------------->

// let arr = [-1, -2, 3, -4, 5, -100, -5]
// function sign(list) {
// for (let i = 0; i < list.length; i++){
//     if (list[i] < 0) {
//         list[i] = -list[i]
//     }
// }
// console.log("Musbat qiymatli array:", list)
// }
// sign(arr)

// <--------------5-masala-------------------->

// let arr = [
//     {
//         id:1,
//         name:"Ismoil",
//         status:false
//     },
//     {
//         id:2,
//         name:"Ibrohim",
//         status:true
//     },{
//         id:3,
//         name:"Samir",
//         status:false
//     },
// ]
// function fn(list){
//     for(let user of list){
//         if(user.status == false){
//             console.log(user.name)
//         }
//     }
// }
// fn(arr)

// <--------------6-masala-------------------->

// function findMiddleNumber(a,b,c){
//     let result = 0
//     for(let num of arr){
//         result += num
//     }
//     console.log(result/ arr.length);
// }
// findMiddleNumber([4, 5, 6, 7, 67])

// <--------------7-masala-------------------->

// function fn(arr){
//    arr[0] = arr[0] + 1
//    console.log(arr);
// }
// fn([10,3,4,5,7,6])

// <--------------8-masala-------------------->

// let usersList1 = ["Ismoil", "Abdurahmon", "Ibrohim"]
// let usersList2 = ["Ibrohim", "Abdurahmon", "Behruz"]

// function findSameNames(arr1, arr2){
//     for(let user1 of arr1){

//         for(let user2 of arr2){
//             if(user1 == user2){
//                 console.log(user1);
//             }
//         }
//     }
// }
// findSameNames(usersList1, usersList2)


// <-------------------------||2-rasm||-------------------------->

// <--------------1-masala-------------------->

// let appleData = {
//     id:1,
//     title:"Olma",
//     year:"2024",
//     price:12500,
//     color:"red"
// }
// function changeObjValues(obj){
//     for(let [key, value] of Object.entries(obj)){
//         console.log(`${key} - ${value}`);
//     }
// }
// changeObjValues(appleData)


// <--------------2-masala-------------------->

// let user1 = {id:1}
// let user2 = {title:"Olma"}

// function collectObjs(obj1, obj2){
//     const data = Object.assign(obj1, obj2)
//     console.log(data);
// }
// collectObjs(user1, user2)

// <--------------3-masala-------------------->

// function fn(arr){
//     let lastNumber = arr[arr.length - 1] + 1
//     arr.push(lastNumber)
//     console.log(arr);
// }
// fn([1,2,3,6])

// <--------------4-masala-------------------->

// [2,2,3,4,5, 15] => 15
// function fn(arr){
//     let result = 0
//     for(let num of arr){
//         result += num
//     }
//     if(arr[0] % 2 == 0){
//         arr.unshift(result)
//     }
//     else{
//         arr.push(result) 
//     }
//     console.log(arr);
// }
// fn([2,2,34,5])

// <--------------5-masala-------------------->

// let arr = [55,44,33,33] // [33,44,33,55]

// function changeNumbers(list){
//     let firstNum = list[0]
//     let lastNum = list[list.length - 1]

//     list[list.length - 1] = firstNum
//     arr[0] = lastNum
//     console.log(arr);
// }
// changeNumbers(arr)

// <--------------6 && 7 -masala-------------------->

// let arr = []
// function  collectNumbers(){
//     for(let i = 1; i <= 3 ; i++){
//         let value = prompt(i + " - soz kiriting")
//         arr.push(value)
//     }
// }
// collectNumbers()

// let result = []
// function answersFn(){
//     for(let i = 0 ; i < arr.length;i++){
//         const answer = prompt(arr[i])
//         result.push(`${arr[i]} - ${answer}`)
//     }
// }
// answersFn()
// console.log(result);