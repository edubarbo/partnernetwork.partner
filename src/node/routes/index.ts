import { method } from '@vtex/api'
import { handleGql } from './gql'

export default {
  gql: method({
    POST: handleGql,
  }),
}
