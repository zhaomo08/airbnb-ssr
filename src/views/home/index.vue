<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router'

import {getCurrentInstance, h} from 'vue'

import {fetchRoom} from "../../api"
import {useI18n} from 'vue-i18n'

import IndexedDB from '../../utils/indexedDB'

const { t } = useI18n()
console.log(useI18n)

const router = useRouter()
const route =useRoute()

console.log(route.params)

const { proxy } :any =getCurrentInstance()
proxy.$message({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })


// const getTickets = () =>{
//   getTicketList().then(res => {
//     console.log(res)
//   })
// }
// getTickets()

// 数据库相关操作
const  airbnbDB = new IndexedDB('airbnb')

// airbnbDB.openStore()
// airbnbDB.openStore('room','id')
airbnbDB.openStore('room','id',['nose','ear'])

// 增和改
function addOrUpdate(storeName: string){
  airbnbDB.updateItem(storeName,{
    'id':1,
    'nose': '33m',
    'ear': '比较小'
  })
}

// 删除
function deleteByKey(storeName: string,key: number | string){
  airbnbDB.deleteItem(storeName,key)
}

// 查询所有数据
function getObjectStore(storeName: string){
  airbnbDB.getList(storeName)
}

// 查询某条数据
function getObjectStoreItem(storeName: string,key: number | string){
  airbnbDB.getItem(storeName,key)
}

// mock 接口
function getRoom() {
  fetchRoom().then(res =>{
    console.log('mock接口', res)
  })
}
getRoom()


const value1 =''
</script>

<template>
 首页
<button @click="() => router.push({path:'/mine',query:{id:1}})">跳转到个人中心</button>

<el-button  @click="addOrUpdate('room')">增加或修改</el-button>
<el-button  @click="deleteByKey('room',2)">删除</el-button>
<el-button  @click="getObjectStore('room')">查询所有数据</el-button>
<el-button  @click="getObjectStoreItem('room',3)">根据id查询数据</el-button>


<div  class="text">红宏观胡奥扫大撒大撒大苏打实打实大苏打实打实大开始的怕死的啊实打实大苏打萨达飒飒

</div>
{{ t('message.home') }}


<el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="MMM DD, YYYY"
        time-format="HH:mm"
      />

</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
