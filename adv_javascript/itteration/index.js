let resume = [
    {
        name: "sreeram",
        age: 17,
        place: "ngl",
        skills: ["html", "css", "js", "adv-js", "react"],

    },
    {
        name: "achu",
        age: 16,
        place: "ngl",
        skills: ["html", "css", "js", "react", "adv-js"],

    },
    {
        name: "subin",
        age: 27,
        place: "ngl",
        skills: ["html", "css", "js", "react", "adv-js"],

    },
    {
        name: "sooraj",
        age: 25,
        place: "madurai",
        skills: ["html", "css", "js", "react", "adv-js"],

    },
    {
        name: "aanad",
        age: 25,
        place: "coimbathore",
        skills: ["html", "css", "js", "react", "adv-js"],

    }

]


// let result=resume.filter(place=>place.place=="ngl")
// console.log(result)



// two line method

const events = resume.filter((value) => {
    return value.age >= 18
    // return value.place=="ngl"

})

// console.log(events)


events.forEach((data) => {
    console.log(data.name)
});



//one line method

resume.forEach((data) => {
    data.age > 18 ? console.log(data.name) : ""
})







