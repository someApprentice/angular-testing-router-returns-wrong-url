import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <p>
      main works!
    </p>

    <button (click)="go()">Go</button>
  `,
  styles: ``
})
export class MainComponent {
  constructor(private router: Router) {}

  go() {
    this.router.navigate(['routed']);
  }
}
