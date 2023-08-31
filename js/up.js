const upArrow = document.querySelector('.up');

upArrow.style.opacity = 0;

document.addEventListener('scroll',function(){
   if(window.pageYOffset > 600){
      upArrow.style.opacity = 1;
   }else{
      upArrow.style.opacity = 0;
   }
})