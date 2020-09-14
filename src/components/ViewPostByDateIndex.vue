<template>
  <div class="viewtag">
    <template v-if="loaded === true" >
      <h1>
        <a :href="`/#/tag/${$route.params.tag}`">
        {{ info[$route.params.tag].name }}
        </a>
        >
        {{ $route.params.date }}
      </h1>
      <ArchivedTweet :post=this.post></ArchivedTweet>
    </template>
    <template v-else>
      <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"></img>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import ArchivedTweet from '@/components/ArchivedTweet'
export default {
  name: 'hello',
  data () {
    return {
      info: null,
      loaded: false,
      post: null
    }
  },
  components: {
    ArchivedTweet
  },
  mounted () {
    const tag = this.$route.params.tag
    const date = this.$route.params.date
    const postIndex = this.$route.params.index

    axios
      .get('/static/db/db.json')
      .then(response => {
        let info = response.data
        console.log(this.info)
        axios
          .get(`/static/db/${tag}/${date}.json`)
          .then(response => {
            info[tag]['files'][date] = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => {
            this.info = info
            console.log(info[tag]['files'][date])
            this.post = info[tag]['files'][date][postIndex]
            this.loaded = true
          })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
