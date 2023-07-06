<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'YourResult.vue',
  data() {}
})
</script>

<template>
  <div class="result-wrapper">
    <div class="heading">Your Result</div>
    <div class="circle">
      <div class="number-score">76</div>
      of 100
    </div>
    <div class="word-score">Great</div>
    <div class="score-description">
      You scored higher than 65% of the people who have taken these tests.
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.scss';

.result-wrapper {
  background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 20px;
  .heading {
    text-align: center;
    color: $light-lavender;
    font-weight: 700;
  }
  .circle {
    text-align: center;
    color: $light-lavender;
    font-size: 12px;
    border-radius: 50%;
    background: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
    width: 140px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: hsla(241, 100%, 89%, 0.5);
    .number-score {
      font-size: 50px;
      color: $white;
      font-weight: 700;
    }
  }
  .word-score {
    color: $white;
    font-weight: 700;
    font-size: 20px;
  }
  .score-description {
    font-size: 12px;
    color: $light-lavender;
    text-align: center;
    width: 170px;
    line-height: 1.5;
  }
}
</style>
