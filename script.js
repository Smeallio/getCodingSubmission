function swapPics() {
    var imgHide = document.getElementById("my-picture");
    var imgShow = document.getElementById("frank-picture");
    var textHide = document.getElementById("first-row-text-a");
    var textShow = document.getElementById("first-row-text-b");
    imgHide.style.display = "none";
    imgShow.style.display = "block";
    textHide.style.display = "none";
    textShow.style.display = "block";
}

function swapPicsBack() {
    var imgHide = document.getElementById("frank-picture");
    var imgShow = document.getElementById("my-picture");
    var textHide = document.getElementById("first-row-text-b");
    var textShow = document.getElementById("first-row-text-a");
    imgHide.style.display = "none";
    imgShow.style.display = "block";
    textHide.style.display = "none";
    textShow.style.display = "block";
}