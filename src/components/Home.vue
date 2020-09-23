<template>
  <div class="hello">
    <template v-for="(entry, index) in info">
      <h1 :key=index>
          <a style="text-decoration: none;" :href="`/#/tag/${entry.database}`">
            {{entry.name}}
          </a>
      </h1>
    </template>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
import db from '../../static/db/db.json'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      info: db
    }
  },
  components: {
    Tweet
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
