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
import usePartnerClients from '../../../hooks/usePartnerClients'

// Queries
const getClientsQuery = gql`
  query getClients($partnerID: ID) {
    clients(partnerID: $partnerID)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      imgURL
      isActive
      description
      accountName
    }
  }
`

const saveClientsQuery = gql`
  mutation saveClients($partnerID: ID, $clients: [ClientInput!]) {
    saveClients(partnerID: $partnerID, clients: $clients)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      imgURL
      isActive
      description
      accountName
    }
  }
`

const updateClientQuery = gql`
  mutation updateClient($id: ID, $input: ClientInput) {
    updateClient(id: $id, input: $input)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      imgURL
      isActive
      description
    }
  }
`

interface ClientsTableProps {
  setShowForm(showForm: boolean): void
}

const ClientsTable: React.FC<ClientsTableProps> = ({ setShowForm }) => {
  const { partnerData } = usePartnerData()
  const {
    clients,
    addClients,
    removeClient,
    updateClient,
  } = usePartnerClients()

  const { data, loading: getLoading } = useQuery(getClientsQuery, {
    variables: {
      partnerID: partnerData.id,
    },
  })

  const [saveClientsMutation, { loading }] = useMutation(saveClientsQuery)
  const [updateClientMutation] = useMutation(updateClientQuery)

  const handleButtonSaveClick = () => {
    const clientsWithoutImgURL = clients.map((client) => {
      const { imgURL, ...clientWithoutImgURL } = client

      return clientWithoutImgURL
    })

    saveClientsMutation({
      variables: {
        clients: clientsWithoutImgURL,
        partnerID: partnerData.id,
      },
    })
  }

  useEffect(() => {
    if (!data || !data.clients || clients.length > 0) return

    addClients(data.clients)

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
      {clients && clients.length > 0 && (
        <Table>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              name={client.name}
              imgURL={client.imgURL}
              isActive={client.isActive}
              description={client.description}
              accountName={client.accountName}
              onButtonRemoveClick={() => {
                const { id, imgURL, ...partialClient } = client

                updateClientMutation({
                  variables: {
                    id,
                    input: {
                      ...partialClient,
                      isRemoved: true,
                    },
                  },
                })

                removeClient(id)
              }}
              onCheckboxChange={({ target: { checked } }) => {
                updateClient({
                  ...client,
                  isActive: checked,
                })
              }}
            />
          ))}
        </Table>
      )}

      <div className="actions flex flex-column flex-row-l justify-between-l">
        <div className="button-add-container mb4 mb0-l w-auto-l">
          {clients.length < 5 && (
            <Button onClick={() => setShowForm(true)}>
              <FormattedMessage id="partnernetwork.app.button-add-client" />
            </Button>
          )}
        </div>

        <div className="actions flex flex-column-reverse flex-row-l justify-end-l">
          {clients.length > 0 && (
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

export default ClientsTable
