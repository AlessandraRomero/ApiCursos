const apiData = document.querySelector(".api-data");
let tabela = document.querySelector("tbody");

async function listarCursos() {
  const url = "http://localhost:3000/cursos";
  const response = await axios.get(url);
  const listaCurso = Array.from(response.data);

  listaCurso.forEach(async function(curso) {
    let linha = document.createElement("tr");
    let campo_id = document.createElement("td");
    let campo_curso = document.createElement("td");
    let campo_nivel = document.createElement("td");
    let campo_duracao = document.createElement("td");
    let campo_municipio = document.createElement("td");

    let txt_id = document.createTextNode(curso.id);
    let txt_curso = document.createTextNode(curso.curso);
    let txt_nivel = document.createTextNode(curso.nivel);
    let txt_duracao = document.createTextNode(curso.duracao);
    let txt_municipio = document.createTextNode(curso.municipio);

    campo_id.appendChild(txt_id);
    campo_curso.appendChild(txt_curso);
    campo_nivel.appendChild(txt_nivel);
    campo_duracao.appendChild(txt_duracao);
    campo_municipio.appendChild(txt_municipio);

    linha.appendChild(campo_id);
    linha.appendChild(campo_curso);
    linha.appendChild(campo_nivel);
    linha.appendChild(campo_duracao);
    linha.appendChild(campo_municipio);

    tabela.appendChild(linha);
  });
}

listarCursos();
