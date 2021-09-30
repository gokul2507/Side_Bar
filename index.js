function removeclass(x, y, z) {
  return x.replace(y, z);
}
function addclass(x, y) {
  return x + y;
}
function hchange(x) {
  var tohidesidemenu = document.getElementsByClassName("sidemenu")[0];
  var tohide = document.getElementsByClassName("subcont");
  var todisplay = document.getElementsByClassName("hidesubcont");
  if (x.classList[1] === "hambergerchange") {
    tohidesidemenu.className = addclass(
      tohidesidemenu.className,
      " hidesidemenu"
    );
    for (i of tohide) {
      i.className = removeclass(i.className, "display", "hiden");
    }
    for (i of todisplay) {
      i.className = removeclass(i.className, "hiden", "display");
    }
    x.className = removeclass(x.className, " hambergerchange", "");
  } else {
    tohidesidemenu.className = removeclass(
      tohidesidemenu.className,
      " hidesidemenu",
      ""
    );
    x.className = addclass(x.className, " hambergerchange");
    setTimeout(() => {
      
      for (i of tohide) {
        i.className = removeclass(i.className, "hiden", "display");
      }
      for (i of todisplay) {
        i.className = removeclass(i.className, "display", "hiden");
      }
      
    }, 250);
  }
}
