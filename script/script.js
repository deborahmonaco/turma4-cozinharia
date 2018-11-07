/* menu */

let item = document.querySelectorAll(".drop");
let sub = document.querySelector(".content");

for (let i = 0; i < item.length; i++){
  item[i].addEventListener('mouseover',
  function(){
    sub.classList.add("mostra")
  })
  item[i].addEventListener('mouseleave',
  function(){
      sub.classList.remove('mostra')
  })
}


/* galeria */


let foto = document.querySelectorAll(".figura");
let texto = document.querySelectorAll(".figdescricao");
let box = document.querySelectorAll(".figcontainer")

for (let i = 0; i < foto.length; i++){
  foto[i].addEventListener('mouseover',
  function(e){
    texto[i].classList.add("active")
    box[i].classList.add("figactive")
  })
  foto[i].addEventListener('mouseleave',
  function(e){
    texto[i].classList.remove("active")
    box[i].classList.remove("figactive")
  })
  
};



/* menu hamburguer */
/*
let icone = document.querySelector(".icon-hamburguer");
let menu = document.querySelector(".hamburguer");


  icone.addEventListener('mouseover',
  function(){
    menu.classList.add("menuhamburguer")

  });
  
  icone.addEventListener('mouseleave',
  function(){
      menu.classList.remove('menuhamburguer')
  });

*/
