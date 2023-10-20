//! Sual 1
// let a = 3;
// let b = 5;
// if (a > b) {
//   console.log("a b-den boyukdur.");
// } else if (a == b) {
//   console.log("beraberdirler.");
// } else console.log("a b-den kicikdir.");

let students = [
  { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

  { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

  { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

  { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

  { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

  { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

  { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

  { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

  { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
];

//! Sual 2
// let telebeler = [];
// for (let i = 0; i < students.length; i++) {
//   if (i % 2 == 0) {
//     telebeler.push(students[i]);
//   }
// }
// console.log(telebeler);

//! Sual 3
// for (let i = 0; i < students.length; i += 2) {
//   console.log(students[i].name);
// }

//! Sual 4 - alinmadi
// let telebeler = [];

// for (let i = 0; students.length; i++) {
//   if (students.age < 20) {
//     telebeler.push(students[i]);
//   }
// }
// console.log(telebeler);

//! Sual 5 - Telebelerin adlari gelir ama grade leri duz gelmir
// let telebeler = [];
// for (let i = 1; i < students.length; i += 2) {
//   if (students.grade < 90) {
//   }
//   console.log(students[i]);
// }

//! Sual  6 - 5ci sualla texmini eynidi. Hell yolunu çox axtardım amma ede bilmedim. for işləyir ama ifdə yazdığım kod consolda gelmir
