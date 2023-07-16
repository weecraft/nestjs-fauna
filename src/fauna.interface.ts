import { ModuleMetadata } from '@nestjs/common'
import { ClientConfig } from 'faunadb'

export type FaunaModuleOptions = ClientConfig

export interface FaunaModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string
  useFactory?: (
    ...args: any[]
  ) => Promise<FaunaModuleOptions> | FaunaModuleOptions
  inject?: any[]
}
