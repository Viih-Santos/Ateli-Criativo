function pesquisar() {
    let section = document.getElementById("resultado_pesquisa"); //isso represenda que ele esta pagando o elemento que tem o id la no html

    let campoPesquisa = document.getElementById("campo_pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de um hobbie artistico.</p>"
        return
    }; //os dois iguais representa uma comparação

    campoPesquisa = campoPesquisa.toLowerCase(); //tolowercase significa que estamos transformando tudo em letras minúsculas, então daria para pesquisar com tudo em minúsculo

let resultados = ""; //variavel
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { //se o titulo digitado for true ele irá pesquisar, se não, não aparecera nada 
    // essas duas barras representam o 'ou'
    resultados += //o + soma todos os outros dados 
        ` 
            <div class="hobbie">
                <h2>${dado.titulo}</h2>
                <p class="descricao_hobbie">${dado.descricao}</p>
                <img src=${dado.imagem_1} class="imagem">
                <img src=${dado.imagem_2} class="imagem">
            </div>
        `;
        }
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"

    }

    section.innerHTML = resultados;
};

//console.log(dados) //o que aparece no console

