import {
  DATA_LIST_LIMIT_DEFAULT,
  DATA_LIST_OFFSET_DEFAULT,
  DATA_LIST_SORT_BY_DEFAULT,
  DATA_LIST_SORT_DIRECTION_DEFAULT,
  DataListSortDirection,
  LIST_OF_FIELDS_AND_SORT_FIELDS
} from '@hn/constants'

export const getLimit = (limit?: number): number => {
  return Number(getValue(limit, DATA_LIST_LIMIT_DEFAULT))
}

export const getOffset = (offset?: number): number => {
  return Number(getValue(offset, DATA_LIST_OFFSET_DEFAULT))
}

export const getSortBy = (sortBy?: string) => {
  const field = LIST_OF_FIELDS_AND_SORT_FIELDS.find(
    item => item.field === sortBy
  )

  if (field) return field.sortField
  return getValue(sortBy, DATA_LIST_SORT_BY_DEFAULT)
}

export const getSortDirection = (direction?: DataListSortDirection) => {
  if (
    getValue(direction, DATA_LIST_SORT_DIRECTION_DEFAULT) ===
    DataListSortDirection.DESCEND
  ) {
    return -1
  }

  return 1
}

export const getValue = <T, K = undefined>(value: T, defaultValue?: K) => {
  return value ?? defaultValue
}
