const box = document.querySelectorAll('.box')

addEventListener('click',e =>{
    if (e.target.classList.contains('box') 
    ) {
        e.target.classList.toggle('on');
    }
})