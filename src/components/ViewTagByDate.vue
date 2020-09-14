<template>
  <div class="viewtag">
    <template v-if="loaded === true" >
      <h1>
        <a :href="`/#/tag/${$route.params.id}`">
        {{ info[$route.params.id].name }}
        </a>
        >
        {{ $route.params.date }}
      </h1>
      <div style=" flex-direction: row; flex-wrap: wrap; display: flex;">
    
      <template v-for="(block) in info">
          <template v-for="(day) in block['files']">
            <template v-for="(post, index) in day">
              <ArchivedTweet :key=index :post=post></ArchivedTweet>
            </template>
          </template>
      </template>
      </div>
    </template>
    <template v-else>
      <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"></img>
    </template>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
import ArchivedTweet from '@/components/ArchivedTweet'
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      info: null,
      loaded: false
    }
  },
  components: {
    Tweet,
    ArchivedTweet
  },
  mounted () {
    const id = this.$route.params.id
    const date = this.$route.params.date

    axios
      .get('/static/db/db.json')
      .then(response => {
        let info = response.data
        console.log(this.info)
        axios
          .get(`/static/db/${id}/${date}.json`)
          .then(response => {
            info[id]['files'][date] = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => {
            this.info = info
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
