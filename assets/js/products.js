//products data base
let cars = [{
    "id": 1,
  "model": "Chevrolet Malibu 2",
    "price": 32 659,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/uSIKQVa.png"
},
{
    "id": 2,
  "model": "Mazda 6",
    "price": 8999,
    "year": 2021,
    "thumbnail": "https://i.imgur.com/2nf8Gh1.png"
},
{
    "id": 3,
  "model": "Mazda 6",
    "price": 8999,
    "year": 2021,
    "thumbnail": "https://i.imgur.com/2nf8Gh1.png"
},
{
    "id": 3,
  "model": "Nissan gtr r35",
    "price": 178750,
    "year": 2007,
    "thumbnail": "https://i.imgur.com/prvxF0t.png"
},
{
   "id": 4,
  "model": "nexia ravon r3",
    "price": 13400,
    "year": 2022,
    "thumbnail": "https://i.imgur.com/vut2Dsh.png"
},
{
   "id": 5,
  "model": "toyota supra mk4",
    "price": 40200,
    "year": 2013,
    "thumbnail": "https://i.imgur.com/Y9l1D0d.png"
},
{
   "id": 6,
  "model": "cadillac escalade",
    "price": 110000,
    "year": 2021,
    "thumbnail": "https://i.imgur.com/0j0Jj5N.png"
},
{
   "id": 7,
  "model": "land rover defender",
    "price": 51 074,
    "year": 2022,
    "thumbnail": "https://i.imgur.com/uEkXxyW.png"
},
{
   "id": 8,
  "model": "mercedez benz g63",
    "price": 150000,
    "year": 2021,
    "thumbnail": "https://i.imgur.com/ShYfiXV.png"
},
{
   "id": 9,
  "model": "bmw x6",
    "price": 90000,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/KmKrY4R.png"
},
{
   "id": 10,
  "model": "lada vesta",
    "price": 8000,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/jPtcNxo.png"
},
{
   "id": 11,
  "model": "bugatti chiron",
    "price": 3000000,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/vjXRpyX.png"
},
{
   "id": 12,
  "model": "ferarri 488",
    "price": 800000,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/QpIRyzN.png"
},{
   "id": 13,
  "model": "byd song plus",
    "price": 40000,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/ilCq0lI.png"
},
{
   "id": 14,
  "model": "zeekr x",
    "price": 51200,
    "year": 2022,
    "thumbnail": "https://i.imgur.com/J6P31v8.png"
},
{
   "id": 15,
  "model": "audi e tron",
    "price": 81200,
    "year": 2023,
    "thumbnail": "https://i.imgur.com/hU8EgPH.png"
},
    ]
//products data base

let status = 'All'

let div_cards = document.querySelector('.div_cards')

let menuItems = document.querySelectorAll('.menu_item')

const cardsTest = () => {
    Array.from(menuItems).forEach((item) => {
        item.style.color = 'black'
        if (item.textContent === status) {
            item.style.color = 'red'
        }
        item.addEventListener('click', () => {
            status = item.textContent
            cardsTest()
        })
    })

    div_cards.innerHTML = '';

    cars.filter((item) => {
        if (status !== 'All') {
            return item.year === status
        }
        return item
    }).forEach((item) => {
        let card = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('h2')
        let price = document.createElement('p')
        let description = document.createElement('p')
        let category = document.createElement('p')
        let rating = document.createElement('p')
        image.setAttribute('src', item.thumbnail)
        card.classList.add('card')
        image.classList.add('image')
        model.classList.add('card__title')
        price.classList.add('card__price')
        description.classList.add('card__description')
        category.classList.add('card__category')
        rating.classList.add('card__rating')
        model.textContent = item.model
        description.textContent = `Описание: ${item.description}`
        year.textContent = `Год: ${item.year}`
        price.textContent = `Цена: ${item.price}$`

        card.append(image)
        card.append(title)
        card.append(description)
        card.append(category)
        card.append(price)
        card.append(rating)
        div_cards.append(card)
    })
}
cardsTest()

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
