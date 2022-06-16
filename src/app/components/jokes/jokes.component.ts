import { Component, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes = [
    {
      question: 'How do you call somebody without a nose?',
      answer: 'Nobody knows!',
    },
  ];

  addJoke(joke: Joke): void {
    // Var arī tā: this.tasks.push()
    this.jokes = [...this.jokes, joke];
    console.log(this.jokes)
  }

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
