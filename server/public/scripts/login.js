const form = document.querySelector('.form');
const socket = io();

var name;

if(form){
    form.addEventListener('submit', function(event){
        event.preventDefault();

        name = form.login.value; 
        window.location.href = 'map.html'
        socket.emit('setUsername', name);
    });
}