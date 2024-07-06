function toggleMenu(){
    const toggleMenu =document.querySelector(".toggleMenu");
    const Navigation =document.querySelector(".Navigation");
    toggleMenu.classList.toggle("active");
    Navigation.classList.toggle("active");
}

const wrapper =document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
   
});


btnPopup.addEventListener('click', ()=>{
    const toggleMenu =document.querySelector(".toggleMenu");
    const Navigation =document.querySelector(".Navigation");
   const screenWidth = window.innerWidth;
   if(screenWidth <= 900 ){
    toggleMenu.classList.toggle("active");
  Navigation.classList.toggle("active");
   }
});

let btn =document.getElementById('btn')
    window.addEventListener('scroll', ()=>{
        if(scrollY >= 400){
            btn.style.display ='block';
        }
        else{
            btn.style.display ='none'
        }
    });

    btn.addEventListener('click',()=>{
        scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });
    });

