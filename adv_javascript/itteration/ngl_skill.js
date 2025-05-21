let resume = [
    {
        name: "sreeram",
        age: 24,
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
        skills: ["html", "css", "js", "react", "adv-js","node js"],

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

    },
    {
        name: "rabin",
        age: 25,
        place: "ngl",
        skills: ["html", "css", "js", "react", "adv-js"],

    }

]


resume.forEach((value)=>{
    value.skills.forEach((data)=>{
        data==="node js" && value.place==="ngl" && value.age >18 ?console.log(value.name):""
    })
})





