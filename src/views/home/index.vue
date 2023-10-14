<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'

import { h,getCurrentInstance} from 'vue'

import {getTicketList} from "../../api"

const router = useRouter()
const route =useRoute()

console.log(route.params)

const { proxy }:any =getCurrentInstance()
proxy.$message({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })


const getTickets = () =>{
  getTicketList()
}
getTickets()
</script>

<template>
 首页
<button @click="() => router.push({path:'/mine',query:{id:1}})">跳转到个人中心</button>
<el-button>Default</el-button>

<div  class="text">红宏观胡奥扫大撒大撒大苏打实打实大苏打实打实大开始的怕死的啊实打实大苏打萨达飒飒

</div>

</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";

</style>