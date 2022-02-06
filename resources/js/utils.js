function initializeFields() {
  document.getElementById("ivalor").defaultValue = 200000;
  document.getElementById("iprazoanos").defaultValue = 20;
  document.getElementById("ijuros").defaultValue = 0.08;
}

function calcularParcela(event) {
  let valor = Number(document.getElementById("ivalor").value);
  let anos = Number(document.getElementById("iprazoanos").value);
  let taxaAnual = parseFloat(document.getElementById("ijuros").value);
  let meses = anos * 12;
  let jurosMensal = Math.pow(1 + taxaAnual, 1 / 12) - 1;
  let amortizacao = valor / meses;
  let jurosMes = 0;
  let jurosAcumulados = 0;
  let primeirasParcelas = [];

  document.getElementById("iprazomeses").value = meses;
  document.getElementById("ijurosmes").value = jurosMensal;

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("table").appendChild(table);

  event.preventDefault();

  for (let i = 1; i <= meses; i++) {
    jurosMes = valor * jurosMensal;
    valor -= amortizacao;

    /* console.log(
      "Amortização: " +
        amortizacao.toFixed(2) +
        " Juros: " +
        jurosMes.toFixed(2) +
        " Total: " +
        (amortizacao + jurosMes).toFixed(2)
    );*/
    primeirasParcelas.push(
      `Parcela: ${i}      Amortização: R$${amortizacao.toFixed(
        2
      )}    Juros: R$${jurosMes.toFixed(2)}   Total: R$${(
        amortizacao + jurosMes
      ).toFixed(2)}`
    );
    jurosAcumulados += jurosMes;
  }
  for (let j = 0; j < 5; j++) {
    let row_1 = document.createElement("tr");
    let heading_1 = document.createElement("th");
    heading_1.innerHTML = primeirasParcelas[j];
    row_1.appendChild(heading_1);
    thead.appendChild(row_1);
    console.log(primeirasParcelas[j]);
  }

  document.getElementById("ijurosacumulados").value =
    jurosAcumulados.toFixed(2);
}
