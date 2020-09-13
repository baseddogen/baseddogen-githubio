<template>
  <div class="hello">
    <template v-for="(files, tag) in info">
      <h1>
          <a style="text-decoration: none;" :href="`/#/tag/${tag}`">
            {{info[tag].name}}
          </a>
      </h1>
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
      msg: '',
      info: null
    }
  },
  components: {
    Tweet
  },
  mounted () {
    axios
      .get('/static/db/db.json')
      .then(response => {
        this.info = response.data
        console.log(this.info)
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
