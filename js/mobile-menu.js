const burger = document.querySelector('.nav-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLink = document.querySelectorAll('.mobile-link-menu')
const overlay = document.querySelector('#overlay');

// open\close mobile menu\overlay
burger.addEventListener('click',function(){

   burger.classList.toggle('active');
   overlay.classList.toggle('active');

   mobileMenu.classList.toggle('active');
   document.body.classList.toggle('active')
})

// close mobile menu when click to link
mobileLink.forEach((item)=>{
   
   item.addEventListener('click',()=>{
      
      burger.classList.toggle('active');
      overlay.classList.toggle('active');
    
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('active');
   })
})

// resize and close mobile menu
window.addEventListener('resize',function(){

   overlay.classList.remove('active');
   burger.classList.remove('active');
   
   mobileMenu.classList.remove('active');
   document.body.classList.remove('active');
})