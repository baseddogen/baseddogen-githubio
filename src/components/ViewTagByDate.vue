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
    
      <template v-for="(block, index) in info">
          <template v-for="(day, date) in block['files']">
            <template v-for="post in day">
              <div :id=post.id style="width: 550px; margin: 10px;">
                  <div style="background-color: 'blue'">
                    <h2>{{post.title}}</h2>
                    <Tweet :id="`${post.id}`" :options="{ tweetLimit: '1' }">Loading...</Tweet>
                  </div>
              </div>
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
    Tweet
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
      .finally(() => (this.msg = false))
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
