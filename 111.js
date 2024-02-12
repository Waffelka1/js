// let allList = ['qwe@mail.ru', 'rewq@mail.ru', 'rrrr1123@mail.ru', 'trewq@mail.ru', '32144512@mail.ru'];
// let blackList = ['qwe@mail.ru', 'rewq@mail.ru'];

// getValidEmails = () => {
//     return allList.filter((mail) => !blackList.includes(mail));
//   }

//   console.log(getValidEmails())




//   function calculate(totalAmount, items, promocode = null) {
//     let finalPrice = totalAmount;

//     if (promocode === "ДАРИМ300") {
//         finalPrice = Math.max(0, finalPrice - 300);
//     }

//     if (items >= 10) {
//         finalPrice *= 0.95;
//     }

//     if (finalPrice > 50_000) {
//         const difference = finalPrice - 50_000;
//         finalPrice = 50_000 + (difference * 0.8);
//     }

//     if (promocode === "СКИДКА15") {
//         if (finalPrice >= 20_000) {
//             finalPrice *= 0.85;
//         }
//     }

//     return finalPrice;
// }

// const amount = 100_000;
// const qty = 70;
// const promocode = "СКИДКА15";

// console.log(calculate(amount, qty, promocode));