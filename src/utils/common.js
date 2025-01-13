export const scrollToBottom = (
  element = null,
  options = { behavior: 'auto' },
) => {
  element?.scrollTo({
    ...options,
    top: element.scrollHeight,
  })
}

// 判断是用户权限
const roleSelect = () => {

}
