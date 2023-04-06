<template>
  <div class="content">
    <p class="text">{{ displayText }}</p>
  </div>
</template>
<script>
export default {
  props: {
    displayText: {
      type: String,
      default: 'No content to display'
    }
  }
}
</script>
<style scoped>
.text {
  font-weight: 700;
  font-size: 18px;
}
</style>
