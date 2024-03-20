// #1
// So'mdan dollarga o'giradigan map method yozib bering. So'm degan array bo'lsin va uni dollarda hisoblab yangi array'ga joylab bersin. Oddiy for of'ga o'giring

const sum = [12340, 123400, 24680, 3702000];

const dollar = sum.map((kupyura) => kupyura / 12340);
console.log(dollar);

const $ = [];
for (const kupyura of sum) {
  const dollar = kupyura / 12340;
  $.push(dollar);
}

console.log($);
// #2
// Dollarda hisoblagan arrayni reduce orqali hammasini qo'shib hisoblab bersin

const sumAdd = dollar.reduce((count, dollar) => count + dollar);
console.log(`Umumiy dollarlar yig'indisi: ${sumAdd} $`);

// -------------------------------------------------------------------------------------------------------

// #3
//Bob avtobus haydovchisi bo'lib ishlaydi. Biroq, u shahar aholisi orasida juda mashhur bo'ldi. Uning avtobusiga chiqishni istagan ko'plab yo'lovchilar bilan u ba'zan avtobusda etarli joy qolmagani muammosiga duch keladi! U barcha yo'lovchilarni sig'dira olishini aytadigan oddiy dastur yozishingizni xohlaydi.

//Siz uchta parametrni qabul qiladigan funktsiyani yozishingiz kerak:

// cap - haydovchini hisobga olmaganda avtobusda bo'lishi mumkin bo'lgan odamlar soni.
// on - haydovchidan tashqari avtobusdagi odamlar soni.
// wait - haydovchidan tashqari avtobusga chiqish uchun kutayotgan odamlar soni.
// Agar etarli joy bo'lsa, 0 ni qaytaring, agar yo'q bo'lsa, u qabul qila olmaydigan yo'lovchilar sonini qaytaring.

let cap = +prompt("Avtobusdagi joylar soni:");
let on = +prompt("Avtobusdagi yo'lovchilar soni:");
let wait = +prompt("Avtobusga chiqmoqchi bo'lgan yo'lovchilar soni:");

function Bus(cap, on, wait) {
  if (cap - on - wait >= 0) {
    return 0;
  }
  else {
    return -1 * (cap - on - wait);
  }
}

console.log(Bus(cap, on, wait));