import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsComponent } from './labs.component';

describe('LabsComponent', () => {
  let component: LabsComponent;
  let fixture: ComponentFixture<LabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
