import { NgModule } from '@angular/core';

import { SharedCommonModule } from './shared-common.module';

@NgModule({
    imports: [SharedCommonModule],
    declarations: [],
    exports: [SharedCommonModule],
})
export class SharedModule {}
