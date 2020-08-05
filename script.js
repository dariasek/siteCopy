let submit = document.getElementById('modal-submit');
let modalWr = document.getElementsByClassName('modal-wr')[0]
let closeBtn = document.getElementsByClassName('modal-close')[0];

closeBtn.addEventListener('click', ()=>{
    modalWr.style.display = 'none';
})
