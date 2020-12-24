
<template>
  <div>
      <div id="fb-root"></div>
      <p>test3</p>
      <p>{{ fullPath }}</p>
      <div class="fb-comments" @data-href="fullPath" data-numposts="5" data-width=""></div>
      <iframe
        style="height: 140px; width: 100%; border: none; border-radius: 4px; box-shadow: 0 1px 8px rgba(0, 0, 0, .2);"
        src="https://player.soundon.fm/embed?podcast=5d485b3f-7d08-42de-8f0e-dd3496dcb5bc&episode=8e11d151-0c9f-4a75-b0c0-2001ec9ba1de">
      </iframe>
  </div>
</template>


<script>
import Vue from 'vue';
export default {
  data() {
    return {
      fullPath: this.$route.fullPath
    }
  },
  updated() {
    const FB = Vue.FB;
    if (FB && FB.init) {
      FB.init({
        appId: '761351597756340',
        xfbml: true,
        version: 'v8.0'
      });
    }
  },
  head() {
    return {
      title: '',
      meta: [
                {
          property: 'fb:app_id',
          content: '761351597756340'
        },
        {
          property: 'og:url',
          content: 'URL'
        },
        {
          property: 'og:title',
          content: 'TITLE'
        },
        {
          property: 'og:description',
          content: 'DESC'
        },
        {
          property: 'og:image',
          content: 'IMG'
        },
        {
          property: 'fb:admins',
          content: '2047278791957536'
        }
      ]
    }
  },
}
</script>
