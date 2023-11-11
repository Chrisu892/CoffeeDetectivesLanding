<template>
  <article class="testimonial">
    <div class="testimonial__thumbnail">
      <img class="testimonial__thumbnail-image" src="/images/chris.png" alt="" />
    </div>
    <div class="testimonial__content">
      <slot name="content" />
      <h3 class="testimonial__author">
        <slot name="author" />
      </h3>
      <div class="testimonial__position">
        <slot name="position" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .testimonial {
    display: grid;
    gap: $gutter-half;
    grid-template-columns: 1fr 3fr;
    margin-top: $gutter;
  }
  .testimonial__thumbnail {
    overflow: hidden;
  }
  .testimonial__thumbnail-image {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  .testimonial__content {
    background: $clr-white;
    display: flex;
    flex-direction: column;
    padding: $gutter;
  }
  .testimonial__author {
    line-height: 1;
    margin: 1rem 0 0;
  }
  .testimonial__position {
    margin: 0;
  }
</style>