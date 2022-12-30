import { Joi, SchemaOptions, Segments } from 'celebrate'

export const GET_USER_LIST_RULES: SchemaOptions = {
  [Segments.QUERY]: Joi.object().keys({
    limit: Joi.number(),
    offset: Joi.number(),
    sortBy: Joi.string(),
    sortDirection: Joi.string(),
    username: Joi.string(),
    fullName: Joi.string()
  })
}
