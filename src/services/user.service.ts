import { UserModel } from '@hn/models/user.model'
import { UserFilter } from '@hn/types'
import { User } from '@hn/types/model'
import {
  getLimit,
  getOffset,
  getSortBy,
  getSortDirection,
  getValue
} from '@hn/utils/getter.util'
import { PipelineStage } from 'mongoose'

const getList = async (dataListFilter: UserFilter) => {
  const limit = getLimit(dataListFilter.limit)
  const offset = getOffset(dataListFilter.offset)
  const sortBy = getSortBy(dataListFilter.sortBy)
  const sortDirection = getSortDirection(dataListFilter.sortDirection)
  const username = getValue(dataListFilter.username)
  const fullName = getValue(dataListFilter.fullName)

  const pipelineStates: PipelineStage[] = []
  const pipelineStatesCount: PipelineStage[] = []

  if (username) {
    pipelineStates.push({
      $match: { username: { $regex: new RegExp(username, 'i') } }
    })
    pipelineStatesCount.push({
      $match: { username: { $regex: new RegExp(username, 'i') } }
    })
  }

  if (fullName) {
    pipelineStates.push({
      $match: {
        $or: [
          { $text: { $search: `"${fullName}"` } },
          { fullName: { $regex: new RegExp(fullName, 'i') } }
        ]
      }
    })
    pipelineStatesCount.push({
      $match: {
        $or: [
          { $text: { $search: `"${fullName}"` } },
          { fullName: { $regex: new RegExp(fullName, 'i') } }
        ]
      }
    })
  }

  if (sortBy && sortDirection) {
    pipelineStates.push({ $sort: { [sortBy]: sortDirection } })
  }

  if (offset) {
    pipelineStates.push({ $skip: offset })
  }

  if (limit) {
    pipelineStates.push({ $limit: limit })
  }

  pipelineStatesCount.push({ $count: 'total' })

  const [users, count] = await Promise.all([
    pipelineStates.length
      ? UserModel.aggregate(pipelineStates, {
          collation: { locale: 'vi' }
        }).exec()
      : UserModel.find().exec(),
    UserModel.aggregate(pipelineStatesCount, {
      collation: { locale: 'vi' }
    }).exec()
  ])

  return { data: users as User[], total: count[0]?.total || 0 }
}

export const UserService = { getList }
