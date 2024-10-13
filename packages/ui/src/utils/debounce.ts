type DebouncedFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): ReturnType<T> | undefined
  clear(): void
  flush(): void
}

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 100,
  immediate: boolean = false
): DebouncedFunction<T> => {
  let timeout: ReturnType<typeof setTimeout> | null
  let args: any
  let context: any
  let timestamp: number
  let result: ReturnType<T> | undefined

  const later = (): void => {
    const last = Date.now() - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        context = args = null
      }
    }
  }

  const debounced = function (
    this: any,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    context = this
    timestamp = Date.now()
    const callNow = immediate && !timeout

    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }

  debounced.clear = (): void => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  debounced.flush = (): void => {
    if (timeout) {
      result = func.apply(context, args)
      context = args = null

      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}

export default debounce
