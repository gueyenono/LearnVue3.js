<template>
  <div class="card">
    <div class="card--header">
      <slot name="header"></slot>
    </div>
    <div class="card--content">
      <slot name="content"></slot>
    </div>
    <div class="card--footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style scoped>
.card {
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #eee;
}

.card--header {
  background: #eee;
  font-size: 20px;
}

.card--content {
  padding: 20px 10px;
}

.card--footer {
  background: #eee;
  font-size: 10px;
}
</style>
