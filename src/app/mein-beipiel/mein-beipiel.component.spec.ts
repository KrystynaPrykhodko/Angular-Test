import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinBeipielComponent } from './mein-beipiel.component';

describe('MeinBeipielComponent', () => {
  let component: MeinBeipielComponent;
  let fixture: ComponentFixture<MeinBeipielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeinBeipielComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeinBeipielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
