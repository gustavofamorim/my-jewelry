import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

fontawesome.config = {
  autoAddCss: true
}

fontawesome.library.add(fas)
fontawesome.library.add(fab)
fontawesome.library.add(far)

Vue.component('fa', FontAwesomeIcon)
