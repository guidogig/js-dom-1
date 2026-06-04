let accesa = false;
const lightbulb = document.getElementById("lightbulb");
const switchBtn = document.getElementById("switchBtn");
const bgCol = document.getElementById("container");

const changeStatus = () => {
    if (accesa == false) {
        bgCol.classList.add("light");
        bgCol.classList.remove("dark");
        lightbulb.src = "img/yellow_lamp.png";
        switchBtn.innerText = "Spegni";
        accesa = true;
        console.log("Ho acceso la lampadina");
    } else {
        bgCol.classList.add("dark");
        bgCol.classList.remove("light");
        lightbulb.src = "img/white_lamp.png";
        switchBtn.innerText = "Accendi";
        accesa = false;
        console.log("Ho spento la lampadina");
    }
};

switchBtn.addEventListener("click", changeStatus);
