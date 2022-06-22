let container = document.querySelector('.grid-container');
let gridSize = document.querySelector('.grid-size');
let input = document.querySelector('#squares-input');
let btn = document.querySelector('.btn-squares');

let squaresPerSide = input.value;

gridSize.textContent = `${squaresPerSide} x ${squaresPerSide}`;

function createGrid(squaresPerSide) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = 'auto '.repeat(squaresPerSide);

    for (let i = 1; i <= squaresPerSide ** 2; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-item');
        container.appendChild(squareDiv);
    }

    function setUpHoverEffect() {
        const squareDivs = document.querySelectorAll('.grid-item');

        squareDivs.forEach((squareDiv) => {
            squareDiv.addEventListener('mouseenter', () => {
                squareDiv.style.backgroundColor = 'black';
            });
        });
    }

    setUpHoverEffect();
}

function setSquaresPerSide() {
    btn.addEventListener('click', () => {
        squaresPerSide = input.value;
        createGrid(squaresPerSide);
    });
}

input.addEventListener('input', () => {
    gridSize.textContent = `${input.value} x ${input.value}`;
});

createGrid(squaresPerSide);
setSquaresPerSide();