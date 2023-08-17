const gridContainer = document.querySelector('.container');
const gridSmallBtn = document.getElementById('small-btn');
const gridMediumBtn = document.getElementById('medium-btn');
const gridLargeBtn = document.getElementById('large-btn');
const gridClearBtn = document.getElementById('clear-btn');
const gridBlackBtn = document.getElementById('black-btn');
const gridEraseBtn = document.getElementById('erase-btn');
const gridShadeBtn = document.getElementById('shade-btn');
const gridTranceBtn = document.getElementById('trance-btn');
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
    colorGrid('#555');
    gridBlackBtn.addEventListener('click', ()=>{colorGrid('black');})
    gridEraseBtn.addEventListener('click', ()=>{colorGrid('white');})
    gridShadeBtn.addEventListener('click', ()=>{shadeGrid();})
    // gridTranceBtn.addEventListener('click', ()=>{tranceGrid();})
}


// to color the grid
function colorGrid(gridColor){
    var gridBox = document.querySelectorAll('.grid');
    Array.from(gridBox).forEach((item)=>{
    item.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = `${gridColor}`;
    event.target.style.opacity=1;
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

// to clear the grid content
function eraseGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.style.backgroundColor = '#fff';
        item.style.opacity=1;
    })
}

// to provide the shade functionality to grid
function shadeGrid(){
    Array.from(gridContainer.children).forEach((item)=>{
        item.count=0;
        item.addEventListener('mouseenter', (e)=>{
            e.target.style.backgroundColor = '#333';
            e.target.count += 1;
            e.target.style.opacity = 0.2 * e.target.count;
        })
    })

}
// function tranceGrid(condition=false){
//     const tranceColor = ['#fd00ff','#fdff00','#00ff38', '#00f9ff', '#3c00ff']
//     let random = Math.floor(Math.random()*tranceColor.length);
//     var gridBox = document.querySelectorAll('.grid');
//     Array.from(gridBox).forEach((item)=>{
//     item.addEventListener('mouseenter', (event)=>{
//     event.target.style.backgroundColor = `${tranceColor[random]}`;
//     event.target.style.opacity=1;
//     setTimeout(tranceGrid,50);
//     })
// })
// }

// window scroll
// window.addEventListener('scroll', ()=>{
//     const optionsList = document.querySelector('.options');
//     optionsList.classList.toggle('animate__animated');
//     optionsList.classList.toggle('animate__backInUp');
// })