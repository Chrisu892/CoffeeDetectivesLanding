<template>
  <NuxtLink class="button" to="">
    <span class="button__inner"><slot /></span>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .button {
    background-color: $clr-primary;
    border: 0;
    border-radius: 15px;
    color: $clr-secondary;
    display: inline-block;
    overflow: hidden;
    padding: 1rem 1.5rem 1.125rem;
    position: relative;
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

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $clr-secondary;
      transform: translateY(100%);
      transition: transform 250ms ease-in-out;
    }

    &:hover::before {
      transform: translateY(0);
    }
  }
  .button__inner {
    line-height: 1;
    position: relative;
    z-index: 1;
  }
</style>