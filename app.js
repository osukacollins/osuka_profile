var fname = document.getElementById("fname");
var sname = document.getElementById("sname");

var i = 0;
var j = 0;
var txt = 'Osuka';
var txts = "Collins.";



function clear() {
    fname.style.display = "none";
    fname.innerHTML ="";
    sname.style.display = "none";
    sname.innerHTML ="";
}



function typeWriter() {
  if (i < txt.length) {
    clear() 
    document.getElementById("fname2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 250);
  }
}
function write() {
    sname.style.display = "none";
    if ( j < txts.length) {
        document.getElementById("sname2").innerHTML += txts.charAt(j);
        j++;
        setTimeout(write, 200);
      }
}

fname.onmouseleave = function () {
    typeWriter()
    setTimeout(write, 1000);
}
fname.onmouseenter = function () {
    clear()
}


var k = 0;
var text = "An active enterprenuer exploring the digital space and making the world a better place through development, maitainance and design of websites and web applications. Modern problems require modern solutions."
var bio = document.getElementById("bio");
var biobox = document.getElementById("biobox");
function type() {
    if (k < text.length) {
        
      document.getElementById("bio").innerHTML += text.charAt(k);
      k++;
      setTimeout(type, 100);
    }
  }

function clearing() {
    bio.style.visibility = "hidden";
    bio.innerHTML ="";
}
// excute clearing.
clearing()
bio.style.visibility = "visible";
setTimeout(type, 10)

// implimenting picture switch

function pic() {
  
}