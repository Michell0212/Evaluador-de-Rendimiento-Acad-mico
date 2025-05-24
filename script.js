// Notas del parcial
let parcial1 = 12;
let parcial2 = 15;
let proyectoFinal = 18;

// Calculo Nota Final
let notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (proyectoFinal * 0.4);

// Generar mensaje según resultado
let mensaje = `Nota final: ${notaFinal.toFixed(2)}<br>`;

if (notaFinal >= 14) {
  mensaje += `<span class="aprobado">Resultado: Aprobado directamente.</span>`;
} else if (notaFinal >= 10 && notaFinal < 14) {
  mensaje += `<span class="recuperacion">Resultado: Va a recuperación.</span>`;
} else {
  mensaje += `<span class="reprobado">Resultado: Pierde la materia.</span>`;
}

// Mostrar en la página
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = mensaje;
