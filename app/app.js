import Vue from 'nativescript-vue'

import Home from './Home'
import store from './store/index'

new Vue({
    store,
    render: (h) => h('frame', [h(Home)]),
}).$start()