let status = 0;
const lightbulb = document.getElementById('lightbulb');
const switchBtn = document.getElementById('switchBtn');
const bg = document.getElementById('container');


const changeStatus = () => {
    if (status == 0) {
        bg.className = 'light';
        lightbulb.src = 'img/yellow_lamp.png';
        switchBtn.innerText = 'Spegni';
        status = 1;
        console.log('Ho acceso la lampadina');
    } else {
        bg.className = 'dark';
        lightbulb.src = 'img/white_lamp.png';
        switchBtn.innerText = 'Accendi';
        status = 0;
        console.log('Ho spento la lampadina');
    }
};


switchBtn.addEventListener('click', changeStatus); 