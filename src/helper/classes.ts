function classes(...names:(string | undefined)[]){
  // 加上 Boolean 是因为 判断是否为真，就返回真，
  return names.filter(Boolean).join(' ')
}

export default  classes