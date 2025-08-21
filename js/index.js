let popUpEle = document.querySelector(".popup"),
    popupKeys = document.querySelectorAll("#Gallery .item i"),
    popUpClose = popUpEle.querySelector(".close"),
    popupImg = popUpEle.querySelector("img"),
    currentImgIndex,
    popupIndicators = popUpEle.querySelectorAll(".indicators li");

//add show to the popup
function togglePopup() {
    popUpEle.classList.toggle("show");
}

function updateIndicator() {
    document.querySelector(".indictors ul li.active").classList.remove("active");
    popupIndicators[currentImgIndex].classList.add("active");
}

//popup is activated
popupKeys.forEach(function (popupKey) {
    popupKey.addEventListener("click", function (e) {
        //As soon as i click on the plus icon the images are displayed
        let currentImgEle = popupKey.parentElement.previousElementSibling,
            currentImgSrc = currentImgEle.getAttribute("src");
        // add active to the desired image
        currentImgIndex = currentImgEle.dataset.index;
        updateIndicator();


        popupImg.setAttribute("src", currentImgSrc);
        togglePopup();
    });
});
//popup is hidden
popUpClose.addEventListener("click", togglePopup);

//close the popup when I click outside the container of popup
popUpEle.addEventListener("click", togglePopup);

//stop the function of closing popup
popUpEle.querySelector(".box").addEventListener("click", function (e) {
    e.stopPropagation();
});




