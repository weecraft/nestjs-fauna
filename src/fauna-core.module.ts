import { Global, Module, DynamicModule } from '@nestjs/common'
import { FaunaModuleAsyncOptions, FaunaModuleOptions } from './fauna.interface'
import { FAUNA_MODULE_OPTIONS } from './fauna.constant'
import { FaunaService } from './fauna.service'

@Global()
@Module({
  providers: [FaunaService],
  exports: [FaunaService],
})
export class FaunaCoreModule {
  static forRoot(options: FaunaModuleOptions): DynamicModule {
    const faunaModuleOptions = {
      provide: FAUNA_MODULE_OPTIONS,
      useValue: options,
    }

    return {
      module: FaunaCoreModule,
      providers: [faunaModuleOptions],
      exports: [FaunaService],
    }
  }

  static forRootAsync(options: FaunaModuleAsyncOptions): DynamicModule {
    const faunaModuleOptions = {
      provide: FAUNA_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    }

    return {
      module: FaunaCoreModule,
      imports: options.imports,
      providers: [faunaModuleOptions],
      exports: [FaunaService],
    }
  }
}
