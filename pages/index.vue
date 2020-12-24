
<template>
  <div>
    <script v-html="jsonld" type="application/ld+json"></script>
      <div id="fb-root"></div>
      <iframe
        style="height: 140px; width: 100%; border: none; border-radius: 4px; box-shadow: 0 1px 8px rgba(0, 0, 0, .2);"
        src="https://player.soundon.fm/embed?podcast=5d485b3f-7d08-42de-8f0e-dd3496dcb5bc&episode=8e11d151-0c9f-4a75-b0c0-2001ec9ba1de">
      </iframe>
      <div class="fb-comments" @data-href="fullPath" data-numposts="5" data-width=""></div>
  </div>
</template>


<script>
import Vue from 'vue';
export default {
  data() {
    const jsonld = {
      '@type': 'PodcastSeries',
      webFeed: 'https://soundcloud.com/104senior/',
      image: require('~/assets/image/homePage/icon_logo.svg'),
      url: 'https://senior.104.com.tw/events/podcast/',
      name: '高年級不打烊',
      description: '聽人物、說工作。每個高年級朋友經歷職場上的退休，猶如一年四季的換季。退休後轉換了不同的心情和形式，經歷不一樣的人生和工作。主持人是賽桑，5年級2班，每一集會邀請不同的高年級朋友，分享他們的換季和退休經驗談。',
      author: { name: 'name' }
    }
    return {
      jsonld,
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
