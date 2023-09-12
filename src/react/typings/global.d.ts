interface IError {
  [key: string]: string
}

interface ICommonFields {
  id: string
  name: string
  description: string
}

interface IClientItem extends ICommonFields {
  imgURL: string
  isActive: boolean
  accountName: string
}

interface IServiceItem extends ICommonFields {
  isActive: boolean
}

interface IPartnerData extends ICommonFields {
  website: string
  imgURL: string
  types: string[]
  regions: string[]
  email: string
  // emailTecnico: string
  // emailMarketing: string
  // emailFinanceiro: string
  status: 'PENDING' | 'PROCESSING' | 'APPROVED' | string
  maincategory: string
}

interface ISelectOption {
  label: string
  value: string
}
