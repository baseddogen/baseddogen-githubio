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
import ArchivedTweet from '@/components/ArchivedTweet'
import db from '../../static/db/db.json'

export default {
  name: 'hello',
  data () {
    return {
      info: db,
      loaded: true,
      post: db[this.$route.params.tag]['files'][this.$route.params.date][this.$route.params.index]
    }
  },
  components: {
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
