// Menyunun acilisi ve baglanisi

let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navo");

navbar.style.right = "-400px";
hamburger.addEventListener("click", function () {
  navbar.style.right = navbar.style.right === "-400px" ? "0" : "-400px";
});



// .features-inner icerisine kartlarin elave edeilmesi
let cards = document.querySelector(".features-inner")

let object = [
  {
    image: '  <img id="imgolcu" src="https://dental.pacific.edu/sites/default/files/styles/two_column_header_image/public/dugonischool/academics/RS33012-dentalsurgery.jpg?itok=6o69iz7e" />',
    title: "Həkim ziyarəti",
    text: `Bir çox insan, sağlamlıq problemləri ilə üzləşmədikdən sonra həkim ziyarətlərini təxirə
    salmağa meyilli olur. Ancaq, düzgün sağlamlıq yoxlamaları sayəsində, tez teşhis və müalicə
    sağlamlıq problemlərindən azad olmağınıza kömək edə bilər.`
  },
  {
    image: '<img style="height : 300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUY-UnoPrATxy6Ngk9aw-M9RqeBagPfbL0qfD4t0NSvt6Cl3N" />',
    title: "Sonradan yaranan problemlər",
    text: `Müəyyən bir yaşa çatdığımızda, müxtəlif sağlamlıq problemləri ilə üzləşmə ehtimalımız artır.
    Bu səbəbdən, yaşımız irəlilədikcə daha çox sağlamlıq yoxlamaları etdirmək və sağlam həyat
    tərzi öyrənmək həyat keyfimizi artıracaq.`
  },
  {
    image: '<img src="https://static1.squarespace.com/static/554cfbc3e4b02833ac3cdf8f/t/555163aee4b04fae16fdcc75/1431397296642/" />',
    title: "Idman",
    text: `Düzenli şəkildə idman edərək, sağlam qidalanaraq və stres idarəetməsi edərək, yalnız fiziki
    sağlamlığınız üçün deyil, həm də zehni sağlamlığınız üçün də vacibdir. Bu səbəbdən, sağlam
    bir həyat tərzi üçün bu məsələlərə diqqət etmək vacibdir.`
  }
]

object.forEach(obj => {

  cards.innerHTML += `<div class="features-group">
  <div class="features-image ">${obj.image}</div>
  <div class="features-text">
  <h1>${obj.title}</h1>
  <p> ${obj.text}</p>
  </div>
  </div>`

});


let soz1 = document.getElementById("soz1");
let soz = "Hər hansısa bir sualınız varsa, bizimlə əlaqə saxlayın və heç bir problem olmadan güvənli bir şəkildə diş sağlamlığınızı qoruyun ...";
let i = 0;


function yazdir() {
  if (i < soz.length) {
    soz1.innerHTML += soz.charAt(i);
    i++;
    setTimeout(yazdir, 35);
  }
}
yazdir();

// let ajax  = new XMLHttpRequest()

// function yoxla(){
//   ajax.open("GET" , "https://api.escuelajs.co/api/v1/products")
//   ajax.send()

//   ajax.onload = function(){
//    let x = JSON.parse(ajax.responseText); 
//    x.forEach(element => {
//     cards.innerHTML += `<img style = "padding : 20px ; height : 200px ; width :200px " img src="${ element.images[0]}"/>` ;
//    });
//   }
// }
// yoxla()