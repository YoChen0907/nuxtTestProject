
<template>
  <div>
      <div id="fb-root">hihi</div>
      <iframe
        style="height: 140px; width: 100%; border: none; border-radius: 4px; box-shadow: 0 1px 8px rgba(0, 0, 0, .2);"
        src="https://player.soundon.fm/embed?podcast=5d485b3f-7d08-42de-8f0e-dd3496dcb5bc&episode=8e11d151-0c9f-4a75-b0c0-2001ec9ba1de">
      </iframe>
      <div class="fb-comments" @data-href="fullPath" data-numposts="5" data-width=""></div>
      <button @click="buttonMethod">go path one</button>
  </div>
</template>


<script>
import Vue from 'vue';
import jsonld from '~/static/jsonld.json';

export default {
  data() {
    return ({
      jsonld,
      fullPath: this.$route.fullPath,
      breadcrumbs: [
        {
          url: 'https://example.com',
          text: 'top page',
        },
        {
          url: 'https://example.com/foo',
          text: 'foo',
        },
        {
          url: 'https://example.com/foo/bar',
          text: 'bar',
        },
      ],
    })
  },
  computed: {
    pageCheck: function pageCheck () {
      return this.$route.query.ep ? `${this.$route.query.ep}` : 'index'
    },
  },
  jsonld() {
    const json = jsonld[pageCheck];
    console.log('jsonld', json);
    return json;
  },
  head() {
    return {
      title: '104高年級  - 高年級不打烊RRRRRR',
      meta: [
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '126015758212962'
        },
        {
          hid: 'title',
          property: 'og:title',
          content: '高年級不打烊RRRRRR'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('~/assets/image/homePage/icon_logo.svg')
        },
        {
          name: 'title',
          content: '高年級不打烊RRRRRR'
        },
        {
          name: 'keywords',
          content: '104高年級,退休,podcast,高年級不打烊'
        },
        {
          name: 'description',
          content: '聽人物、說工作。每個高年級朋友經歷職場上的退休，猶如一年四季的換季。退休後轉換了不同的心情和形式，經歷不一樣的人生和工作。主持人是賽桑，5年級2班，每一集會邀請不同的高年級朋友，分享他們的換季和退休經驗談。'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '聽人物、說工作。每個高年級朋友經歷職場上的退休，猶如一年四季的換季。退休後轉換了不同的心情和形式，經歷不一樣的人生和工作。主持人是賽桑，5年級2班，每一集會邀請不同的高年級朋友，分享他們的換季和退休經驗談。'
        },
        {
          hid: 'og:keywords',
          property: 'og:keywords',
          content:
            '104高年級,退休,podcast,高年級不打烊'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  methods: {
    buttonMethod: function() {
      this.$router.push(`/events/podcast/?ep=${podcastData.id}`);
    }
  }
}
</script>
