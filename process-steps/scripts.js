"use strict";
const processList = document.querySelectorAll(".process-step");
const stepLength = processList.length;
let processLine = document.getElementById("process-line");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let indexActive = 0;

function handlePrevBtn(){
    indexActive--;
    if(indexActive < 0) {
        indexActive++;
        return
    }
    if(indexActive === 0){
        prevBtn.disabled = true;
    }
    nextBtn.disabled = false;
    processList[indexActive + 1].classList.remove("active");
    handleProcessLine();
    return;
}

function handleNextBtn(){
    indexActive++;
    if(indexActive === stepLength) {
        indexActive--;
        return
    }
    if(indexActive === stepLength - 1){
        nextBtn.disabled = true;
    }
    prevBtn.disabled = false;
    processList[indexActive].classList.add("active");
    handleProcessLine();
    return;
}
function handleProcessLine(){
    let widthLine = (100/(stepLength - 1))*indexActive;
    processLine.style.width = `${widthLine}%`;
}
prevBtn.addEventListener("click", handlePrevBtn);
nextBtn.addEventListener("click", handleNextBtn);