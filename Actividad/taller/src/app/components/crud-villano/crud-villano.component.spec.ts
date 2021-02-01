import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVillanoComponent } from './crud-villano.component';

describe('CrudVillanoComponent', () => {
  let component: CrudVillanoComponent;
  let fixture: ComponentFixture<CrudVillanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudVillanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudVillanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
