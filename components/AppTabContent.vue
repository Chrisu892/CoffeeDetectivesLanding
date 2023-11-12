<template>
  <div class="tab-content">
    <slot name="content" />
  </div>
</template>

<style scoped lang="scss">
  .tab-content {
    display: none;

    &--active {
      display: block;
    }
  }
</style>