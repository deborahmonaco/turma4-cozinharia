/* cardapio:hover */

let linha = document.getElementsByTagName("tr");

for (let i = 0; i<=linha.length; i++){
  linha[i].addEventListener('mouseover',
  function(){
    linha[i].classList.add("mudacor")
  })
  linha[i].addEventListener('mouseleave',
  function(){
    linha[i].classList.remove("mudacor")
  })
};