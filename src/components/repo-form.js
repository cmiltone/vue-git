export default {
  name: 'RepoForm',
  data(){
    return {
      submitted: false,
      user: null,
      repo: null
    }
  },
  computed:{
    title(){
      return this.$store.state.title
    },
    issues(){
      return this.$store.state.issues
    }
  },
  methods: {
    setRepo() {
      this.submitted = true
      if (this.repo && this.user) {
        let r = {
          user: this.user,
          repo: this.repo
        }
        this.$store.dispatch('setRepo', r)
        this.$store.dispatch('getIssues')
        this.$router.push('list')
      }
    },
    reset() {
      this.$store.dispatch('resetIssues')
    }
  }
};
