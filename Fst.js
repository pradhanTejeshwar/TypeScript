var Stud = [
    {
        "id": "100",
        "name": "Ankita",
        "marks": 90
    },
    {
        "id": "101",
        "name": "Bikram",
        "marks": 98
    },
    {
        "id": "102",
        "name": "Chandra",
        "marks": 92
    },
    {
        "id": "103",
        "name": "Deepak",
        "marks": 94
    },
];
//Insert
Stud.push({
    "id": "100",
    "name": "Ankita",
    "marks": 90
});
//Delete
console.log(Stud.pop());
//Read
Stud.forEach(function (value) {
    console.log(value);
});
//Slice 
console.log(Stud.slice(1, 3));
//
console.log(Stud.splice(1, 1, {
    "id": "101",
    "name": "Bikesh",
    "marks": 96
}));
Stud.forEach(function (value) {
    console.log(value);
});
