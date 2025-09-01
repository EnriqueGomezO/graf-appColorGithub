// Sliders
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

// Inputs numéricos
const inputRojo = document.getElementById("inputRojo");
const inputVerde = document.getElementById("inputVerde");
const inputAzul = document.getElementById("inputAzul");

// Recuadro, HEX y Picker
const recuadroColor = document.getElementById("recuadroColor");
const codigoHex = document.getElementById("codigoHex");
const picker = document.getElementById("picker");

// Función HEX → RGB
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  return {r, g, b};
}

// Función actualizar color
function actualizarColor(r, g, b) {
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  rojo.value = r;
  verde.value = g;
  azul.value = b;

  inputRojo.value = r;
  inputVerde.value = g;
  inputAzul.value = b;

  const colorRGB = `rgb(${r}, ${g}, ${b})`;
  recuadroColor.style.backgroundColor = colorRGB;

  const hex = "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  codigoHex.textContent = hex.toUpperCase();
  picker.value = hex.toUpperCase();
}

// Eventos
rojo.addEventListener("input", () => actualizarColor(+rojo.value, +verde.value, +azul.value));
verde.addEventListener("input", () => actualizarColor(+rojo.value, +verde.value, +azul.value));
azul.addEventListener("input", () => actualizarColor(+rojo.value, +verde.value, +azul.value));

inputRojo.addEventListener("input", () => actualizarColor(+inputRojo.value, +inputVerde.value, +inputAzul.value));
inputVerde.addEventListener("input", () => actualizarColor(+inputRojo.value, +inputVerde.value, +inputAzul.value));
inputAzul.addEventListener("input", () => actualizarColor(+inputRojo.value, +inputVerde.value, +inputAzul.value));

picker.addEventListener("input", () => {
  const {r, g, b} = hexToRgb(picker.value);
  actualizarColor(r, g, b);
});

// Inicializar
actualizarColor(0, 0, 0);

