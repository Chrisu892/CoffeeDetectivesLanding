<template>
  <section class="section">
    <slot />
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
    &--gradient {
      background: linear-gradient(180deg, $clr-shade, $clr-white);
    }
    &--sunburst {
      background: url('/images/wintery-sunburst.svg') center center/cover no-repeat;
    }
    &--primary {
      background: linear-gradient(135deg, lighten($clr-primary, 5%), $clr-primary);
    }
    &--pattern {
      @include rounded-plus-connected;
    }
  }
</style>