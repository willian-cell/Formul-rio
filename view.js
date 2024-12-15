// Carregar respostas salvas do localStorage
function carregarRespostas() {
    const respostas = JSON.parse(localStorage.getItem("respostas")) || [];
    const tbody = document.querySelector("#tabelaRespostas tbody");
  
    // Limpar a tabela antes de adicionar novas linhas
    tbody.innerHTML = "";
  
    respostas.forEach((resposta, index) => {
      const tr = document.createElement("tr");
  
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${resposta.nome || "N/A"}</td>
        <td>${resposta.idade || "N/A"}</td>
        <td>${resposta.nivel || "N/A"}</td>
        <td>${resposta.experiencia || "N/A"}</td>
        <td>${resposta.ferramentas || "N/A"}</td>
        <td>${resposta.dificuldades?.join(", ") || "N/A"}</td>
        <td>${resposta.recursos || "N/A"}</td>
      `;
  
      tbody.appendChild(tr);
    });
  }
  
  // Exportar respostas para um arquivo JSON
  function exportarParaJSON() {
    const respostas = JSON.parse(localStorage.getItem("respostas")) || [];
    const blob = new Blob([JSON.stringify(respostas, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "respostas.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  
  // Adicionar eventos
  document.addEventListener("DOMContentLoaded", () => {
    carregarRespostas();
    document.getElementById("exportarJson").addEventListener("click", exportarParaJSON);
  });
  