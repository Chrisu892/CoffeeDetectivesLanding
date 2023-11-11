<template>
  <article class="portal-listing">
    <div class="portal-listing__overlay">
      <div class="portal-listing__stat">
        <slot name="stat" />
      </div>
      <p class=portal-listing__blurb>
        <slot name="blurb"></slot>
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .portal-listing {
    background-color: $clr-shade;
    padding-top: 75%;
    position: relative;

    &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    &:nth-child(2) {
      grid-column: 3/4;
      grid-row: 1/3;
    }
    &:nth-child(3) {
      grid-column: 4/5;
      grid-row: 1/2;
    }
    &:nth-child(4) {
      grid-column: 4/5;
      grid-row: 2/3;
    }
  }

  .portal-listing__overlay {
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 0;
    padding: $gutter-half;
    position: absolute;
    right: 0;
    top: 0;
  }
  .portal-listing__stat {
    @include font-xxxl;
    font-weight: $bold-weight;
    line-height: 1;
  }
  .portal-listing__blurb {
    margin-top: 0.5rem;
    max-width: 380px;
  }
  .portal-listing:nth-child(1) .portal-listing__blurb {
    @include font-large;
  }
  .portal-listing:nth-child(2) .portal-listing__blurb {
    @include font-medium;
  }
</style>