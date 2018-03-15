import Vue from 'vue'
import Router from 'vue-router'
import RepoForm from '@/components/repo-form.vue'
import IssueList from '@/components/issue-list.vue'
import IssueDetail from '@/components/issue-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RepoForm',
      component: RepoForm
    },
    {
      path: '/list',
      name: 'IssueList',
      component: IssueList
    },
    {
      path: '/item',
      name: 'IssueDetail',
      component: IssueDetail
    }
  ]
})
