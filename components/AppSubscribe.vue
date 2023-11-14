<template>
  <form class="subscribe" action="https://gmail.us21.list-manage.com/subscribe/post?u=8d7d1e6fe84034f5404fe4bb5&amp;id=afde9e519a&amp;f_id=00f1e9e6f0" method="post">
    <AppFeature class="feature--center">
      <template #title>Join our mailing list</template>
      <template #tagline>Add your email address to our mailing list and get notified about the latest news and updates from Coffee Detectives. Be the first to hear about the new features, beta access and more.</template>
    </AppFeature>

    <div class="field" aria-hidden="true">
      <input type="text" name="b_8d7d1e6fe84034f5404fe4bb5_afde9e519a" tabindex="-1" value="" />
    </div>

    <div class="subscribe__field">
      <input class="subscribe__field__input" id="email" type="email" name="EMAIL" required placeholder="Enter your email..." />
      <button class="subscribe__field__button" type="submit" name="subscribe">
        Subscribe
      </button>
    </div>
  </form>

  <!-- <div id="mc_embed_shell">
    <div id="mc_embed_signup">
      <form action="https://gmail.us21.list-manage.com/subscribe/post?u=8d7d1e6fe84034f5404fe4bb5&amp;id=afde9e519a&amp;f_id=00f1e9e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <h2>Join our mailing list</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" />
            <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
          </div>
          <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
          <div aria-hidden="true" style="position: absolute; left: -5000px;">
            /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
            <input type="text" name="b_8d7d1e6fe84034f5404fe4bb5_afde9e519a" tabindex="-1" value="" />
          </div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                  <p style="margin: 0px auto;">
                    <a href="http://eepurl.com/iDVweE" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a>
                  </p>
              </div>
          </div>
        </div>
      </form>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
  .field {
    position: absolute;
    left: -1000px;
  }

  .subscribe__field {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    max-width: 420px;
    margin: 0 auto;
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
</style>