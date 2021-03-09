<template>
  <div class="about">
    <div v-for="item in dataList" :key="item.id" @click="toList(item)" class="liBox">
      <div>{{item.id}}</div>
      <div>
        <div style="margin-bottom: 8px;">{{item.title}}</div>
        <div>
          <span style="margin-right: 8px;color: #ccc;" v-for="(it, index) in item.tags" :key="index">{{it}}</span>
        </div>
      </div>
      <div>{{item.date}}</div>
    </div>
  </div>
</template>

<script>
import dataList from '../data/data'
export default {
  data() {
    return {
      dataList: dataList
    }
  },
  methods: {
    toList (item) {
      this.$router.push({
          name: 'Home',
          params: {
            item
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.liBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 15px;
  // margin-top: 20px;
  width: 60%;
  margin: 20px auto 0 auto;
  cursor: pointer;
}
</style>