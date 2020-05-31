import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActuPage } from './actu.page';

describe('ActuPage', () => {
  let component: ActuPage;
  let fixture: ComponentFixture<ActuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
