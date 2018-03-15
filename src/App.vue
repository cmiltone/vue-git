<template>
  <div id="app">
    <div class="app-header">
      <h1>{{title}}</h1>
      <router-link class="link" to="list">Issues</router-link>
    </div>
    <router-view/>
    <span class="form-error" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Vue-Git: A GitHub Repo Issue Tracker'
    }
  },
  computed: {
    error () {
      return this.$store.state.errors
    }
  }
}
</script>

<style>
  @import url('./styles.css');
</style>
