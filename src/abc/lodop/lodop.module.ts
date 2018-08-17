import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '../../util/index';

import { AdLodopConfig } from './lodop.config';
import { LodopService } from './lodop.service';

@NgModule({
  imports: [DelonUtilModule],
})
export class AdLodopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdLodopModule,
      providers: [LodopService, AdLodopConfig],
    };
  }
}
