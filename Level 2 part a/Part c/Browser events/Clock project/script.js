function timer() {

    let a = new Date();
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s;
    document.getElementsByClassName("clock")[0].textContent = time
  
  }
  
  setInterval(timer, 1000)