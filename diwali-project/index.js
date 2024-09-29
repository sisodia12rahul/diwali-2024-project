let input = document.querySelector("#name");
const btn = document.querySelector('#btn');




    btn.addEventListener('click', ()=>{
        let userName = input.value;
        localStorage.setItem('name', userName);
    })

