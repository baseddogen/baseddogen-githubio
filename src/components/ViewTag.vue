<template>
  <div class="viewtag">
    <h1> {{ info[$route.params.tag].name }} </h1>
    <p>
      {{ info[$route.params.tag].description }}
    </p>
    <template v-for="(day, date) in info[$route.params.tag]['files']">
      <div>
        <a :href="`/#/tag/${$route.params.tag}/date/${date}`">
          <h2>{{date}}</h2>
        </a>
          <template v-for="(post, postIndex) in day">
            <div>
              <a :href="`/#/tag/${$route.params.tag}/date/${date}/${postIndex}`">
                {{post.title}}
              </a>
            </div>
          </template>
      </div>
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
      info: db,
      loaded: true
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
