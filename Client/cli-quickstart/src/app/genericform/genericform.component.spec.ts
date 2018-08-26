import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericformComponent } from './genericform.component';

describe('GenericformComponent', () => {
  let component: GenericformComponent;
  let fixture: ComponentFixture<GenericformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
