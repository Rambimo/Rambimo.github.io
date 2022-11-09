const toTop = document.querySelector(".to-top");

toTop.addEventListener('click', () => {
    window.scroll({
        top: 0
    });
})

window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
})

$(document).ready(function(){
    $('.card').click(function() {
       $('html').css('overflow', 'hidden'); 
       $('.modal-box').css('display', 'flex'); 
    });

    $('.close-modal').click(function() {
        $('html').css('overflow-y', 'scroll'); 
        $('.modal-box').css('display', 'none'); 
    });
});