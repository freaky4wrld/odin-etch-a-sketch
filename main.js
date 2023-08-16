const gridContainer = document.querySelector('.container');
const gridSmallBtn = document.getElementById('small-btn');
const gridMediumBtn = document.getElementById('medium-btn');
const gridLargeBtn = document.getElementById('large-btn');
const gridClearBtn = document.getElementById('clear-btn')
gridSizeTogglerMain()
gridClearBtn.addEventListener('click', eraseGrid);
// provide size-changing functionality to buttons
function gridSizeTogglerMain(){
    createGrid(16,31.2);
    gridSmallBtn.addEventListener('click', ()=>{resetGrid();createGrid(16,31.2)});
    gridMediumBtn.addEventListener('click', ()=>{resetGrid();createGrid(32,15.6)});
    gridLargeBtn.addEventListener('click', ()=>{resetGrid();createGrid(50,10)});    
}



// to color the grid
function colorGrid(){
    var gridBox = document.querySelectorAll('.grid');
    Array.from(gridBox).forEach((item)=>{
    item.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = '#323';
    })
})
}

// creating grid element and providing them sizing
function createGrid(gridCount,gridSize){
    for (let index = 1; index <=gridCount; index++) {
        for(let counter = 1; counter<=gridCount; counter++){
            let grid = document.createElement('div');
            grid.className = 'grid';
            gridContainer.appendChild(grid)
            grid.style.width = `${gridSize}px`;
            grid.style.height = `${gridSize}px`
        }
        gridContainer.style.gridTemplateColumns = `repeat(${gridCount}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridCount}, 1fr)`;
    }
    colorGrid()
}

// to remove the grid element while changing grid density
function resetGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.remove();
    })
}

function eraseGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.style.backgroundColor = '#fff';
    })
}