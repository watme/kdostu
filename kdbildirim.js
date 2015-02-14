function kodDostuBildirim(baslik,icerik,link,resim) {
if(resim == undefined){var ikon = 'http://2.bp.blogspot.com/-s3UlGG0-0Is/VN9LDNMFL9I/AAAAAAAAzDs/dYu4Vr8plsE/';}
else{var ikon = resim;}
  if (!Notification) {alert('Tarayýcýnýz bildirimleri desteklemiyor.'); return;  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();

  var notification = new Notification(baslik, {
    icon: ikon,
    body: icerik,
  });


  notification.onclick = function () {
    window.open(link);
  }
}