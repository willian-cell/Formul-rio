document.getElementById("questionario").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Coleta dos dados do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
  
    const experiencia = document.querySelector('input[name="experiencia"]:checked')?.value || "Não informado";
  
    const ferramentas = document.getElementById("ferramentas").value;
  
    const dificuldades = Array.from(document.querySelectorAll('input[name="dificuldades"]:checked')).map(input => input.value);
  
    const recursos = document.getElementById("recursos").value;
  
    // Objeto JSON com as respostas
    const resposta = {
      nome,
      idade,
      nivel,
      experiencia,
      ferramentas,
      dificuldades,
      recursos,
    };
  
    // Salvar no localStorage
    const respostasAnteriores = JSON.parse(localStorage.getItem("respostas")) || [];
    respostasAnteriores.push(resposta);
    localStorage.setItem("respostas", JSON.stringify(respostasAnteriores));
  
    alert("Resposta enviada com sucesso!");
    document.getElementById("questionario").reset();
  });
  