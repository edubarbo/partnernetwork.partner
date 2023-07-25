// Dependencies
import FormData from 'form-data'
import asyncBusboy from 'async-busboy'
import { json } from 'co-body'

export async function handleGql(ctx: Context, next: () => Promise<any>) {
  if (ctx.request.is('multipart/*')) {
    const formData = new FormData()

    const { fields, files } = await asyncBusboy(ctx.req)

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value)
    })

    files?.forEach((file, index) => {
      formData.append(`${index + 1}`, file)
    })

    const response = await ctx.clients.partnerVtexServices.getDataWithFormData(
      formData,
      {
        headers: formData.getHeaders(),
      }
    )

    ctx.body = response
  } else {
    const body = await json(ctx.req)

    const { query, variables } = body

    const response = await ctx.clients.partnerVtexServices.getDataByQuery({
      query,
      variables,
    })

    ctx.body = response.data
  }

  await next()
}
