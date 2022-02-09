// What is a Synchronous System?
// In a synchronous system, tasks are completed one after another.

// Think of this as if you have just one hand to
// accomplish 10 tasks. So, you have to complete one task at a time.
// https://giphy.com/gifs/ICIS16DkE9qB9HVxtq




//
// What is an Asynchronous System?
//     In this system, tasks are completed independently.
//     Here, imagine that for 10 tasks, you have 10 hands. So, each hand can do each task independently and at the same time.
//
//     Take a look at the GIF 👇 – you can see that each image loads at the same time.

// https://giphy.com/gifs/MMDnmJnE7uhX6KtcKc



// Synchronous system, three images are in the same lane. One can't overtake the other. The race is finished one by one. If image number 2 stops, the following image stops.

// Asynchronous system, the three images are in different lanes. They'll finish the race on their own pace. Nobody stops for anybody:


// Synchronous Code Example
//
// console.log(" I ");
// console.log(" eat ");
// console.log(" Ice Cream ");
//

// Let's say it takes two seconds to eat
// some ice cream. Now, let's test out an asynchronous system.
// Write the below code in JavaScript.

// asynchronous example


console.log(" I ");
setTimeout(() => {
    console.log(" eat ");
}, 5000)
console.log(" Ice Cream ");