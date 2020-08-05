let closeBtn = document.getElementById('modal-close');
let modalWr = document.getElementsByClassName('modal-wr')[0];

closeBtn.addEventListener('click', ()=>{
    modalWr.style.display = 'none';
})

let hrefStr = window.location.href.toString();

let name = hrefStr.split('username=')[1].split('&')[0];

let email = hrefStr.split('email=')[1].split('&')[0];

let regex = /%40/gi;

email = email.replace(regex, '@');

for (let el of document.getElementsByName('firstname')){
    el.value = name
}

for (let el of document.getElementsByName('email')){
    el.value = email;
}

let selector = document.getElementsByClassName('iti-mobile-select');

for (let s of selector){
    s.onchange = ()=>{
        for(let num of document.getElementsByName('phone_number')){
            num.value = `+${s.value}`
        }
    }
}

