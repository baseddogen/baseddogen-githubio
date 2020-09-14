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
import ArchivedTweet from 'ArchivedTweet'
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      info: null,
      loaded: false,
      post: null
    }
  },
  components: {
    ArchivedTweet
  },
  mounted () {
    const tag = this.$route.params.tag
    const date = this.$route.params.date
    const postIndex = this.$route.params.index

    axios
      .get('/static/db/db.json')
      .then(response => {
        let info = response.data
        console.log(this.info)
        axios
          .get(`/static/db/${tag}/${date}.json`)
          .then(response => {
            info[tag]['files'][date] = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => {
            this.info = info
            console.log(info[tag]['files'][date])
            this.post = info[tag]['files'][date][postIndex]
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

 /* Dropdown Button */
.dropbtn {
  background-color: #4c8baf;
  color: white;
  padding: 2px 4px 2px 4px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
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
