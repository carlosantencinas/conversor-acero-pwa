const rho = 7850;

function calcular() {
  const diam = parseFloat(document.getElementById("diametro").value);
  const kg = parseFloat(document.getElementById("peso").value);
  const diam_m = diam / 1000;
  const peso_por_metro = (Math.PI * Math.pow(diam_m, 2) / 4) * rho;
  const metros = kg / peso_por_metro;
  const barras = metros / 12;

  document.getElementById("resultado").innerHTML = `
    <h2>✅ Resultado</h2>
    <p>Peso por metro: ${peso_por_metro.toFixed(2)} kg/m</p>
    <p>➡️ Equivale a <strong>${metros.toFixed(2)}</strong> metros lineales</p>
    <p>Barras: <strong>${barras.toFixed(2)}</strong> barras de 12m</p>
  `;
}
