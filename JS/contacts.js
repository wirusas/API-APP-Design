let buttonHide = document.getElementsByClassName("required-input");

let reqNote = document.getElementByTagName("p");


reqNote.addEventListener("click", function () {
    reqNote.classList.toggle("display-coment-box");
}
)