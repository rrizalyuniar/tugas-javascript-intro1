// 1. Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data sebagai berikut:
// const biodata = {
//   name: "Rizal",
//   age: 25,
//   hobbies: ["menonton", "membaca", "menulis"],
//   isMerried: false,
//   schoolList: {
//     name: "Universitas Trunojoyo Madura",
//     yearIn:"2016",
//     yearOut:"2022",
//     major:"sarjana",
//   },
//   skills: {
//     skillName: "laravel",
//     level: "beginner",
//   },
//   interestInCoding: true,
// }
// const {name,age,isMerried,interestInCoding} = biodata;
// const [hobi1, hobi2, hobi3] = biodata.hobbies;
// const {skillName,level} = biodata.skills;
// console.log(biodata);

// 2.
// menentukan grade nilai
// function grade(nilai) {
//   if (nilai >= 90 && nilai <= 100) {
//     return "A";
//   } else if (nilai >= 80 && nilai <= 89) {
//     return "B";
//   } else if (nilai >= 70 && nilai <= 79) {
//     return "C";
//   } else if (nilai >= 60 && nilai <= 1) {
//     return "D";
//   } else {
//     return "E";
//   }
// }

// menghitung rata-rata
// const mtk = 80;
// const bahasaIndonesia = 90;
// const bahasaInggris = 89;
// const ipa = 69;
// const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

// const hasilGrade = grade(rataRata);

// try {
//   if (mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null)
//     throw "kosong";
//   if (mtk == true || bahasaIndonesia == true || bahasaInggris == true || ipa == true)
//     throw "kosong";
//   if (mtk == "" || bahasaIndonesia == "" || bahasaInggris == "" || ipa == "")
//     throw "kosong";
//   if (mtk > 100 || mtk < 0 || bahasaIndonesia > 100 || bahasaIndonesia < 0 || bahasaInggris > 100 || bahasaInggris < 0 || ipa > 100 ||ipa < 0
//   ) throw "lebih";
//   console.log(`Rata-rata = ${rataRata}`);
//   console.log(`Grade = ${hasilGrade}`);
// } catch (error) {
//   console.log(`nilai ada yang ${error}`);
// }

// 3.
// printTriangle = (printSegitiga) => {
//     if (printSegitiga == null || printSegitiga == true) {
//       return "data null atau true harus diisi";
//     } else if (isNaN(printSegitiga)) {
//       return "harus angka";
//     }  else {
//       let segitiga = "";
//       for (let i = printSegitiga; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//           segitiga += `${j} `;
//         }
//         segitiga += "\n";
//       }
//       return segitiga;
//     }
//   };
//   try {
//       console.log(printTriangle(5));
//   } catch (error) {
//       console.log(`${error}`);
//   }

// 4. a.Ubahlah data name, email, dan hobi anda menggunakan spread operator
//    b.Ambilah data “street dan city” tersebut menggunakan destructuring
// let data = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
// };

// let dataNew = {...data, name:"Rizal", email:"rizalyuniar123@gmail.com", hobby:["makan","minum","tidur"]}
// let {street,city} = dataNew.address
// console.log(dataNew);
// console.log(city);
