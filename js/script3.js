let add = document.querySelector('#add')
let clc = document.querySelector('#calcular')
let prs = document.querySelector('#addItem')
let tx = document.querySelector('#tx')


add.addEventListener('click',cadastro)
clc.addEventListener('click',pt2)
prs.addEventListener('click',calcular)
tx.addEventListener('click',taxa)


let clientes= new Array();

function cadastro(){

    let dados = new Object();
    dados.nome=document.querySelector('#n').value
    if(dados.nome==''){
        alert('Insira um valor valido')
    }else{
        dados.valor=0
        dados.produtos=''
        clientes.push(dados)
        document.querySelector('#n').value=''
        console.log(dados)
    }
}

function mudarTela(){
    document.querySelector('#cadastro').style.display='none'
    document.querySelector('#produtos').style.display=''
}

function addNomes(){
    for(let i=0; i<clientes.length;i++){
        let center=document.querySelector('#c0')
        let temp = center.innerHTML
        center.innerHTML = temp + 
        `
            <label class='' for="d${i}">${clientes[i].nome}</label>
            <input type="checkbox" name="d${i}" id="ck${i}"></input>
        `
    }
}
function valorPessoal(){
    for(let i=0; i<clientes.length;i++){
        let res = document.querySelector('#cp')
        let temp = res.innerHTML
        res.innerHTML= temp+
        `
            <p>${clientes[i].nome}</p>
            <p>${clientes[i].valor}</p>
            <input type='checkbox' id='e${i}'>
        `
    }
    document.querySelector('#cp').style.display=''
    document.querySelector('#cb').style.display=''
}

function pt2(){
    if(clientes.length==0){
        alert("Por favor, insira um nome")
    }else{
        addNomes()
        mudarTela()
        valorPessoal()
    }
    
}
function calcular(){
    let nProduto= document.querySelector('#p').value
    let vPreco=document.querySelector('#v').value
    let teste=0

    if(nProduto==''){
        alert('Insira o nome do produto')
    }else if(vPreco==''){
        alert('Insira um valor valido')
    }else{
        individual()
    }
    nProduto= document.querySelector('#p').value=''
    vPreco=document.querySelector('#v').value=''
}
 
function individual(){
    let c=[]
    let p=0
    for(let i=0;i<clientes.length;i++){
        let temp = document.querySelector(`#ck${i}`).checked
        if(temp==true){
            p++
        }
        c.push(temp) 
    }
    let total = document.querySelector('#v').value
    total= (total/p).toFixed(2)
    for(let j=0;j<clientes.length;j++){
        if(c[j]){
            clientes[j].valor+=total
        }
    }
    document.querySelector('#cp').innerHTML=`
                            <p>Nome</p>
                            <p>Valor</p>
                            <p>Taxa</p>`
    valorPessoal()
}

function taxa(){
    for(let i=0; i<clientes.length;i++){
        let temp = document.querySelector(`#e${i}`).checked
        if(temp){
            clientes[i].valor= (clientes[i].valor*1.1).toFixed(2)
        }
    }
    document.querySelector('#produtos').style.display='none'
    document.querySelector('#cp').style.display='none'
    document.querySelector('#cb').style.display='none'
    imprimir()
}
function imprimir(){
    document.querySelector('#result').style.display=''
    for(let i=0; i<clientes.length;i++){
        let res = document.querySelector('#b0')
        let temp = res.innerHTML
        res.innerHTML= temp+
        `
            <p>${clientes[i].nome}</p>
            <p>${clientes[i].valor}</p>
            
        `
    }
}




