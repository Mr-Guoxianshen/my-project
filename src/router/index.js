import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import jcss from '@/page/jcss' // 基础设施指标页
import jjyx from '@/page/jjyx' // 经济运行指标页
import jtyx from '@/page/jtyx' // 交通运行指标页
import rwhj from '@/page/rwhj' // 人文环境建设指标页
import shaq from '@/page/shaq' // 社会安全指标页
import zyhj from '@/page/zyhj' // 资源与环境保障指标

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jcss',
      component: jcss
    },
    {
      path: '/jjyx',
      name: 'jjyx',
      component: jjyx
    },
    {
      path: '/jtyx',
      name: 'jtyx',
      component: jtyx
    },
    {
      path: '/rwhj',
      name: 'rwhj',
      component: rwhj
    },
    {
      path: '/shaq',
      name: 'shaq',
      component: shaq
    },
    {
      path: '/zyhj',
      name: 'zyhj',
      component: zyhj
    },
    {
      path: '/jcss',
      name: 'jcss',
      component: jcss
    }
  ]
})
