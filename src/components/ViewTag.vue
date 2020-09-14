<template>
  <div class="viewtag">
    <template v-if="loaded === true" >

    <h1> {{ info[$route.params.id].name }} </h1>
      <template v-for="(day, date) in info[$route.params.id]['files']">
        <div>
          <a :href="`/#/tag/${$route.params.id}/date/${date}`">
            <h2>{{date}}</h2>
          </a>
            <template v-for="(post, postIndex) in day">
              <div>
              <a :href="`/#/tag/${$route.params.id}/date/${date}/${postIndex}`">
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
        // prepare to request all relevant files
        const dates = Object.keys(info[id].files)
        const requests = dates.map(date => axios.get(`/static/db/${id}/${date}.json`))
        Promise.all(requests).then(responses => {
          // if file is poorly formatted, responses might not be in JSON
          responses.forEach(({data}, index) => {
            console.log(data)
            console.log(index)
            info[id]['files'][dates[index]] = data
          })
          // send data off to be rendered
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
