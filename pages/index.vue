
<template>
  <div>
      <div id="fb-root"></div>
      <p>test</p>
      <p>{{ fullPath }}</p>
      <div class="fb-comments" @data-href="fullPath" data-numposts="5" data-width=""></div>
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
