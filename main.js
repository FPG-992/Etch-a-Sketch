function createGrid(size) {
    document.documentElement.style.setProperty('--grid-size', size);
    let grid = document.querySelector('.grid-container');
    grid.innerHTML = ''; // Clear any existing cells
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            })
            grid.appendChild(cell);
        }
    }
}
    
const button = document.querySelector('#size');
button.addEventListener('click', () => {
    let size = prompt('Enter a grid size');
    size = parseInt(size);
    if (size>0 && size<=100){
        createGrid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

createGrid(16);
