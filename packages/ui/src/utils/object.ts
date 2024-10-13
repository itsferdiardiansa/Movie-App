export const collectObjectKeys = <T>(arr: T[]) => {
  let data = Array.isArray(arr) ? [].concat(arr).pop() : arr
  let result = new Set()

  if (typeof arr !== 'object') return []

  function exec() {
    let _this = this

    if (Array.isArray(_this)) _this = this.pop()

    if (_this === null || _this === undefined) return false

    Object.keys(_this).forEach(key => {
      if (!/[0-9]/.test(key) && !result.has(key)) result.add(key)

      if (typeof _this[key] === 'object') exec.call(_this[key])
    })
  }

  exec.call(data)

  return Array.from(result)
}
