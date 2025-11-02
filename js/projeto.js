
var listacores = 0;

function adicionarnota(){
    var novo
    var nota = document.getElementById("nota").value
    var selecionado = document.querySelector('input[name="urgencia"]:checked')
    var cores = ["blue", "green", "purple"]

    if(selecionado.value == "urg"){
        novo=document.createElement("li")
        novo.id="item1"
        novo.innerText= nota

        var div=document.getElementById("notasurg")
        div.appendChild(novo)
        document.getElementById("nota").value=""
    }

    if(selecionado.value == "nurg"){
        novo=document.createElement("li")
        novo.id="item2"
        novo.innerText= nota

        var div=document.getElementById("notasnurg")
        div.appendChild(novo)
        document.getElementById("nota").value=""
    }

    novo.style.color = cores[listacores]
    listacores = (listacores + 1) % cores.length

}

function apagarnotanurg(){
    lista = document.getElementById("notasnurg")
    lista.removeChild(lista.lastElementChild)
}

function apagarnotaurg(){
    lista = document.getElementById("notasurg")
    lista.removeChild(lista.lastElementChild)
}

function apagartudo(){
    listaurg = document.getElementById("notasurg")
    listanurg = document.getElementById("notasnurg")

    while(listaurg.lastElementChild){
        listaurg.lastElementChild.remove()
    }
    while(listanurg.lastElementChild){
        listanurg.lastElementChild.remove()
    }

}
