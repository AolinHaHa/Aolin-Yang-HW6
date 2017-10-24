import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { indexComponent } from './index.component';

describe('indexComponent', () => {
  let component: indexComponent;
  let fixture: ComponentFixture<indexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ indexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(indexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
