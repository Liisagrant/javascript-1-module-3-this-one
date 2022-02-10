// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword
/*
async function kitchen(){

    try{
// Let's create a fake problem
        await abc;

    }

    catch(error){
        console.log("abc does not exist", error)
    }

    finally{
        console.log("Runs code anyways")
    }
}

kitchen()  // run the code

//👇 Magical keyword
*/


function getSomething (){
    console.log("hello I am responses from API");

const result = document.querySelector(".result");

    try{
        getSomething();
        result.innerHTML = "Success!";
    }
    catch(error){
        console.log( "does not exist", error);
        result.innerHTML = "Nah it is a problem"
    }

    finally{
        console.log("Runs code anyways")
    }
}

