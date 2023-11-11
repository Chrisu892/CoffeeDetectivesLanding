<script lang="ts">
  export default defineComponent({
    props: {
      content: {
        type: String,
        required: true,
      }
    }
  })
</script>

<template>
  <div class="tab-content">{{ content }}</div>
</template>

<style scoped lang="scss">
  .tab-content {
    display: none;

    &--active {
      display: block;
    }
  }
</style>