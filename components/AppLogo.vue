<template>
  <NuxtLink to="/" title="Click for homepage" class="logo">
    Coffee Detectives
  </NuxtLink>
</template>

<style scoped lang="scss">
  .logo {
    @include font-large;
    display: block;
    font-family: $font-cursive;
    line-height: 1;
    padding: 0.125rem;
    transition: color 350ms ease-in-out;

    &--rev {
      color: $clr-primary;
    }
  }
</style>