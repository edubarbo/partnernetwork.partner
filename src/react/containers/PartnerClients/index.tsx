// Dependencies
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

// Components
import NewClientForm from './NewClientForm'
import ClientsTable from './ClientsTable'
import Title from '../../components/Title'

const PartnerClients = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Title>
        <FormattedMessage id="partnernetwork.app.clients-title" />
      </Title>

      {!showForm && <ClientsTable setShowForm={setShowForm} />}

      {showForm && <NewClientForm setShowForm={setShowForm} />}
    </>
  )
}

export default PartnerClients
