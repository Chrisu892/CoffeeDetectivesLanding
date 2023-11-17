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
    display: inline-block;
    padding: 0.85rem 1.5rem 1.125rem;
    line-height: 1;
    text-transform: uppercase;
    transition: background-color 350ms ease-in-out, color 350ms ease-in-out;

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