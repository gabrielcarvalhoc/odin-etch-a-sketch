let container = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 1; i <= 16*16; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-item');
        container.appendChild(squareDiv);
    }

    const squareDivs = document.querySelectorAll('.grid-item');

    squareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseenter', () => {
            squareDiv.style.backgroundColor = 'black';
        });
    });
}

createGrid();