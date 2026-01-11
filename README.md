# ❌⭕ Tic-Tac-Toe Game
Juego web desarrollado como proyecto de práctica para reforzar
conceptos de HTML, CSS y JavaScript puro, sin uso de frameworks.

El clásico juego de tres en raya (Tic-Tac-Toe) implementado para dos jugadores
con interfaz visual atractiva y lógica de juego completa.


## ✅ Características
- Juego para dos jugadores: Turnos alternos entre X y O
- Detección automática de ganador: Verifica 8 combinaciones ganadoras posibles
- Detección de empate: Cuando todas las celdas están ocupadas sin ganador
- Interfaz visual clara
- Indicador de turno actual
- Mensajes de resultado (ganador/empate)
- Sistema de reinicio: Botón para comenzar una nueva partida
- Botón "Reset Game" que permite reiniciar el juego
  
## 🎮 Combinaciones ganadoras
El juego verifica automáticamente las 8 posibles combinaciones:

- 3 filas horizontales
- 3 columnas verticales
- 2 diagonales
  
## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3 (Grid, Flexbox, gradientes)
- JavaScript (ES6)

## 📋 Uso
- El jugador X comienza la partida
- Haz clic en cualquier celda vacía para colocar tu símbolo
- Los jugadores alternan turnos (X, O, X, O...)
- El juego termina cuando:
  - Un jugador consigue 3 símbolos en línea (horizontal, vertical o diagonal)
  - Todas las celdas están ocupadas (empate)
- Usa el botón "Reset Game" para comenzar una nueva partida

## 📁 Estructura del proyecto
```text
tic-tac-toe/
├── index.html   # Estructura principal del juego
├── style.css    # Estilos y diseño visual
├── script.js    # Lógica del juego
└── README.md    # Documentación
```

## 🔧 Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/Rusby6/tic-tac-toe
```
2. Accede al directorio del proyecto:

```bash
cd tic-tac-toe
```
3. Abre el archivo index.html en tu navegador.
