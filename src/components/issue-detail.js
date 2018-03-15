export default {
  name: 'IssueDetail',
  computed:{
    issue(){
      return this.$store.state.selected
    },
    title(){
      return this.$store.state.title
    }
  },
  methods: {
    setRepo(user, repo)
    {
      this.$store.dispatch('getIssues', user, repo)
    },
  }
};
