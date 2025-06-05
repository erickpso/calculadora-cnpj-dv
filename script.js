function charParaValor(c) {
  return c.toUpperCase().charCodeAt(0) - 48;
}

function calcularDV() {
  const input = document.getElementById("inputCNPJ").value.trim().toUpperCase();
  const resultadoDiv = document.getElementById("resultado");

  if (!/^[A-Z0-9]{12}$/.test(input)) {
    resultadoDiv.textContent = "Invalid Input. Use 12 characters alphanumeric.";
    resultadoDiv.style.color = "red";
    return;
  }

  const valores = input.split("").map(charParaValor);

  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma1 = valores.reduce((acc, val, i) => acc + val * pesos1[i], 0);
  let resto1 = soma1 % 11;
  let dv1 = resto1 < 2 ? 0 : 11 - resto1;

  valores.push(dv1);
  const pesos2 = [6].concat(pesos1);
  let soma2 = valores.reduce((acc, val, i) => acc + val * pesos2[i], 0);
  let resto2 = soma2 % 11;
  let dv2 = resto2 < 2 ? 0 : 11 - resto2;

  resultadoDiv.textContent = `Tax ID (CNPJ) with DV: ${input}-${dv1}${dv2}`;
  resultadoDiv.style.color = "green";
}
