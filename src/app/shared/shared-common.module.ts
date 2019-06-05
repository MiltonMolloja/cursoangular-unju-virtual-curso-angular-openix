import { NgModule } from '@angular/core';

import { SharedLibsModule } from './shared-libs.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    imports: [SharedLibsModule],
    declarations: [NotFoundComponent],
    exports: [SharedLibsModule, NotFoundComponent]
})
export class SharedCommonModule {}
