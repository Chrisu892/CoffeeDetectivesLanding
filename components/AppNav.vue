<template>
  <nav id="nav" class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <AppButton class="button--solid" to="#subscribe" title="Sign up to our mailing list">Get Notified</AppButton>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  .nav__list {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: $gutter;
    justify-content: flex-end;
  }
  .nav__link {
    color: $clr-white;
    display: block;
    line-height: 1;
    padding: 0.125rem;
    transition: color 350ms ease-in-out;
  }
  .nav--rev .nav__link {
    color: $clr-primary;
  }
  .nav--rev .button--solid {
    background-color: $clr-primary;
    color: $clr-white;
  }
</style>