/*
You are given a Javascript object representing a student's Information. Your task is to use the for in loop to iterate over the properties of the object and perform various operations.


const student {

name: "Alice".

age: 22,

major: "Computer Science

GPA: 3.8,

isEnrolled: true

};

a. Create a function displaystudentinfo that takes the student object as a parameter Inside this function, use a for in loop to iterate over the properties of the student object and print each property and its corresponding value to the console. The output should look something like this:

Property: name, Value: Alice

Property: age, Value: 22

Property: major, Value: Computer Science

Property: GPA, Value: 3.8

Property: IsEnrolled, Value: true

*/


const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displaystudentinfo(student){
    for(const property in student){
        console.log(`Property: ${property}, Value: ${student[property]}`);
    }
}

// Calling the function to display student info
displaystudentinfo(student); // Property: name, Value: Alice
                             //  Property: age, Value: 22
                             //  Property: major, Value: Computer Science
                             //  Property: GPA, Value: 3.8
                             // Property: isEnrolled, Value: true