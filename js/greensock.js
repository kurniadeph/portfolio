window.addEventListener('DOMContentLoaded', () => {
   gsap.registerPlugin(ScrollTrigger);

   let mediaAnimation = gsap.matchMedia();

   // desctop
   mediaAnimation.add("(min-width:1200px)",()=>{
      const tlPreview = gsap.timeline({})
      
      // preview
      tlPreview.to('.wrapper-name-title',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview__description',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview .button',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
      })

      // avatar
      gsap.to('.preview__avatar',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      // bunner
      gsap.to('.preview__banner',{
         y:-300,
         scrollTrigger:{
            trigger:'.preview',  
            start:'top top',
            end:'bottom 70%',
            scrub:1.5, 
            toggleActions:'play reverse play reverse',
               }
      })

      // about-me
      const tlAboutMe = gsap.timeline({
         scrollTrigger:{
            trigger:'.about-me',
            start:'top 80%',
            end:'bottom 20%',
            toggleActions:'play reverse play reverse', 
      }
      })
      .from('.about-me__skills .wrapper-small-title',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .small-title',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .about-me__list-skills',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .links-social',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .button',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .wrapper-link',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')


      // portfolio
      const tlPortfolio = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 70%',
            end:'bottom 40%',
            toggleActions:'play reverse play reverse',
      }
      })

      .from('#portfolio .section-title',{
         xPercent:200,
         duration:1,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      const tlPortfolioCards = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 40%',
            end:'bottom 50%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#portfolio .mix-block',{
         y:1000,
         toggleActions:'play reverse play reverse',
      })

      .from('#portfolio .portfolio__cards',{
         y:1000,
         toggleActions:'play reverse play reverse',
      },'<')
      .to('body',{
         duration:0.5,
         backgroundColor: '#bbe7f8', 
      },'<')

      // how work
      const tlHowWork = gsap.timeline({
         scrollTrigger:{
            trigger:'#hw',
            start:'center bottom',
            end:'bottom 70%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#hw .section-title',{
      xPercent:-200,
      duration:1,
      ease:"back.out(1.1)",
      toggleActions:'play reverse play reverse',
      })
      .from('.timeline__item',{
         yPercent:-1000,
         scrub:true,
         stagger:0.2,
      },'<')

      // contacts
      const tlContacts = gsap.timeline({
         scrollTrigger:{
            trigger:'.contacts',
            start:'top 60%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#contacts .section-title',
      {
         xPercent:-100,
         duration:0.5,
         ease:"back.out(1.1)",
      })
      .from('.contacts__description',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('.contact-form-column',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      },'<')
      .from('.contacts__contacts',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('#contacts .links-social',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
   })
   
   // tablet
   mediaAnimation.add("(min-width:900px) and (max-width:1199px)",()=>{ 
      const tlPreview = gsap.timeline({})
      
      // preview
      tlPreview.to('.wrapper-name-title',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview__description',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview .button',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
      })

      // avatar
      gsap.to('.preview__avatar',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      // bunner
      gsap.to('.preview__banner',{
         y:-200,
         scrollTrigger:{
            trigger:'.preview',  
            start:'top top',
            end:'bottom 70%',
            scrub:1.5, 
            toggleActions:'play reverse play reverse',
               }
      })

      // about-me
      const tlAboutMe = gsap.timeline({
         scrollTrigger:{
            trigger:'.about-me',
            start:'top 70%',
            end:'bottom 20%',
            toggleActions:'play reverse play reverse', 
        
      }
      })
      .from('.about-me__skills .wrapper-small-title',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .small-title',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .about-me__list-skills',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .links-social',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .button',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .wrapper-link',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')


      // portfolio
      const tlPortfolio = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 70%',
            end:'bottom 40%',
            toggleActions:'play reverse play reverse',
      }
      })

      .from('#portfolio .section-title',{
         xPercent:200,
         duration:1,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      const tlPortfolioCards = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 40%',
            end:'bottom 50%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#portfolio .mix-block',{
         y:1000,
         toggleActions:'play reverse play reverse',
      })

      .from('#portfolio .portfolio__cards',{
         y:1000,
         toggleActions:'play reverse play reverse',
      },'<')
      .to('body',{
         duration:0.5,
         backgroundColor: '#bbe7f8', 
      },'<')

      // how work
      const tlHowWork = gsap.timeline({
         scrollTrigger:{
            trigger:'#hw',
            start:'center bottom',
            end:'bottom 70%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#hw .section-title',{
      xPercent:-200,
      duration:1,
      ease:"back.out(1.1)",
      toggleActions:'play reverse play reverse',
      })
      .from('.timeline__item',{
         yPercent:-1000,
         scrub:true,
         stagger:0.2,
      },'<')

      // contacts
      const tlContacts = gsap.timeline({
         scrollTrigger:{
            trigger:'.contacts',
            start:'top 60%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#contacts .section-title',
      {
         xPercent:-100,
         duration:0.5,
         ease:"back.out(1.1)",
      })
      .from('.contacts__description',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('.contact-form-column',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      },'<')
      .from('.contacts__contacts',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('#contacts .links-social',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
   })

   // mobile
   mediaAnimation.add("(min-width:768px) and (max-width:899px)",()=>{
      const tlPreview = gsap.timeline({})
      
      // preview
      tlPreview.to('.wrapper-name-title',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview__description',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      .to('.preview .button',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
      })

      // avatar
      gsap.to('.preview__avatar',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      // bunner
      gsap.to('.preview__banner',{
         y:-200,
         scrollTrigger:{
            trigger:'.preview',  
            start:'top top',
            end:'bottom center',
            scrub:1.5, 
            toggleActions:'play reverse play reverse',
               }
      })

      // about-me
      const tlAboutMe = gsap.timeline({
         scrollTrigger:{
            trigger:'.about-me',
            start:'30% 57%',
            end:'bottom 55%',
            toggleActions:'play reverse play reverse', 
         }
      })
      .from('.about-me__skills .wrapper-small-title',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .small-title',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .about-me__list-skills',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .links-social',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .button',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .wrapper-link',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      
      // portfolio
      const tlPortfolioCards = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 60%',
            end:'bottom 50%',
            toggleActions:'play reverse play reverse',
         }
      })
      .from('#portfolio .mix-block',{
         y:1000,
         toggleActions:'play reverse play reverse',
      })
      .from('#portfolio .section-title',{
         xPercent:200,
         duration:1,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      },'<')
      
      .from('#portfolio .portfolio__cards',{
         y:1000,
         toggleActions:'play reverse play reverse',
      },'<')
      .to('body',{
         duration:0.5,
         backgroundColor: '#bbe7f8', 
      },'<')

      // how work
      const tlHowWork = gsap.timeline({
         scrollTrigger:{
            trigger:'#hw',
            start:'center bottom',
            end:'bottom 70%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#hw .section-title',{
      xPercent:-200,
      duration:1,
      ease:"back.out(1.1)",
      toggleActions:'play reverse play reverse',
      })
      .from('.timeline__item',{
         yPercent:-1000,
         scrub:true,
         stagger:0.2,
      },'<')

      // contacts
      const tlContacts = gsap.timeline({
         scrollTrigger:{
            trigger:'.contacts',
            start:'top 60%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#contacts .section-title',
      {
         xPercent:-100,
         duration:0.5,
         ease:"back.out(1.1)",
      })
      .from('.contacts__description',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('.contact-form-column',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      },'<')
      .from('.contacts__contacts',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('#contacts .links-social',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
   })

   // xs
   mediaAnimation.add("(min-width:320px) and (max-width:767px)",()=>{
      const tlPreview = gsap.timeline({})
      
      // preview
      tlPreview.to('.wrapper-name-title',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         
      })
      // avatar
      .to('.preview__avatar',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })
      .to('.preview__mobile-description',{
         x:0,
         duration:0.5,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      })

      // bunner
      gsap.to('.preview__banner',{
         y:-100,
         opacity:0,
         scrollTrigger:{
            trigger:'.preview',  
            start:'top top',
            end:'80% ',
            scrub:true, 
            toggleActions:'play reverse play reverse',
               }
      })

      // about-me
      const tlAboutMe = gsap.timeline({
         scrollTrigger:{
            trigger:'.about-me',
            start:'top 20%',
            end:'bottom 20%',
            toggleActions:'play reverse play reverse', 
      }
      })
      .from('.about-me__skills .wrapper-small-title',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .small-title',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .about-me__list-skills',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .links-social',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')
      .from('.about-me__skills .button',{
         x:-1000,
         duration:0.4,
         ease:"back.out(1.1)"
      })
      .from('.about-me__contacts .wrapper-link',{
         x:1000,
         duration:0.4,
         ease:"back.out(1.1)"
      },'<')


      // portfolio
      
      const tlPortfolioCards = gsap.timeline({
         scrollTrigger:{
            trigger:'.portfolio',
            start:'top 20%',
            end:'bottom 20%',
            toggleActions:'play reverse play reverse',
         }
      })
      .from('#portfolio .section-title',{
         xPercent:200,
         duration:1,
         ease:"back.out(1.1)",
         toggleActions:'play reverse play reverse',
      },'<')
      .from('#portfolio .mix-block',{
         y:1000,
         toggleActions:'play reverse play reverse',
      },'<')

      .from('#portfolio .portfolio__cards',{
         y:1000,
         toggleActions:'play reverse play reverse',
      },'<')
      .to('body',{
         duration:0.5,
         backgroundColor: '#bbe7f8', 
      },'<')

      // how work
      const tlHowWork = gsap.timeline({
         scrollTrigger:{
            trigger:'#hw',
            start:'top 30%',
            end:'bottom 30%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#hw .section-title',{
      xPercent:-200,
      duration:1,
      ease:"back.out(1.1)",
      toggleActions:'play reverse play reverse',
      },'<')
      .from('.timeline__item',{
         yPercent:-1000,
         scrub:true,
         stagger:0.2,
      },'<')

      // contacts
      const tlContacts = gsap.timeline({
         scrollTrigger:{
            trigger:'.contacts',
            start:'top 60%',
            toggleActions:'play reverse play reverse',
      }
      })
      .from('#contacts .section-title',
      {
         xPercent:-100,
         duration:0.5,
         ease:"back.out(1.1)",
      })
      .from('.contacts__description',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('.contact-form-column',
      {
         xPercent:300,
         duration:0.4   ,
         ease:"back.out(1.1)",
      },'<')
      .from('.contacts__contacts',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
      .from('#contacts .links-social',
      {
         xPercent:-200,
         duration:0.4   ,
         ease:"back.out(1.1)",
      })
   })
   
   })














