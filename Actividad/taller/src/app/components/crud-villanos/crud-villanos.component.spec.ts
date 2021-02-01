import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVillanosComponent } from './crud-villanos.component';

describe('CrudVillanosComponent', () => {
  let component: CrudVillanosComponent;
  let fixture: ComponentFixture<CrudVillanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudVillanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudVillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
