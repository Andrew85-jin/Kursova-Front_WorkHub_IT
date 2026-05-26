import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResume } from './create-resume';

describe('CreateResume', () => {
  let component: CreateResume;
  let fixture: ComponentFixture<CreateResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateResume],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
