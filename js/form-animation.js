const formInput = document.querySelectorAll('.form-item__form-field');

formInput.forEach(function(item){
   
   const formItem = item.closest('.form-item');
   const fakePlaceholder = formItem.querySelector('.form-item__fake-placeholder');

   item.addEventListener('focus', function(){
      fakePlaceholder.classList.add('active');
      item.classList.add('active')
   })
   
   item.addEventListener('blur',function(){
      if(item.value.length > 0){
         fakePlaceholder.classList.add('active');
         item.classList.add('active')
      }else{
         fakePlaceholder.classList.remove('active');
         item.classList.remove('active')
      }
   })

})

