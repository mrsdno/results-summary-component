<template>
  <svg class="my-svg-component">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 20 20">
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
      />
    </svg>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'memory'
}
</script>

<style scoped>
.my-svg-component {
  width: 14px;
  height: 14px;
  margin-right: 8px;
}
</style>
