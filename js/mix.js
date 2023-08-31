$(document).ready(function(){
   let container = document.querySelector('#mix-cards');
   let mixer = mixitup(container)
})



const mainMixButton = document.querySelectorAll('.mix-block__btn');
const allMixCards = document.querySelectorAll('.project-card');

for(let i = 0; i < mainMixButton.length; i++){

   mainMixButton[i].addEventListener('click',()=>{

      if(i == 0){

         for(let j = 0; j < 2; j++){

            allMixCards[j].classList.add('project-card--big')

         }

      }else{

         for(let j = 0; j < 2; j++){

            allMixCards[j].classList.remove('project-card--big')

         }

      }

   })

}