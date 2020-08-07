import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  number = 0;

  thing$: Observable<number> = of(75).pipe(delay(3000))
  increment() {
    this.number++;
  }
}
