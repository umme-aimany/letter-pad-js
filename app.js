const changeColorBtn = document.getElementById('changeColorBtn');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff3399', '#99ff33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
});