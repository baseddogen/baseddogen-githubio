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
      <div style=" flex-direction: row; flex-wrap: wrap; display: flex;">
    
      <template v-for="(post, index) in info[this.$route.params.tag]['files'][this.$route.params.date]">
          <ArchivedTweet :key=index :post=post></ArchivedTweet>
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
import db from '../../static/db/db.json'

export default {
  name: 'hello',
  data () {
    return {
      info: db,
      loaded: true
    }
  },
  components: {
    Tweet,
    ArchivedTweet
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
