// Style
import './styles.global.css'

// Dependencies
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageHeader } from 'vtex.styleguide'
import { ApolloProvider } from '@apollo/client'

// App
import App from './App'

// Apollo Client
import { client } from './apolloClient'

// State
import { StateProvider } from './state/store'

const IndexApp: React.FC = () => (
  <ApolloProvider client={client}>
    <StateProvider>
      <Layout
        pageHeader={
          <PageHeader title={<FormattedMessage id="partnernetwork.title" />} />
        }
      >
        <App />
      </Layout>
    </StateProvider>
  </ApolloProvider>
)

export default IndexApp
