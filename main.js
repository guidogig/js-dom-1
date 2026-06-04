let accesa = false;
const lightbulb = document.getElementById("lightbulb");
const switchBtn = document.getElementById("switchBtn");
const bg = document.getElementById("container");

const changeStatus = () => {
    if (accesa == false) {
        bg.classList.add("light");
        bg.classList.remove("dark");
        lightbulb.src = "img/yellow_lamp.png";
        switchBtn.innerText = "Spegni";
        accesa = true;
        console.log("Ho acceso la lampadina");
    } else {
        bg.classList.add("dark");
        bg.classList.remove("light");
        lightbulb.src = "img/white_lamp.png";
        switchBtn.innerText = "Accendi";
        accesa = false;
        console.log("Ho spento la lampadina");
    }
};

switchBtn.addEventListener("click", changeStatus);
