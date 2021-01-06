import Vue from 'vue';
import Router from 'vue-router';

import WeightScale from '~/components/ListDataComponent';
import HomePage from '~/pages/HomePage';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/weight-scale',
            component: WeightScale
        },
    ]
  });
}
