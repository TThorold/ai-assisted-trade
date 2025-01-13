export default {
  // 系统名称
  SYS_NAME: 'Materio',

  // 首页地址
  DASHBOARD_URL: "/index",

  // 接口地址
  API_URL: import.meta.env.VITE_APP_API_URL + '/api',

  // 主题
  THEME: "light",

  // 主题色
  THEME_COLOR: "#4FD1C5",

  // 默认背景色
  BACKGROUND_COLOR: "#e5eaef",

  // 请求超时
  TIMEOUT: 60000,

  // TokenName // Authorization
  TOKEN_NAME: "token",

  // Token前缀，注意最后有个空格，如不需要需设置空字符串 // Bearer
  TOKEN_PREFIX: "Bearer ",

  // 追加其他头
  HEADERS: {},

  // 请求是否开启缓存
  REQUEST_CACHE: false,

  // 系统基础配置，这些是数据库中保存起来的
  SYS_BASE_CONFIG: {
    // 默认logo
    SYS_LOGO: "/img/logo.png",

    // 背景图
    SYS_BACK_IMAGE: "",

    // 系统名称
    SYS_NAME: "Vuetify-LUX",

    // 版本
    SYS_VERSION: "1.0",

    // 官网
    SYS_COPYRIGHT_URL: "#",

    // 项目名
    SYS_PROJECT_NAME: "AI辅助采购决策系统",

    // 版权
    SYS_COPYRIGHT: "河北锐掌酷科技有限公司 型号：YYT-AIPM-V2.0",

    // 默认文件存储
    SYS_DEFAULT_FILE_ENGINE: "LOCAL",

    // 是否开启验证码
    SYS_DEFAULT_CAPTCHA_OPEN: "false",

    // 默认重置密码
    SYS_DEFAULT_PASSWORD: "123456",

  },
}
