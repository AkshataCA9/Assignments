function gradeCalculation(score){

//switch statement
switch (true) {
    case (score<=100 && score >= 90):
         console.log("The student has 'A' grade");
        break;
    case (score<=90 && score >= 80):
            console.log("The student has 'B' grade");
           break;
    case (score<=80 && score >= 70):
            console.log("The student has 'C' grade");
           break;
    case (score<=70 && score >= 60):
            console.log("The student has 'D' grade");
           break;
    case (score<=60 && score >= 50):
            console.log("The student has 'E' grade");
           break;
    default: (score>=50)
            console.log("Student has 'F' grade");
        break;
}}

let score = '83';  //variable declaration and initialization
gradeCalculation(score);