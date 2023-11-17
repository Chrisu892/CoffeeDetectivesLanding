<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { PhGithubLogo } from '@phosphor-icons/vue'

  defineComponent({
    components: {
      PhGithubLogo
    }
  })
</script>

<template>
  <nav id="nav" class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <AppSocialButton to="https://github.com/Chrisu892/CoffeeDetectives2" title="View on GitHub">
          <PhGithubLogo />
        </AppSocialButton>
      </li>
      <li class="nav__item">
        <AppButton class="button--solid" to="#subscribe" title="Sign up to our mailing list">
          Subscribe
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
    gap: 1.5rem;
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
  .nav--rev .social {
    border-color: $clr-primary;
    color: $clr-primary;
  }
</style>