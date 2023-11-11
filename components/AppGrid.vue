<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .grid {
    display: grid;
    gap: $gutter-half;
    grid-template-columns: auto;
    grid-template-rows: auto;

    &--3 {
      grid-template-columns: repeat(3, 1fr);
    }
    &--4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>