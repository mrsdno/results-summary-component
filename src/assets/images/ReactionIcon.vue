<template>
  <svg class="my-svg-component">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 20 20">
      <path
        stroke="#F55"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
      />
    </svg>
  </svg>
</template>

<script>
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
