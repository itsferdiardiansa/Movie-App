import type { PaginationTypes } from '@/components/pagination'

export type TableHeader = {
  accessor: string
  align: 'left' | 'center' | 'right' | 'justify' | 'char'
  title: string
  colSpan: number
  width: string
  customClass: string
}

export type TableTypes<I = {}, V = {}> = {
  headers: TableHeader[]
  items: I[]
  emptyMessage: string
  rowNumber: boolean
  isFetching: boolean
  onError: boolean
  rowLoader: number
  onPageChange: () => void
  withPagination: boolean
  pagination: PaginationTypes
}

export type Shareable = Pick<
  TableTypes,
  'isFetching' | 'rowLoader' | 'onError' | 'items' | 'headers' | 'rowNumber'
>

const tableProps = {
  headers: () => [],
  items: () => [],
  emptyMessage: 'Empty data',
  rowNumber: true,
  isFetching: false,
  onError: false,
  rowLoader: 5,
  onPageChange: () => {},
  withPagination: true,
  pagination: () => ({
    currentPage: 1,
    perPage: 5,
    totalPage: 0,
    lastPage: 0,
  }),
}

export default tableProps
