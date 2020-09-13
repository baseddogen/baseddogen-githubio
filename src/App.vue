<template>
  <div id="app">
    <header>
      <a class="header" href="/">Records</a>
    </header>
    <main>
      <a href="/">Records</a>
      > 
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}
html { scroll-behavior: smooth; } 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin: 10px;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.header {
  margin: 0;
  padding: 0;
  height: 56px;
  background-color: #35495E;

  text-decoration: none;
  color: #ffffff;
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

</style>
