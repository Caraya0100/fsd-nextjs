import { CmsApi, CmsModel } from '@shared/cms'

export async function getPosts(): Promise<CmsModel.Post[]> {
  return await CmsApi.getPosts()
}
