// Dependencies
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Input, Button, Textarea, Spinner } from 'vtex.styleguide'
import { FormattedMessage, useIntl } from 'react-intl'
import { useMutation, gql } from '@apollo/client'

// Hooks
import usePartnerData from '../../../hooks/usePartnerData'
import usePartnerServices from '../../../hooks/usePartnerServices'

// Queries
const createServiceQuery = gql`
  mutation createService($partnerID: ID, $input: ServiceInput) {
    newService: createService(partnerID: $partnerID, input: $input) {
      id
      name
      isActive
      description
    }
  }
`

interface NewServiceFormProps {
  setShowForm(showForm: boolean): void
}

const NewServiceForm: React.FC<NewServiceFormProps> = ({ setShowForm }) => {
  const { partnerData } = usePartnerData()
  const { addService } = usePartnerServices()
  const [data, setData] = useState<Omit<IServiceItem, 'id'>>({
    name: '',
    description: '',
    isActive: true,
  })

  const [createService, { data: newData, loading }] = useMutation(
    createServiceQuery
  )

  const intl = useIntl()
  const [errors, setErrors] = useState<IError>({})

  const handleButtonSaveClick = () => {
    const newErrors: IError = {}
    const { name, description } = data

    if (name === '') {
      newErrors.name = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (name.length < 3) {
      newErrors.name = intl.formatMessage({
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

    createService({
      variables: {
        partnerID: partnerData.id,
        input: data,
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

  const inputServiceNamePlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-service-name.placeholder',
  })

  const inputServiceDescriptionPlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-service-description.placeholder',
  })

  useEffect(() => {
    if (!newData) return

    addService(newData.newService)
    setShowForm(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData])

  return (
    <>
      <div className="mb4 mb7-l flex">
        <Input
          required
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          error={errors.name}
          errorMessage={errors.name}
          placeholder={inputServiceNamePlaceholder}
        />
      </div>

      <div className="mb7 about-the-service">
        <h3 className="t-heading-3">
          <FormattedMessage id="partnernetwork.app.about-the-service" />
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
          placeholder={inputServiceDescriptionPlaceholder}
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

export default NewServiceForm
