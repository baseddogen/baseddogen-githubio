<template>
  <div class="viewtag">
    <template v-if="loaded === true" >
      <h1>
        <a :href="`/#/tag/${$route.params.id}`">{{ $route.params.id }}</a>
        >
        {{ $route.params.date }}
      </h1>
      <template v-for="(block, index) in info">
          <template v-for="(day, date) in block['files']">
            <div>
                <template v-for="post in day">
                  <div style="background-color: 'blue'">
                    <h1>{{post.title}}</h1>
                    <Tweet :id="`${post.id}`" :options="{ tweetLimit: '1' }">Loading...</Tweet>
                  </div>
                </template>
            </div>
          </template>
      </template>
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
    let info = {}
    info[id] = {'files': {}}
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
