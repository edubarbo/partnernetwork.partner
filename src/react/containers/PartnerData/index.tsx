// Dependencies
import React, { useState, useEffect, ChangeEvent } from 'react'
import {
  Input,
  Button,
  Textarea,
  Spinner,
  Alert,
  CheckboxGroup,
  Dropdown
} from 'vtex.styleguide'
import { FormattedMessage, useIntl } from 'react-intl'
import { useQuery, gql, useMutation } from '@apollo/client'
import { useRuntime } from 'vtex.render-runtime'

// Data
import countries from './countries'
import partnerTypes from './partnerTypes'
import { categories } from './categories'
import { mainCategories } from './maincategories'

// Components
import Select from '../../components/Select'
import UploadImageContainer from '../../components/UploadImageContainer'

// Hooks
import usePartnerData from '../../hooks/usePartnerData'

const countryOptions = countries.map((country) => ({
  label: country,
  value: country,
}))
//TODO - Continuar testando input da linha 675
const partnerQuery = gql`
  query getPartner($account: String) {
    partner(account: $account)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      email
      # emailTecnico
      # emailMarketing
      # emailFinanceiro
      status
      imgURL
      website
      types
      regions
      description
      categories {
        id
        name
      }
      subcategories {
        categoryID
        subcategories {
          id
          name
        }
      }
    }
  }
`

const savePartnerQuery = gql`
  mutation savePartner($input: PartnerInput) {
    partner: savePartner(input: $input)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      email
      # emailTecnico
      # emailMarketing
      # emailFinanceiro
      status
      imgURL
      website
      types
      regions
      description
    }
  }
`

let partnerFIle: File

const categoriesInitialState = categories.reduce(
  (obj, category) => ({
    ...obj,
    [category.id]: category.subcategories.reduce(
      (obj2, subcategory) => ({
        ...obj2,
        [subcategory.id]: {
          checked: false,
          label: subcategory.name,
        },
      }),
      {}
    ),
  }),
  {}
)

interface CheckedMap {
  label?: string
  checked: boolean
}

interface CategoriesCheckboxes {
  [key: string]: CheckedMap
}

const PartnerData = () => {
  const { account } = useRuntime()

  const { data, loading: loadingData } = useQuery(partnerQuery, {
    variables: {
      account,
    },
  })

  const [
    savePartner,
    { data: newData, loading: isSavingPartner },
  ] = useMutation(savePartnerQuery)

  const { partnerData, updateField, updateData } = usePartnerData()

  const [showInfo, setShowInfo] = useState(true)
  const [errors, setErrors] = useState<IError>({})
  const intl = useIntl()

  const [
    showCategoriesCheckboxesError,
    setShowCategoriesCheckboxesError,
  ] = useState(false)

  const [categoriesCheckboxes, setCategoriesCheckboxes] = useState<
    CategoriesCheckboxes
  >(categoriesInitialState)

  const removeErrorByField = (
    field: Parameters<typeof updateField>[0]['field']
  ) => {
    if (!(field in errors)) return

    const newErrors = { ...errors }

    delete newErrors[field]

    setErrors(newErrors)
  }

  const handleInputChange = (
    value: Parameters<typeof updateField>[0]['value'],
    field: Parameters<typeof updateField>[0]['field']
  ) => {
    removeErrorByField(field)

    updateField({
      field,
      value,
    })
  }

  const handleSelectChange = (
    selectOptions: ISelectOption | ISelectOption[],
    field: Parameters<typeof updateField>[0]['field']
  ) => {
    removeErrorByField(field)

    const value = Array.isArray(selectOptions)
      ? selectOptions.map((option) => option.value)
      : selectOptions.value

    updateField({
      field,
      value,
    })
  }

    const isEmail = (email: string) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i.test(email)
    
    const isDescription = (description: string) =>
     /['"]/.test(description)

  const validateInputs = ({ showErrors = true }) => {
    const newErrors: IError = {}

    if (partnerData.name === '') {
      newErrors.name = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (partnerData.name.length < 3) {
      // newErrors.name = 'Must be 3 characters or more'
      newErrors.name = intl.formatMessage({
        id: 'partnernetwork.app.errors.name',
      })
    }

    if (partnerData.description === '') {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.required"
      });
    } else if (isDescription(partnerData.description)) {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.description"
      });
    } else if (partnerData.description.length < 200) {
      newErrors.description = intl.formatMessage({
        "id": "partnernetwork.app.errors.description"
      });
    }

    if (partnerData.imgURL === '') {
      newErrors.imgURL = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    }

    if (partnerData.website === '') {
      newErrors.website = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    }

    if (partnerData.regions.length === 0) {
      newErrors.regions = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    }

    if (partnerData.types.length === 0) {
      newErrors.types = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    }

    if (partnerData.email.length === 0) {
      newErrors.email = intl.formatMessage({
        id: 'partnernetwork.app.errors.required',
      })
    } else if (isEmail(partnerData.email)) {
      newErrors.email = intl.formatMessage({
        id: 'partnernetwork.app.errors.email',
      })
    }

    // if (partnerData.emailTecnico.length === 0) {
    //   newErrors.emailTecnico = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailTecnico)) {
    //   newErrors.emailTecnico = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }

    // if (partnerData.emailMarketing.length === 0) {
    //   newErrors.emailMarketing = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailMarketing)) {
    //   newErrors.emailMarketing = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }

    // if (partnerData.emailFinanceiro.length === 0) {
    //   newErrors.emailFinanceiro = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.required',
    //   })
    // } else if (isEmail(partnerData.emailFinanceiro)) {
    //   newErrors.emailFinanceiro = intl.formatMessage({
    //     id: 'partnernetwork.app.errors.email',
    //   })
    // }

    const isValid = JSON.stringify(newErrors) === '{}'

    if (!isValid && showErrors) setErrors(newErrors)

    return isValid
  }

  const getCategoriesAndSubcategoriesSelected = () => {
    const selectedCategories: Array<{
      id: string
      name: string
    }> = []
    const selectedSubcategories: Array<{
      categoryID: string
      subcategories: Array<{
        id: string
        name: string
      }>
    }> = []

    Object.keys(categoriesCheckboxes).forEach((categoryID) => {
      const subcategoriesObj = categoriesCheckboxes[categoryID]
      const subcategories = Object.entries(subcategoriesObj)
        .filter(([, subcategory]) => subcategory.checked)
        .map(([subcategoryID, subcategory]) => ({
          id: subcategoryID,
          name: subcategory.label,
        }))

      if (subcategories.length === 0) return

      const category = categories.find(({ id }) => id === categoryID)

      if (category) {
        selectedCategories.push({
          id: categoryID,
          name: category.name,
        })
      }

      selectedSubcategories.push({
        categoryID,
        subcategories,
      })
    })

    return {
      selectedCategories,
      selectedSubcategories,
    }
  }

  const handleButtonSaveClick = async () => {
    const isValid = validateInputs({ showErrors: true })
    const {
      selectedCategories,
      selectedSubcategories,
    } = getCategoriesAndSubcategoriesSelected()

    if (!isValid) return

    if (selectedCategories.length === 0) {
      setShowCategoriesCheckboxesError(true)

      return
    }

    const { id, status, imgURL, ...partialPartnerData } = partnerData

    const imgFile = partnerFIle ? { imgFile: partnerFIle } : {}

    savePartner({
      variables: {
        input: {
          ...imgFile,
          ...partialPartnerData,
          account,
          categories: selectedCategories,
          subcategories: selectedSubcategories,
        },
      },
    })
  }

  useEffect(() => {
    if (!data?.partner) return

    const {
      categories: _categories,
      subcategories,
      ...partialPartner
    } = data.partner

    setCategoriesCheckboxes((prevState) => {
      const newCheckedMap = _categories.reduce((obj: any, category: any) => {
        const subcategoryFinded = subcategories.find(
          ({ categoryID }: { categoryID: string }) => categoryID === category.id
        )

        const prevSubCategories = categoriesCheckboxes[category.id]

        return {
          ...obj,
          [category.id]: subcategoryFinded.subcategories.reduce(
            (obj2: any, subcategory: any) => {
              return {
                ...obj2,
                [subcategory.id]: {
                  checked: true,
                  label: subcategory.name,
                },
              }
            },
            {
              ...prevSubCategories,
            }
          ),
        }
      }, {})

      return {
        ...prevState,
        ...newCheckedMap,
      }
    })

    updateData(partialPartner)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (!newData || !newData.partner) return

    updateData(newData.partner)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData])

  useEffect(() => {
    if (!showCategoriesCheckboxesError) return

    const { selectedCategories } = getCategoriesAndSubcategoriesSelected()

    if (selectedCategories.length !== 0) {
      setShowCategoriesCheckboxesError(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesCheckboxes])

  const inputCompanyNamePlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-company-name.placeholder',
  })

  const inputWebsitePlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-website.placeholder',
  })

  const inputDescriptionPlaceholder = intl.formatMessage({
    id: 'partnernetwork.app.input-description.placeholder',
  })

  const regionsValue = partnerData.regions
    .map((region) => countryOptions.find((country) => country.value === region))
    .filter(Boolean)

  const typesValue = partnerData.types
    .map((type) =>
      partnerTypes.find((partnerType) => partnerType.value === type)
    )
    .filter(Boolean)

  if (loadingData) return <Spinner />

  const closedMessage = () => {
    setShowInfo(false)
  }

  return (
    <>
      <div className="mb6">
        {partnerData.status === 'APPROVED' && (
          <Alert type="success">
            <FormattedMessage id="partnernetwork.app.status-approved" />
          </Alert>
        )}

        {partnerData.status === 'PENDING' && (
          <>
            {showInfo && (
              <Alert type="warning" onClose={closedMessage}>
                <FormattedMessage id="partnernetwork.app.status-waiting" />
              </Alert>
            )}
            <Alert type="warning">
              <FormattedMessage id="partnernetwork.app.status-pending" />
            </Alert>
          </>
        )}
      </div>

      <div className="mb8">
        <UploadImageContainer
          id="company-logo"
          error={!!errors.imgURL}
          imgURL={partnerData.imgURL}
          errorMessage={errors.imgURL}
          title={
            partnerData.name || (
              <FormattedMessage id="partnernetwork.app.company-name" />
            )
          }
          description={
            <FormattedMessage id="partnernetwork.app.upload-image-recommendation" />
          }
          onImageChange={(imgURL, file) => {
            if (file) {
              partnerFIle = file
            }

            handleInputChange(imgURL, 'imgURL')
          }}
        />
      </div>

      <div className="mb7 flex flex-column flex-row-l">
        <div className="w-100 mb7 mb0-l mr7-l">
          <Input
            required
            name="name"
            value={partnerData.name}
            error={errors.name}
            errorMessage={errors.name}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'name')
            }}
            placeholder={inputCompanyNamePlaceholder}
          />
        </div>

        <div className="w-100">
          <div className="select-input-container">
            <Select
              multi
              options={countryOptions}
              errorMessage={errors.types}
              value={regionsValue as ISelectOption[]}
              onChange={(selectOption) =>
                handleSelectChange(selectOption, 'regions')
              }
              placeholder={
                <FormattedMessage id="partnernetwork.app.select-region.placeholder" />
              }
            />
          </div>
        </div>
      </div>

      <div className="mb7 flex flex-column flex-row-l">
        <div className="w-100 mb7 mb0-l mr7-l">
          <div className="select-input-container">
            <Select
              multi
              options={partnerTypes}
              errorMessage={errors.types}
              value={typesValue as ISelectOption[]}
              onChange={(selectOption) =>
                handleSelectChange(selectOption, 'types')
              }
              placeholder={
                <FormattedMessage id="partnernetwork.app.select-partner-type.placeholder" />
              }
            />
          </div>
        </div>

        <div className="w-100">
          <Input
            required
            type="url"
            value={partnerData.website}
            error={errors.website}
            errorMessage={errors.website}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'website')
            }}
            placeholder={inputWebsitePlaceholder}
          />
        </div>
      </div>

      <div className="mb7 mb8-l flex">
        <div className="w-100">
          <Input
            required
            type="email"
            value={partnerData.email}
            error={errors.email}
            errorMessage={errors.email}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'email')
            }}
            placeholder="Email*"
          />
        </div>
      </div>

      {/* <div className="mb7 mb8-l flex">
        <div className="w-100">
          <Input
            required
            type="email"
            value={partnerData.emailFinanceiro}
            error={errors.emailFinanceiro}
            errorMessage={errors.emailFinanceiro}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'emailFinanceiro')
            }}
            placeholder="Financial Email*"
          />
        </div>
      </div>

      <div className="mb7 mb8-l flex">
        <div className="w-100">
          <Input
            required
            type="email"
            value={partnerData.emailMarketing}
            error={errors.emailMarketing}
            errorMessage={errors.emailMarketing}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'emailMarketing')
            }}
            placeholder="Marketing Email*"
          />
        </div>
      </div>

      <div className="mb7 mb8-l flex">
        <div className="w-100">
          <Input
            required
            type="email"
            value={partnerData.emailTecnico}
            error={errors.emailTecnico}
            errorMessage={errors.emailTecnico}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(value, 'emailTecnico')
            }}
            placeholder="Tecnical Email*"
          />
        </div>
      </div> */}

      <div className="mb7 about-the-partner">
        <h3 className="t-heading-3">
          <FormattedMessage id="partnernetwork.app.about-the-partner" />
        </h3>
        {partnerData.description.length < 200 ? (
          <small className="subtitle">
            <FormattedMessage id="partnernetwork.app.about-the-partner-minimum" />
            : {partnerData.description.length}/200
          </small>
        ) : null}

        <Textarea
          required
          resize="none"
          name="description"
          value={partnerData.description}
          error={errors.description}
          onChange={({
            target: { value },
          }: ChangeEvent<HTMLTextAreaElement>) => {
            handleInputChange(value, 'description')
          }}
          errorMessage={errors.description}
          placeholder={inputDescriptionPlaceholder}
        />
      </div>

      <div className="mb7 categories-and-subcategories">
        <h3 className="t-heading-3">
          <FormattedMessage id="partnernetwork.app.main-category-title"/>
        </h3>
        <small>
          <FormattedMessage id="partnernetwork.app.main-category-subtitle"/>
        </small>

        <div>
          <Dropdown 
            options={mainCategories}
            value={partnerData.maincategory}
            onChange={(e: Event, value: string) =>
              handleInputChange(value, 'maincategory')
            }
          />
        </div>
      </div>

      <div className="mb7 categories-and-subcategories">
        <h3 className="t-heading-3">
          <FormattedMessage id="partnernetwork.app.categories-and-subcategories-title" />
        </h3>
        <small>
          <FormattedMessage id="partnernetwork.app.categories-and-subcategories-subtitle" />
        </small>

        {categories.map((category) => {
          const checkedMap = categoriesCheckboxes[category.id]

          return (
            <div className="mb6" key={category.id}>
              <CheckboxGroup
                value="simple"
                id={category.id}
                name={category.id}
                label={category.name}
                checkedMap={checkedMap}
                onGroupChange={(newCheckedMap: CheckedMap) => {
                  setCategoriesCheckboxes((prevState) => ({
                    ...prevState,
                    [category.id]: newCheckedMap,
                  }))
                }}
              />
            </div>
          )
        })}

        {showCategoriesCheckboxesError && (
          <Alert type="error">
            You need to select at lest 1 category and subcategory.
          </Alert>
        )}
      </div>

      <div className="actions flex flex-column-reverse flex-row-l justify-end-l">
        <div className="mb3 mb0-l button-save-container">
          <Button
            onClick={handleButtonSaveClick}
            disabled={!validateInputs({ showErrors: false }) || isSavingPartner}
          >
            <>
              {isSavingPartner ? (
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

export default PartnerData
