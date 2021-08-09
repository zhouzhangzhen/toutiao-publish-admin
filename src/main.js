/**
 * 项目的启动入口
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
// 创建vue根实例
// 把router配置到根实例中
// 通过render方法把app根组件渲染到#app入口节点 13341861067
createApp(App).use(router).mount('#app')
