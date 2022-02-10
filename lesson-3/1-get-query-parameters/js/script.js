//how to get query param
console.log(document.location);

// how to get query param

console.log(document.location.search); // ?school=noroff

const queryString = document.location.search;
// to get value
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("school"));
const mySchoolValue = params.get("school");

//  I want to check that I have a param called school

if (params.has("school")){
    console.log("all good. the param is here"); // console log I have the param
}

else if (params.get("school") === "noroff") {
    console.log("Okay the param is Noroff")
}

// I want to check that this param is equal to noroff
// okay the param is Noroff
else {
    document.location.href = "second.html";
}

// else redirect to another page






