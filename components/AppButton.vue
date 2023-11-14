<template>
  <NuxtLink class="button" to="">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
  .button {
    background-color: $clr-primary;
    border: 0;
    border-radius: 15px;
    color: $clr-secondary;
    padding: 0.85rem 1.5rem 1.125rem;
    line-height: 1;
    text-transform: uppercase;

    &--solid {
      background-color: $clr-white;
      border-color: $clr-white;
      color: $clr-primary;
    }

    &--alt {
      border-color: $clr-white;
      color: $clr-white;
    }
  }
</style>