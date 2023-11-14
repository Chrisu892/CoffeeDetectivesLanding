<template>
  <div class="cta">
    <slot name="image" />
    <div class="cta__actions">
      <AppButton to="gallery">View Gallery</AppButton>
      <AppButton to="#newsletter">Request Demo</AppButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cta__actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: $gutter-half;
  }
</style>