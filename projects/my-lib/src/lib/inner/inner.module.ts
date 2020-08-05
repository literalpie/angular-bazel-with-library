import { NgModule } from '@angular/core';

import { InnerDirective } from './inner.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    A11yModule,
  ],
  declarations: [
    InnerDirective,
  ],
  exports: [
    InnerDirective,
  ],
})
export class InnerModule { }
