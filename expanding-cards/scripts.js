"use strict";
const listPanels = document.querySelectorAll(".panel");

function handleClickPanel(panel){
    panel.classList.add("active")
}

function removeAllActive(){
    listPanels.forEach((panel) => {
        panel.classList.remove("active")
    })
}

listPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeAllActive()
        handleClickPanel(panel)
        // panel.classList.add("active")
    })
})