// Dependencies
import React, { useState } from 'react'
import { Tab, Tabs, PageBlock } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

// Containers
import PartnerData from './containers/PartnerData'
import PartnerServices from './containers/PartnerServices'
import PartnerClients from './containers/PartnerClients'

// Hooks
import usePartnerData from './hooks/usePartnerData'

const App = () => {
  const { partnerData } = usePartnerData()
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <Tabs fullWidth>
      <Tab
        active={currentTab === 0}
        onClick={() => setCurrentTab(0)}
        label={<FormattedMessage id="partnernetwork.app.tab.partnerdata" />}
      >
        <PageBlock variation="full">
          <PartnerData />
        </PageBlock>
      </Tab>

      <Tab
        active={currentTab === 1}
        disabled={!partnerData.id}
        onClick={() => setCurrentTab(1)}
        label={<FormattedMessage id="partnernetwork.app.tab.services" />}
      >
        <PageBlock variation="full">
          <PartnerServices />
        </PageBlock>
      </Tab>

      <Tab
        active={currentTab === 2}
        disabled={!partnerData.id}
        onClick={() => setCurrentTab(2)}
        label={<FormattedMessage id="partnernetwork.app.tab.clients" />}
      >
        <PageBlock variation="full">
          <PartnerClients />
        </PageBlock>
      </Tab>
    </Tabs>
  )
}

export default App
