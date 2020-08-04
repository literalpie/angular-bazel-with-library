import { NgModule } from '@angular/core';

import { InnerDirective } from './inner.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // commenting this out allows the build to pass
    // CommonModule,
  ],
  declarations: [
    InnerDirective,
  ],
  exports: [
    InnerDirective,
  ],
})
export class InnerModule { }
