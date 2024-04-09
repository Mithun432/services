import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskkkComponent } from './taskkk.component';

describe('TaskkkComponent', () => {
  let component: TaskkkComponent;
  let fixture: ComponentFixture<TaskkkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskkkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
