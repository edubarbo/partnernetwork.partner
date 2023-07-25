// Dependencies
import React, { useEffect } from 'react'
import { Button, Spinner } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'
import { useQuery, useMutation, gql } from '@apollo/client'

// Components
import Table from '../../../components/Table'
import TableRow from '../../../components/TableRow'

// Hooks
import usePartnerData from '../../../hooks/usePartnerData'
import usePartnerServices from '../../../hooks/usePartnerServices'

// Queries
const getServicesQuery = gql`
  query getServices($partnerID: ID) {
    services(partnerID: $partnerID)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      isActive
      description
    }
  }
`

const saveServicesQuery = gql`
  mutation saveServices($partnerID: ID, $services: [ServiceInput!]) {
    saveServices(partnerID: $partnerID, services: $services)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      isActive
      description
    }
  }
`

const updateServiceQuery = gql`
  mutation updateService($id: ID, $input: ServiceInput) {
    updateService(id: $id, input: $input)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      isActive
      description
    }
  }
`

interface ServicesTableProps {
  setShowForm(showForm: boolean): void
}

const ServicesTable: React.FC<ServicesTableProps> = ({ setShowForm }) => {
  const { partnerData } = usePartnerData()
  const {
    services,
    addServices,
    removeService,
    updateService,
  } = usePartnerServices()

  const { data, loading: getLoading } = useQuery(getServicesQuery, {
    variables: {
      partnerID: partnerData.id,
    },
  })

  const [saveServicesMutation, { loading }] = useMutation(saveServicesQuery)
  const [updateServiceMutation] = useMutation(updateServiceQuery)

  const handleButtonSaveClick = () => {
    saveServicesMutation({
      variables: {
        services,
        partnerID: partnerData.id,
      },
    })
  }

  useEffect(() => {
    if (!data || !data.services || services.length > 0) return

    addServices(data.services)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (getLoading) {
    return (
      <div className="flex justify-center ma6">
        <Spinner color="#f71963" size={50} />
      </div>
    )
  }

  return (
    <>
      {services && services.length > 0 && (
        <Table>
          {services.map((service) => (
            <TableRow
              key={service.id}
              name={service.name}
              showEmptyImage={false}
              isActive={service.isActive}
              description={service.description}
              accountName=""
              onButtonRemoveClick={() => {
                const { id, ...serviceWithoutID } = service

                updateServiceMutation({
                  variables: {
                    id,
                    input: {
                      ...serviceWithoutID,
                      isRemoved: true,
                    },
                  },
                })

                removeService(id)
              }}
              onCheckboxChange={({ target: { checked } }) => {
                updateService({
                  ...service,
                  isActive: checked,
                })
              }}
            />
          ))}
        </Table>
      )}

      <div className="actions flex flex-column flex-row-l justify-between-l">
        <div className="button-add-container mb4 mb0-l w-auto-l">
          {services.length < 5 && (
            <Button onClick={() => setShowForm(true)}>
              <FormattedMessage id="partnernetwork.app.button-add-service" />
            </Button>
          )}
        </div>

        <div className="actions flex flex-column-reverse flex-row-l justify-end-l">
          {services.length > 0 && (
            <div className="mb4 mb0-l button-save-container">
              <Button onClick={handleButtonSaveClick} disabled={loading}>
                <>
                  {loading ? (
                    <Spinner color="#FFF" size={20} />
                  ) : (
                    <FormattedMessage id="partnernetwork.app.button-save" />
                  )}
                </>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ServicesTable
