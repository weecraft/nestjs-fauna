import { ModuleMetadata } from '@nestjs/common'
import { ClientConfiguration } from 'fauna'

export type FaunaModuleOptions = ClientConfiguration

export class FaunaQueryData {
  id: string
  coll: any
  ts: any
}

export interface FaunaModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string
  useFactory?: (
    ...args: any[]
  ) => Promise<FaunaModuleOptions> | FaunaModuleOptions
  inject?: any[]
}
