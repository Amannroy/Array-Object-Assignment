/*
Assignment: Building a Student Management System
Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and displaying student
information.

Requirements:
Here is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade.

const students = [

    {id: 1, firstName: "John", lastName: "Doe", age: 20, grade:
    
    "A"},
    
    {id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade
    
    "B"}.
    
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grad
    
    "A"},
    
    // Add more students as needed
    
    ];


Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
*/

const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
    // Add more students as needed
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

// d. List All Students
function listAllStudents() {
    console.log('List of all students:');
    students.forEach(student => console.log(student));
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    const studentsWithGrade = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`);
    studentsWithGrade.forEach(student => console.log(student));
    return studentsWithGrade;
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}

// Example usage:
addStudent(4, "Alice", "Brown", 21, "C");
updateStudent(1, { age: 21, grade: "A+" });
deleteStudent(2);
listAllStudents();
findStudentsByGrade("A");
console.log('Average age of students:', calculateAverageAge());
