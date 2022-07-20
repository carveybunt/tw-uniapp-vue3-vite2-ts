import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      test: 'test'
    }
  },
  getters: {},
  increment() {}
})
