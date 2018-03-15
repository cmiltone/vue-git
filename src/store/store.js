import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import { gitApi } from './store-utils'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Router)

export const store = new Vuex.Store({
  state: {
    issues: [ ],
    selected: null,
    title: 'Fill and Submit this form to Fetch Your Repo\'s Issues',
    repo: null,
    user: null,
    errors: null
  },
  mutations: {
    setRepo (state, r) {
      state.repo = r.repo
      state.user = r.user
      state.title = 'Fetching Issues for ' + r.repo
    },
    getIssues (state) {
      state.errors = null
      let url = 'https://api.github.com/repos/' + state.user + '/' + state.repo + '/issues'
      state.title = 'Working... please wait.'
      Vue.http.get(url).then(response => {
        response.body.forEach((issue) => {
          state.issues.push(issue)
          // Vue.router.push('list')
        })
        state.title = state.issues.length + ' Issue(s) for: ' + state.user + '/' + state.repo + ' found'
      }, error => {
        state.errors = 'Failed to load repo issues'
        console.log(error)
      })
    },
    selectIssue (state, id) {
      state.errors = null
      id += 1
      let url = 'https://api.github.com/repos/' + state.user + '/' + state.repo + '/issues/' + id
      Vue.http.get(url).then(response => {
        state.selected = response.body
        // state.title = 'Selected Issue Details'
      }, error => {
        state.errors = 'Failed to load issue details'
        console.log(error)
      })
    },
    resetIssues (state) {
      state.issues = []
      state.user = null
      state.repo = null
      state.errors = null
      state.selected = null
      state.title = 'Fill and Submit this form to Fetch repo Issues'
    }
  },
  actions: {
    setRepo (context, r) {
      context.commit('setRepo', r)
    },
    getIssues (context) {
      context.commit('getIssues')
    },
    selectIssue (context, id) {
      context.commit('selectIssue', id)
    },
    resetIssues (context) {
      context.commit('resetIssues')
    }
  }
})
