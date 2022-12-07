// nav
document.querySelector('.nav').addEventListener('click', (event)=>{
  const text=event.target.innerHTML;
  const anchor = document.querySelector(`[data-section="${text}"]`);

  if(event.target.closest('.nav__btn-menu')){
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('body_active');
    // document.body.style='overflow: hidden;';
  }

  window.scrollTo({
    left: 0,
    top: anchor.offsetTop
  })
})



let prev_scrollpos = scrollY;
window.onscroll = function () {
  let curren_scrollpos = scrollY;
const header=document.querySelector('.header');
const nav=document.querySelector('.nav');


  if (prev_scrollpos > curren_scrollpos && curren_scrollpos > 800) {
   header.classList.add('header_active');
   header.style='transform:translateY(0px);';
    nav.style="padding: 20px 16px;";
  }
  else if (curren_scrollpos > 800) {
    header.style='transform:translateY(-100px);';
   }
  else {
   header.classList.remove('header_active');
  nav.style="padding: ;";
  }

  if (nav.classList.contains('active')) {
    header.style='transform:translateY(0px);';
   }

  prev_scrollpos = curren_scrollpos;
}


const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('data-section');
    const newLink = document.querySelector(`[data-header="${id}"]`);

      if (entry.isIntersecting){
      newLink.classList.add('nav__item_active');
    }else{
      newLink.classList.remove('nav__item_active');
    }

  });
}

const options = {
    rootMargin: '40px 0px -40px 0px',
  threshold: 0.5
}

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('[data-section]');
sections.forEach((section) => {
  observer.observe(section);
});
// --nav


// form

document.querySelector('.contacts__form').addEventListener('click', (event)=>{
  event.preventDefault();
})


 // gallery
 document.querySelector('.modal').addEventListener('click', (event)=>{
  document.querySelector('.modal').classList.toggle('modal__none');
 })

 document.querySelector('.gallery').addEventListener('click', (event)=>{

document.querySelector('.modal').classList.toggle('modal__none');

if(event.target.hasAttribute('src')){

  const img=event.target.getAttribute('src');

  document.querySelector('.modal_content').innerHTML=`<img class="modal__img" src="${img}" alt="furniture"/>`
}

})
 // --gallery


 window.onload = () => {
  const options = {
    root: null,
    rootMargin: '40px 0px -30px 0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target

        
        if(!lazyImg.classList.contains('animaScroll-scale')){
          lazyImg.style='transition: 1s all;';
        }
        
        lazyImg.classList.remove('animaScroll-top');
        lazyImg.classList.remove('animaScroll-scale');
        
        observer.unobserve(lazyImg)
      }
    })
  }, options)

  const arr = document.querySelectorAll('[class*="animaScroll"]')
  arr.forEach(i => {
    observer.observe(i)
  })
}

