const b = document.querySelector('#btn')
b.addEventListener('click',receive)

let n = [
    {number:3000, roman:'MMM'},
    {number:2000, roman:'MM'},
    {number:1000, roman:'M'},
    {number:900, roman:'CM'},
    {number:500, roman:'D'},
    {number:400, roman:'CD'},
    {number:300, roman:'CCC'},
    {number:200, roman:'CC'},
    {number:100, roman:'C'},
    {number:90, roman:'XC'},
    {number:50, roman:'L'},
    {number:40, roman:'XL'},
    {number:30, roman:'XXX'},
    {number:20, roman:'XX'},
    {number:10, roman:'X'},
    {number:9, roman:'IX'},
    {number:5, roman:'V'},
    {number:4, roman:'IV'},
    {number:3, roman:'III'},
    {number:2, roman:'II'},
    {number:1, roman:'I'}
]

function receive(){
    let n=document.querySelector('#n1').value
    if(n>3999||n<0||n===''){
        let r = document.querySelector('#r')
        r.textContent="Digite um valor válido"
    }else{
        convert(n)
        document.querySelector('#n1').value=''
    }
}
function convert(p){
    let arabic = p
    let temp=arabic
    let roman = ''
    for(let i=0; i<n.length; i++){
        if(n[i].number <= arabic){
            arabic = arabic - n[i].number
            roman = roman + n[i].roman
        }
    }
    let r = document.querySelector('#r')
    r.textContent=temp +"="+ roman

}
