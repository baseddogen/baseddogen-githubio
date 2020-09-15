<template>
    <div>
        <div style="margin-top: 10px">
            <button v-on:click="newEntry" >New Entry</button>
        </div>

        <div style="display: flex; flex-direction: column-reverse;">
            <template v-for="(entry, index) in entries">
                <div style="width: 100%; height: 10px; background-color: #d1d1d1"> </div>
                <div style="margin-bottom: 10px">
                    <div class="row">
                        <div class="column">
                            <p>Title:</p>
                        </div>
                        <div class="column">
                            <input v-model="entry.title" placeholder="title">        
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <p>url:</p>
                        </div>
                        <div class="column">
                            <input v-model="entry.url" placeholder="url">        
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <p>id:</p>
                        </div>
                        <div class="column">
                            <input v-model="entry.id" placeholder="id">        
                        </div>
                    </div>
                    <div>
                        <button  v-on:click="newArchive(index)" >Add Source</button>
                    </div>
                    <div style="display: flex; flex-direction: column-reverse;">
                        <template v-for="archive in entry.archives">
                            <div style="display: inline">
                                <div class="row">
                                    <p>Type:</p>
                                    <br>
                                        <input type="radio" id="social" value="social" v-model="archive.type">
                                        <label for="social"><p>social</p></label>        
                                    <br>
                                        <input type="radio" id="article" value="article" v-model="archive.type">
                                        <label for="article"><p>article</p></label>
                                    <br>        
                                </div>
                                <div>
                                    source:
                                    <input v-model="archive.source" placeholder="source">
                                </div>
                                <div>
                                    archiver:
                                    <input v-model="archive.archiver" placeholder="archiver">
                                </div>
                                <div>
                                    url:
                                    <input v-model="archive.url" placeholder="url">
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
        {{entries}}
    </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'Generator',
  data () {
    return {
      info: null,
      loaded: false,
      message: '',
      type: 'Twitter',
      counter: 0,
      entries: []
    }
  },
  methods: {
    newEntry: function (event) {
      this.entries.push({
        'title': '',
        'url': '',
        'id': '',
        'archives': []
      })
      this.counter++
    },
    newArchive: function (index) {
      this.entries[index].archives.push({
        'type': '',
        'source': '',
        'archiver': '',
        'url': ''
      })
    }
  },
  components: {
    Tweet
  },
  mounted () {
    this.newEntry()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row {
    display: flex;
    flex-direction: row;
}
.column {
    width: 45%; 
     margin-right: 5px;
     margin-left: 5px;
}
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
