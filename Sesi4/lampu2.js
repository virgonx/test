function saklar() {
    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");
    let toggle3 = document.getElementById("toggle3");
    let toggle4 = document.getElementById("toggle-ruang-makan");
    let toggle5 = document.getElementById("toggle-ruang-tidur");
    let toggle6 = document.getElementById("toggle-ruang-tidur2");
    let toggle7 = document.getElementById("toggle-ruang-tamu1");
    let toggle8 = document.getElementById("toggle-ruang-tamu2");
    let toggle9 = document.getElementById("toggle-ruang-tamu3");
    let toggle10 = document.getElementById("toggle-ruang-tamu4");
    let toggle11 = document.getElementById("");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu-ruang-makan");
    let lampu5 = document.getElementById("lampu-ruang-tidur");
    let lampu6 = document.getElementById("lampu-ruang-tidur2");
    let lampu7 = document.getElementById("lampu-ruang-tamu1");
    let lampu8 = document.getElementById("lampu-ruang-tamu2");
    let lampu9 = document.getElementById("lampu-ruang-tamu3");
    let lampu10 = document.getElementById("lampu-ruang-tamu4");
    let lampu11 = document.getElementById("");

    
    if (toggle1.checked) {
        lampu1.src = "Assets/Images/On.png";
    } else {
        lampu1.src = "Assets//Images/Off.png";
    }
    if (toggle2.checked) {
        lampu2.src = "Assets/Images/On.png";
    } else {
        lampu2.src = "Assets/Images/Off.png";
    }
    if (toggle3.checked) {
        lampu3.src = "Assets/Images/On.png";
    } else {
        lampu3.src = "Assets/Images/Off.png";
    }
    if (toggle4.checked) {
        lampu4.src = "Assets/Images/On.png";
    } else {
        lampu4.src = "Assets/Images/Off.png";
    }
    if (toggle5.checked) {
        lampu5.src = "Assets/Images/On.png";
    } else {
        lampu5.src = "Assets/Images/Off.png";
    }
    if (toggle6.checked) {
        lampu6.src = "Assets/Images/On.png";
    } else {
        lampu6.src = "Assets/Images/Off.png";
    }
    if (toggle7.checked) {
        lampu7.src = "Assets/Images/On.png";
    } else {
        lampu7.src = "Assets/Images/Off.png";
    }
    if (toggle8.checked) {
        lampu8.src = "Assets/Images/On.png";
    } else {
        lampu8.src =  "Assets/Images/Off.png";
    }
    if (toggle9.checked) {
        lampu9.src = "Assets/Images/On.png";
    } else {
        lampu9.src = "Assets/Images/Off.png";
    }
    if (toggle10.checked) {
        lampu10.src = "Assets/Images/On.png";
    } else {
        lampu10.src = "Assets/Images/Off.png";
    }
    if (toggle11.checked) {
        lampu11.src = "Assets/Images/On.png";
    } else {
        lampu11.src = "Assets/Images/Off.png";
    }
}