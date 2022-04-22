document.querySelector(".main-container").style.width = "16.5%";
document.querySelector(
  ".close"
).innerHTML = `<i class="fa-solid fa-xmark fa-2x active"></i>`;
var screen_Large = true;

document.querySelector(".close").addEventListener("click", function () {
  let mainWidth = document.querySelector(".main-container");
  if (screen_Large) {
    mainWidth.style.width = "4%";
    document.querySelector(".main-container").classList.add("widthTrans");
    document.querySelector(
      ".close"
    ).innerHTML = `<i class="fa-solid fa-bars fa-4x iconn"></i>`;
    document.querySelector(".qr-img").style.width = "60%";
    document.querySelector(".qr-img").style.height = "30%";
    document.querySelectorAll(".hide").forEach(function (e) {
      e.style.visibility = "hidden";
      
    });
    screen_Large = false;
  } else {
    mainWidth.style.width = "16.5%";
    document.querySelector(".main-container").classList.add("widthTrans");
    document.querySelector(".qr-img").style.width = "40%";
    document.querySelector(".qr-img").style.height = "78%";
    document.querySelector(
      ".close"
    ).innerHTML = `<i class="fa-solid fa-xmark fa-2x active"></i>`;
    document.querySelectorAll(".hide").forEach(function (e) {
      e.style.visibility = "visible";
      
    });

    screen_Large = true;
  }

  
});


