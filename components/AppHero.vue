<script lang="ts">
  import { PhCaretDown } from '@phosphor-icons/vue'

  export default defineComponent({
    components: {
      PhCaretDown,
    }
  })
</script>

<template>
  <div class="video">
    <video class="video__source" preload="true" muted autoplay loop playsinline poster="/video/poster.jpg">
      <source src="/video/hero-video.webm" type="video/webm" />
      <source src="/video/hero-video.mp4" type="video/mp4" />
      Your web browser does not support video tag. Please consider upgrading your web browser.
    </video>
    <section id="hero" class="hero">
      <div class="hero__overlay">
        <AppInner>
          <div class="hero__content">
            <h1 class="hero__title"><slot name="title" /></h1>
            <p class="hero__tagline"><slot name="tagline" /></p>
            <div class="hero__actions">
              <a href="#problem" class="hero__scroller" title="Learn more about Coffee Detectives">
                <PhCaretDown />
              </a>
            </div>
          </div>
        </AppInner>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .video {
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .video__source {
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 2;

    @media (max-width: 768px) {
      position: absolute;
    }
  }
  .hero {
    position: relative;
    z-index: 3;
  }
  .hero__overlay {
    align-items: center;
    background: linear-gradient(180deg, rgba($clr-primary,0.5) 50%, rgba($clr-primary, 1) 100%);
    display: flex;
    height: 100vh;
    position: relative;
    z-index: 3;
  }
  .hero__content {
    color: #fff;
    margin: 0 auto;
    max-width: 1024px;
    padding-top: $gutter;
    text-align: center;
  }
  .hero__title {
    @include font-regular;
    font: $font-body;
  }
  .hero__tagline {
    font: $font-header;
    @include font-xxxl;
    margin: 1.25rem 0 0;
  }
  .hero__actions {
    margin-top: 1.75rem;
  }
  .hero__scroller {
    align-items: center;
    border: solid 1px $clr-secondary;
    border-radius: 100%;
    display: inline-flex;
    height: 54px;
    justify-content: center;
    width: 54px;
    transition: transform 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>