import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCharComponent } from './random-char.component';

describe('RandomCharComponent', () => {
  let component: RandomCharComponent;
  let fixture: ComponentFixture<RandomCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
