const boxList = document.querySelectorAll(".box");

boxList.forEach((ele) => {
    let randomArr = new Array(6).fill(0);
    randomArr.forEach((_, index) => {
        randomArr[index] = Math.random() * 255;
    })
    ele.style.color = `rgb(${randomArr[0]}, ${randomArr[1]}, ${randomArr[2]})`;
    ele.style.backgroundColor = `rgb(${randomArr[3]}, ${randomArr[4]}, ${randomArr[5]})`;
})