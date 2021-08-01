const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const resolution = 10
canvas.width=500
canvas.height =500

const columns = canvas.width/resolution
const rows = canvas.height/resolution

function buildGrid(){
    return new Array(columns).fill(null)
    .map(() =>  new Array(rows).fill(null)
    .map(() => Math.floor(Math.random()*2)))
}

let grid = buildGrid()

requestAnimationFrame(update)
function update(){
    grid=change(grid)
    render(grid)
    requestAnimationFrame(update)
}

function render(grid){
    for(let col=0; col<grid.length;col++){
        for(let row=0;row<grid[col].length;row++){
            const cell = grid[col][row]
            ctx.beginPath();
            ctx.rect(col*resolution,row*resolution,resolution,resolution)
            ctx.fillStyle = cell ? 'black' : 'white'
            ctx.fill()
            ctx.stroke()
        }
    }
}

function change(grid){
    const ng= grid.map(arr => [...arr])

    for(let col=0; col<grid.length;col++){
        for(let row=0;row<grid[col].length;row++){
            const cell = grid[col][row]
            let numNeighbours =0
            for(let i=-1;i<2;i++){
                for(let j=-1;j<2;j++){
                    if(i===0 && j===0){
                        continue;

                    }
                    const x = col + i
                    const y = row+j
                    if(x>=0 && y>=0 && x<columns && y<rows){
                        const currentNeighbour= grid[col+i][row+j]
                        numNeighbours+=currentNeighbour
                    }
                    
                }
            }
            if(cell===1 && numNeighbours<2){
                ng[col][row]=0
            }else if (cell===1 && numNeighbours>3){
                ng[col][row]=0
            }else if(cell ===0 && numNeighbours===3){
                ng[col][row]=1
            }
        }
    }
    return ng
}