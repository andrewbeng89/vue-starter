import test from 'ava'
import Vue from 'vue'
import Hello from '../../../src/components/Hello.vue'

test('Hello.vue', t => {
  const Constructor = Vue.extend(Hello)
  const vm = new Constructor().$mount()
  t.is(vm.$el.querySelector('h1').textContent, 'Welcome to Your Vue.js App')
})
