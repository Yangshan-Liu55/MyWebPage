

// Top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//Project experience functions
function addpic(source){
  document.getElementById('opic').src= source;
}
function addheading(heading2){
  document.getElementById('proh2').innerHTML=heading2;
}
function addprodate(dtext){
  document.getElementById('prodate').innerHTML=dtext;
}
function addproaddr(addr){
  document.getElementById('prodate').innerHTML=addr;
}
function addtext1(text1){
  document.getElementById('protext1').innerHTML=text1;
}
function addtext2(text2){
  document.getElementById('protext2').innerHTML=text2;
}