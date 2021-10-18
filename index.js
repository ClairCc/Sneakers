let contador = 0;
const mainImg = document.getElementsByClassName("hero_img")[0];
let mainImg1 = new Image();
mainImg1.src =
  "https://raw.githubusercontent.com/ClairCc/Sneakers/main/src/images/image-product-1.jpg";

let mainImg2 = new Image();
mainImg2.src =
  "https://raw.githubusercontent.com/ClairCc/Sneakers/main/src/images/image-product-2.jpg";

let mainImg3 = new Image();
mainImg3.src =
  "https://raw.githubusercontent.com/ClairCc/Sneakers/main/src/images/image-product-3.jpg";

let mainImg4 = new Image();
mainImg4.src =
  "https://raw.githubusercontent.com/ClairCc/Sneakers/main/src/images/image-product-4.jpg";

const left = document.getElementById("left");
const rigth = document.getElementById("rigth");
const img = document.getElementsByClassName("hero_img")[0];
const arrayImg = [mainImg1, mainImg2, mainImg3, mainImg4];
const subImg = document.getElementsByClassName("subimg");
const subImg2 = document.getElementsByClassName("subimg");

const idk = document.getElementsByClassName("main_subimg");

const contadorRigth = () => {
  if (contador >= 0 && contador < 3) {
    contador += 1;
    img.style.background = `url("${arrayImg[contador].src}") center center`;
    img.style.backgroundSize = "cover";
    subImg[contador].style.opacity = 0.5;
    subImg[contador - 1].style.opacity = 1;
  }
};
const contadorLeft = () => {
  if (contador <= 3 && contador > 0) {
    contador -= 1;
    img.style.background = `url("${arrayImg[contador].src}") center center`;
    img.style.backgroundSize = "cover";
    console.log(contador);
    subImg[contador].style.opacity = 0.5;
    subImg[contador + 1].style.opacity = 1;
  }
};

// const moverConSubImg = () => {

// };

// const holi = [...subImg];

// const active = () => {
//   holi[0].addEventListener("click", moverConSubImg);
//   holi[1].addEventListener("click", moverConSubImg);
//   holi[2].addEventListener("click", moverConSubImg);
//   holi[3].addEventListener("click", moverConSubImg);
// };
// active();
// function active() {
//   subImg[0].addEventListener("click", moverConSubImg);
// }
