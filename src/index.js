import vueNumTo from './vue-num-to'

export default {
    install: function(Vue) {
        Vue.component('vue-num-to', vueNumTo)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-num-to', vueNumTo)
}