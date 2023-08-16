const gridContainer = document.querySelector('.container');
const gridSmallBtn = document.getElementById('small-btn');
const gridMediumBtn = document.getElementById('medium-btn');
const gridLargeBtn = document.getElementById('large-btn');
const gridClearBtn = document.getElementById('clear-btn');
const gridBlackBtn = document.getElementById('black-btn');
const gridEraseBtn = document.getElementById('erase-btn');
gridSizeTogglerMain()
gridClearBtn.addEventListener('click', eraseGrid);
// provide size-changing functionality to buttons
function gridSizeTogglerMain(){
    createGrid(16,31.2);
    gridSmallBtn.addEventListener('click', ()=>{resetGrid();createGrid(16,31.2)});
    gridMediumBtn.addEventListener('click', ()=>{resetGrid();createGrid(32,15.6)});
    gridLargeBtn.addEventListener('click', ()=>{resetGrid();createGrid(50,10)});    
}

function gridColorTogglerMain(){
    colorGrid('#333');
    gridBlackBtn.addEventListener('click', ()=>{colorGrid('black')})
    gridEraseBtn.addEventListener('click', ()=>{colorGrid('white');})
}


// to color the grid
function colorGrid(gridColor){
    var gridBox = document.querySelectorAll('.grid');
    Array.from(gridBox).forEach((item)=>{
    item.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = `${gridColor}`;
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
    gridColorTogglerMain()
}

// to remove the grid element while changing grid density
function resetGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.remove();
    })
}

// to erase the grid content
function eraseGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.style.backgroundColor = '#fff';
    })
}

// function shadeGrid(counter=0.2){
//     colorGrid()
//     Array.from(gridContainer.children).forEach((item)=>{
//         item.addEventListener('mouseenter', (event)=>{
//             console.log(counter);
//             event.target.style.opacity = `${0.1+counter}`;
//             console.log("event",event.target.style.opacity);
//             counter+=0.15;
//             console.log(counter);
//             setTimeout(shadeGrid.bind(counter),100);
//             })  
//     })
// }