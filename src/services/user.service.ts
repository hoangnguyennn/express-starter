import { PipelineStage } from 'mongoose'
import { IUserFilter } from '~/interfaces'
import { IUser } from '~/interfaces/IDocument'
import User from '~/models/user.model'
import {
  getLimit,
  getOffset,
  getSortBy,
  getSortDirection,
  getValue
} from '~/utils/getter.util'

const UserService = {
  getList: async (dataListFilter: IUserFilter) => {
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
        ? User.aggregate(pipelineStates, { collation: { locale: 'vi' } }).exec()
        : User.find().exec(),
      User.aggregate(pipelineStatesCount, {
        collation: { locale: 'vi' }
      }).exec()
    ])

    return { data: users as IUser[], total: count[0]?.total || 0 }
  }
}

export default UserService
