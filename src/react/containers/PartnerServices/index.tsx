// Dependencies
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

// Components
import NewServiceForm from './NewServiceForm'
import ServicesTable from './ServicesTable'
import Title from '../../components/Title'

const PartnerServices = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Title>
        <FormattedMessage id="partnernetwork.app.services-title" />
      </Title>

      {!showForm && <ServicesTable setShowForm={setShowForm} />}

      {showForm && <NewServiceForm setShowForm={setShowForm} />}
    </>
  )
}

export default PartnerServices
