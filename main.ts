

// Enum  ( enumeration )
// Am Emum is a special class that represents a  group of contant ( unchangible )

// 1) Numaric Enum
// 2) String Enum
// 3) Hetrogenouus Enum ( Both String and Numaric )


// syntax

// enumRoll(value)

// Example 1: Enum office 

 enum office { 
     admin,
     staff,
     sceurity,
      maintainace,
     employees
}
console.log(office);



// Example 2: Enum office

enum students {
    Ali, sajid, sheraz, amir, najeeb, naveed
}

const student : students = students ["amir"]
console.log(student);                              //    3


//======================================================================================================================


enum students1 {
    Ali=10, sajid, sheraz=12, amir=13, najeeb="apple", naveed=15
}

const student1 : students1 = students1.amir
console.log(student1);                             // 13


// Enum with function


function myfun(p:string){
    return p;
}

console.log(myfun(students1.najeeb));    // apple

//===================================================================================================================


// other Example Days of week

enum Daysofweek{
    Mon=1,
    Tues,
    wed,
    Thur,
    fri,
    sat,
    sun
}
console.log(Daysofweek.sat);       // 6
console.log(Daysofweek[2]);    // tues



//=========================================================================================================================


// Extra Example of Traffic lights

enum traffickights {
    red = "stop",
    yellow ="ready", 
    green = "run"
}
console.log(traffickights);             // { red: 'stop', yellow: 'ready', green: 'run' }
console.log(traffickights.green);       //  run
console.log(traffickights["red"]);      //  stop

