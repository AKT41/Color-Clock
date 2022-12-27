function updateTime() {
    // Şimdiki zamanı al
    const date = new Date();
    // Saat, dakika ve saniyeyi al
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    // Saat, dakika ve saniyeyi biçimlendir
    const formattedTime = `${hour}:${minute}:${second}`;
    // Ekranda rgb değerini göster
    document.getElementById("rgb").innerHTML = `rgb(${hour}, ${minute}, ${second})`;
    //rgb değerinin rengini değiştirme
    document.getElementById("rgb").style.color = `rgb(${255 - hour}, ${255 - minute}, ${255 - second})`;
    // Zamanı sayfada göster
    document.getElementById("time").innerText = formattedTime;
    // Arka plan rengini saat, dakika ve saniyelerin değerlerine göre değiştir
    document.body.style.backgroundColor = `rgb(${hour}, ${minute}, ${second})`;
    // Saatin arkaplanla rengi denk gelmemesi için saatin renginide -255 şeklinde değiştir
    document.getElementById("time").style.color = `rgb(${255 - hour}, ${255 - minute}, ${255 - second})`;
    // Linkin rengini değiştir
    document.getElementById("link").style.color = `rgb(${100 - hour}, ${100 - minute}, ${100 - second})`;
    //linkin arkaplan rengini değiştir
    document.getElementById("link").style.backgroundColor = `rgb(${250 - hour}, ${250 - minute}, ${250 - second})`;

  }
  // Zamanı saniyede bir güncelle
  setInterval(updateTime, 1000);
