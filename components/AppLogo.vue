<template>
  <NuxtLink to="/" title="Click for homepage" class="logo">
    <AppImage class="logo__variant1" src="/images/coffeedetectives-logo--rev.png" />
    <AppImage class="logo__variant2" src="/images/coffeedetectives-logo.png" />
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
  }
  .logo__variant1 {
    display: block;
  }
  .logo__variant2 {
    display: none;
  }
  .logo--rev .logo__variant1 {
    display: none;
  }
  .logo--rev .logo__variant2 {
    display: block;
  }
</style>