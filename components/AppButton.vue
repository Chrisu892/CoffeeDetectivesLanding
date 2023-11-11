<template>
  <NuxtLink class="button" to="">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
  .button {
    border: solid 2px $clr-primary;
    border-radius: 20px;
    color: $clr-primary;
    display: inline-flex;
    font-weight: $bold-weight;
    letter-spacing: 1px;
    line-height: 1;
    padding: 1.125rem 2.425rem 1.25rem;
    text-transform: uppercase;

    &--solid {
      background-color: $clr-white;
      border-color: $clr-white;
      color: $clr-primary;
    }
  }
</style>