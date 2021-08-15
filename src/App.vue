<template>
  <!-- <p>FOX GAME v2.0 (vue2)</p> -->
  <div class="container">
    <button @click="count.value++">{{ count.value }}</button>
    <div class="inner">
      <div class="game day"></div>
      <div class="fox hidden"></div>
      <div class="poop-bag hidden"></div>
      <div class="foreground-rain"></div>
      <div class="frame"></div>
      <div class="modal">
        <div class="modal-inner">Press the middle button to start</div>
      </div>
      <div class="buttons">
        <div class="btn left-btn"></div>
        <div class="btn middle-btn"></div>
        <div class="btn right-btn"></div>
      </div>
      <div class="icons">
        <div class="icon highlighted fish-icon"></div>
        <div class="icon poop-icon"></div>
        <div class="icon weather-icon"></div>
      </div>
    </div>
    <button @click="decreamentCount">{{ count.value }}</button>
  </div>
</template>late>

<script>
import gameState, { handleUserAction } from "./gameState.js";
import { TICK_RATE } from "./constants.js";
import initButtons from "./buttons.js";

import { ref } from '@vue/composition-api'
export default {
  name: "App",
  data() {
    return {
      nextTimeToTick: Date,
      count: ref(10),
      decreamentCount: () => {
        this.count.value--
      }
    };
  },
  created() {
    this.nextTimeToTick = Date.now();
  },
  mounted() {

    this.init();
  },
  methods: {
    async init() {
      console.log("starting game");
      initButtons(handleUserAction);
      requestAnimationFrame(this.nextAnimationFrame);
    },
    async nextAnimationFrame() {
      const now = Date.now();

      if (this.nextTimeToTick <= now) {
        gameState.tick();
        this.nextTimeToTick = now + TICK_RATE;
      }
      requestAnimationFrame(this.nextAnimationFrame);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style>
@import url("./assets/sprites.css");
@import url("./assets/style.css");
</style>
