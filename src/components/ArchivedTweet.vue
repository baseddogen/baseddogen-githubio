<template>
  <div class="viewtag">
    <div :id=$props.post.id style="max-width: 550px; margin: 10px; display:flex; justify-content: flex-start">
        <div style="position: relative">
            <h1 style="margin-bottom: 50px">
                {{$props.post.title}}
                <div class="dropdown">
                    <button class="dropbtn">
                        <img src="/static/img/icons/archive-131965017300175986_32.ico" />
                    </button>
                    <div class="dropdown-content">
                        <template v-for="(link, index) in $props.post.archives">
                            <a :key=index :href="link.url"> <div> {{ link.source }} </div> <div> {{ link.archiver }} </div> </a>
                        </template>
                    </div>
                </div>
            </h1>
            <p>{{$props.post.description}}</p>
            <Tweet :id="`${post.id}`" :options="{ tweetLimit: '1' }">Loading...</Tweet>
        </div>
    </div>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  name: 'ArchivedTweet',
  components: {
    Tweet
  },
  props: {
    post: {type: Object}
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
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: absolute;
  left: 0px;
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
