function change_img1(){
    document.getElementById("img").src ="First.jpeg"
}
function change_img2(){
    document.getElementById("img").src ="Second.jpeg"
}
function change_img3(){
    document.getElementById("img").src ="Third.jpeg"
}
function change_link(){
    document.getElementById("Link").innerHTML = "Google"
    document.getElementById("Link").href = "https://www.google.com/"
    document.getElementById("Link").target = "_blank"
}
function change_txt(){
    var txt = document.getElementById("txt")
    txt.setAttribute("class" , "txt2")
}
document.getElementById("change").style.color = "white"
document.getElementById("change").style.fontSize = "30px"
document.getElementById("change").style.cssText = "color:red ; fontSize:px"
