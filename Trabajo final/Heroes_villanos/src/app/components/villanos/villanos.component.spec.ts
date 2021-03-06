import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillanosComponent } from './villanos.component';

describe('VillanosComponent', () => {
  let component: VillanosComponent;
  let fixture: ComponentFixture<VillanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
