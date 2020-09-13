<template>
  <div class="viewtag">
    <template v-if="loaded === true" >

    <h1> {{ info[$route.params.id].name }} </h1>
      <template v-for="(day, date) in info[$route.params.id]['files']">
        <div>
          <a :href="`/#/tag/${$route.params.id}/date/${date}`">
            <h2>{{date}}</h2>
          </a>
            <template v-for="(post, postId) in day">
              <div>
              <a :href="`/#/tag/${$route.params.id}/date/${date}#${post.id}`">
                {{post.title}}
              </a>
              </div>
            </template>
        </div>
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
    axios
      .get('/static/db/db.json')
      .then(response => {
        let info = response.data
        console.log(info)
        console.log(id)
        console.log(info[id])
        Object.keys(info[id].files).forEach(date => {
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
