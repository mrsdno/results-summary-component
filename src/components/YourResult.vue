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
.result-wrapper {
  background-color: purple;
  width: 250px;
  height: 350px;
}
</style>
