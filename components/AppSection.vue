<template>
  <section class="section">
    <AppInner>
      <slot />
    </AppInner>
  </section>
</template>

<style scoped lang="scss">
  .section {
    background-color: $clr-white;
    padding: $gutter 0;
    position: relative;
    z-index: 1;

    &--shade {
      background-color: $clr-shade;
    }
  }
</style>