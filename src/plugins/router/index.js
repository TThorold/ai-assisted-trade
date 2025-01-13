import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import config from '@/config/index.js'
import tool from '@/utils/tool.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 判断是否已加载过动态/静态路由
const isGetRouter = ref(false)

router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  const sysBaseConfig = config.SYS_BASE_CONFIG
  // 动态标题
  document.title = to.meta.title
    ? `${to.meta.title} - ${sysBaseConfig.SYS_PROJECT_NAME}`
    : `${sysBaseConfig.SYS_PROJECT_NAME}`

  const token = tool.data.get('TOKEN')
  // console.log(token);

  if (to.path === '/login') {
    // 当用户输入了login路由，将其跳转首页即可
    if (token) {
      next({
        path: '/'
      })
      return false
    }

    isGetRouter.value = false
    next();
    return false;
  } else {
    if (token) {
      // 有token的时候才保存登录之前要访问的页面
      tool.data.set('LAST_VIEWS_PATH', to.fullPath)
    }
  }

  if (!token) {
    next({
      path: '/login'
    })
    return false
  }
  // // 整页路由处理
  // if (to.meta.fullpage) {
  //   to.matched = [to.matched[to.matched.length - 1]]
  // }

  // 加载动态/静态路由
  // if (!isGetRouter.value) {
  //   const apiMenu = tool.data.get('MENU') || []
  //
  //   apiMenu.push(...userRoutes.menu)
  //   let menuRouter = filterAsyncRouter(apiMenu)
  //   menuRouter = flatAsyncRoutes(menuRouter)
  //   menuRouter.forEach((item) => {
  //     router.addRoute('layout', item)
  //   })
  //
  //   isGetRouter.value = true
  //   next({ ...to, replace: true })
  //   return false
  // }

  next();
  return false;
});

router.afterEach(() => {
  NProgress.done()
})
export default function (app) {
  app.use(router)
}
export { router }
