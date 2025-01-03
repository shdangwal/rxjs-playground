import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-playground';
  data: number = 0;
  constructor() {
    const numbers$ = of([1, 2, 3, 4, 5]);

    numbers$.subscribe((data) => {
      console.log('subscriber using of', data);
    });

    const numbers1$ = from([1, 2, 3, 4, 5]);

    numbers1$.subscribe((data) => {
      console.log('subscriber using from', data);
      this.data = data;
    });

    const users = [
      { id: 1, name: 'Bob', age: 30 },
      { id: 2, name: 'Jack', age: 40 },
      { id: 3, name: 'Maria', age: 42 },
    ];
    const user$ = of(users);
  }
}
