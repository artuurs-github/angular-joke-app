import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokesFormComponent } from './components/jokes-form/jokes-form.component';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { JokesCardComponent } from './components/jokes-card/jokes-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokesFormComponent,
    JokesListComponent,
    JokesCardComponent, // ! Šeit jāpiereģistrē visas izmantotās komponentes.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Router modulis.
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap kā galvenās komponentes norādītājs.
})
export class AppModule {}
