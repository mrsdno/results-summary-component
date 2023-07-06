<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Summary.vue',
  data() {}
})
</script>

<template>
  <div class="summary-wrapper">
    <div class="heading">Summary</div>
    <div class="score-section">
      <div class="sub-heading">Reaction</div>
      <div class="score-detail"><span>80</span>/ 100</div>
    </div>
    <div class="score-section">
      <div class="sub-heading">Memory</div>
      <div class="score-detail"><span>92</span>/ 100</div>
    </div>
    <div class="score-section">
      <div class="sub-heading">Verbal</div>
      <div class="score-detail"><span>61</span>/ 100</div>
    </div>
    <div class="score-section">
      <div class="sub-heading">Visual</div>
      <div class="score-detail"><span>72</span>/ 100</div>
    </div>
    <button>Continue</button>
  </div>
</template>

<style lang="scss">
.summary-wrapper {
  background-color: cyan;
  width: 250px;
  height: 350px;
}
</style>
