let container = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 1; i <= 16*16; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-item');
        container.appendChild(squareDiv);
    }
}

createGrid();