<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-if="dataShow" class="dataBox" id="dataBox">
      <div>{{obj.date}}</div>
      <h2>{{obj.title}}</h2>
      <div>
        <span style="margin-right: 8px;" v-for="(item, index) in obj.tags" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      obj: {},
      dataShow: false
    }
  },
  created() {
    if(this.$route.params.item) {
      this.dataShow = true
      this.obj = this.$route.params.item
    }
    console.log(this.obj)
  },
  mounted() {
    let doc = document.getElementById("dataBox")
    for(let i in this.obj.content) {
      let contentDiv = document.createElement(this.obj.content[i].el)
      console.log(this.obj.content[i])
      for(let key in this.obj.content[i]) {
        console.log(this.obj.content[i][key])
        if(key === "ctx") {
          contentDiv.innerText = this.obj.content[i][key]
        } else if(key === "class") {
          contentDiv.className = this.obj.content[i][key].join(" ")
        } else if(key === "list") {
          for(let j in this.obj.content[i][key]) {
            let contentDiv1 = document.createElement(this.obj.content[i][key][j].el)
            contentDiv.appendChild(contentDiv1)
          }
        } else {
          contentDiv[key] = this.obj.content[i][key]
        }
      }
      doc.appendChild(contentDiv)
      // if(obj.content[i].list) {}

    }
  }
}
</script>

<style lang="less" scoped>
.dataBox {
  width: 80%;
  margin-left: 10%;
  text-align: left;
}
</style>
