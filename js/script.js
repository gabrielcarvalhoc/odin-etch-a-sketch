let container = document.querySelector('.grid-container');
let input = document.querySelector('#squares-input');
let btn = document.querySelector('.btn-squares');

let squaresPerSide = 16;

function createGrid() {
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
        if (input.value <= 100) {
            squaresPerSide = input.value;
            createGrid();
        } else {
            swal('Oh No!', 'Please Choose a Number Less than 100.', 'error');
        }
    });
}

createGrid();
setSquaresPerSide();