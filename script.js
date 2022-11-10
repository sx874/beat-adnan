var status = '';
var ans = '';
let score = 0;
var counter = document.getElementById('score');


fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('img').src = data.image;
        document.getElementById('name').innerHTML = data.name;
        status = data.status;
        console.log(status);
});

const alive = document.getElementById("alive");
const dead = document.getElementById('dead');
const unknown = document.getElementById('unknown')

//ALIVE BUTTON
alive.addEventListener('click', () => {
    ans = 'Alive';
    if (ans === status) {
        document.getElementById('bg-color').classList.add("right");
        score++;
        console.log(score);
        updateScore();
    } else {
        document.getElementById('bg-color').classList.add("wrong");
        score--;

        console.log(score);
        updateScore();
    };
    setTimeout(() => {
        document.getElementById('bg-color').classList.remove('wrong');
        document.getElementById('bg-color').classList.remove('right');
        fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('img').src = data.image;
            document.getElementById('name').innerHTML = data.name;
            status = data.status;
            console.log(status);
        });
    }, 2000);
});

//DEAD BUTTON
dead.addEventListener('click', () => {
    ans = 'Dead';
    if (ans === status) {
        document.getElementById('bg-color').classList.add("right");
        score++;
        console.log(score);
        updateScore();
    } else {
        document.getElementById('bg-color').classList.add("wrong");
        score--;
        console.log(score);
        updateScore();
    };
    setTimeout(() => {
        document.getElementById('bg-color').classList.remove('wrong');
        document.getElementById('bg-color').classList.remove('right');
        fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('img').src = data.image;
            document.getElementById('name').innerHTML = data.name;
            status = data.status;
            console.log(status);
        });
    }, 2000);
});

//UNKNOWN BUTTON
unknown.addEventListener('click', () => {
    ans = 'unknown';
    if (ans === status) {
        document.getElementById('bg-color').classList.add("right");
        score++;
        console.log(score);
        updateScore();
    } else {
        document.getElementById('bg-color').classList.add("wrong");
        score--;
        console.log(score);
        updateScore();
    }
    setTimeout(() => {
        document.getElementById('bg-color').classList.remove('wrong');
        document.getElementById('bg-color').classList.remove('right');
        fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('img').src = data.image;
            document.getElementById('name').innerHTML = data.name;
            status = data.status;
            console.log(status);
        });
    }, 2000);
});

//WIN LOSE
function updateScore() {
    if (score === 10) {
        counter.innerText = score;
        document.getElementById('winlose').innerText = 'YOU WIN';
    } else {
        counter.innerText = score;
    };
};