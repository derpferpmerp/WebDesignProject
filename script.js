function onKonamiCode(cb) {
  var input = '';
  var snek = '38384040373937396665';
  var key = '83786975';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input == key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
	window.open('https://www.dictionary.com/e/wp-content/uploads/2018/06/snek-5.jpeg', '_blank')
	
})

var OBJ = $('#__placeholder__2')

var random1 = Math.floor(Math.random()*9)
console.log(OBJ)



