let userName= prompt("Adınızı girin")
let info = document.querySelector("#info")
info.innerHTML= `Merhaba <strong>${userName}</> Hoş geldin!`
let alt = document.querySelector("#alt")





function tarihSaat() {
  var date = new Date().toLocaleString('tr-TR');

  document.querySelector("#txt").innerHTML = date;
  alt.innerHTML=`tarihinde
  <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
  Javascript bölümü 1. Ödevindesiniz.`
}

setInterval(tarihSaat, 1000);










  

