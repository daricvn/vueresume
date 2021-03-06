import Vue from 'vue'

import './styles/quasar.sass'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, QLayout, QTimeline, QTimelineEntry, QIcon, QSeparator, QChip } from 'quasar'


Vue.use(Quasar, {
  config: {},
  components: { 
    QSeparator,
    QChip,
    QLayout,
    QTimeline,
    QIcon,
    QTimelineEntry/* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  }
 })