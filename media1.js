window.onresize=find;
window.onload=find;
function find(){
    document.getElementById("screen").innerHTML="Screen Width: "+window.innerWidth;
}