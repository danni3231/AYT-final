const keys = document.querySelectorAll('.key');
const music = document.querySelectorAll('.music');

const socket = io();
socket.emit('getWords');

socket.on('words', function (data) {
    data.forEach(element => {
        const index = data.indexOf(element);
        keys[index].querySelector('p').innerText = element;
        music[index].src = `./data/sounds/${element}.wav`;
    });
});

window.addEventListener('keypress', function (e) {
    console.log(e.key);
    switch (e.key) {
        case 'a':
            music[0].pause();
            music[0].currentTime = 0;
            music[0].play();
            break;

        case 's':
            music[1].pause();
            music[1].currentTime = 0;
            music[1].play();
            break;

        case 'd':
            music[2].pause();
            music[2].currentTime = 0;
            music[2].play();
            break;

        case 'f':
            music[3].pause();
            music[3].currentTime = 0;
            music[3].play();
            break;

        case 'j':
            music[4].pause();
            music[4].currentTime = 0;
            music[4].play();
            break;

        case 'k':
            music[5].pause();
            music[5].currentTime = 0;
            music[5].play();
            break;

        case 'l':
            music[6].pause();
            music[6].currentTime = 0;
            music[6].play();
            break;

        default:
            break;
    }

});