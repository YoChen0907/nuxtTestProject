
<template>
  <div>
      <div id="fb-root">hihi</div>
      <!-- <iframe
        style="height: 140px; width: 100%; border: none; border-radius: 4px; box-shadow: 0 1px 8px rgba(0, 0, 0, .2);"
        src="https://player.soundon.fm/embed?podcast=5d485b3f-7d08-42de-8f0e-dd3496dcb5bc&episode=8e11d151-0c9f-4a75-b0c0-2001ec9ba1de">
      </iframe>
      <div class="fb-comments" @data-href="fullPath" data-numposts="5" data-width=""></div> -->
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
  jsonld() {
    return jsonld;
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
