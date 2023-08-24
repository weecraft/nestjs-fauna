import { Inject, Injectable } from '@nestjs/common'
import { Client } from 'fauna'
import { FAUNA_MODULE_OPTIONS } from './fauna.constant'
import { FaunaModuleOptions } from './fauna.interface'

@Injectable()
export class FaunaService extends Client {
  constructor(
    @Inject(FAUNA_MODULE_OPTIONS)
    private readonly options: FaunaModuleOptions,
  ) {
    if (!(options && options.secret)) {
      return
    }
    super(options)
  }
}
