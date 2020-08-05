import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibComponent } from './my-lib.component';
import { InnerModule } from './inner/inner.module';

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    CommonModule,
  ],
  exports: [MyLibComponent, InnerModule]
})
export class MyLibModule { }
