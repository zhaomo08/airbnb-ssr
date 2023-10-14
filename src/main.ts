import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router'
import ElementPlus,{ ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

import i18n from './components/language/i18n'


const app = createApp(App)

console.log('app', app);

app.config.globalProperties.$message = ElMessage
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
