<script setup lang="ts">
// import { useRouter } from 'vue-router'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs'

import {  ref } from "vue";

// @ts-ignore
import { useI18n  } from 'vue-i18n'

// const router = useRouter()


const { locale: localLanguage } = useI18n()
const locale = ref(zhCn)

const changeLang = (language: any) =>{
  locale.value = language
  localLanguage.value = language.name
  console.log('languague: ',language)
}
</script>


 
<template>
  <el-config-provider :locale="locale">

  <button @click="changeLang(zhCn)">中文</button>
  <button @click="changeLang(en)">英文</button>

  

  <!-- <button @click="() => router.push({ path: '/home' })">首页</button> -->
  <!-- <button @click="() => router.push({ path: '/mine' })">个人中心</button> -->

  <router-link to='/home'>首页</router-link>
  <router-link to='/mine'>个人中心</router-link>

  <router-view/>
 </el-config-provider>
</template>

<style lang="scss" scoped>
button {
  font-size: 40px
}
</style>
