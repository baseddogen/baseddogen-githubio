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
              <div :id=post.id style="width: 550px; margin: 10px; display:flex; justify-content: flex-end">
                  <div style="position: relative">
                    <h1 style="margin-bottom: 50px">
                      {{post.title}}
                      <div class="dropdown">
                        <button class="dropbtn"><img src="/static/img/icons/archive-131965017300175986_32.ico" /></button>
                        <div class="dropdown-content">
                          <template v-for="link in post.archives">
                          <a :href="link.url">{{ link.source }} @ {{ link.archiver }} </a>
                          </template>
                        </div>
                      </div>
                    </h1>
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

 /* Dropdown Button */
.dropbtn {
  background-color: white;
  color: white;
  padding: 2px 4px 2px 4px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 2em;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: absolute;
  right: 0px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-size: 26px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #579bc2;} 
</style>
