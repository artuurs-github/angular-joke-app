import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @ViewChild('jokeAnswer') jokeAnswer?: ElementRef;
  @ViewChild('tellMeButton') tellMeButton?: ElementRef;

  @Input()
  joke?: Joke;

  @Output() deleteJokeEvent = new EventEmitter<null>();

  toggleJokeAnswer(): void {
    // this.jokeAnswer?.classList.toggle('hidden');
    this.jokeAnswer?.nativeElement.classList.toggle('hidden');
    // this.tellMeButton?.nativeElement.innerHTML;
    this.tellMeButton?.nativeElement.classList.add('remove');
  }

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }
}
