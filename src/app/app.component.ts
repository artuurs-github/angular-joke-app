import { Component } from '@angular/core';

@Component({
  // Dekorators.
  selector: 'app-root', // Parasti sākas ar "app".
  templateUrl: './app.component.html', // Pateikts, kurš HTML fails attiecas uz šo komponenti.
  styleUrls: ['./app.component.scss'], // Piesaistīts .scss fails.
})
export class AppComponent {
  title = 'angular-gh-pages'; // i.e. const/let title = ...
  private _title = 'example';
  showTitle = true;

  sayHello(): void {
    // Šādi veidosim funkcijas priekš btnClick utt.
    console.log('Hello!');
  }

  // Var veidot arī private metodi, lai nerāda html failā.
  toggleTitleVisibility() {
    this.showTitle = !this.showTitle;
  }

  getTitle(): string {
    return this._title;
  }
}
