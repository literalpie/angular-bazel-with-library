import { Directive } from '@angular/core';

/** A directive that can be added to Material icons to use the @hyland/icons font */
@Directive({
  selector: '[libInner]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'inner-directive',
  },
})
export class InnerDirective { }
