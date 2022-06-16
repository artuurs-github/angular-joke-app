import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesCardComponent } from './jokes-card.component';

describe('PlannerCardComponent', () => {
  let component: JokesCardComponent;
  let fixture: ComponentFixture<JokesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
