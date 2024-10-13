import { parse } from '@fortawesome/fontawesome-svg-core'

type Parse = {
  icon: unknown
}

export default fICon => {
  if ((parse as unknown as Parse).icon) {
    return (parse as any).icon(fICon)
  }
  if (fICon === null) {
    return null
  }

  if (
    typeof fICon === 'undefined'
      ? 'undefined'
      : typeof fICon === 'object' && fICon.prefix && fICon.iconName
  ) {
    return fICon
  }

  if (Array.isArray(fICon) && fICon.length === 2) {
    return { prefix: fICon[0], iconName: fICon[1] }
  }

  if (typeof fICon === 'string') {
    return { prefix: 'fas', iconName: fICon }
  }

  return { prefix: '', iconName: '' }
}
