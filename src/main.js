import DefaultLayout from '~/layouts/Default.vue'

import '~/main.css'

import moment from 'moment'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.filter('formatDate', value => moment(new Date(value)).format('LL'))
}
