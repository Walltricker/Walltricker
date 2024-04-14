var id = null;
function myMove() {
  var elem = document.getElementById('window');   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == -100) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'vh'; 
    }
  }
}
