const numberContainers = document.querySelectorAll('.number__container h1');

numberContainers.forEach((item) => {
    let number = +item.textContent;
    let increaseNumber = parseInt((5/100) * number);
    item.textContent = 0;
    let fun = setInterval(function(){
        item.textContent = +item.textContent + increaseNumber;
        if(+item.textContent >= number) {
            item.textContent = number;
            item.parentElement.parentElement.style.backgroundColor = 'red';
            clearInterval(fun);
        }
    } , 70);
});


