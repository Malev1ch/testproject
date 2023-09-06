//products data base
let cars = [{
    "id": 1,
  "model": "Chevrolet Malibu 2",
    "price": 32659,
    "year": 2023,
    "thumbnail": "https://www.chevy-2023.com/wp-content/uploads/2022/03/2024-Chevy-Malibu-Exterior.png"
},
{
    "id": 2,
  "model": "Mazda 6",
    "price": 8999,
    "year": 2021,
    "thumbnail": "https://carnovato.ru/wp-content/uploads/2019/11/blobid1574884591828.jpg"
},
{
    "id": 3,
  "model": "Mazda 6",
    "price": 8999,
    "year": 2021,
    "thumbnail": "https://santavod.ru/wp-content/uploads/2021/08/mazda-6-sedan-2012-015-768x512.jpg"
},
{
    "id": 3,
  "model": "Nissan gtr r35",
    "price": 178750,
    "year": 2007,
    "thumbnail": "https://clicccar.com/uploads/2017/04/NISSAN_GT-R_NISMO_2017_01-20170402195648.jpg"
},
{
   "id": 4,
  "model": "nexia ravon r3",
    "price": 13400,
    "year": 2022,
    "thumbnail": "https://hdpic.club/uploads/posts/2021-12/thumbs/1639340871_13-hdpic-club-p-deu-ravon-14.jpg"
},
{
   "id": 5,
  "model": "toyota supra mk4",
    "price": 40200,
    "year": 2013,
    "thumbnail": "https://i.pinimg.com/736x/57/3e/a5/573ea58e52aafe661ab2df048c65eca0--toyota-supra-car-photos.jpg"
},
{
   "id": 6,
  "model": "cadillac escalade",
    "price": 110000,
    "year": 2021,
    "thumbnail": "https://i.ytimg.com/vi/BOGEebtHPnw/maxresdefault.jpg"
},
{
   "id": 7,
  "model": "land rover defender",
    "price": 51074,
    "year": 2022,
    "thumbnail": "https://kardanremont.ru/wp-content/uploads/2021/02/Z9eBJ0IqlVc-768x480.jpg"
},
{
   "id": 8,
  "model": "mercedez benz g63",
    "price": 150000,
    "year": 2021,
    "thumbnail": "https://img.goodfon.ru/original/800x480/c/71/amg-63-2018-mersedes-benz-gelandewagen-top-car.jpg"
},
{
   "id": 9,
  "model": "bmw x6",
    "price": 90000,
    "year": 2023,
    "thumbnail": "https://i.zcarz.ru/2017/05/d8cee0dcb68a5e3531bbf0f954fd7bf0-1024x768.jpg"
},
{
   "id": 10,
  "model": "lada vesta",
    "price": 8000,
    "year": 2023,
    "thumbnail": "https://topruscar.ru/assets/images/kt/kt2016_lada-vesta_001.jpg"
},
{
   "id": 11,
  "model": "bugatti chiron",
    "price": 3000000,
    "year": 2023,
    "thumbnail": "https://i.ytimg.com/vi/Ril4c99fEiI/maxresdefault.jpg"
},
{
   "id": 12,
  "model": "ferarri 488",
    "price": 800000,
    "year": 2023,
    "thumbnail": "https://i.pinimg.com/736x/97/8f/ee/978feeeaecea54c9fc07a5a2b3464432.jpg"
},{
   "id": 13,
  "model": "byd song plus",
    "price": 40000,
    "year": 2023,
    "thumbnail": "https://www.autoo.com.br/fotos/2023/4/960_720/byd1_13042023_73360_960_720.jpg"
},
{
   "id": 14,
  "model": "zeekr x",
    "price": 51200,
    "year": 2022,
    "thumbnail": "https://ampercar.com/wp-content/uploads/2023/04/756805189094772.jpg"
},
{
   "id": 15,
  "model": "audi e tron",
    "price": 81200,
    "year": 2023,
    "thumbnail": "https://i.trse.ru/2022/07/C3yh-1024x576.jpg"
}];

//products data base

let status = 'All';

let div_cards = document.querySelector('.div_cards');

let menuItems = document.querySelectorAll('.menu_item');

const cardsTest = () => {
  Array.from(menuItems).forEach((item) => {
    item.style.color = 'black';
    if (item.textContent === status) {
      item.style.color = 'red';
    }
    item.addEventListener('click', () => {
      status = item.textContent;
      cardsTest();
    });
  });

  div_cards.innerHTML = '';

  cars.filter((item) => {
    if (status !== 'All') {
      return item.year === parseInt(status); // Преобразуем статус в число перед сравнением
    }
    return item;
  }).forEach((item) => {
    let card = document.createElement('div');
    let image = document.createElement('img');
    let model = document.createElement('h2');
    let price = document.createElement('p');
    let year = document.createElement('p');
    image.setAttribute('src', item.thumbnail);
    card.classList.add('card');
    image.classList.add('image');
    model.classList.add('card__title');
    price.classList.add('card__price');
    year.classList.add('card__category');
    model.textContent = item.model;
    year.textContent = `Год: ${item.year}`;
    price.textContent = `Цена: ${item.price}$`;

    card.append(image);
    card.append(model);
    card.append(year);
    card.append(price);
    div_cards.append(card);
  });
};

cardsTest();
// light and dark theme
let body = document.querySelector('body')
let lightBtn = document.querySelector('.light-theme')
let darkBtn = document.querySelector('.dark-theme')

function lighTheme() {
    body.className = ''
}

function darkTheme() {
    body.classList.add('dark')
}

lightBtn.addEventListener('click', lighTheme)
darkBtn.addEventListener('click', darkTheme)
