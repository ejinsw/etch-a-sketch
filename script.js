let middleMain = document.querySelector(".middleMain");
let slider = document.querySelector(".slider");
let sliderValue = document.querySelector('.sliderValue');
let canvas;
let isMouseDown = false;
sliderValue.textContent = slider.value;

changeValue = () => {
    sliderValue.textContent = slider.value;
}

slider.addEventListener('input', function () {
    changeValue();
    removeCanvas();
    makeCanvas();
});

let removeCanvas = () => {
    if (canvas) {
        middleMain.removeChild(canvas);
    }
}

let makeCanvas = () => {
    canvas = document.createElement('div');
    canvas.classList.add("canvas");
    middleMain.appendChild(canvas);
    canvas.addEventListener("mouseleave", function () { isMouseDown = false });
    for (let i = 1; i <= slider.value; i++) {
        let row = document.createElement('div');
        row.classList.add("rows");
        canvas.appendChild(row);
        for (let j = 1; j <= slider.value; j++) {
            let column = document.createElement('div');
            column.classList.add("columns");
            row.appendChild(column);
            column.addEventListener('mousedown', function () {
                isMouseDown = true;
            });
            column.addEventListener('mousemove', function () {
                if (isMouseDown) column.style.backgroundColor = "black";
            });
            column.addEventListener('mouseup', function () {
                isMouseDown = false;
            });
        }
    }
}
makeCanvas()