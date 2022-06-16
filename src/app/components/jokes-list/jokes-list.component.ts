import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes?: Joke[];

  @Output() deleteJokeEvent = new EventEmitter<number>()

  deleteJoke(index: number): void {
    this.deleteJokeEvent.emit(index);
  }
}
