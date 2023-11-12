<template>
  <div class="testimonial">
    <div class="testimonial__thumbnail">
      <img class="testimonial__thumbnail-image" src="/images/chris.png" alt="" />
    </div>
    <div class="testimonial__content">
      <h2 class="testimonial__title"><slot name="title" /></h2>
      <slot name="content" />
      <div class="testimonial__author">
        <img class="testimonial__author__signature" src="/images/signature.png" />
        <p class="testimonial__author__name"><slot name="author" /></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .testimonial {
    background-color: $clr-shade;
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
  }
  .testimonial__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $gutter;
  }
  .testimonial__author {
    margin-top: $gutter-half;
  }
  .testimonial__author__signature {
    max-width: 220px;
  }
  .testimonial__author__name {
    margin: 0.5rem 0 0 0;
  }
</style>