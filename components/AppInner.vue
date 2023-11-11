<template>
  <div class="inner">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .inner {
    margin: 0 auto;
    max-width: 1420px;
    padding: 0 3rem;

    &--narrow {
      max-width: 1024px;
    }

    &--narrower {
      max-width: 768px;
    }
  }
</style>