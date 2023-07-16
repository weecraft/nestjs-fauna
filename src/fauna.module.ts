import { DynamicModule, Module } from '@nestjs/common'
import { FaunaCoreModule } from './fauna-core.module'
import { FaunaModuleAsyncOptions, FaunaModuleOptions } from './fauna.interface'

@Module({})
export class FaunaModule {
  static forRoot(options?: FaunaModuleOptions): DynamicModule {
    return {
      module: FaunaModule,
      imports: [FaunaCoreModule.forRoot(options)],
    }
  }

  static forRootAsync(options: FaunaModuleAsyncOptions): DynamicModule {
    return {
      module: FaunaModule,
      imports: [FaunaCoreModule.forRootAsync(options)],
    }
  }
}
