<template>
  <div class="form">
    <label for="guessField">Enter a guess: </label>
    <input
      type="number"
      min="1"
      max="100"
      required
      ref="guessFieldRef"
      class="guessField"
      v-model="guessField"
      :disabled="guessFieldDisabled"
    />
    <input
      type="submit"
      @click="checkGuess"
      value="Submit guess"
      class="guessSubmit"
      :disabled="guessSubmitDisabled"
    />
  </div>

  <div class="resultParas">
    <p class="guesses">{{ guesses }}</p>
    <p
      class="lastResult"
      v-if="lastResult"
      :style="{ backgroundColor: lastResultBackgroundColor }"
    >
      {{ lastResult }}
    </p>
    <p class="lowOrHi">{{ lowOrHi }}</p>
  </div>

  <button v-if="gameOver" class="resetGame" @click="resetGame">
    Start new game
  </button>
</template>

<script setup>
import { ref } from "vue";

let gameOver = ref(false);
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessFieldDisabled = ref(false);
let guessSubmitDisabled = ref(false);

let guessField = ref("");
let guessFieldRef = ref(null);

function setGameOver() {
  guessFieldDisabled.value = true;
  guessSubmitDisabled.value = true;
  gameOver.value = true;
}

let guessCount = 1;

let guesses = ref("");
let lastResult = ref("");
let lowOrHi = ref("");

let lastResultBackgroundColor = ref("");

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.value = "Previous guesses:";
  }

  guesses.value = `${guesses.value} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.value = "Congratulations! You got it right!";
    lastResultBackgroundColor.value = "green";
    lowOrHi.value = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.value = "!!!GAME OVER!!!";
    lowOrHi.value = "";
    setGameOver();
  } else {
    lastResult.value = "Wrong!";
    lastResultBackgroundColor.value = "red";
    if (userGuess < randomNumber) {
      lowOrHi.value = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.value = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessFieldRef.value.focus();
}

function resetGame() {
  gameOver.value = false;
  guessCount = 1;

  guesses.value = "";
  lastResult.value = "";
  lowOrHi.value = "";

  guessFieldDisabled.value = false;
  guessSubmitDisabled.value = false;
  guessField.value = "";
  guessFieldRef.value.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
</script>

<style scoped>
.form input[type="number"] {
  width: 200px;
}

.guessField,
.guessSubmit,
.resetGame {
  border: 1px solid black;
  margin: 2px;
  padding: 0 2px;
}

:root.dark .guessField,
:root.dark .guessSubmit,
:root.dark .resetGame {
  border: 1px solid white;
}

.lastResult {
  color: white;
  padding: 3px;
}
</style>
