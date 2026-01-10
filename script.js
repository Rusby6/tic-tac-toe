const tictac = document.getElementById("tic-tac-toe-board");
const numFil = 3;
const numCol = 3;
let turnoX = true;
let juegoActivo = true;

for (let fila = 0; fila < numFil; fila++) {
  const row = document.createElement("div");
  row.className = "row";
  tictac.appendChild(row);
  
  for (let celda = 0; celda < numCol; celda++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = fila * 3 + celda;
    row.appendChild(cell);

    cell.addEventListener("click", (e) => {
      if (!juegoActivo) return;
      
      if (!e.target.textContent) {
        if (turnoX) {
          e.target.textContent = "X";
        } else {
          e.target.textContent = "O";
        }
        
        // Verificar si hay ganador después de cada jugada
        const ganador = verificarGanador();
        if (ganador) {
          juegoActivo = false;
          const mensaje = document.getElementById("gameMessage");
          mensaje.textContent = `¡Jugador ${ganador} ha ganado!`;
        } else if (esEmpate()) {
          juegoActivo = false;
          const mensaje = document.getElementById("gameMessage");
          mensaje.textContent = "¡Empate!";
        } else {
          // Cambiar turno si el juego sigue activo
          turnoX = !turnoX;
          actualizarTurno();
        }
      }
    });
  }
}

// Función para verificar si hay un ganador
function verificarGanador() {
  const celdas = document.querySelectorAll(".cell");
  
  // Convertir NodeList a array de valores
  const valores = Array.from(celdas).map(cell => cell.textContent);
  
  // Combinaciones ganadoras
  const combinaciones = [
    // Filas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columnas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonales
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  // Verificar cada combinación
  for (const comb of combinaciones) {
    const [a, b, c] = comb;
    if (valores[a] && valores[a] === valores[b] && valores[a] === valores[c]) {
      return valores[a];
    }
  }
  
  return null;
}

// Verificar empate
function esEmpate() {
  const celdas = document.querySelectorAll(".cell");
  return Array.from(celdas).every(cell => cell.textContent !== "");
}

// Actualizar el mensaje de turno
function actualizarTurno() {
  const mensaje = document.getElementById("gameMessage");
  if (juegoActivo) {
    mensaje.textContent = `Turno del jugador: ${turnoX ? 'X' : 'O'}`;
  }
}

function resaltarCeldasGanadoras(celdasGanadoras) {
  celdasGanadoras.forEach(cell => {
    cell.style.backgroundColor = '#90EE90'; 
    cell.style.color = '#000';
  });
}

// RESET
const btnReset = document.getElementById("resetButton");
btnReset.addEventListener('click', reset);

function reset() {
  const celdas = document.querySelectorAll(".cell");
  
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = "";
    celdas[i].style.backgroundColor = ''; // Resetear color
    celdas[i].style.color = ''; // Resetear color del texto
  }
  
  juegoActivo = true;
  turnoX = true;
  actualizarTurno();
}

// Inicializar mensaje de turno al cargar
actualizarTurno();