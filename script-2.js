let closeBtn = document.getElementById('modal-close');
let modalWr = document.getElementsByClassName('modal-wr')[0];
let sendTo = 'cto@appsidedev.com';

closeBtn.addEventListener('click', ()=>{
    modalWr.style.display = 'none';
})

let hrefStr = window.location.href.toString();
let nameInitial = hrefStr.split('main_form-name=')[1].split('&')[0];
let emailInitial = hrefStr.split('main_form-email=')[1].split('&')[0];

let regex = /%40/gi;
emailInitial = emailInitial.replace(regex, '@');

for (let el of document.getElementsByName('firstname')){
    el.value = nameInitial
}

for (let el of document.getElementsByName('email')){
    el.value = emailInitial;
}

let selector = document.getElementsByClassName('iti-mobile-select');

for (let s of selector){
    s.onchange = ()=>{
        for(let num of document.getElementsByName('phone_number')){
            num.value = `+${s.value}`
        }
    }
}

document.getElementById('sec').addEventListener(
    'click', () => {
        let surname = document.getElementById('LastName_sec').value;
        let name = document.getElementById('FirstName_sec').value;
        let email = document.getElementById('Email_sec').value;
        let num = document.getElementById('PhoneNumber_sec').value;
        return location.href=`mailto:${sendTo}?subject=noSubject&body=name:${name}%0Asurname:${surname}%0Aemail:${email}%0Anum:${num}`
    }
)

document.getElementById('main').addEventListener(
    'click', () => {
        let surname = document.getElementById('LastName_main').value;
        let name = document.getElementById('FirstName_main').value;
        let email = document.getElementById('Email_main').value;
        let num = document.getElementById('phone_main').value;
        return location.href=`mailto:${sendTo}?subject=noSubject&body=name:${name}%0Asurname:${surname}%0Aemail:${email}%0Anum:${num}`
    }
)

document.getElementById('modal').addEventListener(
    'click', () => {
        let surname = document.getElementById('LastName_modal').value;
        let name = document.getElementById('name_modal').value;
        let email = document.getElementById('Email_modal').value;
        let num = document.getElementById('phone_modal').value;
        return location.href=`mailto:${sendTo}?subject=noSubject&body=name:${name}%0Asurname:${surname}%0Aemail:${email}%0Anum:${num}`
    }
)

document.body.addEventListener('mouseleave', ()=>{
    modalWr.style.display = 'block';
})