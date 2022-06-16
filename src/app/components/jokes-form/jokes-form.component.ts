import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
  @Output()
  addJokeEvent = new EventEmitter<Joke>();

  jokesForm: FormGroup = this.fb.group({});

  // Konstruktori! Te veicam injecting...
  // ..., lai pievienotu komponentei papildu funkcionalitātes lietas.
  // Konstruktors nostrādā uz ngOnInit hook-a.
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(): void {
    this.jokesForm = this.fb.group({
      // ['Sākumvērtība' (piem. true/ false; ggg; etc.), [] - validatoriem]
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  addJoke(): void {
    this.jokesForm.markAllAsTouched();
    if (this.jokesForm.valid) {
      this.addJokeEvent.emit(this.jokesForm.value);
      this.jokesForm.reset();
    }
    console.log(this.jokesForm.valid);
    console.log(this.jokesForm.value); //.valueChanges
  }
}
