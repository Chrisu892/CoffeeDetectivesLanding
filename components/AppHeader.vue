<template>
  <header id="header" class="header">
    <div class="inner header__container">
      <AppLogo />
      <AppNav />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    left: 0;
    padding: $gutter-half 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .header__container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: $gutter-half;
    justify-content: space-between;
  }
</style>