import { createStore } from 'vuex'
import employees from './modules/employees'

export const store = createStore({
  modules: {
    employees
  }
})
