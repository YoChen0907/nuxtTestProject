import Vue from 'vue';

// (function(d, s, id) {
//   let js = '';
//   const fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) { return; }
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/zh_TW/sdk.js';
//   fjs.parentNode.insertBefore(js, fjs);
//   Vue.use(FB);
// }(document, 'script', 'facebook-jssdk'));

const vueFb = {}
vueFb.install = function install(Vue, options) {
  console.log('install');
  (function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    const js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/zh_TW/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
    console.log('setting fb sdk')
  }(document, 'script', 'facebook-jssdk'))

  window.fbAsyncInit = function onSDKInit() {
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vueFb, {
  appId: '761351597756340',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v8.0'
})
