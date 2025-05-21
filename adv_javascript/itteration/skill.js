let resume = [
    {
        name: "sreeram",
        age: 17,
        place: "ngl",
        skills: ["node js"],

    },
    {
        name: "achu",
        age: 16,
        place: "ngl",
        skills: ["node js"],

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


//one method

// resume.forEach((data)=>{
//     data.skills=="node js"? console.log(data.name):""
// })

//two method

resume.forEach((data) => {
    if (data.skills.includes("node js")) {
        console.log(data.name);
    }
});






