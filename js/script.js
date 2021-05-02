var mymenu = document.querySelector('.menu-list ul');
var mybtn = document.querySelector('.menu-mobile');
mybtn.addEventListener('click',function(){
    if(mymenu.style.display == 'none'){
        mymenu.style.display = 'block';
    } else {
        mymenu.style.display = 'none';
    };
});
var myNewp = document.querySelector('.max-kitch-desc'),
    mybox = document.querySelectorAll('.box-content');
window.onscroll = function(){
    if(window.pageYOffset > 500 ){
        myNewp.style.animationPlayState = 'running';
    }
    if(window.pageYOffset > 800 ){
        mybox.forEach(function(item){
            item.style.animationPlayState = 'running';
        })
    }
}
var myslides = document.querySelector('.slider h2');
var mytext = myslides.getAttribute('data-text');
var i = 0;
function writertype() {
    myslides.textContent += mytext[i];
    i = i + 1;
    if(i > mytext.length - 1) {
        clearInterval(mytime);
    }
}
var mytime = setInterval(writertype,200);
