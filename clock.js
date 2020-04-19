const clock = document.querySelectorAll('span');

const time = () => {
    const now = new Date()

    clock[0].textContent = now.getHours();
    clock[1].textContent = now.getMinutes();
    clock[2].textContent = now.getSeconds();
};

setInterval(time, 1000);
