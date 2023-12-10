// boolean 1

// let A = prompt("Son kiriting: "); 


// if (A % 2 === 0) {
//   console.log( A + " juft son");
// } else {
//   console.log( A + " juft son emas");
// }



// boolean 2

// let A = prompt("Son kiriting: ") 
// let B = prompt("Son kiriting: ") 

// if (A >= 0 || B < -2) {
//   console.log("true.");
// } else {
//   console.log("false.");
// }




// boolean 3

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");
// let C = prompt(" C Sonini kiriting: ");
 

// if (B > A && B < C) {
//   console.log( A + " va " + C +  " raqamlar orasida " + B + " joylashgan" );
// } else {
//   console.log( A + " va " + C +  " raqamlar orasida " + B + " joylashmagan" );

// }





// boolean 4

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");

// if (A % 2 === 0 && B % 2 === 0) {
//   console.log( A + " va " + B + "  juft sonlar");
// } else {
//   console.log( A + " va " + B + "  juft sonlar emas");

// }





// boolean 5

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");


// if (A % 2 !== 0 || B % 2 !== 0) {
//   console.log("Raqamlarning kamida bittasi " + A + " yoki " + B + " toq.");
// } else {
//   console.log(" Raqamlarning hech biri " + A + " yoki " + B + " toq emas.");
// }





// boolean 6

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");


// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0))
//  {
//   console.log(" Raqamlardan faqat bittasi " + A + " yoki " + B + " toq.");
// }
//  else 
//  {
//   console.log(" Ikkala raqam ham " + A + " va " + B + " toq yoki ikkalasi ham juft.");
// }


// boolean 7

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");
// let C = prompt(" C Sonini kiriting: ");


// if (A > 0 && B > 0 && C > 0) 
// {
//   console.log( A +" "+ B +" "+ C + " sonlarning har biri musbat.");
// } 
// else
//  {
//   console.log( A +" "+ B +" "+ C + " sonlarning kamida bittasi manfiy yoki 0 ga teng.");
// }


// boolean 8

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");
// let C = prompt(" C Sonini kiriting: ");


// if ((A > 0 && B <= 0 && C <= 0) || (A <= 0 && B > 0 && C <= 0) || (A <= 0 && B <= 0 && C > 0)) 
// {
//   console.log("Birortasi musbat son");
// }
//  else
//   {
//   console.log("Hech qaysi biri musbat son emas");
// }


// boolean 9

// let A = prompt(" A Sonini kiriting: ");
// let B = prompt(" B Sonini kiriting: ");
// let C = prompt(" C Sonini kiriting: ");


// if 
// ((A > 0 && B > 0 && C <= 0) || (A > 0 && B <= 0 && C > 0) || (A <= 0 && B > 0 && C > 0)) 
// {
//   console.log("Faqat ikkitasi musbat son.");
// } else {
//   console.log("ikki yoki undan ko'pi manfiy son.");
// }


// boolean 10

// let B = prompt(" Son kiriting: ");


// if (B > 9 && B < 100 && B % 2 === 0)
//  {
//   console.log(B + " " + " ikki xonali juft son.");
// } 
// else 
// {
//   console.log( B + " " + " ikki xonali juft son emas.");
// }



// boolean 11


// let B = prompt(" uch xonali son kiriting: ");


// if (B > 99 && B < 1000 && B % 2 !== 0)
//  {
//   console.log( B +" " + " uch xonali toq son.");
// }
//  else
//  {
//   console.log( B + " " + " uch xonali  toq son emas.");
// }



// boolean 12

// let A = prompt("  Son kiriting: ");
// let B = prompt("  Son kiriting: ");
// let C = prompt("  Son kiriting: ");

// if (( A % 2 === 0 && B % 2 !== 0 && C % 2 !== 0) ||
//     ( A % 2 !== 0 && B % 2 === 0 && C % 2 !== 0) ||
//     ( A % 2 !== 0 && B % 2 !== 0 && C % 2 === 0))
//      {
//   console.log("   hech bo'lmaganda biri jufti o'zaro qarama-qarshi.");
// }
//  else 
//  {
//   console.log("Hech qaysi son qarama qarshi emas");
// }





// boolean 13


// let uchxonaliSon = prompt("  uch xonali son kiriting: ");

// let A = uchxonaliSon.toString();
// let B = true;

// for (let i = 0; i < A.length - 1; i++) {
//   if (Math.abs(parseInt(A[i]) - parseInt(A[i + 1])) !== 1) {
//     B = false;
//     break;
//   }
// }

// if (B) {
//   console.log("Ushbu sonning raqamlari ketama-ket o'suvchi bo'lib joylashgan.");
// } else {
//   console.log("Ushbu sonning raqamlari ketama-ket o'suvchi bo'lib joylashmagan.");

// }


// boolean 14


// let uchxonaliSon = prompt("  uch xonali son kiriting: ");


// let A = uchxonaliSon.toString(); 
// let ketmaKet = true;
// let kamayuvchiKatmaKet = true;

// for (let i = 0; i < A.length - 1; i++) {
//   if (Math.abs(parseInt(A[i]) - parseInt(A[i + 1])) !== 1) {
//     ketmaKet = false;
//   }
//   if (Math.abs(parseInt(A[i]) - parseInt(A[i + 1])) !== -1) {
//     kamayuvchiKatmaKet = false;
//   }
// }

// if (ketmaKet) {
//   console.log("Ushbu sonning raqamlari ketama-ket o'suvchi bo'lib joylashgan.");
// } else if (kamayuvchiKatmaKet) {
//   console.log("Ushbu sonning raqamlari kamayuvchi ketma-ketlikka ega.");
// } else {
//   console.log("Ushbu sonning raqamlari ne ketama-ket o'suvchi, ne kamayuvchi ketma-ketlikka ega.");
// }



// shaxmat  1

// let x1 = prompt("son kiriting");
// let y1 = prompt("son kiriting");
// let x2 = prompt("son kiriting");
// let y2 = prompt("son kiriting");


// let birXilRang = (x1 + y1) % 2 === (x2 + y2) % 2;

// if (birXilRang) {
//   console.log("Berilgan maydonlar bir xil rangda.");
// } else {
//   console.log("Berilgan maydonlar bir xil rangda emas.");
// }



// shaxmat 3


// let x1 = prompt("son kiriting");
// let y1 = prompt("son kiriting");
// let x2 = prompt("son kiriting");
// let y2 = prompt("son kiriting");

// let shoxYurushi = Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;

// if (shoxYurushi) {
//   console.log("Shoh bir yurishda bir maydondan ikkinchisiga o'ta oladi.");
// } else {
//   console.log("Shoh bir yurishda bir maydondan ikkinchisiga o'ta olmaydi.");
// }



