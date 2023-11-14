<template>
  <form class="subscribe" action="https://gmail.us21.list-manage.com/subscribe/post?u=8d7d1e6fe84034f5404fe4bb5&amp;id=afde9e519a&amp;f_id=00f1e9e6f0" method="post">
    <div class="subscribe__field subscribe__field--hidden" aria-hidden="true">
      <input type="text" name="b_8d7d1e6fe84034f5404fe4bb5_afde9e519a" tabindex="-1" value="" />
    </div>
    <div class="subscribe__field">
      <input class="subscribe__field__input" id="email" type="email" name="EMAIL" required placeholder="Enter your email..." />
      <button class="subscribe__field__button" type="submit" name="subscribe">
        Subscribe
      </button>
    </div>
    <div class="subscribe__note">We use <a href="http://eepurl.com/iDVweE" title="Open in new tab" target="_blank">MailChimp</a> as our newsletter provider. You can unsubscribe at any time.</div>
  </form>
</template>

<style scoped lang="scss">
  .subscribe__field {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    max-width: 520px;
    margin: 0 auto;

    &--hidden {
      position: absolute;
      left: -1000px;
    }
  }
  .subscribe__field__input {
    border: solid 1px $clr-dark;
    border-radius: 15px;
    flex: 1 0;
    padding: 0.75rem 1rem;
    line-height: 1;
  }
  .subscribe__field__button {
    background-color: $clr-primary;
    border: 0;
    border-radius: 15px;
    color: $clr-secondary;
    padding: 0.5rem 1rem;
    line-height: 1;
    text-transform: uppercase;
  }
  .subscribe__note {
    @include font-small;
    margin-top: 1rem;
    text-align: center;
  }
</style>