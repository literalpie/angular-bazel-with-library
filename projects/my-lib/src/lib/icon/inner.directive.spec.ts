import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HyIconDirective } from './hy-icon.directive';
// tslint:disable: max-classes-per-file
@Component({
  template:
    `<mat-icon hyIcon>equals</mat-icon>`,
})
class IconTestHostComponent { }

describe('Directive: HySelectedListItemDirective', () => {
  let fixture: ComponentFixture<IconTestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconTestHostComponent,
        MockMatIconComponent,
        HyIconDirective,
      ],
    });
    fixture = TestBed.createComponent(IconTestHostComponent);
    fixture.detectChanges();
  });

  it('should apply hyland-icons class to mat-icon', () => {
    const directiveEl = fixture.debugElement.query(By.css('mat-icon'));
    expect(directiveEl.nativeElement.classList.contains('hyland-icons')).toEqual(true);
  });
});

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-icon',
  template: `<ng-content></ng-content>`,
})
class MockMatIconComponent { }
