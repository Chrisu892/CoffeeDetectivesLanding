<script setup lang="ts">
  import { PhCoffee, PhHeart, PhEnvelope, PhWhatsappLogo, PhGithubLogo, PhInstagramLogo } from '@phosphor-icons/vue'

  defineComponent({
    components: {
      PhCoffee,
      PhHeart,
      PhEnvelope,
      PhWhatsappLogo,
      PhGithubLogo,
      PhInstagramLogo,
    }
  })
</script>

<template>
  <footer id="footer" class="footer">
    <AppImage src="/images/coffee-beans.jpg" class="footer__background" />
    <div class="footer__overlay">
      <AppInner>
        <AppImage class="footer__logo" src="/images/coffeedetectives-logo--rev.png" />
        <div class="footer__upper">
          <div class="socials">
            <AppSocialButton name="Email" class="social--email" to="mailto:chris.prusakiewicz@gmail.com" title="Send email to Chris (open in new tab)" />
            <AppSocialButton name="WhatsApp" class="social--whatsapp" to="https://wa.me/+447446840237" title="Send a message on WhatsApp (open in new tab)" />
            <AppSocialButton name="Instagram" class="social--instagram" to="https://www.instagram.com/onesipcoffeereview" title="Follow Coffee Detectives (One Sip Coffee Review) on Instagram (opens in new tab)" />
            <AppSocialButton name="GitHub" class="social--github" to="https://github.com/Chrisu892/CoffeeDetectives2" title="Follow on GitHub (opens in new tab)" />
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
  .footer__logo {
    margin: 0 auto $gutter-half;
    max-width: 270px;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>