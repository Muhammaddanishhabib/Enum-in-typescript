// Enum  ( enumeration )
// Am Emum is a special class that represents a  group of contant ( unchangible )
// 1) Numaric Enum
// 2) String Enum
// 3) Hetrogenouus Enum ( Both String and Numaric )
// syntax
// enumRoll(value)
// Example 1: Enum office 
//  enum office { 
//      admin,
//      staff,
//      sceurity,
//       maintainace,
//      employees
// }
// console.log(office);
// Example 2: Enum office
var students;
(function (students) {
    students[students["Ali"] = 0] = "Ali";
    students[students["sajid"] = 1] = "sajid";
    students[students["sheraz"] = 2] = "sheraz";
    students[students["amir"] = 3] = "amir";
    students[students["najeeb"] = 4] = "najeeb";
    students[students["naveed"] = 5] = "naveed";
})(students || (students = {}));
var student = students["amir"];
console.log(student); //    3
//======================================================================================================================
var students1;
(function (students1) {
    students1[students1["Ali"] = 10] = "Ali";
    students1[students1["sajid"] = 11] = "sajid";
    students1[students1["sheraz"] = 12] = "sheraz";
    students1[students1["amir"] = 13] = "amir";
    students1["najeeb"] = "apple";
    students1[students1["naveed"] = 15] = "naveed";
})(students1 || (students1 = {}));
var student1 = students1.amir;
console.log(student1); // 13
// Enum with function
function myfun(p) {
    return p;
}
console.log(myfun(students1.najeeb)); // apple
// other Example Days of week
var Daysofweek;
(function (Daysofweek) {
    Daysofweek[Daysofweek["Mon"] = 1] = "Mon";
    Daysofweek[Daysofweek["Tues"] = 2] = "Tues";
    Daysofweek[Daysofweek["wed"] = 3] = "wed";
    Daysofweek[Daysofweek["Thur"] = 4] = "Thur";
    Daysofweek[Daysofweek["fri"] = 5] = "fri";
    Daysofweek[Daysofweek["sat"] = 6] = "sat";
    Daysofweek[Daysofweek["sun"] = 7] = "sun";
})(Daysofweek || (Daysofweek = {}));
console.log(Daysofweek.sat); // 6
console.log(Daysofweek[2]); // tues
// Extra Example
// Traffic lights
var traffickights;
(function (traffickights) {
    traffickights["red"] = "stop";
    traffickights["yellow"] = "ready";
    traffickights["green"] = "run";
})(traffickights || (traffickights = {}));
console.log(traffickights);
console.log(traffickights.green);
console.log(traffickights["red"]);
