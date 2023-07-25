// Dependencies
import type {
  InstanceOptions,
  IOContext,
  IOResponse,
  RequestConfig,
} from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface GetDataByQuery {
  query: string
  variables: {
    [key: string]: any
  }
}

export default class PartnerVTEXServices extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://partnernetwork.myvtex.com', context, options)
  }

  public async getDataWithFormData(
    formData: any,
    config?: RequestConfig
  ): Promise<IOResponse<any>> {
    return this.http.post('/_v/public/graphql/v1', formData, config)
  }

  public async getDataByQuery({
    query,
    variables,
  }: GetDataByQuery): Promise<IOResponse<any>> {
    return this.http.postRaw('/_v/public/graphql/v1', {
      query,
      variables,
    })
  }
}
