import { ModuleMetadata } from '@nestjs/common'
import { ClientConfig } from 'faunadb'

export type FaunaModuleOptions = ClientConfig

interface RefQueryData extends Object {
  id: any
}

export class QueryData<T extends Object> {
  ref: RefQueryData
  ts: number
  data: T
}

export interface FaunaModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string
  useFactory?: (
    ...args: any[]
  ) => Promise<FaunaModuleOptions> | FaunaModuleOptions
  inject?: any[]
}
