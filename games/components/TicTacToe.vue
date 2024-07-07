<template>
  <div>
    <div v-if="!player">
      <button @click="randomNumber">roll dice</button> to see who plays first
    </div>

    <p class="label">
      Current Player: <span>{{ player }}</span> plays
      <span> {{ currentPlayer }} </span>
    </p>
    <div class="board">
      <div class="row" v-for="(row, rowIndex) of board" :key="rowIndex">
        <div
          class="cell"
          v-for="(cell, cellIndex) of row"
          :key="cellIndex"
          :class="{ 'cell-x': cell === 'X', 'cell-o': cell === 'O' }"
          :disabled="cell !== null"
          @click="play(rowIndex, cellIndex)"
        >
          {{ cell }}
        </div>
      </div>
    </div>

    <div class="control">
      <p v-if="winner" class="label">{{ winner }} wins!</p>
      <p v-else-if="isTie" class="label">It's a tie!</p>
      <div>
        <button @click="undo">Undo</button>
        <button @click="reset">Reset Game</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const winner = ref<string | null>(null);
const isTie = ref(false);
const gameOver = ref(false);
const currentPlayer = ref("X");
const player = ref<string | null>(null);
const undoStack = reactive<number[][]>([]);

let board = reactive([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const randomNumber = () => {
  const random = Math.round(Math.random());
  player.value = random === 0 ? "player 1" : "player 2";
};

const checkTie = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!board[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const checkWin = () => {
  const a = currentPlayer.value;

  for (let i = 0; i < 3; i++) {
    if (board[i].every((cell) => cell === a)) return true;
    if (board.every((row) => row[i] === a)) return true;
  }

  if (board[0][0] === a && board[1][1] === a && board[2][2] === a) return true;
  if (board[0][2] === a && board[1][1] === a && board[2][0] === a) return true;

  return false;
};

const undo = () => {
  if (winner.value) {
    return;
  }
  if (undoStack.length === 0) {
    return;
  }
  const lastItem = undoStack.length - 1;
  const [row, col] = undoStack[lastItem];
  board[row][col] = "";
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
  player.value = player.value === "player 1" ? "player 2" : "player 1";
  undoStack.splice(lastItem, 1);
};

const play = (row: number, col: number) => {
  if (!player.value) {
    return;
  }

  if (!board[row][col] && !winner.value) {
    undoStack.push([row, col]);
    board[row][col] = currentPlayer.value;
    if (checkWin()) {
      winner.value = `${currentPlayer.value} by ${player.value}`;
    } else if (checkTie()) {
      isTie.value = true;
    } else {
      currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
      player.value = player.value === "player 1" ? "player 2" : "player 1";
    }
  }
};

const reset = () => {
  winner.value = null;
  currentPlayer.value = "X";
  gameOver.value = false;
  player.value = null;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};
</script>

<style scoped>
.board {
  width: 309px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cell {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 3px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 40px;
  background-color: #48cae4;
}

.cell:hover {
  opacity: 70%;
}

.cell-x {
  color: #03045e;
}

.cell-o {
  color: #fca311;
}

.label {
  font-size: 20px;
  font-weight: 600;
}
button {
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  background-color: #0096c7;
  color: #ffffff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-right: 6px;
}
</style>
