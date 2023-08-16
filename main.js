const gridContainer = document.querySelector('.container');
const gridSizeChangeBtn = document.getElementById('btn');
createGrid(16);

function colorGrid(){
    var gridBox = document.querySelectorAll('.grid');
    Array.from(gridBox).forEach((item)=>{
    item.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = 'black';
    })
})
}

gridSizeChangeBtn.addEventListener('click', ()=>{
    let sizeValue = prompt('Enter a size: ');
    createGrid(sizeValue);
    gridContainer.style.width = '70%'
})

function createGrid(gridSize){
    for (let index = 1; index <=gridSize; index++) {
        for(let counter = 1; counter<=gridSize; counter++){
            let grid = document.createElement('div');
            grid.className = 'grid';
            gridContainer.appendChild(grid)
        }
    }
    colorGrid()
}