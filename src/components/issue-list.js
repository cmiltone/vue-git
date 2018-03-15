export default {
  name: 'IssueList',
  computed:{
    issues(){
      return this.$store.state.issues
    },
    title(){
      return this.$store.state.title
    }
  },
  methods: {
    selectIssue (id) {
      this.$store.dispatch('selectIssue', id)
      this.$router.push('item')
    }
  }
};
