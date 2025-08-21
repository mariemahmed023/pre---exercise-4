let popUpEle = document.querySelector(".popup"),
    popupKeys = document.querySelectorAll("#Gallery .item i"),
    popUpClose =  document.querySelector(".close");

//popup is activated

popupKeys.forEach(function (popupKey){
    popupKey.addEventListener("click", function () {
        popUpEle.classList.add("show");
    });
});

//popup is closed

popupKeys.forEach(function (popupKey){
    popupKey.addEventListener("click", function () {
        popUpEle.classList.remove("show"); 
    });
});


