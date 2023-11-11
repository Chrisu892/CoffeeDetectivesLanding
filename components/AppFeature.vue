<template>
  <div class="feature">
    <h2 class="feature__title">
      <slot name="title" />
    </h2>
    <p class="feature__tagline">
      <slot name="tagline" />
    </p>
  </div>
</template>

<style scoped lang="scss">
  .feature {
    margin: 0 auto $gutter;
    max-width: 820px;

    &--center {
      text-align: center;
    }
  }
</style>