/*Monte um pequeno sistema de  notas rápidas que deve ter as seguintes funcionalidades:
Um campo de texto e um botão “Adicionar”.
Um botão para marcar a nota como: não urgente ou urgente.
Cada nota digitada deve aparecer dentro de um box. As não urgentes em amarelo limão e as  urgentes em vermelho.
As notas devem ser coladas em formato de lista.
Cada nota a ser inserida seguindo padrão de cores: Azul, Verde, Roxo.  
Botões para remover nota a nota.
Um botão “Apagar tudo” remove todas as notas.
Estilizar todo o conteúdo.
Hospedar e deixar acessível.*/

function adicionarnota(){
    var novo
    var nota = document.getElementById("nota").value
    var selecionado = document.querySelector('input[name="urgencia"]:checked')

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

}

function apagarnotanurg(){
    lista = document.getElementById("notasnurg")
    lista.removeChild(lista.lastElementChild)
}

function apagarnotaurg(){
    lista = document.getElementById("notasurg")
    lista.removeChild(lista.lastElementChild)
}
