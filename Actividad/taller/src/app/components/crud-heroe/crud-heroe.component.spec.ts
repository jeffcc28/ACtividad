import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHeroeComponent } from './crud-heroe.component';

describe('CrudHeroeComponent', () => {
  let component: CrudHeroeComponent;
  let fixture: ComponentFixture<CrudHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
