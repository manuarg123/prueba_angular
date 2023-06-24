import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogJokeComponent } from './dog-joke.component';

describe('DogJokeComponent', () => {
  let component: DogJokeComponent;
  let fixture: ComponentFixture<DogJokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogJokeComponent]
    });
    fixture = TestBed.createComponent(DogJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
