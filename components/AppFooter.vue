<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { PhCoffee, PhHeart, PhEnvelope, PhWhatsappLogo, PhGithubLogo } from '@phosphor-icons/vue'

  defineComponent({
    components: {
      PhCoffee,
      PhHeart,
      PhEnvelope,
      PhWhatsappLogo,
      PhGithubLogo,
    }
  })
</script>

<template>
  <footer id="footer" class="footer">
    <AppImage src="/images/coffee-beans.jpg" class="footer__background" />
    <div class="footer__overlay">
      <AppInner>
        <div class="footer__upper">
          <div class="socials">
            <a class="social-icon" href="mailto:chris.prusakiewicz@gmail.com" title="Send email to Chris" target="_blank"><PhEnvelope /></a>
            <a class="social-icon" href="https://wa.me/+447446840237" title="Send a message on Whatsapp (opens in new tab)" target="_blank"><PhWhatsappLogo /></a>
            <a class="social-icon" href="https://github.com/Chrisu892/CoffeeDetectives2" title="Follow on Github (opens in new tab)" target="_blank"><PhGithubLogo /></a>
          </div>
        </div>
        <div class="footer__middle">
          Created with lots of <PhHeart weight="fill" /> and way to much <PhCoffee weight="fill" /> by <a href="https://www.chrisprusakiewicz.com/" title="Visit author's website (opens in new tab)" target="_blank">Chris Prusakiewicz</a>
        </div>
        <div class="footer__lower">
          &copy; 2023 Coffee Detectives. Photography provided by <a href="https://www.unsplash.com" title="Visit Unsplash - a free photography for everyone (open in new tab)" target="_blank">Unsplash</a>. Icons provided by <a href="https://phosphoricons.com/" title="Visit Phosphor - a flexible icon family (open in new tab)" target="_blank">Phosphor</a>.
        </div>
      </AppInner>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    background-color: $clr-primary;
    color: $clr-white;
    position: relative;
    text-align: center;
    z-index: 1;
  }
  .footer__upper {
    line-height: 1;
  }
  .footer__middle {
    margin: $gutter-half 0;

    svg {
      transform: translateY(3px);
    }
  }
  .footer__lower {
    @include font-small;
  }
  .footer__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer__overlay {
    background: linear-gradient(180deg, $clr-primary 0%, rgba($clr-primary, 0.65) 100%);
    padding: $gutter 0;
    position: relative;
    z-index: 1;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .social-icon {
    align-items: center;
    background-color: $clr-secondary;
    border-radius: 100%;
    color: $clr-primary;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    width: 44px;

    svg {
      height: 24px;
      width: 24px;
    }
  }
</style>