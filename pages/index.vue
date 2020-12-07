
<template>
  <div>
    <client-only>
      <div id="fb-root"></div>
      <div class="fb-comments" data-href="http://localhost:3000/" data-numposts="5" data-width=""></div>
      </client-only>
  </div>
</template>


<script>
import Vue from 'vue';
export default {
  data() {
    return {
      post: []
    }
  },
  mounted() {
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '761351597756340',
      xfbml      : true,
      version    : 'v8.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
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
