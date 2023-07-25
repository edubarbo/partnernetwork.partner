// Dependencies
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Input, Checkbox, Button, Textarea, Spinner } from 'vtex.styleguide'
import { FormattedMessage, useIntl } from 'react-intl'
import { useMutation, gql } from '@apollo/client'

// Components
import UploadImageContainer from '../../../components/UploadImageContainer'

// Hooks
import usePartnerData from '../../../hooks/usePartnerData'
import usePartnerClients from '../../../hooks/usePartnerClients'

// Queries
const createClientQuery = gql`
  mutation createClient($partnerID: ID, $input: ClientInput) {
    newClient: createClient(partnerID: $partnerID, input: $input) {
      id
      name
      imgURL
      isActive
      description
      accountName
    }
  }
`

interface NewClientFormProps {
  setShowForm(showForm: boolean): void
}

let clientFile: File

const NewClientForm: React.FC<NewClientFormProps> = ({ setShowForm }) => {
  const { partnerData } = usePartnerData()
  const { addClient } = usePartnerClients()
  const [data, setData] = useState<Omit<IClientItem, 'id'>>({
    name: '',
    imgURL: '',
    description: '',
    isActive: true,
    accountName: '',
  })

  const [createClient, { data: newData, loading }] = useMutation(
    createClientQuery
  )

  const intl = useIntl()
  const [errors, setErrors] = useState<IError>({})
  const [clientApproved, setClientApproved] = useState(false)

  const handleButtonSaveClick = () => {
    const newErrors: IError = {}
    const { name, description, accountName } = data

    if(!clientApproved) {
      newErrors.clientApproved = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    }

    if (name === '') {
      newErrors.name = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (name.length < 3) {
      newErrors.name = intl.formatMessage({
        id: 'partnernetwork.app.errors.name',
      })
    }

    if (accountName === '') {
      newErrors.accountName = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (accountName.length < 3) {
      newErrors.accountName = intl.formatMessage({
        id: 'partnernetwork.app.errors.name',
      })
    }

    if (description === '') {
      newErrors.description = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (description.length < 10) {
      newErrors.description = intl.formatMessage({
        id: 'partnernetwork.app.errors.description',
      })
    }

    if (JSON.stringify(newErrors) !== '{}') {
      setErrors(newErrors)

      return
    }

    const { imgURL, ...dataWithoutImgURL } = data

    createClient({
      variables: {
        partnerID: partnerData.id,
        input: {
          ...dataWithoutImgURL,
          imgFile: clientFile,
        },
      },
    })
  }

  const handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement

    if (target.name in errors) {
      const newErrors = { ...errors }

      delete newErrors[target.name]

      setErrors(newErrors)
    }

    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }))
  }

  const inputClientNamePlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-client-name.placeholder',
  })

  const inputClientAccountNamePlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-client-accountName.placeholder',
  })

  const inputClientDescriptionPlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-client-description.placeholder',
  })

  useEffect(() => {
    if (!newData) return

    addClient(newData.newClient)
    setShowForm(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData])

  return (
    <>
      <div className="mb8">
        <UploadImageContainer
          id="client-logo"
          onImageChange={(imgURL, file) => {
            if (file) {
              clientFile = file
            }

            setData((prevData) => ({
              ...prevData,
              imgURL,
            }))
          }}
          title={
            data.name || (
              <FormattedMessage id="partnernetwork.app.input-client-name.placeholder" />
            )
          }
          description={
            <FormattedMessage id="partnernetwork.app.upload-image-recommendation" />
          }
        />
      </div>

      <div className="flex">
        <Input
          required
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          error={errors.name}
          errorMessage={errors.name}
          placeholder={inputClientNamePlaceholder}
        />
      </div>
      <div className="flex mt4">
        <Input
          required
          id="accountName"
          name="accountName"
          value={data.accountName}
          onChange={handleInputChange}
          error={errors.accountName}
          errorMessage={errors.accountName}
          placeholder={inputClientAccountNamePlaceholder}
        />
      </div>
      <div className={`mt4 mb4 mb7-l flex ${errors.clientApproved ? 'check-error' : ''}`}>
        <Checkbox
          checked={clientApproved}
          id="clientApproved"
          label={<FormattedMessage id="partnernetwork.app.checkClientApproved" />}
          name="clientApproved"
          onChange={() => setClientApproved(!clientApproved)}
          value={clientApproved}
          required={true}
        />
      </div>

      <div className="mb7 about-the-client">
        <h3 className="t-heading-3">
          <FormattedMessage id="partnernetwork.app.about-the-client" />
        </h3>

        <Textarea
          required
          resize="none"
          id="description"
          name="description"
          value={data.description}
          onChange={handleInputChange}
          error={errors.description}
          errorMessage={errors.description}
          placeholder={inputClientDescriptionPlaceholder}
        />
      </div>

      <div className="actions flex flex-column-reverse flex-row-l justify-end-l">
        <div className="mr6-l button-cancel-container">
          <Button onClick={() => setShowForm(false)} disabled={loading}>
            <FormattedMessage id="partnernetwork.app.button-cancel" />
          </Button>
        </div>

        <div className="mb3 mb0-l button-save-container">
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
      </div>
    </>
  )
}

export default NewClientForm
