//const React = document.getElementById("main");
console.log(React);


// Traverse 
//To Move accross or through something. In the case of a tree data structure we mean to move from element to elemnent, 
//that is from parent to child to sibling etc.

// let markup = {
//     type: 'article',
//     children: [
//         {
//             type: 'h2',
//             children: [

//             ]
//         }
//     ]
// }



// Recursion
// function countDown(num) {
//     console.log(num);

//     if(num === 0) return ; 
//     countDown(num -1);
// }
// countDown(5);


// const countElement = document.getElementById("count");

// function setCount() {
//     let count = Number(countElement.textContent);
//     count = count + 1;
//     countElement.textContent = count ; 

// }
// const listElement = document.getElementById('list');
// const newItem = document.createElement('li')
// newItem.textContent = "item 3";


// setTimeout(()=>{
//     listElement.appendChild(newItem);
// }, 1000)






























// const users = [
//     {
//         id: 1,
//         name: "Harsha",
//         isActive: true,
//         age: 24

//     },
//     {
//         id: 2,
//         name: "Varsha",
//         isActive: false,
//         age: 18

//     },

//     {
//         id: 3,
//         name: "Nisha",
//         isActive: true,
//         age: 32

//     },

//     {
//         id: 4,
//         name: "Teesha",
//         isActive: false,
//         age: 34

//     },


// ];


// // Get array of names from given array of Users
// // Get back Only Active Userss

// // Solution
// // const names = [];
// // for (i = 0; i <= users.length; i++) {
// //     if (users[i]?.isActive) {
// //         names.push(users[i]?.name);
// //     }
// // }
// // console.log(names)


// // // Solution
// // users.forEach((user) => {
// //     if (user.isActive) {
// //         names.push(user.name)
// //     }
// // })
// // console.log(names)


// //sort function Optimized Solution -

// const names1 = users.filter(user=>user.isActive).sort((user1,user2) => user1.age < user2.age ? -1: 1).map(user => user.name)
// console.log("names1" +names1)

// // Sort

// users.sort((user1,user2) => user1.age < user2.age ? -1: 1);
// console.log("sort" + users);




// // 1.The map() method return a new array, wheras the forEach() method does not return a new array
// //2. forEach() method similar to the for loop, but it does not retun a new value
// //3. The map() method is similar to the forEach() method, it return a new array.
