import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  link: createUploadLink({
    uri: `${window.location.origin}/gql`,
  }),
})
