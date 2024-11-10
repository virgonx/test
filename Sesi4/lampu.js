function saklar() {
    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");
    let toggle3 = document.getElementById("toggle3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src = "Assets/Images/On.png";
    } else {
        lampu1.src = "Assets//Images/Off.png";
    }
    if (toggle2.checked) {
        lampu2.src = "Assets/Images/On.png";
    } else {
        lampu2.src = "Assets//Images/Off.png";
    }
    if (toggle3.checked) {
        lampu3.src = "Assets/Images/On.png";
    } else {
        lampu3.src = "Assets//Images/Off.png";
    }
}