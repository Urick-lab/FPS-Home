// Criando função de pesquisa.

function pesquisar() {

    // Obtém o elemento HTML com o ID "resultados-pesquisa" que servirá como container para os resultados.
    let conteudo = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        conteudo.innerHTML = "<p>jogo não encontrado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.

    let result = "";
    let Titulo = "";
    let Descrição = "";
    let Descrição2 = "";

    // Itera sobre cada objeto no array "dados".

    for (let dado of dados) {

        Titulo = dado.Titulo.toLowerCase();
        Descrição = dado.Descrição.toLowerCase();
        Descrição2 = dado.Descrição2.toLowerCase();

        // Concatena o HTML de cada resultado à string "result".
        if (Titulo.includes(campoPesquisa) || Descrição.includes(campoPesquisa) || Descrição2.includes(campoPesquisa)){

            result +=
                `
    <div class="item-resultado"> 

          <h2>
     <a href=${dado.Link} target="_blank">${dado.Titulo}</a>
         </h2>

      <p> ${dado.Descrição}</p> 

      <p>${dado.Descrição2}</p>

    <a href=${dado.Link2} target="_blank">Mais informações</a>

     </div>;
     `
    }
} 

if(!result) {result = "<p>jogo não encontrado.</p>"

}


    // Atribui o HTML gerado ao conteúdo do elemento "resultados-pesquisa".
    conteudo.innerHTML = result;

}