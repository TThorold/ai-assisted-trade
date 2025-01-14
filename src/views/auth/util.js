import tool from '@/utils/tool'
// import userData from '@/data/user'
import { router } from '@/plugins/router/index.js'
import { useSnackbarStore } from '@/store/snackbarStore'
import authApi from '@/api/auth.js'
// import sysAuth from '@/config/sys.auth'

const snackbar = useSnackbarStore()

export const afterLogin = async loginToken => {

  if (loginToken) {
    tool.data.set('TOKEN', loginToken)
    tool.session.set('auth_token', loginToken)
    // 获取角色身份
    const userInfo = await authApi.getUserInfo()
    console.log(userInfo)

    // 获取登录的用户信息
    // const getAuthList = sysAuth[role] // 获取权限开放数据

    // userInfo.buttonCodeList = getAuthList.btnCodeList // 添加权限按钮

    // tool.data.set('USER_INFO', userInfo)

    // 获取用户的菜单
    // const menu = getAuthList.menu
    // tool.data.set('MENU', menu)

    snackbar.showSuccessMessage('登录成功')

    setTimeout(() => {
      // router.push({ path: '/' })
    }, 300)
  } else {
    snackbar.showErrorMessage('查无此用户，请先注册！')
  }
}
