// 返回[start,end]之间的随机整数
function randomInt(start, end) {
    return parseInt(Math.random() * (end - start) + start);
}

function createBall(parent) {
    let div = document.createElement('div');
    let wh = randomInt(10, 150);
    div.className = "ball";
    div.style.width = wh + 'px';
    div.style.height = wh + 'px';
    div.style.left = randomInt(0, 1260-150) + 'px';
    div.style.top = randomInt(0, 700-150) + 'px';
    div.style.background = `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)},${Math.random() * 0.5 + 0.5})`;
    parent.appendChild(div);
}

function createBalls(n = 50) {
    let box = document.getElementById('box');
    for (let i = 0; i < n; i++) {
        createBall(box);
    }
}

createBalls(60);
