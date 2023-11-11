<template>
  <nav id="nav" class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink class="nav__link" to="#mission" title="Read our mission statement">
          Our Mission
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" to="#perspectives" title="Find out what people said">
          Perspectives
        </NuxtLink>
      </li>
      <li class="nav__item">
        <AppButton class="button--solid" to="#subscribe" title="Sign up to our mailing list">
          Sign up
        </AppButton>
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
  .nav__item {

  }
  .nav__link {
    color: $clr-white;
    display: block;
    line-height: 1;
    padding: 0.125rem;
  }
</style>