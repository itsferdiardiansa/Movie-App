import { computed, unref, Ref } from 'vue'

interface PaginationSettings {
  currentPage: number
  perPage: number
  pages: number[]
  lastPage: number
}

interface PaginationProps {
  currentPage: number
  perPage: number
  lastPage: number
}

interface PageNumberResult {
  pages: number[]
  isApplicable: boolean
}

interface Navigation {
  prevBtn: boolean
  nextBtn: boolean
}

interface PaginationInfo {
  from: number
  to: number
  of: number
}

const paginationSettings: PaginationSettings = {
  currentPage: 1,
  perPage: 5,
  pages: [],
  lastPage: 0,
}

const createPageNumber = (data: PaginationProps): PageNumberResult => {
  const { lastPage, currentPage } = data
  const range = 5
  const totalPages = lastPage
  let start = 1
  const paging: number[] = []
  let rangeStart = 0

  if (currentPage < range) {
    start = 1
  } else if (currentPage >= totalPages - range / 2) {
    start = Math.floor(totalPages - range + 1)
  } else {
    start = currentPage - Math.floor(range / 2)
  }

  rangeStart = totalPages < range ? totalPages : start + range - 1

  for (let i = start; i <= rangeStart; i++) {
    paging.push(i)
  }

  return {
    pages: paging,
    isApplicable: Boolean(paging.length),
  }
}

const getNavigation = (data: PaginationProps): Navigation => ({
  prevBtn: data.currentPage > 1,
  nextBtn: data.currentPage < data.lastPage,
})

const getInfo = (data: PaginationProps): { info: PaginationInfo } => ({
  info: {
    from: data.currentPage * data.perPage - data.perPage + 1,
    to: data.currentPage * data.perPage,
    of: data.perPage * data.lastPage,
  },
})

const usePagination = (props: Ref<PaginationProps>) => {
  const getPagination = computed(() => {
    const getProps = unref(props)

    return {
      ...paginationSettings,
      ...getProps,
      ...getNavigation(getProps),
      ...createPageNumber(getProps),
      ...getInfo(getProps),
    }
  })

  return {
    getPagination,
  }
}

export default usePagination
