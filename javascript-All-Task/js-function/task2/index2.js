function grade(mark){
    if (mark>90 && mark<=100){
    console .log(`${mark} This is S Grade`)
    $("#body").append(`<tr><td>1</td><td>${mark}</td><td>This Is S Grade</td></tr>`);
    }
    else if (mark>80 && mark<=90){
        console .log(`${mark} This is A Grade`);
        $("#body").append(`<tr><td>2</td><td>${mark}</td><td>This Is A Grade</td></tr>`);

    }
    else if (mark>70 && mark<=80){
        console.log(`${mark} This is B Grade`);
        $("#body").append(`<tr><td>3</td><td>${mark}</td><td>This Is B Grade</td></tr>`);

    }
    else if (mark>60 && mark<=70){
        console .log (`${mark} This is C Grade`);
        $("#body").append(`<tr><td>4</td><td>${mark}</td><td>This Is C Grade</td></tr>`);

    }
    else if (mark>50 && mark<=60){
        console .log (`${mark} This is D Grade`);
        $("#body").append(`<tr><td>5</td><td>${mark}</td><td>This Is D Grade</td></tr>`);

    }
    else if (mark>=40 && mark<=50){
        console.log(`${mark} This is E Grade`);
        $("#body").append(`<tr><td>6</td><td>${mark}</td><td>This Is E Grade</td></tr>`);

    }
    else
     console .log (`${mark} Invalid Marks`);
     $("#body").append(`<tr><td>7</td><td>${mark}</td><td>Invalid Marks</td></tr>`);

    
}

grade(91)
grade(88)
grade(74)
grade(66)
grade(54)
grade(47)
grade(28)


