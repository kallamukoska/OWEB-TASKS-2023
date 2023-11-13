const wrapper = document.querySelector(".sliderWrapper");
// GAZELLE SAMBA SUPERSTAR
const menuItems = document.querySelectorAll(".menuItem");

// niza od proizvodite, sliki, boi, golemini
const products = [
    {
      id: 1,
      title: "GAZELLE",
      price: 7490,
      colors: [
        {
          code: "#d5cebb",
          img: "./imgFolder/gazelle1.png",
        },
        {
          code: "pink",
          img: "./imgFolder/gazelle2.png",
        },
      ],
    },
    {
      id: 2,
      title: "SAMBA",
      price: 5750,
      colors: [
        {
          code: "red",
          img: "./imgFolder/samba1.png",
        },
        {
          code: "black",
          img: "./imgFolder/samba2.png",
        },
      ],
    },
    {
      id: 3,
      title: "SUPERSTAR",
      price: 5520,
      colors: [
        {
          code: "green",
          img: "./imgFolder/star1.png",
        },
        {
          code: "orange",
          img: "./imgFolder/star2.png",
        },
      ],
    },
];

// pod sliderot, sakame da go gledame soodvetniot produkt
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


// sakame wrapper-ot da se dvizi za 100vw
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // go menuvame sliderot
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // go menuvame indeksot za koj produkt da se prikaze pod sliderot\
        choosenProduct = products[index];

        // da se menuva tekstot
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + " MKD";
        currentProductImg.src = choosenProduct.colors[0].img;

        // ako ja smeni bojata
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

// eventListener za promena na slikata ako se izberi druga boja
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

function message()
{
    alert("ВИ БЛАГОДАРИМЕ НА ДОВЕРБАТА!");
}

var payButton = document.getElementById("poraka");
payButton.addEventListener("click", message, false);