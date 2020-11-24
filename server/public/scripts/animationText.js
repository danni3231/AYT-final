const socket = io();

const animationText = document.querySelector('.animationText');
const texts = animationText.querySelectorAll('p');
const username = texts[0].querySelector('span');

socket.emit('getUsername');

let loop = 0;
setInterval(() => {

    if(loop <3){
        loop += 1;
    }


    if(loop == 1){
        texts[0].classList.add('hidden');
        texts[1].classList.remove('hidden');

    }else if(loop == 2){
        texts[1].classList.add('hidden');
        texts[2].classList.remove('hidden');
    }

    console.log('se ejecuta');
}, 4000);

socket.on('username',function(data){
    username.innerText=data;
});

texts[2].addEventListener('click',function(){
    window.location.href = 'piano.html';
});



