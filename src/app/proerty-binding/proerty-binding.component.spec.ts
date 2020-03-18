import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProertyBindingComponent } from './proerty-binding.component';

describe('ProertyBindingComponent', () => {
  let component: ProertyBindingComponent;
  let fixture: ComponentFixture<ProertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
