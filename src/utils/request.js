import axios from 'axios'
import sysConfig from '@/config/index'
import tool from '@/utils/tool'
import { tansParams } from '@/utils/common'
import * as qs from 'postcss-scss'

// 加密白名單
const encryptWhiteList = ['/login/']

// 以下这些code需要重新登录
const reloadCodes = [401, 1011007, 1011008]
const errorCodeMap = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

// 定义一个重新登录弹出窗的变量
const loginBack = ref(false)

// 创建 axios 实例
const service = axios.create({
  baseURL: sysConfig.API_URL, // api base_url
  timeout: sysConfig.TIMEOUT, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false

    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false

    if (tool.data.get('TOKEN') && !isToken) {
      // config.headers['Authorization'] = 'Bearer ' + tool.data.get('TOKEN') // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['Authorization'] = tool.data.get('TOKEN') // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '?' + tansParams(config.params)
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }

    let data = config.data
    if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put' || config.method === 'patch' || config.method === 'delete')) {
      const requestObj = {
        url: config.url,
        data: data,
        time: new Date().getTime(),
      }

      const sessionObj = tool.session.get('sessionObj')
      if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
        tool.session.set('sessionObj', requestObj)
      } else {
        const s_url = sessionObj.url                // 请求地址
        const s_data = sessionObj.data              // 请求数据
        const s_time = sessionObj.time              // 请求时间
        const interval = 1000                       // 间隔时间(ms)，小于此时间视为重复提交
        if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
          const message = '数据正在处理，请勿重复提交'
          console.warn(`[${s_url}]: ` + message)
          return Promise.reject(new Error(message))
        } else {
          tool.session.set('sessionObj', requestObj)
        }
      }
    }

    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  },
)

// HTTP response 拦截器
service.interceptors.response.use(
  response => {
    // 配置了blob，不处理直接返回文件流
    if (response.config.responseType === 'blob') {
      if (response.status === 200) {
        return response
      } else {
        // message.warning('文件下载失败或此文件不存在')
        return
      }
    }
    const data = response.data
    const status = response.status
    // console.log(response)
    if (reloadCodes.includes(status)) {
      if (!loginBack.value) {
        // error()
      }
      return
    }
    if (status !== 200) {
      const customErrorMessage = response.config.customErrorMessage
      // snackbarStore.showErrorMessage(customErrorMessage || data.msg);
      return Promise.reject(data)
    } else {
      // 统一成功提示
      const responseUrls = response.config.url.split('/')
      const apiNameArray = [
        'add',
        'edit',
        'delete',
        'update',
        'grant',
        'reset',
        'stop',
        'pass',
        'disable',
        'enable',
        'revoke',
        'suspend',
        'active',
        'turn',
        'adjust',
        'reject',
        'saveDraft',
      ]
      apiNameArray.forEach(apiName => {
        if (responseUrls[responseUrls.length - 1] === apiName) {
          // message.success(data.msg)
          // snackbarStore.showSuccessMessage('请求成功！')
        }
      })
    }
    return Promise.resolve(data)
  },
  error => {
    if (error) {
      console.log(error)
      const status = 503
      const description = errorCodeMap[status]
      console.error({
        message: '请求错误',
        description,
      })
      return Promise.reject(status)
    }
  },
)

// 适配器, 用于适配不同的请求方式
export const baseRequest = (url, value = {}, method = 'post', options = {}) => {
  url = sysConfig.API_URL + url
  if (method === 'post') {
    return service.post(url, value, options)
  } else if (method === 'get') {
    return service.get(url, { params: value, ...options })
  } else if (method === 'formdata') {
    // form-data表单提交的方式
    return service.post(url, qs.stringify(value), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...options,
    })
  } else {
    // 其他请求方式，例如：put、delete
    return service({
      method: method,
      url: url,
      data: value,
      ...options,
    })
  }
}

export const moduleRequest =
  moduleUrl =>
    (url, ...arg) => {
      return baseRequest(moduleUrl + url, ...arg)
    }

export default service
