const thumb_nail = document.querySelectorAll('.image_lum')
const image_item = document.querySelectorAll('.item')
const minus = document.querySelector('.menusi')
const plusi = document.querySelector('.plusi')
let figure = document.querySelector('.fig')
let k_circle = document.querySelector('.p_circle')
const ratey = document.querySelector('.rate')
const cart = document.querySelector('.carter') 
const but = document.querySelector('.but2')
const card = document.querySelector('.cart_card')
const checkout = document.querySelector('button')
const total = document.querySelector('.total_price')
const amount = document.querySelector('.real_price')
const main = document.querySelector('.main')
const image_container = document.querySelectorAll('.products')
const light_item = document.querySelectorAll('.itema')
const light_image = document.querySelectorAll('.image_luma')
const dark_item = document.querySelector('.lightbox_container')
const close = document.querySelector('.close')
const harmburger = document.querySelector('.fa-bars')
const mobnav = document.querySelector('ul')
const klose = document.querySelector('.klose')
// const next = document.querySelector('.next')
// const previous = document.querySelector('.previous')
let count = 0;
figure.innerHTML= 0

dark_item.addEventListener('click', ()=>{
    if (dark_item.style.display=='block') {
        dark_item.style.display = 'none'
    }
})

//using loop to access each of the button click event
thumb_nail.forEach((btn, i)=>{
    btn.addEventListener('click', () => {
//for each of the button click event loop through the content to remove any class active
        image_item.forEach(cont=>{
            cont.classList.remove('active');
        })
//for each of the button click event loop through the button to remove any class active
        thumb_nail.forEach((btn)=>{
            btn.classList.remove('active');
        })
//After removal you can then add active class to each content using the index
//of the node list to access them.
        image_item[i].classList.add('active');
        // console.log(content[i]);
//After removal you can then add active class to each button using the index
//of the node list to access them.
        thumb_nail[i].classList.add('active');
        // console.log(button[i]);

})
})

image_item.forEach((stn)=>{
    stn.addEventListener('click', ()=>{
        dark_item.style.display = 'block';
        if (dark_item.style.display=='block') {
                document.querySelector('body').style.overflowY = 'hidden';
                // console.log('i wont scroll');
            }
})
})

close.addEventListener('click', ()=>{
    // console.log('click');
    dark_item.style.display = 'none';
});

minus.addEventListener('click', ()=>{
    
    if(figure.innerHTML >= 1){
        count -= 1;
        figure.innerHTML = `${count}`;
    
    } 
    
});

plusi.addEventListener('click', ()=>{
    count += 1;
    figure.innerHTML = `${count}`;
});

but.addEventListener('click',()=>{
    k_circle.innerHTML = `${count}`;
    k_circle.classList.add('active');
});

cart.addEventListener('click', ()=>{
    card.style.display = 'flex';
    total.innerHTML = ` ${count}`;
    // let T_t = count * 125
    amount.innerHTML = `&nbsp;$${125 * count}`
});

checkout.addEventListener('click', ()=>{
    card.style.display = 'none';
});

var slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("itema");
    var dots = document.getElementsByClassName("image_luma");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    //This is used to remove the active class from the large image
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // This is used to remove the active class from the thumbnail
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Since our n starts from 1 upward we meed to substratct one from index for 
    // us to access the exact element in the array
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }
  harmburger.addEventListener('click', ()=>{
    mobnav.style.display = "flex";
    // if (mobnav.style.display == "block"){
    //     close.addEventListener("click", ()=>{
    //         mobnav.style.display = "none";
    //         console.log('close clicked');
    //     })
  })
  klose.addEventListener("click", ()=>{
    mobnav.style.display = "none";  
  })
